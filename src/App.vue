<script setup>
import ProjectCard from './components/ProjectCard.vue'
import TechItem from './components/TechItem.vue'
import StatCard from './components/StatCard.vue'

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '5+', label: 'Years Exp' },
  { value: '30+', label: 'Clients' }
]

const techStack = [
  {
    label: 'Node.js',
    iconClass: 'text-green-500',
    iconPath:
      'M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.128-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.774.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165.218.218 0 0 1-.147.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.238.697 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z'
  },
  {
    label: 'Vue.js',
    iconClass: 'text-emerald-500',
    iconPath:
      'M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z'
  },
  {
    label: 'Prisma',
    iconClass: 'text-indigo-400',
    iconPath:
      'M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.324.713z'
  },
  {
    label: 'TypeScript',
    iconClass: 'text-blue-500',
    iconPath:
      'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'
  },
  {
    label: 'PostgreSQL',
    iconClass: 'text-blue-400',
    iconPath:
      'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4648a9.5449 9.5449 0 0 0-.5159-.0816 8.7409 8.7409 0 0 0-1.3701-.1111c-1.064 0-1.9873.2384-2.7522.7094a8.4826 8.4826 0 0 0-1.6399-.161c-1.371.0127-3.3776.3756-4.8518 1.6334C1.5005 4.1025.5327 6.5011.1223 10.3002c-.2165 2.0064-.0191 5.1619.7553 7.6299.8163 2.6034 1.8495 4.3114 3.0713 5.0764a2.4519 2.4519 0 0 0 1.3665.4139c.1287 0 .2588-.0115.3885-.0349.5765-.1038 1.0999-.4382 1.5545-.7729.2032.0817.4603.1531.7877.1877.3205.0338.6791.0051 1.0106-.0346.4287-.0514.8242-.1099 1.1643-.1479.8518-.0951 1.4099-.1568 1.9703.046.1419-.2aborado.2942-.5413.3641-.8666-.0098-.3418-.0839-.6774-.2199-.9776a2.7335 2.7335 0 0 0-.4033-.6267c.0824-.0169.1655-.0308.2504-.0417.0894-.0114.1803-.0295.2714-.0295.1721 0 .2864.0614.4286.2011.1859.1824.3312.4016.4219.6354.0899.2319.1292.4769.1147.7209-.0024.0406-.0092.0805-.0092.121 0 .6005.2106 1.1698.5885 1.589l.0092.0092c.3788.3952.8803.6063 1.4158.6063.0577 0 .1166-.0043.1753-.0104.0893-.0092.1764-.0262.2623-.0476a4.1891 4.1891 0 0 0 1.7839-.9645 4.9817 4.9817 0 0 0 1.3017-2.1088c.1217-.3925.3245-1.0623.4646-1.5619.2794-.9966.6037-2.0619.8093-2.5451.1624-.3818.5266-.9224.8966-1.4678.6002-.8849 1.2213-1.7999 1.1589-2.3218z'
  },
  {
    label: 'Docker',
    iconClass: 'text-cyan-500',
    iconPath:
      'M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.084.185.185.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.185.185v1.888c0 .102.084.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z'
  }
]

