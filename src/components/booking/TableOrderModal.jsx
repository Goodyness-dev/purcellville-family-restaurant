import React, { useState } from 'react';
import { CloseIcon, PhoneIcon, SpoonForkIcon, CheckIcon } from '../common/Icons';
import { BUSINESS_INFO } from '../../data/businessData';

export default function TableOrderModal({ isOpen, onClose, preselectedItem }) {
  const [orderType, setOrderType] = useState('table'); // 'table' | 'takeout' | 'catering'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    notes: preselectedItem ? `Order requested: ${preselectedItem.title} (${preselectedItem.price})` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-cream-100 dark:bg-midnight-card w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-restaurant-brown/10 dark:border-midnight-border animate-scaleUp relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-cream-200 dark:bg-midnight-pure text-restaurant-brown dark:text-cream-100 hover:bg-restaurant-red hover:text-cream-50 transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-restaurant-red/10 text-restaurant-red text-xs font-mono font-bold uppercase mb-2">
                <SpoonForkIcon className="w-3.5 h-3.5" />
                <span>Pull Up a Chair</span>
              </div>
              <h2 className="font-serif font-bold text-3xl text-restaurant-brown dark:text-cream-50">
                Reserve a Table or Order Takeout
              </h2>
              <p className="text-xs sm:text-sm text-restaurant-ink/70 dark:text-cream-300 font-sans mt-1">
                We'll have your table ready or your hot comfort meal packed for pick up.
              </p>
            </div>

            {/* Type Selector */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { id: 'table', label: 'Dine-In Table' },
                { id: 'takeout', label: 'Takeout Order' },
                { id: 'catering', label: 'Group / Catering' }
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setOrderType(t.id)}
                  className={`py-2.5 px-3 rounded-2xl text-xs font-mono font-bold transition-all ${
                    orderType === t.id
                      ? 'bg-restaurant-red text-cream-50 shadow-sm'
                      : 'bg-cream-50 dark:bg-midnight text-restaurant-brown dark:text-cream-200 border border-restaurant-brown/10'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-restaurant-brown dark:text-cream-200 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-midnight border border-restaurant-brown/20 dark:border-midnight-border text-restaurant-brown dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-restaurant-red text-xs"
                  />
                </div>

                <div>
                  <label className="block text-restaurant-brown dark:text-cream-200 font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(540) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-midnight border border-restaurant-brown/20 dark:border-midnight-border text-restaurant-brown dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-restaurant-red text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-restaurant-brown dark:text-cream-200 font-semibold mb-1">
                    Party Size
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-midnight border border-restaurant-brown/20 dark:border-midnight-border text-restaurant-brown dark:text-cream-100 text-xs"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3 – 4 People</option>
                    <option value="5-8">5 – 8 People</option>
                    <option value="9+">9+ Large Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-restaurant-brown dark:text-cream-200 font-semibold mb-1">
                    Date
                  </label>
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-midnight border border-restaurant-brown/20 dark:border-midnight-border text-restaurant-brown dark:text-cream-100 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-restaurant-brown dark:text-cream-200 font-semibold mb-1">
                    Approx. Time
                  </label>
                  <input 
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="e.g. 12:30 PM"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-midnight border border-restaurant-brown/20 dark:border-midnight-border text-restaurant-brown dark:text-cream-100 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-restaurant-brown dark:text-cream-200 font-semibold mb-1">
                  Dishes Desired or Special Requests
                </label>
                <textarea 
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. 2 orders of ribs & fries, bottomless coffee, high chair needed"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-midnight border border-restaurant-brown/20 dark:border-midnight-border text-restaurant-brown dark:text-cream-100 text-xs resize-none"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full justify-center !py-3.5 text-sm">
                  <span>Confirm Request</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-restaurant-ink/60 dark:text-cream-400 font-sans mt-2">
                Prefer to talk to our kitchen staff directly? Call{' '}
                <a href="tel:5403383000" className="text-restaurant-red font-bold underline">
                  (540) 338-3000
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-3xl text-restaurant-brown dark:text-cream-50">
              We'll Have Your Chair Ready!
            </h3>
            <p className="text-sm font-sans text-restaurant-ink/80 dark:text-cream-200 max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. We've received your {orderType} request for <strong>{formData.time} on {formData.date}</strong>. Our staff looks forward to seeing you at 110 W Main St!
            </p>
            <div className="pt-4">
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="btn-primary !px-8 text-xs"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
