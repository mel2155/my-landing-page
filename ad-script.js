// ad-script.js - 广告脚本文件

// 当HTML文档加载和解析完毕后执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 1. 创建广告容器元素 (外层包裹)
    const adContainer = document.createElement('div');
    adContainer.classList.add('ad-container'); // 添加CSS类名，用于 ad-styles.css 中的样式控制

    // 2. 创建广告链接元素 (点击图片后会跳转到此链接)
    const adLinkContainer = document.createElement('a');
    // 定义广告点击后跳转的URL。**请务必将此URL替换为您的实际广告跳转链接！**
    const clickUrl = 'https://cs-site-cloud-deploy.pages.dev'; // <--- **在这里修改您的广告链接**
    adLinkContainer.href = clickUrl;
    adLinkContainer.target = '_blank'; // 设置点击链接在新标签页打开

    // 3. 创建PC端广告图片元素
    const pcAdImage = document.createElement('img');
    pcAdImage.classList.add('ad-image-pc'); // 添加CSS类名，用于在CSS中区分PC端图片

    // 4. 创建手机端广告图片元素
    const mobileAdImage = document.createElement('img');
    mobileAdImage.classList.add('ad-image-mobile'); // 添加CSS类名，用于在CSS中区分手机端图片

    // 5. 定义不同设备的广告图片路径
    // **重要：请确保这里的图片文件名（包括大小写）与您 'images/' 文件夹中的实际文件名称完全匹配！**
    // 假设您的图片文件扩展名是 .JPG。如果不是，请修改这里的 .JPG 为您实际的扩展名（例如 .png, .jpg）。
    const pcImageUrl = 'images/ad-banner-pc.JPG';   // PC端广告图片的相对路径
    const mobileImageUrl = 'images/ad-banner-mobile.JPG'; // 手机端广告图片的相对路径

    pcAdImage.src = pcImageUrl; // 设置PC端图片的源文件
    mobileAdImage.src = mobileImageUrl; // 设置手机端图片的源文件

    // 6. 添加图片无法加载时的替代文本 (对用户友好，也有利于搜索引擎优化)
    pcAdImage.alt = "PC端广告横幅，点击了解更多"; 
    mobileAdImage.alt = "手机端广告横幅，点击了解更多"; 

    // 7. 将图片元素添加到广告链接容器中
    adLinkContainer.appendChild(pcAdImage);
    adLinkContainer.appendChild(mobileAdImage);

    // 8. 将广告链接容器添加到主广告容器中
    adContainer.appendChild(adLinkContainer);

    // 9. 确定广告插入位置
    // 目标：将广告插入到 <header> 标签之后、id为 "card-container" 的 App 卡片区域之前。
    const cardContainer = document.getElementById('card-container'); // 获取App卡片容器元素

    if (cardContainer) {
        const headerElement = document.querySelector('header'); // 获取页面中的第一个 <header> 标签元素

        if (headerElement) {
            // 如果找到了header元素，将广告容器插入到header元素之后
            headerElement.after(adContainer);
        } else {
            // 如果没有找到header元素，作为备用方案，将广告插入到App卡片容器之前
            cardContainer.parentNode.insertBefore(adContainer, cardContainer);
            console.warn("未找到 'header' 元素，广告已作为备用方案插入到 'card-container' 之前。");
        }
    } else {
        console.warn("未找到 'card-container' 元素，广告可能无法插入。请检查HTML结构是否正确。");
    }
});
