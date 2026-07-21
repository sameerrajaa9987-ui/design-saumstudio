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

## Lead capture flow
On submit, the form now: **(1)** saves the lead to a **Google Sheet** + emails
`design@saumstudio.com`, **(2)** fires the **Meta Pixel `Lead`** event, and
**(3)** sends the visitor to **`thank-you.html`** (which has a "Continue on
WhatsApp" button pre-filled with their details). A **honeypot** field named
`company` silently drops bot submissions. The floating WhatsApp button + sticky
mobile Call/WhatsApp bar remain as always-on contact options.

## Google Sheet setup (one-time, ~10 min, free)
Leads are saved via a Google Apps Script Web App. Do this once:

1. Create a new Google Sheet (any name, e.g. "Saum Studio Leads").
2. In it: **Extensions → Apps Script**. Delete the default code.
3. Paste everything from **`google-apps-script.gs`** and click **Save**.
4. **Deploy → New deployment** → gear icon → **Web app**.
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   - Click **Deploy**, then **Authorize access** (approve the Google prompt).
5. Copy the **Web app URL** (ends in `/exec`).
6. Open `index.html`, find `SHEET_ENDPOINT` in the script at the bottom, and
   paste that URL in place of `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`.

That's it — every submission now lands as a row in the sheet and an email to
`design@saumstudio.com`. To change or turn off the email, edit `NOTIFY_EMAIL`
at the top of `google-apps-script.gs` and re-deploy.
> Note: if you later edit the Apps Script, use **Deploy → Manage deployments →
> edit (pencil) → Version: New version** so the same `/exec` URL keeps working.

## Meta Pixel
Pixel `1974769793175960` is installed in the `<head>` of both `index.html` and
`thank-you.html`. It fires `PageView` on load and a **`Lead`** event on the
thank-you page (and at form submit), so ad conversions are tracked.

## To change the receiving WhatsApp number
Edit `WA_NUMBER` in the `<script>` block at the bottom of `index.html`.

## Best-practice structure used
Above-the-fold offer + lead form · message-match to the ad · one goal /
one CTA · trust signals (40+ homes, 8+ yrs, trusted brands) · transparent
pricing · inclusions · process · gallery · social proof · sticky mobile
Call/WhatsApp bar.
