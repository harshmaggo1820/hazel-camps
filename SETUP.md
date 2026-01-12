# 🏕️ Hazel Camps - Web App Setup Guide

## Quick Start (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/harshmaggo1820/hazel-camps.git
cd hazel-camps

# 2. Install dependencies
npm install

# 3. Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local

# 4. Run development server
npm run dev

# 5. Open browser
# App will be live at http://localhost:3000
```

---

## What's Included

✅ **Homepage** - Hero carousel with featured camps  
✅ **Search & Filter** - Advanced search with multiple filters  
✅ **Camp Listings** - 220+ camps with details  
✅ **User Dashboard** - Save favorite camps  
✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Dark Mode Ready** - Tailwind CSS styling  

---

## Project Structure

```
hazel-camps/
├── public/
│   └── images/
├── src/
│   ├── pages/
│   │   ├── index.tsx          (Homepage)
│   │   ├── search-camps.tsx    (Search page)
│   │   ├── about.tsx           (About page)
│   │   ├── login.tsx           (Login)
│   │   └── camps/[id].tsx      (Camp details)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CampCard.tsx
│   │   └── SearchBar.tsx
│   ├── lib/
│   │   ├── mockData.ts         (Sample data)
│   │   └── api.ts              (API calls)
│   └── types/
│       ├── camp.ts
│       └── user.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

---

## Technology Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **API Calls**: Axios
- **Icons**: React Icons
- **Maps**: React Leaflet (optional)

---

## Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## Environment Variables

Create `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## Features to Implement

- [ ] User authentication (login/register)
- [ ] Database integration (PostgreSQL)
- [ ] Backend API endpoints
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Camp management system
- [ ] Reviews and ratings
- [ ] Multi-city expansion
- [ ] Mobile app (React Native)

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

- **AWS**: Use Amplify or EC2
- **Google Cloud**: Cloud Run or App Engine
- **DigitalOcean**: App Platform
- **Railway/Render**: Simple push-to-deploy

---

## Database Setup (PostgreSQL)

```sql
-- Create database
CREATE DATABASE hazel_camps;

-- Create camps table
CREATE TABLE camps (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  city VARCHAR(100),
  state VARCHAR(2),
  age_min INTEGER,
  age_max INTEGER,
  price INTEGER,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Endpoints (To Implement)

```
GET  /api/camps                 - Get all camps
GET  /api/camps/:id             - Get camp details
GET  /api/categories            - Get all categories
POST /api/search                - Search camps
POST /api/auth/login            - User login
POST /api/auth/register         - User registration
POST /api/user/saved-camps      - Save camp
GET  /api/user/dashboard        - Get user dashboard
```

---

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind CSS not working:**
```bash
npm run build
```

---

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/awesome-feature`
3. Commit changes: `git commit -m 'Add awesome feature'`
4. Push to branch: `git push origin feature/awesome-feature`
5. Open Pull Request

---

## License

MIT License - feel free to use this project for commercial use

---

## Support

📧 Email: support@hazelcamps.com  
🐛 Issues: GitHub Issues  
💬 Discord: [Join our community](https://discord.gg/hazelcamps)  

---

**Made with ❤️ by Stark & Kelly - Hazel Camps Founders**
