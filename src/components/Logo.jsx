import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className={`logo ${compact ? 'logo--compact' : ''}`}>
      <span className="logo__mark" aria-hidden="true">
        URR
      </span>
      <span className="logo__pill">Ukrainian Retro Rally</span>
    </Link>
  )
}
