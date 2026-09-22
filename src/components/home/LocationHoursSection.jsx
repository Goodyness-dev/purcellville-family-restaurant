import React from 'react';
import { MapPinIcon, ClockIcon, PhoneIcon, NavigationIcon, ExternalLinkIcon } from '../common/Icons';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function LocationHoursSection() {
  const openStatus = isOpenNow();

  return (
    <section id="visit" className="py-24 sm:py-32 bg-cream-100 dark:bg-midnight-pure border-t border-restaurant-brown/10 dark:border-midnight-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-restaurant-red/10 border border-restaurant-red/20 text-restaurant-red text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <MapPinIcon className="w-4 h-4" />
            <span>// 08 FIND OUR FRONT DOOR</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-restaurant-brown dark:text-cream-50 tracking-tight leading-[1.04]">
            RIGHT HERE IN <br />
            <span className="italic font-light text-restaurant-red">PURCELLVILLE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-restaurant-ink/75 dark:text-cream-200/75 font-sans">
            Centrally located on historic West Main Street. Ample street and nearby parking available.
          </p>
        </div>

        {/* 2-Column Location & Operating Hours Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Card */}
            <div className="card-thick p-7">
              <div className="flex items-center justify-between pb-5 border-b border-restaurant-brown/10 dark:border-midnight-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cream-200 dark:bg-midnight-card flex items-center justify-center text-restaurant-brown dark:text-cream-50">
                    <ClockIcon className="w-5 h-5 text-restaurant-red" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-restaurant-brown dark:text-cream-50">
                      Operating Hours
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <span className={`w-2 h-2 rounded-full ${openStatus ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                      <span className={`font-semibold ${openStatus ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                        {openStatus ? 'Open for Service Right Now' : 'Currently Closed • Opens 6:00 AM'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="divide-y divide-restaurant-brown/5 dark:divide-midnight-border mt-4 text-xs font-mono">
                {BUSINESS_INFO.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-restaurant-brown dark:text-cream-100">
                      {h.day}
                    </span>
                    <div className="text-right">
                      <span className="text-restaurant-ink/80 dark:text-cream-300">
                        {h.open} – {h.close}
                      </span>
                      {h.note && (
                        <span className="block text-[10px] text-restaurant-red font-sans">
                          {h.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Quick Phone Card */}
            <div className="card-thick p-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-restaurant-red font-semibold">
                  Physical Address
                </span>
                <p className="font-serif font-bold text-xl text-restaurant-brown dark:text-cream-50 mt-1">
                  110 W Main St
                </p>
                <p className="text-sm font-sans text-restaurant-ink/70 dark:text-cream-300">
                  Purcellville, VA 20132
                </p>
              </div>

              <div className="pt-4 border-t border-restaurant-brown/10 dark:border-midnight-border flex flex-col sm:flex-row gap-3">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="btn-primary flex-1 !py-3 text-xs justify-center"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>Call (540) 338-3000</span>
                </a>

                <a 
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 !py-3 text-xs justify-center"
                >
                  <NavigationIcon className="w-4 h-4 text-restaurant-red" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Exterior Photo & Interactive Map Embed */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Exterior Photo Banner */}
            <div className="rounded-3xl overflow-hidden shadow-thick border-2 border-restaurant-brown/10 dark:border-midnight-border group relative aspect-[16/9]">
              <img 
                src="/images/restaurant-exterior.jpg" 
                alt="Purcellville Family Restaurant exterior on Main Street in Purcellville, Virginia" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-restaurant-gold font-bold">
                    Historic Downtown Purcellville
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-cream-50">
                    Purcellville Family Restaurant Facade
                  </h3>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-thick border-2 border-restaurant-brown/10 dark:border-midnight-border h-72 sm:h-80 relative">
              <iframe 
                src={BUSINESS_INFO.googleMapsEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Purcellville Family Restaurant Map Location"
                className="w-full h-full filter contrast-[0.95] dark:invert-[0.9] dark:hue-rotate-180"
              />
              <a 
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-cream-50/95 dark:bg-midnight-pure/95 text-restaurant-brown dark:text-cream-100 text-xs font-mono px-3.5 py-2 rounded-full shadow-md border border-restaurant-brown/10 flex items-center gap-1.5 hover:bg-restaurant-red hover:text-cream-50 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
