import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'AdsBot-Google',
        disallow: ['/'],
      },
      {
        userAgent: 'GoogleBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Yahoo Pipes 1.0',
        disallow: ['/'],
      },
      {
        userAgent: '008',
        disallow: ['/'],
      },
      {
        userAgent: 'voltron',
        disallow: ['/'],
      },
      {
        userAgent: 'Bytespider',
        disallow: ['/'],
      },
      {
        userAgent: 'Livelapbot',
        disallow: ['/'],
      },
      {
        userAgent: 'Megalodon',
        disallow: ['/'],
      },
      {
        userAgent: 'ia_archiver',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'img2dataset',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
      {
        userAgent: 'Omagili',
        disallow: ['/'],
      },
      {
        userAgent: 'FacebookBot',
        disallow: ['/'],
      },
      {
        userAgent: 'magpie-crawler',
        disallow: ['/'],
      },
      {
        userAgent: 'sitecheck.internetseer.com',
        disallow: ['/'],
      },
      {
        userAgent: 'Zealbot',
        disallow: ['/'],
      },
      {
        userAgent: 'MJ12bot',
        disallow: ['/'],
      },
      {
        userAgent: 'Mediapartners-Google*',
        disallow: ['/'],
      },
      {
        userAgent: 'UbiCrawler',
        disallow: ['/'],
      },
      {
        userAgent: 'DOC',
        disallow: ['/'],
      },
      {
        userAgent: 'Zao',
        disallow: ['/'],
      },
      {
        userAgent: 'MSIECrawler',
        disallow: ['/'],
      },
      {
        userAgent: 'SiteSnagger',
        disallow: ['/'],
      },
      {
        userAgent: 'WebStripper',
        disallow: ['/'],
      },
      {
        userAgent: 'Fetch',
        disallow: ['/'],
      },
      {
        userAgent: 'Offline Explorer',
        disallow: ['/'],
      },
      {
        userAgent: 'Teleport',
        disallow: ['/'],
      },
      {
        userAgent: 'WebZIP',
        disallow: ['/'],
      },
      {
        userAgent: 'linko',
        disallow: ['/'],
      },
      {
        userAgent: 'HTTrack',
        disallow: ['/'],
      },
      {
        userAgent: 'Microsoft.URL.Control',
        disallow: ['/'],
      },
      {
        userAgent: 'Xenu',
        disallow: ['/'],
      },
      {
        userAgent: 'larbin',
        disallow: ['/'],
      },
      {
        userAgent: 'libwww',
        disallow: ['/'],
      },
      {
        userAgent: 'ZyBORG',
        disallow: ['/'],
      },
      {
        userAgent: 'Download Ninja',
        disallow: ['/'],
      },
      {
        userAgent: 'fast',
        disallow: ['/'],
      },
      {
        userAgent: 'wget',
        disallow: ['/'],
      },
      {
        userAgent: 'grub-client',
        disallow: ['/'],
      },
      {
        userAgent: 'k2spider',
        disallow: ['/'],
      },
      {
        userAgent: 'NPBot',
        disallow: ['/'],
      },
      {
        userAgent: 'WebReaper',
        disallow: ['/'],
      },
      {
        userAgent: 'TwitterBot',
        disallow: ['/'],
      },
      {
        userAgent: 'facebookexternalhit',
        disallow: ['/'],
      },
      {
        userAgent: 'Discordbot',
        disallow: ['/'],
      },
      {
        userAgent: 'Bingbot',
        disallow: ['/'],
      },
      {
        userAgent: 'baidu',
        disallow: ['/'],
      },
      {
        userAgent: 'YandexBot',
        disallow: ['/'],
      },
      {
        userAgent: 'AppleBot',
        disallow: ['/'],
      },
      {
        userAgent: 'DuckDuckBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Baiduspider',
        disallow: ['/'],
      },
      {
        userAgent: 'Swiftbot',
        disallow: ['/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Nutch',
        disallow: ['/'],
      },
      {
        userAgent: 'AhrefsSiteAudit',
        crawlDelay: 10,
        disallow: ['/'],
      },
      {
        userAgent: 'HaoSouSpider',
        disallow: ['/'],
      },
      {
        userAgent: 'Sogou web spider',
        disallow: ['/'],
      },
      {
        userAgent: 'Sogou spider2',
        disallow: ['/'],
      },
    ],
  }
}
