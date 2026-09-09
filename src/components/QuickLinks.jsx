import { Link } from 'react-router-dom'
import { quickLinks } from '../data/content'
import './QuickLinks.css'

export default function QuickLinks() {
  return (
    <nav className="quick-links" aria-label="Швидкі посилання">
      <div className="quick-links__inner">
        {quickLinks.map((item) => (
          <Link key={item.label} to={item.to} className="quick-links__item">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
