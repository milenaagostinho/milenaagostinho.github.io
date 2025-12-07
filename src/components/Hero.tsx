import heroImage from '../assets/img/hero1.png'
import githubIcon from '../assets/img/github.png'
import linkedinIcon from '../assets/img/linkedin.png'
import downloadIcon from '../assets/img/download.png'
import Particles from './Particles'

const Hero = () => {
  return (
    <section id="sobre-mim" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-greeting">OLÁ, SOU <span className="hero-name">MILENA</span>.</h2>
          <h3 className="hero-title">DESIGNER <span className="hero-title-accent">UX</span> & <span className="hero-title-accent">DEV</span>ELOPER</h3>
          <p className="hero-description">
            ESTUDANTE DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS UNINDO UX E DESENVOLVIMENTO 
            PARA TRANSFORMAR IDEIAS EM INTERFACES INTUITIVAS E FUNCIONAIS.
          </p>
          <div className="hero-social">
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
        <div className="hero-image">
          <img src={heroImage} alt="Milena trabalhando" />
          <Particles />
        </div>
      </div>
    </section>
  )
}

export default Hero

