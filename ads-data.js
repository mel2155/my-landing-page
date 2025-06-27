// ad-script.js
// 这个脚本负责从 adsData 数组加载广告并动态插入到页面中。

document.addEventListener('DOMContentLoaded', () => {
    const adsContainer = document.getElementById('ads-container');

    if (!adsContainer || !adsData || adsData.length === 0) {
        console.log('未找到广告容器或广告数据。');
        return;
    }

    // 遍历 adsData 数组，为每个广告创建一个 HTML 元素
    adsData.forEach(ad => {
        const adLink = document.createElement('a');
        adLink.href = ad.link;
        adLink.target = '_blank'; // 在新标签页打开链接

        // 创建手机端图片
        const mobileImg = document.createElement('img');
        mobileImg.src = ad.mobileSrc;
        mobileImg.alt = ad.alt;
        mobileImg.classList.add('ad-banner', 'mobile-ad'); // 添加类名以便应用 CSS 样式

        // 创建 PC 端图片
        const pcImg = document.createElement('img');
        pcImg.src = ad.pcSrc;
        pcImg.alt = ad.alt;
        pcImg.classList.add('ad-banner', 'pc-ad'); // 添加类名以便应用 CSS 样式

        adLink.appendChild(mobileImg);
        adLink.appendChild(pcImg);

        adsContainer.appendChild(adLink);
    });
});
