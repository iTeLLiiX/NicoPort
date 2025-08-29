/**
 * Nico Merkel Portfolio Website
 * Modern Fullstack Developer Portfolio
 */

// ===== GLOBAL VARIABLES =====
let currentSection = 'home';

// ===== TECH STACK DATA =====
const techStack = [
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { name: 'React', icon: 'assets/icons/react.svg' },
    { name: 'Next.js', icon: 'assets/icons/nextjs.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
    { name: 'Tailwind CSS', icon: 'assets/icons/tailwindcss.svg' },
    { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' }
];

// ===== EXPERIENCE DATA =====
const experience = [
    {
        company: 'Strativ AB',
        position: 'Software Engineer (Fullstack)',
        period: 'Dec 2024 - Present',
        description: 'Leading fullstack development initiatives and mentoring team members.'
    },
    {
        company: 'Epikcoders',
        position: 'Fullstack Developer',
        period: 'Oct 2023 - Nov 2024',
        description: 'Developed responsive web applications using React, Node.js and modern frameworks.'
    },
    {
        company: 'Anchorblock Technology',
        position: 'Fullstack Engineer',
        period: 'Oct 2022 - Sep 2023',
        description: 'Built scalable fullstack solutions for enterprise-level applications.'
    }
];

// ===== PROJECTS DATA =====
const projects = [
    {
        id: '01',
        title: 'CodeSnap',
        description: 'A modern code snippet sharing platform',
        technologies: ['React', 'JavaScript', 'CSS'],
        image: 'assets/CodeSnap.jpg',
        url: '#',
        github: '#'
    },
    {
        id: '02',
        title: 'Thomas Schasrli',
        description: 'Personal portfolio website',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        image: 'assets/thomasschasrli.png',
        url: '#',
        github: '#'
    },
    {
        id: '03',
        title: 'CraftConnect',
        description: 'Platform connecting artisans with customers',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: 'assets/craftconnect.png',
        url: '#',
        github: '#'
    }
];

// ===== CERTIFICATES DATA =====
const certificates = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2024',
        badgeUrl: 'https://www.credly.com/badges/aws-certified-cloud-practitioner',
        description: 'Foundational AWS cloud concepts and services'
    },
    {
        title: 'Microsoft Certified: Azure Fundamentals',
        issuer: 'Microsoft',
        date: '2024',
        badgeUrl: 'https://www.credly.com/badges/microsoft-certified-azure-fundamentals',
        description: 'Cloud concepts and Azure services fundamentals'
    },
    {
        title: 'Google Cloud Certified - Associate Cloud Engineer',
        issuer: 'Google Cloud',
        date: '2023',
        badgeUrl: 'https://www.credly.com/badges/google-cloud-certified-associate-cloud-engineer',
        description: 'Deploy and manage applications on Google Cloud'
    },
    {
        title: 'Certified Scrum Master (CSM)',
        issuer: 'Scrum Alliance',
        date: '2023',
        badgeUrl: 'https://www.credly.com/badges/certified-scrum-master-csm',
        description: 'Agile project management and Scrum methodology'
    }
];

// ===== CHATBOT KNOWLEDGE BASE =====
const chatbotKnowledge = {
    skills: {
        frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'GSAP', 'Framer Motion'],
        backend: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Prisma'],
        tools: ['Git', 'Docker', 'AWS', 'Azure', 'Google Cloud', 'VS Code', 'Postman'],
        softSkills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Project Management', 'Mentoring']
    },
    experience: {
        totalYears: '3+ years',
        companies: ['Strativ AB', 'Epikcoders', 'Anchorblock Technology'],
        specializations: ['Fullstack Development', 'Web Applications', 'Enterprise Solutions', 'Cloud Services']
    },
    projects: {
        count: '7+ projects',
        types: ['Web Applications', 'Portfolio Websites', 'E-commerce Platforms', 'API Development'],
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS']
    },
    contact: {
        email: 'nico.merkel@online.de',
        github: 'https://github.com/iTeLLiiX',
        linkedin: 'https://www.linkedin.com/in/nico-merkel-20044b334/',
        credly: 'https://www.credly.com/users/nico-merkel/badges'
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Website Initializing...');
    
    // Initialize all components
    initNavigation();
    populateTechStack();
    populateExperience();
    populateProjects();
    populateCertificates();
    initScrollAnimations();
    initContactForm();
    initChatbot();
    initScrollProgress();
    initParticles();
    initSectionAnimations();
    initNavigationHighlight();
    initCustomCursor();
    
    console.log('✅ Portfolio Website Initialized Successfully');
});

