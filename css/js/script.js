// ========== 平滑滚动 ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== 表单提交 ==========
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formInputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#64748b';
        }
    });
    
    if (isValid) {
        alert('感谢您的消息！我会尽快回复您。');
        this.reset();
    } else {
        alert('请填写所有字段');
    }
});

// ========== 导航栏高亮 ==========
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== 控制台欢迎信息 ==========
console.log('%c欢迎来到小阳的网站！', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c小阳在努力~', 'color: #ec4899; font-size: 16px;');
