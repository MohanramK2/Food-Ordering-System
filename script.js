const byId = (id) => document.getElementById(id);
const title = byId("title");
const subtitle = byId("subtitle");
const searchInput = byId("search");
const modal = byId("modal");
const paymentModal = byId("payment-modal");
const paymentDetails = byId("payment-details");
const paymentQr = byId("payment-qr");
const restaurantOrderSelect = byId("cr");
const foods = byId("foods");
const total = byId("total");
const customerNameInput = byId("cn");
const customerPhoneInput = byId("cp");
const customerAddressInput = byId("customer-address");
const customerLocationButton = byId("customer-location-button");
const customerLocationStatus = byId("customer-location-status");
const orderTypeSelect = byId("ct");
const restaurantNameInput = byId("rn");
const ownerNameInput = byId("ro");
const restaurantPhoneInput = byId("rp");
const restaurantAddressInput = byId("ra");
const restaurantLatitudeInput = byId("raLat");
const restaurantLongitudeInput = byId("raLng");
const restaurantLocationStatus = byId("restaurant-location-status");
const cuisineSelect = byId("rc");
const restCount = byId("restCount");
const restList = byId("restList");
const ordersTable = byId("ordersTable");
const deliveryOrderSelect = byId("dOrder");
const deliveryAgentSelect = byId("dAgent");
const routeMapContainer = byId("routeMap");
const routeMapStatus = byId("routeMapStatus");
const routeRestaurantSelect = byId("routeRestaurant");
const routeFromAddressInput = byId("routeFromAddress");
const routeToAddressInput = byId("routeToAddress");
const routeSearchOrderSelect = byId("dOrder");
const routeSearchButton = byId("search-route-button");
const routeSearchStatus = byId("routeSearchStatus");
const tracking = byId("tracking");
const gross = byId("gross");
const deliveredCount = byId("del");
const cancelledCount = byId("cancelled");
const averageOrder = byId("avg");
const restSales = byId("restSales");
const customerTable = byId("custTable");
const toast = byId("toast");
const menuCategories = byId("menuCategories");
const menuSearch = byId("menuSearch");
const menuCount = byId("menuCount");
const checkoutItems = byId("checkout-items");
const cartItemCount = byId("cartItemCount");
const cartSubtotal = byId("cartSubtotal");
const cartButtonTotal = byId("cartButtonTotal");
const checkoutButton = byId("checkoutButton");
const authScreen = byId("auth-screen");
const appShell = byId("app-shell");
const authStatus = byId("auth-status");
const adminAuthForm = byId("admin-auth-form");
const userLoginForm = byId("user-login-form");
const userRegisterForm = byId("user-register-form");
const appNav = byId("app-nav");
const myOrdersList = byId("myOrdersList");

const menuCatalog = [
  {
    category: "Food",
    emoji: "🍛",
    sizeOptions: [["Regular", 0], ["Large", 50]],
    items: [
      ["Chicken Biryani", 180], ["Mutton Biryani", 260], ["Egg Biryani", 150], ["Veg Biryani", 140],
      ["Paneer Biryani", 180], ["Mushroom Biryani", 170], ["Prawn Biryani", 280], ["Chicken 65 Biryani", 220],
      ["Hyderabadi Chicken Biryani", 230], ["Ambur Chicken Biryani", 210], ["Kuska", 100], ["Chicken Fried Rice", 170],
      ["Veg Fried Rice", 120], ["Egg Fried Rice", 140], ["Schezwan Chicken Fried Rice", 190], ["Schezwan Veg Fried Rice", 150],
      ["Chicken Noodles", 170], ["Veg Hakka Noodles", 130], ["Egg Noodles", 150], ["Schezwan Noodles", 160],
      ["Chicken Kothu Parotta", 180], ["Egg Kothu Parotta", 140], ["Veg Kothu Parotta", 130], ["Plain Parotta (2 pcs)", 70],
      ["Chicken Chettinad", 220], ["Butter Chicken", 240], ["Chicken Tikka Masala", 230], ["Pepper Chicken", 210],
      ["Chicken 65", 150], ["Chicken Lollipop", 190], ["Tandoori Chicken", 280], ["Chicken Tikka", 220],
      ["Mutton Curry", 280], ["Mutton Pepper Fry", 300], ["Fish Curry", 220], ["Fish Fry", 200],
      ["Paneer Butter Masala", 180], ["Palak Paneer", 170], ["Kadai Paneer", 190], ["Chana Masala", 140],
      ["Dal Tadka", 130], ["Mushroom Masala", 170], ["Veg Meals", 120], ["South Indian Meals", 140],
      ["Mini Meals", 100], ["Curd Rice", 80], ["Lemon Rice", 90], ["Tomato Rice", 100],
      ["Masala Dosa", 90], ["Plain Dosa", 70], ["Ghee Roast Dosa", 120], ["Onion Uttapam", 110],
      ["Idli (3 pcs)", 60], ["Medu Vada (2 pcs)", 60], ["Pongal", 90], ["Poori Masala", 100],
      ["Classic Veg Pizza", 220], ["Margherita Pizza", 200], ["Chicken Pizza", 280], ["Paneer Tikka Pizza", 260]
    ]
  },
  {
    category: "Cool Drinks",
    emoji: "🥤",
    sizeOptions: [["Regular", 0], ["Large", 30]],
    items: [
      ["Fresh Lime Soda", 60], ["Sweet Lime Juice", 60], ["Salted Lime Juice", 55], ["Mint Lime Cooler", 75],
      ["Mango Shake", 110], ["Banana Shake", 90], ["Strawberry Shake", 120], ["Chocolate Milkshake", 130],
      ["Vanilla Milkshake", 110], ["Oreo Milkshake", 150], ["Cold Coffee", 120], ["Mocha Cold Coffee", 140],
      ["Iced Tea", 80], ["Lemon Iced Tea", 85], ["Peach Iced Tea", 100], ["Green Apple Iced Tea", 110],
      ["Rose Milk", 75], ["Badam Milk (Chilled)", 100], ["Nannari Sarbath", 65], ["Jigarthanda", 120],
      ["Tender Coconut Water", 70], ["Watermelon Juice", 80], ["Pineapple Juice", 90], ["Orange Juice", 100],
      ["Apple Juice", 110], ["Mosambi Juice", 90], ["Grape Juice", 100], ["Carrot Juice", 90],
      ["Pomegranate Juice", 130], ["Muskmelon Juice", 90], ["Buttermilk (Chilled)", 45], ["Sweet Lassi", 90],
      ["Mango Lassi", 120], ["Salted Lassi", 85], ["Blueberry Smoothie", 150], ["Mixed Berry Smoothie", 160],
      ["Avocado Smoothie", 170], ["Mango Smoothie", 140], ["Cold Cocoa", 120], ["Lemon Mint Cooler", 80]
    ]
  },
  {
    category: "Desserts",
    emoji: "🍰",
    sizeOptions: [["Single", 0], ["Double", 50]],
    items: [
      ["Chocolate Cake", 120], ["Black Forest Cake", 140], ["Red Velvet Cake", 160], ["Chocolate Brownie", 110],
      ["Brownie with Ice Cream", 170], ["Gulab Jamun", 70], ["Rasmalai", 100], ["Caramel Pudding", 90],
      ["Vanilla Ice Cream", 80], ["Chocolate Ice Cream", 90], ["Mango Ice Cream", 100], ["Butterscotch Ice Cream", 100],
      ["Kulfi", 90], ["Chocolate Donut", 80], ["Glazed Donut", 75], ["Chocolate Waffle", 140],
      ["Nutella Pancakes", 180], ["Fruit Custard", 100], ["Payasam", 80], ["Cheesecake", 170]
    ]
  }
];

const foodData = menuCatalog.flatMap(({ category, emoji, sizeOptions, items }) =>
  items.flatMap(([name, basePrice]) => sizeOptions.map(([size, extraPrice]) => ({
    emoji,
    name: `${name} · ${size}`,
    price: basePrice + extraPrice,
    category
  })))
);
let activeMenuCategory = "Food";

const deliveryAgents = ["Arun • DL001", "Bala • DL002", "Karthik • DL003", "Vijay • DL004", "Surya • DL005"];
const preparationWindowMs = 30 * 60 * 1000;
const courierTripWindowMs = 10 * 60 * 1000;
const deliveryPromiseWindowMs = 45 * 60 * 1000;
const recentlyArrivedMapWindowMs = 5 * 60 * 1000;
const fastOrderFee = 50;
const authUserStorageKey = "ffx_users";
const adminAuthStorageKey = "ffx_admin";
const authSessionStorageKey = "ffx_session";
const passwordHashIterations = 150000;

const defaultRestaurants = [
  { id: "R001", name: "Spice Hub", owner: "Ravi", phone: "9876543210", address: "Coimbatore", cat: "Indian", latitude: 11.0168, longitude: 76.9558 },
  { id: "R002", name: "Food Corner", owner: "Kumar", phone: "9876501234", address: "Erode", cat: "Multi Cuisine", latitude: 11.3410, longitude: 77.7172 },
  { id: "R003", name: "Tasty Bowl", owner: "Priya", phone: "9876512345", address: "Salem", cat: "Fast Food", latitude: 11.6643, longitude: 78.1460 }
];

const localRestaurantSeeds = [
  { id: "CB001", name: "Annapoorna", owner: "Partner restaurant", phone: "", address: "Arokiyasamy Road East, RS Puram, Coimbatore, Tamil Nadu 641007", cat: "Indian", latitude: 11.0069705, longitude: 76.9516839 },
  { id: "CB002", name: "RHR Restaurant", owner: "Partner restaurant", phone: "", address: "Nagappa Thevar Street, Krishnaswamy Nagar, Coimbatore, Tamil Nadu 641001", cat: "Indian", latitude: 10.9974403, longitude: 76.9992745 },
  { id: "ER001", name: "Sakthi Restaurant", owner: "OpenStreetMap listing", phone: "", address: "VOC Park Road, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Indian", latitude: 11.3490665, longitude: 77.7190264, osmType: "node", osmId: "891750387" },
  { id: "ER002", name: "Athappar Family Restaurant", owner: "OpenStreetMap listing", phone: "", address: "Nachiyappa Veethi, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Indian", latitude: 11.3458527, longitude: 77.7216643, osmType: "node", osmId: "835109807" },
  { id: "ER003", name: "Ammu Mess", owner: "OpenStreetMap listing", phone: "", address: "Erode Road, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Indian", latitude: 11.3483691, longitude: 77.7188888, osmType: "way", osmId: "75519567" },
  { id: "ER004", name: "Kumki Restaurant", owner: "OpenStreetMap listing", phone: "", address: "NH 544, Lakshmi Nagar, Nasiyanur, Erode, Tamil Nadu 638102", cat: "Indian", latitude: 11.3523614, longitude: 77.6446080, osmType: "node", osmId: "10146742001" },
  { id: "ER005", name: "Athithi Cafe", owner: "OpenStreetMap listing", phone: "", address: "NH 544, Lakshmi Nagar, Nasiyanur, Erode, Tamil Nadu 638102", cat: "Cafe", latitude: 11.3756736, longitude: 77.6516560, osmType: "way", osmId: "1020311868" },
  { id: "ER006", name: "Savera Hotel & Lodging", owner: "OpenStreetMap listing", phone: "", address: "Erode-Dharapuram Road, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Indian", latitude: 11.3463089, longitude: 77.7183548, osmType: "way", osmId: "69905275" },
  { id: "ER007", name: "Adyar Ananda Bhavan", owner: "OpenStreetMap listing", phone: "", address: "Erode-Dharapuram Road, Veerappanchatiram, Erode, Tamil Nadu 638011", cat: "Indian", latitude: 11.3438944, longitude: 77.7180832, osmType: "node", osmId: "4799213917" },
  { id: "ER008", name: "Brindavan Hotels", owner: "OpenStreetMap listing", phone: "", address: "Erode-Dharapuram Road, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Indian", latitude: 11.3467534, longitude: 77.7185646, osmType: "node", osmId: "835522733" },
  { id: "ER009", name: "KR Bakes", owner: "OpenStreetMap listing", phone: "", address: "Erode-Dharapuram Road, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Bakery", latitude: 11.3437329, longitude: 77.7178037, osmType: "node", osmId: "3583135819" },
  { id: "ER010", name: "Chimney", owner: "OpenStreetMap listing", phone: "", address: "Old Railway Station Road, Nadarmedu, Erode, Tamil Nadu 638001", cat: "Multi Cuisine", latitude: 11.3311777, longitude: 77.7298617, osmType: "node", osmId: "3943009682" },
  { id: "ER011", name: "Thulasi Veg Cafe", owner: "OpenStreetMap listing", phone: "", address: "Erode-Bhavani-Mettur-Thoppur Road, Veerappanchatiram, Erode, Tamil Nadu 638001", cat: "Vegetarian", latitude: 11.3481528, longitude: 77.7192708, osmType: "node", osmId: "7171107860" },
  { id: "ER012", name: "Arukkaniyammal Mess", owner: "OpenStreetMap listing", phone: "", address: "NH 544, Perundurai, Erode, Tamil Nadu 638052", cat: "Indian", latitude: 11.2982771, longitude: 77.5967424, osmType: "node", osmId: "11162755571" },
  { id: "ER013", name: "KEC foodcourt", owner: "OpenStreetMap listing", phone: "", address: "Kongu Engineering College, Perundurai, Erode, Tamil Nadu 638052", cat: "Food Court", latitude: 11.2726352, longitude: 77.6067879, osmType: "node", osmId: "10274963802" },
  { id: "ER014", name: "Ambur Star Biriyani", owner: "OpenStreetMap listing", phone: "", address: "NH 544, Perundurai, Erode, Tamil Nadu 638052", cat: "Biriyani", latitude: 11.3017372, longitude: 77.5999546, osmType: "node", osmId: "5531211477" },
  { id: "ER015", name: "Ayya Mess", owner: "OpenStreetMap listing", phone: "", address: "Perundurai Bypass, Sanitorium, Perundurai, Erode, Tamil Nadu 638053", cat: "Indian", latitude: 11.2908993, longitude: 77.5823217, osmType: "node", osmId: "13401566225" }
];

