export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/new-launch', '/krisala-new-launch'],
        disallow: ['/privacy-policy', '/new-launch/privacy-policy', '/krisala-new-launch/privacy-policy'],
      },
    ],
    sitemap: 'https://hiranandanihinjewadiphase3.in/sitemap.xml',
  }
}
