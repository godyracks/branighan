# Branighan Group Real Estate, Design and Build

## Overview
The Branighan Group Real Estate, Design and Build project is a modern web application designed to showcase premium properties, architectural designs, and construction services across Kenya. Built with React and Tailwind CSS, the application features a responsive navbar, a dynamic search, location API,w web notifications and an a minimalistic UX-UI design across the web app. The project aims to provide an intuitive user experience for exploring minimalist luxury homes, finding homes, listing properties and engaging with real estate services.

- **Purpose**: Facilitate property browsing, design exploration, and property selling for users in Kenya.
- **Tech Stack**: React, Tailwind CSS, Framer Motion, Lucide React icons, Redis, Express, Node, PSQL database.

## Features
- Sticky navbar with dark/light mode toggle and mobile drawer navigation.
- Hero section with animated property counter and featured property rotation.
- X-style search input with a modal displaying recent searches and a "Clear All" option.
- Responsive design optimized for desktop, tablet, and mobile devices.
- Smooth animations using Framer Motion for enhanced user engagement.

## Getting Started

### Prerequisites
- Node.js (v14.x or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/branighan-group-real-estate.git
   ```
2. Navigate to the project directory:
   ```bash
   cd branighan-group-real-estate
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
5. Open `http://localhost:3000` in your browser to view the application.

### Environment Variables
Create a `.env` file in the root directory and add the following (if applicable):
```
REACT_APP_API_URL=https://api.branighan-group.com
```

## File Structure
```
branighan-group-real-estate/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── images/              # Place logo images (lightmode.png, darkmode.png) here
│   │   └── screenshots/         # Place the 10 Figma screenshots here (see below)
├── src/
│   ├── components/
│   │   ├── common/             # Reusable components (Button, Input)
│   │   ├── Navbar.jsx          # Navbar component with mobile drawer
│   │   ├── Hero.jsx            # Hero section with property counter
│   │   └── ThemeContext.jsx    # Theme context for dark/light mode
│   ├── context/                # Context providers
│   ├── App.jsx                 # Main App component
│   ├── index.js                # Entry point
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
└── README.txt                  # This file
```

### Figma Screenshots
To document the design process and provide visual references, include 10 Figma screenshots for the following pages/screens. Place these screenshots in the `public/assets/screenshots/` directory:
1. **Home Page (Desktop)** - Full view of the hero section and navbar.
2. **Home Page (Tablet)** - Responsive layout for tablet devices.
3. **Home Page (Mobile)** - Mobile view with open nav drawer.
4. **Houses Page (Desktop)** - Property listings layout.
5. **Houses Page (Mobile)** - Mobile-optimized property list.
6. **Designs Page (Desktop)** - Design gallery or showcase.
7. **Designs Page (Mobile)** - Mobile design view.
8. **About Page (Desktop)** - Company information and team.
9. **Contact Page (Desktop)** - Contact form and details.
10. **Search Modal (Desktop)** - Open search input with recent searches.

Name the files sequentially (e.g., `01-home-desktop.png`, `02-home-tablet.png`, ..., `10-search-modal.png`) for easy reference. Update the `README.txt` with links to these screenshots once uploaded:
```
- [Home Page (Desktop)](/assets/screenshots/01-home-desktop.png)
- [Home Page (Tablet)](/assets/screenshots/02-home-tablet.png)
- ...
- [Search Modal (Desktop)](/assets/screenshots/10-search-modal.png)
```

## Usage
- **Navbar**: Toggle dark/light mode using the sun/moon icon. Open the mobile menu with the menu icon and navigate links.
- **Hero**: Search properties using the input, browse houses, view designs, or sell a property via the buttons. Watch the animated property counter and featured property rotation.
- **Search Input**: Focus the input to see recent searches. Click a search to populate the input, use the "X" to remove a search, or "Clear All" to reset.

## Development
### Running Tests
To run unit tests (if implemented), use:
```bash
npm test
# or
yarn test
```

### Building for Production
Build the project for deployment:
```bash
npm run build
# or
yarn build
```
The build artifacts will be output to the `build/` directory.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request with a clear description of your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Lucide React](https://lucide.dev/) for icons.
- Inspiration from xAI's Grok 3 design principles.