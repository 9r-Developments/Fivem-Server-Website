# Fivem Server Website

![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

This is the official website for a FiveM server. The server aims to provide players with a premium, immersive GTA5 role-playing (RP) experience.

## ✨ Features

- Modern single-page application (SPA) built with Vue 3 and Vite
- Route management using Vue Router
- Smooth scrolling animations and interactive effects with AOS and GSAP
- Written in TypeScript for better code quality and maintainability
- Responsive design for various devices

## 🛠️ Tech Stack

- **Frontend:** [Vue.js](https://vuejs.org/) 3, [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Animation:** [GSAP (GreenSock Animation Platform)](https://gsap.com/), [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Styling:** Global CSS
- **Server:** [Express](https://expressjs.com/) (for production deployment)

## 🚀 Quick Start

### Requirements

- [Node.js](https://nodejs.org/) (recommended `^18.0.0 || ^20.0.0 || >=22.0.0`)
- [pnpm](https://pnpm.io/), [yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation and Running

1.  **Clone the repository**

    ```bash
    git clone https://github.com/9r-developments/fivem-server-website.git
    cd 9rdevelopments-website
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```
    Or using pnpm:
    ```bash
    pnpm install
    ```

3.  **Start development server**

    ```bash
    npm run dev
    ```
    The application will run on `http://localhost:5173` (Vite's default port).

### Building the Project

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be located in the `dist` directory.

### Previewing the Production Build

To locally preview the production build, run:

```bash
npm run preview
```

### Deploying to Production

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start the production server**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`. You can change the port by setting the `PORT` environment variable.
   
   ```bash
   PORT=8080 npm start
   ```

## 📁 Project Structure

```
.
├── public/              # Static assets that are copied directly to the build output
├── src/                 # Application source code
│   ├── assets/          # Module-processed static assets (images, fonts, etc.)
│   ├── components/      # Reusable Vue components
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page-level view components
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── style.css        # Global stylesheet
├── .gitignore           # Git ignore file configuration
├── index.html           # HTML entry file
├── package.json         # Project dependencies and scripts
├── server.js            # Express server script (for production)
├── tsconfig.json        # TypeScript compiler configuration
└── vite.config.ts       # Vite configuration file
```

## 🤝 Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the [MIT License](LICENSE). 
