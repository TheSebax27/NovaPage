import React from 'react'
import './App.css'
import Threads from './Threads'

function App() {
  return (
    <div className="app-container">
      {/* Hero Section with Threads background */}
      <section className="hero-section">
        <div className="threads-background">
          <Threads 
            color={[0.2, 0.4, 0.8]} 
            amplitude={1.2} 
            distance={0.2} 
            enableMouseInteraction={true} 
          />
        </div>
        <div className="hero-content">
          <h1 className="company-name">NOVA</h1>
          <p className="tagline">Transformando ideas en soluciones digitales extraordinarias</p>
          <button className="cta-button">Contáctanos</button>
        </div>
      </section>

      {/* Servicios */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Desarrollo Web</h3>
            <p>Creamos sitios web y aplicaciones web responsivas y de alto rendimiento.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Desarrollo Móvil</h3>
            <p>Aplicaciones nativas e híbridas para iOS y Android que cautivan a tus usuarios.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>Consultorías UX/UI</h3>
            <p>Diseñamos experiencias de usuario intuitivas y atractivas.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>DevOps</h3>
            <p>Optimizamos tu ciclo de desarrollo con integración y despliegue continuos.</p>
          </div>
        </div>
      </section>

      {/* Acerca de Nosotros */}
      <section className="about-section">
        <div className="about-content">
          <h2>Sobre Nova</h2>
          <p>Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas innovadoras. Desde nuestra fundación, nos hemos dedicado a ofrecer productos de software de la más alta calidad, combinando creatividad técnica con un enfoque centrado en el usuario.</p>
          <p>En Nova, creemos que el software no solo debe funcionar - debe inspirar. Nuestras soluciones son tan hermosas como funcionales, y están diseñadas para impulsar tu negocio hacia el futuro.</p>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="projects-section">
        <h2>Proyectos Destacados</h2>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-image" style={{backgroundColor: '#3498db'}}></div>
            <h3>InnovatePro</h3>
            <p>Plataforma de gestión de innovación empresarial</p>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundColor: '#2ecc71'}}></div>
            <h3>EcoTrack</h3>
            <p>Aplicación de seguimiento de sostenibilidad ambiental</p>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundColor: '#e74c3c'}}></div>
            <h3>HealthSync</h3>
            <p>Sistema integrado de gestión de salud</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="contact-section">
        <h2>Hablemos sobre tu proyecto</h2>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Cuéntanos sobre tu proyecto"></textarea>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">NOVA</div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon">📱</a>
            <a href="#" className="social-icon">💻</a>
            <a href="#" className="social-icon">📧</a>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Nova Software. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App