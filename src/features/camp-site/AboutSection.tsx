import fellowshipPhoto from '@/assets/camp-fellowship.webp'
import musicPhoto from '@/assets/camp-music.webp'
import prayerPhoto from '@/assets/camp-prayer.webp'
import preachingPhoto from '@/assets/camp-preaching.webp'

import { CAMP_DATE_RANGE } from './content'

const aboutItems = [
  {
    id: 'preaching',
    title: 'Sound preaching',
    description:
      'Sit under sound preaching rooted in Scripture, centered on the grace that transforms.',
    image: preachingPhoto,
    alt: 'A speaker with a headset microphone gesturing behind a lectern.',
  },
  {
    id: 'fellowship',
    title: 'Christian fellowship',
    description:
      'Participate in Christian fellowship. Share conversation and encourage one another in faith.',
    image: fellowshipPhoto,
    alt: 'A group sharing conversation around a table.',
  },
  {
    id: 'prayer',
    title: 'Prayer',
    description:
      'Come before God together in prayer, with gratitude and dependence on His grace.',
    image: prayerPhoto,
    alt: 'A group standing together in prayer among rows of chairs.',
  },
  {
    id: 'music',
    title: 'Music',
    description:
      'Join together in music, lifting our voices in worship and praise.',
    image: musicPhoto,
    alt: 'A pianist and violinist playing music together.',
  },
] as const

export function AboutSection() {
  return (
    <section className="intro-section" aria-labelledby="about-heading">
      <div className="intro-section__inner">
        <h2 className="script-heading" id="about-heading">
          What we are about?
        </h2>
        <p>{CAMP_DATE_RANGE} at YouthForGod Camp.</p>
      </div>
      <div className="about-grid">
        {aboutItems.map((item) => (
          <article
            className="about-card"
            key={item.id}
            aria-labelledby={`about-${item.id}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <div className="about-card__copy">
              <h3 id={`about-${item.id}`}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
