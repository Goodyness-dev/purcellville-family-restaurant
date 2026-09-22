export const SERVICES = [
  // 1. HOMEMADE PANCAKES & COMBOS
  {
    id: 'three-pancakes',
    title: '3 Homemade Buttermilk Pancakes',
    category: 'Pancakes & Combos',
    subType: 'Plate-Filling Griddle Stack',
    description: 'Three giant golden buttermilk pancakes served with whipped butter and warm syrup. Choice to add Bacon, Sausage, Scrapple (+$3.99) or Country Ham.',
    price: '$6.95',
    numericPrice: 6.95,
    image: '/images/restaurant-interior.jpg',
    popular: true,
    tags: ['Frisbee-Sized', 'Diner Classic', 'Griddled Hot']
  },
  {
    id: 'blueberry-pancakes',
    title: '3 Wild Blueberry Pancakes',
    category: 'Pancakes & Combos',
    subType: 'Fruit-Packed Cakes',
    description: 'Three giant buttermilk pancakes filled with sweet blueberries and dusted with powdered sugar.',
    price: '$7.45',
    numericPrice: 7.45,
    image: '/images/restaurant-interior.jpg',
    popular: true,
    tags: ['Local Favorite', 'Wild Blueberries']
  },
  {
    id: 'tres-leches-pancakes',
    title: 'Signature Tres Leches Pancakes',
    category: 'Pancakes & Combos',
    subType: 'House Specialty Breakfast',
    description: 'Fluffy golden pancakes soaked in rich sweet three-milk glaze, topped with whipped cream and fresh strawberries.',
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
  {
    id: 'breakfast-combo-3',
    title: 'Breakfast Combo #3 (Biscuits & Gravy)',
    category: 'Pancakes & Combos',
    subType: 'Southern Feast',
    description: '2 Farm Eggs, 2 Bacon strips, 2 Sausage links, crispy Home Fries, and 2 warm buttermilk Biscuits smothered in country sausage gravy.',
    price: '$14.95',
    numericPrice: 14.95,
    image: '/images/dish-ribs-fries.jpg',
    popular: true,
    tags: ['Biscuits & Gravy', 'Southern Comfort']
  },
  {
    id: 'french-toast-meat',
    title: 'Banana or Strawberry French Toast w/ Meat',
    category: 'Pancakes & Combos',
    subType: 'Griddle Specialty',
    description: 'Thick-cut golden French toast topped with fresh banana slices or strawberries, served with choice of bacon or sausage.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/restaurant-interior.jpg',
    popular: false,
    tags: ['Fresh Fruit', 'Bacon or Sausage']
  },
  {
    id: 'sausage-chipped-beef-gravy',
    title: 'Sausage or Chipped Beef Gravy',
    category: 'Pancakes & Combos',
    subType: 'Virginia Diner Tradition',
    description: 'Served piping hot over your choice of toasted bread, 2 warm biscuits, or 2 golden pancakes.',
    price: '$9.95',
    numericPrice: 9.95,
    image: '/images/dish-soup-sandwich.jpg',
    popular: false,
    tags: ['Traditional Chipped Beef', 'Scratch Gravy']
  },

  // 2. SIGNATURE BREAKFAST & MEXICAN SPECIALTIES
  {
    id: 'breakfast-burrito',
    title: 'Purcellville Breakfast Burrito Platter',
    category: 'Morning Specialties',
    subType: 'Facebook Featured Platter',
    description: 'Flour tortilla packed with scrambled eggs, seasoned sausage, green bell peppers, sweet onions, tomatoes, and melted cheese. Served with fresh seasonal fruit and mild & hot salsas.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/dish-breakfast-burrito.jpg',
    popular: true,
    tags: ['Real Diner Photo', 'Fresh Fruit Cup', 'Dual Salsas']
  },
  {
    id: 'huevos-rancheros',
    title: 'Huevos Rancheros Platter',
    category: 'Morning Specialties',
    subType: 'Authentic Morning Specialty',
    description: 'Crispy corn tortillas topped with fried beans, 2 sunny farm eggs, homemade pico de gallo, fresh sliced avocado, and house salsa on the side.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-table-spaghetti.jpg',
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
    image: '/images/dish-table-spaghetti.jpg',
    popular: true,
    tags: ['Salsa Verde', 'Queso Fresco']
  },
  {
    id: 'chorizo-breakfast-bowl',
    title: 'Chorizo Breakfast Bowl with Home Fries',
    category: 'Morning Specialties',
    subType: 'Hearty Breakfast Skillet',
    description: 'Crispy seasoned home fries loaded with spicy Mexican chorizo, sauteed peppers, onions, melted jack cheese, and two eggs on top.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/dish-breakfast-burrito.jpg',
    popular: false,
    tags: ['Spicy Chorizo', 'Crispy Homefries']
  },
  {
    id: 'avocado-blt',
    title: 'Fresh Avocado BLT on Toast',
    category: 'Morning Specialties',
    subType: 'All-Day Breakfast',
    description: 'Hardwood smoked bacon, fresh sliced avocado, ripe tomatoes, crisp lettuce, and mayo on your choice of toasted bread with home fries.',
    price: '$12.95',
    numericPrice: 12.95,
    image: '/images/dish-soup-sandwich.jpg',
    popular: false,
    tags: ['Fresh Avocado', 'Thick Bacon']
  },

  // 3. FARM EGGS & 2-EGG OMELETS (Served with 2 sides)
  {
    id: 'corned-beef-hash-eggs',
    title: 'Corned Beef Hash & 2 Farm Eggs',
    category: 'Farm Eggs & Omelets',
    subType: 'Served w/ 2 Sides',
    description: 'Griddled crispy corned beef hash and two farm eggs cooked any style. Served with your choice of 2 sides: Home Fries, Toast, or Fresh Fruit.',
    price: '$9.95',
    numericPrice: 9.95,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Crispy Hash', '2 Sides Included']
  },
  {
    id: 'steak-and-eggs',
    title: 'Sirloin Steak & Two Eggs Platter',
    category: 'Farm Eggs & Omelets',
    subType: 'Butcher Cut Breakfast',
    description: 'Charbroiled juicy steak cooked to your liking, paired with 2 farm eggs, crispy home fries, and buttered toast.',
    price: '$21.95',
    numericPrice: 21.95,
    image: '/images/hero-desktop.jpg',
    popular: false,
    tags: ['Charbroiled Steak', 'Hearty Protein']
  },
  {
    id: 'western-omelet',
    title: 'Classic Western Omelet',
    category: 'Farm Eggs & Omelets',
    subType: 'Served w/ 2 Sides',
    description: 'Diced ham, fresh green bell peppers, sweet onions, and melted American cheese folded in fluffy eggs. Served with 2 sides.',
    price: '$10.95',
    numericPrice: 10.95,
    image: '/images/restaurant-interior.jpg',
    popular: true,
    tags: ['Virginia Ham', '2 Sides Included']
  },
  {
    id: 'greek-omelet',
    title: 'Greek Omelet with Feta & Tomato',
    category: 'Farm Eggs & Omelets',
    subType: 'Served w/ 2 Sides',
    description: 'Crumbled tangy feta cheese, ripe diced tomatoes, and sweet onions. Served with choice of home fries, toast, or fruit.',
    price: '$8.95',
    numericPrice: 8.95,
    image: '/images/restaurant-interior.jpg',
    popular: false,
    tags: ['Tangy Feta', 'Fresh Veggies']
  },
  {
    id: 'all-meat-omelet',
    title: 'All-Meat & Cheese Omelet',
    category: 'Farm Eggs & Omelets',
    subType: 'Carnivore Special',
    description: 'Loaded with bacon, country sausage, ham, Virginia scrapple, and melted cheese. Served with 2 sides.',
    price: '$12.95',
    numericPrice: 12.95,
    image: '/images/dish-ribs-fries.jpg',
    popular: false,
    tags: ['Bacon + Sausage + Scrapple + Ham']
  },

  // 4. DAILY SPECIALS & HOMESTYLE DINNERS
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
    id: 'country-fried-steak-dinner',
    title: 'Country Fried Steak with Mashed Potatoes & Veggies',
    category: 'Daily Specials & Dinners',
    subType: 'Thursday Feature',
    description: 'Golden crispy fried beef cutlet smothered in homestyle country pepper gravy, served with real mashed potatoes and buttered mixed vegetables.',
    price: '$13.95',
    numericPrice: 13.95,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Thursday Special', 'Mashed Potatoes & Gravy']
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

  // 5. HOMESTYLE SIDES, DESSERT & DRINKS
  {
    id: 'pb-chocolate-pie-coffee',
    title: 'Peanut Butter Chocolate Cream Pie with Coffee',
    category: 'Desserts & Beverages',
    subType: 'Daily Dessert Special',
    description: 'A rich slice of homemade peanut butter chocolate cream pie paired with a steaming hot cup of fresh diner coffee.',
    price: '$5.00',
    numericPrice: 5.00,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Pie + Coffee Deal', 'Scratch Made']
  },
  {
    id: 'bottomless-coffee',
    title: 'Bottomless Hot Diner Coffee',
    category: 'Desserts & Beverages',
    subType: 'Poured in Heavy Ceramic Mug',
    description: 'Freshly ground and continually brewed hot coffee served in our heavy white ceramic mugs with unlimited free refills.',
    price: '$2.50',
    numericPrice: 2.50,
    image: '/images/hero-desktop.jpg',
    popular: true,
    tags: ['Unlimited Refills', '$2.50']
  },
  {
    id: 'thick-milkshake',
    title: 'Old-Fashioned Hand-Spun Milkshake',
    category: 'Desserts & Beverages',
    subType: 'Diner Milkshake',
    description: 'Hand-dipped ice cream blended thick with whipped cream and a cherry on top. Chocolate, Vanilla, or Strawberry.',
    price: '$5.95',
    numericPrice: 5.95,
    image: '/images/restaurant-interior.jpg',
    popular: false,
    tags: ['Hand-Spun', 'Diner Classic']
  },
  {
    id: 'side-corned-beef-hash',
    title: 'Side of Crispy Corned Beef Hash',
    category: 'Desserts & Beverages',
    subType: 'A La Carte Side',
    description: 'Generous side of seasoned corned beef hash seared crisp on the flat top grill.',
    price: '$4.99',
    numericPrice: 4.99,
    image: '/images/hero-desktop.jpg',
    popular: false,
    tags: ['A La Carte']
  }
];

export const CATEGORIES = [
  'All Plates',
  'Pancakes & Combos',
  'Morning Specialties',
  'Farm Eggs & Omelets',
  'Daily Specials & Dinners',
  'Desserts & Beverages'
];
