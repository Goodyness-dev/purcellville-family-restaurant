export const SERVICES = [
  // 1. HOMEMADE PANCAKES & COMBOS
  {
    id: 'breakfast-burrito',
    title: 'Purcellville Breakfast Burrito Platter',
    category: 'Pancakes & Combos',
    subType: 'Signature Morning Platter',
    description: 'Warm flour tortilla packed with scrambled eggs, seasoned sausage, green bell peppers, sweet onions, tomatoes, and melted cheese. Flanked with fresh seasonal berries and dual house mild & hot salsas.',
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
    description: 'Three giant golden buttermilk pancakes served with whipped butter and warm syrup. Add hardwood bacon, country sausage, scrapple (+$3.99), or country ham.',
    price: '$6.95',
    numericPrice: 6.95,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Frisbee-Sized', 'Diner Classic', 'Griddled Hot']
  },
  {
    id: 'tres-leches-pancakes',
    title: 'Signature Tres Leches Pancakes',
    category: 'Pancakes & Combos',
    subType: 'House Specialty Breakfast',
    description: 'Fluffy golden pancakes soaked in rich sweet three-milk glaze, topped with whipped cream and fresh fruit.',
    price: '$8.95',
    numericPrice: 8.95,
    image: '/images/hero-desktop.jpg',
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
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Top Seller', 'Everything on Plate']
  },

  // 2. DAILY SPECIALS & HOMESTYLE DINNERS
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
    description: 'Warm soft tortillas stuffed with seasoned grilled chicken or fish, crisp cabbage slaw, red onions, and house tartar sauce, flanked by a huge portion of golden skin-on fries and fresh lemon.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-tacos-fries.jpg',
    popular: true,
    tags: ['Real Kitchen Photo', 'Crispy Skin-On Fries', 'House Slaw']
  },

  // 3. HOMESTYLE SOUPS & FRESH BOWLS
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

  // 4. HAND-SPUN SHAKES & DRINKS
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
    id: 'bottomless-coffee',
    title: 'Bottomless Hot Diner Coffee',
    category: 'Desserts & Beverages',
    subType: 'Poured in Heavy Ceramic Mug',
    description: 'Freshly ground and continually brewed hot coffee served in our heavy ceramic mugs with unlimited free refills.',
    price: '$2.50',
    numericPrice: 2.50,
    image: '/images/dish-shakes-drinks.jpg',
    popular: true,
    tags: ['Unlimited Refills', '$2.50']
  },
  {
    id: 'pb-chocolate-pie-coffee',
    title: 'Peanut Butter Chocolate Cream Pie with Coffee',
    category: 'Desserts & Beverages',
    subType: 'Daily Dessert Special',
    description: 'A rich slice of homemade peanut butter chocolate cream pie paired with a steaming hot cup of fresh diner coffee.',
    price: '$5.00',
    numericPrice: 5.00,
    image: '/images/dish-shakes-drinks.jpg',
    popular: false,
    tags: ['Pie + Coffee Deal', 'Scratch Made']
  }
];

export const CATEGORIES = [
  'All Plates',
  'Pancakes & Combos',
  'Daily Specials & Dinners',
  'Soups & Fresh Salads',
  'Desserts & Beverages'
];
