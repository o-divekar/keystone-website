
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Products', '/products'],
  ['Industries', '/industries'],
  ['Our Team', '/team'],
  ['Quality', '/quality'],
  ['Gallery', '/gallery'],
  ['Catalogue', '/catalogue'],
  ['Contact', '/contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>

      <div className="topline">
        <div className="container topline-inner">
          <span>PRECISION SPRING DISTRIBUTION</span>
          <span>Backed by Sai Springs · India</span>
        </div>
      </div>

      <div className="navbar-shell">
        <div className="container nav-wrap">

          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <img
              className="brand-logo"
              src="/logo/keystone-logo.png"
              alt="Keystone Corporation"
            />
          </Link>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? 'main-nav open' : 'main-nav'}>

            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <Link
              className="button button-small nav-cta"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Request a quote
              <ArrowUpRight size={15} />
            </Link>

          </nav>
        </div>
      </div>
    </header>
  )
}
