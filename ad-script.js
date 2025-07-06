// ad-script.js - 最终优化版：自适应设备 + 自动切图 + 响应式 + 多广告支持 + 上下排列

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
      const wrapper = document.createElement('div'); // 新增包装器
      wrapper.className = 'ad-wrapper';

      const adLink = document.createElement('a');
      adLink.href = ad.link;
      adLink.target = '_blank';
      adLink.rel = 'noopener noreferrer';

      const img = document.createElement('img');
      img.src = isMobileView() ? ad.mobileImage : ad.pcImage;
      img.alt = ad.alt || '广告';
      img.classList.add(isMobileView() ? 'ad-image-mobile' : 'ad-image-pc');
      img.style.width = '100%';

      adLink.appendChild(img);
      wrapper.appendChild(adLink);      // 把广告链接包进 wrapper
      adContainer.appendChild(wrapper); // 把 wrapper 插入广告容器
    });
  }

  displayAds(adsData);
  window.addEventListener('resize', () => displayAds(adsData));
});
