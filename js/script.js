// ========================================
// 小羊不难 - 卡通涂鸦风作品集交互脚本
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupPortfolioInteraction();
    setupFormValidation();
    setupScrollAnimations();
});

// ========== 导航栏处理 ==========
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            if (navMenu) {
                navMenu.classList.remove('active');
            }

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offset = 80;
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });
}

// ========== 作品集交互 ==========
function setupPortfolioInteraction() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('show');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('show');
                }
            });
        });
    });
}

// ========== 表单验证 ==========
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b9d';
            } else {
                input.style.borderColor = '#000';

                if (input.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        isValid = false;
                        input.style.borderColor = '#ff6b9d';
                    }
                }
            }
        });

        if (isValid) {
            const submitBtn = form.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = '✓ 消息已发送！';

            setTimeout(() => {
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                inputs.forEach(input => {
                    input.style.borderColor = '#000';
                });
            }, 2000);
        }
    });

    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', function() {
            this.style.borderColor = '#000';
        });
    });
}

// ========== 滚动动画 ==========
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.portfolio-item, .capability-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

console.log('🐑 小羊不难 - 卡通涂鸦风作品集已加载！');
