# Next.js Projects Portfolio

This document provides an overview of three Next.js projects: AstraFin, Podcaster, and AI-Form-Builder.

## Table of Contents

1. [AstraFin](#astrafin)

   - [Overview](#astrafin-overview)
   - [Technologies](#astrafin-technologies)
   - [Key Features](#astrafin-features)
   - [Setup Instructions](#astrafin-setup)

2. [Podcaster](#podcaster)

   - [Overview](#podcaster-overview)
   - [Technologies](#podcaster-technologies)
   - [Key Features](#podcaster-features)
   - [Setup Instructions](#podcaster-setup)

3. [AI-Form-Builder](#ai-form-builder)
   - [Overview](#ai-form-builder-overview)
   - [Technologies](#ai-form-builder-technologies)
   - [Key Features](#ai-form-builder-features)
   - [Setup Instructions](#ai-form-builder-setup)

---

<a id="astrafin"></a>

## 1. AstraFin [DEMO](https://astrafin.unknownbug.tech)

<a id="astrafin-overview"></a>

### Overview

AstraFin is a financial analytics dashboard application built with Next.js. It provides visualization tools for financial data with customizable charts and data representation.

<a id="astrafin-technologies"></a>

### Technologies

- **Framework**: Next.js
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Shadcn UI
- **Charts**: Recharts library with custom components
- **TypeScript**: Full TypeScript support

<a id="astrafin-features"></a>

### Key Features

- Interactive financial charts and graphs
- Responsive dashboard design
- Custom chart tooltips and legends
- Color-coded data visualization

<a id="astrafin-setup"></a>

### Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   cd AstraFin
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`

---

<a id="podcaster"></a>

## 2. Podcaster

<a id="podcaster-overview"></a>

### Overview

Podcaster is a modern podcast platform built with Next.js that allows users to discover, listen to, and manage their favorite podcasts.

<a id="podcaster-technologies"></a>

### Technologies

- **Framework**: Next.js
- **Styling**: Tailwind CSS with custom color schemes
- **UI Components**: Shadcn UI
- **TypeScript**: Full TypeScript support

<a id="podcaster-features"></a>

### Key Features

- Podcast discovery and playback
- Custom audio player
- User profiles and preferences
- Modern UI with custom background gradients
- Responsive design for all devices

<a id="podcaster-setup"></a>

### Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   cd Podcaster
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`

---

<a id="ai-form-builder"></a>

## 3. AI-Form-Builder

<a id="ai-form-builder-overview"></a>

### Overview

AI-Form-Builder is an intelligent form creation tool that uses AI to help users design and generate forms effortlessly.

<a id="ai-form-builder-technologies"></a>

### Technologies

- **Framework**: Next.js
- **Authentication**: Clerk
- **Database**: Firebase
- **AI Integration**: Gemini API
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI

<a id="ai-form-builder-features"></a>

### Key Features

- AI-powered form generation
- User authentication and authorization
- Form templates and customization
- Form submissions storage and management
- Responsive design

<a id="ai-form-builder-setup"></a>

### Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   cd AI-Form-Builder
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file with the following variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_clerk_sign_in_url
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_clerk_sign_up_url

   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`

---

## Common Development Commands

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint Code

```bash
npm run lint
```
