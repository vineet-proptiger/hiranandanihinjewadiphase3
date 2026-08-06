'use client'
import React from 'react'
import { Building2, TrainFront, Sparkles, Trees, Sun, TrendingUp } from 'lucide-react'

const Highlights = () => {
  const highlightItems = [
    {
      icon: <Building2 size={32} color="#fff" strokeWidth={1.75} />,
      title: 'Iconic Tower Launch in Hinjewadi Phase 3',
      desc: 'Experience ultra-luxury living in Pune\'s most prestigious township.',
    },
    {
      icon: <TrainFront size={32} color="#fff" strokeWidth={1.75} />,
      title: 'Located in Pune\'s Prime IT Hub',
      desc: 'Strategic proximity to global IT parks and upcoming Metro.',
    },
    {
      icon: <Sparkles size={32} color="#fff" strokeWidth={1.75} />,
      title: 'Premium Homes in Integrated Township',
      desc: 'Luxurious residences within a self-sustained 105-acre master-planned township.',
    },
    {
      icon: <Trees size={32} color="#fff" strokeWidth={1.75} />,
      title: 'Surrounded by Landscaped Greens',
      desc: 'Over 70% open spaces featuring lush thematic gardens.',
    },
    {
      icon: <Sun size={32} color="#fff" strokeWidth={1.75} />,
      title: 'Designed for Natural Light & Ventilation',
      desc: 'Scientific architecture ensuring maximum daylight and perfect cross-ventilation.',
    },
    {
      icon: <TrendingUp size={32} color="#fff" strokeWidth={1.75} />,
      title: 'Phase 3 Token Booking Now Open',
      desc: 'Avail early-bird advantages with exclusive limited-period token bookings.',
    },
  ]


  return (
    <section id="highlights" className="highlight_section">
      <style jsx>{`
        .highlight_section {
          position: relative;
          padding: 0;
          overflow: hidden;
        }
        
        .highlight_section .parallax {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-image: url('/heera/images/highlights/highlight.webp');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }

        .highlight_section .container-fluid {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin: 0 auto;
        }

        .highlight_section .heading {
          color: #d3be8a;
          font-family: "Montserrat", sans-serif;
          font-size: 46px;
          font-weight: 500;
          line-height: 56px;
          text-transform: uppercase;
          letter-spacing: .02em;
          margin-bottom: 50px; /* Increased from 30px */
        }

        .highlight_section ul {
          padding-left: 0;
          list-style: none;
          margin: 0;
        }

        .highlight_section ul li {
          letter-spacing: 1px;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px; /* Increased from 28px */
          margin-bottom: 28px; /* Increased from 20px */
          color: #f4ebe4;
          font-family: "Poppins", sans-serif;
          position: relative;
          padding-left: 50px; /* Increased from 44px */
        }

        .highlight_section ul li:before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #f4ebe4;
          font-size: 20px;
          font-weight: 300;
        }

        .box_left, .box_right {
          padding: 8% 8%; /* Increased top/bottom from 5% to 8% */
        }

        .box_right {
          border-left: 1px solid #ffffff3b;
        }

        @media (max-width: 991px) {
          .highlight_section .heading {
            font-size: 32px;
            line-height: 40px;
          }
          .box_left, .box_right {
            padding: 40px 20px;
          }
          .box_right {
            border-left: none;
            border-top: 1px solid #ffffff3b;
          }
          .highlight_section ul li {
            font-size: 16px;
            line-height: 26px;
          }
        }
      `}</style>

      {/* Parallax Background with fixed attachment for layer effect */}
      <div className="parallax"></div>

      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#d3be8a] text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS & USPS
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
          <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/20 rounded-[20px] mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{ position: 'relative' }}>
          
          {/* Corner Accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '24px', height: '24px', borderTop: '1.5px solid #d3be8a', borderLeft: '1.5px solid #d3be8a', borderTopLeftRadius: '20px' }}></div>
          <div style={{ position: 'absolute', top: -1, right: -1, width: '24px', height: '24px', borderTop: '1.5px solid #d3be8a', borderRight: '1.5px solid #d3be8a', borderTopRightRadius: '20px' }}></div>
          <div style={{ position: 'absolute', bottom: -1, left: -1, width: '24px', height: '24px', borderBottom: '1.5px solid #d3be8a', borderLeft: '1.5px solid #d3be8a', borderBottomLeftRadius: '20px' }}></div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '24px', height: '24px', borderBottom: '1.5px solid #d3be8a', borderRight: '1.5px solid #d3be8a', borderBottomRightRadius: '20px' }}></div>          {/* Mapped Highlight Items */}
          {highlightItems.map((item, idx) => (
            <div 
              key={idx}
              className={`p-9 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.04] ${
                idx < 3 ? 'border-b border-white/20' : 'border-b lg:border-b-0 border-white/20'
              } ${
                idx % 3 !== 2 ? 'lg:border-r border-white/20' : ''
              } ${idx === 5 ? 'border-none' : ''}`}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 hover:scale-105" style={{ background: '#d3be8a' }}>
                {item.icon}
              </div>
              <h3 className="text-[#d3be8a] font-bold text-[15.5px] uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="text-white/90 text-[14.5px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Highlights
