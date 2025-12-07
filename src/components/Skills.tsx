import skillsImage from '../assets/img/milena-tablet.png'
import htmlIcon from '../assets/img/html.png'
import cssIcon from '../assets/img/css.png'
import javascriptIcon from '../assets/img/javascript.png'
import nodeIcon from '../assets/img/node-16.png'
import reactIcon from '../assets/img/react.png'
import viteIcon from '../assets/img/vite.png'
import postmanIcon from '../assets/img/postman.png'
import framerIcon from '../assets/img/framer.png'
import figmaIcon from '../assets/img/figma.png'
import tailwindIcon from '../assets/img/tailwindcss.png'
import bootstrapIcon from '../assets/img/bootstrap.png'

const Skills = () => {
  const hardSkills = [
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JAVASCRIPT', icon: javascriptIcon },
    { name: 'NODE.JS', icon: nodeIcon },
    { name: 'REACT', icon: reactIcon },
    { name: 'VITE', icon: viteIcon },
    { name: 'POSTMAN', icon: postmanIcon },
    { name: 'FRAMER', icon: framerIcon },
    { name: 'FIGMA', icon: figmaIcon },
    { name: 'TAILWIND CSS', icon: tailwindIcon },
    { name: 'BOOTSTRAP', icon: bootstrapIcon }
  ]

  const softSkills = [
    'TRABALHO EM EQUIPE',
    'COMUNICAÇÃO',
    'PROATIVIDADE',
    'APRENDIZAGEM CONTÍNUA'
  ]

  return (
    <section className="skills">
      <div className="skills-container">
        <div className="hard-skills-wrapper">
          <div className="skills-image">
            <img src={skillsImage} alt="Milena com tablet" />
          </div>
          <div className="skills-content">
            <h2 className="skills-title">HARD SKILLS</h2>
            <div className="skills-grid">
            {hardSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <div className="soft-skills-container">
        <h2 className="skills-title">SOFT SKILLS</h2>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="languages-container">
        <h2 className="skills-title">IDIOMAS</h2>
        <div className="languages-grid">
          <div className="language-card">
            <span className="language-name">INGLÊS</span>
            <span className="language-level">Intermediário Avançado</span>
          </div>
          <div className="language-card">
            <span className="language-name">COREANO</span>
            <span className="language-level">Básico</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

