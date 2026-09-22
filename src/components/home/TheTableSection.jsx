import React, { useState } from 'react';
import { SpoonForkIcon, CoffeeIcon, ArrowRightIcon } from '../common/Icons';

const TABLE_PLATES = [
  {
    id: 'spaghetti',
    name: 'Homestyle Spaghetti & Garlic Toast',
    title: 'Homestyle Spaghetti & Garlic Toast',
    price: '$14.95',
    numericPrice: 14.95,
    badge: 'Turquoise Plate Signature',
    image: '/images/dish-table-spaghetti.jpg',
    description: 'Slow-simmered savory beef marinara swirled over spaghetti with thick buttered garlic bread on our signature turquoise ceramic plate.'
  },
  {
    id: 'bbq-chicken-fries-slaw',
    name: 'Sauced Ribs, Golden Fries & Slaw',
    title: 'Sauced Ribs, Golden Fries & Slaw',
    price: '$14.95',
    numericPrice: 14.95,
    badge: 'Homestyle Dinner Platter',
    image: '/images/dish-ribs-fries.jpg',
    description: 'Fall-off-the-bone tender ribs with rich barbecue sauce, crispy skin-on fries, and cool creamy coleslaw.'
  },
  {
    id: 'sandwich',
    name: 'Toasted Sourdough Club & Soup',
    title: 'Toasted Sourdough Club & Soup',
    price: '$11.95',
    numericPrice: 11.95,
    badge: 'Lunchtime Classic',
    image: '/images/dish-soup-sandwich.jpg',
    description: 'Golden grilled sourdough ham melt with crunchy crinkle chips and a velvety bowl of hot broccoli cheddar soup.'
  },
  {
    id: 'breakfast-burrito',
    name: 'Country Breakfast Burrito & Fruit',
    title: 'Country Breakfast Burrito & Fruit',
    price: '$10.95',
    numericPrice: 10.95,
    badge: 'Morning Platter',
    image: '/images/dish-breakfast-burrito.jpg',
    description: 'Warm flour tortilla packed with eggs, sausage, and peppers, flanked by fresh melon, ripe berries, and dual house salsas.'
  }
];

export default function TheTableSection({ onOpenOrder }) {
  const [activePlate, setActivePlate] = useState(TABLE_PLATES[0]);

  return (
    <section id="the-table" className="py-24 sm:py-32 bg-cream-200 dark:bg-midnight relative overflow-hidden transition-colors">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#A92E26_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-restaurant-red/10 border border-restaurant-red/20 text-restaurant-red text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <SpoonForkIcon className="w-4 h-4" />
            <span>// 04 THE GATHERING PLACE</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-restaurant-brown dark:text-cream-50 tracking-tight leading-[1.04]">
            MADE FOR <br />
            <span className="italic font-light text-restaurant-red">SHARING A TABLE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-restaurant-ink/80 dark:text-cream-200/80 font-sans leading-relaxed max-w-2xl">
            Food is better when plates overlap, coffee keeps pouring, and there are extra forks to pass around. Click any dish to explore how we prepare each family favorite.
          </p>
        </div>

        {/* 4-Plate Interactive Table Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TABLE_PLATES.map((plate) => {
            const isSelected = activePlate.id === plate.id;
            return (
              <div
                key={plate.id}
                onClick={() => setActivePlate(plate)}
                className={`card-thick cursor-pointer overflow-hidden group transition-all duration-300 ${
                  isSelected 
                    ? 'ring-4 ring-restaurant-red scale-[1.02] shadow-thick-hover' 
                    : 'hover:-translate-y-1'
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-cream-300 dark:bg-midnight-pure">
                  <img 
                    src={plate.image} 
                    alt={plate.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-restaurant-ink/85 backdrop-blur-sm text-cream-50 text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-cream-50/20">
                    {plate.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-restaurant-red text-cream-50 text-xs font-mono font-bold px-2.5 py-1 rounded-full shadow-md">
                    {plate.price}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-restaurant-brown dark:text-cream-100 group-hover:text-restaurant-red transition-colors leading-snug">
                    {plate.name}
                  </h3>
                  <p className="text-xs text-restaurant-ink/70 dark:text-cream-300 font-sans mt-2 line-clamp-2">
                    {plate.description}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-restaurant-brown/10 dark:border-midnight-border flex items-center justify-between text-xs font-mono">
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1.5 text-restaurant-red font-bold text-xs">
                        <span className="w-2 h-2 rounded-full bg-restaurant-red animate-pulse" />
                        <span>Active Plate</span>
                      </span>
                    ) : (
                      <span className="text-xs text-restaurant-brown/60 dark:text-cream-400 group-hover:text-restaurant-brown dark:group-hover:text-cream-100 transition-colors">
                        Explore Table
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenOrder(plate);
                      }}
                      className="px-3 py-1 rounded-full bg-restaurant-red/10 hover:bg-restaurant-red text-restaurant-red hover:text-cream-50 font-bold transition-all flex items-center gap-1 active:scale-95"
                      title={`Order ${plate.name} for takeout`}
                    >
                      <span>Order</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Plate Featured Detail Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-cream-100 dark:bg-midnight-card border-2 border-restaurant-brown/10 dark:border-midnight-border shadow-thick flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-restaurant-red">
              SELECTED PLATE • {activePlate.badge}
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-restaurant-brown dark:text-cream-50 mt-1">
              {activePlate.name}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-restaurant-ink/80 dark:text-cream-200/80 font-sans leading-relaxed">
              {activePlate.description}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => onOpenOrder(activePlate)}
              className="btn-primary text-sm !py-3.5 !px-7 shadow-thick"
            >
              <span>Order This Plate</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
