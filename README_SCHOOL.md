# Kenyan High School Website 🎓

A modern, award-quality educational website built with React and Vite, featuring comprehensive school information, CBC curriculum guidance, and an intelligent book recommendation system.

## 🌟 Features

### Core Pages
- **Home** - Dynamic landing page with quick access cards and gallery
- **Academics** - CBC curriculum framework with course offerings and learning materials marketplace
- **Admissions** - Streamlined admission process with step-by-step guidance and FAQs
- **About** - School history, mission, vision, values, and facilities
- **Books** - AI-powered intelligent book recommendation system (NEW!)
- **Staff** - Staff directory with search functionality
- **Gallery** - Campus photos with category filtering
- **News** - Latest school news and announcements
- **Contact** - Contact form with validation and feedback

### Advanced Features
✨ **Smart Book Recommendation System**
- AI-powered algorithm that considers:
  - Student grade level (Form 1-4)
  - Subject selection (12 subjects)
  - Learning style preference (Practical, Theoretical, Balanced)
  - Book ratings and popularity
- Personalized recommendations with match scores
- No pricing information - focus on finding the right books
- Trending books showcase
- Real-time search and filtering

📚 **CBC Curriculum Content**
- Comprehensive explanation of Kenya's CBC framework
- How CBC works with 4-step workflow
- Course offerings aligned with CBC competencies
- Recommended textbooks with ratings and reviews
- Book bundle information

🎨 **Design & UX**
- Responsive mobile-first design (4 breakpoints)
- Beautiful gradient backgrounds and smooth animations
- Scroll-triggered entrance animations
- Hover effects and interactive states
- Professional typography hierarchy
- Consistent spacing and layout (32px margins)

🔍 **Smart Functionality**
- Search functionality on Staff and News pages
- Contact form with email validation
- Newsletter subscription in footer
- Category filters for Gallery
- User role selection for personalized experience

## 🏗️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite v7.2.5
- **Routing**: React Router
- **Styling**: CSS with CSS-in-JS (inline styles)
- **Animations**: CSS keyframes + IntersectionObserver
- **State Management**: React Hooks (useState, useRef, useEffect, useMemo)
- **Design System**: Custom design tokens (Navy #0A2540, Teal #14B8A6, Gold #FACC15)

## 📋 Pages & Structure

```
src/
├── pages/
│   ├── Home.jsx           # Landing page with hero, features, CTA
│   ├── Academics.jsx      # CBC framework, courses, materials
│   ├── Books.jsx          # AI-powered book recommendation system
│   ├── Admissions.jsx     # Application process and FAQs
│   ├── About.jsx          # School info, mission, values, facilities
│   ├── Staff.jsx          # Staff directory with search
│   ├── Gallery.jsx        # Photo gallery with filters
│   ├── News.jsx           # News listings
│   └── Contact.jsx        # Contact form
├── components/
│   ├── Navbar.jsx         # Navigation with dropdown
│   ├── Footer.jsx         # Footer with newsletter
│   ├── Card.jsx           # Reusable card component
│   ├── SearchBar.jsx      # Search input with clear
│   ├── Newsletter.jsx     # Email subscription
│   ├── Toast.jsx          # Notifications
│   ├── Modal.jsx          # Modal dialogs
│   └── ... (other components)
├── ui/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Container.jsx
├── engine/
│   ├── ContentEngine.jsx
│   ├── IntentDetector.js
│   └── contentModel.js
├── App.jsx                # Main app with routing
├── App.css               # Global styles
└── main.jsx              # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/oppsprompt-sys/kenyan-highschool-website.git
cd kenyan-highschool-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The app will be available at `http://localhost:5174/`

## 📖 Key Features Explained

### AI-Powered Book Recommendation System
The Books page uses a sophisticated JavaScript algorithm to recommend textbooks:

**Scoring Factors:**
- Grade Level (40 points) - Age-appropriate books
- Subject Match (40 points) - Books in selected subjects
- Learning Style (10 points) - Practical vs theoretical alignment
- Trending (5 points) - Popular books boost
- Ratings (5 points) - Quality consideration

**User Flow:**
1. Select role (Student/Parent)
2. Choose Form level (1-4)
3. Select subjects (multi-select)
4. Pick learning style
5. Get personalized recommendations with match scores

### CBC Curriculum Integration
- Complete explanation of Kenya's Competency-Based Curriculum
- How CBC differs from traditional education
- 4-step workflow: Learning Outcomes → Interactive Methods → Continuous Assessment → Summative Evaluation
- 12 recommended CBC-aligned textbooks
- Integration across Academics, Books, and Admissions pages

### Responsive Design Breakpoints
- Mobile (< 480px)
- Tablet (480px - 640px)
- Desktop (640px - 1024px)
- Large (1024px+)

## 🎨 Design System

### Color Palette
- **Primary Navy**: #0A2540
- **Accent Teal**: #14B8A6
- **Highlight Gold**: #FACC15
- **Text Dark**: #1F2937
- **Text Muted**: #6B7280
- **Background Light**: #F9FAFB

### Spacing Scale
- Base unit: 4px
- Standard margins between sections: 32px
- Card padding: 16-20px
- Gap between elements: 12px

### Typography
- Headings: 700-800 fontWeight
- Body: 400-600 fontWeight
- Small text: 12-13px
- Readable line-height: 1.5-1.8

## 📱 Responsive Features

- Mobile-first approach
- Touch-friendly buttons (44x44px minimum)
- Flexible grid layouts with auto-fill/auto-fit
- Responsive navigation with drawer menu
- Images with lazy loading
- Adaptive spacing based on screen size

## 🔄 State Management

Uses React Hooks for efficient state management:
- `useState` - Component state (form data, UI toggles)
- `useRef` - DOM references for animations
- `useEffect` - Side effects and observers
- `useMemo` - Memoized calculations (recommendation algorithm)

## 🎬 Animations

- **Scroll Animations**: IntersectionObserver triggers fade-in effects
- **Hover Effects**: Transform and shadow changes
- **Page Transitions**: Smooth entrance of elements
- **Button States**: Active/disabled visual feedback
- **CSS Keyframes**: Defined in App.css for reusability

## 📧 Contact & Communication

Integration with multiple channels:
- WhatsApp (direct messaging links)
- Email (pre-filled forms)
- Facebook (community links)
- Phone (click-to-call)
- School Portal (contact form)

## 🔐 Security

- Email validation in contact form
- Message length validation
- Safe form submission
- No sensitive data stored client-side
- HTTPS ready

## 📊 Form Validation

**Contact Form:**
- Name: Required
- Email: Valid email format (regex)
- Message: Minimum 10 characters
- Success/error notifications with auto-dismiss

**Newsletter:**
- Email validation
- Loading state during submission
- Success/error feedback

## 🎯 Performance

- Lazy loading for images
- Optimized CSS with utility classes
- Efficient state management with memoization
- Minimal bundle size (Vite optimizations)
- Fast page transitions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is owned by Kenyan High School. All rights reserved.

## 👨‍💻 Contributing

For contributions, please contact the school administration.

## 📞 Support

For technical support or questions:
- WhatsApp: +254 (school number)
- Email: admin@kenyanhighschool.ac.ke
- Visit: Nairobi, Kenya

---

**Built with ❤️ for Kenyan High School**

*Transforming education through technology and innovation*
