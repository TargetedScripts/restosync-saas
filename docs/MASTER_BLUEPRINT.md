# RESTOSYNC SAAS — MASTER SYSTEM DOCUMENTATION & ARCHITECTURE BLUEPRINT (PRODUCTION-READY FINAL EDITION)
**Developer / Ecosystem:** TargetedScripts.com (`targetedscripts.com`)  
**Live Repository:** `TedySutedja/restosync-saas` (GitHub Pages)  
**Standard Compliance:** New Zealand Hospitality Standards (GST 15%, IRD 7-Year Tax Record Compliance, MPI Food Control Plan / FCP, Privacy Act 2020, Employment NZ Standards)  

---

## 1. Executive Summary & Modular SaaS Architecture

RestoSync SaaS adalah platform manajemen F&B *all-in-one* berbasis web (*cloud-ready client-side & modular architecture*) yang dirancang khusus untuk memenuhi standar operasional dan regulasi ketat di Selandia Baru. Sistem ini dibangun dengan satu *codebase* fleksibel yang dapat dikonfigurasi secara dinamis (*plug-and-play modules*) untuk melayani berbagai skala usaha:
* **Skala Usaha:** Kelas rumahan (*home kitchen*), *food truck*, *takeaway shop*, kafe, *coffee shop*, *bakery*, restoran kasual, *fine dining*, hingga *hotel F&B outlet*.
* **Control & Licensing:** Berjalan di atas infrastruktur klien (GitHub Pages / web hosting pribadi) dengan mekanisme lisensi terpusat di bawah ekosistem **TargetedScripts.com** yang mendukung penguncian otomatis (*auto-disable*) jika masa berlangganan habis.

---

## 2. Dynamic Modular Feature Toggles (Control Panel Admin)

Administrator Sistem (Bapak Tedy) memiliki kendali penuh melalui file konfigurasi pusat (`assets/js/config.js`) atau *Admin Panel* untuk mengaktifkan (*enable*) atau menonaktifkan (*disable*) modul sesuai dengan paket langganan dan kontrak klien:

| Nama Modul / Fitur | Deskripsi Fungsional | Kontrol Admin (On / Off) | Skala Industri yang Cocok |
| :--- | :--- | :---: | :--- |
| **Daily Manager Setup** | Input stok harian, Food of the Day, Diskon, Fav | `enabled: true/false` | Cafe, Restaurant, Bakery, Fine Dining |
| **Customization & BYO**| Tingkat kepedasan (*spice level*) & BYO Corkage | `enabled: true/false` | Restaurant, Cafe, Bistro |
| **EOD Z-Report & Security**| Tutup kasir harian, GST report, & Manager Void | `enabled: true/false` | Semua skala |
| **Multi-Device PWA POS** | Kasir & order via HP (PWA), Tablet, Desktop | `enabled: true/false` | Semua skala |
| **Order Tracking Board** | Status pesanan live ala Burger King (Preparing/Ready) | `enabled: true/false` | Takeaway, Cafe, Restaurant, Fast Food |
| **Digital Menu & Website** | Katalog dwibahasa (EN/中文) & Web template | `enabled: true/false` | Semua skala |
| **Staff Roster & Shift** | Jadwal kerja & kepatuhan tenaga kerja NZ | `enabled: true/false` | Cafe, Restaurant, Hotel, Bakery |
| **Recipe Costing & Inventory**| Kalkulasi resep & pemotongan stok bahan baku | `enabled: true/false` | Bakery, Coffee Shop, Kitchen |
| **Table Floor Plan & KDS** | Denah meja visual & layar dapur interaktif | `enabled: true/false` | Restaurant, Fine Dining, Cafe |
| **Hotel Room Charge** | Integrasi tagihan F&B ke nomor kamar hotel | `enabled: true/false` | Hotel F&B Outlets |
| **MPI Food Safety (FCP)** | Log suhu digital & daftar cek kebersihan | `enabled: true/false` | Cafe, Bakery, Restaurant, Fine Dining |

---

## 3. Subscription Tiers & Package Scoping

1. **Basic Tier ($150/mo) — Home Kitchen, Takeaway, Food Truck:**
   * *Modul Aktif:* POS Cashier dasar, Menu Catalog dwibahasa, Digital Customer Website, EOD Z-Report, dan Local Storage/JSON DB.
2. **Professional Tier ($250/mo) — Cafe, Coffee Shop, Bakery, Small Restaurant:**
   * *Modul Aktif:* Semua fitur Basic + Staff Roster, Public Holiday Surcharge, Google Sheets DB, MPI Food Safety Logs, Order Tracking Board, serta tambahan khusus *Recipe Costing & Inventory* (untuk Bakery/Coffee Shop) atau *KDS & Table Floor Plan* (untuk Cafe/Restaurant).
3. **Enterprise Tier ($400/mo) — High-Volume Restaurant, Fine Dining, Hotel F&B:**
   * *Modul Aktif:* **Semua modul terbuka penuh (Full Access)** termasuk Multi-Terminal Support, Advanced Multi-Branch Inventory, Firebase Enterprise DB, Hotel Room Charging Integration, dan Audit Trail lengkap untuk kepatuhan IRD 7 tahun.

