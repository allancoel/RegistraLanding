# Registra Landing Page

Landing page for the Registra app, designed to showcase the app's features and benefits in both Portuguese and English.

## Project Structure

- `index.html` - Portuguese version of the landing page
- `en.html` - English version of the landing page
- `css/styles.css` - Stylesheet
- `js/main.js` - JavaScript for interactive elements
- `images/` - Directory for images
- `sitemap.xml` - XML sitemap with language alternatives
- `robots.txt` - Instructions for search engine crawlers
- `manifest.json` - Web app manifest for progressive web app features

## Features

- Modern, responsive design
- Mobile-friendly layout
- Bilingual (Portuguese and English)
- Interactive elements with smooth animations
- SEO-friendly structure with language alternatives

## Setup & Local Development

1. Clone or download this repository to your local machine
2. Open the folder in your code editor
3. To view the site locally, open `index.html` (Portuguese) or `en.html` (English) in your browser

## Deployment Options

### Option 1: GitHub Pages

1. Create a new GitHub repository
2. Push this code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Your site will be published at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Recommended)

1. Sign up for a free [Netlify](https://www.netlify.com/) account
2. From the Netlify dashboard, click "New site from Git"
3. Connect to your GitHub, GitLab, or Bitbucket account
4. Select the repository
5. Click "Deploy site"
6. Your site will be published with a Netlify subdomain (e.g., `registra.netlify.app`)
7. You can add a custom domain (registraa.com) in the site settings

### Option 3: Vercel

1. Sign up for a free [Vercel](https://vercel.com/) account
2. From the Vercel dashboard, click "New Project"
3. Import your repository from GitHub, GitLab, or Bitbucket
4. Configure your project settings if needed
5. Click "Deploy"
6. Your site will be published with a Vercel subdomain

## Customization

### Colors

To change the color scheme, edit the CSS variables at the top of `css/styles.css`:

```css
:root {
    --primary-color: #3498db;
    --primary-dark: #2980b9;
    --secondary-color: #2ecc71;
    /* other colors */
}
```

### Images

Replace the placeholder images in the `images/` directory with your own:

- `app-preview.png` - Main app screenshot for hero section
- `step1.png`, `step2.png`, `step3.png` - Images for the How It Works section
- `user1.jpg`, `user2.jpg`, `user3.jpg` - User testimonial images

## Making Changes

After making changes to the site:

1. Test locally by opening `index.html` and `en.html` in your browser
2. Make sure to update both language versions when making content changes
3. Commit and push changes to your repository
4. Your deployment platform will automatically update the live site

## SEO Optimization

The site already includes:
- Language alternatives in the sitemap.xml
- Proper language switcher links
- Structured hreflang tags

Additional SEO improvements you can make:
1. Add appropriate meta descriptions to both language versions
2. Add social media meta tags (Open Graph, Twitter Cards)
3. Add structured data for rich snippets

## Analytics

To add Google Analytics:

1. Create a Google Analytics account and get your tracking ID
2. Add the Google Analytics script to the `<head>` section of both `index.html` and `en.html`

## Contact

For questions or support, contact [contact@registraa.com] 