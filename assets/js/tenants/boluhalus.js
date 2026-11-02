/**
 * RestoSync SaaS - Store Configuration
 * Tenant: BoluHalus Micro-Cakery (Palmerston North, NZ)
 */

window.tenantConfig = {
    tenantId: "boluhalus",
    restaurantName: "BoluHalus Micro-Cakery",
    tagline: "Artisanal Cakes & Sweet Treats in Palmerston North",
    
    // Standarisasi key logo URL agar otomatis terbaca oleh sistem utama SaaS
    logoUrl: "", // Isi dengan URL Firebase Storage Anda jika sudah ada, atau biarkan kosong untuk mode teks
    
    store: {
        name: "BoluHalus Micro-Cakery",
        address: "Pioneer Highway, Palmerston North",
        phone: "021 123 4567",
        currency: "NZD",
        gstRate: 0.15
    },
    
    branding: {
        logo: "URL_LOGO_ANDA_DI_FIREBASE_STORAGE"
    },

    operatingHours: {
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "Closed",
        Friday: "3:00 PM - 7:00 PM (Pickup)",
        Saturday: "9:00 AM - 1:00 PM (Pickup)",
        Sunday: "Closed"
    },

    menuItems: [
        {
            id: "bh_01",
            name: "Smoked Vanilla Blackberry Loaf",
            category: "Limited Batch",
            price: 45.00,
            promoPrice: null,
            description: "Artisanal butter cake dengan infusi smoked vanilla bean dan selai blackberry buatan sendiri.",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop",
            isAvailable: true,
            isFav: true
        }
    ],

    // Modul aktif standar untuk tenant BoluHalus
    enabledModules: {
        pos: true,
        kds: true,
        profile: true,
        branding: true,
        menu: true,
        fcp: true,
        analytics: true
    }
};

// Backward compatibility agar skrip lama yang membaca RESTOSYNC_CONFIG tetap aman
window.RESTOSYNC_CONFIG = window.tenantConfig;

console.log("BoluHalus custom asset loaded successfully!");
