import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import { nav } from '../data/content'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header${open ? ' is-open' : ''}`}>
      <div className="header__bar">
        <Logo />
        <nav className="header__desktop-nav" aria-label="Головне меню">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__link${isActive ? ' is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/podiyi" className="btn btn--yellow header__cta">
          Реєстрація
        </Link>
        <button
          type="button"
          className={`header__burger${open ? ' is-active' : ''}`}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__overlay${open ? ' is-open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />

      <nav
        id="mobile-nav"
        className={`header__drawer${open ? ' is-open' : ''}`}
        aria-label="Мобільне меню"
        aria-hidden={!open}
      >
        {nav.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `header__drawer-link${isActive ? ' is-active' : ''}`
            }
            style={{ '--i': i }}
            onClick={close}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/podiyi"
          className="btn btn--yellow header__drawer-cta"
          style={{ '--i': nav.length }}
          onClick={close}
        >
          Реєстрація
        </Link>
      </nav>
    </header>
  )
}