// ===== NAVIGATION =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Smooth scroll with offset for header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                currentSection = targetId;
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
    
    // Mobile menu toggle with animation
    const mobileMenuBtn = document.querySelector('header button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const svg = this.querySelector('svg');
            if (this.classList.contains('active')) {
                svg.style.transform = 'rotate(90deg)';
            } else {
                svg.style.transform = 'rotate(0deg)';
            }
            console.log('Mobile menu toggled');
        });
    }
}

// ===== TECH STACK POPULATION =====
function populateTechStack() {
    const techStackContainer = document.getElementById('tech-stack');
    
    if (!techStackContainer) {
        console.warn('⚠️ Tech stack container not found');
        return;
    }
    
    techStackContainer.innerHTML = '';
    
    techStack.forEach((tech, index) => {
        const techItem = document.createElement('div');
        techItem.className = 'bg-card p-4 rounded-lg flex flex-col items-center gap-3 hover:shadow-md transition-all floating-card';
        techItem.style.animationDelay = `${index * 0.1}s`;
        
        techItem.innerHTML = `
            <div class="w-12 h-12 flex items-center justify-center">
                <img src="${tech.icon}" alt="${tech.name}" class="w-8 h-8 object-contain" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K'; console.warn('⚠️ Failed to load ${tech.name} icon');">
            </div>
            <span class="text-sm font-medium text-center">${tech.name}</span>
        `;
        
        techStackContainer.appendChild(techItem);
    });
    
    console.log('✅ Tech stack populated successfully');
}

// ===== EXPERIENCE POPULATION =====
function populateExperience() {
    const experienceContainer = document.getElementById('experience-timeline');
    
    if (!experienceContainer) {
        console.warn('⚠️ Experience container not found');
        return;
    }
    
    experienceContainer.innerHTML = '';
    
    experience.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'bg-card p-6 rounded-lg mb-6 hover:shadow-md transition-all floating-card';
        expItem.style.animationDelay = `${index * 0.2}s`;
        
        expItem.innerHTML = `
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                    <h3 class="text-xl font-bold">${exp.position}</h3>
                    <p class="text-lg text-primary">${exp.company}</p>
                </div>
                <span class="text-sm text-muted-foreground mt-2 md:mt-0">${exp.period}</span>
            </div>
            <p class="text-muted-foreground">${exp.description}</p>
        `;
        
        experienceContainer.appendChild(expItem);
    });
    
    console.log('✅ Experience timeline populated successfully');
}

// ===== PROJECTS POPULATION =====
function populateProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    
    if (!projectsContainer) {
        console.warn('⚠️ Projects container not found');
        return;
    }
    
    projectsContainer.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all group floating-card';
        projectItem.style.animationDelay = `${index * 0.1}s`;
        
        projectItem.innerHTML = `
            <div class="aspect-video bg-muted relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; console.warn('⚠️ Failed to load ${project.title} image');">
                <div class="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground" style="display: none;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold">${project.title}</h3>
                    <span class="text-sm text-muted-foreground">${project.id}</span>
                </div>
                <p class="text-muted-foreground mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => 
                        `<span class="px-3 py-1 bg-muted text-sm rounded-full">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex gap-4">
                    <a href="${project.url}" target="_blank" 
                       class="flex items-center gap-2 text-primary hover:underline">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                    </a>
                    <a href="${project.github}" target="_blank" 
                       class="flex items-center gap-2 text-primary hover:underline">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectItem);
    });
    
    console.log('✅ Projects populated successfully');
}

// ===== CERTIFICATES POPULATION =====
function populateCertificates() {
    const certificatesContainer = document.getElementById('certificates-grid');
    
    if (!certificatesContainer) {
        console.warn('⚠️ Certificates container not found');
        return;
    }
    
    certificatesContainer.innerHTML = '';
    
    certificates.forEach((cert, index) => {
        const certItem = document.createElement('div');
        certItem.className = 'bg-card p-6 rounded-lg hover:shadow-md transition-all floating-card';
        certItem.style.animationDelay = `${index * 0.1}s`;
        
        certItem.innerHTML = `
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-bold mb-1">${cert.title}</h3>
                    <p class="text-sm text-primary mb-2">${cert.issuer}</p>
                    <p class="text-sm text-muted-foreground mb-3">${cert.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-muted-foreground">${cert.date}</span>
                        <a href="${cert.badgeUrl}" target="_blank" 
                           class="text-xs text-primary hover:underline">View Badge</a>
                    </div>
                </div>
            </div>
        `;
        
        certificatesContainer.appendChild(certItem);
    });
    
    console.log('✅ Certificates populated successfully');
}

