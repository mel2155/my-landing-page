// 当 DOM 内容完全加载并解析后执行脚本
document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container'); // 获取卡片容器元素
  const loadingIndicator = document.getElementById('loading-indicator'); // 获取加载指示器元素

  // 如果加载指示器存在，则显示它
  if (loadingIndicator) {
    loadingIndicator.classList.add('show');
  }

  // 模拟异步加载数据。在实际项目中可替换为 fetch 等
  setTimeout(() => {
    // 检查 card 容器和 sites 数据有效
    if (cardContainer && typeof sites !== 'undefined' && Array.isArray(sites)) {
      const fragment = document.createDocumentFragment();

      sites.forEach(site => {
        const card = document.createElement('a');
        card.href = site.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = /^(https?:)?\/\//.test(site.image) ? site.image : 'logos/' + site.image;
        img.alt = site.name + ' Logo';
        img.loading = "lazy";

        const title = document.createElement('div');
        title.classList.add('card-title');
        title.textContent = site.name;

        card.appendChild(img);
        card.appendChild(title);
        fragment.appendChild(card);
      });

      cardContainer.appendChild(fragment); // 一次性挂载所有卡片
    } else {
      console.error("❌ 未能找到 card-container 或 sites 数据未正确加载。请确保 cards-from-guanli.js 正确定义了 'sites' 数组。");
    }

    // 数据加载完成后，隐藏加载动画
    if (loadingIndicator) {
      loadingIndicator.classList.remove('show');
    }
  }, 1000); // 模拟延迟，真实环境可移除
});
