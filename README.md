```
authentication
├─ src
│  ├─ config
│  │  ├─ database.js
│  │  ├─ db_connect.ts
│  │  ├─ email.ts
│  │  ├─ redis_client.ts
│  │  └─ token.ts
│  ├─ controllers
│  │  ├─ login.controller.ts
│  │  ├─ logout.controller.ts
│  │  ├─ otp.controller.ts
│  │  ├─ register.controller.ts
│  │  └─ token.controller.ts
│  ├─ db
│  │  ├─ migrations
│  │  │  └─ 20241001025730-create-user.js
│  │  ├─ models
│  │  │  └─ User.ts
│  │  └─ seeders
│  ├─ helpers
│  │  ├─ otp.ts
│  │  └─ password_hash.ts
│  ├─ index.ts
│  ├─ middleware
│  │  └─ protected_route.ts
│  ├─ routes
│  │  └─ v1
│  │     └─ routes.ts
│  ├─ seeders
│  ├─ types
│  │  └─ user.ts
│  └─ validation
│     ├─ otp.ts
│     └─ register.ts
└─ tsconfig.json
```
