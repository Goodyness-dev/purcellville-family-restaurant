export const SERVICES = [
  // 1. PANCAKES & COMBOS (Unique Real Images)
  {
    id: 'breakfast-burrito',
    title: 'Purcellville Breakfast Burrito Platter',
    category: 'Pancakes & Combos',
    subType: 'Signature Morning Platter',
    description: 'Flour tortilla packed with scrambled eggs, seasoned sausage, green bell peppers, sweet onions, tomatoes, and melted cheese. Flanked with fresh seasonal fruit and dual house salsas.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-breakfast-burrito.jpg',
    popular: true,
    tags: ['Customer Favorite', 'Fresh Fruit Cup', 'Dual Salsas']
  },
  {
    id: 'three-pancakes',
    title: '3 Homemade Buttermilk Pancakes',
    category: 'Pancakes & Combos',
    subType: 'Plate-Filling Griddle Stack',
    description: 'Three giant golden buttermilk pancakes served with whipped butter and warm syrup. Add hardwood bacon, sausage, or scrapple (+$3.99).',
    price: '$6.95',
    numericPrice: 6.95,
    image: '/images/dish-facebook-1.jpg',
    popular: true,
    tags: ['Frisbee-Sized', 'Diner Classic', 'Griddled Hot']
  },
  {
    id: 'tres-leches-pancakes',
    title: 'Signature Tres Leches Pancakes',
    category: 'Pancakes & Combos',
    subType: 'House Specialty Breakfast',
    description: 'Fluffy golden pancakes soaked in rich sweet three-milk glaze, topped with whipped cream and fresh seasonal fruit.',
    price: '$8.95',
    numericPrice: 8.95,
    image: '/images/dish-facebook-8.jpg',
    popular: true,
    tags: ['Facebook Favorite', 'Sweet Treat']
  },
  {
    id: 'breakfast-combo-2',
    title: 'Breakfast Combo #2',
    category: 'Pancakes & Combos',
    subType: 'The Hungry Neighbor Feast',
    description: '2 Farm Eggs, 2 Golden Pancakes, 2 Hardwood Bacon strips, 2 Country Sausage links, and crispy Home Fries.',
    price: '$12.95',
    numericPrice: 12.95,
    image: '/images/dish-facebook-2.jpg',
    popular: true,
    tags: ['Top Seller', 'Everything on Plate']
  },

  // 2. DAILY SPECIALS & HOMESTYLE DINNERS (Unique Real Images)
  {
    id: 'bbq-chicken-fries-slaw',
    title: 'Monday Special: BBQ Chicken with Coleslaw & Fries',
    category: 'Daily Specials & Dinners',
    subType: 'Official Daily Special',
    description: 'Tender slow-glazed barbecue chicken served with a mountain of skin-on golden french fries and creamy homemade coleslaw.',
    price: '$14.95',
    numericPrice: 14.95,
    image: '/images/dish-ribs-fries.jpg',
    popular: true,
    tags: ['Official Facebook Special', 'Skin-On Fries']
  },
  {
    id: 'grilled-cheese-hamburger-soup',
    title: 'Grilled Cheese with Cup of Hamburger Soup & Chips',
    category: 'Daily Specials & Dinners',
    subType: 'Official Daily Special',
    description: 'Golden buttery grilled cheese sandwich served with a steaming cup of homestyle hamburger vegetable soup and crunchy potato chips.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-soup-sandwich.jpg',
    popular: true,
    tags: ['Official Facebook Special', 'Kettle Hamburger Soup']
  },
  {
    id: 'homestyle-spaghetti-meat-sauce',
    title: 'Homestyle Spaghetti with Meat Sauce & Garlic Toast',
    category: 'Daily Specials & Dinners',
    subType: 'Turquoise Plate Favorite',
    description: 'Twirl of noodles heaped with slow-simmered savory beef marinara and fresh herbs, served on our signature turquoise ceramic plate with garlic toast.',
    price: '$14.95',
    numericPrice: 14.95,
    image: '/images/dish-table-spaghetti.jpg',
    popular: true,
    tags: ['Turquoise Plate', 'Garlic Toast Included']
  },
  {
    id: 'diner-fish-tacos-fries',
    title: 'Diner Tacos Platter with Mountain of Golden Fries',
    category: 'Daily Specials & Dinners',
    subType: 'House Taco Platter',
    description: 'Warm soft tortillas stuffed with seasoned grilled chicken or fish, crisp cabbage slaw, red onions, and house tartar sauce, flanked by a huge portion of golden skin-on fries.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-tacos-fries.jpg',
    popular: true,
    tags: ['Real Kitchen Photo', 'Crispy Skin-On Fries', 'House Slaw']
  },
  {
    id: 'country-fried-steak-dinner',
    title: 'Country Fried Steak with Mashed Potatoes & Veggies',
    category: 'Daily Specials & Dinners',
    subType: 'Thursday Feature',
    description: 'Golden crispy fried beef cutlet smothered in homestyle country pepper gravy, served with real mashed potatoes and buttered mixed vegetables.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-facebook-9.jpg',
    popular: false,
    tags: ['Thursday Special', 'Mashed Potatoes & Gravy']
  },

  // 3. MORNING SPECIALTIES (Unique Real Images)
  {
    id: 'huevos-rancheros',
    title: 'Huevos Rancheros Platter',
    category: 'Morning Specialties',
    subType: 'Authentic Morning Specialty',
    description: 'Crispy corn tortillas topped with fried beans, 2 sunny farm eggs, homemade pico de gallo, fresh sliced avocado, and house salsa on the side.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-facebook-7.jpg',
    popular: true,
    tags: ['Fresh Avocado', 'House Pico', 'Tortillas']
  },
  {
    id: 'chilaquiles-verdes',
    title: 'Chilaquiles Verdes con Huevos',
    category: 'Morning Specialties',
    subType: 'Scratch-Made Favorite',
    description: 'Crisp tortilla chips simmered in tangy salsa verde, topped with Mexican crema, queso fresco, sliced avocado, and two sunny eggs.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-facebook-6.jpg',
    popular: true,
    tags: ['Salsa Verde', 'Queso Fresco']
  },
  {
    id: 'corned-beef-hash-eggs',
    title: 'Crispy Corned Beef Hash & 2 Eggs',
    category: 'Morning Specialties',
    subType: 'Served w/ 2 Sides',
    description: 'Griddled crispy corned beef hash and two eggs cooked to order, with choice of home fries, toast, or fresh fruit.',
    price: '$9.95',
    numericPrice: 9.95,
    image: '/images/dish-facebook-3.jpg',
    popular: true,
    tags: ['Crispy Hash', '2 Sides Included']
  },
  {
    id: 'classic-western-omelet',
    title: 'Three-Egg Western Omelet',
    category: 'Morning Specialties',
    subType: 'Served w/ 2 Sides',
    description: 'Diced ham, fresh green bell peppers, sweet onions, and melted American cheese folded in fluffy eggs. Served with 2 sides.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-facebook-4.jpg',
    popular: false,
    tags: ['Virginia Ham', '2 Sides Included']
  },

  // 4. HOMESTYLE SOUPS & FRESH BOWLS (Unique Real Images)
  {
    id: 'homestyle-meatball-soup',
    title: 'Scratch-Made Albondigas Meatball Kettle Soup',
    category: 'Soups & Fresh Salads',
    subType: 'Handmade Meatball Kettle',
    description: 'Steaming rich tomato vegetable broth loaded with a jumbo tender seasoned handmade meatball, sweet corn, garden peas, carrots, and potatoes.',
    price: '$7.50',
    numericPrice: 7.50,
    image: '/images/dish-meatball-soup.jpg',
    popular: true,
    tags: ['Real Kitchen Photo', 'Jumbo Handmade Meatball', 'Scratch Broth']
  },
  {
    id: 'purcellville-patty-melt',
    title: 'Purcellville Patty Melt on Grilled Rye',
    category: 'Soups & Fresh Salads',
    subType: 'Diner Griddle Melt',
    description: 'Fresh grilled Angus beef patty topped with sweet caramelized onions and double Swiss cheese on griddled marble rye bread, served with fries.',
    price: '$11.95',
    numericPrice: 11.95,
    image: '/images/dish-facebook-10.jpg',
    popular: false,
    tags: ['Griddle Melt', 'Caramelized Onions']
  },
  {
    id: 'old-fashioned-cheeseburger',
    title: 'Old-Fashioned Diner Cheeseburger & Fries',
    category: 'Soups & Fresh Salads',
    subType: 'Fresh Angus Burger',
    description: 'Seared on our seasoned flat top with melted American cheese, crisp lettuce, sliced tomato, pickles, and mayo on a toasted bun with fries.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-facebook-11.jpg',
    popular: false,
    tags: ['Flat-Top Seared', 'Fresh Angus']
  },

  // 5. HAND-SPUN SHAKES & SIDES (Unique Real Images)
  {
    id: 'hand-spun-strawberry-shake',
    title: 'Hand-Spun Strawberry Milkshake & Whipped Mug',
    category: 'Desserts & Beverages',
    subType: 'Old-Fashioned Soda Fountain',
    description: 'Hand-dipped strawberry ice cream blended thick and crowned with fluffy whipped cream and ruby candy sprinkles, served in a classic soda fountain goblet.',
    price: '$5.95',
    numericPrice: 5.95,
    image: '/images/dish-shakes-drinks.jpg',
    popular: true,
    tags: ['Real Photo', 'Hand-Spun', 'Whipped Cream']
  },
  {
    id: 'fresh-fruit-cup-side',
    title: 'Fresh Seasonal Fruit Cup',
    category: 'Desserts & Beverages',
    subType: 'Healthy Diner Side',
    description: 'Ripe sweet honeydew, cantaloupe, blackberries, and fresh raspberries prepared fresh daily.',
    price: '$2.95',
    numericPrice: 2.95,
    image: '/images/dish-facebook-12.jpg',
    popular: false,
    tags: ['Fresh Daily', 'Seasonal Berries']
  },
  {
    id: 'hot-griddle-sandwich-side',
    title: 'Grilled Ham & Swiss Toast Side',
    category: 'Desserts & Beverages',
    subType: 'Diner Griddle Bread',
    description: 'Golden buttery griddled toast with country ham and melted Swiss cheese.',
    price: '$4.95',
    numericPrice: 4.95,
    image: '/images/dish-facebook-5.jpg',
    popular: false,
    tags: ['Hot Off Grill']
  }
];

export const CATEGORIES = [
  'All Plates',
  'Pancakes & Combos',
  'Daily Specials & Dinners',
  'Morning Specialties',
  'Soups & Fresh Salads',
  'Desserts & Beverages'
];
