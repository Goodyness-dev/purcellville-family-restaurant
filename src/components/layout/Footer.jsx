import React from 'react';
import { PhoneIcon, MapPinIcon, CoffeeIcon, SpoonForkIcon } from '../common/Icons';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenMenu, onOpenOrder }) {
  return (
    <footer className="bg-restaurant-ink text-cream-100 border-t-2 border-restaurant-brown/20 relative overflow-hidden">
      
      {/* Decorative Top Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-restaurant-red via-restaurant-gold to-restaurant-turquoise" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-restaurant-red text-cream-50 flex items-center justify-center font-serif font-bold text-lg border-2 border-cream-50/20">
                PFR
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-cream-50">
                  Purcellville Family Restaurant
                </h3>
                <span className="text-[11px] font-mono text-restaurant-gold uppercase tracking-wider">
                  Main Street Diner • Est. 1983
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/75 leading-relaxed font-sans pt-2">
              Pull up a chair. Serving Western Loudoun County honest homestyle breakfasts, slow-sauced ribs, scratch soups, and bottomless hot coffee for over 40 years.
            </p>

            <div className="pt-2 text-xs font-mono text-cream-300">
              Virginia Health Department Certified • Proud Community Sponsor
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-cream-50">
              Explore The Diner
            </h4>
            <ul className="space-y-2 text-xs font-mono text-cream-200/80">
              <li>
                <a href="#menu" className="hover:text-restaurant-red transition-colors">
                  → Full Restaurant Menu
                </a>
              </li>
              <li>
                <a href="#the-table" className="hover:text-restaurant-red transition-colors">
                  → The Table Spread
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-restaurant-red transition-colors">
                  → Four Decades on Main St.
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-restaurant-red transition-colors">
                  → Hours & Directions
                </a>
              </li>
              <li>
                <a href="#/admin" className="text-restaurant-gold hover:underline">
                  → Staff & Owner Admin Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Hours At A Glance */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-cream-50">
              Operating Hours & Contact
            </h4>
            <div className="text-xs font-mono space-y-1.5 text-cream-200/80">
              <div className="flex justify-between py-1 border-b border-cream-50/10">
                <span>Monday – Thursday:</span>
                <span className="text-cream-50 font-bold">6:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-cream-50/10">
                <span>Friday:</span>
                <span className="text-cream-50 font-bold">6:00 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-cream-50/10">
                <span>Saturday:</span>
                <span className="text-cream-50 font-bold">6:30 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-cream-50/10">
                <span>Sunday:</span>
                <span className="text-cream-50 font-bold">7:00 AM – 3:00 PM</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-4 text-xs font-mono">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-1.5 text-cream-50 hover:text-restaurant-red transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-restaurant-red" />
                <span>(540) 338-3000</span>
              </a>
              <span className="text-cream-50/30">•</span>
              <span className="text-cream-300">110 W Main St, Purcellville, VA</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-50/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cream-300">
          <div>
            © {new Date().getFullYear()} Purcellville Family Restaurant LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="/llms.txt" className="hover:text-cream-50 transition-colors">llms.txt</a>
            <span>•</span>
            <a href="/robots.txt" className="hover:text-cream-50 transition-colors">robots.txt</a>
            <span>•</span>
            <a href="#/admin" className="text-restaurant-gold hover:underline">Admin Login</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
