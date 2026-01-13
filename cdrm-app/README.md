/my-consultancy-app
├── app/
│   ├── (public)/                  # Public website pages
│   │   ├── page.tsx               # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── blog/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── (dashboard)/               # Protected dashboard
│   │   ├── layout.tsx             # Auth + role guard
│   │   ├── page.tsx               # Dashboard home
│   │   ├── clients/
│   │   │   ├── page.tsx
│   │   │   └── [clientId]/page.tsx
│   │   ├── reports/
│   │   │   ├── page.tsx
│   │   │   └── [reportId]/page.tsx
│   │   └── analytics/page.tsx
│   │
│   └── api/                        # Next.js API routes
│       ├── auth/
│       │   └── firebase/           # Optional server-side auth logic
│       │       └── route.ts
│       ├── users/
│       │   ├── route.ts
│       │   └── [id]/route.ts
│       ├── mongo/                  # MongoDB-based CRUD
│       │   ├── clients/route.ts
│       │   ├── reports/route.ts
│       │   └── datasets/route.ts
│       └── exports/route.ts        # CSV / Excel / PDF exports
│
├── components/                     # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   ├── Table.tsx
│   └── Charts/
│       └── LineChart.tsx
│
├── lib/                             # Utilities & helpers
│   ├── firebase.ts                  # Firebase init
│   ├── auth.ts                      # Firebase auth helpers
│   ├── firestore.ts                 # Firestore helpers
│   ├── mongo.ts                     # MongoDB helpers
│   ├── permissions.ts               # Role-based access
│   └── validators.ts                # Zod / Joi validation
│
├── models/                           # MongoDB schemas
│   ├── User.ts
│   ├── Client.ts
│   ├── Dataset.ts
│   └── Report.ts
│
├── public/                           # Static files (images, PDFs, favicon)
├── styles/                           # Tailwind + DaisyUI
│   ├── globals.css
│   └── tailwind.config.js
├── middleware.ts                     # Route protection
├── .env                              # Environment variables
├── next.config.js                     # Next.js config
├── package.json
└── tsconfig.json



