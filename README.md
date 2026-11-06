# Enterprise Property Agents — website

A 12-page site built from the content behind the preview link.

## How to look at it

Double-click `index.html`. It opens in your browser — no server, no build step, nothing to install.

## The pages

| File | Page | Source |
|---|---|---|
| `index.html` | Home / Contact | the link you sent |
| `about.html` | Who We Are | About Us |
| `residential.html` | Residential (hub) | Residential |
| `buying.html` | Residential Buying | Residential-Buying |
| `selling.html` | Residential Selling | Residential-Selling |
| `commercial.html` | Commercial & Industrial | **two** source pages, merged |
| `what-we-do.html` | What We Do | What We Do |
| `vendors-advocacy.html` | Vendor's Advocacy | Services / Vendors Advocacy |
| `property-management.html` | Property Management | Property Managment |
| `investment-advice.html` | Investment Advice | Investment Advice |
| `strategic-planning.html` | Strategic Planning | Strategic Planning |
| `wealth-wellbeing.html` | Wealth & Wellbeing for Women | Wealth & Wellbeing |

Plus `assets/css/styles.css` (all styling — colours and fonts are at the top) and
`assets/js/main.js` (menu, scroll effects, contact form).

The source had 13 pages. Two of them — "Services" and "Vendors Advocacy" — were the same page
behind two menu links, and the "Commercial/Industrial" parent and its "Buying" child repeated
most of each other, so those became one page here.

## Content problems in the source — please read this bit

The original site is unfinished in places. I copied the real content faithfully and did **not**
invent business claims to fill gaps. Here's what needs your attention, worst first.

### 1. Three pages were entirely Lorem ipsum

**Property Management**, **Investment Advice** and **Strategic Planning** had no real copy at all —
just placeholder Latin under real headings. I built those pages from genuine copy found elsewhere
on their own site (the property-management paragraph on What We Do, the four service blurbs on the
home page, and the portfolio-strategy language on About). Nothing is invented, but nothing is
confirmed either.

Each of those three files opens with a `⚠ COPY REVIEW NEEDED` comment at the top explaining exactly
what I drew from. **Strategic Planning is the weakest** — I only had three headings to work with.

### 2. The Residential page contradicts the About page

The Residential source page says the company was *"founded in 2015 by Jack Henderson, a leading
Melbourne Buyer's Agent"*. The About page says *"founded in 2009 by a group of like-minded property
investment professionals"*, and the whole rest of the site is East Coast, not Melbourne. Both cannot
be true. I left the 2009 version (it's used consistently everywhere else) and dropped the 2015 claim
rather than publish a contradiction. **Someone needs to confirm which is correct** — a wrong founding
story and a wrong founder name are not small errors on a professional services site.

### 3. Other leftovers from whatever template they built on

- "Metroproperty's experienced people" on Vendor's Advocacy → changed to "Our experienced people".
- "The Elite team" on Residential → removed.
- A timeline of **Amazon company milestones** ("Amazon Prime Services, Feb 2005") and two stray
  headings, "What Is Life Coaching?" and "Who is Coaching For?", sitting on the Commercial page →
  removed.
- "Melbourne's property market" on What We Do, while the rest of the site claims the East Coast →
  made generic. Change it back if Melbourne really is the focus.
- Commercial says ~25% of purchases are off-market; Residential says ~20%. I used 20% on the
  residential pages and left the figure off the commercial page. **Worth confirming the real number** —
  it's a factual claim about their business.
- Typos fixed: "NMany", "anmd", "Finding n inner suburban flat", "the time time", plus a fragment of
  untranslated Latin left mid-sentence in the commercial buying steps.
- Copyright said 2021. The footer now shows the current year automatically.

## Before it goes live — things only you can supply

1. **Phone number.** In `index.html`, search for `Add your phone number` and replace both the visible
   text and the `tel:+61000000000` link.
2. **Email address.** Currently `hello@enterprisepropertyagents.com.au` — a guess from their domain.
   It appears in every page plus `assets/js/main.js`, so search and replace across the folder.
3. **Photos.** There are no photographs anywhere; the source had none. The navy gradient panels are
   placeholders designed to look intentional, but real property and team photos would lift this a lot.

Their real Facebook page **is** now wired into the footer — I found it in the source. There was no
LinkedIn or Instagram, so I removed those icons rather than leave them pointing nowhere.

## The contact form

There's no backend, so the form can't email anyone by itself. Right now it validates the fields and
opens the visitor's email app with the message pre-filled. That works, but some people won't have an
email app set up.

When you want a proper form, a free service like Formspree or Netlify Forms is the cheapest fix: paste
one URL into the `<form>` tag and delete the form block in `main.js`.

## A note for whoever edits this next

The header and footer are duplicated in all 12 HTML files. If you change a menu item, you must change
it in every file. That's the trade-off for a site with no build step — it opens by double-clicking,
but shared bits aren't shared.

## Design notes

- Deep navy, warm gold and cream. Fraunces (serif headings) and Inter (body), free from Google Fonts.
- Fully responsive: dropdown menus on desktop, a full-screen slide-in drawer below 1120px, everything
  to a single column on phones.
- Respects "reduce motion" accessibility settings; has skip-to-content, keyboard focus outlines, and
  dropdowns that open on keyboard focus as well as hover.
