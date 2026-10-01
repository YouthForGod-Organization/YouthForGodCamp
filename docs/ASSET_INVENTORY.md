# Asset Inventory

## Provided Project Assets

- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/Camp Selah Site v9.dc.html`: primary Camp Selah template source for layout, copy, schedule, FAQ, colors, and interactions.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/assets/photo.jpg`: provided black-and-white hero photograph for the template design.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/uploads/Screenshot 2026-09-04 at 5.39.07 PM.png`: external Youth for God reference screenshot; not a production content source.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/uploads/Screenshot 2026-09-04 at 5.55.21 PM.png`: external Forest Home reference screenshot; not a production content source.
- `/Users/williamvelichko/Downloads/Christian Youth Camp Templates/uploads/Screenshot 2026-09-04 at 5.55.23 PM.png`: external Forest Home split-hero reference screenshot; informs responsive hero treatment only.

## Generated Project Assets

- `public/favicon.png`: browser favicon copied from `src/assets/favicon2.png` for the confirmed YouthForGod Camp brand.

## Hero Artwork

- User-provided and approved October 1, 2026: `/Users/williamvelichko/Pictures/Photos Library.photoslibrary/originals/3/3FC67700-7AEF-4550-8EE9-60D5587E087B.png` (1920 × 1080, 4,445,691 bytes).
- Optimized WebP derivatives: `src/assets/transforming-grace-1920.webp` (1920 × 1080, 655,962 bytes) and `src/assets/transforming-grace-960.webp` (960 × 540, 147,880 bytes). Quality 82 using the existing Chromium canvas encoder, no new dependencies. Original PNG untouched.
- Full-color, uncropped hero artwork with responsive `srcSet`, `sizes="100vw"`, intrinsic dimensions, and high fetch priority. Alt: "Sunlit forest artwork for Transforming Grace." Embedded title/reference remain intact; readable bilingual HTML copy sits below to avoid overlapping the artwork's lettering.
- Supersedes the old black-and-white building hero; existing About photos remain unchanged.

## Local Project Assets

- `src/assets/camp-selah-photo.jpg`: retained local copy of the old template hero, superseded by the supplied Transforming Grace artwork and no longer imported.
- `src/assets/updatedLogo2.png`: 381 x 222 PNG compact Youth For God logo, used in the header and footer as the accessible "YouthForGod Camp logo" image.
- `src/assets/logo.png`: 820 x 459 PNG wide Youth For God logo. Available for larger future brand placements; not used in the navigation because its width risks wrapping on mobile.
- `src/assets/favicon2.png`: 173 x 208 PNG Youth For God mark. Source for `public/favicon.png`.
- `src/assets/favicon.png`: 185 x 218 image with JPEG data despite the `.png` extension. Not used until the extension/content mismatch is corrected.

## About Section Photography

The user supplied and authorized four replacement photos on September 30, 2026. Each derivative is a 1200 × 800 WebP encoded at quality 82 using the existing local Chromium canvas encoder, with proportional sizing and a centered 3:2 crop. No dependency was added. Vite fingerprints the imports; the page lazy-loads them and applies the existing CSS grayscale filter. The original color files in the Photos library are unchanged. The four derivatives total 246,718 bytes, versus 4,325,692 bytes for the originals. No image-generation tool was used.

Source root: `/Users/williamvelichko/Pictures/Photos Library.photoslibrary/originals/`.

| Local asset                       | Source relative to source root                          | Use and alt text                                                                   | Size         |
| --------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------ |
| `src/assets/camp-preaching.webp`  | `0/023421C8-F0A0-45FD-9FAD-6A90843FD751.jpeg` (image 2) | Sound preaching: “A speaker with a headset microphone gesturing behind a lectern.” | 31,366 bytes |
| `src/assets/camp-fellowship.webp` | `5/5C848707-B2FA-4BB4-A76F-9353FC1D60C4.jpeg` (image 3) | Christian fellowship: “A group sharing conversation around a table.”               | 88,370 bytes |
| `src/assets/camp-prayer.webp`     | `8/82BE7DA3-F51A-4D27-9238-B98558C2AF26.jpeg` (image 1) | Prayer: “A group standing together in prayer among rows of chairs.”                | 69,256 bytes |
| `src/assets/camp-music.webp`      | `F/FB33FC1A-F247-4DC0-AF67-BC42F0B0B88C.jpeg` (image 4) | Music: “A pianist and violinist playing music together.”                           | 57,726 bytes |

## Superseded About Stock Photos

These earlier illustrative stock photos are retained locally with their credits but are no longer imported into the page. Downloaded September 24, 2026 from free Unsplash photo pages under the [Unsplash License](https://unsplash.com/license). Each JPEG is 960 × 640.

| Local asset                       | Use and alt text                                                            | Photographer and source                                                                                    |
| --------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `src/assets/about-preaching.jpg`  | Sound preaching: “An open Bible resting on a rustic wooden table.”          | [Sixteen Miles Out](https://unsplash.com/photos/an-open-book-sitting-on-top-of-a-wooden-table-2wsZALRFtuc) |
| `src/assets/about-fellowship.jpg` | Christian fellowship: “A group gathered around a campfire among the trees.” | [Mike Erskine](https://unsplash.com/photos/people-having-a-bonfire-S_VbdMTsdiA)                            |
| `src/assets/about-prayer.jpg`     | Prayer: “Hands clasped in prayer over an open Bible.”                       | [Patrick Fore](https://unsplash.com/photos/man-holding-his-hands-on-open-book-b_SHPU5M3nk)                 |
| `src/assets/about-music.jpg`      | Music: “A musician playing a wooden acoustic guitar.”                       | [42 North](https://unsplash.com/photos/person-playing-guitar--G50vpGzaes)                                  |

## Asset Rules

- Add every provided image, video, font, document, and copy source here before using it in production.
- Record intended use, licensing or source notes, optimization needs, alt text requirements, and whether the asset is approved for launch.
