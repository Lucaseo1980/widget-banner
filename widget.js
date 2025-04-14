(function(){
    function insertBanner(p) {
        var banner = document.createElement('div');
        banner.className = 'banner';
        banner.innerHTML = `
            <div class="banner-icon">
                <img src="https://static.wixstatic.com/shapes/fdccc5_4a10ff7a1f594ac09572a25c8a13c2f2.svg" alt="Smile Icon">
            </div>
            <div class="banner-text">
                <h3>Smile Brighter Today!</h3>
                <p>Discover affordable dental care at Open & Affordable Dental.</p>
            </div>
            <a href="https://www.openandaffordable.com/services" class="banner-button" target="_blank">Browse Services</a>
        `;
        p.parentNode.insertBefore(banner, p);
    }

    function injectCSS() {
        var style = document.createElement('style');
        style.innerHTML = ".banner { display: flex; align-items: center; justify-content: space-between; background-color: #f4f4f4; padding: 5px 15px; border-radius: 10px; font-family: Avenir, sans-serif; }" +
        ".banner-icon { width: 70px; height: 70px; background-color: #ffffff; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-right: 15px; }" +
        ".banner-icon img { width: 50px; height: 50px; }" +
        ".banner-text { flex-grow: 1; color: #333; }" +
        ".banner-text h3 { margin: 0; font-size: 1rem; font-weight: bold; }" +
        ".banner-text p { margin: 5px 0 0; font-size: 0.9rem; color: #666; }" +
        ".banner-button { background-color: #fdd531; color: black; padding: 10px 20px; border: none; border-radius: 20px; font-size: 0.9rem; font-weight: bold; cursor: pointer; text-decoration: none; }" +
        ".banner-button:hover { background-color: #d43838; }";
        document.head.appendChild(style);
    }

    document.addEventListener('DOMContentLoaded', function() {
        injectCSS();

        setTimeout(function() {
            var paragraphs = document.querySelectorAll('p.N2g-j');
            if (paragraphs.length > 0) {
                insertBanner(paragraphs[0]);
                if (paragraphs.length > 2) insertBanner(paragraphs[1]);
                if (paragraphs.length > 4) insertBanner(paragraphs[Math.floor(paragraphs.length/2)]);
                insertBanner(paragraphs[paragraphs.length - 1]);
            } else {
                console.log('No blog paragraphs found.');
            }
        }, 1200); // wait 1200 milliseconds
    });
})();
