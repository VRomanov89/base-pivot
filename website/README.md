# Base Pivot - Montreal Real Estate Intelligence Platform

A clean, modern, SEO-optimized website for Montreal real estate insights, neighborhood intelligence, and decision-making tools.

## Project Overview

This is a highly functional, responsive, and compliant website built with vanilla HTML, CSS, and JavaScript. The site follows best SEO practices and accessibility standards.

### Key Features

- **Responsive Design**: Mobile-first approach with breakpoints at 620px and 1000px
- **SEO Optimized**: Semantic HTML, proper heading hierarchy, meta tags, and structured data
- **Accessible**: WCAG 2.1 compliant with skip links, ARIA labels, and keyboard navigation
- **Performance**: Lightweight, no frameworks, optimized for Core Web Vitals
- **Clean Design**: Professional, modern aesthetic with the Base Pivot design system

## Design System

### Colors

```css
--ink: #0B0F17          /* Primary text */
--slate: #4B5563        /* Secondary text */
--surface: #FFFFFF      /* Main background */
--surfaceMuted: #F7F8F6 /* Muted background */
--border: #E6E8EF       /* Borders and dividers */
--accent: #0F766E       /* Primary accent (Forest) */
--accentHover: #115E59  /* Accent hover state */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **H1**: 36-56px (responsive)
- **H2**: 28-40px (responsive)
- **H3**: 22-28px (responsive)
- **Body**: 16px

## File Structure

```
website/
├── index.html           # Homepage
├── css/
│   ├── global.css       # Design system and utilities
│   ├── navbar.css       # Navigation component
│   ├── footer.css       # Footer component
│   └── homepage.css     # Homepage sections
├── js/
│   ├── navbar.js        # Navigation functionality
│   └── footer.js        # Footer functionality
├── images/              # Image assets
└── README.md            # This file
```

## Components

### Navbar

- Sticky header with scroll state transitions
- Desktop navigation with active page highlighting
- Mobile-responsive with hamburger menu
- Smooth height transition from 72px to 60px on scroll
- Backdrop blur effect for modern look

### Footer

- 4-column grid layout (responsive to 2 columns on tablet, 1 on mobile)
- Brand information with social links
- Navigation links (Explore and Tools)
- Newsletter signup form
- Legal links (Privacy, Terms, Disclaimer, Sources)
- Copyright with dynamic year

### Homepage Sections

1. **Hero**: Split layout with headline, CTAs, and market snapshot card
2. **Positioning**: Statement of purpose with three key value points
3. **Value Props**: Three-card grid explaining core offerings
4. **Newsletter**: Full-width conversion block with feature list
5. **Featured Insights**: Three article cards with labels and summaries
6. **Neighborhoods**: Six quick links to neighborhood pages
7. **Tools**: Four tool cards in 2x2 grid
8. **Methodology**: Trust-building section with sources link
9. **Contact**: Simple CTA for high-intent visitors

## SEO Implementation

### Technical SEO

- Semantic HTML5 elements
- Single H1 per page
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive title tags (50-60 characters)
- Meta descriptions (140-160 characters)
- Open Graph tags for social sharing
- Schema.org structured data (Organization and WebSite)

### On-Page SEO

- Clean URL structure
- Descriptive anchor text (no "click here")
- Alt text for images
- Internal linking to hub pages
- Mobile-responsive design
- Fast loading (no heavy frameworks)

### Accessibility

- Skip to content link
- ARIA labels on navigation elements
- Keyboard-accessible menus
- Screen reader-friendly text
- Focus states for all interactive elements
- Semantic landmarks (header, nav, main, footer)

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

### Optimization Techniques

- No JavaScript frameworks (vanilla JS only)
- Minimal CSS (under 50KB total)
- Font preconnect for Google Fonts
- Efficient CSS Grid and Flexbox layouts
- No layout shift (explicit dimensions where needed)
- Passive scroll listeners

## Getting Started

### View Locally

1. Open `index.html` in a modern web browser
2. For local development, use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with npx)
npx serve

# PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000`

### Customization

#### Update Brand Name

Replace "Base Pivot" throughout the codebase with your actual brand name:

- `index.html`: All instances in text and meta tags
- Update page title and meta descriptions
- Update schema.org structured data

#### Update Social Links

In the footer section of `index.html`, update the social media URLs:

```html
<a class="footer__socialLink" href="YOUR_LINKEDIN_URL" rel="noopener" target="_blank">LinkedIn</a>
<a class="footer__socialLink" href="YOUR_YOUTUBE_URL" rel="noopener" target="_blank">YouTube</a>
<a class="footer__socialLink" href="YOUR_INSTAGRAM_URL" rel="noopener" target="_blank">Instagram</a>
```

#### Update Form Actions

Update the newsletter form action URLs:

```html
<form class="newsletter__form" action="/join" method="get">
```

Change `/join` to your actual signup endpoint or email service integration.

## Next Steps

### Content Pages to Create

Based on the links in the homepage, you'll need to create:

**Core Pages:**
- `/join` - Newsletter signup page
- `/about` - About page
- `/contact` - Contact page
- `/insights` - Insights hub page
- `/neighborhoods` - Neighborhoods hub page
- `/tools` - Tools hub page
- `/market-brief` - Market brief landing page

**Legal Pages:**
- `/privacy` - Privacy policy
- `/terms` - Terms of use
- `/disclaimer` - Disclaimer
- `/sources` - Sources and methodology

**Insight Articles:**
- `/insights/montreal-real-estate-market-trends`
- `/insights/rent-vs-buy-montreal`
- `/insights/inventory-shifts-meaning`

**Neighborhood Pages:**
- `/neighborhoods/plateau-mont-royal`
- `/neighborhoods/verdun`
- `/neighborhoods/rosemont`
- `/neighborhoods/griffintown`
- `/neighborhoods/ahuntsic-cartierville`
- `/neighborhoods/ndg`

**Tool Pages:**
- `/tools/mortgage-affordability-montreal`
- `/tools/rent-vs-buy-montreal`
- `/tools/rental-cash-flow-estimator`
- `/tools/closing-costs-quebec`

### Recommended Enhancements

1. **Add favicon**: Create and add a favicon.svg file
2. **Add OG image**: Create a branded Open Graph image for social sharing
3. **Form integration**: Connect newsletter forms to email service (Mailchimp, ConvertKit, etc.)
4. **Analytics**: Add Google Analytics or privacy-friendly alternative
5. **Search Console**: Set up Google Search Console
6. **Sitemap**: Generate XML sitemap
7. **robots.txt**: Create robots.txt file
8. **404 page**: Create custom 404 error page

## Compliance Notes

### Privacy (Quebec Law 25)

The footer includes links to required legal pages. Ensure you create:

- Privacy Policy (addressing Quebec Law 25 requirements)
- Terms of Use
- Disclaimer (educational purposes, not advice)

### Newsletter Compliance (CASL)

Newsletter forms include:
- Clear value proposition
- "No spam" messaging
- "Unsubscribe anytime" notice

Ensure your email service provider:
- Requires double opt-in
- Includes unsubscribe links
- Identifies your business clearly

## Support

For questions or issues with this codebase, refer to the original design specifications in the `/docs` folder.

---

Built with clean code and attention to detail for the Montreal real estate market.
