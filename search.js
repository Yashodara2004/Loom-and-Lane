// Product data (same as the catalog)
const products = [
   {
    // Home Decorations Category
    id: "p001",
    name: "Home Decorations",
    price: 58.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: true,
    image: "pictures/Home Decorations/fpage.jpg",
    description: "home décor that adds style and simplicity to your space."
  },
  {
    id: "hd001",
    name: "Handcrafted Cushion Covers",
    price: 19.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/handmade cushion covers.jpg",
    description: "Hand-stitched cushion covers adding unique charm to your home."
  },
  {
    id: "hd002",
    name: "Batik Art",
    price: 26.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/Batik art.jpg",
    description: "Batik is the traditional art of applying wax-resist dyeing to create intricate fabric patterns."
  },
  {
    id: "hd003",
    name: "Decorative Lanterns",
    price: 55.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/Decorative lanterns.jpg",
    description: "Decorative lanterns designed to illuminate with ambient style."
  },
  {
    id: "hd004",
    name: "Fountain Sculptures",
    price: 32.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/fountains.jpg",
    description: "Elegant fountain sculptures designed as captivating water features for gardens and interiors."
  },
  {
    id: "hd005",
    name: "Handcrafted Wall Art",
    price: 48.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/Handcrafted wall art.jpg",
    description: "Uniquely designed to bring character and texture to your space."
  },
  {
    id: "hd006",
    name: "Handmade Rug",
    price: 63.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/Handmade rugs.jpg",
    description: "Woven with artisanal skill for distinctive floor decor."
  },
  {
    id: "hd007",
    name: "Traditional Ves Mask",
    price: 70.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/Traditional ves mask.jpg",
    description: "Intricately carved for ceremonial and decorative purposes."
  },
  {
    id: "hd008",
    name: "Table Lamp",
    price: 29.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/glamp.jpg",
    description: "Artfully designed table lamps that blend form and function."
  },
  {
    id: "hd009",
    name: "Laksha Art ",
    price: 50.00,
    currency: "USD",
    category: "Home Decorations",
    isCategory: false,
    image: "pictures/Home Decorations/Laksha art.jpg",
    description: "The traditional craft of creating intricate designs with natural lacquer."
  },

  {
    // Wooden Crafts Category
    id: "p002",
    name: "Wooden Crafts",
    price: 42.00,
    currency: "USD",
    category: "Wooden Crafts",
    isCategory: true,
    image: "pictures/Wooden Crafts/wpage.jpg",
    description: "Rustic wooden craft."
  },
  { 
    id: "wc001", 
    name: "Elephant Wooden Statue ", 
    price: 56.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/ele.jpg", 
    description: "Hand-carved elephant statues, embodying artistry and cultural symbolism." 
  },
   { 
    id: "wc002", 
    name: "Vintage Style Wooden Chair", 
    price: 61.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/wchair.jpg", 
    description: "Built with timeless craftsmanship." 
  },
   { 
    id: "wc003", 
    name: "Wooden Shoe Rack ", 
    price: 98.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/shoe rack.jpg", 
    description: "Wooden shoe racks that combine practical storage with natural style." 
  },
  { 
    id: "wc004", 
    name: "Wooden Candle Holder ", 
    price: 30.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/Wooden candle holder.jpg", 
    description: "Elegant candle holders designed to frame the flicker of a flame." 
  },
   { 
    id: "wc005", 
    name: "Wooden Book Shelf ", 
    price: 43.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/bookshelf.jpg", 
    description: "Wooden bookshelves crafted for timeless storage and display." 
  },
   { 
    id: "wc006", 
    name: "Wooden Spice Container ", 
    price: 34.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/Wooden spice containers.jpg", 
    description: "Stylish spice containers that organize and showcase your culinary essentials." 
  },
  { 
    id: "wc007", 
    name: "Artisan Decorative Table", 
    price: 68.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/table.jpg", 
    description: "Artisan decorative tables sculpted as functional centerpieces." 
  },
  { 
    id: "wc008", 
    name: "Heritage Wooden Sofa ", 
    price: 92.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/sofa.jpg", 
    description: "Polished wooden sofa built for enduring comfort and style." 
  },
  { 
    id: "wc009", 
    name: "Royal Jewelery Box ", 
    price: 45.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/royal.jpg", 
    description: "Ornate royal jewelry boxes for secure and luxurious storage." 
  },
  { 
    id: "wc010", 
    name: "Signature Wooden Lamp ", 
    price: 55.00,
    currency: "USD", 
    category: "Wooden Crafts", 
    isCategory: false, 
    image: "pictures/Wooden Crafts/wood lamp.jpg", 
    description: "Signature wooden lamps, sculpted to be a distinctive light source." 
  },

  {
    //Porcelain Items Category
    id: "p003",
    name: "Porcelain Items",
    price: 50.00,
    currency: "USD",
    category: "Porcelain Items",
    isCategory: true,
    image: "pictures/Porcelain Items/ppage.jpg",
    description: "Elegant porcelain items celebrated for their delicate craftsmanship."
  },
  { 
    id: "pi001", 
    name: "Porcelain Tea Set", 
    price: 57.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/Porcelain tea sets.jpg", 
    description: "Porcelain tea sets renowned for their delicate artistry and graceful service."
  },
  { 
    id: "pi002", 
    name: "Porcelain Incense Holder", 
    price: 14.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/holder.jpg", 
    description: "Artful incense holders designed to cradle fragrance and ash with elegance." 
  },
  { 
    id: "pi003", 
    name: "Ceramic Water Pot Set", 
    price: 60.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/Water pots.jpg", 
    description: "Blending traditional utility with artful design." 
  },
  { 
    id: "pi004", 
    name: "Handcrafted Porcelain Ornament", 
    price: 20.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/po.jpg", 
    description: "Handcrafted porcelain ornaments, each a miniature sculpture of delicate artistry." 
  },
  { 
    id: "pi005", 
    name: "Ceramic Oil Lamps", 
    price: 65.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/lamp.jpg", 
    description: "Ceramic oil lamps that cast a warm, ambient glow." 
  },
  { 
    id: "pi006", 
    name: "Porcelain Tea Set with kettle", 
    price: 70.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/teaset.jpg", 
    description: "Porcelain tea sets presented on matching trays for elegant service."
  },
  { 
    id: "pi007", 
    name: "Plates and Bowls Set", 
    price: 60.00,
    currency: "USD", 
    category: "Porcelain Items", 
    isCategory: false, 
    image: "pictures/Porcelain Items/p and b.jpg", 
    description: "Curated plate and bowl sets designed for cohesive dining elegance." 
  },
  {
    // Flower Arrangements Category
    id: "p004",
    name: "Flower Arrangements",
    price: 30.00,
    currency: "USD",
    category: "Flower Arrangements",
    isCategory: true,
    image: "pictures/Farrangement/flpage.jpg",
    description: "Fresh floral arrangement."
  },
  { 
    id: "fi001", 
    name: "Dried Flowers Decor", 
    price: 35.00,
    currency: "USD", 
    category: "Flower Arrangements", 
    isCategory: false, 
    image: "pictures/Farrangement/decor.jpg", 
    description: "Dried flower arrangements preserved for lasting natural beauty."},
  { 
    id: "fi002", 
    name: "Fresh Flower Bouquet", 
    price: 20.00,
    currency: "USD", 
    category: "Flower Arrangements", 
    isCategory: false, 
    image: "pictures/Farrangement/fflower.jpg", 
    description: "Fresh flower bouquets artfully arranged for vibrant, natural elegance." 
  },
  { 
    id: "fi003", 
    name: "Flower Centerpiece", 
    price: 38.00,
    currency: "USD", 
    category: "Flower Arrangements", 
    isCategory: false, 
    image: "pictures/Farrangement/Flower baskets.jpg", 
    description: "Floral centerpieces crafted to become the focal point of your table." 
  },
  { 
    id: "fi004", 
    name: "Wedding Floral Arrangement", 
    price: 40.00,
    currency: "USD", 
    category: "Flower Arrangements", 
    isCategory: false, 
    image: "pictures/Farrangement/event.jpg", 
    description: "Tailored to bloom with your celebration's style." 
  },
  { 
    id: "fi005", 
    name: "Customized Floral Gift Box", 
    price: 50.00,
    currency: "USD", 
    category: "Flower Arrangements", 
    isCategory: false, 
    image: "pictures/Farrangement/gift.jpg", 
    description: "Thoughtfully curated for personal expression." 
  },

  {
    // Accessories Category
    id: "p005",
    name: "Accessories",
    price: 70.00,
    currency: "USD",
    category: "Accessories",
    isCategory: true,
    image: "pictures/Accessories/Apage.jpg",
    description: "Stylish accessory."
  },
 { 
  id: "ac001", 
  name: "Decorative Candles", 
  price: 25.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/Decorative candles.jpg", 
  description: "Stylish decorative candles with modern design."
 },
 { 
  id: "ac002", 
  name: "Artisan Sculpture", 
  price: 36.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/Fgirlsculp.jpg", 
  description: "Artisan sculptures, each a unique expression of material and form."
 },
 { 
  id: "ac003", 
  name: "Handwoven Baskets", 
  price: 30.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/Handwoven baskets.jpg", 
  description: "Blend artisanal technique with rustic charm."
 },
 { 
  id: "ac004", 
  name: "Table Runner", 
  price: 60.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/Table runners.jpg", 
  description: "Table runners that add a layer of texture and style to your dining space."
 },
 { 
  id: "ac005", 
  name: "Traditional Brass Oil Lamp", 
  price: 65.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/oil.jpg", 
  description: "Casting a timeless, warm glow."
 },
 { 
  id: "ac006", 
  name: "Home Fragrance Diffusers", 
  price: 42.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/fragrance.jpg", 
  description: "Home fragrance diffusers that subtly scent your space with ambiance."
 },
 { 
  id: "ac007", 
  name: "Handcrafted Handbag", 
  price: 45.00, 
  currency: "USD", 
  category: "Accessories", 
  isCategory: false, 
  image: "pictures/Accessories/Fhandbag.jpg", 
  description: "Handcrafted handbags, where artisanal detail meets everyday function."
 },

];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchSuggestions = document.getElementById('searchSuggestions');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const noResultsMessage = document.getElementById('noResultsMessage');
let searchModal = null;

