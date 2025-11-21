# Implementasi SEO

Dokumentasi implementasi SEO untuk aplikasi SIG SMP YPK Jayapura.

## Fitur SEO yang Diimplementasikan

### 1. **SEO Component** (`resources/js/Components/SEO.tsx`)
Component React yang dapat digunakan di semua halaman untuk mengatur:
- Meta tags (title, description, keywords, robots)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URL
- Structured Data (JSON-LD) untuk rich snippets

### 2. **Default Meta Tags** (`resources/views/app.blade.php`)
Meta tags default yang diterapkan di semua halaman:
- Description dan keywords default
- Open Graph tags dasar
- Twitter Card tags dasar
- Favicon dan Apple Touch Icon

### 3. **Sitemap.xml** (`app/Http/Controllers/SitemapController.php`)
Sitemap dinamis yang di-generate otomatis:
- Homepage
- Halaman statis (sekolah, galeri, tentang)
- Halaman dinamis (detail setiap sekolah)
- Update otomatis berdasarkan `updated_at`

**Akses:** `/sitemap.xml`

### 4. **Robots.txt** (`public/robots.txt`)
Konfigurasi robots.txt:
- Allow semua halaman publik
- Disallow halaman admin dan auth
- Reference ke sitemap.xml

**Catatan:** Update URL sitemap di robots.txt sesuai domain production Anda.

### 5. **Structured Data (Schema.org)**
- **Homepage:** WebSite schema
- **Detail Sekolah:** School schema dengan informasi lengkap:
  - NPSN
  - Alamat dan koordinat geografis
  - Kontak (telepon, email, website)
  - Kepala sekolah
  - Foto sekolah

## Cara Penggunaan

### Menggunakan SEO Component di Halaman

```jsx
import SEO from '@/Components/SEO';

export default function MyPage({ data }) {
    return (
        <Layout>
            <SEO
                title="Judul Halaman"
                description="Deskripsi halaman yang informatif"
                keywords="keyword1, keyword2, keyword3"
                image="/path/to/image.jpg" // Optional
                url="/custom-url" // Optional
                type="article" // atau "website"
            />
            {/* Konten halaman */}
        </Layout>
    );
}
```

### Structured Data untuk Detail Sekolah

Component SEO sudah otomatis menambahkan School schema untuk halaman detail sekolah dengan informasi lengkap.

## Halaman yang Sudah Diupdate

✅ **User Pages:**
- Dashboard (`/`)
- Daftar Sekolah (`/sekolah`)
- Detail Sekolah (`/sekolah/{id}`) - dengan School schema
- Galeri (`/galeri`)
- Tentang (`/tentang`)

## Checklist SEO

- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Structured Data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Favicon
- [x] Mobile-friendly (viewport meta tag)
- [x] Language declaration (lang="id")

## Langkah Selanjutnya

1. **Update robots.txt:** Ganti `https://yourdomain.com` dengan domain production Anda
2. **Submit sitemap ke Google Search Console:** 
   - Masuk ke Google Search Console
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. **Verifikasi di Google Search Console:**
   - Pastikan semua halaman terindeks
   - Monitor structured data dengan Rich Results Test
4. **Optimasi Gambar:**
   - Pastikan semua gambar memiliki alt text
   - Optimasi ukuran gambar untuk loading cepat
5. **Performance:**
   - Pastikan SSR (Server-Side Rendering) aktif untuk SEO yang lebih baik
   - Monitor Core Web Vitals

## Testing Tools

- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **Google Search Console:** https://search.google.com/search-console

## Catatan Penting

1. **SSR (Server-Side Rendering):** Pastikan SSR aktif di `config/inertia.php` untuk SEO optimal
2. **APP_URL:** Pastikan `APP_URL` di `.env` sesuai dengan domain production
3. **Images:** Pastikan semua gambar yang digunakan untuk OG tags dapat diakses secara publik

