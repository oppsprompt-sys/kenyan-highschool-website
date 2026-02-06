import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContent } from '../engine/ContentEngine'
import Drawer from './Drawer'

export default function Navbar() {
  const { intent, setUserIntent } = useContent()
  const [openMenu, setOpenMenu] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef(null)
  const headerRef = useRef(null)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    function onDocClick(e) {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  useEffect(() => {
    function onScroll() {
      const currentScroll = window.scrollY
      if (!headerRef.current) return
      
      if (currentScroll > lastScrollRef.current) {
        // Scrolling down
        headerRef.current.style.transform = 'translateY(-100%)'
      } else {
        // Scrolling up
        headerRef.current.style.transform = 'translateY(0)'
      }
      lastScrollRef.current = currentScroll
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleMenu(name) {
    setOpenMenu((s) => (s === name ? null : name))
  }

  return (
    <header className="site-header" style={{position:'fixed',top:0,left:0,right:0,margin:'8px'}} ref={headerRef}>
      <div className="brand">
        <Link to="/" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none',color:'inherit'}}>
          <div className="brand__logo">KH</div>
          <div>
            <div className="brand__title">Kenyan Highschool</div>
            <div className="small">Aware • Organized • Quietly smart</div>
          </div>
        </Link>
      </div>

      <nav className="nav" aria-label="Main navigation" ref={navRef}>
        <button className="btn ghost mobile-toggle" onClick={() => setDrawerOpen(true)} aria-label="Open menu" id="mobile-menu-btn">☰</button>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>

        <div className="dropdown">
          <button aria-haspopup="true" aria-expanded={openMenu === 'admissions'} onClick={() => toggleMenu('admissions')}>Admissions ▾</button>
          {openMenu === 'admissions' && (
            <div className="dropdown-menu" role="menu">
              <Link to="/admissions">Overview</Link>
              <Link to="/admissions#requirements">Requirements</Link>
              <Link to="/admissions#fees">Fees</Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button aria-haspopup="true" aria-expanded={openMenu === 'academics'} onClick={() => toggleMenu('academics')}>Academics ▾</button>
          {openMenu === 'academics' && (
            <div className="dropdown-menu" role="menu">
              <Link to="/academics">Overview</Link>
              <Link to="/academics#curriculum">Curriculum</Link>
              <Link to="/academics#programs">Programs</Link>
            </div>
          )}
        </div>

        <NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''}>📚 Books</NavLink>
        <NavLink to="/news" className={({isActive}) => isActive ? 'active' : ''}>News</NavLink>
        <NavLink to="/staff" className={({isActive}) => isActive ? 'active' : ''}>Staff</NavLink>
        <NavLink to="/gallery" className={({isActive}) => isActive ? 'active' : ''}>Gallery</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        <div className="nav-divider" />
        <select value={intent} onChange={(e) => setUserIntent(e.target.value)} aria-label="Select user intent" className="intent-select">
          <option value="public">Public</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
      </nav>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <nav style={{display:'flex',flexDirection:'column',gap:8}}>
          <Link to="/" onClick={() => setDrawerOpen(false)}>Home</Link>
          <Link to="/admissions" onClick={() => setDrawerOpen(false)}>Admissions</Link>
          <Link to="/academics" onClick={() => setDrawerOpen(false)}>Academics</Link>
          <Link to="/books" onClick={() => setDrawerOpen(false)}>📚 Books</Link>
          <Link to="/news" onClick={() => setDrawerOpen(false)}>News</Link>
          <Link to="/staff" onClick={() => setDrawerOpen(false)}>Staff</Link>
          <Link to="/gallery" onClick={() => setDrawerOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>
        </nav>
      </Drawer>
    </header>
  )
}
