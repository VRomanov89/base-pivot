# Base Pivot - Montreal Real Estate Intelligence Platform

A modern, SEO-optimized website providing market insights, neighborhood intelligence, and practical tools for Montreal real estate decisions.

## Project Overview

This project consists of a clean, responsive website built with vanilla HTML, CSS, and JavaScript. The site follows best practices for SEO, accessibility, and performance.

## Features

- **Responsive Design**: Mobile-first approach with fluid layouts
- **SEO Optimized**: Semantic HTML, structured data, and meta tags
- **Accessible**: WCAG 2.1 compliant with keyboard navigation and ARIA labels
- **Fast Performance**: Lightweight code optimized for Core Web Vitals
- **Clean Design**: Professional aesthetic with the BrandName design system

## Project Structure

```
.
├── docs/                    # Design specifications and documentation
│   ├── design/
│   │   ├── brand/          # Brand guidelines
│   │   ├── general/        # General specifications (SEO, etc.)
│   │   ├── footer specifications
│   │   └── navbar specification
│   └── pages/
│       ├── home/           # Homepage specifications
│       └── supporting pages/
├── website/                 # Production website files
│   ├── css/                # Stylesheets
│   ├── js/                 # JavaScript files
│   ├── images/             # Image assets
│   └── index.html          # Homepage
├── vercel.json             # Vercel deployment configuration
└── README.md               # This file
```

## Getting Started

### View Locally

Open `website/index.html` in your browser, or run a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve website

# PHP
php -S localhost:8000 -t website
```

Then navigate to `http://localhost:8000`

### Deploy to Vercel

This project is configured for easy deployment to Vercel:

1. Push this repository to GitHub
2. Import the project in Vercel
3. Set the root directory to `website`
4. Deploy!

## Documentation

Detailed documentation is available in:
- `/website/README.md` - Website implementation details
- `/docs/` - Design specifications and guidelines

## Tech Stack

- HTML5 - Semantic markup
- CSS3 - Modern layouts with Grid and Flexbox
- Vanilla JavaScript - No frameworks
- Google Fonts - Inter typography

## SEO & Performance

- Core Web Vitals optimized
- Structured data (Schema.org)
- Semantic HTML
- Accessible (WCAG 2.1)
- Mobile-responsive
- Fast loading times

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers

## License

Copyright © 2026 BrandName. All rights reserved.

## Contact

For questions about this project, please refer to the documentation in the `/docs` folder.
