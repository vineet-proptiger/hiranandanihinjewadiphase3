import './heera.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/heera/config'
import { faviconImage } from '../../lib/heera/images'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hiranandanihinjewadiphase3.in'),
  title: 'Hiranandani Hinjewadi Township | 2, 3 & 4 BHK Flats, Hinjewadi Phase 3, Krisala Everland, Pune',
  description: 'Hiranandani Hinjewadi Township — New Launch 2, 3 & 4 BHK Flats in Hinjewadi Phase 3, Krisala Everland, Pune. A 105-acre integrated township by Hiranandani Group on the Pune IT & Growth Corridor. Starting ₹79.99 Lacs*.',
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: 'https://hiranandanihinjewadiphase3.in/new-launch',
  },
  openGraph: {
    title: 'Hiranandani Hinjewadi Township | 2, 3 & 4 BHK Flats, Hinjewadi Phase 3, Krisala Everland, Pune',
    description: 'Hiranandani Hinjewadi Township — New Launch 2, 3 & 4 BHK Flats in Hinjewadi Phase 3, Krisala Everland, Pune. A 105-acre integrated township by Hiranandani Group on the Pune IT & Growth Corridor. Starting ₹79.99 Lacs*.',
    url: 'https://hiranandanihinjewadiphase3.in/new-launch',
    siteName: 'Hiranandani Hinjewadi Township',
    images: [
      {
        url: '/heera/images/banner/banner1.webp',
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
    images: ['/heera/images/banner/banner1.webp'],
  },
}

import SmoothScroll from '../../components/heera/SmoothScroll'

export default function HeeraLayout({ children }) {  
  return (
    <div className="heera-layout">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <Script
        id="json-ld-schema-heera"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Hiranandani Hinjewadi Township",
            "url": "https://hiranandanihinjewadiphase3.in",
            "logo": "https://hiranandanihinjewadiphase3.in/heera/images/logo/logo.png",
            "image": "https://hiranandanihinjewadiphase3.in/heera/images/banner/banner1.webp",
            "description": "Hiranandani Hinjewadi Township, 105-acre integrated luxury township on Pune IT & Growth Corridor, Hinjewadi Phase 3, offering premium 2, 3 & 4 BHK residences.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hinjewadi Phase 3, IT & Growth Corridor",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411057",
              "addressCountry": "IN"
            },
            "telephone": "+919718344024",
            "priceRange": "₹ 79.99 Lacs Onwards",
            "sameAs": [
              "https://hiranandanihinjewadiphase3.in"
            ]
          })
        }}
      />
      <div className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init-heera" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </div>
    </div>
  )
}
