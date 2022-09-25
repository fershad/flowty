module.exports = {
    "webflowUrl": "", // Example: https://my-website.webflow.io
    "css": {
        "critical": false,
        "purge": false
    },
    "embeds": {
        "optimiseYouTube": true,
        "lazyIframes": true
    },
    "js": {
        "webflow": {
            "remove": false
        },
        "jquery": {
            "remove": false
        },
    },
    "preloadNavigation": true,
    "images": {
        "webp": true,
        "avif": false,
    },
    "removeBranding": true,
    "videos": {
        "download": true,
        "disableAutoplay": false
    },
    "generateSitemap": false,
    "generateRobots": false,
    "sitemapExclude": ["/404"],
    "noindex": ["/404"],
    "customCodeHead": "",
    "customCodeBody": "",
    "customDomain": "" // Example: https://my-website.com
}