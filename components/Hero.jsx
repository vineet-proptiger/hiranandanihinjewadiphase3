'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const slides = [heroImages.banner, heroImages.banner2]

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full flex flex-col mt-[33px] lg:mt-0 overflow-hidden"
    >
      {/* ── TOP AREA: Image & Text ── */}
      <div className="relative h-[55vh] min-h-[320px] lg:h-auto lg:aspect-[2520/1440] lg:min-h-[500px] overflow-hidden">
        {/* ── Background image carousel ── */}
        {slides.map((src, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: current === idx ? 1 : 0, zIndex: 0 }}
          >
            <Image
              src={src}
              alt={`Hiranandani Hinjewadi Township ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
              unoptimized={true}
              sizes="100vw"
              quality={100}
            />
          </div>
        ))}

        {/* ── Dark gradient overlay ── */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 100%)',
        }} />

        {/* ── Center-bottom text ── */}
        <div className="absolute left-0 right-0 bottom-10 lg:bottom-[30%] z-[2] text-center px-4">
          {/* Project Tagline */}
          <div className="mb-3">
            <span style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1.5px solid var(--color-gold)',
              padding: '7px 28px',
              borderRadius: '50px',
              color: 'var(--color-gold)',
              fontFamily: F_JOST,
              fontSize: 'clamp(12px, 1.4vw, 15px)',
              fontWeight: '800',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'inline-block',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}>
              Hiranandani Group
            </span>
          </div>

          <h1 style={{
            fontFamily: F_JOST,
            fontSize: 'clamp(20px, 3.2vw, 46px)',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 8px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}>
            HIRANANDANI HINJEWADI TOWNSHIP
          </h1>

          {/* Location & Phone */}
          <div className="flex items-center justify-center gap-2 lg:gap-6 flex-wrap mt-1">
            {/* Location */}
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{
                fontFamily: F_SANS, fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#ffffff',
                fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                Hinjewadi Phase 3 Krisala Everland, Pune
              </span>
            </div>

            {/* Phone */}
            <a href="tel:+919718344024" className="flex items-center gap-1 no-underline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{
                fontFamily: F_SANS, fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#ffffff',
                fontWeight: '700', letterSpacing: '0.04em',
              }}>
                +91 9718 344 024
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM AREA: Info Bars ── */}
      <div className="relative z-[5]">
        {/* USP row */}
        <div style={{
          background: 'rgba(13,59,80,1)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '1px solid rgba(244, 117, 32, 0.35)',
        }}>
          {[
            '105 Acres Integrated Township',
            'Pune IT & Growth Corridor',
            'At Hinjewadi Township, Pune',
          ].map((point, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
              gap: '4px', padding: '12px 6px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              textAlign: 'center'
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span style={{
                fontFamily: F_SANS, fontSize: 'clamp(9px, 1.5vw, 12px)',
                fontWeight: '600', color: '#ffffff', letterSpacing: '0.01em',
                lineHeight: '1.2'
              }}>
                {point}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #0C3547 0%, #0E4358 100%)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '1px solid rgba(244, 117, 32, 0.25)',
          boxShadow: '0 -10px 40px rgba(7,30,40,0.6)',
          overflow: 'hidden',
        }}>
          {[
            { label: 'STATUS', value: 'NEW LAUNCH' },
            { label: 'CONFIGURATIONS', value: '2, 3 & 4 BHK FLATS' },
            { label: 'PRICE', value: '79.99 Lacs* ONWARDS' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '12px 8px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}
            >
              <span style={{
                fontFamily: F_SANS,
                fontSize: 'clamp(8px, 1.2vw, 10px)',
                fontWeight: '700',
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {item.label}
              </span>
              <span style={{
                fontFamily: F_JOST,
                fontSize: 'clamp(10px, 1.8vw, 15px)',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
