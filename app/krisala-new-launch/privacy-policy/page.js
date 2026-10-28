'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PHONE_NUMBER, PHONE_DISPLAY } from '../../../lib/krisala-new-launch/config'
import AosInit from '../../../components/krisala-new-launch/AosInit'

const GOLD = '#AF751C'
const GOLD_DARK = '#915E12'

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white font-poppins krisala-layout">
      <AosInit />

      {/* ── Navbar (Sticky/Fixed) ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 py-1.5 md:py-2 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
        style={{
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        }}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[55px] md:h-[68px] lg:h-[72px] max-w-[1400px]">
          <Link href="/krisala-new-launch" className="flex items-center">
            <Image
              src="/krisala-new-launch/images/logo/logo.png"
              alt="Hiranandani Hinjewadi Township"
              width={160}
              height={50}
              className="h-[38px] sm:h-[42px] md:h-[48px] lg:h-[54px] w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/krisala-new-launch"
            className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
            style={{ background: GOLD }}
            onMouseEnter={(e) => { e.currentTarget.style.background = GOLD_DARK }}
            onMouseLeave={(e) => { e.currentTarget.style.background = GOLD }}
          >
            <i className="fa-solid fa-arrow-left text-[11px]" />
            <span className="hidden sm:inline">BACK TO HOME</span>
            <span className="sm:hidden">HOME</span>
          </Link>
        </div>
      </nav>

      {/* Spacer for Fixed Nav */}
      <div className="h-[68px] md:h-[84px]"></div>

      {/* ── Hero Banner ── */}
      <section
        className="relative flex items-center justify-center text-center py-12 sm:py-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #1A1A1A 60%, #111111 100%)',
        }}
      >
        <div className="relative z-10 px-4" data-aos="fade-up">
          <h1
            className="text-white font-black mb-3 text-[30px] sm:text-[42px] md:text-[48px] tracking-tight leading-tight"
          >
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-xs sm:text-sm font-semibold">
            <Link href="/krisala-new-launch" className="hover:underline" style={{ color: GOLD }}>
              Home
            </Link>
            <span>›</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-10 sm:py-16 bg-[#F8F9FA]">
        <div
          className="container mx-auto px-4 md:px-8 max-w-[960px]"
          data-aos="fade-up"
        >
          <div
            className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sm:p-10 md:p-12"
          >
            {/* Intro */}
            <p className="mb-6 sm:mb-8 text-sm sm:text-[15px] leading-relaxed text-gray-700">
              At{' '}
              <Link
                href="/krisala-new-launch"
                style={{ color: GOLD, fontWeight: '700' }}
              >
                Hiranandani Hinjewadi Township
              </Link>{' '}
              (Authorized Marketing Partner), we respect your privacy and are committed to safeguarding your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
            </p>

            {/* ── Section 1 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>1</span>
                Updates to This Policy
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 pl-10 sm:pl-11">
                This Privacy Policy may be updated from time to time without prior notice. We encourage you to review this page periodically to stay informed about any changes.
              </p>
            </div>

            {/* ── Section 2 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>2</span>
                Information We Collect
              </h2>
              <div className="pl-10 sm:pl-11">
                <p className="mb-3 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                  When you visit or interact with our website, we may collect the following information:
                </p>
                <ul className="space-y-2 mb-4 pl-4">
                  {[
                    'Personal details you voluntarily provide (e.g., name, phone number, email address)',
                    'Technical and tracking data, such as:',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                      <span style={{ color: GOLD, fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1.5 mb-4 pl-8">
                  {[
                    'Click IDs (GCLID, FBCLID, etc.)',
                    'IP address',
                    'Device type and model',
                    'Browser type and version',
                    'Operating system',
                    'Date and time of access',
                    'Pages visited and referring URLs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13.5px] sm:text-[14px] text-gray-500 leading-relaxed">
                      <span style={{ color: GOLD, flexShrink: 0, marginTop: '2px' }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-500 italic">
                  This data is collected via form submissions, cookies, pixels, and other tracking technologies for analytics, personalization, and advertising purposes.
                </p>
              </div>
            </div>

            {/* ── Section 3 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>3</span>
                Purpose of Data Collection
              </h2>
              <ul className="space-y-2.5 pl-10 sm:pl-11">
                {[
                  'Respond to your inquiries and service requests',
                  'Provide relevant product and project updates',
                  'Improve website performance and user experience',
                  'Run marketing campaigns and track conversions using tools like Google Ads Enhanced Conversions, Meta Pixel, and Google Analytics',
                  'Analyze visitor behavior to optimize communication and targeting strategies',
                  'Facilitate remarketing campaigns to show relevant ads across platforms',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                    <span style={{ color: GOLD, fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs sm:text-sm text-gray-500 pl-10 sm:pl-11">
                You may opt out of promotional communications at any time.
              </p>
            </div>

            {/* ── Section 4 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>4</span>
                Use of Cookies and Tracking Technologies
              </h2>
              <ul className="space-y-2 pl-10 sm:pl-11">
                {[
                  'Session continuity and site security',
                  'Personalized user experiences',
                  'Behavioral tracking for marketing and remarketing',
                  'Enhanced conversion tracking and ad performance measurement',
                  'Google Analytics tracking to analyze user behavior and site performance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                    <span style={{ color: GOLD, fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs sm:text-sm text-gray-500 pl-10 sm:pl-11 italic">
                By continuing to use our site, you consent to the use of these technologies. You can manage or disable cookies via your browser settings, but this may impact website functionality.
              </p>
            </div>

            {/* ── Section 5 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>5</span>
                Google Analytics and Remarketing
              </h2>
              <div className="pl-10 sm:pl-11">
                <p className="mb-3 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                  We use Google Analytics to better understand user behavior and improve site experience. Google Analytics uses cookies to collect anonymous traffic data.
                </p>
                <p className="mb-4 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                  We also use Google Ads Remarketing, allowing us to display targeted ads across the internet to users who have previously visited our site.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white transition-all shadow-xs hover:opacity-90"
                    style={{ background: GOLD }}
                  >
                    Google Ads Settings →
                  </a>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border-2 transition-all hover:bg-gray-50"
                    style={{ borderColor: GOLD, color: GOLD }}
                  >
                    Google Analytics Opt-Out →
                  </a>
                </div>
              </div>
            </div>

            {/* ── Section 6 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>6</span>
                Data Security
              </h2>
              <ul className="space-y-2 pl-10 sm:pl-11">
                {[
                  'SSL encryption for secure transmission',
                  'Restricted internal access to personal data',
                  'Strict policies to ensure confidentiality and prevent misuse',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                    <span className="text-green-600 font-bold shrink-0 mt-0.5">🔒</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Section 7 ── */}
            <div className="mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>7</span>
                Third-Party Disclosure
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 pl-10 sm:pl-11">
                We do not sell or share your personal data with unaffiliated third parties. Anonymized or encrypted data may be used with our trusted marketing and analytics partners solely for tracking and optimization purposes.
              </p>
            </div>

            {/* ── Section 8 — Contact ── */}
            <div data-aos="fade-up">
              <h2 className="flex items-center gap-3 mb-3 text-base sm:text-[20px] font-extrabold text-[#111111]">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold text-white shrink-0" style={{ background: GOLD }}>8</span>
                Contact Us
              </h2>
              <div
                className="rounded-2xl p-5 sm:p-6 border border-[#AF751C]/35 bg-[#F0E9D8]/50"
              >
                <p className="mb-3 text-sm sm:text-[15px] font-bold text-[#111111]">
                  Authorized Marketing Partner
                </p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all shadow-md hover:opacity-90"
                  style={{ background: GOLD }}
                >
                  <i className="fa-solid fa-phone text-xs" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer (mini) ── */}
      <footer className="bg-[#111111] text-white py-6 px-4 text-center border-t border-white/10">
        <p className="text-xs sm:text-sm text-gray-400 m-0">
          &copy; 2026 Hiranandani Hinjewadi Township. All rights reserved |{' '}
          <Link href="/krisala-new-launch" className="hover:underline font-bold" style={{ color: GOLD }}>
            Back to Home
          </Link>
        </p>
      </footer>
    </main>
  )
}
