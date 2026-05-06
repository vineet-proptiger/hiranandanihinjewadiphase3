'use client'
import React from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const stats = [
  { value: '70M+', label: 'Sq.m. Projects Delivered' },
  { value: '22M+', label: 'Sq.m. Under Development' },
  { value: '37+', label: 'Years of Expertise' },
]

const AboutGodrej = () => (
  <section id="about" style={{ padding: '72px 0', background: '#f5f5f5' }}>
    <div className="max-w-4xl mx-auto px-4 md:px-8" style={{ textAlign: 'center' }}>

      {/* Heading */}
      <h2
        data-aos="fade-up"
        style={{
          fontFamily: F_JOST, fontWeight: '800',
          fontSize: 'clamp(24px,3.5vw,36px)',
          color: '#1a1a1a', textTransform: 'uppercase',
          letterSpacing: '0.04em', margin: '0 0 14px',
        }}
      >
        ABOUT HIRANANDANI GROUP
      </h2>
      <div data-aos="fade-up" style={{ width: '60px', height: '4px', background: 'var(--color-gold)', margin: '0 auto 28px', borderRadius: '2px' }} />

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="80"
        style={{
          fontFamily: F_SANS, fontSize: '14.5px',
          color: '#555555', lineHeight: 1.9,
          margin: '0 0 52px', textAlign: 'justify',
        }}
      >
        Hiranandani Group is one of India&apos;s most prestigious real estate conglomerates, renowned
        for creating iconic integrated townships and luxury developments across the country. Founded
        by Dr. Niranjan Hiranandani, the group has transformed India&apos;s urban landscape with
        world-class residential, commercial, and retail projects that set the benchmark for quality
        and innovation. Their townships are celebrated for superior infrastructure, lush green
        landscapes, and self-sustained communities that offer a truly elevated lifestyle.
        With Hiranandani Hinjewadi Township at Krisala Everland, the group brings its legacy
        of excellence to Pune&apos;s booming IT corridor — offering premium 2, 3 & 4 BHK flats
        across a 105-acre master-planned township. Known for timely delivery, quality construction,
        and world-class amenities, Hiranandani projects remain the preferred choice for discerning
        homebuyers and investors.
      </p>

      {/* Stats row */}
      <div
        data-aos="fade-up"
        data-aos-delay="160"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ padding: '0 clamp(24px,5vw,60px)', textAlign: 'center' }}>
              <p style={{
                fontFamily: F_JOST, fontWeight: '800',
                fontSize: 'clamp(30px,5vw,52px)',
                color: '#1a1a1a', margin: '0 0 6px', lineHeight: 1,
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: F_SANS, fontSize: '13px',
                color: '#777', margin: 0, textTransform: 'uppercase',
                letterSpacing: '0.06em', fontWeight: '600',
              }}>
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div style={{
                width: '1px', height: '60px',
                background: 'var(--color-gold)',
                flexShrink: 0,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  </section>
)

export default AboutGodrej
