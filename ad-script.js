// ad-script.js - 最终优化版：自适应设备 + 自动切图 + 响应式

document.addEventListener('DOMContentLoaded', function () {
  const adContainer = document.querySelector('.ad-container');

  // 判断是否为移动端视图
  function isMobileView() {
    return window.innerWidth <= 768;
  }

  /**
   * 显示广告
   * @param {Array} adArray - 广告数据数组
   */
  function displayAds(adArray) {
    if (!adContainer || adArray.length === 0) return;

    const ad = adArray[0]; // 默认显示第一条

    // 清空广告容器
    adContainer.innerHTML = '';

    // 创建 <a> 标签
    const adLink = document.createElement('a');
    adLink.href = ad.link;
    adLink.target = '_blank';
    adLink.rel = 'noopener noreferrer';

    // 创建图片（仅加载一张）
    const img = document.createElement('img');
    img.src = isMobileView() ? ad.mobileImage : ad.pcImage;
    img.alt = ad.alt || '广告';
    img.classList.add(isMobileView() ? 'ad-image-mobile' : 'ad-image-pc');

    // 插入 DOM
    adLink.appendChild(img);
    adContainer.appendChild(adLink);
  }

  // 首次加载执行
  displayAds(adsData);

  // 监听窗口变化，自动切图
  window.addEventListener('resize', () => {
    displayAds(adsData);
  });
});
