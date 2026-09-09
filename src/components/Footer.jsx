import { contact } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        @{contact.igClub} / Ukrainian Retro Rally
      </p>
      <p className="footer__meta">
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
        {' · '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </footer>
  )
}
