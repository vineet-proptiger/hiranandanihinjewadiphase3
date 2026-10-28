'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../../lib/krisala-new-launch/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Hiranandani Hinjewadi Township" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-[#F0E9D8]">
                105-ACRE INTEGRATED TOWNSHIP
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-2 tracking-tight">
                Project <span className="text-[#AF751C]">Overview</span>
              </h2>
              <div className="w-16 h-1 bg-[#AF751C] mb-4 rounded-full" />

              <div className="mb-6">
                <div className={`text-[#4A5568] text-[15px] leading-[1.75] text-left ${!isExpanded ? 'line-clamp-4 overflow-hidden' : ''}`}>
                  <p className="m-0">
                    <strong className="text-[#111111]">Hiranandani Hinjewadi Phase 3</strong> marks the iconic new tower launch in Pune&apos;s prime IT hub, offering thoughtfully designed luxury residences within a sprawling 105-acre integrated township ecosystem. With Phase 3 token bookings now open, this new launch presents a rare opportunity to own a premium home featuring modern architecture, excellent ventilation, ample natural light, and scenic green views — crafted with the trusted quality and lifestyle excellence of Hiranandani.
                    <br />
                    Designed for the modern achiever, the project offers seamless connectivity to major business parks, world-class educational institutions, and healthcare facilities. Here, life goes beyond four walls, integrating lush open spaces with state-of-the-art amenities to provide a balanced and sophisticated urban living experience.
                    <br />
                    <span className="font-semibold text-[#111111]">
                      Register Your Interest Today to Access Exclusive Offers, Pricing &amp; Priority Unit Selection.
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#111111] hover:text-[#AF751C] font-bold text-[14.5px] mt-2.5 inline-flex items-center gap-1.5 hover:underline cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Priority & Standard Booking Comparison (EOI) */}
              <div className="mt-6 rounded-2xl border border-[#AF751C]/35 bg-[#fdfbf7] overflow-hidden shadow-[0_4px_20px_rgba(175,117,28,0.08)]">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Left Column: Priority Booking */}
                  <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-[#AF751C]/25 flex flex-col">
                    <h3 className="text-[#111111] text-[15px] sm:text-[16px] font-black uppercase tracking-wider mb-1 m-0">
                      PRIORITY BOOKING
                    </h3>
                    <p className="text-[#AF751C] text-[14px] sm:text-[15px] font-bold mb-3 sm:mb-4 m-0">
                      EOI ₹2.70 Lakhs
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#2D3748] font-medium leading-snug">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Up to ₹6 Lakhs Benefit</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#2D3748] font-medium leading-snug">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Preferred Unit Reserved</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#2D3748] font-medium leading-snug">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Priority Allotment</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Standard Booking */}
                  <div className="p-4 sm:p-5 flex flex-col">
                    <h3 className="text-[#111111] text-[15px] sm:text-[16px] font-black uppercase tracking-wider mb-1 m-0">
                      STANDARD BOOKING
                    </h3>
                    <p className="text-[#AF751C] text-[14px] sm:text-[15px] font-bold mb-3 sm:mb-4 m-0">
                      EOI ₹1.80 Lakhs
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#2D3748] font-medium leading-snug">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>₹1.80 Lakhs Benefit</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#2D3748] font-medium leading-snug">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Early Access to Inventory</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#2D3748] font-medium leading-snug">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span>No Unit Reservation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
