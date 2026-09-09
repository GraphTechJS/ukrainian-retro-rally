import PageHero from '../components/PageHero'
import { news } from '../data/content'
import './Pages.css'

export default function News() {
  return (
    <>
      <PageHero
        title="Новини"
        subtitle="Анонси реєстрації, маршруту та партнерств Ukrainian Retro Rally."
      />
      <section className="page-section">
        <div className="cards">
          {news.map((item) => (
            <article key={item.id} className="card">
              <div className="card__meta">
                <span className="tag">{item.tag}</span>
                <time>{item.date}</time>
              </div>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
