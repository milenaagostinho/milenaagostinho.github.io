import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <h1 className="header-logo">MILENA <span className="header-name">AGOSTINHO</span></h1>
          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#sobre-mim" className="nav-link" onClick={closeMenu}>SOBRE MIM</a>
          <a href="#projetos" className="nav-link" onClick={closeMenu}>PROJETOS</a>
          <a href="#certificados" className="nav-link" onClick={closeMenu}>CERTIFICADOS</a>
          <a href="#contato" className="nav-link" onClick={closeMenu}>CONTATO</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

