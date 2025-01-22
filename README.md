<div>
  <br />
    <img src="https://github.com/user-attachments/assets/7cff0964-6c02-4af5-aa0c-964b349cc9aa" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="postgresql" />
    <img src="https://img.shields.io/badge/-Upstash-black?style=for-the-badge&logoColor=white&logo=upstash&color=00E9A3" alt="upstash" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A University Library Management System with Admin Panel</h3>

## Tech Stack

- Next.js
- PostgreSQL
- Upstash
- ImageKit
- TypeScript
- Resend
- Tailwind CSS

## <a name="features">Features</a>

### Features of the BookWise Library Management System Project

👉 **Open-source Authentication**: Personalized onboarding flow with email
notifications.

👉 **Home Page**: Highlighted books and newly added books with 3D effects.

👉 **Library Page**: Advanced filtering, search, and pagination for book
discovery.

👉 **Book Detail Pages**: Availability tracking, book summaries, videos, and
suggestions for similar books.

👉 **Profile Page**: Manage accounts, track borrowed books, and download
receipts.

👉 **Onboarding Workflows**: Automated welcome emails when users sign up, with
follow-ups based on inactivity or activity dates.

👉 **Borrow Book Reminder**: Customized email notifications sent before, on, and
after the due date, reminding users to return books or avoid charges.

👉 **Borrow Book Receipt**: Automatically generates a customized PDF receipt
when a book is successfully borrowed.

👉 **Analytics Dashboard**: Statistics, new users, books, borrow requests, and
more.

👉 **All Users Page**: View and manage users, including approving or revoking
access.

👉 **Account Requests Page**: Admin approval for account requests, with email
notifications for user verification.

👉 **All Books Page**: List and manage all library books with advanced search,
pagination, and filters.

👉 **Book Management Forms**: Add new books and edit existing entries.

👉 **Book Details Page**: Detailed book information for administrators.

👉 **Borrow Records Page**: Complete borrow history with pagination and search.

👉 **Role Management**: Change user roles to invite more admins, with email
notifications sent upon role updates.

👉 **Advanced Functionalities**: Caching, rate-limiting, DDoS protection, and
custom notifications.

👉 **Database Management**: Postgres with Neon for scalable and collaborative
database handling.

👉 **Real-time Media Processing**: ImageKit for image and video optimization and
transformations.

👉 **Efficient Caching**: Upstash Redis for caching, workflows, and triggers.

👉 **Database ORM**: Drizzle ORM for simplified and efficient database
interactions.

👉 **Modern UI/UX**: Built with TailwindCSS, ShadCN, and other cutting-edge
tools.

👉 **Technology Stack**: Next.js with TypeScript for scalable development, and
NextAuth for robust authentication.

👉 **Seamless Email Handling**: Resend for automated email communications,
including notifications and updates.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) (Fast, disk space efficient package manager)

**Cloning the Repository**

```bash
git clone https://github.com/francislagares/bookwise-app.git
cd bookwise-app
```

**Installation**

Install the project dependencies using pnpm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following
content along with your accounts private keys:

```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

# Required for workflow
QSTASH_URL=
QSTASH_TOKEN=

# RESEND_TOKEN=
RESEND_TOKEN=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and
Resend credentials. You can obtain these credentials by signing up on the
[ImageKit](https://bit.ly/49zmXkt), [NeonDB](https://fyi.neon.tech/1jsm),
[Upstash](https://upstash.com/?utm_source=jsmastery1), and
[Resend](https://resend.com/).

**Running the Project**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the
project.

# Author

Created by [@francislagares](https://www.linkedin.com/in/francislagares/) - feel
free to contact me!
