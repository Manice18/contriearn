## ContriEarn

## About

**ContriEarn** is a platform that help to create airdrop campaign where users claim on-chain rewards by proving specific achievements or attributes.

### Features

- **Reward Github Contributors:** Airdrop rewards to repository contributors using Blinks, which can be claimed as part of an airdrop campaign.
- **Reward Loyal Restaurant Customers:** Airdrop rewards to Swiggy customers who have last order from the specified restaurant mentioned in the airdrop campaign using Blinks.

## Bounty Creation and Claim Process

### GitHub:

### Restaurant:

### Blink Routes:

- **/api/actions/restaurant-airdrop?campaignId=_(id here received from blink-airdrop)_** : Helps the restaurant customers to claim the airdrop for the campaigns created from **_/airdrop-campaigns/create-airdrop-campaign_** dashboard.
- **/api/actions/contributor-airdrop?campaignId=_(id created from dashboard)_** : Helps the devs(repository contributors) to claim the airdrop for the campaigns created from **_/airdrop-campaigns/create-airdrop-campaign_** dashboard.

## Navigating The Routes

1. **/signin**: Sign in or sign up with GitHub or Google account.
2. **/airdrop-campaigns**: View on-going airdrop campaigns created by you.
3. **/airdrop-campaigns/create-airdrop-campaign**: Create an airdrop campaign _**Blink**_ to reward customers based on their last order on Swiggy or reward contributors of a GitHub repository.
4. **/settings**: Change your username.

## Working Videos

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
<img height="25" src="https://bookface-images.s3.us-west-2.amazonaws.com/logos/671517b5e6b462702c749bf4c4ec64d45bdd3126.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQC4NIECAC5AP4AWJ%2F20240901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240901T011725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD5%2FWjgkvQzvfTDR2EkpkoBUKK%2FMkd6sX96lNhlz8LEVAIgWaCFpC5Ked2QedLcSgldyXqn5ya7ZnZ%2FLtwW%2B9vMIlgq7gMIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwwMDYyMDE4MTEwNzIiDEY6q2LKpMI1AkYvDSrCA5dFEyvyZuivx4nPpgJhnVNxwJlaFy%2B1iMCKknsNyQlHuRwjUjEosoA51eengyBTcxDdiQT6lQqMyniSvYVDbJwEtIeuV%2B98BtAAAATADAUSAA%2BOj3gpXqMjipzgEvXx6lEAmQ%2FTA7gzNaBOf6NV5%2FVz9adqE3THkSo24yITR1okU7q2UPlR4t1Q%2F7cF08nDixDB0z9fsz%2Bu6gbFCmX0QVXoJnnss7PNJutEUENOzLTy8zOJpEzg6CerQb4q1TET0J7vusDuFNe592G9Az8pKiK5FytlhNM2%2FMfmP9RjxxLR0yKfmMTN75Ws2ifc4rXc4mlTJWFCiXn%2BFlTXFZlRYL0oWL09Sl9soTGyzShQgK3FpZ5W0jGwNypMLXdSApB3dsEM0MEc50jp9PENJ1l5YckFNuo0TDScXHUnFzNutCwjIBA2dzyF4m9jXNzzlTNyvXKN91joW80IXxgTDnIMCmXaU6HmoYI%2Fb0pPTTvz3F%2BHd5H8puVA66Hi%2BPrEb8zykUjx6ekSnvnRZYIHa2jFy63Mqqgh2M0LxIWXpheASn%2FlhDXSGhZTFyUiQiM80TrtgZX1PILozLin3VrD4XTV%2Fswl%2FDCbx862BjqlAT8NbbUX5lzBp2CMmcSX8LE6Cv4QTeeQ1tXQq14b6CyufkRZytvsXhh2ZetqsTOCXsvwjGagTXnsVQcObVBGi6yS1C8CFevE4%2FYorXw9I6fGUDaRZNsNtpQq0Y4kDHDtADB4BhiVAw%2FnWsaIUqgCDvK%2FtCyJzQdjr6%2BdPxLJBW4vsIXuh8oRRDoOStPld8qs32ooRHfnH7f7NIp8GXLsQXtMqsOMlQ%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=9320968d478e99e9fa6e5de0bfbf38038cd439ee241516136e96887ee5987cd3" alt="reclaim-protocol" title="Reclaim Protocol" />
