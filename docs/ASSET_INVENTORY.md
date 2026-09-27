# Asset Inventory

## Provided Project Assets

- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/Camp Selah Site v9.dc.html`: primary Camp Selah template source for layout, copy, schedule, FAQ, colors, and interactions.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/assets/photo.jpg`: provided black-and-white hero photograph for the template design.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/uploads/Screenshot 2026-09-04 at 5.39.07 PM.png`: external Youth for God reference screenshot; not a production content source.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/uploads/Screenshot 2026-09-04 at 5.55.21 PM.png`: external Forest Home reference screenshot; not a production content source.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/uploads/Screenshot 2026-09-04 at 5.55.23 PM.png`: external Forest Home split-hero reference screenshot; informs responsive hero treatment only.

## Generated Project Assets

- `public/favicon.png`: browser favicon copied from `src/assets/favicon2.png` for the confirmed YouthForGod Camp brand.

## Local Project Assets

- `src/assets/camp-selah-photo.jpg`: local copy of the provided `assets/photo.jpg`, used as the template hero image and fingerprinted by Vite in production builds. Alt text: "Black-and-white view of a wooded camp building and stone steps."
- `src/assets/updatedLogo2.png`: 381 x 222 PNG compact Youth For God logo, used in the header and footer as the accessible "YouthForGod Camp logo" image.
- `src/assets/logo.png`: 820 x 459 PNG wide Youth For God logo. Available for larger future brand placements; not used in the navigation because its width risks wrapping on mobile.
- `src/assets/favicon2.png`: 173 x 208 PNG Youth For God mark. Source for `public/favicon.png`.
- `src/assets/favicon.png`: 185 x 218 image with JPEG data despite the `.png` extension. Not used until the extension/content mismatch is corrected.

## About Section Photography

The user authorized sourced photography for the four About subsections. These are illustrative stock photos, not photos of YouthForGod Camp or its attendees. Downloaded September 24, 2026 from free Unsplash photo pages under the [Unsplash License](https://unsplash.com/license). Each local JPEG is 960 × 640, cropped and compressed by Unsplash's image delivery service; Vite fingerprints the imports and the page lazy-loads them. No image-generation tool was used.

| Local asset                       | Use and alt text                                                            | Photographer and source                                                                                    |
| --------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `src/assets/about-preaching.jpg`  | Sound preaching: “An open Bible resting on a rustic wooden table.”          | [Sixteen Miles Out](https://unsplash.com/photos/an-open-book-sitting-on-top-of-a-wooden-table-2wsZALRFtuc) |
| `src/assets/about-fellowship.jpg` | Christian fellowship: “A group gathered around a campfire among the trees.” | [Mike Erskine](https://unsplash.com/photos/people-having-a-bonfire-S_VbdMTsdiA)                            |
| `src/assets/about-prayer.jpg`     | Prayer: “Hands clasped in prayer over an open Bible.”                       | [Patrick Fore](https://unsplash.com/photos/man-holding-his-hands-on-open-book-b_SHPU5M3nk)                 |
| `src/assets/about-music.jpg`      | Music: “A musician playing a wooden acoustic guitar.”                       | [42 North](https://unsplash.com/photos/person-playing-guitar--G50vpGzaes)                                  |

## Asset Rules

- Add every provided image, video, font, document, and copy source here before using it in production.
- Record intended use, licensing or source notes, optimization needs, alt text requirements, and whether the asset is approved for launch.
