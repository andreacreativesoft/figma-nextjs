# Project Management Context (PMC)

## Client
**AZ Pro Services** — A local home services company based in Belgium (Brussels, Brabant Wallon, Brabant Flamand) specializing in:
- **Chauffage** (Heating) — Chauffagiste agréé
- **Plomberie** (Plumbing) — Plombier professionnel
- **Débouchage** (Drain cleaning) — Débouchage expert

## Project Overview
We are a **website design agency** creating a commercial website for AZ Pro Services. The website will serve as the company's main online presence for attracting and converting customers.

## Marketing Strategy
The website will be promoted through:
- **Google Ads** — Search and display campaigns
- **Facebook Ads** — Social media advertising
- **SEO** — Organic search through blog content published from the website

## Design System
- **Figma Design System**: Flowbite (fully tokenized)
- **Figma File**: `5xbUbbDaimy6ZZpwgc47mw` (Test Project)
- **Full Page Node**: `6:10743` (Hi-fi homepage, 1440×8121px)

## Tech Stack
- **Framework**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS
- **Component Library**: Flowbite React (official Flowbite components)
- **Font**: Inter (Google Fonts)

## Design Tokens (from Figma)
### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand/950 | `#162455` | Headings, dark navy |
| Brand/700 | `#1447E6` | CTAs, links, buttons |
| Gray/600 | `#52525C` | Body text |
| Gray/200 | `#E4E4E7` | Borders |
| White | `#FFFFFF` | Backgrounds |

### Typography
- **Font Family**: Inter
- **Text Base**: 16px, line-height 1.5
- **Text SM**: 14px, line-height 20px

### Spacing
| Token | Value |
|-------|-------|
| spacing/1.5 | 6px |
| spacing/2.5 | 10px |
| spacing/3 | 12px |
| spacing/4 | 16px |
| spacing/6 | 24px |
| spacing/48 | 192px |

### Border
- **rounded-mdw**: 12px
- **rounded-base**: 12px
- **border-width**: 1px

## Page Sections (Node IDs)
| # | Section | Node ID |
|---|---------|---------|
| 1 | Navbar | `11:1825` |
| 2 | Hero | `6:10745` |
| 3 | Customers logos | `6:10775` |
| 4 | Features (Services) | `6:10784` |
| 5 | Content (About) | `6:10795` |
| 6 | Features (Why Choose Us) | `6:10827` |
| 7 | How it works | `6:10846` |
| 8 | Testimonials | `6:10859` |
| 9 | Features (Trusted Services) | `6:10891` |
| 10 | FAQ Section | `6:10918` |
| 11 | Contact | `9:1759` |
| 12 | Footer | `11:1978` |

## Workflow
1. Extract design context from Figma per section using MCP
2. Implement each section using Flowbite React components
3. Visual inspect each section
4. Refine until 1:1 match with Figma design
