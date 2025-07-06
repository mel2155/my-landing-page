document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');

  // 如果卡片容器或 sites 数据不存在，终止
  if (!cardContainer || typeof sites === 'undefined') {
    console.error('❌ 未找到 card-container 或 sites 未定义');
    return;
  }

  // 等待主JS渲染完成卡片
  setTimeout(() => {
    const cards = cardContainer.querySelectorAll('.card');

    if (cards.length === 0) {
      console.warn('⚠️ 没有发现任何卡片 .card，请确认 content-list.js 是否渲染成功');
      return;
    }

    cards.forEach((card, index) => {
      const site = sites[index];
      if (!site || !site.url) return;

      // 创建下载图标 <img>
      const icon = document.createElement('img');
      icon.src = "images/download-logo.png"; // 确保路径正确
      icon.alt = "点击下载";
      icon.className = "download-icon";

      // 点击事件：打开跳转链接
      icon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // 阻止冒泡，避免触发父 a 标签跳转
        window.open(site.url, '_blank');
      });

      // 插入到卡片底部
      card.appendChild(icon);
    });
  }, 500); // 延迟 500ms 确保卡片已渲染完毕
});