const projects = [
  {
    title: 'CloudSync Dashboard',
    description:
      'Real-time analytics dashboard with WebSocket integration and dynamic data visualization.',
    tags: ['Vue.js', 'Node.js'],
    gradientClass: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20',
    iconClass: 'text-cyan-400/30',
    iconPaths: [
      {
        d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        strokeWidth: '1'
      }
    ]
  },
  {
    title: 'FinTrack Mobile',
    description:
      'Personal finance tracking app with AI-powered spending insights and budget recommendations.',
    tags: ['React', 'Prisma'],
    gradientClass: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
    iconClass: 'text-purple-400/30',
    iconPaths: [
      {
        d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        strokeWidth: '1'
      }
    ]
  },
  {
    title: 'DevOps Pipeline',
    description:
      'Automated CI/CD pipeline with containerized microservices and zero-downtime deployments.',
    tags: ['Node.js', 'Docker'],
    gradientClass: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
    iconClass: 'text-emerald-400/30',
    iconPaths: [
      {
        d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
        strokeWidth: '1'
      }
    ]
  },
  {
    title: 'TeamFlow',
    description:
      'Collaborative project management platform with real-time updates and Kanban boards.',
    tags: ['Vue.js', 'GraphQL'],
    gradientClass: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20',
    iconClass: 'text-amber-400/30',
    iconPaths: [
      {
        d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        strokeWidth: '1'
      }
    ]
  },
  {
    title: 'HealthHub API',
    description:
      'RESTful health tracking API with OAuth2 authentication and comprehensive documentation.',
    tags: ['React', 'Node.js'],
    gradientClass: 'bg-gradient-to-br from-rose-500/20 to-red-600/20',
    iconClass: 'text-rose-400/30',
    iconPaths: [
      {
        d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        strokeWidth: '1'
      }
    ]
  },
  {
    title: 'AI Code Reviewer',
    description:
      'Machine learning model that analyzes code quality and suggests improvements automatically.',
    tags: ['Python', 'TensorFlow'],
    gradientClass: 'bg-gradient-to-br from-indigo-500/20 to-violet-600/20',
    iconClass: 'text-indigo-400/30',
    iconPaths: [
      {
        d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        strokeWidth: '1'
      }
    ]
  }
]
</script>

