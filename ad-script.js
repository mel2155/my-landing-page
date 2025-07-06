// ad-script.js - 最终优化版：自适应设备 + 自动切图 + 响应式 + 多广告支持

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

    adContainer.innerHTML = ''; // 清空容器

    adArray.forEach((ad) => {
      const adLink = document.createElement('a');
      adLink.href = ad.link;
      adLink.target = '_blank';
      adLink.rel = 'noopener noreferrer';

      const img = document.createElement('img');
      img.src = isMobileView() ? ad.mobileImage : ad.pcImage;
      img.alt = ad.alt || '广告';
      img.classList.add(isMobileView() ? 'ad-image-mobile' : 'ad-image-pc');
      img.style.width = '100%'; // 可选样式

      adLink.appendChild(img);
      adContainer.appendChild(adLink);
    });
  }

  // 首次加载
  displayAds(adsData);

  // 响应式监听
  window.addEventListener('resize', () => {
    displayAds(adsData);
  });
});
