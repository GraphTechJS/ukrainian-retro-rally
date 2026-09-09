import { Link } from 'react-router-dom'
import { event } from '../data/content'
import { asset } from '../utils/asset'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__bg"
        src={asset('images/hero.png')}
        alt=""
        aria-hidden="true"
      />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="hero__brand" aria-hidden="true">
          URR
        </p>
        <span className="hero__pill">{event.name}</span>
        <p className="hero__tagline">{event.tagline}</p>
        <div className="hero__actions">
          <Link to="/podiyi" className="btn btn--yellow">
            Приєднатися
          </Link>
          <Link to="/galereya" className="btn btn--ghost">
            Дивитись огляд
          </Link>
        </div>
      </div>
    </section>
  )
}
