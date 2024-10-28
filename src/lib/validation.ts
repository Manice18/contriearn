import { z } from "zod";

const optionalTextInput = (
  schema: z.ZodString | z.ZodEffects<z.ZodString, string, string>,
) =>
  z
    .union([z.string(), z.undefined()])
    .refine((val) => !val || schema.safeParse(val).success);

const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
});

const createBountySchema = z.object({
  title: z.string().trim().min(1, "Cannot be empty"),
  oneLiner: z.string().trim().min(1, "Cannot be empty"),
  description: z.string().trim().min(1, "Cannot be empty"),
  githubRepo: z.string().trim().min(1, "Cannot be empty"),
  githubIssue: z.string().trim().min(1, "Cannot be empty"),
  // tags: z.array(z.string()).min(1, "Cannot be empty"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  rewardAmount: z.coerce.number().gte(1, "Value must be greater than 0"),
  rewardToken: z.string().min(1, "Cannot be empty"),
  isLive: z.enum(["true", "false"]),
});

const bountySubmissionSchema = z.object({
  submissionDetails: z.string().trim().min(10, "Cannot be empty"),
});

const rewardContributorSchema = z.object({
  airdropCampaignName: z.string().trim().min(1, "Cannot be empty"),
  githubRepo: z.string().trim().min(1, "Cannot be empty"),
  totalContributors: z.coerce.number().gte(1, "Value must be greater than 0"),
  tokenMintAddress: z.string().trim().min(1, "Cannot be empty"),
  totalAllocatedAmount: z.coerce
    .number()
    .gte(1, "Value must be greater than 0"),
});
const githubContributorSchema = z.object({
  airdropCampaignName: z.string().trim().min(1, "Cannot be empty"),
  githubRepo: z.string().trim().min(1, "Cannot be empty"),
  totalContributors: z.coerce.number().gte(1, "Value must be greater than 0"),
  tokenMintAddress: z.string().trim().min(1, "Cannot be empty"),
  totalAllocatedAmount: z.coerce
    .number()
    .gte(0.001, "Value must be greater than 0.001"),
});
const swiggyContributorSchema = z.object({
  airdropCampaignName: z.string().trim().min(1, "Cannot be empty"),
  nameOfRestuarant: z.string().trim().min(1, "Cannot be empty"),
  perPeopleClaimAmount: z.coerce
    .number()
    .gte(1, "Value must be greater than 0"),
  tokenMintAddress: z.string().trim().min(1, "Cannot be empty"),
  totalAllocatedAmount: z.coerce
    .number()
    .gte(0.01, "Value must be greater than 0.001"),
});

export type RewardContributorFormType = z.infer<typeof rewardContributorSchema>;
export type GithubContributorFormType = z.infer<typeof githubContributorSchema>;
export type SwiggyContributorFormType = z.infer<typeof swiggyContributorSchema>;

export type BountySubmissionFormType = z.infer<typeof bountySubmissionSchema>;

export type CreateBountyFormType = z.infer<typeof createBountySchema>;

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export {
  updateProfileSchema,
  createBountySchema,
  githubContributorSchema,
  swiggyContributorSchema,
  bountySubmissionSchema,
  rewardContributorSchema,
};
