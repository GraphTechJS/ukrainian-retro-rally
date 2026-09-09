import { Link } from 'react-router-dom'
import { homeGallery } from '../data/content'
import './GalleryStrip.css'

export default function GalleryStrip() {
  return (
    <section className="gallery-strip" aria-label="Галерея">
      <div className="gallery-strip__grid">
        {homeGallery.map((item) => (
          <Link key={item.src} to="/galereya" className="gallery-strip__item">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </Link>
        ))}
      </div>
    </section>
  )
}
