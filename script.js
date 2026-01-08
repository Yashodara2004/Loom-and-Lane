// Product Data

const PRODUCTS = [
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

// Rendering Products
function renderProducts(items) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = items.map(p => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card product-card h-100">
        <a href="product-details.html?id=${encodeURIComponent(p.id)}">
          <img src="${p.image}" alt="${p.name}" class="card-img-top">
        </a>
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">$${p.price.toFixed(2)}</p>

          <div class="d-flex justify-content-between">
            <a href="details.html?id=${encodeURIComponent(p.id)}" class="btn btn-sm btn-view">View</a>
            <button class="btn btn-sm btn-outline-secondary" data-add="${p.id}">Add to Cart</button> 
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Wire up add-to-cart buttons
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => LL.addToCart(btn.getAttribute('data-add')));
  });
}

// Filter + Sort Logic
function initFilters() {
  const categorySelect = document.getElementById('filterCategory');
  const sortSelect = document.getElementById('sortSelect');

  function applyFilters() {
    let filtered = PRODUCTS.slice();

    // check URL for category parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get("category");
    
    // Use URL category if it exists, otherwise use dropdown
    let selectedCategory = urlCategory || categorySelect.value;
    
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory && !p.isCategory);
    } else {
      // When "All" is selected, show only real items
      filtered = filtered.filter(p => !p.isCategory);
    }

    // Sort filter
    if (sortSelect.value === "priceAsc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === "priceDesc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
  }

  // Set dropdown to match URL when page loads
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get("category");
  if (urlCategory && categorySelect) {
    categorySelect.value = urlCategory;
  }

  categorySelect.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', applyFilters);

  // Initial render
  applyFilters();
}
// LL Wrapper
const LL = (function(){
  // Utils
  const formatPrice = (n) => `$${n.toFixed(2)}`;

  // Dark mode persistence
  function initThemeToggle() {
    // Apply saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }

    // Toggle button functionality
    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Save preference
        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
        } else {
          localStorage.setItem("darkMode", "disabled");
        }
      });
    }
  }

  // Cart functions
  function getCart() {
    return JSON.parse(localStorage.getItem('LL_CART') || '[]');
  }
  function saveCart(cart) {
    localStorage.setItem('LL_CART', JSON.stringify(cart));
    updateCartCount();
  }
  function updateCartCount() {
    const el = document.getElementById('cartCount');
    if (el) el.textContent = getCart().reduce((sum, i) => sum + i.qty, 0);
  }
  function addToCart(id) { 
    const product = PRODUCTS.find(p => p.id === id && !p.isCategory); 
    if (!product) return; 
    
    const cart = getCart(); 
    const line = cart.find(i => i.id === id); 
    if (line) { 
      line.qty += 1; 
    } else { 
      cart.push({ 
      id, 
      name: product.name, 
      price: product.price, 
      image: product.image,  
      qty: 1 }); 
    } 

    saveCart(cart); 
  }


  // Page renderers
  function renderFeatured() {
    // Example: show first 3 products on home page
    const featured = PRODUCTS.slice(0, 3);
    renderProducts(featured);
  }

  function renderListing() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  let productsToShow = PRODUCTS.filter(p => !p.isCategory);

  if (category) {
    productsToShow = productsToShow.filter(p => p.category === category);
  }

  renderProducts(productsToShow);

  // Sync dropdown with URL param
  const categorySelect = document.getElementById('filterCategory');
  if (categorySelect && category) {
    categorySelect.value = category;
  }
}

  function renderDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const product = PRODUCTS.find(p => p.id === id && !p.isCategory);
  if (!product) {
    document.getElementById('loadingSpinner').innerHTML = '<p class="mt-2 text-danger">Product not found.</p>';
    return;
  }

  // Hide spinner, show detail section
  document.getElementById('loadingSpinner').classList.add('d-none');
  document.getElementById('productDetail').classList.remove('d-none');

  // Fill in product data
  document.getElementById('pdTitle').textContent = product.name;
  document.getElementById('pdPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('pdDesc').textContent = product.description || '';
  document.getElementById('pdImage').src = product.image;
  document.getElementById('pdImage').alt = product.name;

  // Populate material/color selects if present
  const matSelect = document.getElementById('pdMaterial');
  const colSelect = document.getElementById('pdColor');
  if (matSelect) {
    matSelect.innerHTML = (product.materials || ['Standard']).map(m => `<option>${m}</option>`).join('');
  }
  if (colSelect) {
    colSelect.innerHTML = (product.colors || ['Default']).map(c => `<option>${c}</option>`).join('');
  }

  // Thumbnails (if product.images array exists)
  const thumbs = document.getElementById('pdThumbs');
  if (thumbs && Array.isArray(product.images) && product.images.length) {
    thumbs.innerHTML = '';
    product.images.forEach(src => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-light p-1';
      btn.innerHTML = `<img src="${src}" alt="${product.name}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;">`;
      btn.addEventListener('click', () => {
        document.getElementById('pdImage').src = src;
      });
      thumbs.appendChild(btn);
    });
  }

  // Add to cart button with quantity
  const addBtn = document.getElementById('pdAddToCart');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qty = Number(document.getElementById('pdQty')?.value || 1);
      for (let i = 0; i < qty; i++) {
        LL.addToCart(product.id);
      }
    });
  }
}


  function renderCart() {
  const cart = getCart();
  const itemsEl = document.getElementById('cartItems');
  const summaryEl = document.getElementById('cartSummary');
  if (!itemsEl || !summaryEl) return;

  // Empty state
  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="alert alert-light border">
        Your cart is empty. <a href="listing.html" class="alert-link">Continue shopping</a>
      </div>`;
    summaryEl.innerHTML = `
      <div class="card"><div class="card-body">
        <h5 class="card-title h6">Order Summary</h5>
        <div class="d-flex justify-content-between"><span>Subtotal</span><span>$0.00</span></div>
        <div class="d-flex justify-content-between"><span>Estimated tax</span><span>$0.00</span></div>
        <div class="d-flex justify-content-between mb-3"><span>Estimated shipping</span><span>$0.00</span></div>
        <div class="d-flex justify-content-between fw-semibold"><span>Total</span><span>$0.00</span></div>
        <a href="listing.html" class="btn btn-outline-secondary w-100 mt-3">Continue Shopping</a>
      </div></div>`;
    return;
  }

  // Items list
  let subtotal = 0;
  itemsEl.innerHTML = cart.map(item => {
    const line = item.price * item.qty;
    subtotal += line;
    return `
      <div class="cart-item">
        <img src="${item.image || 'pictures/placeholder.jpg'}" alt="${item.name}">
        <div class="item-info">
          <h6 class="mb-1">${item.name}</h6>
          <small>$${item.price.toFixed(2)} × ${item.qty}</small>
        </div>
        <div class="item-actions">
          <button class="btn btn-sm btn-outline-secondary" data-dec="${item.id}">−</button>
          <button class="btn btn-sm btn-outline-secondary" data-inc="${item.id}">+</button>
          <button class="btn btn-sm btn-outline-danger" data-remove="${item.id}">Remove</button>
        </div>
        <div class="fw-semibold">$${line.toFixed(2)}</div>
      </div>
    `;
  }).join('');

  // Summary
  const tax = subtotal * 0.07;              // example tax
  const shipping = subtotal > 100 ? 0 : 10; // free over $100
  const total = subtotal + tax + shipping;

  summaryEl.innerHTML = `
    <div class="card"><div class="card-body">
      <h5 class="card-title h6">Order Summary</h5>
      <div class="d-flex justify-content-between"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="d-flex justify-content-between"><span>Estimated tax</span><span>$${tax.toFixed(2)}</span></div>
      <div class="d-flex justify-content-between mb-3"><span>Estimated shipping</span><span>$${shipping.toFixed(2)}</span></div>
      <div class="d-flex justify-content-between fw-semibold"><span>Total</span><span>$${total.toFixed(2)}</span></div>
      <a href="checkout.html" class="btn btn-accent w-100 mt-3">Proceed to Checkout</a>
    </div></div>
  `;

  // Quantity and remove controls
  const cartData = getCart();
  itemsEl.querySelectorAll('[data-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-inc');
      const line = cartData.find(i => i.id === id);
      if (line) line.qty += 1;
      saveCart(cartData);
      renderCart();
    });
  });
  itemsEl.querySelectorAll('[data-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-dec');
      const line = cartData.find(i => i.id === id);
      if (line && line.qty > 1) line.qty -= 1;
      else if (line) cartData.splice(cartData.indexOf(line), 1);
      saveCart(cartData);
      renderCart();
    });
  });
  itemsEl.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove');
      const updated = cartData.filter(i => i.id !== id);
      saveCart(updated);
      renderCart();
    });
  });
}

function renderCheckoutSummary() {
  const cart = getCart();
  const itemsEl = document.getElementById('orderSummaryItems');
  const subtotalEl = document.getElementById('coSubtotal');
  const taxEl = document.getElementById('coTax');
  const shippingEl = document.getElementById('coShipping');
  const totalEl = document.getElementById('coTotal');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="alert alert-light border">
        Your cart is empty. <a href="listing.html" class="alert-link">Continue shopping</a>
      </div>`;
    subtotalEl.textContent = '$0.00';
    taxEl.textContent = '$0.00';
    shippingEl.textContent = '$0.00';
    totalEl.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  itemsEl.innerHTML = cart.map(i => {
    const line = i.price * i.qty;
    subtotal += line;
    return `
      <div class="d-flex justify-content-between mb-2">
        <div>
          <div><strong>${i.name}</strong></div>
          <small class="text-muted">${i.category}</small><br>
          <small>$${i.price.toFixed(2)} × ${i.qty}</small>
        </div>
        <div class="fw-semibold">$${line.toFixed(2)}</div>
      </div>
    `;
  }).join('');

  const tax = subtotal * 0.07;
  const shipMethod = document.querySelector('input[name="shipping"]:checked')?.value || 'Standard';
  const shipping = shipMethod === 'Express' ? 18 : (subtotal > 100 ? 0 : 10);
  const total = subtotal + tax + shipping;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  taxEl.textContent = `$${tax.toFixed(2)}`;
  shippingEl.textContent = `$${shipping.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
}

function initCheckoutPage() {
  renderCheckoutSummary();
  document.querySelectorAll('input[name="shipping"]').forEach(r => {
    r.addEventListener('change', renderCheckoutSummary);
  });

  const form = document.getElementById('checkoutForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('coName');
    const email = document.getElementById('coEmail');
    const phone = document.getElementById('coPhone');
    const address = document.getElementById('coAddress');
    const card = document.getElementById('coCard');
    const expiry = document.getElementById('coExpiry');
    const cvv = document.getElementById('coCVV');

    const nameOk = /^[A-Za-z][A-Za-z\s'-]{1,}$/.test(name.value.trim());
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const phoneOk = /^[0-9\s()+-]{7,}$/.test(phone.value.trim());
    const addressOk = address.value.trim().length >= 5;
    const cardOk = /^[0-9\s]{12,19}$/.test(card.value.replace(/\s/g, ''));
    const expiryOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry.value.trim());
    const cvvOk = /^\d{3,4}$/.test(cvv.value.trim());

    name.classList.toggle('is-invalid', !nameOk);
    email.classList.toggle('is-invalid', !emailOk);
    phone.classList.toggle('is-invalid', !phoneOk);
    address.classList.toggle('is-invalid', !addressOk);
    card.classList.toggle('is-invalid', !cardOk);
    expiry.classList.toggle('is-invalid', !expiryOk);
    cvv.classList.toggle('is-invalid', !cvvOk);

    const allOk = nameOk && emailOk && phoneOk && addressOk && cardOk && expiryOk && cvvOk;
    if (!allOk) return;

    const orderId = 'LL-' + Date.now().toString().slice(-8);
    const idEl = document.getElementById('orderId');
    if (idEl) idEl.textContent = orderId;
    const modalEl = document.getElementById('orderConfirmModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }

    localStorage.removeItem('LL_CART');
    updateCartCount();
  });
}

function initFAQ() {
  const faqSection = document.getElementById('faqSection');
  if (!faqSection) return;
  $('#faqAccordion .accordion-button').on('click', function() {
    console.log('FAQ opened:', $(this).text().trim());
  });
}

  // Page bootstrap
 function initPage(page) {
  initThemeToggle();
  updateCartCount();

  switch(page) {
    case 'home':
      renderFeatured();
      break;
    case 'listing':
      renderListing();
      initFilters();
      break;
    case 'details':
      renderDetails();   
      break;
    case 'cart':
      renderCart();
      break;
    case 'checkout':
      initCheckoutPage();
      break;
    case 'faq':
      initFAQ();
      break;
    case 'contact':
      initContactPage();
      break;

  }
}

function initContactPage() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    form.reset();
  });
}

// Export functions for use in HTML
return { initPage, addToCart };
})();

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}