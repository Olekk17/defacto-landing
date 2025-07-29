# Defacto School Landing Page

This page was created using HTML, CSS (with SASS), and a little bit of JavaScript for the Defacto English School.

## Demo

- [DEMO LINK](https://olekk17.github.io/defacto-landing/)

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

This will start a local development server at `http://localhost:3003`

### Building for Production

```bash
npm run build:prod
```

This will create a `dist` folder with all the production-ready files.

## Deployment to GitHub Pages

### First Time Setup

1. Make sure your repository is pushed to GitHub
2. Run the deployment command:

```bash
npm run deploy
```

This will:

- Build the project for production
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site available at `https://[username].github.io/[repository-name]/`

### Subsequent Deployments

After making changes, simply run:

```bash
npm run deploy
```

### Manual GitHub Pages Setup

If you need to manually configure GitHub Pages:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Set "Source" to "Deploy from a branch"
4. Select "gh-pages" branch and "/" (root) folder
5. Save the settings
