import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'
import { nav } from '../data/content'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <button
          type="button"
          className="header__burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__link${isActive ? ' is-active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/podiyi"
            className="btn btn--yellow header__mobile-cta"
            onClick={() => setOpen(false)}
          >
            Реєстрація
          </Link>
        </nav>
        <Link to="/podiyi" className="btn btn--yellow header__cta">
          Реєстрація
        </Link>
      </div>
    </header>
  )
}
