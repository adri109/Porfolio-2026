import { createI18n } from 'vue-i18n'

const getStoredLocale = () => {
  try {
    return localStorage.getItem('preferredLocale')
  } catch {
    return null
  }
}

const getBrowserLocale = () => {
  const browserLocale = navigator.language?.toLowerCase() || 'en'
  return browserLocale.startsWith('es') ? 'es' : 'en'
}

const defaultLocale = getStoredLocale() || getBrowserLocale()

const messages = {
  en: {
    nav: {
      about: 'About',
      tech: 'Tech Stack',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      welcome: '// WELCOME TO MY PORTFOLIO',
      nameFirst: 'Adrián',
      nameLast: 'Pérez',
      title: 'Full-Stack Developer',
      subtitle:
        'Crafting elegant digital experiences with modern web technologies. Passionate about clean code, scalable architecture, and intuitive design.',
      primaryCta: 'View Projects',
      secondaryCta: 'Get In Touch'
    },
    about: {
      kicker: '// ABOUT ME',
      titleA: 'Code with',
      titleB: 'Purpose',
      body:
        'I transform complex ideas into functional digital experiences. My goal is to help businesses and entrepreneurs bring their visions to life through solid full-stack development, always prioritizing performance optimization and a clean, maintainable code architecture.',
      stats: {
        modernStack: {
          value: 'Modern Stack',
          label: 'Main Focus'
        },
        vueExperience: {
          value: '2 Years',
          label: 'Experience in Vue'
        },
        git: {
          value: 'Git Workflow',
          label: 'Version Control'
        }
      },
      code: {
        comment: '// developer.js',
        nameLabel: 'name',
        nameValue: 'Adrián Pérez',
        roleLabel: 'role',
        roleValue: 'Full-Stack Dev',
        passionLabel: 'passion',
        passionValue: 'Clean Code',
        skillsLabel: 'skills',
        skillsValue: '["Problem Solver", "Communication", "Teamwork"]',
        availableLabel: 'available',
        trueValue: 'true'
      }
    },
    tech: {
      kicker: '// TECH STACK',
      titleA: 'Tools I',
      titleB: 'Master'
    },
    projects: {
      kicker: '// FEATURED PROJECTS',
      titleA: 'Recent',
      titleB: 'Work',
      items: {
        horarios: {
          title: 'Salon Management System',
          description:
            'Full-stack web app for beauty salons: appointments, clients, staff, reports, email/WhatsApp notifications, and a public booking page. Multi-tenant with JWT auth.'
        },
        imposicion: {
          title: 'Auto Imposition Tool',
          description:
            'Python script that takes individual book pages and automatically arranges them with print-ready imposition, saving time over traditional tools like InDesign.'
        },
        riotApi: {
          title: 'LoL Match Analyzer',
          description:
            'League of Legends match analyzer built with Node.js that consumes the Riot Games API to fetch and display game statistics.'
        },
        catalogo: {
          title: 'Auto Catalog Generator',
          description:
            'Python tool that reads images from a folder and generates a print-ready catalog with consistent layout, typography, and styling across every page.'
        }
      },
      cta: {
        code: 'View Code',
        demo: 'Live Demo'
      }
    },
    contact: {
      kicker: '// GET IN TOUCH',
      titleA: "Let's Build",
      titleB: 'Together',
      body:
        "Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or ways to bring your vision to life.",
      cards: {
        email: 'Email',
        location: 'Location',
        availability: 'Availability',
        locationValue: 'Zaragoza, Aragón, Spain',
        availabilityValue: 'Open to Work'
      },
      cta: {
        email: 'Send Email',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      }
    },
    footer: {
      copyright: '© 2026 Adrián Pérez. All rights reserved.',
      tagline: 'Built with 💙 and lots of ☕'
    }
  },
  es: {
    nav: {
      about: 'Sobre mi',
      tech: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      welcome: '// BIENVENIDO A MI PORTFOLIO',
      nameFirst: 'Adrián',
      nameLast: 'Pérez',
      title: 'Desarrollador Full-Stack',
      subtitle:
        'Creando experiencias digitales elegantes con tecnologias web modernas. Apasionado por el codigo limpio, la arquitectura escalable y el diseño intuitivo.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Hablemos'
    },
    about: {
      kicker: '// SOBRE MI',
      titleA: 'Código con',
      titleB: 'Propósito',
      body:
        'Transformo ideas complejas en experiencias digitales funcionales. Mi objetivo es ayudar a negocios y emprendedores a aterrizar sus visiones mediante un desarrollo Full-Stack sólido, priorizando siempre la optimización del rendimiento y una arquitectura de código limpia y fácil de mantener.',
      stats: {
        modernStack: {
          value: 'Modern Stack',
          label: 'Enfoque principal'
        },
        vueExperience: {
          value: '2 años',
          label: 'de experiencia en Vue'
        },
        git: {
          value: 'Git y GitHub',
          label: 'Control de versiones'
        }
      },
      code: {
        comment: '// developer.js',
        nameLabel: 'nombre',
        nameValue: 'Adrián Pérez',
        roleLabel: 'rol',
        roleValue: 'Full-Stack Dev',
        passionLabel: 'pasion',
        passionValue: 'Codigo limpio',
        skillsLabel: 'skills',
        skillsValue: '["Resolución de problemas", "Comunicación", "Trabajo en equipo"]',
        availableLabel: 'disponible',
        trueValue: 'true'
      }
    },
    tech: {
      kicker: '// STACK',
      titleA: 'Herramientas que',
      titleB: 'Domino'
    },
    projects: {
      kicker: '// PROYECTOS DESTACADOS',
      titleA: 'Trabajo',
      titleB: 'Reciente',
      items: {
        horarios: {
          title: 'Sistema de Gestión para Salones',
          description:
            'App web full-stack para salones de belleza: citas, clientes, personal, informes, notificaciones por email/WhatsApp y página pública de reservas. Multi-tenant con autenticación JWT.'
        },
        imposicion: {
          title: 'Imposición Automática',
          description:
            'Script en Python que toma hojas sueltas de un libro y las ordena automáticamente con imposición lista para imprenta, ahorrando tiempo frente a herramientas como InDesign.'
        },
        riotApi: {
          title: 'Analizador de Partidas LoL',
          description:
            'Analizador de partidas de League of Legends hecho con Node.js que consume la API de Riot Games para obtener y mostrar estadísticas de juego.'
        },
        catalogo: {
          title: 'Generador de Catálogos',
          description:
            'Herramienta en Python que lee imágenes de una carpeta y genera un catálogo listo para imprimir con diseño, tipografía y estilo consistentes en cada página.'
        }
      },
      cta: {
        code: 'Ver codigo',
        demo: 'Demo en vivo'
      }
    },
    contact: {
      kicker: '// CONTACTO',
      titleA: 'Construyamos',
      titleB: 'Juntos',
      body:
        'Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades, ideas creativas o formas de dar vida a tu vision.',
      cards: {
        email: 'Email',
        location: 'Ubicacion',
        availability: 'Disponibilidad',
        locationValue: 'Zaragoza, Aragón, España',
        availabilityValue: 'Disponible'
      },
      cta: {
        email: 'Enviar email',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      }
    },
    footer: {
      copyright: '2026 Adrián Pérez',
      tagline: 'Hecho con 💙 y mucho ☕'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

export default i18n
