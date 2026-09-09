import PageHero from '../components/PageHero'
import EventTimeline from '../components/EventTimeline'
import { events } from '../data/content'
import './Pages.css'

export default function Events() {
  return (
    <>
      <PageHero
        title="Події"
        subtitle="Календар клубних стартів, брифінгів і головної події сезону 2026."
      />
      <EventTimeline />
      <section className="page-section">
        <div className="stack">
          {events.map((item) => (
            <article key={item.id} className="event-row">
              <div>
                <span className="tag">{item.status}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="event-row__meta">
                <strong>{item.date}</strong>
                <span>{item.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
