"use client";

import { useState, useMemo, useEffect } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  Check,
  Copy,
  ListFilter,
  SquareArrowOutUpRight,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SolanaExplorer from "@/components/Common/SolanaExplorer";
import { shortenWalletAddress } from "@/lib/functions";

type SwiggyCampaignData = {
  id: string;
  airdropCampaignName: string;
  blinkLink: string | null;
  nameOfRestuarant: string;
  tokenMintAddress: string;
  totalAllocatedAmount: number;
  totalClaimedAmount: number | null;
  escrowAddress: string | null;
  perPeopleClaimAmount: number;
  userId: string;
  noOfTimesClaimed: number | null;
};

export default function SwiggyAirdropCampaignTable({
  airdrop,
}: {
  airdrop: SwiggyCampaignData[];
}) {
  const data: SwiggyCampaignData[] = airdrop;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [copied, setCopied] = useState(false);

  const onCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Copied to clipboard");

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const columns: ColumnDef<SwiggyCampaignData>[] = useMemo(
    () => [
      {
        id: "Airdrop Campaign Name",
        accessorKey: "airdropCampaignName",
        header: ({ column }) => (
          <div className="flex items-center space-x-2">
            <span>Campaign Name</span>
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="group px-3 py-1.5 text-start duration-300 dark:hover:bg-black dark:hover:text-white"
            >
              <ArrowUpDown className="h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
            </Button>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.airdropCampaignName}</div>,
      },
      {
        id: "Name Of Restuarant",
        accessorKey: "nameOfRestuarant",
        header: "Name of Restuarant",
        cell: ({ row }) => <div>{row.original.nameOfRestuarant}</div>,
      },
      {
        id: "Blink",
        accessorKey: "blinkLink",
        header: "Blink",
        cell: ({ row }) => {
          return (
            <div className="flex items-center space-x-1">
              <span>
                {(row.original.blinkLink as string).substring(0, 10) + "..."}
              </span>
              <Button
                onClick={() => {
                  onCopy(row.original.blinkLink as string);
                }}
                disabled={copied}
                size="sm"
                className="rounded-full py-1"
              >
                {copied ? (
                  <Check className="size-3" />
                ) : (
                  <Copy className="size-3" />
                )}
              </Button>
            </div>
          );
        },
      },
      {
        id: "Total Allocated Amount",
        accessorKey: "totalAllocatedAmount",
        header: "Total Allocated",
        cell: ({ row }) => (
          <div>{Number(row.original.totalAllocatedAmount).toFixed(2)}</div>
        ),
      },
      {
        id: "Per People Claim Amount",
        accessorKey: "perPeopleClaimAmount",
        header: "Per People Claim Amount",
        cell: ({ row }) => (
          <div>{Number(row.original.perPeopleClaimAmount).toFixed(2)}</div>
        ),
      },
      {
        id: "Token Name",
        accessorKey: "tokenMintAddress",
        header: "Token Name",
        cell: ({ row }) => (
          <div className="flex items-center space-x-2">
            <Avatar className="size-7">
              <AvatarImage
                src={
                  row.original.tokenMintAddress ===
                  "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
                    ? "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    : row.original.tokenMintAddress ===
                        "So11111111111111111111111111111111111111112"
                      ? "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"
                      : ""
                }
              />
              <AvatarFallback>
                {row.original.tokenMintAddress ===
                "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
                  ? "USDC"
                  : row.original.tokenMintAddress ===
                      "So11111111111111111111111111111111111111112"
                    ? "wSOL"
                    : ""}
              </AvatarFallback>
            </Avatar>
            <span>
              {row.original.tokenMintAddress ===
              "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
                ? "USDC"
                : row.original.tokenMintAddress ===
                    "So11111111111111111111111111111111111111112"
                  ? "wSOL"
                  : ""}
            </span>
          </div>
        ),
      },
      {
        id: "Times Claimed",
        accessorKey: "noOfTimesClaimed",
        header: "Times Claimed",
        cell: ({ row }) => (
          <span>
            {row.original.noOfTimesClaimed ? row.original.noOfTimesClaimed : 0}
          </span>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center pb-4 pl-1">
        <Input
          placeholder="Filter Campaign Name..."
          value={
            (table
              .getColumn("Airdrop Campaign Name")
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn("Airdrop Campaign Name")
              ?.setFilterValue(event.target.value)
          }
          className="dark:hover:bg-hoverdark max-w-sm transition-all duration-500 dark:bg-black"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="dark:hover:bg-hoverdark group ml-auto transition-all duration-500 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-accent"
            >
              Filter{" "}
              <ListFilter className="ml-2 h-4 w-4 transition-all duration-300 group-hover:scale-125" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="dark:bg-blacksection">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="dark:hover:bg-hoverdark capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="ml-1 rounded-md border">
        <Table className="dark:bg-blacksection rounded-md bg-white">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="whitespace-nowrap">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="whitespace-nowrap border-b-[0.5px]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Swiggy Airdrop Campaigns.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
