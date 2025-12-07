import certificadosIcon from '../assets/img/certificados.png'

const Certificates = () => {
  const certificates = [
    {
      title: 'Bootcamp Experiência do Usuário',
      issuer: 'Escola Atlântico Avanti',
      date: 'Novembro 2025',
      description: 'UX/UI, User Experience (UX), Figma, Teamwork',
      link: 'https://atlanticoavanti.ensinio.com/c/1298611762977700'
    },
    {
      title: 'Voxy Proficiency Achievement Certificate - High Intermediate',
      issuer: 'Voxy',
      date: 'Novembro 2025',
      description: 'Inglês',
      link: 'https://app.voxy.com/certificates/proficiency-test/692637b8cf7ffc33b1a70919/'
    },
    {
      title: 'Bootcamp Desenvolvimento Fullstack React + Node',
      issuer: 'SoulCode Academy',
      date: 'Agosto 2025',
      description: 'React.js, Node.js, JavaScript, HTML, CSS, GitHub, Kanban',
      link: 'https://view.pok.tech/c/d4d1332d-87a9-4ebf-9f74-8eaa032596d6'
    },
    {
      title: 'IA na Prática',
      issuer: 'Rocketseat',
      date: 'Agosto 2024',
      description: 'Inteligência Artificial aplicada',
      link: 'https://app.rocketseat.com.br/certificates/db8719b5-563e-4ff9-9687-24f6c7aabcd3'
    },
    {
      title: 'Git e GitHub: compartilhando e colaborando em projetos',
      issuer: 'Alura',
      date: 'Fevereiro 2024',
      description: 'Git, GitHub, Versionamento',
      link: 'https://cursos.alura.com.br/certificate/6d2b63fd-42df-4161-9555-93235c6c7555'
    },
    {
      title: 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
      issuer: 'Alura',
      date: 'Fevereiro 2024',
      description: 'HTML5, CSS, Desenvolvimento Web',
      link: 'https://cursos.alura.com.br/certificate/7ccd4ac0-d80b-4973-b36b-7434be36bc1d'
    },
    {
      title: 'Imersão Front-End - Interface Spotify com pesquisa funcional',
      issuer: 'Alura',
      date: 'Fevereiro 2024',
      description: 'HTML, CSS, JavaScript, Front-End',
      link: 'https://cursos.alura.com.br/immersion/certificate/71e72cac-32a4-4198-82af-4b7caa9c23aa'
    },
    {
      title: 'EFSET Quick English Check - Score: Intermediate / Upper Intermediate (CEFR B1/B2)',
      issuer: 'EF',
      date: '',
      description: 'Inglês - Nível B1/B2'
    }
  ]

  return (
    <section id="certificados" className="certificates-section">
      <div className="certificates-container">
        <h2 className="skills-title">CERTIFICADOS</h2>
        <div className="certificates-grid">
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              certificate.link ? (
                <a 
                  key={index} 
                  href={certificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-card certificate-card-link"
                >
                  <div className="certificate-icon-wrapper">
                    <img src={certificadosIcon} alt="Certificado" className="certificate-icon" />
                  </div>
                  <div className="certificate-info">
                    {certificate.title && <h3 className="certificate-title">{certificate.title}</h3>}
                    {certificate.issuer && <p className="certificate-issuer">{certificate.issuer}</p>}
                    {certificate.date && <p className="certificate-date">{certificate.date}</p>}
                    {certificate.description && <p className="certificate-description">{certificate.description}</p>}
                  </div>
                </a>
              ) : (
                <div key={index} className="certificate-card">
                  <div className="certificate-icon-wrapper">
                    <img src={certificadosIcon} alt="Certificado" className="certificate-icon" />
                  </div>
                  <div className="certificate-info">
                    {certificate.title && <h3 className="certificate-title">{certificate.title}</h3>}
                    {certificate.issuer && <p className="certificate-issuer">{certificate.issuer}</p>}
                    {certificate.date && <p className="certificate-date">{certificate.date}</p>}
                    {certificate.description && <p className="certificate-description">{certificate.description}</p>}
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="certificate-card">
              <div className="certificate-icon-wrapper">
                <img src={certificadosIcon} alt="Certificado" className="certificate-icon" />
              </div>
              <div className="certificate-info">
                <p className="certificate-placeholder">Adicione seus certificados aqui</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Certificates