// ===== CHATBOT FUNCTIONALITY =====
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMinimize = document.getElementById('chatbot-minimize');
    const chatIcon = document.getElementById('chat-icon');
    const closeIcon = document.getElementById('close-icon');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', function() {
        const isHidden = chatbotWindow.classList.contains('hidden');
        if (isHidden) {
            chatbotWindow.classList.remove('hidden');
            chatIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            chatbotWindow.classList.add('hidden');
            chatIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    // Minimize chatbot
    chatbotMinimize.addEventListener('click', function() {
        chatbotWindow.classList.add('hidden');
        chatIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Generate and add bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }

    // Send message on button click
    chatSend.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'flex items-start gap-3';
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="ml-auto">
                    <div class="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                        <p class="text-sm">${text}</p>
                    </div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    N
                </div>
                <div class="bg-muted p-3 rounded-lg max-w-xs">
                    <p class="text-sm">${text}</p>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Generate bot response
    function generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Email specific questions
        if (message.includes('email') || message.includes('mail')) {
            return `Meine E-Mail-Adresse ist: ${chatbotKnowledge.contact.email}. Du kannst mich gerne für Projekte, Fragen oder Zusammenarbeit kontaktieren!`;
        }
        
        // Skills questions
        if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('technologie')) {
            if (message.includes('frontend') || message.includes('react') || message.includes('javascript')) {
                return `Meine Frontend-Skills umfassen: ${chatbotKnowledge.skills.frontend.join(', ')}. Ich bin besonders stark in React, Next.js und TypeScript.`;
            } else if (message.includes('backend') || message.includes('node') || message.includes('database') || message.includes('datenbank')) {
                return `Meine Backend-Skills umfassen: ${chatbotKnowledge.skills.backend.join(', ')}. Ich arbeite mit Node.js, Express und verschiedenen Datenbanken.`;
            } else if (message.includes('tool') || message.includes('git') || message.includes('cloud')) {
                return `Ich verwende verschiedene Tools und Plattformen: ${chatbotKnowledge.skills.tools.join(', ')}. Ich bin zertifiziert in AWS, Azure und Google Cloud.`;
            } else {
                return `Ich bin ein Fullstack-Entwickler mit Skills in Frontend und Backend. Meine Haupttechnologien sind React, Node.js, TypeScript und verschiedene Datenbanken. Ich bin auch in Cloud-Plattformen wie AWS, Azure und Google Cloud zertifiziert.`;
            }
        }
        
        // Experience questions
        if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('erfahrung') || message.includes('arbeit')) {
            return `Ich habe ${chatbotKnowledge.experience.totalYears} Erfahrung bei Unternehmen wie ${chatbotKnowledge.experience.companies.join(', ')}. Ich spezialisiere mich auf ${chatbotKnowledge.experience.specializations.join(', ')}.`;
        }
        
        // Project questions
        if (message.includes('project') || message.includes('portfolio') || message.includes('work') || message.includes('projekt')) {
            return `Ich habe ${chatbotKnowledge.projects.count} abgeschlossen, darunter Webanwendungen, Portfolio-Websites und E-Commerce-Plattformen. Meine Projekte verwenden Technologien wie ${chatbotKnowledge.projects.technologies.join(', ')}.`;
        }
        
        // Contact questions
        if (message.includes('contact') || message.includes('reach') || message.includes('kontakt')) {
            return `Du kannst mich erreichen unter: ${chatbotKnowledge.contact.email}. Ich bin auch aktiv auf GitHub (${chatbotKnowledge.contact.github}) und LinkedIn (${chatbotKnowledge.contact.linkedin}).`;
        }
        
        // Certificate questions
        if (message.includes('certificate') || message.includes('certification') || message.includes('badge') || message.includes('zertifikat')) {
            return `Ich habe mehrere Zertifizierungen, darunter AWS Cloud Practitioner, Microsoft Azure Fundamentals, Google Cloud Associate Engineer und Certified Scrum Master. Alle meine Badges findest du auf meinem Credly-Profil: ${chatbotKnowledge.contact.credly}`;
        }
        
        // Salary/Price questions
        if (message.includes('salary') || message.includes('price') || message.includes('rate') || message.includes('gehalt') || message.includes('preis') || message.includes('stundensatz')) {
            return `Meine Preise variieren je nach Projektumfang und Komplexität. Kontaktiere mich gerne unter ${chatbotKnowledge.contact.email} für ein individuelles Angebot!`;
        }
        
        // Availability questions
        if (message.includes('available') || message.includes('freelance') || message.includes('freelancer') || message.includes('verfügbar') || message.includes('freiberuflich')) {
            return `Ich bin für neue Projekte und Freelance-Aufträge verfügbar. Kontaktiere mich gerne unter ${chatbotKnowledge.contact.email} für weitere Details!`;
        }
        
        // Location questions
        if (message.includes('location') || message.includes('where') || message.includes('wo') || message.includes('standort')) {
            return `Ich arbeite remote und bin für Projekte weltweit verfügbar. Meine Zeitzone ist CET/CEST.`;
        }
        
        // Portfolio questions
        if (message.includes('portfolio') || message.includes('website') || message.includes('webseite')) {
            return `Du schaust dir gerade mein Portfolio an! Es wurde mit modernen Webtechnologien wie React, TypeScript und Tailwind CSS entwickelt.`;
        }
        
        // General questions
        if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hallo')) {
            return `Hallo! Ich bin Nico, ein Fullstack-Entwickler. Wie kann ich dir heute helfen? Du kannst mich zu meinen Skills, Erfahrungen, Projekten oder Zertifizierungen fragen.`;
        }
        
        if (message.includes('help') || message.includes('what can you do') || message.includes('hilfe') || message.includes('was kannst du')) {
            return `Ich kann Fragen zu meinen Skills, Arbeitserfahrung, Projekten, Zertifizierungen und Kontaktinformationen beantworten. Frag mich einfach alles!`;
        }
        
        // Default response
        return `Ich bin mir bei dieser spezifischen Frage nicht sicher. Du kannst mich zu meinen Skills, Erfahrungen, Projekten, Zertifizierungen oder wie du mich kontaktieren kannst fragen. Was möchtest du wissen?`;
    }

    console.log('✅ Chatbot initialized successfully');
}

