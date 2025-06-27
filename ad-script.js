// ad-script.js
// 这个文件包含显示广告的逻辑

document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.querySelector('.ad-container');

    // adsData 变量在 ads-data.js 中定义，并且因为它先加载，所以在这里是可用的。

    /**
     * 函数：displayAds
     * 作用：在 adContainer 中显示广告。
     * 默认情况下，它显示 adsData 数组中的第一个广告。
     * 您可以修改此函数以实现随机显示、轮播等功能。
     * @param {Array} adArray - 包含广告数据的数组。
     */
    function displayAds(adArray) {
        if (!adContainer) {
            console.error('未在 DOM 中找到广告容器 (.ad-container)。');
            return;
        }

        // 清除广告容器中任何现有内容
        adContainer.innerHTML = '';

        // 对于此示例，我们显示数组中的第一个广告。
        // 您可以更改 'adArray[0]' 以实现不同的逻辑（例如，随机、轮播）。
        const adToDisplay = adArray[0]; 

        if (adToDisplay) {
            // 为广告链接创建锚点标签
            const adLinkElement = document.createElement('a');
            adLinkElement.href = adToDisplay.link;
            adLinkElement.target = "_blank"; // 在新标签页中打开链接
            adLinkElement.rel = "noopener noreferrer"; // 安全最佳实践

            // 创建PC版广告图片
            const pcImg = document.createElement('img');
            pcImg.src = adToDisplay.pcImage;
            pcImg.alt = adToDisplay.alt + " (PC 版本)";
            pcImg.classList.add('ad-image-pc'); // 应用PC端样式/响应式CSS类

            // 创建移动版广告图片
            const mobileImg = document.createElement('img');
            mobileImg.src = adToDisplay.mobileImage;
            mobileImg.alt = adToDisplay.alt + " (移动版本)";
            mobileImg.classList.add('ad-image-mobile'); // 应用移动端样式/响应式CSS类

            // 将两个图片版本都添加到锚点标签中
            adLinkElement.appendChild(pcImg);
            adLinkElement.appendChild(mobileImg);

            // 将整个广告元素（链接 + 图片）添加到广告容器中
            adContainer.appendChild(adLinkElement);
        } else {
            console.warn('adArray 中没有可供显示的广告。');
        }
    }

    // 页面加载时调用函数显示广告
    displayAds(adsData); // 这里直接使用 adsData 变量

    /*
    // --- 可选：实现广告轮播 ---
    // 此示例将每10秒轮播一次您的广告。
    let currentAdIndex = 0;
    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % adsData.length; // 循环切换广告
        adContainer.innerHTML = ''; // 清除之前的广告
        const adToDisplay = adsData[currentAdIndex];
        if (adToDisplay) {
            const adLinkElement = document.createElement('a');
            adLinkElement.href = adToDisplay.link;
            adLinkElement.target = "_blank";
            adLinkElement.rel = "noopener noreferrer";

            const pcImg = document.createElement('img');
            pcImg.src = adToDisplay.pcImage;
            pcImg.alt = adToDisplay.alt + " (PC 版本)";
            pcImg.classList.add('ad-image-pc');

            const mobileImg = document.createElement('img');
            mobileImg.src = adToDisplay.mobileImage;
            mobileImg.alt = adToDisplay.alt + " (移动版本)";
            mobileImg.classList.add('ad-image-mobile');

            adLinkElement.appendChild(pcImg);
            adLinkElement.appendChild(mobileImg);
            adContainer.appendChild(adLinkElement);
        }
    }, 10000); // 每10秒轮播一次（10000毫秒）
    */

    /*
    // --- 可选：页面加载时显示随机广告 ---
    // 此示例将从您的数组中随机选择一个广告进行显示。
    // 如果您更喜欢随机显示，请取消此部分的注释并注释掉初始的 `displayAds(adsData);` 调用。
    // const randomIndex = Math.floor(Math.random() * adsData.length);
    // displayAds([adsData[randomIndex]]); // 仅传递包含所选随机广告的数组
    */
});
