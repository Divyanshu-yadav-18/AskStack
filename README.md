# AskStack

**AskStack** is a full-stack Q&A platform inspired by Stack Overflow, built with Next.js and powered by Appwrite.  
It enables users to ask and answer questions, vote, comment, and manage reputation in a modern, scalable way.

---

## ✨ Features

- **User Authentication:** Register and login, powered by Appwrite
- **Ask Questions:** Rich text, tags, and attachments
- **Answers & Comments:** Add and manage responses to questions
- **Voting System:** Upvote/downvote questions and answers, with reputation tracking
- **Reputation Management:** Users earn or lose reputation for contributions and votes
- **Attachments:** Upload images and files to questions (Appwrite Storage)
- **Robust Permissions:** Granular read/write/update/delete access for users
- **Modern UI:** Built with Next.js 13+ App Router

---

## 🛠️ Tech Stack

- **Next.js 13+** (React, App Router, TypeScript)
- **Appwrite** (Database, Auth, Storage, Realtime)
- **Zustand** (State management)
- **Tailwind CSS** (Styling)
- **Node.js** (Backend functions)
- **Vercel** (Deployment)

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Divyanshu-yadav-18/AskStack.git
   cd AskStack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Appwrite**
   - Create a project in [Appwrite](https://appwrite.io/)
   - Set up Database, Auth, and Storage with collections for questions, answers, comments, votes, and attachments
   - Add your Appwrite credentials to an `.env.local` file:
     ```
     NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
     NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_APPWRITE_API_KEY=your-api-key
     ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📂 Detailed Project Structure

```
src/
  ├─ api/                      # Route handlers (Next.js API routes)
  │    ├─ answer/              # POST/DELETE for answers
  │    └─ vote/                # Voting logic for Q&A
  ├─ models/
  │    ├─ name.ts              # Collection and bucket naming constants
  │    ├─ client/              # Appwrite client config for client side
  │    └─ server/              # Database/Storage setup for server side
  │        ├─ dbSetup.ts       # Initialize/connect database and collections
  │        ├─ answer.collection.ts
  │        ├─ question.collection.ts
  │        ├─ storage.setup.ts
  │        └─ config.ts        # Appwrite server-side client
  ├─ store/
  │    └─ auth.ts              # Zustand store for auth and user session
  ├─ (auth)/                   # Auth pages (register, login, etc.)
  ├─ app/                      # Next.js App Router pages (main UI)
  │    └─ page.tsx             # Home page
  └─ models/
       └─ server/
           └─ ...              # Other collection setup (comment, vote, etc.)

public/                        # Static files, images, etc.
.env.local                     # Environment config for Appwrite
```

---

## 🏆 Reputation & Voting Logic

- Voting on questions/answers updates the author’s reputation.
- Votes are tracked per user and per object (question/answer).
- Reputation increases on upvotes, decreases on downvotes.

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
Feel free to fork and improve AskStack.

---

## 👤 Author

Built by [Divyanshu Yadav](https://github.com/Divyanshu-yadav-18)  
A modern Q&A platform for learning and sharing knowledge.

---