const defaultOrders = [
  { id: "ORD1024", customer: "Mohan", phone: "9876500000", restaurant: "Spice Hub", priority: "Priority", items: [{ name: "Chicken Biryani", qty: 1, price: 180 }], total: 180, status: "Out for Delivery", agent: "Arun • DL001", created: "Today 07:15" },
  { id: "ORD1023", customer: "Kavin", phone: "9876500001", restaurant: "Food Corner", priority: "Normal", items: [{ name: "Pizza", qty: 1, price: 220 }, { name: "Fresh Lime", qty: 1, price: 50 }], total: 270, status: "Preparing", agent: "Bala • DL002", created: "Today 07:05" },
  { id: "ORD1022", customer: "Anu", phone: "9876500002", restaurant: "Tasty Bowl", priority: "Normal", items: [{ name: "Veg Meals", qty: 2, price: 110 }], total: 220, status: "Delivered", agent: "Vijay • DL004", created: "Today 06:40" },
  { id: "ORD1021", customer: "Sanjay", phone: "9876500003", restaurant: "Spice Hub", priority: "Priority", items: [{ name: "Chicken 65", qty: 1, price: 140 }], total: 140, status: "Out for Delivery", agent: "Karthik • DL003", created: "Today 06:25" }
];

function loadSavedData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

let restaurants = loadSavedData("ffx_r", defaultRestaurants);
let restaurantsChanged = false;
localRestaurantSeeds.forEach((seed) => {
  const existing = restaurants.find((restaurant) =>
    restaurant.id === seed.id || restaurant.name.toLowerCase() === seed.name.toLowerCase()
  );
  if (existing) {
    if (seed.osmId && (!existing.osmId || existing.owner === "Partner restaurant")) {
      existing.osmType = seed.osmType;
      existing.osmId = seed.osmId;
      existing.owner = seed.owner;
      restaurantsChanged = true;
    }
    return;
  }
  restaurants.push(seed);
  restaurantsChanged = true;
});
if (restaurantsChanged) localStorage.setItem("ffx_r", JSON.stringify(restaurants));
let orders = loadSavedData("ffx_o", defaultOrders);
let orderDataMigrated = false;
let recoveredLocationShares = false;
orders.forEach((order) => {
  if (order.priority === "Priority" && !Number.isFinite(Number(order.fastOrderFee))) {
    const subtotal = Array.isArray(order.items)
      ? order.items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0)
      : Number(order.total || 0);
    order.subtotal = subtotal;
    order.fastOrderFee = fastOrderFee;
    order.total = subtotal + fastOrderFee;
    orderDataMigrated = true;
  }
  if (!Number.isFinite(Number(order.createdAt))) {
    order.createdAt = Date.now();
    orderDataMigrated = true;
  }
  if (order.status === "Out for Delivery" && !Number.isFinite(Number(order.dispatchedAt))) {
    order.dispatchedAt = Date.now();
    orderDataMigrated = true;
  }
  if (order.locationSharing || order.locationSharingRequested) {
    order.locationSharing = false;
    order.locationSharingRequested = false;
    recoveredLocationShares = true;
  }
});
if (recoveredLocationShares || orderDataMigrated) save();
let filter = "All";
let chosen = {};
let toastTimer;
let activePaymentOrderId = null;
let currentSession = null;
let routeMap = null;
let routeMapTimer = null;
let routeMapNeedsRefit = false;
let mapFocus = null;
let lastGeocodeRequestAt = 0;
let geocodeQueue = Promise.resolve();
let routeSearchLayers = null;
let lastRouteOrderId = null;
let customerLocation = null;
let customerLocationWatchId = null;
let locationOwnerPhone = "";
const liveRoutes = new Map();
const restaurantMarkers = new Map();
const automaticRoutes = new Map();
const routeProgress = new Map();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function save() {
  localStorage.setItem("ffx_r", JSON.stringify(restaurants));
  localStorage.setItem("ffx_o", JSON.stringify(orders));
}

function getAuthUsers() {
  const saved = localStorage.getItem(authUserStorageKey);
  if (!saved) return [];
  const users = JSON.parse(saved);
  if (!Array.isArray(users)) throw new Error("Saved user accounts are invalid. Clear this app's local account data and register again.");
  return users;
}

function hexFromBytes(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function bytesFromHex(hex) {
  return new Uint8Array(hex.match(/.{2}/g).map((byte) => Number.parseInt(byte, 16)));
}

async function hashPassword(password, saltHex) {
  if (!window.crypto?.subtle) {
    throw new Error("Secure password hashing is unavailable here. Open this app in Chrome or serve it from localhost.");
  }
  const salt = saltHex ? bytesFromHex(saltHex) : window.crypto.getRandomValues(new Uint8Array(16));
  const key = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const result = await window.crypto.subtle.deriveBits({
    name: "PBKDF2",
    salt,
    iterations: passwordHashIterations,
    hash: "SHA-256"
  }, key, 256);
  return { salt: hexFromBytes(salt), hash: hexFromBytes(new Uint8Array(result)) };
}

async function verifyPassword(password, record) {
  const result = await hashPassword(password, record.salt);
  return result.hash === record.hash;
}

function setAuthStatus(message, isError = true) {
  authStatus.textContent = message;
  authStatus.classList.toggle("error", isError);
}

function requireAdmin() {
  if (currentSession?.role === "admin") return true;
  toastMsg("This action is available to administrators only.");
  return false;
}

function showAuthRole(role) {
  const isAdmin = role === "admin";
  document.querySelectorAll("[data-auth-role]").forEach((button) => {
    const active = button.dataset.authRole === role;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  adminAuthForm.hidden = !isAdmin;
  userLoginForm.hidden = isAdmin;
  userRegisterForm.hidden = true;
  authStatus.textContent = "";
  const adminRecord = localStorage.getItem(adminAuthStorageKey);
  byId("admin-confirm-wrap").hidden = Boolean(adminRecord);
  byId("admin-auth-caption").textContent = adminRecord
    ? "Enter your administrator password."
    : "First use: create an admin password for this browser. The account name is Admin.";
  byId("admin-submit").textContent = adminRecord ? "Sign in as Admin" : "Set admin password";
  byId("admin-password").autocomplete = adminRecord ? "current-password" : "new-password";
}

function setupAuthenticatedUI(session) {
  const adminItems = [
    ["dashboard", "⌂", "Overview"],
    ["menu", "🍽", "Browse Food"],
    ["restaurants", "▣", "Restaurants"],
    ["orders", "🛒", "Orders"],
    ["delivery", "🛵", "Live Delivery"],
    ["reports", "▥", "Analytics"],
    ["customers", "♙", "Customers"]
  ];
  const userItems = [
    ["menu", "🍽", "Browse Food"],
    ["my-orders", "🛒", "My Orders"]
  ];
  const items = session.role === "admin" ? adminItems : userItems;
  appNav.innerHTML = items.map(([page, icon, label]) =>
    `<button type="button" data-page="${page}"><span class="ico">${icon}</span><span>${label}</span></button>`
  ).join("");
  byId("sidebar-role").textContent = session.role === "admin" ? "Admin Dashboard" : "User Account";
  byId("sidebar-description").textContent = session.role === "admin"
    ? "Restaurant and delivery control"
    : session.name;
  byId("session-label").textContent = session.role === "admin" ? "Admin" : session.name;
  searchInput.hidden = session.role !== "admin";
}

function completeLogin(session) {
  try {
    sessionStorage.setItem(authSessionStorageKey, JSON.stringify(session));
  } catch (error) {
    setAuthStatus(`Could not save the sign-in session: ${error.message}`);
    return;
  }
  currentSession = session;
  document.querySelectorAll("#auth-screen input[type='password']").forEach((input) => { input.value = ""; });
  authScreen.hidden = true;
  appShell.hidden = false;
  setupAuthenticatedUI(session);
  showPage(session.role === "admin" ? "dashboard" : "menu");
}

function signOut() {
  const signingOut = currentSession;
  let stoppedSharing = false;
  if (customerLocationWatchId !== null) {
    navigator.geolocation.clearWatch(customerLocationWatchId);
    customerLocationWatchId = null;
  }
  if (signingOut) {
    orders.forEach((order) => {
      const belongsToSession = signingOut.role === "user"
        ? order.customerEmail === signingOut.email
        : order.phone === locationOwnerPhone;
      if (!belongsToSession || !order.locationSharingRequested) return;
      order.locationSharing = false;
      order.locationSharingRequested = false;
      stoppedSharing = true;
    });
  }
  if (stoppedSharing) save();
  locationOwnerPhone = "";
  customerLocation = null;
  sessionStorage.removeItem(authSessionStorageKey);
  currentSession = null;
  chosen = {};
  customerNameInput.value = "";
  customerPhoneInput.value = "";
  customerAddressInput.value = "";
  closeOrder();
  closePayment();
  appShell.hidden = true;
  authScreen.hidden = false;
  byId("login-password").value = "";
  byId("admin-password").value = "";
  byId("admin-password-confirm").value = "";
  byId("register-password").value = "";
  byId("register-password-confirm").value = "";
  byId("register-name").value = "";
  byId("register-email").value = "";
  byId("register-phone").value = "";
  showAuthRole("user");
}

async function submitAdminAuth(event) {
  event.preventDefault();
  const password = byId("admin-password").value;
  const confirm = byId("admin-password-confirm").value;
  try {
    const existing = localStorage.getItem(adminAuthStorageKey);
    if (!existing) {
      if (password.length < 8) return setAuthStatus("Use at least 8 characters for the admin password.");
      if (password !== confirm) return setAuthStatus("The admin passwords do not match.");
      const record = await hashPassword(password);
      localStorage.setItem(adminAuthStorageKey, JSON.stringify(record));
    } else {
      const record = JSON.parse(existing);
      if (!await verifyPassword(password, record)) return setAuthStatus("Incorrect admin password.");
    }
    completeLogin({ role: "admin", name: "Admin" });
  } catch (error) {
    setAuthStatus(`Admin sign-in failed: ${error.message}`);
  }
}

async function submitUserLogin(event) {
  event.preventDefault();
  const email = byId("login-email").value.trim().toLowerCase();
  try {
    const account = getAuthUsers().find((user) => user.email === email);
    if (!account || !await verifyPassword(byId("login-password").value, account)) {
      return setAuthStatus("Email or password is incorrect.");
    }
    completeLogin({ role: "user", email: account.email, name: account.name, phone: account.phone });
  } catch (error) {
    setAuthStatus(`User sign-in failed: ${error.message}`);
  }
}

async function submitUserRegistration(event) {
  event.preventDefault();
  const name = byId("register-name").value.trim();
  const email = byId("register-email").value.trim().toLowerCase();
  const phone = byId("register-phone").value.trim();
  const password = byId("register-password").value;
  const confirm = byId("register-password-confirm").value;
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return setAuthStatus("Enter your name and a valid email address.");
  }
  if (phone.replace(/\D/g, "").length < 10 || phone.replace(/\D/g, "").length > 15) {
    return setAuthStatus("Enter a valid phone number with 10 to 15 digits.");
  }
  if (password.length < 8) return setAuthStatus("Use at least 8 characters for your password.");
  if (password !== confirm) return setAuthStatus("The passwords do not match.");
  try {
    const users = getAuthUsers();
    if (users.some((user) => user.email === email)) return setAuthStatus("An account with this email already exists.");
    const passwordRecord = await hashPassword(password);
    const account = { name, email, phone, ...passwordRecord };
    users.push(account);
    localStorage.setItem(authUserStorageKey, JSON.stringify(users));
    completeLogin({ role: "user", email, name, phone });
  } catch (error) {
    setAuthStatus(`Account creation failed: ${error.message}`);
  }
}

function initializeAuthentication() {
  showAuthRole("user");
  try {
    const savedSession = sessionStorage.getItem(authSessionStorageKey);
    if (!savedSession) return;
    const session = JSON.parse(savedSession);
    if (session.role === "admin" && localStorage.getItem(adminAuthStorageKey)) {
      currentSession = session;
    } else if (session.role === "user") {
      const account = getAuthUsers().find((user) => user.email === session.email);
      if (!account) {
        sessionStorage.removeItem(authSessionStorageKey);
        return;
      }
      currentSession = { role: "user", email: account.email, name: account.name, phone: account.phone };
    } else {
      sessionStorage.removeItem(authSessionStorageKey);
      return;
    }
    authScreen.hidden = true;
    appShell.hidden = false;
    setupAuthenticatedUI(currentSession);
    showPage(currentSession.role === "admin" ? "dashboard" : "menu");
  } catch (error) {
    sessionStorage.removeItem(authSessionStorageKey);
    setAuthStatus(`Could not restore your sign-in session: ${error.message}`);
  }
}

function showPage(id) {
  const page = byId(id);
  if (!page || !page.classList.contains("page")) return;
  if (!currentSession) return;
  if (currentSession.role === "user" && !["menu", "my-orders"].includes(id)) {
    toastMsg("That section is only available to administrators.");
    return;
  }
  if (id === "delivery") mapFocus = null;

  document.querySelectorAll(".page").forEach((item) => item.classList.toggle("active", item === page));
  document.querySelectorAll(".nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === id);
  });

  const pageText = {
    dashboard: ["Smart Food Delivery", "Real-time restaurant and order operations"],
    menu: ["Browse Food", "Choose your favourites before entering delivery details"],
    "my-orders": ["My Orders", "View and pay for your orders"],
    restaurants: ["Restaurant Network", "Register and manage partner restaurants"],
    orders: ["Order Management", "Priority queue, status control and cancellation"],
    delivery: ["Live Delivery", "Assign agents and track active deliveries"],
    reports: ["Analytics & Reports", "Revenue and restaurant performance"],
    customers: ["Customer Management", "Customer activity and order history"]
  }[id];

  title.textContent = pageText[0];
  subtitle.textContent = pageText[1];
  renderAll();
}

function browseMenu() {
  showPage("menu");
}

function showErodeRestaurants() {
  if (!requireAdmin()) return;
  showPage("delivery");
  if (!routeMap || !window.L) return toastMsg("The map is unavailable. Check your internet connection and try again.");
  const markers = localRestaurantSeeds
    .filter((restaurant) => restaurant.id.startsWith("ER"))
    .map((restaurant) => restaurantMarkers.get(restaurant.id))
    .filter(Boolean);
  if (!markers.length) return toastMsg("No mapped Erode restaurant locations are available.");
  mapFocus = "erode";
  setTimeout(() => {
    routeMap.invalidateSize();
    routeMap.fitBounds(L.featureGroup(markers).getBounds().pad(0.15), { maxZoom: 12, animate: true });
    routeMapNeedsRefit = false;
  }, 150);
}

function openOrder() {
  if (!currentSession) return toastMsg("Sign in before placing an order.");
  if (!Object.keys(chosen).length) {
    showPage("menu");
    return toastMsg("Add one or more items to your cart first.");
  }
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  if (!customerLocationWatchId) {
    customerLocation = null;
    customerLocationStatus.textContent = "Location is optional. Sharing uses this device's GPS only after permission.";
  }
  restaurantOrderSelect.innerHTML = restaurants.map((restaurant) =>
    `<option value="${escapeHTML(restaurant.id)}">${escapeHTML(restaurant.name)}</option>`
  ).join("");
  orderTypeSelect.value = "Normal";
  const isUser = currentSession.role === "user";
  customerNameInput.readOnly = isUser;
  customerPhoneInput.readOnly = isUser;
  if (isUser) {
    customerNameInput.value = currentSession.name;
    customerPhoneInput.value = currentSession.phone;
  }
  renderCheckoutSummary();
  customerNameInput.focus();
}

function closeOrder() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  stopLocationWatchIfIdle();
}

