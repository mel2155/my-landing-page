document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');

  if (!cardContainer || typeof sites === 'undefined') {
    console.error('未找到 card-container 或 sites 未定义');
    return;
  }

  // 延迟等待主 JS 渲染完卡片
  setTimeout(() => {
    const cards = cardContainer.querySelectorAll('.card');

    cards.forEach((card, index) => {
      const site = sites[index];
      if (!site || !site.url) return;

      const icon = document.createElement('img');
      icon.src = "images/download-logo.png";  // 图标文件在根目录
      icon.alt = "点击下载";
      icon.className = "download-icon";

      icon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(site.url, '_blank');
      });

      card.appendChild(icon);
    });
  }, 100);
});
