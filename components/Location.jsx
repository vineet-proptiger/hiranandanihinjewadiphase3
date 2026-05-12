'use client'
import { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const categories = [
  {
    label: 'Growth Drivers',
    items: [
      { name: 'Hinjewadi IT Hub', dist: '2 km' },
      { name: 'Rajiv Gandhi Infotech Park', dist: '3 km' },
      { name: 'Mumbai–Pune Expressway', dist: '8 km' },
    ],
  },
  {
    label: 'Convenient Travel',
    items: [
      { name: 'Pune Metro Line 3 (Proposed)', dist: '3 km' },
      { name: 'Wakad Junction', dist: '6 km' },
      { name: 'Pune International Airport', dist: '25 km' },
    ],
  },
  {
    label: 'Education',
    items: [
      { name: 'Blue Ridge Public School', dist: '4 km' },
      { name: 'Indira National School', dist: '5 km' },
      { name: 'Symbiosis International University', dist: '6 km' },
    ],
  },
  {
    label: 'Hospitals',
    items: [
      { name: 'LifePoint Hospital', dist: '6 km' },
      { name: 'Ruby Hall Clinic', dist: '7 km' },
      { name: 'Aditya Birla Memorial Hospital', dist: '10 km' },
    ],
  },
  {
    label: 'Food & Shopping',
    items: [
      { name: 'Vision One Mall', dist: '4 km' },
      { name: 'Xion Mall', dist: '5 km' },
      { name: 'Grand Highstreet Mall', dist: '6 km' },
    ],
  },
]

const Location = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="location" style={{ padding: '72px 0', background: '#1a1a1a' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT — heading + accordion */}
          <div className="w-full lg:w-[42%]" data-aos="fade-right">
            <h2 style={{
              fontFamily: F_JOST, fontWeight: '800',
              fontSize: 'clamp(24px,3.5vw,36px)',
              color: '#ffffff', textTransform: 'uppercase',
              letterSpacing: '0.04em', margin: '0 0 14px', textAlign: 'center',
            }}>
              LOCATION ADVANTAGES
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--color-gold)', margin: '0 auto 28px', borderRadius: '2px' }} />

            {categories.map((cat, i) => {
              const open = activeIndex === i
              return (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  style={{
                    border: open ? '1px solid rgba(205, 146, 46, 0.45)' : '1px solid #2e2e2e',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '8px',
                    transition: 'border-color 0.3s',
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setActiveIndex(open ? -1 : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      background: open
                        ? 'linear-gradient(90deg, rgba(205, 146, 46, 0.18) 0%, rgba(205, 146, 46, 0.06) 100%)'
                        : '#242424',
                      border: 'none',
                      cursor: 'pointer',
                      borderBottom: open ? '1px solid rgba(205, 146, 46, 0.2)' : '1px solid transparent',
                      transition: 'background 0.3s',
                    }}
                  >
                    <span style={{
                      fontFamily: F_JOST, fontWeight: '700', fontSize: '13px',
                      color: open ? 'var(--color-gold)' : '#ffffff',
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                      transition: 'color 0.3s',
                    }}>
                      {cat.label}
                    </span>
                    <span style={{
                      color: 'var(--color-gold)',
                      fontSize: '14px',
                      lineHeight: 1,
                      transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
                      transition: 'transform 0.35s ease',
                      display: 'inline-block',
                    }}>
                      ∧
                    </span>
                  </button>

                  {/* Items */}
                  <div style={{
                    maxHeight: open ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                    background: '#1e1e1e',
                  }}>
                    <div style={{ padding: '10px 16px 14px' }}>
                      {cat.items.map((item, j) => (
                        <div
                          key={j}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '7px 0',
                            borderBottom: j < cat.items.length - 1
                              ? '1px solid rgba(255,255,255,0.05)'
                              : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--color-gold)', fontSize: '7px' }}>●</span>
                            <span style={{
                              fontFamily: F_SANS, fontSize: '12.5px',
                              color: '#cccccc', fontWeight: '500',
                            }}>
                              {item.name}
                            </span>
                          </div>
                          <span style={{
                            fontFamily: F_JOST, fontSize: '12px',
                            color: 'var(--color-gold)', fontWeight: '700',
                            flexShrink: 0, marginLeft: '12px',
                          }}>
                            {item.dist}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT — map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '4px', overflow: 'hidden',
              border: '1px solid var(--color-gold)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.0612421310643!2d73.6678154!3d18.635971299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5be0e4996117827%3A0xfe06dff2608c0862!2sKrisala%20x%20Hiranandani%20Township!5e1!3m2!1sen!2sin!4v1778563067291!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block', filter: 'grayscale(20%)' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
