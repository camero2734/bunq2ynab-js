# bunq2ynab-js

Inspired by https://github.com/wesselt/bunq2ynab

This is a simple TypeScript project that syncs transactions between [Bunq](https://bunq.com) and [YNAB](https://ynab.com) since
there's not an official integration.

It is intended to be deployed on Cloudflare Workers (free tier), but it can be modified to run pretty much anywhere (e.g. AWS Lambda, Google Cloud Functions, etc.).

It's recommended to run this project on a schedule (e.g. every 10 minutes) to keep your accounts in sync.

## Prerequisites
- Bunq API Key (you can generate one in the bunq app)
- [YNAB API Key](https://app.ynab.com/settings/developer)
- [bun](https://bun.sh)
- [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update)

## Getting Started

Once you have bun installed, you can run the following command to install this project:

```bash
bun install
```

Create a `.dev.vars` file in the root of the project with the following contents:

```
BUNQ_API_KEY=<your bunq api key>
YNAB_API_KEY=<your ynab api key>
ENV=development
NUMBER_OF_TRANSACTIONS_TO_SYNC=200
```

Run the project locally with the following command:

```bash
bun run dev
```

You can then trigger the worker at http://localhost:8787/__scheduled

## Deploying
You first need to create a KV namespace in Cloudflare Workers. This is used
to store the session token for Bunq to avoid having to re-authenticate every time the project runs.

You can do this with the following command:
```bash
bunx wrangler kv:namespace create bunq2ynab
```

You will need to update the `wrangler.toml` file with the namespace ID that was created.

You can deploy the project to Cloudflare Workers with the following command:

```bash
bun run publish
```

Feel free to modify the `crons` trigger in `wrangler.toml` to change how often the project runs (default is every 10 minutes).

## Notes
- This project is not affiliated with Bunq or YNAB.
- This project is not intended to be used for production purposes.

I would recommend running the initial sync locally with `NUMBER_OF_TRANSACTIONS_TO_SYNC` set to 200 (the max) to get all of your recent transactions synced. Then, you can set a lower number (e.g. 15) to keep your accounts in sync when running on a scheduled worker.
