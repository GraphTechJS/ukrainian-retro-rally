import { event, timeline } from '../data/content'
import './EventTimeline.css'

export default function EventTimeline() {
  return (
    <section className="timeline-block">
      <div className="timeline-block__badge">
        <span>Наступна подія · {event.season}</span>
      </div>
      <div className="timeline-block__inner">
        <div className="timeline-block__main">
          <h2 className="timeline-block__title">
            {event.name} {event.season}
          </h2>
          <ol className="timeline">
            {timeline.map((step) => (
              <li key={step.n} className="timeline__item">
                <span className="timeline__n">{step.n}</span>
                <span className="timeline__dot" />
                <span className="timeline__label">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
        <aside className="timeline-block__meta">
          <p className="timeline-block__date">{event.date}</p>
          <p className="timeline-block__place">{event.location}</p>
        </aside>
      </div>
    </section>
  )
}
