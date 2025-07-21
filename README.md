# Modern Portfolio Website

A beautiful, responsive portfolio website built with React.js and Tailwind CSS. Features smooth animations, modern design, and professional presentation.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery
- **Skills Display**: Animated skill bars and technology icons
- **Testimonials**: Client feedback section with ratings
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scripts** - Development and build tools

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit the primary color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your colors
  }
}
```

### Content
Update the content in each component file:
- **Hero.js**: Change name, title, and description
- **About.js**: Update personal information and stats
- **Skills.js**: Modify skills and proficiency levels
- **Projects.js**: Add your own projects
- **Testimonials.js**: Replace with real client feedback
- **Contact.js**: Update contact information

### Images
Replace placeholder images with your own:
- Profile pictures
- Project screenshots
- Client testimonials

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized typography scaling

## ⚡ Performance Features

- **Lazy Loading**: Images and components load as needed
- **Optimized Animations**: Smooth 60fps animations
- **Minified CSS**: Tailwind purges unused styles
- **Code Splitting**: React.lazy for component loading

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Add navigation link in `Navbar.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, feel free to reach out!

---

**Built with ❤️ using React.js and Tailwind CSS** 