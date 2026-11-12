// ===== 导航栏切换 =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 移除所有 active 类
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    // 添加 active 类到当前链接
    this.classList.add('active');
    
    // 平滑滚动到对应区域
    const sectionId = this.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== 页面滚动时更新导航栏 =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    }
  });
});

// ===== 探索作品按钮 =====
document.querySelector('.cta-btn').addEventListener('click', () => {
  document.getElementById('design').scrollIntoView({ behavior: 'smooth' });
});

// ===== 作品卡片点击事件 =====
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', function() {
    const title = this.querySelector('.portfolio-info h3').textContent;
    console.log('点击了作品:', title);
    // 你可以在这里添加模态框、弹窗或跳转逻辑
  });
});

// ===== 联系按钮 =====
document.querySelector('.contact-btn').addEventListener('click', () => {
  // 发送邮件链接
  window.location.href = 'mailto:hello@xiaoyang.com';
});

// ===== 页面加载完成后的动画 =====
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

console.log('✨ 欢迎来到小羊不难的作品集！');
