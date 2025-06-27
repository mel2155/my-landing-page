// 当 DOM 内容完全加载并解析后执行脚本
document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container'); // 获取卡片容器元素
  const loadingIndicator = document.getElementById('loading-indicator'); // 获取加载指示器元素

  // 如果加载指示器存在，则显示它
  if (loadingIndicator) {
      loadingIndicator.classList.add('show');
  }

  // 模拟异步加载数据。在实际项目中，这里会替换为真实的数据请求（例如 fetch API）
  // 这里的 setTimeout 仅为演示加载动画效果，实际项目中应根据数据加载完成的时机来隐藏
  setTimeout(() => {
    // 检查卡片容器是否存在，并且 'sites' 变量已定义且为数组
    if (cardContainer && typeof sites !== 'undefined' && Array.isArray(sites)) {
      // 创建 DocumentFragment 提高 DOM 操作性能，避免多次重绘和回流
      const fragment = document.createDocumentFragment();

      // 遍历 'sites' 数组中的每个站点数据
      sites.forEach(site => {
        const card = document.createElement('a'); // 创建一个 <a> 标签作为卡片容器
        card.href = site.url; // 设置链接目标 URL
        card.target = "_blank"; // 在新标签页打开链接
        card.rel = "noopener noreferrer"; // 提高安全性，防止钓鱼攻击
        card.classList.add('card'); // 为卡片添加 CSS 类名 'card'

        const img = document.createElement('img'); // 创建 <img> 标签用于显示 Logo
        img.src = "logos/" + site.image; // 设置图片源路径
        img.alt = site.name + ' Logo'; // 设置图片的替代文本，用于无图或无障碍访问
        img.loading = "lazy"; // 优化图片加载性能：当图片进入视口时才加载

        const title = document.createElement('div'); // 创建 <div> 标签用于显示 App 标题
        title.classList.add('card-title'); // 为标题添加 CSS 类名 'card-title'
        title.textContent = site.name; // 设置标题文本内容

        card.appendChild(img); // 将图片添加到卡片中
        card.appendChild(title); // 将标题添加到卡片中
        fragment.appendChild(card); // 将卡片添加到 DocumentFragment，而不是直接添加到 DOM
      });
      cardContainer.appendChild(fragment); // 一次性将 DocumentFragment 添加到 DOM，提高渲染效率
    } else {
      // 如果 'sites' 数据未正确加载，输出错误信息到控制台
      console.error("未能找到 card-container 元素或 'sites' 数据未正确加载。请确保 cards-from-guanli.js 正确定义了 'sites' 数组。");
    }

    // 数据加载完成后，隐藏加载指示器
    if (loadingIndicator) {
        loadingIndicator.classList.remove('show');
    }

  }, 600); // 模拟加载延迟 600 毫秒，让加载动画效果更明显
});
