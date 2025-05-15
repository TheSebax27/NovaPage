import { useEffect } from 'react'
import './App.css'
import Threads from './Threads'
import CircularGallery from './CircularGallery'
import Navbar from './components/Navbar'
import MetaTags from './components/MegaTags'
import { lazyLoadImages, optimizeAnimations } from './utils/performance'

const programmingLanguages = [
  { name: "JavaScript", icon: "💛", level: 95, description: "Construcción de aplicaciones front-end interactivas y backends con NodeJS" },
  { name: "TypeScript", icon: "💙", level: 90, description: "Desarrollo seguro de tipos para aplicaciones robustas" },
  { name: "Python", icon: "🐍", level: 85, description: "Análisis de datos, machine learning y desarrollo backend" },
  { name: "React", icon: "⚛️", level: 95, description: "Desarrollo de UI basada en componentes" },
  { name: "PHP", icon: "🐘", level: 80, description: "Desarrollo de aplicaciones web del lado del servidor" },
  { name: "SQL", icon: "🗄️", level: 85, description: "Diseño de bases de datos y optimización de consultas" },
  { name: "Go", icon: "🐹", level: 75, description: "Aplicaciones de servidor de alto rendimiento" },
  { name: "Rust", icon: "🦀", level: 70, description: "Programación a nivel de sistema con garantías de seguridad" }
];

const projectTypes = [
  {
    title: "Aplicaciones Web",
    description: "Soluciones full-stack desde el concepto hasta la implementación",
    icon: "🌐",
    examples: ["Plataformas de comercio electrónico", "Sistemas CRM", "Aplicaciones SaaS"]
  },
  {
    title: "Aplicaciones Móviles",
    description: "Experiencias móviles nativas y multiplataforma",
    icon: "📱",
    examples: ["Aplicaciones iOS", "Aplicaciones Android", "Apps con React Native"]
  },
  {
    title: "Visualización de Datos",
    description: "Dashboards interactivos e interfaces basadas en datos",
    icon: "📊",
    examples: ["Herramientas de inteligencia empresarial", "Analítica en tiempo real", "Gráficos interactivos"]
  },
  {
    title: "Desarrollo de APIs",
    description: "Servicios backend robustos y escalables",
    icon: "🔌",
    examples: ["APIs RESTful", "Endpoints GraphQL", "Microservicios"]
  }
];

const projects = [
  {
    title: "Sistema CRM Empresarial",
    category: "Aplicación Web",
    description: "Plataforma integral de gestión de relaciones con clientes con análisis avanzados",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    image: "https://picsum.photos/seed/crm/800/600"
  },
  {
    title: "App de Comercio Electrónico",
    category: "Aplicación Móvil",
    description: "Experiencia de compra multiplataforma con recomendaciones impulsadas por IA",
    technologies: ["React Native", "Firebase", "Node.js", "TensorFlow"],
    image: "https://picsum.photos/seed/ecom/800/600"
  },
  {
    title: "Dashboard Financiero",
    category: "Visualización de Datos",
    description: "Plataforma de análisis financiero en tiempo real para profesionales de inversión",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    image: "https://picsum.photos/seed/dash/800/600"
  },
  {
    title: "API de Salud",
    category: "Desarrollo de API",
    description: "API compatible con HIPAA para la gestión de registros electrónicos de salud",
    technologies: ["Go", "PostgreSQL", "Docker", "Kubernetes"],
    image: "https://picsum.photos/seed/health/800/600"
  },
  {
    title: "Sistema de Monitoreo IoT",
    category: "Web & IoT",
    description: "Sistema de monitoreo y control en tiempo real para dispositivos IoT industriales",
    technologies: ["MQTT", "React", "Node.js", "TimescaleDB"],
    image: "https://picsum.photos/seed/iot/800/600"
  },
  {
    title: "Sistema de Gestión de Aprendizaje",
    category: "Plataforma Educativa",
    description: "Plataforma integral de e-learning con entrega de contenido interactivo",
    technologies: ["Django", "React", "PostgreSQL", "WebRTC"],
    image: "https://picsum.photos/seed/edu/800/600"
  }
];

