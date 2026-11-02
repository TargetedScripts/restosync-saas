/**
 * RestoSync SaaS - Store Configuration
 * Tenant: Bangkok Thai Takeaway (Palmerston North, NZ)
 */

window.tenantConfig = {
  tenantId: "bangkokthaipalmy",
  restaurantName: "Bangkok Thai Takeaway",
  tagline: "Authentic Thai Cuisine in Palmerston North",
  
  // Standarisasi key logo URL
  logoUrl: "https://firebasestorage.googleapis.com/v0/b/restosync-saas.firebasestorage.app/o/tenants%2Fbangkokthaipalmy%2Fimages%2F1793590457349_BangkokThaiLogo.png?alt=media&token=d6e47dcd-c56c-4eef-ac4a-222d1adb8bff",
  
  // Opsi Akses Template Website (Blog & Shop)
  templates: {
    blog: { enabled: true, label: "Chef's Notes & Specials", url: "blog.html" },
    shop: { enabled: true, label: "Online Order Menu", url: "shop.html" }
  },
  
  store: {
    name: "Bangkok Thai Takeaway",
    phone: "06 222 3375",
    address: "287 Main Street, Palmerston North Central",
    gstNumber: "123-456-789",
    currency: "NZD",
    gstRate: 0.15,
    publicHolidaySurcharge: 0.15
  },
  
  branding: {
    logo: "images/BangkokThaiLogo.png",
    altLogo: "images/BTPLogo.jpg",
    heroImages: [
      "images/Hero01.jpg",
      "images/Hero02.jpg",
      "images/Hero03.jpg"
    ]
  },

  enabledModules: {
    pos: true,
    kds: true,
    profile: true,
    branding: true,
    menu: true,
    fcp: true,
    analytics: true,
    dailySetup: true,
    orderTrackingBoard: true,
    staffRoster: false,
    recipeCosting: false,
    tableFloorPlan: false,
    hotelRoomCharge: false
  }
};

console.log("BangkokThaiPalmy tenant config loaded successfully!");
