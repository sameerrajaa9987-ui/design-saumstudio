# Saum Studio — Campaign Landing Page

A standalone, fast, mobile-first lead-generation landing page for the
"Interior Design Services — 20% OFF" Facebook/Instagram ad campaign.

## Run / preview
Just open `index.html` in any browser — no build step, no server needed.
(It uses the Tailwind CDN + Google Fonts, so an internet connection is needed.)

## How leads come in
- The **form** and every **Book Now / WhatsApp** button open WhatsApp with a
  pre-filled message to **+91 83560 76634**.
- To change the receiving WhatsApp number, edit `WA_NUMBER` in the `<script>`
  block at the bottom of `index.html`.
- The two **Call** buttons use `tel:+918356076634` and `tel:+918698145630`.

## What to update before going live
1. **Reviews** — replace the 4.9 rating + 3 sample reviews (search `replace ... real reviews`)
   with genuine client reviews + real names. Don't run fake reviews in ads.
2. **Before/After** — swap the two slider images for a REAL before/after pair of the
   same room (search `BEFORE / AFTER`). This is the highest-trust element on the page.
3. **Prices / offer** — search for `Lacs` and `20% OFF` to edit.
4. **Inclusions** — edit the `inclusions` array in the script.
5. **Photos** — currently hotlinked Unsplash placeholders. Swap the `src` URLs
   in the hero, inclusions, gallery and before/after for real project photos
   (drop files in `assets/` and point to them).

## Lead capture (when you wire email later)
- The form currently opens **WhatsApp** pre-filled. A **honeypot** field named
  `company` silently drops bot submissions.
- To also save every lead: post the form to a Google Apps Script / Formspree /
  Web3Forms endpoint inside `sendLead()` (then still open WhatsApp). ~15 min, free.
- An always-on **floating WhatsApp button** (bottom-right) + sticky mobile
  Call/WhatsApp bar give visitors three ways to reach you.

## Best-practice structure used
Above-the-fold offer + lead form · message-match to the ad · one goal /
one CTA · trust signals (40+ homes, 8+ yrs, trusted brands) · transparent
pricing · inclusions · process · gallery · social proof · sticky mobile
Call/WhatsApp bar.
