# Requirements

## Confirmed

- Build a clean, fast, responsive, accessible, maintainable camp website.
- The camp name is YouthForGod Camp.
- The camp theme is "Transforming Grace".
- Render the hero theme in a readable sans-serif font, with the Russian translation "Преображающая благодать" directly below the English heading and marked `lang="ru"`.
- The home page has a "What we are about?" section with four distinct subsections: Sound preaching, Christian fellowship, Prayer, and Music. Each has short supporting copy and a relevant sourced photograph. Preserve the November 25-29 introduction; use two columns on wider screens and one on phones.
- Display the four About photos in black and white using a CSS filter.
- Use the four user-supplied photos for About: speaker for Sound preaching, table gathering for Christian fellowship, prayer group for Prayer, and pianist/violinist for Music. Serve optimized WebP copies and preserve the original photographs.
- The main camp verse is Titus 2:11-14 ESV and must be shown on the main home page.
- The confirmed camp date range is November 25-29. The year has not been confirmed.
- The confirmed camp address is `12725 La Porte Rd, Strawberry Valley, CA 95981`.
- The confirmed registration destination is `https://app.camp-paradise.org/`.
- Use React, TypeScript strict mode, Vite, pnpm, Tailwind CSS, shadcn/ui-style primitives, and Lucide React.
- Use real camp content only from provided files and references.
- Do not fabricate dates, pricing, address, schedule, registration, testimonials, contact details, or camp policies.
- Follow test-driven development for each feature.
- Preserve lasting context in documentation and agent handoffs.
- Target WCAG 2.2 AA principles, semantic HTML, keyboard navigation, current major browsers, SEO readiness, and optimized media.

## Historical Phase 0 Placeholder Requirements

- Show only a minimal accessible placeholder proving that the setup works.
- State that final design and camp content are pending provided files.
- Include a keyboard-operable control that proves interactive behavior can be tested.
- Include automated unit/component accessibility coverage and a Playwright smoke test.

## Provided Template Requirements

- Implement the latest provided template from `Christian Youth Camp Templates/Camp Selah Site v9.dc.html` as the current structural design source.
- Use the provided template copy and data as project content except where explicitly superseded by confirmed requirements.
- Keep the design aligned with the v9 template: cream background, forest and gold accents, readable sans-serif hero heading with Russian translation, script-style section headings, centered sticky navigation, YouthForGod Camp logo in the site chrome, diagonal hero image on larger screens, Home/Schedule/FAQ views, schedule day selector, FAQ accordion, and footer.
- Use the provided `assets/photo.jpg` as the hero image.
- Use the provided Youth For God logo assets from `src/assets` for the confirmed YouthForGod Camp brand.
- Treat the uploaded Forest Home screenshots as external design references only; do not copy their brands, logos, or content into the YouthForGod Camp site.
- Make the design mobile and iPad friendly with no horizontal overflow and no incoherent text or navigation wrapping.
- Registration controls must link to the confirmed registration destination and open in a new browser tab.

## Confirmed Teaching Content

- Theme: Transforming Grace.
- Main verse: "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works." Titus 2:11-14 ESV.
- The visible Schedule view uses November 25-29 and the supplied daily timetable translated into English. Teaching entries show sermon titles only, without scripture references or sermon summaries. Keep event times, arrival/departure details, prayer-speaker placeholders, and next-day lights-out notes. The main home-page scripture remains unchanged. See `docs/SCHEDULE.md` for the program.
- Arrivals begin Wednesday at 3:00 PM; departure is Sunday at 3:00 PM. Wednesday's introductory teaching has no confirmed time.
- Wednesday evening: 6:30 PM evening service, 8:00 PM dinner, 9:00 PM fellowship, 11:00 PM tea and sauna, and 12:59 AM lights out the following morning. No Wednesday service leader has been provided.
- Thursday-Saturday share the supplied 12-event timetable. Lesson 1 is at 10:00 AM, lesson 2 at 11:30 AM, and lesson 3 at 5:00 PM. Retain 12:59 AM lights out, interpreted as the following morning from the event order.
- Schedule evening services show their time and event name without "Led by" lines or church attributions. Prayer-hour speakers have not been supplied and should be marked as to be announced.
- Pricing, phone/contact number, transportation, and carpool details are not confirmed and must not be shown as confirmed facts.
- Wednesday: Intro to camp. Explain why we need grace; misconceptions about grace as cheap or as license to sin; grace came at the cost of Jesus's life, urges holiness, and is powerful to transform.
- Thursday: Man's desperate need; the Law condemned and kept us from total corruption; the Law's inability to transform. References include Galatians, Galatians 3:21, and Ezekiel 36.
- Friday: Grace is a free gift of God, not works; Jesus full of grace and truth; the gifts of grace in Titus 2:11-14: bringing salvation to all, training us in righteous living, and creating a heart longing for God's glory and Christ's second coming. References include Romans 3:24, Romans 5:15, 1 John 1, and John 1.
- Saturday: The transforming power of grace; Christ redeems and purifies; creation of a new people, his possession, zealous for good works.
- Sunday: Declare these things, exhort, and rebuke with all authority from Titus 2:15.

## Confirmed FAQs

Show only these four questions and answers in the FAQ accordion, without the old template FAQs or open-house promotion:

- Who is camp for? Camp is for youth church members.
- What to expect? Expect a full program including preaching, worship, fellowship, and great food.
- What to bring? Bible, notebook, bedding, and warm clothes.
- Where is camp? 12725 La Porte Rd, Strawberry Valley, CA 95981

## Open Questions For Provided Camp Files

- Is Selah Fellowship still the confirmed operating organization, or should organization references be removed/replaced?
- What year should be displayed with the confirmed November 25-29 date range, if any?
- Who will preach at the Thursday-Saturday prayer hours, and what time is Wednesday's introductory teaching?
- Are the provided session lengths, ages, prices, phone number, registration details beyond the confirmed URL, place names, transportation details, and policies final or sample template content?
- Are Home, Schedule, and FAQ the only launch views?
- Are there additional images, video, logos, fonts, and brand rules approved for production use?
- What contact information, safety policies, accessibility accommodations, and legal copy must appear beyond the template?
- Are there analytics, cookie consent, privacy, or hosting requirements?