---

## 4. Digital Customer Website & Template Specifications

Setiap paket langganan mencakup website digital pelanggan dengan spesifikasi desain berikut:
* **No Hero Banner (Minimalist & Fast Loading):** Website dirancang tanpa spanduk/banner besar di bagian atas agar langsung fokus pada katalog menu, memangkas waktu muat (*loading time*), dan memaksimalkan kecepatan transaksi, terutama saat diakses via ponsel (*mobile-first / PWA*).
* **Pilihan 2 Template / Skin Layout (Client Choice):**
  1. **Modern Grid Layout:** Menampilkan menu dalam bentuk kotak visual bergaya modern. Sangat ideal untuk *Takeaway*, *Food Truck*, dan *Fast Food*.
  2. **Classic Menu Book Layout:** Menampilkan daftar menu terstruktur rapi layaknya buku menu fisik restoran. Sangat ideal untuk tempat makan atau *bistro* kasual.

---

## 5. Core Operational Workflows & Modules

### A. Daily Manager Setup & Dynamic Merchandising
* **Daily Stock Input:** Konfirmasi atau pengisian ulang stok harian bahan baku/menu.
* **Dynamic Pricing & Specials:** Pengaturan *Happy Hour*, diskon temporal, dan *Public Holiday Surcharge* (15% standar NZ).
* **Food of the Day & Customization:** Penandaan menu favorit/unggulan ala Subway serta pengaturan tingkat kepedasan (*spice levels*) dan BYO Corkage Fee untuk restoran berizin BYO.

### B. Flexible Multi-Device & PWA Order Touchpoints
* **Mobile PWA:** Digunakan oleh pelayan (*waiters*) untuk mencatat pesanan langsung dari meja tamu.
* **Tablet POS:** Digunakan sebagai kasir berjalan atau stasiun *outdoor/patio*.
* **Desktop Terminal:** Pusat kasir utama untuk pesanan *takeaway*, pembayaran EFTPOS, dan cetak struk.

### C. Real-Time Order Tracking Board (Burger King Style)
* Transparansi status pesanan dalam 3 tahap (*Received ➔ Preparing ➔ Ready to Serve/Collect*) yang terhubung langsung ke KDS dapur dan layar monitor lantai depan.

### D. Financial Reconciliation & Security (EOD & Manager Override)
* **End-of-Day Z-Report:** Rekonsiliasi penjualan harian, akumulasi GST 15% untuk IRD, pencocokan pembayaran EFTPOS vs. Tunai, dan *cash drawer audit*.
* **Manager Override Security:** Pencegahan kecurangan internal di mana tindakan pembatalan (*Void Item*) atau *Refund* wajib mendapatkan persetujuan PIN Manajer.

---

## 6. Real-World Compliance & Safeguards (New Zealand Standards)

1. **Tiered Database & IRD 7-Year Compliance:** Penyimpanan catatan keuangan dan transaksi hingga 7 tahun menggunakan JSON (skala kecil), Google Sheets (menengah), atau Firebase (enterprise).
2. **MPI Food Control Plan (FCP):** Log suhu digital untuk *chiller/freezer*, jadwal sanitasi, dan pelacakan *batch* bahan baku untuk inspeksi *City Council*.
3. **Offline-First & Local Caching:** Menggunakan *IndexedDB/LocalStorage* agar POS tetap berjalan saat koneksi internet terputus dan melakukan *sync* otomatis saat pulih.
4. **Privacy Act 2020 Compliance:** Perlindungan data pribadi pelanggan dengan prinsip *data minimization*.
5. **Managed Onboarding & Hardware:** Layanan pengaturan awal menu oleh TargetedScripts.com serta kompatibilitas dengan printer thermal ESC/POS standar NZ.

## 7. Modular File Structure Strategy (Pemisahan Modul Kode)

Untuk menjaga agar *codebase* tetap ringan dan mudah dikelola, seluruh pengembangan script HTML/JS/CSS **wajib dipecah ke dalam file terpisah berdasarkan fungsinya** (tidak boleh digabung dalam satu file monolitik):
* **`index.html`:** Landing page utama / Core Hub SaaS SaaS / Admin Navigation Dashboard.
* **`menu.html`:** Modul katalog produk dwibahasa (pilihan template *Modern Grid* atau *Classic Menu Book*).
* **`cashier.html`:** Modul POS kasir (kalkulasi GST 15%, EFTPOS, dan *Split Bill*).
* **`staff.html`:** Modul manajemen staf, jadwal *roster*, dan kepatuhan tenaga kerja NZ.
* **`system_architecture_flow.html`:** Peta visual alur sistem dan dokumentasi arsitektur internal.
* **`assets/js/config.js`:** File konfigurasi pusat untuk *Feature Toggles* ($150, $250, $400) dan parameter global.
* **`docs/MASTER_BLUEPRINT.md`:** Dokumentasi master sistem secara utuh.
