// ad-script.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. 创建广告位的容器元素
    const adDiv = document.createElement('div');
    adDiv.className = 'ad-container'; // 应用 ad-styles.css 中定义的样式

    // 2. 查找您要插入广告的位置
    // 假设您想在 class 为 'header' 的 div 之后，或者 class 为 'app-icon' 的 div 之前插入。
    // 这里我们选择插入到 'header' div 之后。
    const headerDiv = document.querySelector('.header');

    if (headerDiv) {
        // 3. 在找到的元素之后插入广告位
        headerDiv.after(adDiv);

        // 4. 在广告位内部放置您的广告代码
        // 这里是示例占位内容，您需要替换为实际的广告平台代码
        adDiv.innerHTML = `<p>您的广告将显示在这里！</p>`;

        // 如果是 Google AdSense 或其他广告平台的代码，您会这样做：
        /*
        adDiv.innerHTML = `
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-XXXXXXXXXXXXX"
                 data-ad-slot="YYYYYYYYYY"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        `;
        */
        // 注意：某些广告脚本在动态插入后可能需要额外调用函数来初始化。
        // 对于 AdSense，上面的 `(adsbygoogle = window.adsbygoogle || []).push({});` 通常会处理。
        // 如果遇到广告不显示，请查阅您广告提供商的动态加载文档。

    } else {
        console.warn("未找到 .header 元素，广告位无法插入。请检查 HTML 结构。");
    }
});
