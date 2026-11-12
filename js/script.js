// ========================================
// 小羊不难 - 交互脚本
// 使用 Anime.js + 原生 API
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    setupNavigation();
    setupFormValidation();
    setupPortfolioFilters();
    setupIntersectionObserver();
    setupSmoothScroll();
});

// ========== 1. 初始化动画 ==========
function initAnimations() {
    // 英雄标题动画
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        anime({
            targets: '.hero-title .word',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutQuad',
            delay: anime.stagger(100, { start: 200 })
        });
    }

    // 滚动指示器动画
    anime({
        targets: '.scroll-indicator',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: 1000
    });

    // 按钮动画
    anime({
        targets: '.hero-buttons .btn',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuad',
        delay: anime.stagger(100, { start: 600 })
    });
}

// ========== 2. 导航栏处理 ==========
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');

    // 导航链接点击处理
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            if (hamburger) {
                navMenu.classList.remove('active');
            }

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 汉堡菜单（移动端）
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        navMenu.addEventListener('click', function() {
            this.classList.remove('active');
        });
    }

    // 滚动时更新导航高亮
    window.addEventListener('scroll', updateNavHighlight);
}

function updateNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// ========== 3. 平滑滚动 ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== 4. 表单验证 ==========
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea, select');
        const checkbox = form.querySelector('input[type="checkbox"]');
        
        let isValid = true;

        inputs.forEach(input => {
            const errorElement = input.parentElement.querySelector('.form-error');
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
                if (errorElement) {
                    errorElement.textContent = '此字段不能为空';
                    errorElement.classList.add('show');
                }
            } else {
                input.style.borderColor = '';
                if (errorElement) {
                    errorElement.classList.remove('show');
                }

                // 邮箱格式验证
                if (input.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        isValid = false;
                        input.style.borderColor = '#ef4444';
                        if (errorElement) {
                            errorElement.textContent = '请输入有效的邮箱';
                            errorElement.classList.add('show');
                        }
                    }
                }
            }
        });

        if (!checkbox.checked) {
            isValid = false;
            alert('请同意隐私条款');
        }

        if (isValid) {
            const submitBtn = form.querySelector('.btn-primary');
            const originalText = submitBtn.innerHTML;
            
            anime({
                targets: submitBtn,
                scale: [1, 0.95, 1],
                duration: 300,
                easing: 'easeInOutQuad'
            });

            submitBtn.innerHTML = '发送中...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '✓ 已发送';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
            }, 800);
        }
    });

    form.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('input', function() {
            this.style.borderColor = '';
            const errorElement = this.parentElement.querySelector('.form-error');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        });
    });
}

// ========== 5. 作品集过滤 ==========
function setupPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: 0,
                        scale: 0.95,
                        duration: 300,
                        easing: 'easeOutQuad',
                        complete: function() {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// ========== 6. 交叉观察器（滚动动画） ==========
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                // 动画卡片
                if (entry.target.classList.contains('portfolio-card')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutQuad'
                    });
                }

                // 动画技能条
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const percent = progressBar.style.getPropertyValue('--skill-percent');
                        anime({
                            targets: progressBar,
                            width: percent,
                            duration: 1500,
                            easing: 'easeOutQuad'
                        });
                    }
                }

                // 动画博客卡片
                if (entry.target.classList.contains('blog-card')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 500,
                        easing: 'easeOutQuad'
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有可动画元素
    document.querySelectorAll('.portfolio-card, .skill-item, .blog-card, .about-stats').forEach(el => {
        observer.observe(el);
    });
}

// ========== 7. 鼠标跟踪效果 ==========
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach((orb, index) => {
        const x = (e.clientX / window.innerWidth) * 50;
        const y = (e.clientY / window.innerHeight) * 50;
        orb.style.transform = `translate(${x * (index + 1) * 0.5}px, ${y * (index + 1) * 0.5}px)`;
    });
});

// ========== 8. 悬浮卡片效果 ==========
document.querySelectorAll('.portfolio-card, .blog-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', xPercent + '%');
        card.style.setProperty('--mouse-y', yPercent + '%');
    });
});

// ========== 9. 页面加载完成动画 ==========
window.addEventListener('load', () => {
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad'
    });
});

// ========== 10. 响应式菜单 ==========
function handleResponsive() {
    const navMenu = document.querySelector('.navbar-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 768) {
        if (navMenu) navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResponsive);

console.log('🐑 小羊不难网站已加载完成！');
