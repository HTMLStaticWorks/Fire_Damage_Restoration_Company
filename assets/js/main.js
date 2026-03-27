// RestoreX - Main JS

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderHeader();
    renderFooter();
    setupTheme();
    setupRTL();
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
                    const isActive = link.url === currentPage ? 'active' : '';
                    return `<a href="${link.url}" class="nav-link fw-bold ${isActive}">${link.name}</a>`;
                }).join('')}
            </div>

            <!-- Header Actions (Visible > 1100px) -->
            <div class="desktop-only align-items-center gap-1">
                <a href="dashboard.html" class="btn btn-dark text-white fw-bold">Dashboard</a>
                <a href="login.html" class="btn btn-outline border-2">Login</a>
                <a href="register.html" class="btn btn-primary">Sign Up</a>
                <button id="theme-toggle" class="btn btn-sm btn-dark ms-1" style="padding: 4px;"><img src="assets/images/icons/moon_icon.png" class="img-icon theme-icon-img" alt="Theme"></button>
                <button id="rtl-toggle" class="btn btn-sm btn-secondary">RTL</button>
            </div>
        </div>
    </nav>

    <!-- Offcanvas Mobile Menu -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                ${navLinks.map(link => {
                    const isActive = link.url === currentPage ? 'active' : '';
                    return `<li class="nav-item"><a class="nav-link ${isActive}" href="${link.url}">${link.name}</a></li>`;
                }).join('')}
                <hr>
                <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                <li class="nav-item"><a class="nav-link" href="register.html">Get Started</a></li>
                <li class="nav-item d-flex gap-2 mt-3">
                    <button class="btn btn-light w-50 theme-toggle-mobile">Theme</button>
                    <button class="btn btn-secondary w-50 rtl-toggle-mobile">RTL</button>
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
                <div class="col-lg-4 text-dark">
                    <img src="assets/images/logo.svg" height="40" class="mb-3">
                    <p>Premium disaster recovery services. Restoring peace of mind since 2026.</p>
                    <div class="social-links d-flex gap-3">
                        <a href="#" class="text-dark"><img src="assets/images/icons/fb_icon.png" class="img-icon" alt="Facebook"></a>
                        <a href="#" class="text-dark"><img src="assets/images/icons/tw_icon.png" class="img-icon" alt="Twitter"></a>
                        <a href="#" class="text-dark"><img src="assets/images/icons/ig_icon.png" class="img-icon" alt="Instagram"></a>
                    </div>
                </div>
                <div class="col-lg-2">
                    <h5 class="fw-bold">Company</h5>
                    <ul class="list-unstyled">
                        <li><a href="about.html" class="text-decoration-none text-muted">About Us</a></li>
                        <li><a href="services.html" class="text-decoration-none text-muted">Services</a></li>
                        <li><a href="blog.html" class="text-decoration-none text-muted">Blog</a></li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <h5 class="fw-bold">Support</h5>
                    <ul class="list-unstyled">
                        <li><a href="contact.html" class="text-decoration-none text-muted">Contact</a></li>
                        <li><a href="index.html#faqAccordion" class="text-decoration-none text-muted">FAQ</a></li>
                        <li><a href="dashboard.html" class="text-decoration-none text-muted">Client Portal</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h5 class="fw-bold">Newsletter</h5>
                    <p class="small-text">Subscribe for emergency tips and updates.</p>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Email address">
                        <button class="btn btn-primary">Join</button>
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <div class="d-flex flex-wrap justify-content-between align-items-center">
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
        if (toggleBtn) toggleBtn.innerHTML = theme === 'dark' ? '<img src="assets/images/icons/sun_icon.png" class="img-icon theme-icon-img" alt="Sun">' : '<img src="assets/images/icons/moon_icon.png" class="img-icon theme-icon-img" alt="Moon">';
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
