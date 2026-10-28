import { SITE_URL } from '../../lib/krisala-new-launch/config'

const BASE_URL = SITE_URL || 'https://hiranandanihinjewadiphase3.in'

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/krisala-new-launch`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/krisala-new-launch/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