// ===== SCROLL PROGRESS INDICATOR =====
function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    });
    
    console.log('✅ Scroll progress indicator initialized');
}

// ===== PARTICLE EFFECTS =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    console.log('✅ Particle effects initialized');
}

// ===== SECTION ANIMATIONS =====
function initSectionAnimations() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    sectionHeaders.forEach(header => {
        observer.observe(header);
    });
    
    console.log('✅ Section animations initialized');
}

// ===== NAVIGATION HIGHLIGHT =====
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSection = entry.target.id;
                
                // Update navigation
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === currentSection) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    console.log('✅ Navigation highlight initialized');
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .nav-link, .floating-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    console.log('✅ Custom cursor initialized');
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all elements with slide-up-and-fade class
    document.querySelectorAll('.slide-up-and-fade').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    console.log('✅ Scroll animations initialized');
}

// ===== CONTACT FORM =====
function initContactForm() {
    // Handle contact button clicks
    const contactLinks = document.querySelectorAll('a[href="mailto:nico.merkel@online.de"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track contact clicks (you can add analytics here)
            console.log('📧 Contact email clicked');
        });
    });
    
    // Handle hire me button
    const hireMeBtn = document.querySelector('button');
    if (hireMeBtn && hireMeBtn.textContent.includes('Hire Me')) {
        hireMeBtn.addEventListener('click', function() {
            window.location.href = 'mailto:nico.merkel@online.de?subject=Project Inquiry&body=Hi Nico, I would like to discuss a project with you.';
        });
    }
}

// ===== SMOOTH SCROLLING =====
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('⚠️ JavaScript Error:', e.error);
});

// ===== PAGE VISIBILITY =====
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('📱 Page hidden');
    } else {
        console.log('👀 Page visible');
    }
});

console.log('📜 Script loaded successfully');
