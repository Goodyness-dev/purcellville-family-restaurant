export const SERVICES = [
  // BREAKFAST STAPLES
  {
    id: 'frisbee-buttermilk-pancakes',
    title: 'Famous Frisbee-Sized Buttermilk Pancakes',
    category: 'Breakfast',
    subType: 'Diner Griddle Classic',
    description: 'Our legendary giant plate-filling golden buttermilk pancakes served with whipped butter and warm maple syrup. Add hardwood bacon, sausage, or Virginia scrapple.',
    price: '$9.95',
    numericPrice: 9.95,
    image: '/images/restaurant-interior.jpg',
    popular: true,
    tags: ['Customer Favorite', 'Giant Portion', 'All-Day']
  },
  {
    id: 'wild-blueberry-pancakes',
    title: 'Wild Maine Blueberry Pancakes',
    category: 'Breakfast',
    subType: 'Fluffy Griddle Favorite',
    description: 'Enormous fluffy buttermilk pancakes packed with sweet wild blueberries, dusted with powdered sugar and served with whipped butter.',
    price: '$11.50',
    numericPrice: 11.50,
    image: '/images/restaurant-interior.jpg',
    popular: true,
    tags: ['Town Favorite', 'Fresh Fruit', 'All-Day']
  },
  {
    id: 'country-breakfast-burrito',
    title: 'Western Loudoun Breakfast Burrito Platter',
    category: 'Breakfast',
    subType: 'Signature Morning Platter',
    description: 'Warm flour tortilla rolled with fluffy farm eggs, savory sausage, diced bell peppers, onions, and melted cheddar, served with fresh cantaloupe, blackberries, raspberries, and mild and hot house salsas.',
    price: '$11.95',
    numericPrice: 11.95,
    image: '/images/dish-breakfast-burrito.jpg',
    popular: true,
    tags: ['House Specialty', 'Fresh Fruit', 'Dual Salsas']
  },
  {
    id: 'corned-beef-hash-eggs',
    title: 'Crispy Corned Beef Hash & Farm Eggs',
    category: 'Breakfast',
    subType: 'Homestyle Breakfast',
    description: 'Griddled crispy corned beef hash paired with two farm eggs cooked to order, golden home fries, and buttered toast with fruit preserves.',
    price: '$12.25',
    numericPrice: 12.25,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Traditional', 'Crispy Hash', 'Hearty']
  },
  {
    id: 'western-omelet-toast',
    title: 'Three-Egg Western Omelet',
    category: 'Breakfast',
    subType: 'Farm Egg Omelet',
    description: 'Three farm eggs stuffed with diced sugar-cured ham, fresh green bell peppers, sweet onions, and sharp cheddar cheese, served with home fries and toast.',
    price: '$11.75',
    numericPrice: 11.75,
    image: '/images/restaurant-interior.jpg',
    popular: false,
    tags: ['High Protein', 'Fresh Veggies', 'Toast Included']
  },

  // HOMESTYLE DINNERS
  {
    id: 'homestyle-ribs-fries',
    title: 'Slow-Sauced Country Ribs & Fries',
    category: 'Homestyle Favorites',
    subType: 'Generous Dinner Platter',
    description: 'Tender slow-simmered pork ribs smothered in rich savory barbecue glaze, served with a mountain of skin-on golden french fries and creamy homemade coleslaw on a classic diner plate.',
    price: '$16.95',
    numericPrice: 16.95,
    image: '/images/dish-ribs-fries.jpg',
    popular: true,
    tags: ['Customer Favorite', 'Fall-Off-The-Bone', 'Classic Plate']
  },
  {
    id: 'spaghetti-meat-sauce',
    title: 'Homestyle Spaghetti with Meat Sauce',
    category: 'Homestyle Favorites',
    subType: 'Pasta & Garlic Toast',
    description: 'A generous twirl of spaghetti noodles heaped with our slow-simmered seasoned ground beef marinara, garnished with fresh herbs and served with thick golden buttered garlic toast on our signature turquoise ceramic plate.',
    price: '$14.95',
    numericPrice: 14.95,
    image: '/images/dish-table-spaghetti.jpg',
    popular: true,
    tags: ['House Specialty', 'Turquoise Plate', 'Garlic Toast Included']
  },
  {
    id: 'country-fried-steak',
    title: 'Country Fried Steak & Pepper Gravy',
    category: 'Homestyle Favorites',
    subType: 'Southern Diner Classic',
    description: 'Tender beef cutlet breaded and fried to golden perfection, smothered in rich country white pepper gravy, served with skin-on fries and buttered vegetables.',
    price: '$15.50',
    numericPrice: 15.50,
    image: '/images/hero-desktop.jpg',
    popular: false,
    tags: ['Southern Classic', 'Scratch Gravy', 'Generous']
  },

  // LUNCH & SANDWICHES
  {
    id: 'soup-toasted-sandwich',
    title: 'Toasted Sourdough Club & Broccoli Cheddar Soup',
    category: 'Lunch & Sandwiches',
    subType: 'Sandwich & Soup Combo',
    description: 'Golden griddled sourdough bread layered with tender roasted ham, melted cheese, and crisp pickles, paired with crunchy crinkle potato chips and a steaming ceramic bowl of rich broccoli cheddar soup.',
    price: '$12.95',
    numericPrice: 12.95,
    image: '/images/dish-soup-sandwich.jpg',
    popular: true,
    tags: ['Lunch Favorite', 'Hot Kettle Soup', 'Crinkle Chips']
  },
  {
    id: 'purcellville-patty-melt',
    title: 'Purcellville Patty Melt on Grilled Rye',
    category: 'Lunch & Sandwiches',
    subType: 'Diner Griddle Melt',
    description: 'Fresh grilled Angus beef patty topped with sweet caramelized onions and double Swiss cheese on griddled marble rye bread, served with fries.',
    price: '$11.95',
    numericPrice: 11.95,
    image: '/images/dish-ribs-fries.jpg',
    popular: true,
    tags: ['Griddle Melt', 'Caramelized Onions', 'Angus Beef']
  },
  {
    id: 'classic-diner-cheeseburger',
    title: 'Old-Fashioned Diner Cheeseburger & Fries',
    category: 'Lunch & Sandwiches',
    subType: 'Fresh Angus Burger',
    description: 'Seared on our seasoned flat top with melted American cheese, crisp lettuce, sliced tomato, sweet pickle chips, and mayonnaise on a toasted brioche bun.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-ribs-fries.jpg',
    popular: false,
    tags: ['Flat-Top Seared', 'Fresh Angus', 'Golden Fries']
  },

  // SOUPS & SALADS
  {
    id: 'broccoli-cheddar-bowl',
    title: 'Velvet Broccoli Cheddar Soup Bowl',
    category: 'Soups & Fresh Salads',
    subType: 'Scratch-Made Kettle',
    description: 'Simmered daily in small batches with aged cheddar cheese, fresh cream, and tender broccoli florets, served with crisp crackers.',
    price: '$6.50',
    numericPrice: 6.50,
    image: '/images/dish-soup-sandwich.jpg',
    popular: false,
    tags: ['Kettle Fresh', 'Velvet Cheddar', 'Comfort']
  },
  {
    id: 'homestyle-veg-beef-soup',
    title: 'Homestyle Vegetable Beef Soup & Salad',
    category: 'Soups & Fresh Salads',
    subType: 'Hearty Broth Bowl',
    description: 'Tender simmered beef with sweet corn, garden peas, carrots, and potatoes in rich savory tomato beef broth, served with a garden side salad.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-table-spaghetti.jpg',
    popular: false,
    tags: ['Slow-Simmered', 'Garden Salad', 'Hearty Broth']
  },

  // BEVERAGES
  {
    id: 'fresh-diner-coffee',
    title: 'Bottomless Fresh Diner Coffee',
    category: 'Beverages & Sides',
    subType: 'Hot Brew in Ceramic Mug',
    description: 'Freshly ground and continually brewed hot diner coffee, poured fresh to your table in our heavy white ceramic mugs. Refills always free.',
    price: '$2.95',
    numericPrice: 2.95,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Bottomless Refills', 'Hot Brew', 'Diner Tradition']
  }
];

export const CATEGORIES = [
  'All Plates',
  'Breakfast',
  'Homestyle Favorites',
  'Lunch & Sandwiches',
  'Soups & Fresh Salads',
  'Beverages & Sides'
];