function openPayment(id) {
  if (!currentSession) return toastMsg("Sign in to view payment details.");
  const order = orders.find((item) => item.id === id);
  if (!order) return toastMsg("Order not found.");
  if (currentSession?.role === "user" && order.customerEmail !== currentSession.email) {
    return toastMsg("You can only view payment for your own orders.");
  }
  if (order.status === "Cancelled") return toastMsg("Cancelled orders cannot be paid.");
  activePaymentOrderId = order.id;
  const subtotal = Number(order.subtotal ?? order.items.reduce((sum, item) => sum + item.price * item.qty, 0));
  const orderFee = Number(order.fastOrderFee || 0);
  const payableAmount = subtotal + orderFee;
  order.subtotal = subtotal;
  order.fastOrderFee = orderFee;
  order.total = payableAmount;
  paymentDetails.innerHTML = `<p class="payment-order"><b>${escapeHTML(order.id)}</b> · ${escapeHTML(order.customer)}</p>
    <div class="payment-breakdown"><p><span>Food subtotal</span><b>₹${subtotal}</b></p>
    ${orderFee ? `<p><span>⚡ Fast order fee</span><b>₹${orderFee}</b></p>` : ""}
    <p class="payment-total"><span>Total to pay</span><b>₹${payableAmount}</b></p></div>`;
  const payload = `PERFECT FOOD DEMO PAYMENT | Order ${order.id} | Food INR ${subtotal} | Fast order fee INR ${orderFee} | Total INR ${payableAmount} | NOT A REAL PAYMENT`;
  paymentQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(payload)}`;
  paymentQr.hidden = false;
  paymentQr.onerror = () => {
    paymentQr.hidden = true;
    toastMsg("Could not load the demo QR code. Check your internet connection and try again.");
  };
  paymentModal.classList.add("show");
  paymentModal.setAttribute("aria-hidden", "false");
}

function closePayment() {
  paymentModal.classList.remove("show");
  paymentModal.setAttribute("aria-hidden", "true");
  activePaymentOrderId = null;
  paymentQr.removeAttribute("src");
}

function simulatePayment() {
  const order = orders.find((item) => item.id === activePaymentOrderId);
  if (!order) return toastMsg("Order not found.");
  if (currentSession?.role === "user" && order.customerEmail !== currentSession.email) {
    return toastMsg("You can only pay for your own orders.");
  }
  order.paymentStatus = "Paid";
  save();
  if (advanceAutomaticDeliveries()) save();
  renderAll();
  closePayment();
  toastMsg("Demo payment marked as paid. No money was collected.");
}

function foodImageIcon(food) {
  const name = food.name.toLowerCase();
  const rules = food.category === "Food" ? [
    [/biryani/, "🍛"], [/pizza/, "🍕"], [/noodle/, "🍜"], [/fried rice|rice/, "🍚"],
    [/egg/, "🥚"],
    [/chicken/, "🍗"], [/mutton/, "🍖"], [/fish/, "🐟"], [/prawn/, "🦐"],
    [/paneer/, "🧀"], [/mushroom/, "🍄"], [/dosa|pancake/, "🥞"], [/parotta/, "🫓"],
    [/idli|vada/, "🍘"], [/pongal|dal|curry|masala/, "🍲"], [/meal/, "🍱"],
    [/poori/, "🫓"], [/chana/, "🫘"]
  ] : food.category === "Cool Drinks" ? [
    [/lime|lemon/, "🍋"], [/mango/, "🥭"], [/banana/, "🍌"], [/strawberry|berry/, "🍓"],
    [/chocolate|cocoa/, "🍫"], [/vanilla/, "🍦"], [/coffee|mocha/, "☕"], [/tea/, "🍵"],
    [/rose/, "🌹"], [/milk|lassi|badam/, "🥛"], [/coconut/, "🥥"], [/watermelon/, "🍉"],
    [/pineapple/, "🍍"], [/orange|mosambi/, "🍊"], [/apple/, "🍎"], [/grape/, "🍇"],
    [/carrot/, "🥕"], [/pomegranate/, "🔴"], [/avocado/, "🥑"], [/buttermilk/, "🥛"],
    [/smoothie|soda|cooler|juice|sarbath|jigarthanda|iced/, "🥤"]
  ] : [
    [/brownie|chocolate/, "🍫"], [/cake|cheesecake/, "🍰"], [/jamun|pudding|payasam|custard/, "🍮"],
    [/rasmalai|ice cream|kulfi/, "🍨"], [/donut/, "🍩"], [/waffle/, "🧇"],
    [/pancake/, "🥞"], [/fruit/, "🍓"]
  ];
  return rules.find(([pattern]) => pattern.test(name))?.[1] || food.emoji;
}

function foodImageUrl(food) {
  const palettes = food.category === "Cool Drinks"
    ? [["#d7f4ff", "#83d2ed"], ["#d5f2dc", "#91d6a5"], ["#fae1f5", "#dfa4d6"], ["#fff0cf", "#f2bd6d"], ["#e3e1ff", "#a8a7e8"], ["#d9f1ed", "#83c7ba"], ["#ffe0ce", "#ec9c79"], ["#e4f0d3", "#a9c77b"]]
    : food.category === "Desserts"
      ? [["#ffe1eb", "#f4a9bd"], ["#fce7d4", "#eeb284"], ["#eee2fa", "#bea2e5"], ["#fff0c9", "#f2ce7c"], ["#d9eef5", "#8fc6d5"], ["#e5ebd5", "#a9b96e"], ["#ffdfd4", "#e89078"], ["#e8e1ff", "#b5a2e8"]]
      : [["#ffe4cc", "#f2ac73"], ["#ffedcf", "#e8c16d"], ["#f7dfd0", "#e2a27d"], ["#e9efcf", "#b9c67d"], ["#d9eee8", "#83c2a7"], ["#e0e7f8", "#91a8d8"], ["#f4e0ee", "#d19abd"], ["#f8e4c8", "#d6a867"]];
  const label = food.name.replace(/\s·\s.+$/, "");
  const hash = Array.from(label).reduce((value, character) =>
    (value * 31 + character.charCodeAt(0)) >>> 0, 7);
  const palette = palettes[hash % palettes.length];
  const icon = foodImageIcon(food);
  const safeLabel = label.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
  })[character]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette[0]}"/><stop offset="1" stop-color="${palette[1]}"/></linearGradient><filter id="shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#56331f" flood-opacity=".2"/></filter></defs><rect width="480" height="300" rx="28" fill="url(#bg)"/><circle cx="70" cy="63" r="24" fill="#fff" fill-opacity=".28"/><circle cx="411" cy="231" r="37" fill="#fff" fill-opacity=".2"/><circle cx="240" cy="145" r="105" fill="#fff" fill-opacity=".26"/><ellipse cx="240" cy="159" rx="98" ry="83" fill="#fffdf9" filter="url(#shadow)"/><ellipse cx="240" cy="159" rx="77" ry="63" fill="${palette[0]}" stroke="#fff" stroke-opacity=".88" stroke-width="8"/><text x="240" y="180" text-anchor="middle" font-size="74" font-family="Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif">${icon}</text><rect x="37" y="253" width="406" height="34" rx="17" fill="#fff" fill-opacity=".8"/><text x="240" y="276" text-anchor="middle" font-size="17" font-weight="700" fill="#47372e" font-family="Segoe UI, Arial, sans-serif">${safeLabel}</text><path d="M115 55l7 17 17 7-17 7-7 17-7-17-17-7 17-7zM364 51l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff" fill-opacity=".82"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderFoodModal() {
  const query = menuSearch.value.trim().toLowerCase();
  const categoryItems = foodData.map((food, index) => ({ food, index }))
    .filter(({ food }) => food.category === activeMenuCategory &&
      (!query || food.name.toLowerCase().includes(query)));
  menuCategories.innerHTML = menuCatalog.map(({ category }) => {
    const count = foodData.filter((food) => food.category === category).length;
    const selectedCount = foodData.reduce((sum, food, index) =>
      sum + (food.category === category ? Number(chosen[index] || 0) : 0), 0);
    return `<button type="button" class="chip ${activeMenuCategory === category ? "active" : ""}" data-menu-category="${category}" aria-pressed="${activeMenuCategory === category}">${escapeHTML(category)} <span>${count}</span>${selectedCount ? ` · ${selectedCount} in cart` : ""}</button>`;
  }).join("");
  const categoryLabel = activeMenuCategory === "Food" ? "food item" :
    activeMenuCategory === "Cool Drinks" ? "cool drink" : "dessert";
  menuCount.textContent = `${categoryItems.length} ${categoryLabel}${categoryItems.length === 1 ? "" : "s"}`;
  foods.innerHTML = categoryItems.length ? categoryItems.map(({ food, index }) => {
    const quantity = Number(chosen[index] || 0);
    const subtitleText = food.category === "Food" ? "Freshly prepared" :
      food.category === "Cool Drinks" ? "Served chilled" : "Sweet treat";
    return `<article class="food">
      <div class="food-art"><img src="${foodImageUrl(food)}" alt="${escapeHTML(food.name)}" loading="lazy"></div>
      <div class="food-info"><span class="food-category-label">${escapeHTML(food.category)}</span><h3>${escapeHTML(food.name)}</h3>
      <p>${subtitleText}</p>
      <div class="foodrow"><span class="price">₹${food.price} <small>each</small></span>
        ${quantity ? `<div class="quantity-control" aria-label="${quantity} in cart"><button type="button" data-food-index="${index}" data-quantity-change="-1" aria-label="Remove one ${escapeHTML(food.name)}">−</button><b>${quantity}</b><button type="button" data-food-index="${index}" data-quantity-change="1" aria-label="Add one ${escapeHTML(food.name)}">+</button></div>` :
          `<button type="button" class="btn mini gray" data-food-index="${index}" data-quantity-change="1">+ Add</button>`}
      </div></div>
    </article>`;
  }).join("") : `<div class="empty">No ${activeMenuCategory.toLowerCase()} match “${escapeHTML(menuSearch.value.trim())}”.</div>`;
  updateCartBar();
}

function updateCartBar() {
  const entries = Object.entries(chosen).filter(([, quantity]) => Number(quantity) > 0);
  const quantity = entries.reduce((sum, [, count]) => sum + Number(count), 0);
  const subtotal = entries.reduce((sum, [index, count]) =>
    sum + foodData[Number(index)].price * Number(count), 0);
  cartItemCount.textContent = quantity ? `${quantity} item${quantity === 1 ? "" : "s"} in your cart` : "Your cart is empty";
  cartSubtotal.textContent = quantity ? `${entries.length} menu choice${entries.length === 1 ? "" : "s"} · Ready for checkout` :
    "Pick something delicious to get started.";
  cartButtonTotal.textContent = `₹${subtotal}`;
  checkoutButton.disabled = quantity === 0;
}

function renderCheckoutSummary() {
  const entries = Object.entries(chosen).filter(([, quantity]) => Number(quantity) > 0);
  const subtotal = entries.reduce((sum, [index, quantity]) =>
    sum + foodData[Number(index)].price * Number(quantity), 0);
  const charge = orderTypeSelect.value === "Priority" ? fastOrderFee : 0;
  checkoutItems.innerHTML = entries.map(([index, quantity]) => {
    const food = foodData[Number(index)];
    return `<div class="checkout-item"><span>${escapeHTML(food.name)} <b>× ${Number(quantity)}</b></span><b>₹${food.price * Number(quantity)}</b></div>`;
  }).join("");
  byId("checkout-charges").innerHTML = `<div class="checkout-charge"><span>Food subtotal</span><b>₹${subtotal}</b></div>
    <div class="checkout-charge"><span>${charge ? "⚡ Fast order fee" : "Fast order fee (select fast order)"}</span><b>${charge ? `₹${charge}` : "₹0"}</b></div>`;
  total.textContent = `₹${subtotal + charge}`;
}

function toggleFood(index, change) {
  const quantity = Math.max(0, Number(chosen[index] || 0) + change);
  if (quantity) chosen[index] = quantity;
  else delete chosen[index];
  renderFoodModal();
}

function updateCustomerLocation(position) {
  customerLocation = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    updatedAt: Date.now()
  };
  customerLocationStatus.textContent = `Live GPS shared · accuracy about ${Math.round(position.coords.accuracy)} m.`;
  let changed = false;
  orders.forEach((order) => {
    if (order.phone !== locationOwnerPhone || !order.locationSharingRequested ||
        order.status === "Delivered" || order.status === "Cancelled") return;
    order.locationSharing = true;
    order.customerLatitude = customerLocation.latitude;
    order.customerLongitude = customerLocation.longitude;
    order.locationUpdatedAt = customerLocation.updatedAt;
    changed = true;
  });
  if (changed) {
    save();
    routeMapNeedsRefit = true;
    updateRouteMap();
  }
}

function locationError(error) {
  const message = error.code === 1 ? "Location permission was denied." :
    error.code === 2 ? "Your location is unavailable." : "Location request timed out.";
  customerLocationStatus.textContent = message;
  if (error.code === 1 && customerLocationWatchId !== null) {
    const deniedPhone = locationOwnerPhone;
    navigator.geolocation.clearWatch(customerLocationWatchId);
    customerLocationWatchId = null;
    locationOwnerPhone = "";
    customerLocationButton.textContent = "Share live location";
    orders.forEach((order) => {
      if (order.phone === deniedPhone) {
        order.locationSharing = false;
        order.locationSharingRequested = false;
      }
    });
    save();
    renderAll();
  }
  toastMsg(message);
}

function shareCustomerLocation() {
  const phone = customerPhoneInput.value.trim();
  if (customerLocationWatchId && (!phone || locationOwnerPhone === phone)) {
    stopCustomerLocation();
    return;
  }
  if (!phone) return toastMsg("Enter the customer's phone number before sharing location.");
  if (!navigator.geolocation) return toastMsg("This browser does not support location sharing.");

  if (customerLocationWatchId) stopCustomerLocation();
  locationOwnerPhone = phone;
  customerLocationStatus.textContent = "Waiting for location permission…";
  customerLocationButton.textContent = "Stop live location";
  try {
    customerLocationWatchId = navigator.geolocation.watchPosition(updateCustomerLocation, locationError, {
      enableHighAccuracy: true,
      maximumAge: 5000,
      timeout: 15000
    });
  } catch (error) {
    locationOwnerPhone = "";
    customerLocationButton.textContent = "Share live location";
    customerLocationStatus.textContent = `Could not start location sharing: ${error.message}`;
    toastMsg(customerLocationStatus.textContent);
  }
}

function stopCustomerLocation() {
  if (customerLocationWatchId !== null) {
    navigator.geolocation.clearWatch(customerLocationWatchId);
    customerLocationWatchId = null;
  }
  orders.forEach((order) => {
    if (order.phone === locationOwnerPhone) {
      order.locationSharing = false;
      order.locationSharingRequested = false;
    }
  });
  locationOwnerPhone = "";
  customerLocationButton.textContent = "Share live location";
  customerLocationStatus.textContent = "Live location sharing is off. The last shared position remains on the order.";
  save();
  renderAll();
}

function locateRestaurant() {
  if (!requireAdmin()) return;
  if (!navigator.geolocation) return toastMsg("This browser does not support location sharing.");
  restaurantLocationStatus.textContent = "Waiting for location permission…";
  try {
    navigator.geolocation.getCurrentPosition((position) => {
      restaurantLatitudeInput.value = position.coords.latitude.toFixed(6);
      restaurantLongitudeInput.value = position.coords.longitude.toFixed(6);
      restaurantLocationStatus.textContent = "Restaurant map pin set from this device's current GPS location.";
    }, (error) => {
      const message = error.code === 1 ? "Location permission was denied." :
        error.code === 2 ? "Your location is unavailable." : "Location request timed out.";
      restaurantLocationStatus.textContent = message;
      toastMsg(message);
    }, { enableHighAccuracy: true, timeout: 15000 });
  } catch (error) {
    restaurantLocationStatus.textContent = `Could not get location: ${error.message}`;
    toastMsg(restaurantLocationStatus.textContent);
  }
}

function stopOrderLocation(id) {
  if (!requireAdmin()) return;
  const order = orders.find((item) => item.id === id);
  if (!order || !order.locationSharingRequested) return;
  order.locationSharing = false;
  order.locationSharingRequested = false;
  stopLocationWatchIfIdle();
  save();
  renderAll();
  toastMsg("Live location sharing stopped for this order.");
}

function stopLocationWatchIfIdle() {
  const hasActiveShares = orders.some((order) =>
    order.phone === locationOwnerPhone && order.locationSharingRequested &&
    order.status !== "Delivered" && order.status !== "Cancelled"
  );
  if (!hasActiveShares && customerLocationWatchId !== null && !modal.classList.contains("show")) {
    navigator.geolocation.clearWatch(customerLocationWatchId);
    customerLocationWatchId = null;
    locationOwnerPhone = "";
    customerLocationButton.textContent = "Share live location";
  }
}

function placeOrder() {
  if (!currentSession) return toastMsg("Sign in before placing an order.");
  const name = customerNameInput.value.trim();
  const phone = customerPhoneInput.value.trim();
  const address = customerAddressInput.value.trim();
  const restaurant = restaurants.find((item) => item.id === restaurantOrderSelect.value);
  const keys = Object.keys(chosen).filter((index) => Number(chosen[index]) > 0);

  if (!name || !phone || !address || !restaurant || !keys.length) {
    return toastMsg("Enter customer name, phone, delivery address, and add food items.");
  }

  const items = keys.map((index) => ({
    name: foodData[index].name,
    qty: Number(chosen[index]),
    price: foodData[index].price
  }));
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const orderFee = orderTypeSelect.value === "Priority" ? fastOrderFee : 0;
  const sum = subtotal + orderFee;
  const createdAt = Date.now();
  let orderId;
  do {
    orderId = "ORD" + Math.floor(1000 + Math.random() * 8999);
  } while (orders.some((order) => order.id === orderId));
  orders.unshift({
    id: orderId,
    customer: name,
    phone,
    customerAddress: address,
    customerLatitude: locationOwnerPhone === phone ? customerLocation?.latitude ?? null : null,
    customerLongitude: locationOwnerPhone === phone ? customerLocation?.longitude ?? null : null,
    locationSharing: Boolean(customerLocationWatchId && locationOwnerPhone === phone && customerLocation),
    locationSharingRequested: Boolean(customerLocationWatchId && locationOwnerPhone === phone),
    locationUpdatedAt: locationOwnerPhone === phone ? customerLocation?.updatedAt ?? null : null,
    restaurant: restaurant.name,
    priority: orderTypeSelect.value,
    customerEmail: currentSession.role === "user" ? currentSession.email : "",
    items,
    subtotal,
    fastOrderFee: orderFee,
    total: sum,
    status: "Preparing",
    paymentStatus: "Pending",
    agent: assignNextAutomaticAgent(),
    automaticSchedule: true,
    createdAt,
    expectedDispatchAt: createdAt + preparationWindowMs,
    expectedArrivalAt: createdAt + preparationWindowMs + courierTripWindowMs,
    created: "Today " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  });

  save();
  chosen = {};
  closeOrder();
  customerNameInput.value = "";
  customerPhoneInput.value = "";
  customerAddressInput.value = "";
  renderAll();
  deliveryOrderSelect.value = orderId;
  syncSelectedOrderRouteAddresses(true);
  showPage("delivery");
  toastMsg("Order placed. Finding the restaurant-to-customer route in Live Delivery.");
}

function addRestaurant() {
  if (!requireAdmin()) return;
  const name = restaurantNameInput.value.trim();
  const owner = ownerNameInput.value.trim();
  const phone = restaurantPhoneInput.value.trim();
  const address = restaurantAddressInput.value.trim();
  const latitude = restaurantLatitudeInput.value.trim() ? Number(restaurantLatitudeInput.value) : null;
  const longitude = restaurantLongitudeInput.value.trim() ? Number(restaurantLongitudeInput.value) : null;

  if (!name || !owner || !phone || !address) return toastMsg("Fill all restaurant details.");
  if ((latitude === null) !== (longitude === null) ||
      (latitude !== null && (!Number.isFinite(latitude) || !Number.isFinite(longitude) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180))) {
    return toastMsg("Enter a valid latitude and longitude, or leave both blank.");
  }

  restaurants.push({
    id: "R" + String(restaurants.length + 1).padStart(3, "0"),
    name,
    owner,
    phone,
    address,
    cat: cuisineSelect.value,
    latitude,
    longitude
  });
  save();
  [restaurantNameInput, ownerNameInput, restaurantPhoneInput, restaurantAddressInput, restaurantLatitudeInput, restaurantLongitudeInput].forEach((input) => {
    input.value = "";
  });
  restaurantLocationStatus.textContent = "Add coordinates or use this device's location to pin the restaurant.";
  renderAll();
  toastMsg("Restaurant registered");
}

function assignNextAutomaticAgent() {
  const activeOrders = orders.filter((order) =>
    order.status !== "Delivered" && order.status !== "Cancelled" && order.agent !== "Not Assigned"
  );
  const agentLoads = deliveryAgents.map((agent) => ({
    agent,
    load: activeOrders.filter((order) => order.agent === agent).length
  }));
  agentLoads.sort((first, second) => first.load - second.load);
  return agentLoads[0].agent;
}

function advanceAutomaticDeliveries(now = Date.now()) {
  let changed = false;
  orders.forEach((order) => {
    if (!order.automaticSchedule || order.status === "Delivered" || order.status === "Cancelled") return;
    const createdAt = Number(order.createdAt);
    if (!Number.isFinite(createdAt)) return;

    if ((order.status === "Pending" || order.status === "Preparing") &&
        now >= Number(order.expectedDispatchAt || createdAt + preparationWindowMs)) {
      order.status = "Out for Delivery";
      order.dispatchedAt = Number(order.expectedDispatchAt || createdAt + preparationWindowMs);
      if (order.agent === "Not Assigned") order.agent = assignNextAutomaticAgent();
      routeProgress.set(order.id, Math.max(0, Math.min(1, (now - order.dispatchedAt) / courierTripWindowMs)));
      changed = true;
    }

    if (order.status === "Out for Delivery") {
      const dispatchedAt = Number(order.dispatchedAt || createdAt + preparationWindowMs);
      if (now >= dispatchedAt + courierTripWindowMs) {
        order.status = "Delivered";
        order.deliveredAt = dispatchedAt + courierTripWindowMs;
        order.locationSharing = false;
        order.locationSharingRequested = false;
        changed = true;
      }
    }
  });
  if (changed) stopLocationWatchIfIdle();
  return changed;
}

function deliveryStageLabel(order) {
  const createdAt = Number(order.createdAt);
  if (order.status === "Delivered" && !order.automaticSchedule) return "Delivered";
  if (order.status === "Delivered") {
    const elapsedMinutes = Math.round((Number(order.deliveredAt || Date.now()) - createdAt) / 60000);
    return `Arrived · ${elapsedMinutes} min total`;
  }
  if (order.status === "Cancelled") return "Cancelled";
  if (order.status === "Out for Delivery") {
    if (!order.automaticSchedule) return "Courier en route · Tracking";
    const dispatchedAt = Number(order.dispatchedAt || order.expectedDispatchAt || createdAt + preparationWindowMs);
    const remaining = Math.max(0, Math.ceil((dispatchedAt + courierTripWindowMs - Date.now()) / 60000));
    return `Courier en route · ${remaining} min to arrival`;
  }
  if (!order.automaticSchedule) return `${order.status} · Awaiting dispatch`;
  const dispatchAt = Number(order.expectedDispatchAt || createdAt + preparationWindowMs);
  const remaining = Math.max(0, Math.ceil((dispatchAt - Date.now()) / 60000));
  return `Restaurant preparing · ships in ${remaining} min`;
}

function applyDeliveryGuarantees() {
  const now = Date.now();
  const newlyAssigned = [];
  orders.forEach((order) => {
    if (order.status === "Cancelled" || order.freeFoodVoucher) return;
    const deadline = Number(order.createdAt) + deliveryPromiseWindowMs;
    const completionTime = order.status === "Delivered" ? Number(order.deliveredAt ?? order.createdAt) : now;
    if (completionTime < deadline) return;
    order.freeFoodVoucher = `FREE-${order.id}`;
    newlyAssigned.push(order);
  });
  return newlyAssigned;
}

function deliveryPromiseLabel(order) {
  if (order.freeFoodVoucher) return `Free food assigned · ${order.freeFoodVoucher}`;
  if (order.status === "Cancelled") return "Cancelled";
  if (order.status === "Delivered") return "Delivered within 45 min";
  const minutes = Math.max(0, Math.ceil((Number(order.createdAt) + deliveryPromiseWindowMs - Date.now()) / 60000));
  return `${minutes} min remaining`;
}

function statusClass(status) {
  return {
    Pending: "pending",
    Preparing: "preparing",
    "Out for Delivery": "out",
    Delivered: "delivered",
    Cancelled: "cancelled"
  }[status] || "pending";
}

function setFilter(nextFilter, button) {
  if (!requireAdmin()) return;
  filter = nextFilter;
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
  renderOrders();
}

function searchOrders() {
  if (!requireAdmin()) return;
  if (!byId("orders").classList.contains("active")) showPage("orders");
  else renderOrders();
}

function nextStatus(id) {
  if (!requireAdmin()) return;
  const order = orders.find((item) => item.id === id);
  const flow = ["Pending", "Preparing", "Out for Delivery", "Delivered"];
  const index = flow.indexOf(order?.status);
  if (index >= 0 && index < flow.length - 1) {
    order.status = flow[index + 1];
    if (order.status === "Delivered") {
      order.deliveredAt = Date.now();
      order.automaticSchedule = false;
      order.locationSharing = false;
      order.locationSharingRequested = false;
      stopLocationWatchIfIdle();
    } else if (order.status === "Out for Delivery") {
      order.dispatchedAt = Date.now();
    }
    const newCompensations = applyDeliveryGuarantees();
    save();
    renderAll();
    toastMsg(newCompensations.length ? `45-minute promise missed. Free food assigned: ${order.freeFoodVoucher}.` : "Order status updated");
  }
}

function cancelOrder(id) {
  if (!requireAdmin()) return;
  const order = orders.find((item) => item.id === id);
  if (!order) return;
  if (order.status === "Delivered") return toastMsg("Delivered order cannot be cancelled.");
  order.status = "Cancelled";
  order.locationSharing = false;
  order.locationSharingRequested = false;
  order.automaticSchedule = false;
  stopLocationWatchIfIdle();
  save();
  renderAll();
  toastMsg("Order cancelled");
}

function assignAgent() {
  if (!requireAdmin()) return;
  const order = orders.find((item) => item.id === deliveryOrderSelect.value);
  if (!order) return toastMsg("No active order selected.");
  order.agent = deliveryAgentSelect.value;
  if (order.status === "Pending") order.status = "Preparing";
  save();
  renderAll();
  toastMsg("Agent assigned");
}

function renderRouteRestaurantOptions() {
  const selectedId = routeRestaurantSelect.value;
  routeRestaurantSelect.innerHTML = restaurants.map((restaurant) =>
    `<option value="${escapeHTML(restaurant.id)}">${escapeHTML(restaurant.name)} · ${escapeHTML(restaurant.address)}</option>`
  ).join("");
  if (restaurants.some((restaurant) => restaurant.id === selectedId)) {
    routeRestaurantSelect.value = selectedId;
  } else if (restaurants.length) {
    routeRestaurantSelect.value = restaurants[0].id;
  }
  updateRouteRestaurantAddress();
}

function updateRouteRestaurantAddress() {
  const restaurant = restaurants.find((item) => item.id === routeRestaurantSelect.value);
  routeFromAddressInput.value = restaurant?.address || "";
}

function loadOrderRouteAddresses() {
  if (!requireAdmin()) return;
  const order = orders.find((item) => item.id === routeSearchOrderSelect.value);
  if (!order) return toastMsg("Choose an order with a saved customer address.");
  const restaurant = restaurants.find((item) => item.name === order.restaurant);
  if (restaurant) routeRestaurantSelect.value = restaurant.id;
  updateRouteRestaurantAddress();
  if (!order.customerAddress) {
    routeToAddressInput.value = "";
    routeSearchStatus.textContent = "This order has no saved customer address. Enter the full destination address.";
    return toastMsg("This order does not have a saved customer address.");
  }
  routeToAddressInput.value = order.customerAddress;
  routeSearchStatus.textContent = `Loaded ${order.id}: ${restaurant?.name || order.restaurant} to ${order.customer}. Search when ready.`;
}

function syncSelectedOrderRouteAddresses(force = false) {
  const order = orders.find((item) => item.id === routeSearchOrderSelect.value);
  if (!order || (!force && lastRouteOrderId === order.id)) return;
  lastRouteOrderId = order.id;
  const restaurant = restaurants.find((item) => item.name === order.restaurant);
  if (restaurant) routeRestaurantSelect.value = restaurant.id;
  updateRouteRestaurantAddress();
  routeToAddressInput.value = order.customerAddress || "";
  routeSearchStatus.textContent = order.customerAddress
    ? `From ${restaurant?.name || order.restaurant} to ${order.customer}. Automatic route is shown on the map.`
    : "This order has no saved delivery address.";
}

function geocodeAddress(address, signal) {
  const request = geocodeQueue.then(async () => {
    const delay = Math.max(0, 1100 - (Date.now() - lastGeocodeRequestAt));
    if (delay) await new Promise((resolve) => setTimeout(resolve, delay));
    lastGeocodeRequestAt = Date.now();
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", address);
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("limit", "1");
    const response = await fetch(url, { signal, headers: { "Accept-Language": "en" } });
    if (!response.ok) throw new Error(`Address search failed (HTTP ${response.status}).`);
    const results = await response.json();
    if (!results.length) throw new Error(`Could not find this address: ${address}`);
    return {
      latitude: Number(results[0].lat),
      longitude: Number(results[0].lon),
      label: results[0].display_name
    };
  });
  geocodeQueue = request.catch(() => {});
  return request;
}

async function searchMapRoute() {
  if (!requireAdmin()) return;
  const restaurant = restaurants.find((item) => item.id === routeRestaurantSelect.value);
  const destinationAddress = routeToAddressInput.value.trim();
  if (!restaurant) return toastMsg("Choose a restaurant for the route origin.");
  if (!destinationAddress) return toastMsg("Enter the customer's full delivery address.");
  routeSearchButton.disabled = true;
  routeSearchStatus.textContent = "Finding the customer address and road route…";
  if (routeSearchLayers) routeSearchLayers.clearLayers();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const selectedOrder = orders.find((item) => item.id === routeSearchOrderSelect.value);
    const hasMatchingLiveCustomerLocation = selectedOrder?.locationSharing &&
      selectedOrder.customerAddress?.trim().toLowerCase() === destinationAddress.toLowerCase() &&
      Number.isFinite(Number(selectedOrder.customerLatitude)) &&
      Number.isFinite(Number(selectedOrder.customerLongitude));
    const destination = hasMatchingLiveCustomerLocation ? {
      latitude: Number(selectedOrder.customerLatitude),
      longitude: Number(selectedOrder.customerLongitude),
      label: `Live customer GPS · ${destinationAddress}`
    } : await geocodeAddress(destinationAddress, controller.signal);
    if (!initializeRouteMap()) throw new Error("The map is unavailable. Reload the page and try again.");
    const origin = restaurantCoordinates(restaurant, restaurants.indexOf(restaurant));
    const routeUrl = `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;
    const response = await fetch(routeUrl, { signal: controller.signal });
    if (!response.ok) throw new Error(`Road route search failed (HTTP ${response.status}).`);
    const routeData = await response.json();
    const result = routeData.routes?.[0];
    if (!result) throw new Error("No driving route was found between these addresses.");

    routeSearchLayers.clearLayers();
    const path = result.geometry.coordinates.map(([longitude, latitude]) => [latitude, longitude]);
    if (selectedOrder?.customerAddress?.trim().toLowerCase() === destinationAddress.toLowerCase()) {
      const savedRoute = {
        address: selectedOrder.customerAddress,
        restaurant: restaurant.id,
        status: "ready",
        coordinates: path,
        distance: result.distance,
        duration: result.duration
      };
      automaticRoutes.set(selectedOrder.id, savedRoute);
      routeMapNeedsRefit = true;
      if (!hasMatchingLiveCustomerLocation) {
        selectedOrder.customerLatitude = destination.latitude;
        selectedOrder.customerLongitude = destination.longitude;
        selectedOrder.geocodedCustomerAddress = selectedOrder.customerAddress;
      }
      selectedOrder.roadRoute = savedRoute;
      save();
    }
    const line = L.polyline(path, { color: "#3978ff", weight: 5, opacity: 0.85 }).addTo(routeSearchLayers);
    const originIcon = L.divIcon({ className: "", html: '<div class="route-point"></div>', iconSize: [15, 15], iconAnchor: [7, 7] });
    const destinationIcon = L.divIcon({ className: "", html: '<div class="customer-map-icon" aria-label="Customer destination">⌂</div>', iconSize: [30, 30], iconAnchor: [15, 15] });
    L.marker(origin, { icon: originIcon }).bindPopup(`<b>From: ${escapeHTML(restaurant.name)}</b><br>${escapeHTML(restaurant.address)}`).addTo(routeSearchLayers);
    L.marker([destination.latitude, destination.longitude], { icon: destinationIcon })
      .bindPopup(`<b>To: Customer</b><br>${escapeHTML(destination.label)}`).addTo(routeSearchLayers);
    routeMap.fitBounds(line.getBounds().pad(0.12), { maxZoom: 14, animate: false });
    routeSearchStatus.textContent = `Route found · ${restaurant.address} → ${destination.label} · ${Math.round(result.distance / 100) / 10} km · about ${Math.round(result.duration / 60)} min.`;
    if (selectedOrder?.customerAddress?.trim().toLowerCase() === destinationAddress.toLowerCase()) updateRouteMap();
    requestAnimationFrame(() => routeMap.invalidateSize());
  } catch (error) {
    const message = error.name === "AbortError"
      ? "Address or route search timed out. Check your connection and try again."
      : error.message || "Could not find this route.";
    routeSearchStatus.textContent = message;
    toastMsg(message);
  } finally {
    clearTimeout(timeout);
    routeSearchButton.disabled = false;
  }
}

