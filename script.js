if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

async function fbSaveCart(userId, cartData) {
  try {
    if (!window._fb) return;
    await window._fb.saveCart(userId, cartData);
  } catch(e) { console.warn('FB cart save failed', e); }
}

async function fbLoadCart(userId) {
  try {
    if (!window._fb) return null;
    return await window._fb.loadCart(userId);
  } catch(e) { return null; }
}

async function fbSaveOrder(userId, order) {
  try {
    if (!window._fb) return;
    await window._fb.saveOrder(userId, order);
  } catch(e) { console.warn('FB order save failed', e); }
}

async function fbLoadOrders(userId) {
  try {
    if (!window._fb || !window._fb.loadOrders) return null;
    return await window._fb.loadOrders(userId);
  } catch(e) { return null; }
}


const PRODUCTS = [

{ id: 1, name: 'Frock', cat: 'Clothing', price: 35.00, img: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6', stock: 10, badge: 'Trending', desc: 'Elegant floral patterns for a fresh look.' },

{ id: 2, name: 'Crop Top', cat: 'Clothing', price: 15.00, img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992', stock: 15, badge: null, desc: 'Minimalist cotton crop top for daily wear.' },

{ id: 3, name: "Women's Trousers", cat: 'Clothing', price: 40.00, img: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec', stock: 8, badge: null, desc: 'High-waist formal trousers for women.' },

{ id: 4, name: 'Skirt', cat: 'Clothing', price: 25.00, img: 'https://images.unsplash.com/photo-1592301933927-35b597393c0a', stock: 12, badge: 'Hot', desc: 'Stylish pleated skirt for parties.' },

{ id: 5, name: 'Elegant Blouse', cat: 'Clothing', price: 30.00, img: 'https://images.unsplash.com/photo-1698146704088-e09d6acb99ce', stock: 10, badge: null, desc: 'Soft fabric blouse with modern design.' },

{ id: 6, name: 'Cotton Shirt', cat: 'Clothing', price: 22.00, img: 'https://images.unsplash.com/photo-1642764873654-9eef0467b342', stock: 20, badge: null, desc: 'Breathable cotton shirt for all seasons.' },

{ id: 7, name: 'Saree', cat: 'Clothing', price: 85.00, img: 'https://images.unsplash.com/photo-1610030468706-9a6dbad49b0a', stock: 5, badge: 'Premium', desc: 'Beautifully crafted ethnic wear.' },

{ id: 8, name: 'Denim Jacket', cat: 'Clothing', price: 55.00, img: 'https://images.unsplash.com/photo-1533642128742-a542f568eb53', stock: 7, badge: null, desc: 'Classic blue denim for a rugged look.' },

{ id: 9, name: 'Party Frock', cat: 'Clothing', price: 45.00, img: 'https://images.unsplash.com/photo-1610048616025-11a3dcc9fd0b', stock: 10, badge: 'Party Wear', desc: 'Light and airy dress for beach outings.' },

{ id: 10, name: 'Leggings', cat: 'Clothing', price: 18.00, img: 'https://images.unsplash.com/photo-1644225450138-9f4f9e2d4582', stock: 25, badge: null, desc: 'Stretchy high-quality comfort leggings.' },


{ id: 11, name: 'Action Figure', cat: 'Toys', price: 15.99, img: 'https://images.unsplash.com/photo-1684772235052-9516b11168ae', stock: 20, badge: 'Kids Favorite', desc: 'Heroic action figure for epic adventures.' },

{ id: 12, name: 'Board Game', cat: 'Toys', price: 25.50, img: 'https://images.unsplash.com/photo-1629760946220-5693ee4c46ac', stock: 15, badge: null, desc: 'Classic dice game for family fun.' },

{ id: 13, name: 'RC Car', cat: 'Toys', price: 40.00, img: 'https://images.unsplash.com/photo-1579271723124-a758848c2753', stock: 10, badge: 'Top Rated', desc: 'High-speed remote control racing car.' },

{ id: 14, name: 'Teddy Bear', cat: 'Toys', price: 20.20, img: 'https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78', stock: 25, badge: null, desc: 'Soft and cuddly companion for kids.' },

{ id: 15, name: 'Barbie Doll', cat: 'Toys', price: 18.75, img: 'https://images.unsplash.com/photo-1651383139211-4e2bbccecbf2', stock: 18, badge: null, desc: 'Beautiful fashion doll for creative play.' },

{ id: 16, name: 'Lego Set', cat: 'Toys', price: 59.99, img: 'https://images.unsplash.com/photo-1624979641604-f01368fab830', stock: 12, badge: 'Best Seller', desc: 'Brick building set for future engineers.' },

{ id: 17, name: 'Puzzle', cat: 'Toys', price: 12.45, img: 'https://plus.unsplash.com/premium_photo-1726783362305-0582cc6dceef', stock: 30, badge: null, desc: 'Brain-teasing puzzle for all ages.' },

{ id: 18, name: 'Toy Train', cat: 'Toys', price: 32.00, img: 'https://plus.unsplash.com/premium_photo-1661448604365-4ef469471a6d', stock: 14, badge: null, desc: 'Classic wooden locomotive set.' },

{ id: 19, name: 'Water Gun', cat: 'Toys', price: 10.15, img: 'https://images.unsplash.com/photo-1716325450019-5424a294f315', stock: 40, badge: 'Summer Fun', desc: 'Super soaker for summer fun.' },

{ id: 20, name: 'Yo-Yo', cat: 'Toys', price: 5.50, img: 'https://images.unsplash.com/photo-1646954843635-126c0fe8f3d7', stock: 50, badge: null, desc: 'Professional trick yo-yo for beginners.' },


{ id: 21, name: 'Blender', cat: 'Home & Kitchen', price: 45.60, img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b', stock: 12, badge: 'Kitchen Essential', desc: 'Perfect for smoothies and juices.' },

{ id: 22, name: 'Toaster', cat: 'Home & Kitchen', price: 25.80, img: 'https://images.unsplash.com/photo-1655354438845-561bc349a1a4', stock: 15, badge: null, desc: 'Quickly toasts bread for breakfast.' },

{ id: 23, name: 'Microwave', cat: 'Home & Kitchen', price: 85.99, img: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d', stock: 8, badge: 'Premium', desc: 'Efficient reheating and cooking.' },

{ id: 24, name: 'Coffee Maker', cat: 'Home & Kitchen', price: 35.40, img: 'https://images.unsplash.com/photo-1545936055-22b27770efca', stock: 10, badge: null, desc: 'Freshly brewed coffee every morning.' },

{ id: 25, name: 'Knife Set', cat: 'Home & Kitchen', price: 50.10, img: 'https://images.unsplash.com/photo-1593618998160-e34014e67546b', stock: 12, badge: 'Chef Choice', desc: 'Stainless steel sharp kitchen knives.' },

{ id: 26, name: 'Cutting Board', cat: 'Home & Kitchen', price: 15.25, img: 'https://plus.unsplash.com/premium_photo-1714702846875-ca3a149c0592', stock: 20, badge: null, desc: 'Durable board for vegetable prep.' },

{ id: 27, name: 'Frying Pan', cat: 'Home & Kitchen', price: 20.35, img: 'https://plus.unsplash.com/premium_photo-1700004505290-ac942e381a15', stock: 18, badge: null, desc: 'Non-stick surface for easy frying.' },

{ id: 28, name: 'Dinner Plates', cat: 'Home & Kitchen', price: 30.70, img: 'https://images.unsplash.com/photo-1614548540093-6f7dfceed46b', stock: 25, badge: 'Elegant', desc: 'Set of premium ceramic dinner plates.' },

{ id: 29, name: 'Cutlery Set', cat: 'Home & Kitchen', price: 22.55, img: 'https://plus.unsplash.com/premium_photo-1716112776995-cf224aa387b5', stock: 20, badge: null, desc: 'Complete set of forks, knives and spoons.' },

{ id: 30, name: 'Coffee Mugs', cat: 'Home & Kitchen', price: 35.10, img: 'https://plus.unsplash.com/premium_photo-1677533644850-4c46760a9313', stock: 30, badge: null, desc: 'Comfortable mugs for tea and coffee.' }
];


let cart = JSON.parse(localStorage.getItem('smart_cart') || '[]');
let currentFilter = 'All';
let currentSearch = '';
let modalProductId = null;

function saveCart() {
  localStorage.setItem('smart_cart', JSON.stringify(cart));
  const session = getSession();
  if (session) fbSaveCart(session.id, cart);
}

async function loadCartFromFirebase() {
  const session = getSession();
  if (!session) return;
  const fbCart = await fbLoadCart(session.id);
  if (fbCart && Array.isArray(fbCart) && fbCart.length > 0) {
    cart = fbCart;
    localStorage.setItem('smart_cart', JSON.stringify(cart));
    updateCartCount();
    renderProducts();
  }
}

function getCartQty() { return cart.reduce((s,i)=>s+i.qty,0); }
function getCartTotal() {
  return cart.reduce((s,i)=>{
    const p = PRODUCTS.find(pr=>pr.id===i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}


function getSession() {
  const ls = localStorage.getItem('smart_session');
  const ss = sessionStorage.getItem('smart_session');
  return ls ? JSON.parse(ls) : (ss ? JSON.parse(ss) : null);
}

function clearSession() {
  localStorage.removeItem('smart_session');
  sessionStorage.removeItem('smart_session');
}


function initUserHeader() {
  const session = getSession();
  const container = document.getElementById('userHeaderArea');
  if (!container) return;

  if (session) {
    const initials = (session.firstName[0] + session.lastName[0]).toUpperCase();
    container.innerHTML = `
      <div class="user-menu-wrap">
        <button class="user-pill" onclick="toggleUserMenu()">
          <div class="user-pill-avatar">${initials}</div>
          <span class="user-pill-name">Hi, ${session.firstName}</span>
          <span class="user-pill-caret">▾</span>
        </button>
        <div class="user-dropdown" id="userDropdown">
          <div class="user-dropdown-info">
            <div class="user-drop-avatar">${initials}</div>
            <div>
              <div class="user-drop-name">${session.firstName} ${session.lastName}</div>
              <div class="user-drop-email">${session.email}</div>
            </div>
          </div>
          <div class="user-dropdown-divider"></div>
          <button class="user-drop-item" onclick="showPage('orders'); closeUserMenu()">🛒 My Orders</button>
          <button class="user-drop-item danger" onclick="handleLogout()">↩ Sign Out</button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <a class="header-signin-btn" href="auth.html">Sign In</a>
    `;
  }
}

function toggleUserMenu() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.classList.toggle('open');
}

function closeUserMenu() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.classList.remove('open');
}

function handleLogout() {
  clearSession();
  closeUserMenu();
  initUserHeader();
  toast('Signed out successfully');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.user-menu-wrap')) closeUserMenu();
});


function showPage(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  if(page==='cart') renderCart();
  if(page==='checkout') { renderCheckoutSummary(); resetCheckoutSteps(); }
  if(page==='orders') renderOrders();
  window.scrollTo(0,0);
}

function setActiveNav(btn) {
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = getCartQty();
}

function toast(msg, type='success') {
  const el = document.getElementById('toast');
  el.innerHTML = (type==='success'?'✓ ':'⚠ ') + msg;
  el.className = 'show ' + type;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>{ el.className=''; }, 3000);
}


function filterCat(cat, chipEl) {
  currentFilter = cat;
  currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  if(chipEl) chipEl.classList.add('active');
  renderProducts();
}

function handleSearch(val) {
  currentSearch = val.toLowerCase();
  currentFilter = 'All';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.filter-chip').classList.add('active');
  renderProducts();
  if (val.trim().length > 0) scrollToProducts();
}

function renderProducts() {
  let list = [...PRODUCTS];
  if (currentFilter !== 'All') list = list.filter(p => p.cat === currentFilter);
  if (currentSearch) list = list.filter(p =>
    p.name.toLowerCase().includes(currentSearch) ||
    p.cat.toLowerCase().includes(currentSearch)
  );

  const title = currentFilter === 'All' ? 'All Products' : currentFilter;
  const countSpan = `<span>${list.length} item${list.length !== 1 ? 's' : ''}</span>`;
  document.getElementById('sectionTitle').innerHTML = `${title} ${countSpan}`;

  const grid = document.getElementById('productsGrid');
  grid.innerHTML = list.map(p => {
    const inCart = cart.find(c => c.id === p.id);
    const oos = p.stock === 0;
    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img" style="background-image: url('${p.img}');">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        ${oos ? '<div class="out-of-stock-badge">Out of Stock</div>' : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 90)}…</div>
        <div class="product-footer">
          <div class="product-price">£${p.price.toFixed(2)}</div>
          <button class="add-btn" ${oos ? 'disabled' : ''} onclick="event.stopPropagation(); addToCart(${p.id})">
            ${oos ? 'Out of Stock' : (inCart ? '✓ Added' : '+ Add')}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}


function openModal(id) {
  const p = PRODUCTS.find(pr=>pr.id===id);
  modalProductId = id;
  document.getElementById('modalImg').style.backgroundImage = `url('${p.img}')`;
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = `£${p.price.toFixed(2)}`;
  document.getElementById('modalStock').textContent = p.stock===0 ? '✗ Out of stock' : `✓ ${p.stock} in stock`;
  const btn = document.getElementById('modalAddBtn');
  btn.disabled = p.stock===0;
  btn.textContent = p.stock===0 ? 'Out of Stock' : '+ Add to Cart';
  btn.onclick = ()=>{ addToCart(id); closeModal(); };
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
  if(!e || e.target.id==='modalOverlay' || e.currentTarget.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

function addToCart(id) {
  const p = PRODUCTS.find(pr=>pr.id===id);
  if(!p || p.stock===0) return;
  const item = cart.find(c=>c.id===id);
  if(item) {
    if(item.qty >= p.stock) { toast('No more stock available', 'error'); return; }
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartCount();
  toast(`${p.name} added to cart`);
  renderProducts();
}

function removeFromCart(id) {
  cart = cart.filter(c=>c.id!==id);
  saveCart();
  updateCartCount();
  renderCart();
  renderProducts();
  toast('Item removed from basket');
}

function updateQty(id, delta) {
  const item = cart.find(c=>c.id===id);
  const p = PRODUCTS.find(pr=>pr.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty > p.stock) { item.qty = p.stock; toast('Maximum stock reached', 'error'); }
  if(item.qty < 1) { removeFromCart(id); return; }
  saveCart();
  updateCartCount();
  renderCart();
}


function renderCart() {
  const el = document.getElementById('cartContent');
  if(cart.length===0) {
    el.innerHTML = `<div class="empty-cart">
      <div class="icon">🛒</div>
      <h3>Your basket is empty</h3>
      <p style="color:var(--muted);margin-bottom:24px;">Add some products to get started</p>
      <button class="checkout-btn" style="max-width:240px;margin:0 auto;" onclick="showPage('home')">Browse Products</button>
    </div>`;
    return;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  el.innerHTML = `<div class="cart-layout">
    <div class="cart-items">
      ${cart.map(item => {
        const p = PRODUCTS.find(pr=>pr.id===item.id);
        return `<div class="cart-item">
          <div class="cart-item-img" style="background-image: url('${p.img}'); background-size: cover; background-position: center; width: 80px; height: 80px; border-radius: 10px;"></div>
          <div>
            <div class="cart-item-cat">${p.cat}</div>
            <div class="cart-item-name">${p.name}</div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${p.id},1)">＋</button>
              <button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button>
            </div>
          </div>
          <div class="cart-item-right">
            <div class="cart-item-price">£${(p.price*item.qty).toFixed(2)}</div>
            <div style="font-size:0.8rem;color:var(--muted);">£${p.price.toFixed(2)} each</div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div>
      <div class="order-summary">
        <h3>Order Summary</h3>
        <div class="summary-row"><span>Subtotal (${getCartQty()} items)</span><span>£${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping===0?'<span style="color:var(--accent)">FREE</span>':'£'+shipping.toFixed(2)}</span></div>
        ${shipping>0?'<div style="font-size:0.78rem;color:var(--muted);padding:4px 0;">Spend £50+ for free shipping</div>':''}
        <div class="summary-row total"><span>Total</span><span class="val">£${total.toFixed(2)}</span></div>
        <button class="checkout-btn" onclick="goToCheckout()">Proceed to Checkout →</button>
        <button class="checkout-btn" style="background:var(--surface2);color:var(--text);margin-top:10px;" onclick="showPage('home')">← Continue Shopping</button>
      </div>
    </div>
  </div>`;
}

function goToCheckout() {
  const session = getSession();
  if (!session) {
    sessionStorage.setItem('smart_redirect_after_login', 'checkout'); 
    return;
  }
  showPage('checkout'); 
}


function showLoginPromptModal() {
  const existing = document.getElementById('loginPromptModal');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'loginPromptModal';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
  overlay.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:36px;max-width:400px;width:100%;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.5);">
      <div style="font-size:2.5rem;margin-bottom:16px;">🔐</div>
      <h3 style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:10px;">Sign In to Checkout</h3>
      <p style="color:var(--muted);font-size:0.9rem;line-height:1.6;margin-bottom:28px;">
        ඔබේ cart එක save වෙලා තියයි.<br>Sign in / Sign up කළාට පස්සේ checkout continue කරන්න පුළුවන්.
      </p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <a href="auth.html" style="display:block;background:var(--accent);color:#fff;font-family:var(--font-body);font-weight:700;font-size:0.95rem;padding:14px 24px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;">
          Sign In / Create Account →
        </a>
        <button onclick="document.getElementById('loginPromptModal').remove()" style="background:none;border:1px solid var(--border);color:var(--muted);font-family:var(--font-body);font-size:0.88rem;padding:12px 24px;border-radius:10px;cursor:pointer;">
          Cancel, keep shopping
        </button>
      </div>
    </div>
  `;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

function renderCheckoutSummary() {
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;
  document.getElementById('checkoutSummary').innerHTML = `
    <h3>Order Summary</h3>
    ${cart.map(item => {
      const p = PRODUCTS.find(pr=>pr.id===item.id);
      return `<div class="summary-row"><span>${p.name} ×${item.qty}</span><span>£${(p.price*item.qty).toFixed(2)}</span></div>`;
    }).join('')}
    <div class="summary-row"><span>Shipping</span><span>${shipping===0?'FREE':'£'+shipping.toFixed(2)}</span></div>
    <div class="summary-row total"><span>Total</span><span class="val">£${total.toFixed(2)}</span></div>
  `;
}

function resetCheckoutSteps() {
  ['formStep1','formStep2','formStep3'].forEach((id,i)=>{
    document.getElementById(id).style.display = i===0?'block':'none';
  });
  ['step1ind','step2ind','step3ind'].forEach((id,i)=>{
    const el = document.getElementById(id);
    el.className = 'step-indicator' + (i===0?' active':'');
  });

  const session = getSession();
  if (session) {
    const fn = document.getElementById('firstName');
    const em = document.getElementById('email');
    if (fn && !fn.value) fn.value = session.firstName;
    const ln = document.getElementById('lastName');
    if (ln && !ln.value) ln.value = session.lastName;
    if (em && !em.value) em.value = session.email;
  }
}

function nextStep(step) {
  if(step===1) {
    const fields = ['firstName','lastName','email','address','city','postcode'];
    for(const f of fields) {
      if(!document.getElementById(f).value.trim()) {
        toast('Please fill in all delivery fields', 'error'); return;
      }
    }
    document.getElementById('formStep1').style.display='none';
    document.getElementById('formStep2').style.display='block';
    document.getElementById('step1ind').className='step-indicator done';
    document.getElementById('step2ind').className='step-indicator active';
  } else if(step===2) {
    const fields = ['cardName','cardNum','expiry','cvv'];
    for(const f of fields) {
      if(!document.getElementById(f).value.trim()) {
        toast('Please fill in all payment details', 'error'); return;
      }
    }
    buildReview();
    document.getElementById('formStep2').style.display='none';
    document.getElementById('formStep3').style.display='block';
    document.getElementById('step2ind').className='step-indicator done';
    document.getElementById('step3ind').className='step-indicator active';
  }
}

function prevStep(step) {
  if(step===2) {
    document.getElementById('formStep2').style.display='none';
    document.getElementById('formStep1').style.display='block';
    document.getElementById('step1ind').className='step-indicator active';
    document.getElementById('step2ind').className='step-indicator';
  } else if(step===3) {
    document.getElementById('formStep3').style.display='none';
    document.getElementById('formStep2').style.display='block';
    document.getElementById('step2ind').className='step-indicator active';
    document.getElementById('step3ind').className='step-indicator';
  }
}

function buildReview() {
  const fn = document.getElementById('firstName').value;
  const ln = document.getElementById('lastName').value;
  const addr = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const pc = document.getElementById('postcode').value;
  const country = document.getElementById('country').value;
  const cn = document.getElementById('cardNum').value;
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  document.getElementById('reviewDetails').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div style="background:var(--surface2);border-radius:10px;padding:16px;">
        <div style="font-size:0.75rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">📦 Delivering to</div>
        <div style="font-weight:600;">${fn} ${ln}</div>
        <div style="color:var(--muted);font-size:0.88rem;line-height:1.6;">${addr}<br>${city}, ${pc}<br>${country}</div>
      </div>
      <div style="background:var(--surface2);border-radius:10px;padding:16px;">
        <div style="font-size:0.75rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">💳 Paying with</div>
        <div style="font-weight:600;">Card ending in ${cn.replace(/\s/g,'').slice(-4)}</div>
        <div style="color:var(--muted);font-size:0.88rem;">Standard Checkout</div>
      </div>
    </div>
    <div style="background:var(--surface2);border-radius:10px;padding:16px;">
      <div style="font-size:0.75rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">🛒 Items</div>
      ${cart.map(item=>{
        const p=PRODUCTS.find(pr=>pr.id===item.id);
        return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:0.88rem;"><span>${p.name} ×${item.qty}</span><span style="color:var(--accent);font-weight:600;">£${(p.price*item.qty).toFixed(2)}</span></div>`;
      }).join('')}
      <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:1.1rem;font-weight:700;"><span>Total</span><span style="color:var(--accent);font-family:var(--font-display);">£${total.toFixed(2)}</span></div>
    </div>
  `;
}

function placeOrder() {
  const orderId = 'SMP-' + Date.now().toString(36).toUpperCase();
  const email = document.getElementById('email').value;
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  const richItems = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return { id: item.id, qty: item.qty, name: p ? p.name : 'Unknown', price: p ? p.price : 0, category: p ? p.cat : '' };
  });
  const order = { id: orderId, date: new Date().toISOString(), items: richItems, total };

  const orders = JSON.parse(localStorage.getItem('smart_orders')||'[]');
  orders.push(order);
  localStorage.setItem('smart_orders', JSON.stringify(orders));

  const session = getSession();
  if (session) fbSaveOrder(session.id, order);

  cart.forEach(item => {
    const p = PRODUCTS.find(pr=>pr.id===item.id);
    if(p) p.stock = Math.max(0, p.stock - item.qty);
  });

  document.getElementById('orderRef').textContent = orderId;
  document.getElementById('confirmEmail').textContent = email;
  document.getElementById('confirmItems').innerHTML = `
    <h4>Items Ordered</h4>
    ${cart.map(item=>{
      const p=PRODUCTS.find(pr=>pr.id===item.id);
      return `<div class="confirm-item-row"><span>${p.name} ×${item.qty}</span><span class="price">£${(p.price*item.qty).toFixed(2)}</span></div>`;
    }).join('')}
    <div class="confirm-item-row" style="padding-top:12px;"><span><strong>Order Total</strong></span><span class="price"><strong>£${total.toFixed(2)}</strong></span></div>
  `;

  cart = [];
  saveCart();
  updateCartCount();
  showPage('confirmation');
}

async function renderOrders() {
  const el = document.getElementById('ordersContent');
  if (!el) return;
  el.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--muted);">Loading your orders…</div>`;

  let orders = null;
  const session = getSession();

  
  if (session) {
    orders = await fbLoadOrders(session.id);
  }


  if (!orders || orders.length === 0) {
    const local = JSON.parse(localStorage.getItem('smart_orders') || '[]');
    if (local.length > 0) {
      orders = [...local].reverse(); 
    }
  }

  if (!orders || orders.length === 0) {
    el.innerHTML = `
      <div class="empty-cart">
        <div class="icon">📦</div>
        <h3>No orders yet</h3>
        <p style="color:var(--muted);margin-bottom:24px;">ඔබ තාම order කරලා නැහැ. Shop කරන්න යමු!</p>
        <button class="checkout-btn" style="max-width:240px;margin:0 auto;" onclick="showPage('home')">Browse Products</button>
      </div>`;
    return;
  }

  el.innerHTML = orders.map(order => {
    const date = order.date ? new Date(order.date).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }) : '—';
    const items = Array.isArray(order.items) ? order.items : [];
    const total = typeof order.total === 'number' ? order.total.toFixed(2) : '0.00';

   
    const preview = items.slice(0, 4);
    const extra = items.length - 4;
    const imageStrip = `
      <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;">
        ${preview.map(item => {
          const prod = PRODUCTS.find(pr => pr.id === item.id);
          const img = prod ? prod.img : '';
          return `
            <div style="position:relative;flex:0 0 auto;">
              <div style="
                width:72px;height:72px;border-radius:10px;
                background:var(--surface2) url('${img}') center/cover no-repeat;
                border:1px solid var(--border);
              "></div>
              <div style="
                position:absolute;bottom:-6px;right:-6px;
                background:var(--accent);color:#000;
                font-size:0.65rem;font-weight:800;
                border-radius:999px;padding:2px 6px;
                line-height:1.4;
              ">×${item.qty}</div>
            </div>`;
        }).join('')}
        ${extra > 0 ? `
          <div style="
            width:72px;height:72px;border-radius:10px;
            background:var(--surface2);border:1px solid var(--border);
            display:flex;align-items:center;justify-content:center;
            font-size:0.8rem;font-weight:700;color:var(--muted);
          ">+${extra} more</div>` : ''}
      </div>`;

    return `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:24px;margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
          <div>
            <div style="font-size:0.72rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Order ID</div>
            <div style="font-family:var(--font-display);font-size:0.95rem;color:var(--accent);font-weight:600;">${order.id || '—'}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.72rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Date</div>
            <div style="font-size:0.9rem;">${date}</div>
          </div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:16px;">
          ${imageStrip}
          ${items.map(item => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);font-size:0.88rem;gap:8px;">
              <span style="color:var(--text);">${item.name || 'Item'} <span style="color:var(--muted);">×${item.qty}</span></span>
              <span style="color:var(--accent);font-weight:600;white-space:nowrap;">£${((item.price||0)*item.qty).toFixed(2)}</span>
            </div>`).join('')}
          <div style="display:flex;justify-content:space-between;padding-top:14px;font-weight:700;font-family:var(--font-display);">
            <span>Order Total</span>
            <span style="color:var(--accent);font-size:1.05rem;">£${total}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function goHome() {
  showPage('home');
  renderProducts();
}

function formatCardNum(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.match(/.{1,4}/g)?.join(' ')||v;
  const display = v.padEnd(16,'•').match(/.{1,4}/g).join(' ');
  document.getElementById('displayCardNum').textContent = display;
}
function formatExpiry(el) {
  let v = el.value.replace(/\D/g,'');
  if(v.length>=2) v = v.substring(0,2)+'/'+v.substring(2,4);
  el.value = v;
  document.getElementById('displayExpiry').textContent = v||'MM/YY';
}
function scrollToProducts() {
  const element = document.getElementById("products-section");
  if (element) {
    const headerHeight = document.querySelector("header").offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

updateCartCount();
renderProducts();
initUserHeader();
setTimeout(loadCartFromFirebase, 800);