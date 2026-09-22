import React from 'react';
import { StarIcon, CoffeeIcon, SpoonForkIcon } from '../common/Icons';
import { BUSINESS_INFO } from '../../data/businessData';

export default function PeopleStorySection() {
  return (
    <section className="py-24 sm:py-32 bg-cream-200 dark:bg-midnight transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-restaurant-red/10 border border-restaurant-red/20 text-restaurant-red text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <CoffeeIcon className="w-4 h-4" />
            <span>// 07 MEET OUR REAL FAMILY TEAM</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-restaurant-brown dark:text-cream-50 tracking-tight leading-tight">
            GOOD FOOD TASTES <br />
            <span className="italic font-light text-restaurant-red">BETTER TOGETHER.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-restaurant-ink/75 dark:text-cream-200/75 font-sans leading-relaxed">
            The heart of Purcellville Family Restaurant has always been the family and kitchen staff who welcome you with a smile every day.
          </p>
        </div>

        {/* Feature Split: REAL Owners & Staff Photo & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-thick border-4 border-cream-50 dark:border-midnight-border group">
              <img 
                src="/images/owners-team.jpg" 
                alt="Purcellville Family Restaurant owners and team smiling inside the diner" 
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="text-xs font-mono text-restaurant-gold uppercase tracking-wider font-bold">
                    The Family Behind Your Table
                  </span>
                  <p className="text-cream-50 font-serif font-bold text-lg sm:text-2xl mt-1">
                    "Coffee is always hot and you're treated like family from the moment you sit down."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-cream-50 dark:bg-midnight-card border-2 border-restaurant-brown/10 dark:border-midnight-border shadow-thick">
              <h3 className="font-serif font-bold text-2xl text-restaurant-brown dark:text-cream-50">
                Four Decades on West Main
              </h3>
              <p className="mt-3 text-sm sm:text-base text-restaurant-ink/80 dark:text-cream-200/80 font-sans leading-relaxed">
                Generations of Purcellville kids grew up eating frisbee pancakes here, locals celebrate milestones at our corner booths, and the same friendly faces cook your eggs and flip your griddled burgers every single morning.
              </p>
              <div className="mt-6 pt-6 border-t border-restaurant-brown/10 dark:border-midnight-border flex items-center justify-between text-xs font-mono">
                <span className="text-restaurant-red font-bold">110 W MAIN ST</span>
                <span className="text-restaurant-brown/60 dark:text-cream-400">Purcellville, Virginia</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream-100 dark:bg-midnight border border-restaurant-brown/10 dark:border-midnight-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-gold/20 flex items-center justify-center shrink-0">
                <StarIcon className="w-6 h-6 text-restaurant-gold" fill="currentColor" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-restaurant-brown dark:text-cream-50">
                  4.8 ★ Hometown Rating
                </div>
                <div className="text-xs text-restaurant-ink/60 dark:text-cream-300 font-sans">
                  Hundreds of verified reviews from Loudoun County diners
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Real Customer Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS_INFO.reviews.slice(0, 3).map((rev, idx) => (
            <div 
              key={idx}
              className="card-thick p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-restaurant-gold mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" fill="currentColor" />
                  ))}
                </div>
                <p className="font-sans text-sm text-restaurant-ink/80 dark:text-cream-200/80 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-restaurant-brown/10 dark:border-midnight-border flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-restaurant-brown dark:text-cream-50">
                    {rev.author}
                  </div>
                  <div className="text-[11px] font-mono text-restaurant-ink/50 dark:text-cream-400">
                    {rev.location}
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-cream-200 dark:bg-midnight-card text-restaurant-red font-semibold">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
