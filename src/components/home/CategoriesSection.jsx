import React, { useState } from 'react';
import { ArrowRightIcon } from '../common/Icons';

const CATEGORY_ITEMS = [
  {
    name: 'Breakfast',
    tagline: 'Hearty eggs, fluffy buttermilk pancakes & country breakfast burritos',
    hours: 'Served Daily 6:00 AM – 2:00 PM (All Day Saturday & Sunday)',
    image: '/images/dish-breakfast-burrito.jpg',
    leadPlate: 'Western Loudoun Breakfast Burrito Platter',
    description: 'Fresh farm eggs, breakfast sausage, peppers, and melted cheddar wrapped hot and served with fresh seasonal berries and dual house salsas.',
    dishes: [
      { name: 'Western Loudoun Breakfast Burrito', price: '$11.95', desc: 'Sausage, eggs, peppers, fresh berries & salsas' },
      { name: 'Buttermilk Pancake Stack', price: '$10.50', desc: 'Three fluffy cakes, whipped butter & hardwood bacon' },
      { name: 'Country Eggs & Biscuits', price: '$9.95', desc: 'Two farm eggs, country sausage gravy & warm biscuits' }
    ]
  },
  {
    name: 'Homestyle Favorites',
    tagline: 'Slow-simmered ribs, country steak & homestyle spaghetti',
    hours: 'Served All Afternoon & Evening',
    image: '/images/dish-ribs-fries.jpg',
    leadPlate: 'Slow-Sauced Country Ribs & Fries',
    description: 'Tender pork ribs basted in our savory house barbecue glaze, served with a generous mountain of crispy skin-on french fries and cool homemade slaw.',
    dishes: [
      { name: 'Slow-Sauced Country Ribs', price: '$16.95', desc: 'Tender glaze-braised ribs, golden fries & slaw' },
      { name: 'Spaghetti with Meat Sauce', price: '$14.95', desc: 'Twirl of noodles, hearty beef marinara & garlic toast' },
      { name: 'Country Fried Steak', price: '$15.50', desc: 'Golden crispy beef steak smothered in white pepper gravy' }
    ]
  },
  {
    name: 'Lunch & Sandwiches',
    tagline: 'Thick sourdough melts, stacked clubs & warm kettle combos',
    hours: 'Available from 10:30 AM Daily',
    image: '/images/dish-soup-sandwich.jpg',
    leadPlate: 'Toasted Ham Club & Creamy Soup',
    description: 'Hot grilled sourdough layered with roasted ham and melted cheese, crinkle potato chips, and a piping hot bowl of rich broccoli cheddar soup.',
    dishes: [
      { name: 'Toasted Club & Kettle Soup', price: '$12.95', desc: 'Ham, cheese, crinkle chips & broccoli cheddar' },
      { name: 'Purcellville Patty Melt', price: '$11.95', desc: 'Griddled Angus beef, caramelized onions & rye' },
      { name: 'Classic Diner BLT', price: '$9.95', desc: 'Crispy bacon, ripe tomato, crisp lettuce & mayo' }
    ]
  },
  {
    name: 'Soups & Fresh Salads',
    tagline: 'Daily kettle soups and crisp farm garden bowls',
    hours: 'Fresh Kettle Daily',
    image: '/images/dish-table-spaghetti.jpg',
    leadPlate: 'Homestyle Kettle Soup & Crisp Salad',
    description: 'Simmered fresh each morning using tender vegetables and savory broths, served alongside crunchy greens and crisp crackers.',
    dishes: [
      { name: 'Broccoli Cheddar Kettle Soup', price: '$6.50', desc: 'Rich velvet cheddar, tender broccoli florets' },
      { name: 'Vegetable Beef Soup', price: '$6.50', desc: 'Simmered beef broth, sweet corn, peas & carrots' },
      { name: 'Chef Garden Salad Bowl', price: '$9.95', desc: 'Mixed greens, cucumber, sweet onion & vinaigrette' }
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
            <span>// 03 OUR EVERYDAY SPREAD</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-restaurant-brown dark:text-cream-50 tracking-tight leading-tight">
            WHAT ARE YOU <br className="hidden sm:block" />
            <span className="italic font-light text-restaurant-red">HUNGRY FOR?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-restaurant-ink/70 dark:text-cream-200/70 font-sans">
            Select a category to explore our kitchen's most beloved everyday plates.
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