// Initialize modal when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const modalElement = document.getElementById('searchResultsModal');
  if (modalElement) {
    searchModal = new bootstrap.Modal(modalElement);
  }
});

// Simple search function
function searchProducts(query) {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return products.filter(product => {
    const searchText = `
      ${product.name.toLowerCase()} 
      ${product.category.toLowerCase()} 
      ${product.description.toLowerCase()}
    `;
    
    return searchText.includes(searchTerm);
  });
}

// Show search suggestions
function showSuggestions(query) {
  if (!query.trim() || query.length < 2) {
    searchSuggestions.innerHTML = '';
    searchSuggestions.classList.remove('active');
    return;
  }
  
  const results = searchProducts(query).slice(0, 5);
  
  if (results.length === 0) {
    searchSuggestions.innerHTML = `
      <div class="p-3 text-muted text-center">
        <small>No suggestions found</small>
      </div>
    `;
    searchSuggestions.classList.add('active');
    return;
  }
  
  const suggestionsHTML = results.map(product => `
    <a href="details.html?id=${product.id}" class="search-suggestion-item" 
       onclick="hideSuggestions()">
      <img src="${product.image}" alt="${product.name}" 
           onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjRUVFRUVFIi8+PC9zdmc+'">
      <div class="search-suggestion-info">
        <h6>${product.name}</h6>
        <small>${product.currency} ${product.price.toFixed(2)} • ${product.category}</small>
      </div>
    </a>
  `).join('');
  
  searchSuggestions.innerHTML = suggestionsHTML;
  searchSuggestions.classList.add('active');
}

