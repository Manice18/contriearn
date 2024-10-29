## ContriEarn
![thumbnail](https://github.com/user-attachments/assets/ab63214f-e44b-48ce-9aad-9d60322f4f21)


## About

**ContriEarn** is a platform that help to create airdrop campaign where users claim on-chain rewards by proving specific achievements or attributes.

## Features

- **Reward Github Contributors:** Airdrop rewards to repository contributors using Blinks, which can be claimed as part of an airdrop campaign.
- **Reward Loyal Restaurant Customers:** Airdrop rewards to Swiggy customers who have last order from the specified restaurant mentioned in the airdrop campaign using Blinks.

## Airdrop yourself some USDC to try out

Go to Circle USDC faucet and select solana Devnet:
[Circle USDC faucet](https://faucet.circle.com/)

Mint address of USDC: `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`

## Bounty Creation and Claim Process

### GitHub:
![gairdrop1](https://github.com/user-attachments/assets/fff8c971-9396-49b5-933f-9224abade676)
![gairdrop2](https://github.com/user-attachments/assets/b5e01117-9ae0-41fc-81b6-8cc80bc2d27d)

### Restaurant:
![sairdrop1](https://github.com/user-attachments/assets/184238fc-fa0c-4f1d-a313-9ebfe6fe8195)
![sairdrop2](https://github.com/user-attachments/assets/8a0afb7a-be99-4da3-b02a-52158c31ce7a)

### Blink Routes:

- **/api/actions/restaurant-airdrop?campaignId=_(id here received from blink-airdrop)_** : Helps the restaurant customers to claim the airdrop for the campaigns created from **_/airdrop-campaigns/create-airdrop-campaign_** dashboard.
- **/api/actions/contributor-airdrop?campaignId=_(id created from dashboard)_** : Helps the devs(repository contributors) to claim the airdrop for the campaigns created from **_/airdrop-campaigns/create-airdrop-campaign_** dashboard.

## Navigating The Routes

1. **/signin**: Sign in or sign up with GitHub or Google account.
2. **/airdrop-campaigns**: View on-going airdrop campaigns created by you.
3. **/airdrop-campaigns/create-airdrop-campaign**: Create an airdrop campaign _**Blink**_ to reward customers based on their last order on Swiggy or reward contributors of a GitHub repository.
4. **/settings**: Change your username.

## Working Videos

YouTube Link: [here](https://youtu.be/3KqX9-JSZpI)

## How to run the project

- Run the command `cp .env.examples .env` to set up your environment variables.
- Obtain the required environment variables:
  - **DB Variables**: From NeonDB Postgres.
  - **RPC**: From any Solana RPC provider (e.g., Helius).
  - **AUTH_SECRET**: Run `npx auth secret` to generate it.
  - **AUTH_GITHUB_ID** and **AUTH_GITHUB_SECRET**: Register a new OAuth application on GitHub under Developer Settings to get these.apps and Register a new application to get them.
  - **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET**: Register a new OAuth application on google cloud and generate the respective client id and secret for your application.
  - **RECLAIM_APP_SECRET** and **RECLAIM_APP_ID**: Go to [Reclaim Protocol](https://dev.reclaimprotocol.org/) and create a new application and select Github Username as the provider.
- Install dependencies with `npm i`.
- Start the application with `npm run dev`.

### Contract address: `4xMcXKdwTsSrdTKoZBc59dUwpKeCfZyf7DGaMDi8x8Gp`

## Tech-stack Used

<img height="25" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="nextjs" title="NextJS" /> <img height="25" src="https://img.shields.io/badge/Solana-000?style=for-the-badge&logo=Solana&logoColor=9945FF" alt="solana" title="Solana" />
<img height="25" src="https://img.shields.io/badge/web3%20js-F16822?style=for-the-badge&logo=web3.js&logoColor=white" alt="web3js" title="Web3.JS" />
<img height="25" src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcnUI" title="ShadcnUI" />
<img height="25" src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" title="Rust" />
<img height="25" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" title="Typescript" />
<img height="25" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="prisma" title="prisma" />
<img height="25" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql" title="PostgreSQL" />
<img height="25" src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/10/82/34/10823489-77e0-e015-b15f-7bc9e21c09a9/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/512x512bb.jpg" alt="reclaim-protocol" title="Reclaim Protocol" />