function App() {
  useEffect(() => {
    // Inicializar optimizaciones de rendimiento
    const settings = optimizeAnimations();
    // Utilizamos settings en los componentes que necesiten ajustes de animación
    console.log("Nivel de animación:", settings.animationLevel);
    
    // Configurar carga diferida para imágenes
    const imageObserver = lazyLoadImages();
    
    return () => {
      // Limpiar observador si es necesario
      if (imageObserver) {
        imageObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="app-container">
      {/* Meta Tags SEO */}
      <MetaTags 
        title="NOVA | Soluciones Digitales Profesionales"
        description="NOVA ofrece desarrollo web de vanguardia, aplicaciones móviles y soluciones digitales para empresas modernas."
      />
      
      {/* Navegación */}
      <Navbar transparent={true} />

      {/* Sección Hero con fondo de Threads */}
      <section className="hero-section">
        <div className="threads-background">
          <Threads 
            color={[0.15, 0.3, 0.6]} 
            amplitude={1.2} 
            distance={0.2} 
            enableMouseInteraction={true} 
          />
        </div>
        <div className="hero-content">
          <h1 className="company-name">NOVA</h1>
          <p className="tagline">Transformando ideas en excelencia digital</p>
          <div className="hero-cta">
            <button className="cta-button primary">Explorar Proyectos</button>
            <button className="cta-button secondary">Contáctanos</button>
          </div>
        </div>
        <div className="scroll-prompt">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Desplázate para explorar</div>
        </div>
      </section>

      {/* Sobre Nosotros - Movido arriba para mejor flujo */}
      <section className="about-section" id="about">
        <div className="section-container">
          <div className="section-header">
            <h2>Sobre <span className="highlight">Nova</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-lead">Somos un equipo de desarrolladores y diseñadores apasionados que creamos soluciones digitales que elevan empresas y experiencias de usuario.</p>
              <p>Desde nuestra fundación, nos hemos dedicado a crear software de la más alta calidad, combinando experiencia técnica con diseño centrado en el ser humano. Nuestro enfoque fusiona creatividad con funcionalidad para ofrecer soluciones que no solo funcionan perfectamente, sino que también inspiran y deleitan.</p>
              <p>En Nova, creemos que la tecnología debe ser poderosa y accesible. Nuestras soluciones están diseñadas para impulsar tu negocio hacia adelante mientras brindan experiencias fluidas para tus usuarios y clientes.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Clientes Satisfechos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Soporte y Mantenimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Actualizado con presentación más profesional */}
      <section className="services-section" id="services">
        <div className="section-container">
          <div className="section-header">
            <h2>Nuestros <span className="highlight">Servicios</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Desarrollo Web</h3>
              <p>Creamos sitios web y aplicaciones web responsivas y de alto rendimiento que impulsan el crecimiento del negocio.</p>
              <ul className="service-features">
                <li>Aplicaciones web personalizadas</li>
                <li>Soluciones de comercio electrónico</li>
                <li>Aplicaciones web progresivas</li>
                <li>Desarrollo de CMS</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Desarrollo Móvil</h3>
              <p>Construimos aplicaciones móviles nativas y multiplataforma que proporcionan experiencias de usuario fluidas.</p>
              <ul className="service-features">
                <li>Aplicaciones iOS y Android</li>
                <li>Soluciones multiplataforma</li>
                <li>Diseño UI/UX móvil</li>
                <li>Optimización para App Store</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Consultoría UX/UI</h3>
              <p>Diseñamos experiencias de usuario intuitivas y atractivas que convierten visitantes en clientes.</p>
              <ul className="service-features">
                <li>Investigación de usuarios</li>
                <li>Wireframing y prototipado</li>
                <li>Pruebas de usabilidad</li>
                <li>Diseño de interfaces</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Soluciones DevOps</h3>
              <p>Optimizamos flujos de trabajo de desarrollo con integración continua y pipelines de despliegue.</p>
              <ul className="service-features">
                <li>Implementación CI/CD</li>
                <li>Configuración de infraestructura cloud</li>
                <li>Containerización</li>
                <li>Optimización de rendimiento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección - Tecnologías y Lenguajes de Programación */}
      <section className="technologies-section" id="technologies">
        <div className="section-container">
          <div className="section-header">
            <h2>Nuestro <span className="highlight">Stack Tecnológico</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Trabajamos con una amplia gama de tecnologías para ofrecer soluciones óptimas</p>
          </div>
          <div className="languages-grid">
            {programmingLanguages.map((lang, index) => (
              <div className="language-card" key={index}>
                <div className="language-icon">{lang.icon}</div>
                <h3>{lang.name}</h3>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: `${lang.level}%` }}></div>
                </div>
                <p>{lang.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva sección - Tipos de Proyectos */}
      <section className="project-types-section" id="project-types">
        <div className="section-container">
          <div className="section-header">
            <h2>Categorías de <span className="highlight">Proyectos</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Soluciones especializadas adaptadas a las necesidades de tu negocio</p>
          </div>
          <div className="project-types-container">
            {projectTypes.map((type, index) => (
              <div className="project-type-card" key={index}>
                <div className="project-type-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <div className="examples-container">
                  {type.examples.map((example, i) => (
                    <span className="example-tag" key={i}>{example}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Galería Circular */}
      <section className="gallery-section" id="gallery">
        <div className="section-container">
          <div className="section-header">
            <h2>Trabajos <span className="highlight">Destacados</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Explora nuestros proyectos en una galería interactiva</p>
          </div>
          <div className="gallery-wrapper">
            <CircularGallery 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05}
              items={projects.map(p => ({ image: p.image, text: p.title }))}
            />
          </div>
        </div>
      </section>

      {/* Proyectos - Presentación mejorada */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2>Nuestro <span className="highlight">Portafolio</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Una selección de nuestros proyectos recientes y destacados</p>
          </div>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                  <button className="project-button">Ver Detalles</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Testimonios de <span className="highlight">Clientes</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">Trabajar con Nova transformó nuestra presencia digital. Su equipo entregó una solución que superó nuestras expectativas y contribuyó directamente al crecimiento de nuestro negocio.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{backgroundColor: '#3498db'}}></div>
                <div className="author-info">
                  <h4>Sara Jiménez</h4>
                  <p>CEO, TechVision Inc.</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">La experiencia de Nova en desarrollo móvil nos ayudó a lanzar nuestra aplicación a tiempo y dentro del presupuesto. Su atención al detalle y compromiso con la calidad no tiene comparación.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{backgroundColor: '#2ecc71'}}></div>
                <div className="author-info">
                  <h4>Miguel Rodríguez</h4>
                  <p>Gerente de Producto, AppWorks</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">El equipo de Nova aportó excelencia técnica y pensamiento creativo a nuestro proyecto. Fueron colaborativos, receptivos y entregaron exactamente lo que necesitábamos.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{backgroundColor: '#e74c3c'}}></div>
                <div className="author-info">
                  <h4>Emilia Chang</h4>
                  <p>CTO, Innovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto - Mejorado con más campos */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <div className="section-header">
            <h2>Ponte en <span className="highlight">Contacto</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Hablemos sobre cómo podemos ayudarte con tu próximo proyecto</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <h3>Ubicación</h3>
                <p>Calle 123 Innovación</p>
                <p>Distrito Tech, CA 94103</p>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <h3>Teléfono</h3>
                <p>+1 (555) 123-4567</p>
                <p>Lun-Vie, 9am-6pm</p>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p>info@novastudio.com</p>
                <p>soporte@novastudio.com</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Tu email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" placeholder="Asunto" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <div className="form-group">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Acepto la política de privacidad
                </label>
              </div>
              <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Mejorado con más secciones */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">NOVA</div>
            <p className="footer-tagline">Transformando ideas en excelencia digital</p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M22.5 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.2 4.2 0 00-7.2 3.8A12 12 0 013 4.9c-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4a4.3 4.3 0 01-1.9.1 4.2 4.2 0 003.9 2.9 8.5 8.5 0 01-5.2 1.8c-.3 0-.7 0-1-.1a12 12 0 006.4 1.9c7.7 0 12-6.4 12-12v-.5c.8-.6 1.5-1.3 2-2.1z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.1-.2-4.3-1-4.3-4.7 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.7.3.3.6.9.6 1.7V21c0 .3.2.6.7.5A10 10 0 0012 2z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-6.3c0-1.6-.9-2.5-2.3-2.5-1 0-1.5.6-1.8 1v-1h-2v8.8h2v-4.9c0-.2 0-.4.1-.6.1-.4.5-.8 1-.8.8 0 1 .6 1 1.4v4.9h2M6.9 8.6c.7 0 1.1-.4 1.1-1 0-.6-.4-1-1.1-1-.7 0-1.1.4-1.1 1 0 .6.4 1 1.1 1m1 9.9v-8.8h-2v8.8h2z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navegación</h3>
              <a href="#about">Sobre Nosotros</a>
              <a href="#services">Servicios</a>
              <a href="#technologies">Tecnologías</a>
              <a href="#projects">Proyectos</a>
              <a href="#contact">Contacto</a>
            </div>
            <div className="footer-links-column">
              <h3>Servicios</h3>
              <a href="#services">Desarrollo Web</a>
              <a href="#services">Desarrollo Móvil</a>
              <a href="#services">Diseño UX/UI</a>
              <a href="#services">DevOps</a>
            </div>
            <div className="footer-links-column">
              <h3>Recursos</h3>
              <a href="#">Casos de Estudio</a>
              <a href="#">Blog</a>
              <a href="#">Carreras</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Nova Studio. Todos los derechos reservados.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App