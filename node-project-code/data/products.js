// Tiny in-memory catalog. Replace with a real DB later if needed.
module.exports = [
  // Books
  {
    id: 1,
    category: 'books',
    name: 'Clean Code',
    price: 3999,
    currency: 'INR',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg',
    description: 'A Handbook of Agile Software Craftsmanship by Robert C. Martin.'
  },
  {
    id: 2,
    category: 'books',
    name: 'You Don’t Know JS Yet',
    price: 0,
    currency: 'INR',
    image: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/cover.jpg',
    description: 'Deep dive into JavaScript mechanics by Kyle Simpson.'
  },

  // Mobiles
  {
    id: 101,
    category: 'mobiles',
    name: 'Pixel 8a',
    price: 52999,
    currency: 'INR',
    image: 'https://store.google.com/product/images/section/pixel_8a_product.jpg',
    description: 'Google’s compact phone with great cameras.'
  },
  {
    id: 102,
    category: 'mobiles',
    name: 'iPhone 15',
    price: 69999,
    currency: 'INR',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow',
    description: 'Apple’s 6.1-inch smartphone with great performance.'
  },

  // Clothes
  {
    id: 201,
    category: 'clothes',
    name: 'Classic White T-Shirt',
    price: 799,
    currency: 'INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/White_T-Shirt.jpg',
    description: '100% cotton, breathable everyday tee.'
  },
  {
    id: 202,
    category: 'clothes',
    name: 'Blue Denim Jeans',
    price: 1999,
    currency: 'INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Jeans_for_women.jpg',
    description: 'Slim fit denim jeans with stretch.'
  }
];