async function buildAutomaticOrderRoute(order) {
  if (!order.customerAddress?.trim() || order.status === "Delivered" || order.status === "Cancelled") return;
  const address = order.customerAddress.trim();
  const restaurant = restaurants.find((item) => item.name === order.restaurant);
  const restaurantKey = restaurant?.id || order.restaurant;
  const cached = automaticRoutes.get(order.id);
  if (cached?.address === address && cached.restaurant === restaurantKey &&
      (cached.status === "loading" || cached.status === "ready" || cached.status === "failed")) return;
  if (order.roadRoute?.address === address && order.roadRoute.restaurant === restaurantKey &&
      Array.isArray(order.roadRoute.coordinates) && order.roadRoute.coordinates.length > 1) {
    automaticRoutes.set(order.id, { ...order.roadRoute, status: "ready" });
    updateRouteMap();
    return;
  }

  const route = { address, restaurant: restaurantKey, status: "loading", coordinates: null };
  automaticRoutes.set(order.id, route);
  updateRouteMap();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const geocodingAddress = /\bindia\b/i.test(address)
      ? address
      : /\btamil nadu\b/i.test(address) ? `${address}, India` : `${address}, Tamil Nadu, India`;
    const hasSavedGeocode = order.geocodedCustomerAddress === address &&
      Number.isFinite(Number(order.customerLatitude)) &&
      Number.isFinite(Number(order.customerLongitude));
    const destination = order.locationSharing &&
      Number.isFinite(Number(order.customerLatitude)) &&
      Number.isFinite(Number(order.customerLongitude))
      ? { latitude: Number(order.customerLatitude), longitude: Number(order.customerLongitude) }
      : hasSavedGeocode
        ? { latitude: Number(order.customerLatitude), longitude: Number(order.customerLongitude) }
        : await geocodeAddress(geocodingAddress, controller.signal);
    const origin = restaurantCoordinates(restaurant, Math.max(0, restaurants.indexOf(restaurant)));
    const routeUrl = `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;
    const response = await fetch(routeUrl, { signal: controller.signal });
    if (!response.ok) throw new Error(`Road route search failed (HTTP ${response.status}).`);
    const routeData = await response.json();
    const result = routeData.routes?.[0];
    if (!result) throw new Error("No driving route was found for this delivery address.");

    order.customerLatitude = destination.latitude;
    order.customerLongitude = destination.longitude;
    order.geocodedCustomerAddress = address;
    route.status = "ready";
    route.coordinates = result.geometry.coordinates.map(([longitude, latitude]) => [latitude, longitude]);
    route.distance = result.distance;
    route.duration = result.duration;
    order.roadRoute = { ...route, restaurant: restaurantKey };
    routeMapNeedsRefit = true;
    save();
    updateRouteMap();
    renderDelivery();
  } catch (error) {
    route.status = "failed";
    route.error = error.name === "AbortError"
      ? "Address or route lookup timed out. Check your connection."
      : error.message || "Could not find a road route.";
    updateRouteMap();
    renderDelivery();
  } finally {
    clearTimeout(timeout);
  }
}

function restaurantCoordinates(restaurant, index) {
  if (restaurant && restaurant.latitude !== null && restaurant.latitude !== undefined &&
      restaurant.longitude !== null && restaurant.longitude !== undefined &&
      Number.isFinite(Number(restaurant.latitude)) && Number.isFinite(Number(restaurant.longitude))) {
    return [Number(restaurant.latitude), Number(restaurant.longitude)];
  }
  return [11.0168 + index * 0.003, 76.9558 + index * 0.004];
}

function customerCoordinates(order, restaurantPoint, index) {
  const latitude = Number(order.customerLatitude);
  const longitude = Number(order.customerLongitude);
  const hasCurrentLocation = order.locationSharing &&
      order.customerLatitude !== null && order.customerLatitude !== undefined &&
      order.customerLongitude !== null && order.customerLongitude !== undefined &&
      Number.isFinite(latitude) && Number.isFinite(longitude) &&
      Math.abs(latitude) <= 90 && Math.abs(longitude) <= 180;
  const hasGeocodedAddress = order.geocodedCustomerAddress === order.customerAddress &&
      order.customerLatitude !== null && order.customerLatitude !== undefined &&
      order.customerLongitude !== null && order.customerLongitude !== undefined &&
      Number.isFinite(latitude) && Number.isFinite(longitude) &&
      Math.abs(latitude) <= 90 && Math.abs(longitude) <= 180;
  if (hasCurrentLocation || hasGeocodedAddress) {
    return [latitude, longitude];
  }
  const angle = (index + 1) * 2.399;
  return [
    restaurantPoint[0] + Math.sin(angle) * 0.012,
    restaurantPoint[1] + Math.cos(angle) * 0.014
  ];
}

function routeCoordinates(start, end) {
  const latitudeOffset = (end[0] - start[0]) * 0.025;
  const longitudeOffset = (end[1] - start[1]) * 0.025;
  return [
    start,
    [start[0] + (end[0] - start[0]) * 0.35 - longitudeOffset, start[1] + (end[1] - start[1]) * 0.35 + latitudeOffset],
    [start[0] + (end[0] - start[0]) * 0.7 + longitudeOffset, start[1] + (end[1] - start[1]) * 0.7 - latitudeOffset],
    end
  ];
}

function routePosition(points, progress) {
  const scaledProgress = Math.min(1, progress) * (points.length - 1);
  const segment = Math.min(points.length - 2, Math.floor(scaledProgress));
  const segmentProgress = scaledProgress - segment;
  return [
    points[segment][0] + (points[segment + 1][0] - points[segment][0]) * segmentProgress,
    points[segment][1] + (points[segment + 1][1] - points[segment][1]) * segmentProgress
  ];
}

function initializeRouteMap() {
  if (routeMap || !window.L) return Boolean(routeMap);

  routeMapContainer.textContent = "";
  routeMap = L.map(routeMapContainer, { scrollWheelZoom: false }).setView([11.3, 77.4], 7);
  routeSearchLayers = L.layerGroup().addTo(routeMap);
  const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(routeMap);
  tiles.on("tileerror", () => {
    routeMapStatus.textContent = "Map tiles could not load. Check your internet connection. Agent movement is simulated, not live GPS.";
  });
  routeMapTimer = setInterval(updateRouteMap, 2000);
  return true;
}

function updateRouteMap() {
  if (!initializeRouteMap()) {
    routeMapContainer.textContent = "Map could not load. Check your internet connection and reload the page.";
    routeMapStatus.textContent = "The map library is unavailable. This demo does not use delivery-agent GPS.";
    return;
  }

  const activeDeliveries = orders.filter((order) => order.status !== "Delivered" && order.status !== "Cancelled");
  const recentlyArrived = orders.filter((order) =>
    order.status === "Delivered" && Number.isFinite(Number(order.deliveredAt)) &&
    Date.now() - Number(order.deliveredAt) <= recentlyArrivedMapWindowMs
  );
  const deliveries = [...activeDeliveries, ...recentlyArrived];
  const visibleIds = new Set(deliveries.map((order) => order.id));
  let routesChanged = false;
  const restaurantIds = new Set(restaurants.map((restaurant) => restaurant.id));
  restaurantMarkers.forEach((marker, id) => {
    if (restaurantIds.has(id)) return;
    routeMap.removeLayer(marker);
    restaurantMarkers.delete(id);
  });
  restaurants.forEach((restaurant, index) => {
    let marker = restaurantMarkers.get(restaurant.id);
    const coordinates = restaurantCoordinates(restaurant, index);
    if (!marker) {
      const icon = L.divIcon({ className: "", html: '<div class="restaurant-map-icon" aria-label="Restaurant">🍴</div>', iconSize: [34, 34], iconAnchor: [17, 17] });
      marker = L.marker(coordinates, { icon }).addTo(routeMap);
      restaurantMarkers.set(restaurant.id, marker);
    } else {
      marker.setLatLng(coordinates);
    }
    const osmLink = restaurant.osmType && restaurant.osmId
      ? `<br><a href="https://www.openstreetmap.org/${escapeHTML(restaurant.osmType)}/${escapeHTML(restaurant.osmId)}" target="_blank" rel="noopener noreferrer">OpenStreetMap listing</a>`
      : "";
    marker.bindPopup(`<b>${escapeHTML(restaurant.name)}</b><br>${escapeHTML(restaurant.address)}<br>Mapped restaurant location${osmLink}`);
  });
  liveRoutes.forEach((route, id) => {
    if (visibleIds.has(id)) return;
    routeMap.removeLayer(route.line);
    routeMap.removeLayer(route.start);
    routeMap.removeLayer(route.destination);
    routeMap.removeLayer(route.customer);
    routeMap.removeLayer(route.agent);
    liveRoutes.delete(id);
    routeProgress.delete(id);
    routesChanged = true;
  });

  deliveries.forEach((order, index) => {
    let route = liveRoutes.get(order.id);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.name === order.restaurant);
    const restaurant = restaurantIndex >= 0 ? restaurants[restaurantIndex] : null;
    const start = restaurantCoordinates(restaurant, Math.max(0, restaurantIndex));
    const end = customerCoordinates(order, start, index);
    if (!automaticRoutes.has(order.id) && order.roadRoute &&
        order.roadRoute.address === order.customerAddress &&
        order.roadRoute.restaurant === (restaurant?.id || order.restaurant)) {
      automaticRoutes.set(order.id, { ...order.roadRoute, status: "ready" });
    }
    const automaticRoute = automaticRoutes.get(order.id);
    const points = automaticRoute?.status === "ready" &&
        automaticRoute.address === order.customerAddress &&
        automaticRoute.restaurant === (restaurant?.id || order.restaurant)
      ? automaticRoute.coordinates
      : routeCoordinates(start, end);
    if (!route) {
      const coordinates = points;
      const line = L.polyline(coordinates, { color: automaticRoute?.status === "ready" ? "#3978ff" : "#ff5b35", weight: 5, opacity: 0.75 }).addTo(routeMap);
      const pointIcon = L.divIcon({ className: "", html: '<div class="route-point"></div>', iconSize: [15, 15], iconAnchor: [7, 7] });
      const customerIcon = L.divIcon({ className: "", html: '<div class="customer-map-icon" aria-label="Customer delivery location">⌂</div>', iconSize: [30, 30], iconAnchor: [15, 15] });
      const startMarker = L.marker(coordinates[0], { icon: pointIcon }).bindPopup(`<b>${escapeHTML(order.restaurant)}</b><br>Restaurant pickup`).addTo(routeMap);
      const destination = L.marker(coordinates[coordinates.length - 1], { icon: customerIcon }).addTo(routeMap);
      const agentIcon = L.divIcon({ className: "", html: '<div class="agent-map-icon" aria-label="Simulated delivery agent">🛵</div>', iconSize: [34, 34], iconAnchor: [17, 17] });
      const agent = L.marker(coordinates[0], { icon: agentIcon }).bindTooltip(`${escapeHTML(order.agent)} · ${escapeHTML(order.id)}`);
      route = { coordinates, line, start: startMarker, destination, customer: destination, agent };
      liveRoutes.set(order.id, route);
      const dispatchedAt = Number(order.dispatchedAt || order.expectedDispatchAt || Number(order.createdAt) + preparationWindowMs);
      routeProgress.set(order.id, Math.max(0, Math.min(1, (Date.now() - dispatchedAt) / courierTripWindowMs)));
      routesChanged = true;
    }

    route.coordinates = points;
    route.line.setLatLngs(route.coordinates);
    route.line.setStyle({
      color: automaticRoute?.status === "ready" ? "#3978ff" : "#ff5b35",
      dashArray: automaticRoute?.status === "ready" ? null : "7 7"
    });
    route.start.setLatLng(start);
    route.start.bindPopup(`<b>${escapeHTML(order.restaurant)}</b><br>${escapeHTML(restaurant?.address || "Restaurant pickup")}`);
    route.customer.setLatLng(points[points.length - 1]);
    const locationLabel = order.locationSharing ? "Live customer GPS" :
      order.locationSharingRequested ? "Waiting for customer GPS" : "Last known or approximate demo location";
    route.customer.bindPopup(`<b>${escapeHTML(order.customer)}</b><br>${escapeHTML(order.customerAddress || "Address not on file")}<br>${locationLabel}`);
    if (order.status === "Out for Delivery" && order.agent !== "Not Assigned") {
      if (!routeMap.hasLayer(route.agent)) route.agent.addTo(routeMap);
      const dispatchedAt = Number(order.dispatchedAt || order.expectedDispatchAt || Number(order.createdAt) + preparationWindowMs);
      routeProgress.set(order.id, Math.max(0, Math.min(1, (Date.now() - dispatchedAt) / courierTripWindowMs)));
      route.agent.setLatLng(routePosition(route.coordinates, routeProgress.get(order.id)));
    } else if (order.status === "Delivered" && recentlyArrived.includes(order)) {
      if (!routeMap.hasLayer(route.agent)) route.agent.addTo(routeMap);
      route.agent.setLatLng(route.coordinates[route.coordinates.length - 1]);
      route.agent.setTooltipContent(`${escapeHTML(order.agent)} · ${escapeHTML(order.id)} · Arrived`);
    } else if (routeMap.hasLayer(route.agent)) {
      routeMap.removeLayer(route.agent);
    }
  });

  const automaticOrders = activeDeliveries.filter((order) => order.customerAddress?.trim());
  automaticOrders.forEach((order) => { void buildAutomaticOrderRoute(order); });
  const liveCustomerCount = activeDeliveries.filter((order) => order.locationSharing).length;
  const routeLoadingCount = automaticOrders.filter((order) => automaticRoutes.get(order.id)?.status === "loading").length;
  const routeFailedCount = automaticOrders.filter((order) => automaticRoutes.get(order.id)?.status === "failed").length;
  const approximateRestaurantCount = restaurants.filter((restaurant) =>
    restaurant.latitude === null || restaurant.latitude === undefined ||
    restaurant.longitude === null || restaurant.longitude === undefined
  ).length;
  const erodeRestaurantCount = localRestaurantSeeds.filter((restaurant) => restaurant.id.startsWith("ER")).length;
  routeMapStatus.textContent = `${activeDeliveries.length} active ${activeDeliveries.length === 1 ? "route" : "routes"} · ${recentlyArrived.length} recently arrived · ${routeLoadingCount ? `${routeLoadingCount} address route(s) loading · ` : ""}${routeFailedCount ? `${routeFailedCount} route lookup(s) failed · ` : ""}${liveCustomerCount} customer GPS ${liveCustomerCount === 1 ? "share" : "shares"} active · ${erodeRestaurantCount} mapped Erode restaurant pins · restaurant pins are fixed mapped locations, not live restaurant GPS · demo schedule: 30 min prep + 10 min courier · courier GPS simulated${approximateRestaurantCount ? ` · ${approximateRestaurantCount} approximate restaurant pin(s)` : ""}`;
  if (mapFocus === "erode" && (routesChanged || routeMapNeedsRefit)) {
    const markers = localRestaurantSeeds
      .filter((restaurant) => restaurant.id.startsWith("ER"))
      .map((restaurant) => restaurantMarkers.get(restaurant.id))
      .filter(Boolean);
    if (markers.length) routeMap.fitBounds(L.featureGroup(markers).getBounds().pad(0.15), { maxZoom: 12, animate: false });
    routeMapNeedsRefit = false;
  } else if (deliveries.length && (routesChanged || routeMapNeedsRefit)) {
    const bounds = L.featureGroup([
      ...Array.from(liveRoutes.values()).flatMap((route) => [route.line, route.start, route.customer, ...(routeMap.hasLayer(route.agent) ? [route.agent] : [])]),
      ...restaurantMarkers.values()
    ]).getBounds();
    routeMap.fitBounds(bounds.pad(0.15), { maxZoom: 14, animate: false });
    routeMapNeedsRefit = false;
  }
  requestAnimationFrame(() => routeMap.invalidateSize());
}

function renderDashboard() {
  const sales = orders.filter((order) => order.status === "Delivered").reduce((sum, order) => sum + order.total, 0);
  const active = orders.filter((order) => order.status === "Out for Delivery").length;
  byId("mOrders").textContent = orders.length;
  byId("mRevenue").textContent = "₹" + sales;
  byId("mActive").textContent = active;
  byId("mRest").textContent = restaurants.length;
  byId("kPending").textContent = orders.filter((order) => order.status === "Pending").length;
  byId("kPrep").textContent = orders.filter((order) => order.status === "Preparing").length;
  byId("kOut").textContent = active;
  byId("feed").innerHTML = orders.slice(0, 5).map((order) => `
    <div class="feedrow"><div><b>${escapeHTML(order.id)}</b> · ${escapeHTML(order.customer)}<br>
      <small>${escapeHTML(order.restaurant)} · ${order.items.length} item(s)</small></div>
      <span class="status ${statusClass(order.status)}">${escapeHTML(order.status)}</span></div>`).join("");
  drawChart("dashChart", [80, 120, 95, 150, 130, 180, sales || 70]);
}

function renderRestaurants() {
  restCount.textContent = restaurants.length + " total";
  restList.innerHTML = restaurants.map((restaurant) => `
    <div class="rest"><div class="resticon">🍽</div><h3>${escapeHTML(restaurant.name)}</h3>
      <p>${escapeHTML(restaurant.cat)} · ${escapeHTML(restaurant.address)}</p>
      <small>${restaurant.osmId ? `Mapped location · ${Number(restaurant.latitude).toFixed(5)}, ${Number(restaurant.longitude).toFixed(5)} · <a href="https://www.openstreetmap.org/${escapeHTML(restaurant.osmType)}/${escapeHTML(restaurant.osmId)}" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>` : `Owner: ${escapeHTML(restaurant.owner)} · ${escapeHTML(restaurant.phone)}`}</small>
      <div class="stars" aria-label="5 out of 5 stars">★★★★★</div></div>`).join("");
}

function renderOrders() {
  const query = searchInput.value.toLowerCase();
  const list = orders.filter((order) =>
    (filter === "All" || order.priority === filter || order.status === filter) &&
    (`${order.id} ${order.customer} ${order.restaurant}`).toLowerCase().includes(query)
  );

  ordersTable.innerHTML = list.length ? `<div class="table-wrap"><table><thead><tr>
    <th>Order</th><th>Customer & delivery address</th><th>Restaurant</th><th>Items</th><th>Amount</th><th>Type</th><th>Status</th><th>45-min promise</th><th>Payment</th><th>Actions</th>
    </tr></thead><tbody>${list.map((order) => `<tr>
      <td><b>${escapeHTML(order.id)}</b><br><small>${escapeHTML(order.created)}</small></td>
      <td><b>${escapeHTML(order.customer)}</b><br><small>${escapeHTML(order.phone)} · ${escapeHTML(order.customerAddress || "Address not on file")}</small></td>
      <td>${escapeHTML(order.restaurant)}</td>
      <td>${order.items.map((item) => `${escapeHTML(item.name)} × ${Number(item.qty)}`).join(", ")}</td>
        <td><b>₹${Number(order.total)}</b>${Number(order.fastOrderFee) ? `<br><small>Includes ₹${Number(order.fastOrderFee)} fast-order fee</small>` : ""}</td>
      <td class="${order.priority === "Priority" ? "priority" : ""}">${order.priority === "Priority" ? "⚡ " : ""}${escapeHTML(order.priority)}</td>
      <td><span class="status ${statusClass(order.status)}">${escapeHTML(order.status)}</span></td>
      <td>${escapeHTML(deliveryPromiseLabel(order))}</td>
      <td>${order.paymentStatus === "Paid" ? `<span class="status delivered">Paid</span>` : `<button class="btn blue mini" data-order-action="pay" data-order-id="${escapeHTML(order.id)}">Pay by QR</button>`}</td>
      <td><div class="actions">${order.status !== "Delivered" && order.status !== "Cancelled" ?
        `<button class="btn mini" data-order-action="next" data-order-id="${escapeHTML(order.id)}">Next</button>
         <button class="btn red mini" data-order-action="cancel" data-order-id="${escapeHTML(order.id)}">Cancel</button>` : ""}</div></td>
    </tr>`).join("")}</tbody></table></div>` : `<div class="empty">No matching orders.</div>`;
}

function renderMyOrders() {
  if (currentSession?.role !== "user") {
    myOrdersList.innerHTML = "";
    return;
  }
  const userOrders = orders.filter((order) => order.customerEmail === currentSession.email);
  myOrdersList.innerHTML = userOrders.length ? `<div class="table-wrap"><table><thead><tr>
    <th>Order</th><th>Restaurant</th><th>Items</th><th>Total</th><th>Status</th><th>Delivery</th><th>Payment</th>
    </tr></thead><tbody>${userOrders.map((order) => `<tr>
      <td><b>${escapeHTML(order.id)}</b><br><small>${escapeHTML(order.created)}</small></td>
      <td>${escapeHTML(order.restaurant)}</td>
      <td>${order.items.map((item) => `${escapeHTML(item.name)} × ${Number(item.qty)}`).join(", ")}</td>
      <td><b>₹${Number(order.total)}</b>${Number(order.fastOrderFee) ? `<br><small>Includes ₹${Number(order.fastOrderFee)} fast-order fee</small>` : ""}</td>
      <td><span class="status ${statusClass(order.status)}">${escapeHTML(order.status)}</span></td>
      <td>${escapeHTML(deliveryStageLabel(order))}<br><small>${escapeHTML(deliveryPromiseLabel(order))}</small></td>
      <td>${order.paymentStatus === "Paid" ? `<span class="status delivered">Paid</span>` :
        order.status === "Cancelled" ? "Cancelled" :
          `<button class="btn blue mini" data-user-order-action="pay" data-order-id="${escapeHTML(order.id)}">Pay ₹${Number(order.total)}</button>`}</td>
    </tr>`).join("")}</tbody></table></div>` : `<div class="empty">No orders yet. Browse the menu to place your first order.</div>`;
}

function renderDelivery() {
  const active = orders.filter((order) => order.status !== "Delivered" && order.status !== "Cancelled");
  const selectedOrderId = deliveryOrderSelect.value;
  deliveryOrderSelect.innerHTML = active.length ? active.map((order) =>
    `<option value="${escapeHTML(order.id)}">${escapeHTML(order.id)} · ${escapeHTML(order.customer)} · ₹${Number(order.total)}</option>`
  ).join("") : `<option value="">No active orders</option>`;
  if (active.some((order) => order.id === selectedOrderId)) {
    deliveryOrderSelect.value = selectedOrderId;
  }
  renderRouteRestaurantOptions();
  syncSelectedOrderRouteAddresses();

  tracking.innerHTML = orders.length ? `<div class="table-wrap"><table><thead><tr>
    <th>Order</th><th>Customer & delivery address</th><th>Agent</th><th>Status</th><th>Journey / ETA</th><th>45-min promise</th><th>Progress</th><th>Location sharing</th>
    </tr></thead><tbody>${orders.map((order) => `<tr>
      <td><b>${escapeHTML(order.id)}</b></td><td>${escapeHTML(order.customer)}<br><small>${escapeHTML(order.customerAddress || "Address not on file")}</small></td><td>${escapeHTML(order.agent)}</td>
      <td><span class="status ${statusClass(order.status)}">${escapeHTML(order.status)}</span></td>
      <td>${order.customerAddress ? (() => {
        const route = automaticRoutes.get(order.id);
        const journey = deliveryStageLabel(order);
        if (route?.status === "ready") return `${escapeHTML(journey)}<br><small>Road route · ${Math.round(route.distance / 100) / 10} km</small>`;
        if (route?.status === "loading") return `${escapeHTML(journey)}<br><small>Finding address and road route…</small>`;
        if (route?.status === "failed") return `${escapeHTML(journey)}<br><small>${escapeHTML(route.error)}</small>`;
        return `${escapeHTML(journey)}<br><small>Preparing automatic route…</small>`;
      })() : escapeHTML(deliveryStageLabel(order))}</td>
      <td>${escapeHTML(deliveryPromiseLabel(order))}</td>
      <td><div class="timeline">${["Pending", "Preparing", "Out for Delivery", "Delivered"].map((status, index, flow) =>
        `<div class="step ${order.status !== "Cancelled" && flow.indexOf(order.status) >= index ? "done" : ""}">${status}</div>`
      ).join("")}</div></td>
      <td>${order.locationSharing ? `<span class="status delivered">Live GPS</span>` : order.locationSharingRequested ? `<span class="status preparing">Waiting for GPS</span>` : "Not sharing"}
        ${order.locationSharingRequested ? `<button class="btn gray mini" data-order-action="stop-location" data-order-id="${escapeHTML(order.id)}">Stop</button>` : ""}</td>
    </tr>`).join("")}</tbody></table></div>` : `<div class="empty">No orders.</div>`;
  updateRouteMap();
}

function renderReports() {
  const delivered = orders.filter((order) => order.status === "Delivered");
  const sales = delivered.reduce((sum, order) => sum + order.total, 0);
  const cancelled = orders.filter((order) => order.status === "Cancelled").length;
  gross.textContent = "₹" + sales;
  deliveredCount.textContent = delivered.length;
  cancelledCount.textContent = cancelled;
  averageOrder.textContent = "₹" + (delivered.length ? Math.round(sales / delivered.length) : 0);

  const byRestaurant = {};
  delivered.forEach((order) => {
    byRestaurant[order.restaurant] = (byRestaurant[order.restaurant] || 0) + order.total;
  });
  const salesValues = Object.values(byRestaurant);
  restSales.innerHTML = salesValues.length ? Object.entries(byRestaurant).map(([name, amount]) => `
    <div class="restaurant-sale"><div><b>${escapeHTML(name)}</b><b>₹${amount}</b></div>
      <div class="sales-track"><div style="width:${amount / Math.max(1, ...salesValues) * 100}%"></div></div></div>`).join("") :
    `<div class="empty">Delivered sales will appear here.</div>`;
  drawChart("repChart", [80, 120, 95, 150, 130, 180, sales || 70]);
}

function renderCustomers() {
  const customerMap = {};
  orders.forEach((order) => {
    if (!customerMap[order.phone]) {
      customerMap[order.phone] = { name: order.customer, phone: order.phone, address: order.customerAddress || "Address not on file", count: 0, spend: 0, last: order.created };
    }
    customerMap[order.phone].count++;
    customerMap[order.phone].spend += order.total;
    customerMap[order.phone].last = order.created;
  });

  const customers = Object.values(customerMap);
  customerTable.innerHTML = customers.length ? `<div class="table-wrap"><table><thead><tr>
    <th>Customer</th><th>Phone</th><th>Delivery address</th><th>Orders</th><th>Total Spend</th><th>Last Order</th>
    </tr></thead><tbody>${customers.map((customer) => `<tr>
      <td><b>${escapeHTML(customer.name)}</b></td><td>${escapeHTML(customer.phone)}</td><td>${escapeHTML(customer.address)}</td><td>${customer.count}</td>
      <td><b>₹${customer.spend}</b></td><td>${escapeHTML(customer.last)}</td>
    </tr>`).join("")}</tbody></table></div>` : `<div class="empty">No customers.</div>`;
}

function drawChart(id, values) {
  const max = Math.max(1, ...values);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  byId(id).innerHTML = values.map((value, index) =>
    `<div class="barcol"><i style="height:${value / max * 145}px"></i>${days[index]}</div>`
  ).join("");
}

function renderAll() {
  const newCompensations = applyDeliveryGuarantees();
  if (newCompensations.length) {
    save();
    toastMsg(`45-minute promise missed. Free food assigned for ${newCompensations.map((order) => order.id).join(", ")}.`);
  }
  renderFoodModal();
  if (currentSession?.role === "admin") {
    renderDashboard();
    renderRestaurants();
    renderOrders();
    renderDelivery();
    renderReports();
    renderCustomers();
  } else if (currentSession?.role === "user") {
    renderMyOrders();
  }
}

function toastMsg(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

appNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button) showPage(button.dataset.page);
});

document.querySelectorAll("[data-page-link]").forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.pageLink));
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const actions = {
      "browse-menu": browseMenu,
      "view-erode-restaurants": showErodeRestaurants,
      "open-order": openOrder,
      "back-to-menu": () => {
        closeOrder();
        browseMenu();
      },
      "close-order": closeOrder,
      "close-payment": closePayment,
      "place-order": placeOrder,
      "add-restaurant": addRestaurant,
      "locate-restaurant": locateRestaurant,
      "share-customer-location": shareCustomerLocation,
      "load-order-route": loadOrderRouteAddresses,
      "search-map-route": searchMapRoute,
      "assign-agent": assignAgent,
      "simulate-payment": simulatePayment,
      logout: signOut
    };
    const userActions = new Set([
      "browse-menu", "open-order", "back-to-menu", "close-order", "close-payment",
      "place-order", "share-customer-location", "simulate-payment", "logout"
    ]);
    if (currentSession?.role === "user" && !userActions.has(button.dataset.action)) {
      return toastMsg("That action is only available to administrators.");
    }
    actions[button.dataset.action]?.();
  });
});

document.querySelectorAll("[data-auth-role]").forEach((button) => {
  button.addEventListener("click", () => showAuthRole(button.dataset.authRole));
});
document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const showRegister = button.dataset.authMode === "register";
    userLoginForm.hidden = showRegister;
    userRegisterForm.hidden = !showRegister;
    authStatus.textContent = "";
  });
});
adminAuthForm.addEventListener("submit", submitAdminAuth);
userLoginForm.addEventListener("submit", submitUserLogin);
userRegisterForm.addEventListener("submit", submitUserRegistration);

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter, button));
});

searchInput.addEventListener("input", searchOrders);
orderTypeSelect.addEventListener("change", renderCheckoutSummary);
menuCategories.addEventListener("click", (event) => {
  const button = event.target.closest("[data-menu-category]");
  if (!button) return;
  activeMenuCategory = button.dataset.menuCategory;
  renderFoodModal();
});
menuSearch.addEventListener("input", renderFoodModal);
routeRestaurantSelect.addEventListener("change", updateRouteRestaurantAddress);
routeSearchOrderSelect.addEventListener("change", () => {
  mapFocus = null;
  routeMapNeedsRefit = true;
  syncSelectedOrderRouteAddresses();
});
routeToAddressInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchMapRoute();
});
foods.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food-index]");
  if (button) toggleFood(Number(button.dataset.foodIndex), Number(button.dataset.quantityChange));
});
ordersTable.addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-action]");
  if (!button) return;
  if (button.dataset.orderAction === "next") nextStatus(button.dataset.orderId);
  if (button.dataset.orderAction === "cancel") cancelOrder(button.dataset.orderId);
  if (button.dataset.orderAction === "pay") openPayment(button.dataset.orderId);
  if (button.dataset.orderAction === "stop-location") stopOrderLocation(button.dataset.orderId);
});
myOrdersList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-user-order-action='pay']");
  if (button) openPayment(button.dataset.orderId);
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeOrder();
});
paymentModal.addEventListener("click", (event) => {
  if (event.target === paymentModal) closePayment();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) closeOrder();
  if (event.key === "Escape" && paymentModal.classList.contains("show")) closePayment();
});

if (advanceAutomaticDeliveries()) save();
initializeAuthentication();
setInterval(() => {
  const scheduleChanged = advanceAutomaticDeliveries();
  const newlyAssigned = applyDeliveryGuarantees();
  if (scheduleChanged || newlyAssigned.length) {
    save();
    if (currentSession) renderAll();
    if (currentSession?.role === "admin" && newlyAssigned.length) {
      toastMsg(`45-minute promise missed. Free food assigned for ${newlyAssigned.map((order) => order.id).join(", ")}.`);
    }
    return;
  }
  if (currentSession?.role === "admin" && byId("delivery").classList.contains("active")) renderDelivery();
}, 15000);