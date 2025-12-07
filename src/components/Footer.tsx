import githubIcon from '../assets/img/github.png'
import linkedinIcon from '../assets/img/linkedin.png'
import downloadIcon from '../assets/img/download.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">MILENA <span className="footer-name">AGOSTINHO</span></h3>
        </div>
        <div className="footer-social">
          <a href="https://github.com/milenaagostinho" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dev-milenaagostinho/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://docs.google.com/document/d/1unZOknQ7PjqqiYwx0k9U8FW12236CVJAZJFVqp4CUOU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Download CV">
            <img src={downloadIcon} alt="Download CV" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{new Date().getFullYear()} © PORTFOLIO MILENA AGOSTINHO. TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    </footer>
  )
}

export default Footer

