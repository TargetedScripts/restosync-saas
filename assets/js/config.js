/**
 * RestoSync SaaS - Global Configuration & License Handler
 * Parent Entity: TargetedScripts (targetedscripts.com)
 */

const RESTOSYNC_CONFIG = {
    appName: "RestoSync SaaS",
    version: "1.0.0",
    tagline: "Your Restaurant, Perfectly Synchronized.",
    parentEntity: "TargetedScripts",
    licenseServerEndpoint: "https://targetedscripts.com/api/verify-license",
    
    // Tiered Packaging Structure
    tiers: {
        BASIC: {
            id: "basic",
            name: "Basic Takeaway",
            price: 150,
            currency: "NZD",
            features: [
                "Customer Digital Menu (Grid/List Bilingual EN/ZH)",
                "Catalog & Price Management",
                "Basic Takeaway & Counter POS",
                "Client-Owned DB (Zero Server Cost)"
            ]
        },
        PROFESSIONAL: {
            id: "professional",
            name: "Professional Dine-In & FCP",
            price: 250,
            currency: "NZD",
            features: [
                "All Basic Features + Firebase Real-Time DB",
                "Waiter Mobile Ordering (Dine-In)",
                "Kitchen Display System (KDS) & Floor Manager",
                "Manager Analytics Dashboard & Financial Reports",
                "MPI Food Control Plan (FCP) Digital Compliance Logs"
            ]
        },
        ENTERPRISE: {
            id: "enterprise",
            name: "Enterprise Multi-Branch & Roster",
            price: 400,
            currency: "NZD",
            features: [
                "All Professional Features",
                "Staff Accounts & Role-Based Access Control",
                "Staff Rostering & Shift Management",
                "Multi-Branch Inventory & Branch Overrides (Up to 3 Branches)"
            ]
        }
    }
};

// Export config for modular usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RESTOSYNC_CONFIG;
}