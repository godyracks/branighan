Branighan Group Real Estate, Design and Build
Overview
The Branighan Group Real Estate, Design and Build project is a modern web application designed to showcase premium properties, architectural designs, and construction services across Kenya. Built with React and Tailwind CSS, the application features a responsive navbar, a dynamic search, location API, web notifications, and a minimalistic UX-UI design across the web app. The project aims to provide an intuitive user experience for exploring minimalist luxury homes, finding homes, listing properties, and engaging with real estate services.

Purpose: Facilitate property browsing, design exploration, and property selling for users in Kenya.
Tech Stack: React.js, Tailwind CSS, Framer Motion, Lucide React icons, Redis, Express.js, Node.js, PostgreSQL database.

Features

Sticky navbar with dark/light mode toggle and mobile drawer navigation.
Hero section with animated property counter and featured property rotation.
Search input with a modal displaying recent searches and a "Clear All" option.
Responsive design optimized for desktop, tablet, and mobile devices.
Smooth animations using Framer Motion for enhanced user engagement.

Getting Started
Prerequisites

Node.js (v18.x or later)
npm or yarn

Installation

Clone the repository:git clone https://github.com/godyracks/branighan.git


Navigate to the project directory:cd branighan


Install dependencies:npm install


Start the development server:npm run dev


Open http://localhost:5173 in your browser to view the application.

Environment Variables
Create a .env file in the root directory and add the following:
API_URL=https://localhost:3000

File Structure
branighan-group-real-estate/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── images/              
│   │   └── screenshots/         
├── src/
│   ├── components/
│   │   ├── common/             # Reusable components (Button, Input)
│   │   ├── Navbar.jsx          # Navbar component with mobile drawer
│   │   ├── Hero.jsx            # Hero section with property counter
│   │       
│   ├── context/                # Context providers
│   │   └── ThemeContext.jsx    # Theme context for dark/light mode            
│   ├── App.jsx                 # Main App component
│   ├── App.css               
│   ├── main.jsx                # Entry point
│   ├── index.css               
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation

Support the Project
If you find this project helpful and would like to support its continued development, consider sending a contribution via M-Pesa. Your support is greatly appreciated and helps keep this project free and open-source for everyone!

For Kenyan Supporters:

Send your contribution to my M-Pesa number: +254112582559 
Use the M-Pesa app or dial *334#, select “Send Money,” enter my number, the amount, and your PIN.





Thank you for supporting open-source development in Kenya!
