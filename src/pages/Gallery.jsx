import PageHero from '../components/PageHero'
import { gallery } from '../data/content'
import './Pages.css'

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Галерея"
        subtitle="Ралійна класика: Москвич, Lancia Integrale, Audi Quattro, Porsche."
      />
      <section className="page-section">
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.src + item.caption} className="gallery-card">
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
