// ========================================
// 网站主脚本 - 高级毛玻璃风格版本
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// 初始化网站
function initializeWebsite() {
    setupNavigation();
    setupPortfolioFilter();
    setupScrollAnimations();
    setupContactForm();
    restoreHeroBackground();
    loadSavedData();
}

// ========== 导航栏交互 ==========
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle?.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            navMenu.style.display = 'none';
        });
    });
}

// ========== 作品集过滤 ==========
function setupPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ========== 滚动动画 ==========
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .skill-card, .service-card, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========== 联系表单 ==========
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            showError('请填写所有字段');
            return;
        }

        // 模拟发送（实际需要后端支持）
        console.log('表单数据:', { name, email, subject, message });

        showSuccess('✓ 消息已发送，我们会尽快回复！');

        form.reset();
    });
}

// ========== 背景恢复 ==========
function restoreHeroBackground() {
    const savedData = localStorage.getItem('websiteData');
    if (!savedData) return;

    try {
        const data = JSON.parse(savedData);
        if (data.hero && data.hero.bgUrl) {
            const heroVideo = document.getElementById('heroVideo');
            const heroBgImage = document.getElementById('heroBgImage');

            if (data.hero.bgType === 'video') {
                heroVideo.src = data.hero.bgUrl;
                heroVideo.classList.add('active');
                heroBgImage.classList.add('hidden');
            } else {
                heroBgImage.style.backgroundImage = `url('${data.hero.bgUrl}')`;
                heroBgImage.classList.remove('hidden');
                heroVideo.classList.remove('active');
            }
        }
    } catch (e) {
        console.error('背景恢复失败:', e);
    }
}

// ========== 加载保存数据 ==========
function loadSavedData() {
    const savedData = localStorage.getItem('websiteData');
    if (!savedData) return;

    try {
        const data = JSON.parse(savedData);

        // 恢复英雄区文字
        if (data.hero) {
            if (data.hero.badge) document.querySelector('.hero-badge').textContent = data.hero.badge;
            if (data.hero.titleLines) {
                const titleLines = document.querySelectorAll('.title-line');
                data.hero.titleLines.forEach((line, i) => {
                    if (titleLines[i]) titleLines[i].textContent = line;
                });
            }
            if (data.hero.description) document.querySelector('.hero-description').textContent = data.hero.description;
        }

        // 恢复关于区
        if (data.about && data.about.text) {
            const aboutContent = document.querySelector('.glass-panel.large');
            if (aboutContent) {
                aboutContent.innerHTML = `<h3>我的故事</h3>` + 
                    data.about.text.split('\n').map(line => `<p>${line}</p>`).join('');
            }
        }
    } catch (e) {
        console.error('数据加载失败:', e);
    }
}

// ========== 提示函数 ==========
function showSuccess(message) {
    const notification = document.createElement('div');
    notification.className = 'admin-success';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'admin-error';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}
