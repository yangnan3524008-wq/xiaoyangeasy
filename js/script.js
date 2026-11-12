// ========================================
// 小羊不难 - 高级毛玻璃设计交互脚本
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initPortfolioFilter();
    initFormValidation();
    initScrollAnimations();
    initMouseGlow();
});

// ========== 导航交互 ==========
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const navMenu = document.querySelector('.nav-menu');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId !== '#') {
                navItems.forEach(i => i.style.opacity = '0.7');
                this.style.opacity = '1';
                
                const target = document.querySelector(targetId);
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 滚动时更新导航状态
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        navItems.forEach(item => {
            const targetId = item.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    const rect = target.getBoundingClientRect();
                    if (rect.top < 150 && rect.bottom > 150) {
                        navItems.forEach(i => i.style.opacity = '0.7');
                        item.style.opacity = '1';
                    }
                }
            }
        });
    });
}

// ========== 作品集过滤 ==========
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 过滤卡片
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = 'fade-in-up 0.6s ease-out';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ========== 表单验证 ==========
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                highlightInput(input);
            }

            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    highlightInput(input);
                }
            }
        });

        if (isValid) {
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = '✓ 消息已发送！';
            btn.disabled = true;

            setTimeout(() => {
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 2000);
        }
    });

    function highlightInput(input) {
        input.style.borderColor = 'rgba(255, 0, 85, 0.8)';
        input.style.backgroundColor = 'rgba(255, 0, 85, 0.1)';

        input.addEventListener('focus', function() {
            this.style.borderColor = 'rgba(255, 0, 85, 0.5)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });

        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = 'rgba(255, 0, 85, 0.8)';
                this.style.backgroundColor = 'rgba(255, 0, 85, 0.1)';
            }
        });
    }
}

// ========== 滚动动画 ==========
function initScrollAnimations() {
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

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.glass-card, .ability-card, .service-card, .testimonial, .portfolio-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ========== 鼠标发光效果 ==========
function initMouseGlow() {
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

console.log('🔮 高级毛玻璃设计已加载！');
