// ad-script.js

// 等待 DOMContentLoaded 事件触发，确保 HTML 文档完全加载和解析
document.addEventListener('DOMContentLoaded', function() {

    // 1. 创建广告位的容器元素
    const adDiv = document.createElement('div');
    // 为广告容器添加类名，以便应用 ad-styles.css 中定义的样式
    adDiv.className = 'ad-container';

    // 2. 查找您要插入广告的位置
    // 这里我们选择查找 class 为 'header' 的 div 元素。
    // 广告将被插入到这个元素之后。
    const headerDiv = document.querySelector('.header');

    // 检查是否成功找到了目标插入位置的元素
    if (headerDiv) {
        // 3. 在找到的元素（headerDiv）之后插入广告位（adDiv）
        headerDiv.after(adDiv);

        // 4. 定义不同设备的广告图片路径和共同的点击链接
        // **** 请根据您实际的图片文件名替换下面的值！****
        // 例如：'images/my-pc-ad-banner.jpg' 和 'images/my-mobile-ad-banner.png'
        const pcImageUrl = 'images/ad-banner-pc.jpg';   // <-- 您的 PC 端广告图片路径
        const mobileImageUrl = 'images/ad-banner-mobile.jpg'; // <-- 您的手机端广告图片路径
        const clickUrl = 'http://123.com';             // <-- 广告点击后跳转的URL

        // 创建一个链接元素，它将同时包裹 PC 和手机端的图片。
        // 这样，无论显示哪张图片，点击时都会跳转到同一个链接。
        const adLinkContainer = document.createElement('a');
        adLinkContainer.href = clickUrl;
        adLinkContainer.target = '_blank'; // 设置链接在新标签页打开
        adLinkContainer.rel = 'noopener noreferrer'; // 增强安全性，防止钓鱼攻击

        // 创建 PC 端广告图片元素
        const pcAdImage = document.createElement('img');
        pcAdImage.src = pcImageUrl;
        pcAdImage.alt = 'PC端广告横幅'; // 为图片添加描述性alt文本，对SEO和可访问性友好
        pcAdImage.className = 'ad-image-pc'; // 添加类名，用于 CSS 媒体查询控制其显示/隐藏

        // 创建手机端广告图片元素
        const mobileAdImage = document.createElement('img');
        mobileAdImage.src = mobileImageUrl;
        mobileAdImage.alt = '手机端广告横幅'; // 为图片添加描述性alt文本
        mobileAdImage.className = 'ad-image-mobile'; // 添加类名，用于 CSS 媒体查询控制其显示/隐藏

        // 将两张图片（PC端和手机端）都添加到链接容器中
        // CSS 会决定哪张图片最终显示
        adLinkContainer.appendChild(pcAdImage);
        adLinkContainer.appendChild(mobileAdImage);

        // 将包含图片的链接容器添加到广告位 div 中
        adDiv.appendChild(adLinkContainer);

        // 5. 可选：添加简单的点击追踪日志
        // 在实际生产环境中，这里会发送数据到广告分析平台
        adLinkContainer.addEventListener('click', function() {
            console.log('广告被点击了！跳转到: ' + clickUrl);
            // 示例：发送一个请求到您的服务器或广告平台，记录广告点击数据
            // fetch(`/api/track-ad-click?adId=yourCustomAdId&url=${encodeURIComponent(clickUrl)}`);
        });

    } else {
        // 如果没有找到 `.header` 元素，则在控制台发出警告
        console.warn("未找到 .header 元素，广告位无法插入。请检查 HTML 结构或目标选择器。");
    }
});
