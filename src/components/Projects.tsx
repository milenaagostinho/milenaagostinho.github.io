import { useState } from 'react'
import naoSeCaleImage from '../assets/img/nao-se-cale.png'
import habilitaSiteImage from '../assets/img/habilita-site.png'
import habilitaAppImage from '../assets/img/HabilitaApp-UXUI.png'
import projetoAtlanticoAvantiImage from '../assets/img/projeto-atlanticoavanti.png'
import plennaPodologiaImage from '../assets/img/plenna-podologia-barueri.png'
import isHomeEssenceImage from '../assets/img/is-home-essence.png'
import ellosegImage from '../assets/img/elloseg.png'
import Badge from './Badge'
import ProjectModal from './ProjectModal'

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  isLarge?: boolean
  githubUrl?: string
  liveUrl?: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: 'NÃO SE CALE - GRUPO PETRÓPOLIS',
      description: 'Site da iniciativa Não Se Cale para o Grupo Petrópolis',
      tags: ['REACT', 'NODE', 'BOOTSTRAP', 'PROTOTIPAÇÃO', 'UX/UI'],
      image: naoSeCaleImage,
      isLarge: true,
      liveUrl: 'https://naosecale.grupopetropolis.com.br/'
    },
    {
      id: 2,
      title: 'HABILITA - LANDING PAGE',
      description: 'Landing Page de lançamento para o app de direção Habilita',
      tags: ['REACT', 'NODE', 'VITE', 'TAILWIND CSS', 'UX/UI'],
      image: habilitaSiteImage
    },
    {
      id: 3,
      title: 'Habilita - Interface IOS & Android',
      description: 'Desenvolvimento de interface e prototipação do app de direção Habilita para iOS e Android',
      tags: ['FIGMA', 'UX/UI', 'PROTOTIPAÇÃO'],
      image: habilitaAppImage
    },
    {
      id: 6,
      title: 'interface de smartwatches para idosos',
      description: 'Projeto de estudo de UX/UI para a escola Atlântico Avanti',
      tags: ['UX/UI', 'PROTOTIPAÇÃO', 'FIGMA', 'MIRO', 'TEAMWORK', 'KANBAN'],
      image: projetoAtlanticoAvantiImage
    },
    {
      id: 4,
      title: 'Plenna Podologia Barueri',
      description: 'Desenvolvimento de interface e implantação de site institucional para clínica podológica em Barueri',
      tags: ['FIGMA', 'UX/UI', 'WORDPRESS', 'ELEMENTOR'],
      image: plennaPodologiaImage
    },
    {
      id: 5,
      title: 'Is Home Essence',
      description: 'Desenvolvimento de eCommerce para loja de velas aromáticas e perfumes para ambiente',
      tags: ['WORDPRESS', 'WOOCOMMERCE', 'ELEMENTOR'],
      image: isHomeEssenceImage
    },
    {
      id: 7,
      title: 'ElloSeg - Segurança do Trabalho',
      description: 'Adaptação de design com boas práticas de UX/UI e ajustes de responsividade para o site da empresa',
      tags: ['RESPONSIVIDADE', 'UX/UI', 'WORDPRESS', 'ELEMENTOR'],
      image: ellosegImage
    }
  ]

  const largeProject = projects.find(p => p.isLarge)
  const smallProjects = projects.filter(p => !p.isLarge)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projetos" className="projects">
        <h2 className="projects-title">PROJETOS</h2>
        <div className="projects-container">
          {largeProject && (
            <div 
              className="project-card project-card-large"
              onClick={() => handleProjectClick(largeProject)}
            >
              <div className="project-card-image">
                <img 
                  src={largeProject.image} 
                  alt={largeProject.title}
                />
              </div>
              <div className="project-card-content">
                <div className="project-tags">
                  {largeProject.tags.map((tag, index) => (
                    <Badge key={index} tag={tag} />
                  ))}
                </div>
                <h3 className="project-card-title">{largeProject.title}</h3>
                {largeProject.description && (
                  <p className="project-card-description">{largeProject.description}</p>
                )}
              </div>
            </div>
          )}
          <div className="projects-grid-small">
            {smallProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card project-card-small"
                onClick={() => handleProjectClick(project)}
              >
                <div className={`project-card-image ${project.id === 3 ? 'habilita-app-image' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                  />
                </div>
                <div className="project-card-content">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} tag={tag} />
                    ))}
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.description && (
                    <p className="project-card-description">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}

export default Projects

