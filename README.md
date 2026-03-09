# Softcoders Website - React Application

A modern, responsive, and feature-rich website for Softcoders Tech Services built with React. This is a complete rebuild of the original www.softcoders.in website with enhanced UI/UX, smooth animations, and WhatsApp integration for all forms.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and React Router for seamless navigation
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **WhatsApp Integration**: All contact forms send data directly to WhatsApp (no backend required)
- **Smooth Animations**: AOS (Animate On Scroll) library for beautiful scroll animations
- **Clean & Modern UI**: Professional design with gradient effects, shadows, and hover animations
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized code and lazy loading for quick page loads

## 📋 Pages Included

1. **Home** - Hero section, services overview, about preview, portfolio showcase, blog, contact form
2. **About** - Company information, values, and team overview
3. **Services** - Detailed service offerings with features
4. **Portfolio** - Filterable project gallery
5. **Career** - Job openings and application form
6. **Contact** - Contact information, form, and Google Maps integration

## 🛠️ Technology Stack

- **React** (v18.2.0)
- **React Router DOM** (v6.20.0)
- **React Icons** (v4.12.0)
- **AOS** (v2.3.4) - Animate On Scroll
- **CSS3** - Custom styling with CSS variables

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Extract the ZIP file
```bash
unzip softcoders-website.zip
cd softcoders-website
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Netlify

1. **Via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

2. **Via Netlify Dashboard**:
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up/Login
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `build` folder

### Deploy to Vercel

1. **Via Vercel CLI**:
```bash
npm install -g vercel
vercel login
vercel
```

2. **Via Vercel Dashboard**:
   - Go to [Vercel](https://vercel.com/)
   - Sign up/Login
   - Click "New Project"
   - Import your Git repository or drag the folder

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/softcoders-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## ⚙️ Configuration

### WhatsApp Number
To change the WhatsApp number for form submissions, update the phone number in these files:
- `src/pages/Home.js` (line ~85)
- `src/pages/Contact.js` (line ~30)
- `src/pages/Career.js` (line ~40)
- `src/components/Footer.js` (line ~15)

Change:
```javascript
const phoneNumber = '918295000455'; // Replace with your number (no + or spaces)
```

### Contact Information
Update contact details in:
- `src/components/Header.js`
- `src/components/Footer.js`
- `src/pages/Contact.js`

### Branding
- Logo text can be changed in `src/components/Header.js`
- Color scheme can be modified in `src/App.css` (CSS variables at the top)

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #0066cc;    /* Main brand color */
  --secondary-color: #ff6b35;  /* Accent color */
  --dark-color: #1a1a2e;       /* Dark backgrounds */
  --light-color: #f8f9fa;      /* Light backgrounds */
  /* ... more colors */
}
```

### Images
Replace placeholder images with your own:
- Current images use `https://via.placeholder.com/`
- Replace with actual image URLs or local images in `src/assets/images/`

### Content
All content can be edited directly in the page components:
- `src/pages/Home.js`
- `src/pages/About.js`
- `src/pages/Services.js`
- `src/pages/Portfolio.js`
- `src/pages/Career.js`
- `src/pages/Contact.js`

## 📱 WhatsApp Integration

The website uses WhatsApp Business API (wa.me links) to send form data:

```javascript
const phoneNumber = '918295000455'; // Format: country code + number (no + or spaces)
const message = `Form Data Here`;
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
```

**Supported Forms:**
- Contact Form
- Career Application Form
- Newsletter Subscription
- General Inquiry Forms

## 🔧 Project Structure

```
softcoders-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ScrollToTop.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   ├── Career.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 📝 Available Scripts

- `npm start` - Runs development server
- `npm run build` - Creates production build
- `npm test` - Runs tests
- `npm run eject` - Ejects from Create React App

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📧 Support

For any questions or issues:
- Email: Info@softcoders.in
- Phone: +91-8295000455
- WhatsApp: +91-8295000455

## 📄 License

© 2021-2026 SoftCoders. All Rights Reserved

## 🤝 Contributing

This is a proprietary project for Softcoders Tech Services. For any modifications or improvements, please contact the development team.

---

**Built with ❤️ by Softcoders Tech Services**

**Note**: Remember to replace all placeholder images and update the WhatsApp phone number before deploying to production!