// Hide suggestions
function hideSuggestions() {
  searchSuggestions.classList.remove('active');
}

// Perform search and show results
function performSearch() {
  const query = searchInput.value.trim();
  
  if (!query) {
    // Show empty state
    if (searchResultsContainer && noResultsMessage) {
      searchResultsContainer.innerHTML = '';
      noResultsMessage.style.display = 'block';
      noResultsMessage.innerHTML = `
        <i class="fa fa-search display-6 text-muted mb-3"></i>
        <p class="text-muted">Please enter a search term</p>
      `;
    }
    if (searchModal) {
      searchModal.show();
    }
    return;
  }
  
  const results = searchProducts(query);
  
  // Display results
  if (searchResultsContainer && noResultsMessage) {
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '';
      noResultsMessage.style.display = 'block';
      noResultsMessage.innerHTML = `
        <i class="fa fa-search display-6 text-muted mb-3"></i>
        <p class="text-muted">No products found for "${query}"</p>
      `;
    } else {
      noResultsMessage.style.display = 'none';
      
      const resultsHTML = results.map(product => `
        <a href="details.html?id=${product.id}" class="search-result-item" data-bs-dismiss="modal">
          <img src="${product.image}" alt="${product.name}" 
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSI2IiBmaWxsPSIjRUVFRUVFIi8+PC9zdmc+'">
          <div class="search-result-info">
            <h6>${product.name}</h6>
            <p>${product.description}</p>
            <small class="text-muted">${product.category}</small>
          </div>
          <div class="search-result-price">
            ${product.currency} ${product.price.toFixed(2)}
          </div>
        </a>
      `).join('');
      
      searchResultsContainer.innerHTML = resultsHTML;
    }
    
    // Update modal title
    const modalTitle = document.querySelector('#searchResultsModal .modal-title');
    if (modalTitle) {
      modalTitle.textContent = `Search Results (${results.length} found)`;
    }
  }
  
  // Show modal
  if (searchModal) {
    searchModal.show();
  }
  
  // Hide suggestions
  hideSuggestions();
  
  // Clear input if you want
  // searchInput.value = '';
}

// Event Listeners
if (searchInput) {
  // Real-time suggestions
  let debounceTimer;
  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      showSuggestions(this.value);
    }, 300);
  });
  
  // Search on Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-wrapper')) {
      hideSuggestions();
    }
  });
}

if (searchButton) {
  searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    performSearch();
  });
}

// Make functions available globally
window.hideSuggestions = hideSuggestions;
window.performSearch = performSearch;