// RestoreX - Main JS

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderHeader();
    renderFooter();
    setupTheme();
    setupRTL();
    updateServiceDetails();
}

const navLinks = [
    { name: 'Home', url: 'index.html' },
    { name: 'Home 2', url: 'home-2.html' },
    { name: 'Services', url: 'services.html' },
    { name: 'Projects', url: 'projects.html' },
    { name: 'Help', url: 'insurance-help.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Contact', url: 'contact.html' }
];

function renderHeader() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const headerHtml = `
    <nav class="navbar fixed-top navbar-light">
        <div class="container-fluid container-custom d-flex align-items-center justify-content-between">
            <!-- Logo (Left) -->
            <a class="navbar-brand m-0" href="index.html">
                <img src="assets/images/logo.svg" alt="RestoreX Logo" height="45">
            </a>

            <!-- Mobile Hamburger (Right - only visible < 1100px) -->
            <button class="btn mobile-only border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <i class="bi bi-list fs-1"></i>
            </button>

            <div class="desktop-only gap-2">
                ${navLinks.map(link => {
                    let isActive = link.url === currentPage ? 'active' : '';
                    if (link.name === 'Services' && currentPage === 'service-details.html') {
                        isActive = 'active';
                    }
                    return `<a href="${link.url}" class="nav-link fw-bold ${isActive}">${link.name}</a>`;
                }).join('')}
            </div>

            <!-- Header Actions (Visible > 1100px) -->
            <div class="desktop-only align-items-center gap-1">
                <a href="dashboard.html" class="btn btn-dark text-white fw-bold">Dashboard</a>

                <a href="register.html" class="btn btn-primary">Sign Up</a>
                <button id="theme-toggle" class="btn btn-sm btn-dark ms-1"><i class="bi bi-moon-stars theme-icon-img"></i></button>
                <button id="rtl-toggle" class="btn btn-sm btn-secondary ms-1">RTL</button>
            </div>
        </div>
    </nav>

    <!-- Offcanvas Mobile Menu -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3 text-start">
                ${currentPage === 'dashboard.html' ? `
                    <li class="nav-item"><a class="nav-link" href="#" data-section="analytics"><i class="bi bi-speedometer2 me-2"></i> Analytics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" data-section="users"><i class="bi bi-people me-2"></i> Users</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" data-section="projects"><i class="bi bi-briefcase me-2"></i> Projects (Orders)</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" data-section="messages"><i class="bi bi-chat-dots me-2"></i> Messages</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" data-section="documents"><i class="bi bi-file-earmark-arrow-up me-2"></i> Documents</a></li>
                    <hr>
                ` : ''}
                ${navLinks.map(link => {
                    let isActive = link.url === currentPage ? 'active' : '';
                    if (link.name === 'Services' && currentPage === 'service-details.html') {
                        isActive = 'active';
                    }
                    return `<li class="nav-item"><a class="nav-link ${isActive}" href="${link.url}">${link.name}</a></li>`;
                }).join('')}
                <hr>
                <li class="nav-item"><a class="nav-link" href="dashboard.html">Dashboard</a></li>

                <li class="nav-item"><a class="nav-link" href="register.html">Get Started</a></li>
                <li class="nav-item d-flex gap-2 mt-3 justify-content-start">
                    <button class="btn btn-light w-50 theme-toggle-mobile text-start"><i class="bi bi-moon-stars me-2"></i>Theme</button>
                    <button class="btn btn-secondary w-50 rtl-toggle-mobile text-start">RTL</button>
                </li>
            </ul>
        </div>
    </div>
    `;

    const headerElement = document.getElementById('main-header');
    if (headerElement) headerElement.innerHTML = headerHtml;
}

function renderFooter() {
    const footerHtml = `
    <footer class="main-footer-section bg-light">
        <div class="container container-custom">
            <div class="row g-4">
                <div class="col-lg-4 text-dark text-center">
                    <img src="assets/images/logo.svg" height="40" class="mb-3">
                    <p>Premium disaster recovery services. Restoring peace of mind since 2026.</p>
                    <div class="social-links d-flex gap-3 justify-content-center">
                        <a href="#" class="text-dark"><img src="assets/images/icons/fb_icon.png" class="img-icon" alt="Facebook"></a>
                        <a href="#" class="text-dark"><img src="assets/images/icons/tw_icon.png" class="img-icon" alt="Twitter"></a>
                        <a href="#" class="text-dark"><img src="assets/images/icons/ig_icon.png" class="img-icon" alt="Instagram"></a>
                    </div>
                </div>
                <div class="col-lg-2 text-center">
                    <h5 class="fw-bold">Company</h5>
                    <ul class="list-unstyled">
                        <li><a href="about.html" class="text-decoration-none text-muted">About Us</a></li>
                        <li><a href="services.html" class="text-decoration-none text-muted">Services</a></li>
                        <li><a href="blog.html" class="text-decoration-none text-muted">Blog</a></li>
                        <li><a href="projects.html" class="text-decoration-none text-muted">Projects</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 text-center">
                    <h5 class="fw-bold">Support</h5>
                    <ul class="list-unstyled">
                        <li><a href="contact.html" class="text-decoration-none text-muted">Contact</a></li>
                        <li><a href="index.html#faqAccordion" class="text-decoration-none text-muted">FAQ</a></li>
                        <li><a href="dashboard.html" class="text-decoration-none text-muted">Client Portal</a></li>
                        <li><a href="insurance-help.html" class="text-decoration-none text-muted">Insurance Help</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 text-center">
                    <h5 class="fw-bold">Newsletter</h5>
                    <p class="small-text">Subscribe for emergency tips and updates.</p>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Email address">
                        <button class="btn btn-primary">Join</button>
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <div class="d-flex flex-column align-items-center gap-2">
                <p class="small-text mb-0">&copy; 2026 RestoreX. All rights reserved.</p>
                <a href="#" class="btn btn-sm btn-outline"><img src="assets/images/icons/arrow_up_icon.png" class="img-icon" alt="Top"> Top</a>
            </div>
        </div>
    </footer>
    `;
    const footerElement = document.getElementById('main-footer');
    if (footerElement) footerElement.innerHTML = footerHtml;
}

function setupTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleMobile = document.querySelector('.theme-toggle-mobile');
    
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggleBtn) toggleBtn.innerHTML = theme === 'dark' ? '<i class="bi bi-sun theme-icon-img"></i>' : '<i class="bi bi-moon-stars theme-icon-img"></i>';
        if (toggleMobile) toggleMobile.innerHTML = theme === 'dark' ? '<i class="bi bi-sun me-2"></i>Theme' : '<i class="bi bi-moon-stars me-2"></i>Theme';
    };

    const currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    [toggleBtn, toggleMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                applyTheme(theme);
            });
        }
    });
}

function setupRTL() {
    const toggleBtn = document.getElementById('rtl-toggle');
    const toggleMobile = document.querySelector('.rtl-toggle-mobile');

    const applyRTL = (isRTL) => {
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        localStorage.setItem('rtl', isRTL);
    };

    const isRTL = localStorage.getItem('rtl') === 'true';
    applyRTL(isRTL);

    [toggleBtn, toggleMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const isCurrentRTL = document.documentElement.getAttribute('dir') === 'rtl';
                applyRTL(!isCurrentRTL);
            });
        }
    });
}

function updateServiceDetails() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    if (currentPage !== 'service-details.html') return;

    const params = new URLSearchParams(window.location.search);
    const serviceType = params.get('service') || 'fire';

    const serviceData = {
        'fire': {
            title: 'Fire & Smoke Cleanup',
            desc: 'Professional restoration services to reclaim your property from fire and smoke damage.',
            img: 'assets/images/service_fire_unique_2.jpg',
            intro: 'When fire strikes, the damage goes far beyond what is visible to the naked eye. Soot and smoke can penetrate walls, ducts, and personal belongings, causing long-term health risks and structural decay if not treated immediately.'
        },
        'structural': {
            title: 'Structural Rebuild',
            desc: 'Complete construction and restoration services to rebuild your home stronger than ever.',
            img: 'assets/images/service_structural_unique.jpg',
            intro: 'From structural framing and roofing to fine interior painting, our rebuild services ensure your property is restored to its pre-loss condition or better. We handle the entire construction process from permits to final inspection.'
        },
        'water': {
            title: 'Water Damage Repair',
            desc: 'Rapid response water mitigation and drying services to protect your structural integrity.',
            img: 'assets/images/service_water_unique.jpg',
            intro: 'Water damage can spread quickly and lead to mold growth within 24-48 hours. Our certified technicians use advanced extraction and industrial drying equipment to save your floors, walls, and personal property.'
        },
        'mold': {
            title: 'Mold Remediation',
            desc: 'Scientifically focused mold removal and air purification for a healthy environment.',
            img: 'assets/images/service_mold_unique.jpg',
            intro: 'Visible mold is often just the surface of a larger issue. We utilize specialized containment, HEPA air scrubbing, and antimicrobial treatments to safely remove mold spores and prevent their return to your home.'
        },
        'contents': {
            title: 'Contents Restoration',
            desc: 'Specialized cleaning for your personal belongings, from heirlooms to high-end electronics.',
            img: 'assets/images/service_contents_unique.jpg',
            intro: 'We understand that your belongings are irreplaceable. Our ultrasonic cleaning and chemical restoration techniques are designed to salvage items damaged by soot, smoke, or water, returning them to pristine condition.'
        },
        'insurance': {
            title: 'Insurance Consulting',
            desc: 'Expert guidance through the complex claims process to maximize your coverage.',
            img: 'assets/images/service_insurance_unique.jpg',
            intro: 'Navigating insurance claims after a disaster can be overwhelming. We work directly with your adjuster, providing the detailed scientific documentation required to ensure your claim is processed fairly and efficiently.'
        }
    };

    const data = serviceData[serviceType] || serviceData['fire'];

    const titleEl = document.getElementById('service-title');
    const descEl = document.getElementById('service-desc');
    const imgEl = document.getElementById('service-image');
    const introEl = document.getElementById('service-intro');

    if (titleEl) titleEl.innerText = data.title;
    if (descEl) descEl.innerText = data.desc;
    if (imgEl) imgEl.src = data.img;
    if (introEl) introEl.innerText = data.intro;

    // Update Page Title
    document.title = `${data.title} - RestoreX`;
}
