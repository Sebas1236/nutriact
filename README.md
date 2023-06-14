This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Hi!:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## NutriAct

Replace the .env.template variables

## Run as a local database with prisma and mongo

```
1. Install docker
2. Create docker-compose.yml in the main directory with the following:
version: '3.8'
services:

  database:
    image: 'bitnami/mongodb:latest'
    environment:
      - MONGODB_ADVERTISED_HOSTNAME=127.0.0.1
      - MONGODB_REPLICA_SET_MODE=primary
      - MONGODB_ROOT_USER=anyuser
      - MONGODB_ROOT_PASSWORD=anypassword
      - MONGODB_REPLICA_SET_KEY=replicasetkey123
    ports:
      - '27017:27017'
    volumes:
      - 'mongo-db:/bitnami/mongodb'

volumes:
  mongo-db:
3. Run docker-compose up
4. Create in .env DATABASE_URL=mongodb://<USER>:<PASSWORD>@<OWNIP>:27017/<DBNAME>?authSource=admin&directConnection=true
```
