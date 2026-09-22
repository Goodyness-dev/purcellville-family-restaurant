import React, { useState } from 'react';
import { ArrowRightIcon } from '../common/Icons';

const CATEGORY_ITEMS = [
  {
    name: 'Pancakes & Combos',
    tagline: 'Famous Frisbee-sized buttermilk pancakes & hungry neighbor combos',
    hours: 'Served Daily 6:00 AM – 2:00 PM (All Day Saturday & Sunday)',
    image: '/images/restaurant-interior.jpg',
    leadPlate: 'Breakfast Combo #2 (Eggs, Pancakes, Bacon, Sausage & Home Fries)',
    description: 'Our plate-filling giant buttermilk pancakes, freshly whipped butter, farm eggs, hardwood bacon, and country sausage links.',
    dishes: [
      { name: 'Breakfast Combo #2', price: '$12.95', desc: '2 Eggs, 2 Pancakes, 2 Bacon, 2 Sausage, Homefries' },
      { name: '3 Buttermilk Pancakes', price: '$6.95', desc: 'Giant plate-filling cakes, whipped butter & warm syrup' },
      { name: 'Tres Leches Pancakes', price: '$8.95', desc: 'Sweet three-milk glaze, fresh strawberries & cream' }
    ]
  },
  {
    name: 'Morning Specialties',
    tagline: 'Authentic Mexican specialties, breakfast burritos & skillet bowls',
    hours: 'All-Day Breakfast Favorite',
    image: '/images/dish-breakfast-burrito.jpg',
    leadPlate: 'Purcellville Breakfast Burrito Platter',
    description: 'Flour tortilla rolled with farm eggs, sausage, peppers, onions, tomatoes, and cheese, served with fresh melon, berries, and dual house salsas.',
    dishes: [
      { name: 'Breakfast Burrito Platter', price: '$10.95', desc: 'Sausage, peppers, onions, fresh fruit & dual salsas' },
      { name: 'Huevos Rancheros', price: '$13.95', desc: 'Fried beans, 2 eggs, pico de gallo, avocado & tortillas' },
      { name: 'Chilaquiles Verdes', price: '$13.95', desc: 'Crispy chips in salsa verde, crema, queso fresco & eggs' }
    ]
  },
  {
    name: 'Daily Specials & Dinners',
    tagline: 'Monday BBQ chicken, hamburger soup melts & Thursday country steak',
    hours: 'Homestyle Lunch & Dinner Features',
    image: '/images/dish-ribs-fries.jpg',
    leadPlate: 'Monday Special: BBQ Chicken with Slaw & Fries',
    description: 'Slow-glazed tender barbecue chicken, mountain of skin-on french fries, and cool homemade coleslaw.',
    dishes: [
      { name: 'BBQ Chicken, Slaw & Fries', price: '$14.95', desc: 'Monday special with tender glaze & golden fries' },
      { name: 'Grilled Cheese & Hamburger Soup', price: '$10.95', desc: 'Golden melt with scratch hamburger soup & chips' },
      { name: 'Country Fried Steak Dinner', price: '$13.95', desc: 'Crispy steak, mashed potatoes, pepper gravy & veggies' }
    ]
  },
  {
    name: 'Farm Eggs & Omelets',
    tagline: 'Griddled corned beef hash, 3-egg omelets & charbroiled steak',
    hours: 'Served with Choice of 2 Sides',
    image: '/images/hero-desktop.jpg',
    leadPlate: 'Crispy Corned Beef Hash & 2 Eggs',
    description: 'Griddled crispy corned beef hash and two eggs cooked to order, with choice of home fries, toast, or fresh fruit.',
    dishes: [
      { name: 'Corned Beef Hash & 2 Eggs', price: '$9.95', desc: 'Crispy hash with 2 eggs and choice of 2 sides' },
      { name: 'Classic Western Omelet', price: '$10.95', desc: 'Ham, peppers, onions & cheese with 2 sides' },
      { name: 'Steak & Two Eggs Platter', price: '$21.95', desc: 'Charbroiled juicy steak, 2 eggs, home fries & toast' }
    ]
  }
];

export default function CategoriesSection({ onOpenMenu }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_ITEMS[0]);

  return (
    <section id="categories" className="py-24 bg-cream-100 dark:bg-midnight-pure border-y border-restaurant-brown/10 dark:border-midnight-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-restaurant-gold/20 text-restaurant-brown dark:text-restaurant-gold text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>// 03 THE OFFICIAL MAIN STREET MENU</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-restaurant-brown dark:text-cream-50 tracking-tight leading-tight">
            WHAT ARE YOU <br className="hidden sm:block" />
            <span className="italic font-light text-restaurant-red">HUNGRY FOR?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-restaurant-ink/70 dark:text-cream-200/70 font-sans">
            From our famous frisbee pancakes to daily Facebook specials, choose a category to explore.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORY_ITEMS.map((cat) => {
            const isSelected = activeCategory.name === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-restaurant-red text-cream-50 shadow-thick-red scale-105'
                    : 'bg-cream-50 dark:bg-midnight-card text-restaurant-brown dark:text-cream-200 hover:bg-cream-300 dark:hover:bg-midnight-border border border-restaurant-brown/10 dark:border-midnight-border'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream-50 dark:bg-midnight-card rounded-3xl p-6 sm:p-10 lg:p-12 shadow-thick border-2 border-restaurant-brown/10 dark:border-midnight-border">
          
          {/* Featured Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] group">
            <img 
              src={activeCategory.image} 
              alt={activeCategory.leadPlate} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-cream-50">
              <span className="text-xs font-mono uppercase tracking-wider text-restaurant-gold mb-1">
                {activeCategory.hours}
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cream-50">
                {activeCategory.leadPlate}
              </h3>
            </div>
          </div>

          {/* Description & Menu Items */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-restaurant-brown dark:text-cream-50">
                {activeCategory.name}
              </h3>
              <p className="mt-2 text-restaurant-ink/80 dark:text-cream-200/80 font-sans text-sm sm:text-base leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* Dish Rows */}
            <div className="space-y-3 pt-2">
              {activeCategory.dishes.map((dish, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-cream-100 dark:bg-midnight border border-restaurant-brown/10 dark:border-midnight-border flex items-center justify-between gap-4 hover:border-restaurant-red/40 transition-colors"
                >
                  <div>
                    <h4 className="font-serif font-bold text-base text-restaurant-brown dark:text-cream-100">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-restaurant-ink/60 dark:text-cream-300 font-sans mt-0.5">
                      {dish.desc}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-base text-restaurant-red shrink-0">
                    {dish.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button 
                onClick={onOpenMenu}
                className="inline-flex items-center gap-2 text-sm font-bold text-restaurant-red hover:text-restaurant-redHover tracking-wider uppercase group"
              >
                <span>EXPLORE ALL {activeCategory.name.toUpperCase()}</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
