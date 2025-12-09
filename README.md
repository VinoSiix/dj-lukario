# DJ Lukario Portfolio

A stunning, modern DJ portfolio website for DJ Lukario featuring micro animations, interactive elements, and a unique electronic music aesthetic.

## 🎵 Features

### Visual Design
- **Modern Dark Theme**: Sleek black background with vibrant neon accents (pink, cyan, yellow)
- **Glitch Text Effects**: Eye-catching animated title with cyberpunk-inspired glitch animation
- **Gradient Overlays**: Dynamic color gradients throughout the design
- **Responsive Layout**: Fully responsive design that works on all devices

### Micro Animations
- **Loading Screen**: Animated vinyl record spinner with smooth fade-out
- **Scroll Animations**: Fade-in effects triggered by scroll position
- **Hover Effects**: Interactive hover states on all buttons and links
- **Parallax Scrolling**: Hero section with parallax depth effect
- **Counter Animation**: Animated statistics counters in the about section
- **Typing Effect**: Hero subtitle types out character by character

### Interactive Features
- **Smooth Navigation**: Sticky navbar with scroll effects and mobile hamburger menu
- **Music Player UI**: Interactive track cards with play/pause functionality
- **Gallery Lightbox**: Click any gallery image to view in fullscreen lightbox
- **Event Booking**: Modal popups for event ticket information
- **Contact Form**: Functional contact form with success feedback
- **Social Links**: Animated social media icons with hover effects

### Sections
1. **Hero**: Eye-catching landing area with animated title and call-to-action buttons
2. **About**: DJ biography with animated statistics and vinyl decoration
3. **Music**: Latest tracks showcase with interactive play buttons
4. **Events**: Upcoming events timeline with booking functionality
5. **Gallery**: Photo gallery with lightbox viewer
6. **Contact**: Booking form with contact information and social links

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #ff006e;    /* Hot Pink */
    --secondary-color: #00f5ff;  /* Cyan */
    --accent-color: #ffbe0b;     /* Yellow */
    --dark-bg: #0a0a0a;          /* Main background */
    --darker-bg: #050505;        /* Darker background */
    --light-text: #ffffff;       /* White text */
    --gray-text: #b0b0b0;        /* Gray text */
}
```

### Images
All images currently use placeholder images from Picsum Photos. To replace them:

1. **DJ Profile Image**: Replace `https://picsum.photos/seed/djlukario/400/400.jpg` in the about section
2. **Track Covers**: Replace the `track1`, `track2`, etc. seeds in the music section
3. **Gallery Images**: Replace `gallery1`, `gallery2`, etc. seeds in the gallery section

### Content
- **Text Content**: Edit directly in `index.html`
- **Events**: Update event dates, locations, and times in the events section
- **Contact Info**: Update email, phone, and address in the contact section
- **Social Links**: Replace `#` href attributes with actual social media URLs

## 🚀 Getting Started

1. **Download/Clone** the project files
2. **Open `index.html`** in your web browser
3. **No build process required** - it's pure HTML, CSS, and JavaScript

## 📱 Browser Support

- Chrome/Chromium (Recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Optimized Animations**: Uses CSS transforms and opacity for smooth 60fps animations
- **Debounced Scroll Events**: Prevents performance issues with scroll-based animations
- **Lazy Loading**: Images fade in as they load
- **Intersection Observer**: Efficient scroll-triggered animations

## 🎵 Interactive Elements

### Music Cards
- Click the play button to toggle play/pause state
- Cards pulse when "playing"
- Hover effects with image zoom

### Gallery
- Click any image to open in lightbox
- Close with X button, clicking outside, or pressing Escape
- Smooth fade transitions

### Event Cards
- Click "GET TICKETS" for booking modal
- Hover effects with slide animation
- Responsive layout on mobile

### Contact Form
- Functional form validation
- Success message animation
- Auto-reset after submission

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern features including Grid, Flexbox, CSS Variables, and animations
- **Vanilla JavaScript**: No dependencies, pure JS for all interactions
- **Google Fonts**: Orbitron (tech/futuristic) and Rajdhani (modern/clean)
- **Font Awesome**: Icon library for social media and UI icons

### Key CSS Features
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties for easy theming
- Keyframe animations for micro-interactions
- Backdrop filters for glass morphism effects
- Transform and transition animations

### JavaScript Features
- Intersection Observer API for scroll animations
- Event delegation for efficient event handling
- Dynamic DOM manipulation for modals and lightboxes
- Debounced scroll events for performance
- Keyboard navigation support

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

---

**Created with ❤️ for DJ Lukario**
*Electronic Music Producer & DJ*
