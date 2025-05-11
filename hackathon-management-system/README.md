# Hackathon Management System

A simple hackathon management system with authentication powered by Clerk.

## Setup

1. Create a Clerk application at [https://clerk.dev](https://clerk.dev)
2. Get your publishable key from the Clerk dashboard
3. Add your publishable key to the `.env` file:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Development

```bash
npm install
npm run dev
```

## Features

- Authentication with Clerk (name, email, password)
- Protected dashboard route
- User profile display
- Logout functionality