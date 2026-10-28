import { SITE_URL } from '../../lib/krisala-new-launch/config'

const BASE_URL = SITE_URL || 'https://hiranandanihinjewadiphase3.in'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/krisala-new-launch'],
      disallow: ['/privacy-policy', '/krisala-new-launch/privacy-policy', '/api/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