<template>
  <div class="main-wrapper">
    <div class="floating-orb w-96 h-96 bg-cyan-500 -top-48 -left-48 fixed"></div>
    <div
      class="floating-orb w-80 h-80 bg-blue-600 top-1/2 -right-40 fixed"
      style="animation-delay: -4s;"
    ></div>
    <div
      class="floating-orb w-64 h-64 bg-cyan-400 bottom-20 left-1/4 fixed"
      style="animation-delay: -2s;"
    ></div>

    <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        class="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-2xl px-6 py-3"
      >
        <a href="#" class="text-xl font-bold gradient-text code-font">&lt;AP/&gt;</a>
        <div class="hidden md:flex items-center gap-8">
          <a href="#about" class="nav-link text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#tech" class="nav-link text-gray-300 hover:text-white transition-colors">Tech Stack</a>
          <a
            href="#projects"
            class="nav-link text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            class="glow-btn bg-transparent border border-cyan-500/50 px-5 py-2 rounded-full text-cyan-400 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>

    <header id="hero" class="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div class="max-w-5xl mx-auto text-center">
        <p class="animate-in stagger-1 code-font text-cyan-400 text-sm md:text-base mb-4 tracking-widest">
          // WELCOME TO MY PORTFOLIO
        </p>
        <h1
          id="developer-name"
          class="animate-in stagger-2 text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Adrián <span class="gradient-text">Pérez</span>
        </h1>
        <h2
          id="hero-title"
          class="animate-in stagger-3 text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light mb-8"
        >
          Full-Stack Developer
        </h2>
        <p
          id="hero-subtitle"
          class="animate-in stagger-4 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting elegant digital experiences with modern web technologies. Passionate about clean
          code, scalable architecture, and intuitive design.
        </p>
        <div class="animate-in flex flex-col sm:flex-row gap-4 justify-center" style="animation-delay: 0.5s;">
          <a
            href="#projects"
            class="glow-btn bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="glow-btn bg-transparent border border-gray-600 px-8 py-4 rounded-full font-semibold hover:border-cyan-500 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>

    <section id="about" class="py-32 px-6 relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p class="code-font text-cyan-400 text-sm mb-4 tracking-widest">// ABOUT ME</p>
            <h2 class="text-4xl md:text-5xl font-bold mb-8">
              Building the <span class="gradient-text">Future</span>
            </h2>
            <p id="about-text" class="text-gray-400 text-lg leading-relaxed mb-6">
              With over 5 years of experience in full-stack development, I specialize in building
              scalable web applications that combine powerful backend systems with beautiful,
              responsive frontends. I believe in writing clean, maintainable code that stands the test
              of time.
            </p>
            <div class="flex gap-4">
              <StatCard
                v-for="stat in stats"
                :key="stat.label"
                :value="stat.value"
                :label="stat.label"
              />
            </div>
          </div>
          <div class="glass-card rounded-3xl p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
            <div class="relative">
              <div class="code-font text-sm">
                <p class="text-gray-500 mb-2">// developer.js</p>
                <p>
                  <span class="text-purple-400">const</span>
                  <span class="text-cyan-400"> developer</span> = {
                </p>
                <p class="pl-4">
                  <span class="text-green-400">name</span>:
                  <span class="text-amber-400"> "Adrián Pérez"</span>,
                </p>
                <p class="pl-4">
                  <span class="text-green-400">role</span>:
                  <span class="text-amber-400"> "Full-Stack Dev"</span>,
                </p>
                <p class="pl-4">
                  <span class="text-green-400">passion</span>:
                  <span class="text-amber-400"> "Clean Code"</span>,
                </p>
                <p class="pl-4">
                  <span class="text-green-400">coffee</span>:
                  <span class="text-cyan-400"> true</span>,
                </p>
                <p class="pl-4">
                  <span class="text-green-400">available</span>:
                  <span class="text-cyan-400"> true</span>
                </p>
                <p>};</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tech" class="py-32 px-6 relative">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="code-font text-cyan-400 text-sm mb-4 tracking-widest">// TECH STACK</p>
          <h2 class="text-4xl md:text-5xl font-bold">
            Tools I <span class="gradient-text">Master</span>
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <TechItem
            v-for="tech in techStack"
            :key="tech.label"
            :label="tech.label"
            :icon-class="tech.iconClass"
            :icon-path="tech.iconPath"
          />
        </div>
      </div>
    </section>

    <section id="projects" class="py-32 px-6 relative">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="code-font text-cyan-400 text-sm mb-4 tracking-widest">// FEATURED PROJECTS</p>
          <h2 class="text-4xl md:text-5xl font-bold">
            Recent <span class="gradient-text">Work</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
            :gradient-class="project.gradientClass"
            :icon-class="project.iconClass"
            :icon-paths="project.iconPaths"
          />
        </div>
      </div>
    </section>

    <section id="contact" class="py-32 px-6 relative">
      <div class="max-w-4xl mx-auto text-center">
        <p class="code-font text-cyan-400 text-sm mb-4 tracking-widest">// GET IN TOUCH</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          Let's Build <span class="gradient-text">Together</span>
        </h2>
        <p class="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or
          ways to bring your vision to life.
        </p>
        <div class="glass-card rounded-3xl p-8 md:p-12">
          <div class="grid md:grid-cols-3 gap-8 mb-10">
            <div class="text-center">
              <div
                class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center"
              >
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p class="text-gray-500 text-sm mb-1">Email</p>
              <p id="contact-email" class="text-white font-medium">adrian@devmail.com</p>
            </div>
            <div class="text-center">
              <div
                class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center"
              >
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p class="text-gray-500 text-sm mb-1">Location</p>
              <p class="text-white font-medium">Madrid, Spain</p>
            </div>
            <div class="text-center">
              <div
                class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center"
              >
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-gray-500 text-sm mb-1">Availability</p>
              <p class="text-white font-medium">Open to Work</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:adrian@devmail.com"
              class="glow-btn bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="glow-btn bg-transparent border border-gray-600 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:border-cyan-500"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="glow-btn bg-transparent border border-gray-600 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:border-cyan-500"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-8 px-6 border-t border-gray-800/50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">© 2026 Adrián Pérez. All rights reserved.</p>
        <p class="code-font text-gray-600 text-xs">Built with 💙 and lots of ☕</p>
      </div>
    </footer>
  </div>
</template>
