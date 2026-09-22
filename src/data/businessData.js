export const BUSINESS_INFO = {
  name: "Purcellville Family Restaurant",
  legalName: "Purcellville Family Restaurant LLC",
  tagline: "Pull Up a Chair — There's Always Something Good on the Table.",
  address: {
    street: "110 W Main St",
    city: "Purcellville",
    state: "VA",
    zip: "20132",
    formatted: "110 W Main St, Purcellville, VA 20132",
  },
  phone: "(540) 338-0400",
  secondaryPhone: "(540) 338-3000",
  website: "purcellvillefamilyrestaurant.com",
  email: "hello@purcellvillefamilyrestaurant.com",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=Purcellville+Family+Restaurant,+110+W+Main+St,+Purcellville,+VA+20132",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Purcellville%20Family%20Restaurant%2C%20110%20W%20Main%20St%2C%20Purcellville%2C%20VA%2020132&t=&z=16&ie=UTF8&iwloc=&output=embed",
  
  hours: [
    { day: "Monday", open: "6:00 AM", close: "8:00 PM", note: "All-Day Breakfast & Daily Specials" },
    { day: "Tuesday", open: "6:00 AM", close: "8:00 PM", note: "All-Day Breakfast" },
    { day: "Wednesday", open: "6:00 AM", close: "8:00 PM", note: "All-Day Breakfast" },
    { day: "Thursday", open: "6:00 AM", close: "8:00 PM", note: "All-Day Breakfast" },
    { day: "Friday", open: "6:00 AM", close: "8:30 PM", note: "Homestyle Dinners & Specials" },
    { day: "Saturday", open: "6:30 AM", close: "8:30 PM", note: "Famous Frisbee Pancakes All Day" },
    { day: "Sunday", open: "7:00 AM", close: "3:00 PM", note: "Sunday Family Breakfast & Brunch" },
  ],

  history: [
    {
      year: "1983",
      title: "Main Street Roots",
      description: "Founded on West Main Street with one simple mission: serve honest, generous, homemade comfort food to the Purcellville community."
    },
    {
      year: "2001",
      title: "The Town Gathering Spot",
      description: "Became the go-to morning spot where farmers, local business owners, teachers, and families gather for hot coffee and giant buttermilk pancakes."
    },
    {
      year: "2018",
      title: "Expanded Homestyle Menu",
      description: "Expanded our homestyle dinner lineup with slow-braised ribs, country steaks, made-from-scratch soups, and traditional pasta specialties."
    },
    {
      year: "Present",
      title: "Loudoun County's Hometown Table",
      description: "Still family-owned, still greeting you by name, and still making sure nobody ever leaves hungry."
    }
  ],

  owner: {
    name: "The Family & Kitchen Staff",
    role: "Proprietors & Home Cooks",
    quote: "We believe a family restaurant isn't just about what's on the plate — it's about the feeling when you walk in the front door. Pull up a chair. There's always something good on the table."
  },

  reviews: [
    {
      author: "Sarah M.",
      location: "Purcellville, VA",
      source: "Google Review",
      rating: 5,
      date: "2 weeks ago",
      comment: "The pancakes are literally the size of frisbees and so fluffy! The breakfast burrito is packed, the coffee never runs dry, and the servers make you feel like family the second you sit down."
    },
    {
      author: "Robert T.",
      location: "Round Hill, VA",
      source: "Yelp",
      rating: 5,
      date: "1 month ago",
      comment: "Classic small-town diner comfort at its finest. The toasted club sandwich with creamy soup and potato chips hit the spot completely. Generous portions, fair prices, and pay at the register when you finish!"
    },
    {
      author: "Evelyn K.",
      location: "Leesburg, VA",
      source: "Google Review",
      rating: 5,
      date: "3 weeks ago",
      comment: "We brought our whole family here for dinner. The spaghetti with homemade meat sauce was fantastic, and the sauced ribs literally fell off the bone. Nothing fancy, just downright delicious honest cooking."
    },
    {
      author: "David H.",
      location: "Purcellville, VA",
      source: "Yelp",
      rating: 5,
      date: "2 months ago",
      comment: "Old-school Virginia hospitality. Corned beef hash cooked crispy on the flat top, blueberry pancakes, hot coffee, and everyone is smiling. A true Western Loudoun staple."
    }
  ]
};

export const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  if (day === 0) {
    return currentTime >= 7 && currentTime < 15;
  } else if (day === 5 || day === 6) {
    return currentTime >= 6.5 && currentTime < 20.5;
  } else {
    return currentTime >= 6 && currentTime < 20;
  }
};
