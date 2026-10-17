document.addEventListener('DOMContentLoaded', () => {
  // Check config data availability
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA is not defined. Ensure data.js is loaded.');
    return;
  }

  const data = PORTFOLIO_DATA;

  /* -------------------------------------------------------------
   * 1. PROGRESS BAR LOADER SCREEN
   * ------------------------------------------------------------- */
  const loader = document.getElementById('loader');
  const loaderProgress = document.getElementById('loader-progress');
  const loaderPercentage = document.getElementById('loader-percentage');
  
  let progress = 0;
  const loadInterval = setInterval(() => {
    // Add randomized increments
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadInterval);
      
      // Smooth fade out
      setTimeout(() => {
        loader.classList.add('loader-fade');
        // Let scroll reveal trigger
        setTimeout(initScrollReveal, 200);
      }, 500);
    }
    loaderProgress.style.width = `${progress}%`;
    loaderPercentage.textContent = `${progress}%`;
  }, 100);

  /* -------------------------------------------------------------
   * 2. DATA INJECTION FROM DATA.JS
   * ------------------------------------------------------------- */
  
  // Profile settings
  const dynamicNames = document.querySelectorAll('.dynamic-name');
  dynamicNames.forEach(el => el.textContent = data.profile.name);
  document.getElementById('footer-name').textContent = data.profile.name;
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('hero-subheading').textContent = data.profile.bio;
  document.getElementById('hero-resume-link').href = data.profile.resumeUrl;

  const avatar = document.getElementById('about-avatar');
  avatar.src = data.profile.avatar;
  avatar.alt = data.profile.name;
  document.getElementById('about-bio').textContent = data.profile.bio;

  // Render Stats Grid
  const statsContainer = document.getElementById('stats-container');
  statsContainer.innerHTML = '';
  data.profile.stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-card';
    statItem.innerHTML = `
      <div class="stat-value gradient-text">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    `;
    statsContainer.appendChild(statItem);
  });

  // Render Focus Cards ("What I'm doing now")
  const focusGrid = document.getElementById('focus-grid');
  focusGrid.innerHTML = '';
  data.focus.forEach(item => {
    const card = document.createElement('div');
    card.className = 'focus-card glass-card';
    card.innerHTML = `
      <div class="focus-icon-box">
        <i class="${item.icon}"></i>
      </div>
      <div class="focus-details">
        <h5 class="focus-card-title">${item.title}</h5>
        <p class="focus-card-desc">${item.desc}</p>
      </div>
    `;
    focusGrid.appendChild(card);
  });

  // Render Skills Tab Buttons & Grid Content
  const skillsTabs = document.getElementById('skills-tabs');
  const skillsGrid = document.getElementById('skills-grid');
  const skillCategories = Object.keys(data.skills);
  
  skillsTabs.innerHTML = '';
  skillCategories.forEach((category, index) => {
    const btn = document.createElement('button');
    btn.className = `skills-tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = category;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skills-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(category);
    });
    skillsTabs.appendChild(btn);
  });

  function renderSkills(category) {
    skillsGrid.innerHTML = '';
    const skillsList = data.skills[category];
    
    skillsList.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card glass-card';
      card.innerHTML = `
        <div class="skill-card-inner">
          <div class="skill-icon-wrapper">
            <i class="${skill.icon}"></i>
          </div>
          <div class="skill-details">
            <div class="skill-name-row">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level-text">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" data-level="${skill.level}"></div>
            </div>
          </div>
        </div>
      `;
      skillsGrid.appendChild(card);
    });

    // Animate skill bars immediately after injection
    setTimeout(() => {
      const fills = skillsGrid.querySelectorAll('.skill-bar-fill');
      fills.forEach(fill => {
        const targetWidth = fill.getAttribute('data-level');
        fill.style.width = `${targetWidth}%`;
      });
    }, 100);
  }
  
  // Render first skill category by default
  if (skillCategories.length > 0) {
    renderSkills(skillCategories[0]);
  }

  // Render Projects Filter Tabs & Grid
  const projectsTabs = document.getElementById('projects-tabs');
  const projectsGrid = document.getElementById('projects-grid');
  
  // Extract unique categories
  const projectCategories = ['All', ...new Set(data.projects.map(p => p.category))];
  
  projectsTabs.innerHTML = '';
  projectCategories.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `skills-tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#projects-tabs .skills-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(cat);
    });
    projectsTabs.appendChild(btn);
  });

  function renderProjects(filterCategory) {
    projectsGrid.innerHTML = '';
    const filtered = filterCategory === 'All' 
      ? data.projects 
      : data.projects.filter(p => p.category === filterCategory);
      
    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card glass-card scroll-reveal reveal-active';
      
      const tags = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
      
      card.innerHTML = `
        <div class="project-thumbnail-box">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          <div class="project-view-overlay">
            <span>VIEW CASE STUDY</span>
          </div>
        </div>
        <div class="project-summary-box">
          <div class="project-tags">${tags}</div>
          <h4 class="project-title">${proj.title}</h4>
          <p class="project-description">${proj.description}</p>
        </div>
      `;

      // Open Modal detail handler
      card.addEventListener('click', () => openProjectModal(proj));
      projectsGrid.appendChild(card);
    });
  }

  // Render projects
  renderProjects('All');

  // Render Tools Section
  const toolsGrid = document.getElementById('tools-grid');
  toolsGrid.innerHTML = '';
  data.tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card glass-card';
    card.innerHTML = `
      <div class="tool-icon-box">
        <i class="${tool.icon}"></i>
      </div>
      <div class="tool-details">
        <h5 class="tool-name">${tool.name}</h5>
        <span class="tool-category">${tool.category}</span>
      </div>
    `;
    toolsGrid.appendChild(card);
  });

  // Populate Timeline (Experience & Education)
  const timelineContainer = document.getElementById('timeline-items');
  if (timelineContainer && data.experience) {
    timelineContainer.innerHTML = '';
    data.experience.forEach(item => {
      const element = document.createElement('div');
      element.className = 'timeline-item scroll-reveal';
      
      const icon = item.type === 'work' ? '<i class="fa-solid fa-briefcase"></i>' : '<i class="fa-solid fa-graduation-cap"></i>';
      
      element.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-card">
          <span class="timeline-period">${icon} ${item.period}</span>
          <h3 class="timeline-title">${item.role}</h3>
          <span class="timeline-company">${item.company}</span>
          <p class="timeline-desc">${item.description}</p>
        </div>
      `;
      timelineContainer.appendChild(element);
    });
  }

  // Populate Certifications
  const certsGrid = document.getElementById('certifications-grid');
  if (certsGrid && data.certifications) {
    certsGrid.innerHTML = '';
    data.certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'tool-card glass-card';
      card.innerHTML = `
        <div class="tool-icon-box" style="color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.15)">
          <i class="fa-solid fa-certificate"></i>
        </div>
        <div class="tool-details">
          <h5 class="tool-name">${cert.name}</h5>
          <span class="tool-category">${cert.issuer}</span>
        </div>
      `;
      certsGrid.appendChild(card);
    });
  }

  // Render Contact section
  const contactItems = document.getElementById('contact-items');
  contactItems.innerHTML = '';
  
  // Set up entries
  const contacts = [
    { label: "Email Address", value: data.contact.email, icon: "fa-solid fa-envelope", copyable: true, action: `mailto:${data.contact.email}` },
    { label: "Phone Number", value: data.contact.phone, icon: "fa-solid fa-phone", copyable: true, action: `tel:${data.contact.phone.replace(/\s+/g, '')}` },
    { label: "WhatsApp Direct", value: "Chat on WhatsApp", icon: "fa-brands fa-whatsapp", copyable: false, action: data.contact.whatsapp },
    { label: "GitHub Profile", value: "github.com", icon: "fa-brands fa-github", copyable: false, action: data.contact.github },
    { label: "LinkedIn Connect", value: "linkedin.com", icon: "fa-brands fa-linkedin-in", copyable: false, action: data.contact.linkedin }
  ];

  contacts.forEach(item => {
    const row = document.createElement('div');
    row.className = 'contact-item-row';
    row.innerHTML = `
      <div class="contact-item-left">
        <div class="contact-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="contact-text">
          <span class="contact-label">${item.label}</span>
          <span class="contact-value">${item.value}</span>
        </div>
      </div>
      <div class="contact-item-right">
        ${item.copyable ? `<button class="contact-btn copy-btn" data-clipboard="${item.value}" aria-label="Copy to clipboard"><i class="fa-regular fa-copy"></i></button>` : ''}
        <a href="${item.action}" target="_blank" rel="noopener noreferrer" class="contact-btn" aria-label="Open link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    `;
    contactItems.appendChild(row);
  });

  /* -------------------------------------------------------------
   * 3. THREE.JS 3D FLOATING BACKGROUND PARTICLES
   * ------------------------------------------------------------- */
  const bgCanvas = document.getElementById('three-bg-canvas');
  let bgScene, bgCamera, bgRenderer, starField, floatingMeshes = [];
  
  const mouseGlobal = { x: 0, y: 0 };
  
  function initBgThree() {
    bgScene = new THREE.Scene();
    
    bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    bgCamera.position.z = 30;

    bgRenderer = new THREE.WebGLRenderer({ canvas: bgCanvas, antialias: true, alpha: true });
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle field geometry
    const starCount = 350;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      // Sphere coordinate volume
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 80;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Transparent glow points
    const material = new THREE.PointsMaterial({
      size: 0.25,
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6
    });

    starField = new THREE.Points(geometry, material);
    bgScene.add(starField);

    // Drifting geometric meshes
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });

    const geometries = [
      new THREE.TorusGeometry(3, 1, 8, 24),
      new THREE.OctahedronGeometry(2),
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.DodecahedronGeometry(1.8)
    ];

    geometries.forEach((geom, idx) => {
      const mesh = new THREE.Mesh(geom, wireMaterial);
      mesh.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
        -Math.random() * 20
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      
      // Store drift speeds
      mesh.userData = {
        rotX: Math.random() * 0.005 - 0.0025,
        rotY: Math.random() * 0.005 - 0.0025,
        driftX: Math.random() * 0.008 - 0.004,
        driftY: Math.random() * 0.008 - 0.004
      };
      
      bgScene.add(mesh);
      floatingMeshes.push(mesh);
    });

    // Handle background anim frame
    animateBg();
  }

  function animateBg() {
    requestAnimationFrame(animateBg);

    // StarField slow rotation and mouse drift response
    starField.rotation.y += 0.0006;
    starField.rotation.x = mouseGlobal.y * 0.15;
    starField.rotation.y += mouseGlobal.x * 0.15;

    // Drifting geometry meshes
    floatingMeshes.forEach(mesh => {
      mesh.rotation.x += mesh.userData.rotX;
      mesh.rotation.y += mesh.userData.rotY;
      
      mesh.position.x += mesh.userData.driftX;
      mesh.position.y += mesh.userData.driftY;
      
      // Bounce boundaries
      if (Math.abs(mesh.position.x) > 35) mesh.userData.driftX *= -1;
      if (Math.abs(mesh.position.y) > 25) mesh.userData.driftY *= -1;
    });

    // Scroll response camera mapping
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    bgCamera.position.y = -scrollPercent * 15;

    bgRenderer.render(bgScene, bgCamera);
  }

  /* -------------------------------------------------------------
   * 4. THREE.JS INTERACTIVE HERO ORB
   * ------------------------------------------------------------- */
  const orbContainer = document.getElementById('hero-orb-container');
  let orbScene, orbCamera, orbRenderer, orbWire, orbInner;
  
  function initHeroOrb() {
    if (!orbContainer) return;
    
    orbScene = new THREE.Scene();
    
    orbCamera = new THREE.PerspectiveCamera(45, orbContainer.clientWidth / orbContainer.clientHeight, 0.1, 100);
    orbCamera.position.z = 6;

    orbRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    orbRenderer.setSize(orbContainer.clientWidth, orbContainer.clientHeight);
    orbRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    orbContainer.appendChild(orbRenderer.domElement);

    // Inner wireframe glow (Icosahedron)
    const geometryWire = new THREE.IcosahedronGeometry(1.6, 2);
    const materialWire = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    orbWire = new THREE.Mesh(geometryWire, materialWire);
    orbScene.add(orbWire);

    // Slightly smaller solid core with gradient simulation (using custom material color mapping)
    const geometryCore = new THREE.IcosahedronGeometry(1.3, 1);
    const materialCore = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    orbInner = new THREE.Mesh(geometryCore, materialCore);
    orbScene.add(orbInner);

    // Lights (even though meshbasic doesn't react, keeps setup clean for future upgrades)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    orbScene.add(ambientLight);

    animateOrb();
  }

  const orbMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  function animateOrb() {
    requestAnimationFrame(animateOrb);

    // Base spinning animations
    orbWire.rotation.y += 0.005;
    orbWire.rotation.x += 0.002;
    orbInner.rotation.y -= 0.007;

    // Follow mouse displacement with inertia damping
    orbMouse.x += (orbMouse.targetX - orbMouse.x) * 0.1;
    orbMouse.y += (orbMouse.targetY - orbMouse.y) * 0.1;

    orbWire.rotation.x += orbMouse.y * 0.25;
    orbWire.rotation.y += orbMouse.x * 0.25;
    
    orbInner.rotation.x -= orbMouse.y * 0.1;
    orbInner.rotation.y -= orbMouse.x * 0.1;

    orbRenderer.render(orbScene, orbCamera);
  }

  // Handle Resize triggers safely for all canvases
  window.addEventListener('resize', () => {
    // Background canvas resize
    bgCamera.aspect = window.innerWidth / window.innerHeight;
    bgCamera.updateProjectionMatrix();
    bgRenderer.setSize(window.innerWidth, window.innerHeight);

    // Orb container resize
    if (orbContainer && orbRenderer) {
      orbCamera.aspect = orbContainer.clientWidth / orbContainer.clientHeight;
      orbCamera.updateProjectionMatrix();
      orbRenderer.setSize(orbContainer.clientWidth, orbContainer.clientHeight);
    }
  });

  // Track global coordinates
  window.addEventListener('mousemove', (e) => {
    const xNormalized = (e.clientX / window.innerWidth) * 2 - 1;
    const yNormalized = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Save to globals
    mouseGlobal.x = xNormalized;
    mouseGlobal.y = yNormalized;

    // Map local orb rotation coordinates
    if (orbContainer) {
      const rect = orbContainer.getBoundingClientRect();
      const orbCenterX = rect.left + rect.width / 2;
      const orbCenterY = rect.top + rect.height / 2;
      orbMouse.targetX = (e.clientX - orbCenterX) / (rect.width / 2);
      orbMouse.targetY = -(e.clientY - orbCenterY) / (rect.height / 2);
    }

    // Global mouse glow variable position update
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });

  // Init Three engines
  initBgThree();
  initHeroOrb();

  /* -------------------------------------------------------------
   * 5. TYPING TEXT TAGLINES
   * ------------------------------------------------------------- */
  const typingTarget = document.querySelector('.typing-target');
  if (typingTarget && data.profile.roles && data.profile.roles.length > 0) {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let textState = '';

    const formatRoleText = (role) => {
      if (/^(a|an)\s+/i.test(role)) return role;
      const article = /^[aeiou]/i.test(role) ? 'an ' : 'a ';
      return article + role;
    };

    const typeAnimation = () => {
      const fullText = formatRoleText(data.profile.roles[roleIdx]);
      
      if (isDeleting) {
        textState = fullText.substring(0, charIdx - 1);
        charIdx--;
      } else {
        textState = fullText.substring(0, charIdx + 1);
        charIdx++;
      }

      typingTarget.textContent = textState;
      
      let speed = isDeleting ? 40 : 80;
      
      if (!isDeleting && textState === fullText) {
        speed = 2000; // Pause at completion
        isDeleting = true;
      } else if (isDeleting && textState === '') {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % data.profile.roles.length;
        speed = 400; // Pause before typing new role
      }
      
      setTimeout(typeAnimation, speed);
    };

    setTimeout(typeAnimation, 1000);
  }

  /* -------------------------------------------------------------
   * 6. NAVIGATION & HEADER SCROLL TRACKER
   * ------------------------------------------------------------- */
  const header = document.getElementById('header');
  const scrollProgress = document.getElementById('scroll-progress');
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header and scroll bar width logic
  window.addEventListener('scroll', () => {
    // Scroll progress line calculate
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal > 0) {
      const percentage = (window.scrollY / scrollTotal) * 100;
      scrollProgress.style.width = `${percentage}%`;
    }

    if (window.scrollY > 40) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
    
    spyNavigation();
  });

  // Mobile drawer toggle
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isMenuOpen = navMenu.classList.contains('active');
    menuToggle.querySelector('.open-icon').style.display = isMenuOpen ? 'none' : 'block';
    menuToggle.querySelector('.close-icon').style.display = isMenuOpen ? 'block' : 'none';
  });

  // Close Mobile menu when hitting links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.querySelector('.open-icon').style.display = 'block';
      menuToggle.querySelector('.close-icon').style.display = 'none';
    });
  });

  // Navigation indicator highlighting scroll spy
  const sectionList = document.querySelectorAll('section');
  function spyNavigation() {
    let currentId = '';
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sectionList.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  /* -------------------------------------------------------------
   * 7. SCROLL REVEAL OBSERVER
   * ------------------------------------------------------------- */
  let observer;
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.scroll-reveal');
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* -------------------------------------------------------------
   * 8. 3D CARD HOVER TILT EFFECTS
   * ------------------------------------------------------------- */
  function updateCardTilt(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Dynamic coordinate mapping variable trackers
    card.style.setProperty('--card-x', `${x}px`);
    card.style.setProperty('--card-y', `${y}px`);

    // Degree tilt calculation
    const rotateX = -(y - rect.height / 2) / (rect.height / 10);
    const rotateY = (x - rect.width / 2) / (rect.width / 10);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function resetCardTilt(card) {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  // Hook listeners dynamically
  const observerCallback = () => {
    const tiltCards = document.querySelectorAll('.glass-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => updateCardTilt(e, card));
      card.addEventListener('mouseleave', () => resetCardTilt(card));
    });
  };
  
  // Run on load and whenever grids populate
  setTimeout(observerCallback, 600);
  
  // Re-observe whenever elements changes
  const skillGridObserver = new MutationObserver(observerCallback);
  const projGridObserver = new MutationObserver(observerCallback);
  
  if (skillsGrid) skillGridObserver.observe(skillsGrid, { childList: true });
  if (projectsGrid) projGridObserver.observe(projectsGrid, { childList: true });

  /* -------------------------------------------------------------
   * 9. PROJECTS CASE STUDY MODAL DIALOG
   * ------------------------------------------------------------- */
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  
  const modalTitle = document.getElementById('modal-project-title');
  const modalImage = document.getElementById('modal-project-img');
  const modalTags = document.getElementById('modal-project-tags');
  const modalThumbnails = document.getElementById('modal-thumbnails');
  const modalGithub = document.getElementById('modal-link-github');
  const modalLive = document.getElementById('modal-link-live');
  
  const modalProblem = document.getElementById('modal-project-problem');
  const modalSolution = document.getElementById('modal-project-solution');
  const modalImpact = document.getElementById('modal-project-impact');

  function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    
    // Render thumbnails if multiple images are provided
    if (modalThumbnails) {
      modalThumbnails.innerHTML = '';
      const imageList = project.images && project.images.length > 0 ? project.images : [project.image];
      if (imageList.length > 1) {
        imageList.forEach((imgSrc, idx) => {
          const thumb = document.createElement('div');
          thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
          thumb.innerHTML = `<img src="${imgSrc}" alt="${project.title} screenshot ${idx + 1}" loading="lazy">`;
          thumb.addEventListener('click', () => {
            modalThumbnails.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            modalImage.src = imgSrc;
          });
          modalThumbnails.appendChild(thumb);
        });
      }
    }
    
    modalTags.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    
    // Setup action buttons
    modalGithub.href = project.github;
    modalGithub.style.display = project.github === '#' ? 'none' : 'inline-flex';
    
    modalLive.href = project.live;
    modalLive.style.display = project.live === '#' ? 'none' : 'inline-flex';

    // Case Study points
    modalProblem.textContent = project.details.problem;
    modalSolution.textContent = project.details.solution;
    modalImpact.textContent = project.details.impact;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // block viewport scroll
  }

  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  modalClose.addEventListener('click', closeProjectModal);
  
  // Close on outer backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Close on Escape keyboard tap
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* -------------------------------------------------------------
   * 10. CLIPBOARD INTEGRATION & TOAST
   * ------------------------------------------------------------- */
  const toast = document.getElementById('toast-notification');

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  document.addEventListener('click', (e) => {
    // Check if copy-btn is clicked
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const textToCopy = copyBtn.getAttribute('data-clipboard');
      
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            // Update icon temporarily
            const icon = copyBtn.querySelector('i');
            icon.className = 'fa-solid fa-check';
            showToast('Copied to Clipboard!');
            
            setTimeout(() => {
              icon.className = 'fa-regular fa-copy';
            }, 1500);
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
            showToast('Failed to copy. Please copy manually.');
          });
      }
    }
  });
});
