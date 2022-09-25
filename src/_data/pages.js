const crawlSite = require('../utils/crawlSite')
const config = require('./config')

module.exports = async function () {
  const { webflowUrl } = config
  const data = await crawlSite(webflowUrl)
  const pages = data.pages.map(page => ({
    path: page,
    sitemap: !config.sitemapExclude.includes(page),
    noindex: config.noindex.includes(page),
  }))

  console.log(`Found ${pages.length} pages`)
  return pages
}
