import { Link } from 'react-router-dom'
import { asset } from '../utils/asset'
import './Logo.css'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Ukrainian Retro Rally — на головну">
      <img
        className="logo__img"
        src={asset('images/logo-urr.jpg')}
        alt="URR Ukrainian Retro Rally"
        width="168"
        height="100"
      />
    </Link>
  )
}
