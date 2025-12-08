import { } from 'react'
import type { Project } from './Projects'
import Badge from './Badge'
import naoSeCaleImage from '../assets/img/nao-se-cale.png'
import loginADMImage from '../assets/img/LoginADM-nsc.png'
import dashboardADMImage from '../assets/img/DashboardADM-nsc.png'
import page404Image from '../assets/img/page404-nsc.png'
import rabiscoframe1Image from '../assets/img/rabiscoframe1.jpg'
import rabiscoframe2Image from '../assets/img/rabiscoframe2.jpg'
import habilitaFigmaImage from '../assets/img/habilita-figma.png'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null

  // Definir imagens da galeria baseado no projeto
  const getGalleryImages = () => {
    if (project.id === 1) {
      // Projeto "NÃO SE CALE"
      return [naoSeCaleImage, loginADMImage, dashboardADMImage, page404Image]
    }
    if (project.id === 3) {
      // Projeto "Habilita - Interface IOS & Android"
      return [project.image, habilitaFigmaImage]
    }
    if (project.id === 6) {
      // Projeto "interface de smartwatches para idosos"
      return [project.image, rabiscoframe1Image, rabiscoframe2Image]
    }
    // Outros projetos usam apenas a imagem principal
    return [project.image]
  }

  const galleryImages = getGalleryImages()

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
          ×
        </button>
        <div className="modal-content">
          <div className="modal-info">
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-badges">
              {project.tags.map((tag, index) => (
                <Badge key={index} tag={tag} />
              ))}
            </div>
            <p className="modal-description-text">
              {project.id === 1 ? (
                <>
                  • Desenvolvimento do site da iniciativa Não se Cale utilizando React, Vite e Bootstrap, garantindo performance, responsividade e acessibilidade.<br />
                  • Implementação de painel de acesso administrativo para gerenciamento de conteúdo, com autenticação e controle de usuários via Firebase.<br />
                  • Integração com Strapi para modificação do conteúdo da página e postagens de blog e depoimentos.<br />
                  • Desenvolvimento de interface de dashboard de administrador, página de 404 e tela de carregamento via Figma com conceitos e boas práticas de UI/UX.<br />
                  • Uso do Firebase para autenticação, armazenamento e banco de dados, integrando recursos informativos e institucionais para conscientização e engajamento do público com a causa.<br />
                  • Deploy da área administrativa via Azure.
                </>
              ) : project.id === 2 ? (
                <>
                  • Interface da Landing Page de Lançamento do App para iOS e Android Habilita desenvolvida com Figma, garantindo design responsivo e intuitivo.<br />
                  • Desenvolvimento da Landing Page utilizando React, Vite e Tailwind CSS.<br />
                  • Formulário de newsletter feito utilizando Resend.<br />
                  • Deploy da Landing Page via Railway.
                </>
              ) : project.id === 3 ? (
                <>
                  • Desenvolvimento de interface e prototipação da aplicação para iOS e Android Habilita utilizando o Figma, garantindo as boas práticas de UX/UI;
                </>
              ) : project.id === 4 ? (
                <>
                  • Desenvolvimento de interface e prototipação utilizando o Figma;<br />
                  • Desenvolvimento do site institucional com Wordpress e Elementor;
                </>
              ) : project.id === 6 ? (
                <>
                  • Projeto fictício para conclusão do curso do Bootcamp 2025.3 da escola Atlântico Avanti do Instituto Atlântico desenvolvido utilizando os 5 planos de UX: Estratégia, Escopo, Estrutura, Esqueleto e Superfície;<br />
                  • Foi desenvolvido um protótipo de relógio inteligente que visava sanar as maiores dores por parte dos idosos (acima de 65 anos) com smartwatches;<br />
                  • A ferramenta utilizada para desenvolvimento do protótipo foi o Figma;<br />
                  • Foram realizadas as etapas de Desk Research, Matriz CSD, Proto-persona, elaboração de roteiros de entrevistas e entrevistas, transcrição de entrevistas, sintetização de dados com anonimização e randomização de dados, diagrama de afinidades e levantamento de requisitos, fluxos de tarefas, requisitos funcionais e priorização, rabiscoframe e por fim, realização do protótipo navegável (média fidelidade).<br />
                  • Foram realizadas sprints com pequenas entregas semanais com metodologia SCRUM utilizando o Miro;<br />
                  • As reuniões de alinhamento e trabalho foram realizadas via Discord com um canal do squad na comunidade do curso.
                </>
              ) : project.id === 5 ? (
                <>
                  • Desenvolvimento de eCommerce a partir de um protótipo Figma fornecido pela equipe de design;<br />
                  • Realização com Wordpress, Woocommerce e Elementor;
                </>
              ) : project.id === 7 ? (
                <>
                  • Ajustes de responsividade e layout seguindo as boas práticas de UX/UI no site existente da empresa.
                </>
              ) : (
                'descrição aqui'
              )}
            </p>
            <div className="modal-buttons">
              {project.id === 6 && (
                <>
                  <a
                    href="https://www.canva.com/design/DAG2XdXy55M/TDtkM5AC7pcYmYTOVdnB5w/view?utm_content=DAG2XdXy55M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9679b71461"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button modal-button-live"
                  >
                    VER APRESENTAÇÃO
                  </a>
                  <a
                    href="https://www.figma.com/proto/RYzMIXwb1kZMs6TOgSPHD8/Tatsumari-%E6%A3%AE--SQUAD-2----Bootcamp-Atl%C3%A2ntico-2025.3?node-id=126-115&p=f&t=19GBr5iOYRkn51VR-0&scaling=scale-down&content-scaling=fixed&page-id=106%3A18&starting-point-node-id=126%3A115&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button modal-button-live"
                  >
                    VER O PROTÓTIPO
                  </a>
                </>
              )}
              {project.id === 4 && (
                <a
                  href="https://plennapodologiabarueri.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-live"
                >
                  VER AO VIVO
                </a>
              )}
              {project.id === 2 && (
                <a
                  href="https://apphabilita.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-live"
                >
                  VER AO VIVO
                </a>
              )}
              {project.id === 3 && (
                <a
                  href="https://www.figma.com/proto/0CUM0uJb6OAXzadtFcWSYJ/Habilita?node-id=0-1&t=S7PG9w2GAUWTD9SL-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-live"
                >
                  VER PROTÓTIPO
                </a>
              )}
              {project.id === 5 && (
                <a
                  href="https://ishome.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-live"
                >
                  VER AO VIVO
                </a>
              )}
              {project.id === 7 && (
                <a
                  href="https://elloseg.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-live"
                >
                  VER AO VIVO
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-github"
                >
                  VER NO GITHUB
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button modal-button-live"
                >
                  VER AO VIVO
                </a>
              )}
            </div>
          </div>
          <div className="modal-image-gallery">
            <div className="modal-thumbnails">
              {galleryImages.map((image, index) => (
                <a
                  key={index}
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-thumbnail"
                >
                  <img src={image} alt={`${project.title} - Imagem ${index + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectModal

