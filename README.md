# BookNest

A multi-page responsive website for a community platform that supports independent bookshops across the UK. Built with semantic HTML5, CSS Grid, and JavaScript form validation.

## About the Project

BookNest is a fictional community hub where readers can discover independent bookstores, register for membership, browse curated subscription services, and stay up to date with literary events. The site was designed with accessibility and mobile responsiveness as core priorities.


## Features

- **9-page static site** with consistent navigation, layout, and branding
- **Responsive design** using CSS Grid and two media query breakpoints (800px, 650px)
- **Mobile navigation** via SlickNav jQuery plugin
- **Client-side form validation** with regex patterns for email, UK postcode, and phone number
- **Dynamic confirmation page** that parses URL query parameters and renders submitted data in a table
- **Accessible markup** — semantic HTML5 elements, alt text on images, and `line-height` tuned for readability
- **Pricing table** on the services page for subscription tiers

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section, offering cards (CSS Grid), featured review, external resource links |
| Services | Subscription tiers with pricing comparison table |
| Bookstores | Featured independent bookshops with images |
| Registration | Multi-field form with real-time jQuery validation |
| Confirmation | Dynamically displays submitted registration data |
| Events & News | Upcoming literary events |
| About Us | Organisation overview |
| Our History | Timeline and background |
| Staff Members | Team profiles |
| User Reviews | Community testimonials |
| Contact Us | Contact information |

## Tech Stack

- HTML5 (semantic elements)
- CSS3 (Grid, Flexbox, media queries, linear gradients, box shadows)
- JavaScript (ES6, jQuery)
- [SlickNav](https://github.com/ComputerWolf/SlickNav) — responsive mobile menu

## Running Locally

No build step required - open `index.html` in a browser, or serve with any static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

## Project Structure

```
booknest/
├── index.html
├── about_us.html
├── bookstores.html
├── confirmation_page.html
├── contact_us.html
├── events.html
├── our_history.html
├── register.html
├── services.html
├── staff_members.html
├── user_reviews.html
├── css/
│   ├── main.css
│   └── slicknav.css
├── js/
│   ├── registration.js
│   └── jquery.slicknav.min.js
└── images/
    ├── logo.png
    ├── bristol_shelf_spine_bookshop.png
    ├── manchester_little_reads_bookshop.png
    └── oxford_red_lantern_bookshop.png
```

## Acknowledgements

- Shadow styling approach informed by [Josh W. Comeau's guide to designing shadows](https://www.joshwcomeau.com/css/designing-shadows/)
- Google Fonts — [Inclusive Sans](https://fonts.google.com/specimen/Inclusive+Sans)
