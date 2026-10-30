/**
 * RestoSync SaaS - Store Configuration
 * Tenant: Bangkok Thai Takeaway (Palmerston North, NZ)
 */

const RESTOSYNC_CONFIG = {
  store: {
    id: "bangkokthai",
    name: "Bangkok Thai Takeaway",
    tagline: "Authentic Thai Cuisine in Palmerston North",
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

  features: {
    dailySetup: true,
    customizationAndBYO: true,
    orderTrackingBoard: true,
    digitalMenuAndWebsite: true,
    eodZReport: true,
    multiDevicePOS: true,
    staffRoster: false,
    recipeCosting: false,
    tableFloorPlan: false,
    hotelRoomCharge: false,
    mpiFoodSafety: true
  },


};
