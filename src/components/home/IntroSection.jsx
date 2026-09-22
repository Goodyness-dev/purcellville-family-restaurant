import React from 'react';
import { SpoonForkIcon, CoffeeIcon } from '../common/Icons';

export default function IntroSection() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-cream-200 dark:bg-midnight relative overflow-hidden transition-colors">
      
      {/* Subtle Warm Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#34251D_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Editorial Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Plate Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-thick border-4 border-cream-50 dark:border-midnight-border transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/dish-soup-sandwich.jpg" 
                  alt="Toasted sandwich, potato chips, and broccoli cheddar soup" 
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-restaurant-ink/80 backdrop-blur-md text-cream-50 px-4 py-1.5 rounded-full text-xs font-mono">
                  Toasted Club & Scratch-Made Soup
                </div>
              </div>

              {/* Overlapping Hospitality Inset */}
              <div className="absolute -bottom-10 -right-4 sm:-right-8 z-20 w-3/5 rounded-2xl overflow-hidden shadow-thick-hover border-4 border-cream-50 dark:border-midnight-border transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/restaurant-interior.jpg" 
                  alt="Friendly waitress pouring diner coffee for customers" 
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-[11px] font-mono text-cream-100 font-semibold tracking-wide">
                    // Warm Virginia Hospitality
                  </span>
                </div>
              </div>

              {/* Decorative Americana Stamp */}
              <div className="absolute -top-6 -left-6 z-0 w-24 h-24 rounded-full border-2 border-dashed border-restaurant-red/30 flex items-center justify-center animate-spin-slow pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-restaurant-red font-bold">1983 • 1983</span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-restaurant-red/10 border border-restaurant-red/20 text-restaurant-red text-xs font-mono font-semibold tracking-wider uppercase">
              <SpoonForkIcon className="w-4 h-4" />
              <span>THE HOMETOWN TABLE</span>
            </div>

            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-restaurant-brown dark:text-cream-50 tracking-tight leading-[1.08]">
              A LITTLE SOMETHING <br />
              <span className="italic font-light text-restaurant-red">FOR EVERYONE.</span>
            </h2>

            <p className="text-base sm:text-lg text-restaurant-ink/80 dark:text-cream-200/80 leading-relaxed font-sans">
              Purcellville Family Restaurant has never tried to be fancy. For over 40 years on Main Street, we have focused on what matters most: generous portions, genuine recipes made from scratch, and greeting neighbors by name the second they walk through the door.
            </p>

            <p className="text-base sm:text-lg text-restaurant-ink/80 dark:text-cream-200/80 leading-relaxed font-sans">
              Whether you are meeting friends for early-morning coffee and buttermilk pancakes, stopping in for a lunchtime club sandwich and hot soup, or sitting down with the whole family for ribs and spaghetti — there’s always a warm chair waiting for you.
            </p>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-cream-100 dark:bg-midnight-card border border-restaurant-brown/10 dark:border-midnight-border shadow-sm">
                <div className="font-serif font-bold text-2xl sm:text-3xl text-restaurant-red">6:00 AM</div>
                <div className="text-xs font-medium text-restaurant-brown/80 dark:text-cream-300 mt-1">
                  Fresh coffee brewed & grill hot every single morning
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-100 dark:bg-midnight-card border border-restaurant-brown/10 dark:border-midnight-border shadow-sm">
                <div className="font-serif font-bold text-2xl sm:text-3xl text-restaurant-red">100%</div>
                <div className="text-xs font-medium text-restaurant-brown/80 dark:text-cream-300 mt-1">
                  Scratch-cooked comfort food served with a smile
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
