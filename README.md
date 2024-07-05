# BuildXpert - A better way to build a website

BuildXpert is a Saas Project that help to create a better and more efficient way to build a website to your clients or own business. It's a project that I'm developing to help me to learn more about the technologies that I'm using and to help me to improve my skills. This project all drag and drop, so you can create a website without any code. BuildXpert can also help to you project management, you can create a project and add your team to work together.

## Technologies

- Next.js
- React
- Typescript
- Shadcn UI (Design System) & Tailwind CSS
- Prisma
- MySQL
- Express
- Clerk (Authentication)
- Tanstack/react-query
- Vercel (Deployment)

## How to run

1. Clone the repository
2. Run `bun` to install the dependencies
3. Create a `.env` file and add the following variables:

```bash
DATABASE_URL="mysql://root:root@localhost:3306/buildxpert"
NEXT_PUBLIC_CLERK_FRONTEND_API="https://<your-clerk-frontend-api>.api.clerk.dev"
CLERK_API_KEY
```

4. Run `bun prisma migrate dev` to create the database
5. Run `bun run dev` to start the development server
