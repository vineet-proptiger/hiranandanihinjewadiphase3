'use client'
import React from 'react'
import Image from 'next/image'
import { highlightsMainImage } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const highlights = [
  { title: 'Iconic Tower Launch in Hinjewadi Phase 3', sub: 'Experience ultra-luxury living in Pune\'s most prestigious township.' },
  { title: 'Located in Pune\'s Prime IT Hub', sub: 'Strategic proximity to global IT parks and upcoming Metro.' },
  { title: 'Premium Homes in Integrated Township', sub: 'Luxurious residences within a self-sustained 105-acre master-planned township.' },
  { title: 'Surrounded by Landscaped Greens', sub: 'Over 70% open spaces featuring lush thematic gardens.' },
  { title: 'Designed for Natural Light & Ventilation', sub: 'Scientific architecture ensuring maximum daylight and perfect cross-ventilation.' },
  { title: 'Phase 3 Token Booking Now Open', sub: 'Avail early-bird advantages with exclusive limited-period token bookings.' },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ background: '#0D3B50', padding: '60px 0' }}>
    <div className="container mx-auto px-4 md:px-8">
      
      {/* Centered Heading at the top of the section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '800',
          fontSize: 'clamp(28px,4vw,40px)',
          color: '#ffffff', margin: '0 0 14px',
          textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'center'
        }}>
          HIGHLIGHTS
        </h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--color-gold)', margin: '0 auto', borderRadius: '2px' }} />
      </div>

      <div className="flex flex-col lg:flex-row items-start" style={{ minHeight: '480px' }}>

        {/* LEFT — image */}
        <div
          className="w-full lg:w-[45%] relative p-4 lg:p-0 flex items-start justify-center"
          style={{ paddingTop: '32px' }}
          data-aos="fade-right"
        >
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={highlightsMainImage}
              alt="Hiranandani Hinjewadi Township Highlights"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 45vw"
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div
          className="w-full lg:w-[55%] flex flex-col justify-start"
          style={{ padding: '32px clamp(24px,5vw,64px)' }}
          data-aos="fade-left"
        >
          {/* 2×3 card grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
            marginBottom: '36px',
          }}>
            {highlights.map((h, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '20px 16px',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)'
                  e.currentTarget.style.background = 'rgba(205, 146, 46, 0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <p style={{
                  fontFamily: F_JOST, fontWeight: '700', fontSize: '14px',
                  color: '#ffffff', margin: '0 0 6px', letterSpacing: '0.02em',
                  lineHeight: '1.3'
                }}>
                  {h.title}
                </p>
                <p style={{
                  fontFamily: F_SANS, fontSize: '11.5px',
                  color: 'rgba(255,255,255,0.6)', margin: 0,
                  lineHeight: '1.5'
                }}>
                  {h.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Enquire button */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="btn-gold"
              style={{ padding: '14px 40px', fontSize: '14px', letterSpacing: '0.1em' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Highlights
