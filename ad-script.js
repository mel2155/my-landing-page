// ad-script.js
// 这个文件包含显示广告的逻辑

document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.querySelector('.ad-container');

    // adsData 变量在 ads-data.js 中定义，并且因为它在 index.html 中先于此文件加载，所以在这里是可用的。

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

        // 清除广告容器中任何现有内容，以防有旧的或静态的内容
        adContainer.innerHTML = '';

        // *** 选择要显示的广告逻辑 ***
        // 默认：显示数组中的第一个广告。
        const adToDisplay = adArray[0]; 

        // 如果您希望每次加载都显示随机广告，可以使用下面的代码块（取消注释并注释掉上面一行）：
        // if (adArray.length === 0) {
        //     console.warn('没有可用的广告数据。');
        //     return;
        // }
        // const randomIndex = Math.floor(Math.random() * adArray.length);
        // const adToDisplay = adArray[randomIndex];

        if (adToDisplay) {
            // 创建一个 <a> 标签作为广告的链接
            const adLinkElement = document.createElement('a');
            adLinkElement.href = adToDisplay.link;
            adLinkElement.target = "_blank"; // 在新标签页中打开链接
            adLinkElement.rel = "noopener noreferrer"; // 安全最佳实践，防止钓鱼攻击

            // 创建 PC 端广告的 <img> 标签
            const pcImg = document.createElement('img');
            pcImg.src = adToDisplay.pcImage;
            pcImg.alt = adToDisplay.alt + " (PC 版本)";
            // 添加 ad-image-pc 类，与 ad-styles.css 中的样式规则对应
            pcImg.classList.add('ad-image-pc'); 

            // 创建移动端广告的 <img> 标签
            const mobileImg = document.createElement('img');
            mobileImg.src = adToDisplay.mobileImage;
            mobileImg.alt = adToDisplay.alt + " (移动版本)";
            // 添加 ad-image-mobile 类，与 ad-styles.css 中的样式规则对应
            mobileImg.classList.add('ad-image-mobile');

            // 将 PC 和移动端图片都添加到 <a> 标签中
            // ad-styles.css 会根据屏幕尺寸决定显示哪一个
            adLinkElement.appendChild(pcImg);
            adLinkElement.appendChild(mobileImg);

            // 将完整的广告链接元素（包含图片）添加到页面上的广告容器中
            adContainer.appendChild(adLinkElement);
        } else {
            console.warn('adArray 中没有可供显示的广告。请检查 ads-data.js 文件。');
        }
    }

    // --- 在页面加载完成后执行广告显示逻辑 ---
    displayAds(adsData); // 调用函数显示广告，传入从 ads-data.js 获取的 adsData 数组

    /*
    // --- 可选：实现广告轮播 ---
    // 此示例将每10秒轮播一次您的广告。
    // 如果您想启用此功能，请取消注释以下代码块，并考虑注释掉上面的 `displayAds(adsData);`。
    let currentAdIndex = 0;
    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % adsData.length; // 循环切换广告索引
        // 重新调用 displayAds 函数来更新广告
        displayAds([adsData[currentAdIndex]]); // 传递一个只包含当前广告的数组
    }, 10000); // 每10秒（10000毫秒）切换一次
    */
});
