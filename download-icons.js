document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');

  if (!cardContainer || typeof sites === 'undefined') {
    console.error('❌ 未找到 card-container 或 sites 未定义');
    return;
  }

  const observer = new MutationObserver(() => {
    const cards = cardContainer.querySelectorAll('.card');

    if (cards.length === 0) return;

    cards.forEach((card, index) => {
      const site = sites[index];
      if (!site || !site.url) return;

      // 避免重复添加图标
      if (card.querySelector('.download-icon')) return;

      const icon = document.createElement('img');
      icon.src = "images/download-logo.png";
      icon.alt = "点击下载";
      icon.className = "download-icon";

      icon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(site.url, '_blank');
      });

      card.appendChild(icon);
    });

    observer.disconnect(); // 一次性监听，插入完就停止
  });

  // 开始监听 DOM 变化
  observer.observe(cardContainer, { childList: true, subtree: true });
});
