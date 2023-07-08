
## Car Parking App Documentation

### Overview
The Car Parking App is a web application that allows users to find available parking spots, book parking spaces, and manage their parking history. The app is built using Next.js as the frontend framework, Tailwind CSS for styling, MongoDB as the database for storing parking spot and user information, and Cypress for end-to-end testing.
Make sure you have the following software installed on your system:


## System Requirements
- [Node.js](https://nodejs.org) (>=18.0.0)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- Chrome Browser
- MongoDB(for Admin User)
## Getting Started

First, run the development server:

```bash
npm install
# or
yarn install
# or
pnpm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

```bash
npm run cypress
# or
yarn run cypress
# or
pnpm run cypress
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

##  Features

- User Registration and Authentication:

    Users can create a new account with their personal information.
    Users can log in to their account using their credentials.
    User authentication is implemented using JWT (JSON Web Tokens) for secure access to protected routes.
- Parking Spot Management:

    Users can view a list of available parking spots.
    Users can book a parking spot for a specific date and time.
    Users can view their parking history, including check-in and check-out times.
    Users can cancel a parking reservation.
- Admin Dashboard:

    Admin users have access to an admin dashboard for managing parking spots and user accounts.
    Admins can add new parking spots, update spot information, and delete spots if needed.
    Admins can view a list of all users and their parking histories.
    Admins have additional privileges to manage the application's data.

## Tech Stack

The Car Parking App is built using the following technologies:

- Next.js: Next.js is a React framework for building server-side rendered and statically generated applications. It provides a seamless development experience and supports features like routing, server-side rendering, and API routes.
- Tailwind CSS: Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to rapidly build user interfaces. It allows for easy customization and responsive design.
- MongoDB: MongoDB is a NoSQL database that provides a flexible and scalable solution for storing and managing application data. It is used to store parking spot information, user details, and parking history.
- Cypress: Cypress is an end-to-end testing framework that allows for automated testing of web applications. It provides a simple and intuitive API for writing tests and supports features like mocking and stubbing HTTP requests.

## Python Dependency
- dotenv import load_dotenv
- matplotlib
- MongoClient
- pandas 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Conclusion

The Car Parking App is a full-featured web application built with Next.js, Tailwind CSS, MongoDB, and Cypress. It provides users with a convenient way to find available parking spots, book parking spaces, and manage their parking history. The app's modular architecture and use of modern technologies make it scalable and maintainable. Feel free to explore and customize the app further to meet your specific requirements.

Happy parking!




