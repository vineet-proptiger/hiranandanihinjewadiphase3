import './krisala.css'
import { Poppins, Open_Sans, Montserrat } from 'next/font/google'
import { CITY_DISPLAY, SITE_URL } from '../../lib/krisala-new-launch/config'
import * as krisalaConfig from '../../lib/krisala-new-launch/config'
import { ConfigProvider } from '../../lib/ConfigContext'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hiranandanihinjewadiphase3.in'),
  title: 'Hiranandani Hinjewadi Township | 2, 3 & 4 BHK Flats, Hinjewadi Phase 3, Krisala Everland, Pune',
  description: 'Hiranandani Hinjewadi Township — New Launch 2, 3 & 4 BHK Flats in Hinjewadi Phase 3, Krisala Everland, Pune. A 105-acre integrated township by Hiranandani Group on the Pune IT & Growth Corridor. Starting ₹79.99 Lacs*.',
  icons: {
    icon: '/h-favicon.svg',
    shortcut: '/h-favicon.svg',
    apple: '/h-favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: 'https://hiranandanihinjewadiphase3.in/krisala-new-launch',
  },
  openGraph: {
    title: 'Hiranandani Hinjewadi Township | 2, 3 & 4 BHK Flats, Hinjewadi Phase 3, Krisala Everland, Pune',
    description: 'Hiranandani Hinjewadi Township — New Launch 2, 3 & 4 BHK Flats in Hinjewadi Phase 3, Krisala Everland, Pune. A 105-acre integrated township by Hiranandani Group on the Pune IT & Growth Corridor. Starting ₹79.99 Lacs*.',
    url: 'https://hiranandanihinjewadiphase3.in/krisala-new-launch',
    siteName: 'Hiranandani Hinjewadi Township',
    images: [
      {
        url: '/krisala-new-launch/images/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Hiranandani Hinjewadi Township Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiranandani Hinjewadi Township | 2, 3 & 4 BHK Flats, Hinjewadi Phase 3, Krisala Everland, Pune',
    description: 'Hiranandani Hinjewadi Township — New Launch 2, 3 & 4 BHK Flats in Hinjewadi Phase 3, Krisala Everland, Pune. A 105-acre integrated township by Hiranandani Group on the Pune IT & Growth Corridor. Starting ₹79.99 Lacs*.',
    images: ['/krisala-new-launch/images/hero/banner1.webp'],
  },
}

export default function KrisalaLayout({ children }) {
  return (
    <ConfigProvider config={{ ...krisalaConfig }}>
      <div className="krisala-layout">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <GoogleTagManager gtmId="GTM-575H8R87" />
        <Script
          id="json-ld-schema-krisala"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Hiranandani Hinjewadi Township",
              "url": "https://hiranandanihinjewadiphase3.in/krisala-new-launch",
              "logo": "https://hiranandanihinjewadiphase3.in/krisala-new-launch/images/logo/logo.png",
              "image": "https://hiranandanihinjewadiphase3.in/krisala-new-launch/images/hero/banner1.webp",
              "description": "Hiranandani Hinjewadi Township, 105-acre integrated luxury township on Pune IT & Growth Corridor, Hinjewadi Phase 3 Krisala Everland, offering premium 2, 3 & 4 BHK residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hinjewadi Phase 3 Krisala Everland, IT & Growth Corridor",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411057",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 79.99 Lacs Onwards",
              "sameAs": [
                "https://hiranandanihinjewadiphase3.in/krisala-new-launch"
              ]
            })
          }}
        />
        <div className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} font-sans text-dark antialiased`}>
          <Script id="gtag-init-krisala" strategy="beforeInteractive">
            {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
          </Script>
          {children}
        </div>
      </div>
    </ConfigProvider>
  )
}
