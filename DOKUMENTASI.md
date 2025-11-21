# Dokumentasi Sistem Antarmuka Pengguna

## Sistem Informasi Geografis Berbasis Web untuk Pemetaan dan Pengelolaan Data Sekolah Menengah Pertama (SMP) Yayasan Pendidikan Kristen (YPK) Kota Jayapura

---

## 1. PENDAHULUAN

### 1.1 Latar Belakang

Dokumentasi ini disusun untuk menjelaskan secara komprehensif mengenai fungsi dan fitur setiap halaman antarmuka pengguna (user interface) dalam Sistem Informasi Geografis (SIG) berbasis web yang dikembangkan untuk pemetaan dan pengelolaan data sekolah menengah pertama di bawah naungan Yayasan Pendidikan Kristen (YPK) Kota Jayapura.

### 1.2 Tujuan Dokumentasi

Dokumentasi ini bertujuan untuk:

1. Memberikan pemahaman menyeluruh mengenai struktur dan fungsi setiap halaman dalam sistem
2. Menjelaskan mekanisme interaksi pengguna dengan berbagai fitur yang tersedia
3. Menjadi panduan referensi bagi pengguna akhir (end user) dan pengembang (developer)
4. Memfasilitasi proses pelatihan dan adopsi sistem oleh pengguna baru

### 1.3 Ruang Lingkup

Dokumentasi ini mencakup penjelasan detail mengenai:

- Halaman-halaman yang dapat diakses oleh pengunjung umum (public pages)
- Halaman autentikasi untuk proses masuk ke sistem
- Halaman-halaman administrasi untuk pengelolaan data

### 1.4 Metodologi

Dokumentasi disusun berdasarkan analisis terhadap komponen antarmuka pengguna yang terlihat (visible components) dan fungsionalitas yang dapat diakses oleh pengguna. Setiap halaman didokumentasikan dengan menjelaskan:

- Lokasi halaman (URL)
- Tujuan dan fungsi halaman
- Komponen visual yang ditampilkan
- Interaksi yang dapat dilakukan pengguna
- Alur kerja (workflow) yang terjadi

---

## 2. STRUKTUR SISTEM

Sistem ini dibagi menjadi tiga kategori utama halaman berdasarkan tingkat akses:

1. **Halaman Publik (Public Pages)**: Dapat diakses tanpa perlu autentikasi
2. **Halaman Autentikasi (Authentication Pages)**: Untuk proses masuk ke sistem
3. **Halaman Administrasi (Administrative Pages)**: Dapat diakses setelah proses autentikasi berhasil

---

## 3. HALAMAN PUBLIK (PUBLIC PAGES)

Halaman publik merupakan bagian sistem yang dapat diakses oleh semua pengunjung tanpa memerlukan proses autentikasi. Halaman-halaman ini dirancang untuk menyediakan informasi mengenai sekolah-sekolah yang terdaftar dalam sistem.

### 3.1 Halaman Beranda (Dashboard User)

**Lokasi:** `/` atau `/user/dashboard`

**Fungsi:** Halaman beranda berfungsi sebagai titik masuk utama bagi pengunjung untuk memperoleh gambaran umum mengenai sistem dan data yang tersedia.

**Komponen Visual:**

1. **Bagian Header:**
    - Judul utama: "Selamat Datang"
    - Deskripsi sistem yang menjelaskan tujuan dan fungsi sistem

2. **Kartu Statistik (Statistical Cards):**
   Sistem menampilkan empat kartu statistik yang memberikan ringkasan data:
    - **Total Sekolah**: Menampilkan jumlah sekolah yang terdaftar, dilengkapi dengan tombol navigasi untuk melihat detail
    - **Total Galeri**: Menampilkan jumlah foto yang tersedia dalam galeri, dengan akses langsung ke halaman galeri
    - **Total Kecamatan**: Menampilkan jumlah kecamatan yang tercakup dalam sistem
    - **Total Kelurahan**: Menampilkan jumlah kelurahan yang tercakup dalam sistem

3. **Bagian Akses Cepat (Quick Access Section):**
   Menyediakan tautan langsung ke halaman-halaman utama:
    - Tautan ke halaman Daftar Sekolah
    - Tautan ke halaman Galeri Foto

4. **Bagian Informasi (Information Section):**
   Menampilkan informasi tambahan mengenai:
    - Kebaruan data yang ditampilkan
    - Kebijakan akses publik terhadap informasi

**Interaksi Pengguna:**

- Pengguna dapat mengklik tombol "Lihat Detail" pada kartu statistik untuk berpindah ke halaman terkait
- Pengguna dapat mengklik tautan di bagian akses cepat untuk navigasi langsung
- Semua interaksi dilakukan melalui klik mouse atau sentuhan pada perangkat layar sentuh

---

### 3.2 Halaman Daftar Sekolah

**Lokasi:** `/sekolah`

**Fungsi:** Halaman ini menyediakan antarmuka untuk menampilkan daftar lengkap sekolah yang terdaftar dalam sistem, dilengkapi dengan kemampuan pencarian, penyaringan (filtering), dan visualisasi geografis melalui peta interaktif.

**Komponen Visual:**

1. **Bagian Pencarian (Search Section):**
    - Kotak pencarian yang memungkinkan pengguna memasukkan kata kunci
    - Sistem pencarian dapat mencari berdasarkan:
        - Nomor Pokok Sekolah Nasional (NPSN)
        - Nama sekolah
        - Alamat sekolah
    - Tombol reset untuk menghapus kata kunci pencarian

2. **Bagian Penyaringan (Filter Section):**
   Sistem menyediakan tiga jenis filter yang dapat dikombinasikan:
    - **Filter Kecamatan**: Dropdown menu yang menampilkan daftar kecamatan
    - **Filter Kelurahan**: Dropdown menu yang menampilkan kelurahan berdasarkan kecamatan yang dipilih (dependent dropdown)
    - **Filter Akreditasi**: Dropdown menu dengan pilihan tingkat akreditasi (A, B, C, atau Belum terakreditasi)

3. **Peta Interaktif (Interactive Map):**
    - Menampilkan visualisasi geografis lokasi sekolah
    - Setiap sekolah ditandai dengan marker (penanda) berwarna biru
    - Pengguna dapat berinteraksi dengan peta melalui:
        - Zoom in/out untuk memperbesar atau memperkecil tampilan
        - Pan (geser) untuk melihat area lain
        - Klik pada marker untuk melihat informasi sekolah
    - Legenda peta menjelaskan jumlah sekolah yang ditampilkan

4. **Grid Informasi Sekolah:**
   Setiap sekolah ditampilkan dalam bentuk kartu (card) yang berisi:
    - Foto utama sekolah (jika tersedia)
    - Nama sekolah
    - Badge akreditasi dengan kode warna:
        - Hijau untuk akreditasi A
        - Biru untuk akreditasi B
        - Kuning untuk akreditasi C
        - Merah untuk belum terakreditasi
    - Nomor Pokok Sekolah Nasional (NPSN)
    - Informasi lokasi (Kelurahan dan Kecamatan)
    - Nomor telepon (jika tersedia)
    - Alamat email (jika tersedia)
    - Website sekolah (tautan yang dapat diklik, jika tersedia)
    - Tahun berdirinya sekolah
    - Tombol "Lihat Detail" untuk mengakses halaman detail sekolah

5. **Navigasi Halaman (Pagination):**
    - Muncul ketika jumlah data melebihi 12 item per halaman
    - Memungkinkan navigasi ke halaman sebelumnya atau berikutnya
    - Menampilkan nomor halaman aktif

**Interaksi Pengguna:**

- **Pencarian**: Pengguna dapat mengetikkan kata kunci dan hasil pencarian akan ditampilkan secara real-time
- **Penyaringan**: Pengguna dapat memilih filter untuk menyempitkan hasil pencarian
- **Interaksi Peta**: Pengguna dapat berinteraksi dengan peta untuk melihat lokasi sekolah secara geografis
- **Navigasi**: Pengguna dapat mengklik tombol "Lihat Detail" untuk mengakses informasi lengkap mengenai sekolah tertentu
- **Pagination**: Pengguna dapat berpindah halaman untuk melihat data lebih lanjut

**Catatan Penting:**

- Filter Kelurahan akan otomatis direset ketika pengguna mengubah pilihan Kecamatan
- Peta hanya menampilkan sekolah yang memiliki data koordinat geografis (latitude dan longitude)
- Sistem akan menampilkan pesan informatif ketika tidak ada hasil yang sesuai dengan kriteria pencarian atau filter

---

### 3.3 Halaman Detail Sekolah

**Lokasi:** `/sekolah/{id}` (dimana {id} adalah identifikasi unik sekolah)

**Fungsi:** Halaman ini menyediakan informasi lengkap dan komprehensif mengenai satu sekolah tertentu, termasuk data statistik siswa, data guru dan tenaga kependidikan, serta galeri foto.

**Komponen Visual:**

1. **Navigasi Kembali:**
    - Tautan untuk kembali ke halaman Daftar Sekolah

2. **Bagian Header:**
    - Foto utama sekolah (jika tersedia) dengan ukuran yang lebih besar
    - Nama sekolah sebagai judul utama
    - Badge akreditasi dengan kode warna
    - Nomor Pokok Sekolah Nasional (NPSN)
    - Informasi lokasi administratif (Kelurahan dan Kecamatan)

3. **Konten Utama (Kolom Kiri):**

    **a. Informasi Sekolah:**
    - Alamat lengkap sekolah
    - Peta lokasi interaktif dengan karakteristik:
        - Marker merah yang berkedip untuk menandai lokasi sekolah yang sedang dilihat
        - Marker biru untuk menandai lokasi sekolah lain sebagai referensi
        - Legenda yang menjelaskan makna setiap warna marker
    - Informasi kontak:
        - Nomor telepon
        - Alamat email
        - Website sekolah (tautan yang dapat diklik dan membuka di tab baru)
    - Tahun berdirinya sekolah
    - Keterangan tambahan (jika tersedia)

    **b. Data Siswa:**
    - Daftar data siswa yang diorganisir berdasarkan tahun ajaran
    - Badge "Terbaru" untuk menandai data tahun ajaran terbaru
    - Untuk setiap tahun ajaran, ditampilkan:
        - **Kelas 7**: Jumlah kelas, jumlah siswa laki-laki, jumlah siswa perempuan, dan total siswa
        - **Kelas 8**: Jumlah kelas, jumlah siswa laki-laki, jumlah siswa perempuan, dan total siswa
        - **Kelas 9**: Jumlah kelas, jumlah siswa laki-laki, jumlah siswa perempuan, dan total siswa
        - **Total**: Total jumlah kelas dan total jumlah siswa untuk seluruh tingkat
        - Keterangan tambahan (jika tersedia)

    **c. Data GTK (Guru dan Tenaga Kependidikan):**
    - Daftar data GTK yang diorganisir berdasarkan tahun ajaran
    - Badge "Terbaru" untuk menandai data tahun ajaran terbaru
    - Untuk setiap tahun ajaran, ditampilkan:
        - **Data Guru**:
            - Jumlah berdasarkan status kepegawaian: Pegawai Negeri Sipil (PNS), Guru Honor, Guru Kontrak
            - Jumlah berdasarkan tingkat pendidikan: Sarjana (S1), Magister (S2)
            - Jumlah guru yang telah memiliki sertifikasi
            - Total jumlah guru
        - **Data Tenaga Kependidikan**:
            - Jumlah berdasarkan status kepegawaian: PNS, Honor, Kontrak
            - Total jumlah tenaga kependidikan
        - **Total GTK**: Total keseluruhan guru dan tenaga kependidikan
        - Keterangan tambahan (jika tersedia)

4. **Sidebar (Kolom Kanan):**

    **a. Informasi Kepala Sekolah:**
    - Foto kepala sekolah (jika tersedia) dalam bentuk lingkaran
    - Nama lengkap kepala sekolah
    - Nomor Induk Pegawai (NIP), jika tersedia
    - Tingkat pendidikan terakhir, jika tersedia

    **b. Informasi Tambahan:**
    - Status sekolah (Aktif atau Tidak Aktif) dengan badge berwarna
    - Informasi akreditasi dengan badge dan tanggal akreditasi (jika tersedia)
    - Koordinat geografis (latitude dan longitude) untuk referensi teknis

**Interaksi Pengguna:**

- Pengguna dapat mengklik tautan "Kembali" untuk kembali ke halaman daftar sekolah
- Pengguna dapat berinteraksi dengan peta untuk melihat lokasi geografis
- Pengguna dapat mengklik tautan website untuk mengakses website sekolah di tab browser baru
- Pengguna dapat melihat data historis siswa dan GTK berdasarkan tahun ajaran

**Catatan Penting:**

- Hanya kepala sekolah dengan status aktif yang ditampilkan
- Data siswa dan GTK diurutkan berdasarkan tahun ajaran terbaru
- Data yang ditampilkan mencerminkan kondisi terbaru yang telah diinput ke dalam sistem

---

### 3.4 Halaman Galeri Foto

**Lokasi:** `/galeri`

**Fungsi:** Halaman ini menyediakan antarmuka untuk menampilkan koleksi foto dari berbagai sekolah, yang dapat difilter berdasarkan sekolah atau kategori tertentu.

**Komponen Visual:**

1. **Bagian Header:**
    - Judul "Galeri Foto"
    - Deskripsi singkat mengenai konten halaman

2. **Bagian Pencarian:**
    - Kotak pencarian untuk mencari foto berdasarkan judul, nama sekolah, atau deskripsi
    - Tombol reset untuk menghapus kata kunci pencarian

3. **Bagian Penyaringan:**
    - **Filter Sekolah**: Dropdown menu untuk memilih sekolah tertentu
    - **Filter Kategori**: Dropdown menu dengan pilihan:
        - Kegiatan
        - Fasilitas
        - Prestasi
        - Lainnya

4. **Grid Galeri:**
   Setiap foto ditampilkan dalam bentuk kartu yang berisi:
    - Thumbnail (gambar kecil) foto
    - Judul foto
    - Badge kategori dengan kode warna
    - Deskripsi foto (dibatasi 2 baris dengan efek truncate)
    - Nama sekolah sebagai tautan yang dapat diklik
    - Efek visual saat hover (mouse berada di atas foto) berupa overlay dengan ikon

5. **Navigasi Halaman:**
    - Pagination untuk navigasi antar halaman ketika jumlah foto melebihi 12 item per halaman

6. **Lightbox Viewer:**
    - Fitur untuk menampilkan foto dalam ukuran penuh
    - Dapat diakses dengan mengklik thumbnail foto
    - Memungkinkan navigasi antar foto dalam lightbox
    - Menampilkan judul dan deskripsi foto
    - Tombol untuk menutup lightbox

**Interaksi Pengguna:**

- **Pencarian**: Pengguna dapat mencari foto dengan memasukkan kata kunci
- **Penyaringan**: Pengguna dapat memfilter foto berdasarkan sekolah atau kategori
- **Preview Foto**: Pengguna dapat mengklik thumbnail untuk melihat foto dalam ukuran penuh melalui lightbox
- **Navigasi**: Pengguna dapat berpindah antar foto dalam lightbox
- **Akses Detail Sekolah**: Pengguna dapat mengklik nama sekolah untuk mengakses halaman detail sekolah terkait

**Catatan Penting:**

- Hanya foto yang ditandai sebagai "tampilkan" yang akan muncul di halaman publik
- Foto yang tidak memiliki file tidak akan ditampilkan dalam grid
- Lightbox menyediakan pengalaman melihat foto yang lebih optimal

---

### 3.5 Halaman Tentang

**Lokasi:** `/tentang`

**Fungsi:** Halaman ini menyediakan informasi mengenai sistem, visi dan misi Yayasan Pendidikan Kristen (YPK), struktur organisasi, serta informasi kontak.

**Komponen Visual:**

1. **Bagian Header:**
    - Judul utama yang menjelaskan nama sistem
    - Deskripsi lengkap mengenai tujuan sistem

2. **Visi dan Misi YPK di Tanah Papua:**
    - **Visi**: Pernyataan visi YPK yang ditampilkan dalam format yang menonjol
    - **Misi**: Daftar misi YPK yang disajikan dalam format bernomor

3. **Struktur Organisasi YPK di Tanah Papua:**
    - Penjelasan mengenai komponen organisasi:
        - Dewan Pengurus
        - Kepala Sekolah
        - Guru dan Tenaga Kependidikan
        - Staf Administrasi
    - Informasi kontak kantor pusat YPK

4. **Tujuan Sistem:**
    - Penjelasan mengenai tujuan pengembangan sistem
    - Daftar manfaat yang dapat diperoleh dari penggunaan sistem

5. **Fitur Utama:**
    - Empat kartu yang menjelaskan fitur utama sistem:
        - Data Sekolah Lengkap
        - Galeri Foto
        - Pencarian Cepat
        - Akses Publik

6. **Informasi Kontak:**
    - Informasi lengkap mengenai YPK di Tanah Papua
    - Alamat kantor pusat
    - Alamat email
    - Website resmi (tautan yang dapat diklik)

**Interaksi Pengguna:**

- Pengguna dapat mengklik tautan website untuk mengakses website resmi YPK di tab browser baru
- Pengguna dapat membaca informasi lengkap mengenai sistem dan organisasi

---

## 4. HALAMAN AUTENTIKASI (AUTHENTICATION PAGES)

Halaman autentikasi merupakan bagian sistem yang mengelola proses masuk (login) pengguna ke dalam sistem. Sistem menggunakan mekanisme autentikasi berbasis email dan password.

### 4.1 Halaman Masuk (Login)

**Lokasi:** `/login`

**Fungsi:** Halaman ini menyediakan antarmuka untuk proses autentikasi pengguna yang memiliki hak akses administratif ke dalam sistem.

**Komponen Visual:**

1. **Layout Split Screen:**
   Halaman dibagi menjadi dua bagian pada tampilan desktop:

    **a. Sisi Kiri (Desktop Only):**
    - Logo sistem dalam frame dekoratif
    - Judul "SIG SMP YPK Jayapura"
    - Deskripsi sistem
    - Dua fitur utama yang ditampilkan dengan ikon:
        - Informasi Sekolah
        - Akses Terkontrol

    **b. Sisi Kanan:**
    - Kartu form login yang berisi:
        - Logo sistem di bagian header
        - Judul "Selamat Datang"
        - Deskripsi sistem
        - Form input

2. **Form Login:**
   Form terdiri dari beberapa komponen:

    **a. Field Email:**
    - Input text dengan ikon email
    - Placeholder text sebagai panduan
    - Validasi untuk memastikan format email yang benar
    - Pesan error yang ditampilkan jika terjadi kesalahan

    **b. Field Password:**
    - Input password dengan ikon gembok
    - Tombol toggle untuk menampilkan/menyembunyikan password (ikon mata)
    - Placeholder text sebagai panduan
    - Validasi untuk memastikan password tidak kosong
    - Pesan error yang ditampilkan jika terjadi kesalahan

    **c. Opsi "Ingat Saya" (Remember Me):**
    - Checkbox yang memungkinkan sistem menyimpan informasi login
    - Mencegah pengguna perlu login ulang pada kunjungan berikutnya

    **d. Tautan "Lupa Password":**
    - Tautan ke halaman reset password (jika fitur diaktifkan)

    **e. Tombol Masuk:**
    - Tombol submit dengan ikon
    - Menampilkan state loading saat proses autentikasi berlangsung
    - Teks berubah menjadi "Memproses..." saat loading

3. **Bagian Footer:**
    - Tautan untuk kembali ke halaman utama
    - Informasi copyright

**Interaksi Pengguna:**

- Pengguna memasukkan alamat email dan password
- Pengguna dapat mengaktifkan opsi "Ingat Saya" untuk kenyamanan login berikutnya
- Pengguna dapat mengklik tombol toggle untuk melihat password yang dimasukkan
- Pengguna mengklik tombol "Masuk" untuk memulai proses autentikasi
- Sistem akan memvalidasi kredensial dan mengarahkan pengguna sesuai dengan peran (role) mereka

**Alur Autentikasi:**

1. Pengguna memasukkan kredensial (email dan password)
2. Sistem memvalidasi kredensial terhadap database
3. Jika valid, pengguna diarahkan ke dashboard sesuai peran:
    - Admin → `/admin/dashboard`
    - Petugas → `/petugas/dashboard`
4. Jika tidak valid, sistem menampilkan pesan error

**Catatan Penting:**

- Kredensial yang salah akan menghasilkan pesan error yang informatif
- Status message (jika ada) akan ditampilkan di atas form
- Sistem menggunakan mekanisme session untuk menjaga status login pengguna

---

## 5. HALAMAN ADMINISTRASI (ADMINISTRATIVE PAGES)

Halaman administrasi merupakan bagian sistem yang hanya dapat diakses oleh pengguna yang telah berhasil melakukan autentikasi. Halaman-halaman ini menyediakan antarmuka untuk melakukan operasi Create, Read, Update, dan Delete (CRUD) terhadap data dalam sistem.

### 5.1 Dashboard Administrasi

**Lokasi:** `/admin/dashboard`

**Fungsi:** Halaman dashboard menyediakan gambaran umum mengenai data dalam sistem dan menyediakan akses cepat ke berbagai fitur administrasi.

**Komponen Visual:**

1. **Kartu Statistik:**
   Tiga kartu yang menampilkan ringkasan data:
    - **Total Sekolah**: Menampilkan jumlah sekolah total dan jumlah sekolah aktif
    - **Total GTK**: Menampilkan total Guru dan Tenaga Kependidikan
    - **Total Siswa**: Menampilkan total siswa yang terdaftar

2. **Bagian Quick Actions:**
    - Empat tombol akses cepat ke halaman utama:
        - Kecamatan
        - Sekolah
        - Data Siswa
        - Galeri
    - Tombol "Tambah Data Baru" untuk akses cepat ke form penambahan data

3. **Bagian Statistik:**
    - Daftar statistik detail yang menampilkan:
        - Jumlah Kecamatan
        - Jumlah Kelurahan
        - Jumlah Data Siswa
        - Jumlah Galeri Foto
        - Jumlah Kepala Sekolah

4. **Sekolah Terbaru:**
    - Daftar lima sekolah yang baru ditambahkan atau diperbarui
    - Setiap item menampilkan:
        - Nama sekolah
        - Lokasi (Kelurahan dan Kecamatan)
        - Tombol "Lihat" untuk mengakses form edit
    - Tautan "Lihat Semua" untuk mengakses halaman daftar sekolah lengkap

5. **Statistik Per Kecamatan:**
    - Daftar semua kecamatan dengan informasi:
        - Nama kecamatan
        - Jumlah kelurahan di kecamatan tersebut
        - Jumlah sekolah di kecamatan tersebut

**Interaksi Pengguna:**

- Pengguna dapat mengklik tombol Quick Actions untuk navigasi cepat
- Pengguna dapat mengklik "Tambah Data Baru" untuk menambah data baru
- Pengguna dapat mengklik "Lihat" pada sekolah terbaru untuk mengedit data
- Pengguna dapat mengklik "Lihat Semua" untuk melihat daftar lengkap

---

### 5.2 Pengelolaan Data Kecamatan

**Lokasi Daftar:** `/admin/kecamatan`  
**Lokasi Form Tambah:** `/admin/kecamatan/create`  
**Lokasi Form Edit:** `/admin/kecamatan/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk melakukan operasi CRUD terhadap data kecamatan.

#### 5.2.1 Halaman Daftar Kecamatan

**Komponen Visual:**

- **Header:**
    - Judul "Data Kecamatan"
    - Deskripsi fungsi halaman
    - Tombol "Tambah Kecamatan" untuk menambah data baru

- **Pencarian:**
    - Kotak pencarian dengan kemampuan mencari berdasarkan nama kecamatan
    - Tombol reset untuk menghapus kata kunci

- **Tabel Data:**
  Kolom-kolom yang ditampilkan:
    - Nomor urut
    - Nama Kecamatan
    - Keterangan (dengan efek truncate jika terlalu panjang)
    - Tanggal pembuatan data
    - Kolom Aksi yang berisi:
        - Ikon Edit untuk mengubah data
        - Ikon Hapus untuk menghapus data

- **Navigasi Halaman:**
    - Pagination untuk navigasi ketika data melebihi jumlah per halaman

**Interaksi Pengguna:**

- Pengguna dapat mencari kecamatan dengan mengetikkan nama
- Pengguna dapat mengklik tombol "Tambah Kecamatan" untuk menambah data
- Pengguna dapat mengklik ikon Edit untuk mengubah data
- Pengguna dapat mengklik ikon Hapus yang akan menampilkan dialog konfirmasi

#### 5.2.2 Form Kecamatan

**Komponen Visual:**

- **Header:**
    - Tautan untuk kembali ke halaman daftar
    - Judul form (berbeda untuk mode tambah dan edit)
    - Deskripsi fungsi form

- **Form Input:**
    - **Nama Kecamatan:**
        - Input text (wajib diisi)
        - Placeholder sebagai panduan
        - Validasi untuk memastikan field tidak kosong
        - Pesan error jika terjadi kesalahan validasi

    - **Keterangan:**
        - Textarea (opsional)
        - Placeholder sebagai panduan
        - Tidak ada validasi wajib

- **Tombol Aksi:**
    - Tombol "Batal" untuk membatalkan dan kembali ke halaman daftar
    - Tombol "Simpan" (mode tambah) atau "Perbarui" (mode edit) untuk menyimpan data

**Interaksi Pengguna:**

- Pengguna mengisi form dengan data yang diperlukan
- Pengguna mengklik "Batal" untuk membatalkan tanpa menyimpan
- Pengguna mengklik "Simpan"/"Perbarui" untuk menyimpan data
- Sistem akan menampilkan loading state selama proses penyimpanan
- Setelah berhasil, pengguna diarahkan kembali ke halaman daftar dengan pesan sukses

**Catatan Penting:**

- Mode edit akan mengisi form dengan data yang sudah ada
- Validasi dilakukan baik di sisi client (frontend) maupun server (backend)

---

### 5.3 Pengelolaan Data Kelurahan

**Lokasi Daftar:** `/admin/kelurahan`  
**Lokasi Form Tambah:** `/admin/kelurahan/create`  
**Lokasi Form Edit:** `/admin/kelurahan/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk melakukan operasi CRUD terhadap data kelurahan.

#### 5.3.1 Halaman Daftar Kelurahan

**Komponen Visual:**

- Struktur serupa dengan halaman daftar kecamatan
- **Filter Tambahan:**
    - Filter berdasarkan Kecamatan untuk menyempitkan hasil

- **Tabel Data:**
  Kolom-kolom yang ditampilkan:
    - Nomor urut
    - Nama Kelurahan
    - Nama Kecamatan (relasi)
    - Kode Pos
    - Keterangan
    - Kolom Aksi (Edit dan Hapus)

#### 5.3.2 Form Kelurahan

**Komponen Visual:**

- **Form Input:**
    - **Kecamatan:** Dropdown untuk memilih kecamatan (wajib diisi)
    - **Nama Kelurahan:** Input text (wajib diisi)
    - **Kode Pos:** Input text (opsional)
    - **Keterangan:** Textarea (opsional)

**Catatan Penting:**

- Kecamatan harus dipilih terlebih dahulu karena kelurahan merupakan bagian dari kecamatan

---

### 5.4 Pengelolaan Data Sekolah

**Lokasi Daftar:** `/admin/sekolah`  
**Lokasi Form Tambah:** `/admin/sekolah/create`  
**Lokasi Form Edit:** `/admin/sekolah/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk melakukan operasi CRUD terhadap data sekolah, termasuk pengaturan koordinat geografis melalui peta interaktif.

#### 5.4.1 Halaman Daftar Sekolah

**Komponen Visual:**

- **Filter:**
    - Filter berdasarkan Kelurahan
    - Filter berdasarkan Status (Aktif/Tidak Aktif)
    - Filter berdasarkan Akreditasi (A, B, C, Belum)

- **Tabel Data:**
  Kolom-kolom yang ditampilkan:
    - Nomor urut
    - NPSN (dalam font monospace)
    - Nama Sekolah
    - Kelurahan (dengan informasi Kecamatan di bawahnya)
    - Alamat (dengan efek truncate)
    - Status dengan badge berwarna
    - Akreditasi dengan badge berwarna
    - Kolom Aksi (Edit dan Hapus)

#### 5.4.2 Form Sekolah

**Komponen Visual:**

Form dibagi menjadi beberapa bagian dalam kartu terpisah:

1. **Informasi Dasar:**
    - NPSN (wajib, harus unik)
    - Nama Sekolah (wajib)
    - Kelurahan (dropdown, wajib)
    - Alamat (textarea, wajib)

2. **Informasi Kontak:**
    - Nomor Telepon
    - Alamat Email
    - Website

3. **Koordinat Geografis:**
    - **Peta Interaktif (MapPicker):**
        - Memungkinkan pengguna memilih lokasi dengan menggeser marker
        - Memungkinkan pengguna mengklik peta untuk menetapkan lokasi
        - Menampilkan marker biru untuk sekolah lain yang sudah terdaftar sebagai referensi
        - Legenda yang menjelaskan marker
    - **Input Koordinat:**
        - Latitude (input number, wajib)
        - Longitude (input number, wajib)
        - Dapat diisi manual atau otomatis dari peta

4. **Informasi Sekolah:**
    - Tahun Berdiri (input number)
    - Status Sekolah (dropdown: Aktif/Tidak Aktif, wajib)
    - Akreditasi (dropdown: Belum/A/B/C, wajib)
    - Tanggal Akreditasi (date picker)
    - Keterangan (textarea)

**Interaksi Pengguna:**

- Pengguna dapat memilih lokasi melalui peta interaktif
- Pengguna dapat menggeser marker untuk menyesuaikan lokasi
- Pengguna dapat mengisi koordinat secara manual
- Perubahan koordinat di peta akan otomatis mengupdate input koordinat
- Perubahan koordinat di input akan otomatis mengupdate posisi marker di peta

**Catatan Penting:**

- NPSN harus unik dalam sistem
- Koordinat geografis diperlukan untuk menampilkan sekolah di peta publik

---

### 5.5 Pengelolaan Data Kepala Sekolah

**Lokasi Daftar:** `/admin/kepsek`  
**Lokasi Form Tambah:** `/admin/kepsek/create`  
**Lokasi Form Edit:** `/admin/kepsek/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk mengelola data kepala sekolah untuk setiap sekolah.

#### 5.5.1 Halaman Daftar Kepala Sekolah

**Komponen Visual:**

- **Filter:**
    - Filter berdasarkan Sekolah
    - Filter berdasarkan Status (Aktif/Tidak Aktif)

- **Tabel Data:**
  Kolom-kolom yang ditampilkan:
    - Nomor urut
    - Nama Kepala Sekolah
    - NIP
    - Sekolah (dengan NPSN di bawahnya)
    - Jenis Kelamin
    - Tanggal Mulai Menjabat
    - Status dengan badge
    - Kolom Aksi (Edit dan Hapus)

#### 5.5.2 Form Kepala Sekolah

**Komponen Visual:**

- **Form Input:**
    - Sekolah (dropdown, wajib)
    - Nama Kepala Sekolah (wajib)
    - NIP (opsional)
    - Jenis Kelamin (dropdown: Laki-laki/Perempuan)
    - Tanggal Mulai (date picker)
    - Tanggal Selesai (date picker, opsional)
    - Pendidikan Terakhir (input text)
    - Foto (file upload)
    - Status Aktif (checkbox)
    - Keterangan (textarea)

**Catatan Penting:**

- Satu sekolah dapat memiliki beberapa kepala sekolah (historis)
- Hanya kepala sekolah dengan status aktif yang ditampilkan di halaman publik

---

### 5.6 Pengelolaan Data Siswa

**Lokasi Daftar:** `/admin/data-siswa`  
**Lokasi Form Tambah:** `/admin/data-siswa/create`  
**Lokasi Form Edit:** `/admin/data-siswa/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk mengelola data statistik siswa per sekolah dan per tahun ajaran.

#### 5.6.1 Halaman Daftar Data Siswa

**Komponen Visual:**

- **Filter:**
    - Filter berdasarkan Sekolah
    - Filter berdasarkan Tahun Ajaran (dropdown dengan format 2024/2025)

- **Tabel Data:**
  Kolom-kolom yang ditampilkan:
    - Nomor urut
    - Sekolah (dengan NPSN)
    - Tahun Ajaran
    - Data Kelas 7 (Jumlah kelas, L/P, Total)
    - Data Kelas 8 (Jumlah kelas, L/P, Total)
    - Data Kelas 9 (Jumlah kelas, L/P, Total)
    - Total (Jumlah kelas, L/P, Total siswa)
    - Kolom Aksi (Edit dan Hapus)

#### 5.6.2 Form Data Siswa

**Komponen Visual:**

- **Form Input:**
    - Sekolah (dropdown, wajib)
    - Tahun Ajaran (dropdown format 2024/2025, wajib)
    - **Data Kelas 7:**
        - Jumlah Kelas
        - Jumlah Siswa Laki-laki
        - Jumlah Siswa Perempuan
    - **Data Kelas 8:**
        - Jumlah Kelas
        - Jumlah Siswa Laki-laki
        - Jumlah Siswa Perempuan
    - **Data Kelas 9:**
        - Jumlah Kelas
        - Jumlah Siswa Laki-laki
        - Jumlah Siswa Perempuan
    - Keterangan (textarea)

**Catatan Penting:**

- Kombinasi Sekolah dan Tahun Ajaran harus unik
- Data dapat diinput untuk setiap tahun ajaran

---

### 5.7 Pengelolaan Data GTK

**Lokasi Daftar:** `/admin/data-gtk`  
**Lokasi Form Tambah:** `/admin/data-gtk/create`  
**Lokasi Form Edit:** `/admin/data-gtk/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk mengelola data statistik Guru dan Tenaga Kependidikan per sekolah dan per tahun ajaran.

#### 5.7.1 Halaman Daftar Data GTK

**Komponen Visual:**

- **Filter:**
    - Filter berdasarkan Sekolah
    - Filter berdasarkan Tahun Ajaran

- **Tabel Data:**
  Kolom-kolom yang ditampilkan:
    - Nomor urut
    - Sekolah
    - Tahun Ajaran
    - Data Guru (PNS, Honor, Kontrak, S1, S2, Sertifikasi)
    - Data Tenaga Kependidikan (PNS, Honor, Kontrak)
    - Total GTK
    - Kolom Aksi (Edit dan Hapus)

#### 5.7.2 Form Data GTK

**Komponen Visual:**

- **Form Input:**
    - Sekolah (dropdown, wajib)
    - Tahun Ajaran (wajib)
    - **Data Guru:**
        - Jumlah Guru PNS
        - Jumlah Guru Honor
        - Jumlah Guru Kontrak
        - Jumlah Guru S1
        - Jumlah Guru S2
        - Jumlah Guru Bersertifikasi
    - **Data Tenaga Kependidikan:**
        - Jumlah Tendik PNS
        - Jumlah Tendik Honor
        - Jumlah Tendik Kontrak
    - Keterangan (textarea)

---

### 5.8 Pengelolaan Galeri Foto

**Lokasi Daftar:** `/admin/galeri`  
**Lokasi Form Tambah:** `/admin/galeri/create`  
**Lokasi Form Edit:** `/admin/galeri/{id}/edit`

**Fungsi:** Modul ini menyediakan antarmuka untuk mengelola galeri foto sekolah.

#### 5.8.1 Halaman Daftar Galeri

**Komponen Visual:**

- **Filter:**
    - Filter berdasarkan Sekolah
    - Filter berdasarkan Kategori (Gedung, Kegiatan, Prestasi, Lainnya)
    - Filter berdasarkan Status Tampil (Tampilkan/Tidak Tampilkan)

- **Grid Galeri:**
  Setiap foto ditampilkan dalam kartu yang berisi:
    - Thumbnail foto
    - Badge "Tidak Tampil" jika status tidak aktif
    - Judul foto
    - Badge kategori
    - Deskripsi (truncated)
    - Nama sekolah
    - Tombol Edit dan Hapus

- **Lightbox:**
    - Klik thumbnail untuk preview foto dalam ukuran besar

#### 5.8.2 Form Galeri

**Komponen Visual:**

- **Form Input:**
    - Sekolah (dropdown, wajib)
    - Judul (wajib)
    - Deskripsi (textarea)
    - Kategori (dropdown: Gedung, Kegiatan, Prestasi, Lainnya)
    - File Foto (file upload, wajib untuk create)
    - Preview foto (untuk mode edit)
    - Urutan (number, untuk menentukan urutan tampil)
    - Tampilkan (checkbox, untuk menampilkan di halaman publik)

**Catatan Penting:**

- Foto yang tidak ditandai "Tampilkan" tidak akan muncul di halaman publik
- Urutan menentukan urutan tampil di halaman publik
- Format file yang didukung: gambar (JPG, PNG, dll)

---

## 6. FITUR UMUM SISTEM

### 6.1 Pencarian (Search Functionality)

Semua halaman yang menampilkan daftar data dilengkapi dengan fitur pencarian yang memungkinkan pengguna mencari data berdasarkan kata kunci tertentu. Sistem pencarian bekerja secara real-time dan dapat dikombinasikan dengan filter lainnya.

### 6.2 Penyaringan (Filtering)

Sistem menyediakan berbagai opsi filter yang dapat dikombinasikan untuk menyempitkan hasil pencarian. Filter yang dipilih tersimpan dalam URL, sehingga dapat di-bookmark atau dibagikan.

### 6.3 Navigasi Halaman (Pagination)

Ketika jumlah data melebihi jumlah yang ditampilkan per halaman, sistem menyediakan navigasi pagination yang memungkinkan pengguna berpindah antar halaman. Pagination menampilkan:

- Tombol Previous/Next
- Nomor halaman aktif
- Tombol disabled untuk halaman pertama/terakhir

### 6.4 Dialog Konfirmasi

Untuk operasi yang bersifat destruktif (seperti menghapus data), sistem menampilkan dialog konfirmasi yang meminta persetujuan pengguna sebelum melanjutkan. Dialog ini menampilkan:

- Judul aksi yang akan dilakukan
- Pesan konfirmasi yang jelas
- Tombol "Hapus" dan "Batal"
- Peringatan bahwa tindakan tidak dapat dibatalkan

### 6.5 Notifikasi (Toast Notifications)

Sistem menggunakan mekanisme toast notification untuk memberikan umpan balik kepada pengguna:

- **Notifikasi Sukses**: Ditampilkan setelah operasi berhasil (misalnya: data berhasil disimpan)
- **Notifikasi Error**: Ditampilkan ketika terjadi kesalahan
- **Notifikasi Loading**: Ditampilkan selama proses berlangsung

### 6.6 Validasi Form

Sistem melakukan validasi pada dua tingkat:

- **Validasi Frontend**: Validasi yang dilakukan di browser sebelum data dikirim ke server
- **Validasi Backend**: Validasi yang dilakukan di server untuk memastikan keamanan dan integritas data

Pesan error validasi ditampilkan di bawah setiap field yang memiliki kesalahan.

### 6.7 State Loading

Sistem menampilkan indikator loading selama proses berlangsung:

- Tombol submit menampilkan state loading
- Tombol menjadi disabled selama proses
- Teks tombol berubah menjadi "Memproses..." atau sejenisnya

### 6.8 Desain Responsif

Sistem dirancang dengan prinsip responsive design yang memastikan tampilan optimal di berbagai ukuran layar:

- **Mobile**: Layar dengan lebar kurang dari 640px
- **Tablet**: Layar dengan lebar 640px hingga 1024px
- **Desktop**: Layar dengan lebar lebih dari 1024px

---

## 7. NAVIGASI SISTEM

### 7.1 Menu Navigasi Publik

Menu navigasi untuk pengunjung umum tersedia di setiap halaman publik dan mencakup:

- Beranda → `/`
- Sekolah → `/sekolah`
- Galeri → `/galeri`
- Tentang → `/tentang`

### 7.2 Menu Navigasi Administrasi

Menu navigasi untuk pengguna yang telah terautentikasi mencakup:

- Dashboard → `/admin/dashboard`
- Kecamatan → `/admin/kecamatan`
- Kelurahan → `/admin/kelurahan`
- Sekolah → `/admin/sekolah`
- Kepala Sekolah → `/admin/kepsek`
- Data Siswa → `/admin/data-siswa`
- Data GTK → `/admin/data-gtk`
- Galeri → `/admin/galeri`
- Logout → `/logout`

---

## 8. KOMPONEN ANTARMUKA

Sistem menggunakan berbagai komponen antarmuka yang konsisten di seluruh aplikasi:

1. **Card**: Container untuk mengelompokkan konten terkait
2. **Button**: Tombol dengan berbagai varian (primary, secondary, ghost, outline)
3. **Badge**: Label dengan kode warna untuk menandai status atau kategori
4. **Input/Select/Textarea**: Kontrol form standar dengan validasi
5. **Table**: Tabel untuk menampilkan data terstruktur
6. **Modal/Dialog**: Dialog untuk konfirmasi atau form tambahan
7. **Lightbox**: Viewer untuk menampilkan gambar dalam ukuran penuh
8. **Map**: Peta interaktif menggunakan teknologi Leaflet
9. **Toast**: Notifikasi non-intrusif untuk umpan balik pengguna
10. **Pagination**: Navigasi untuk data yang terbagi dalam beberapa halaman

---

## 9. KESIMPULAN

Dokumentasi ini telah menjelaskan secara komprehensif mengenai struktur dan fungsi setiap halaman dalam Sistem Informasi Geografis berbasis web untuk pemetaan dan pengelolaan data sekolah menengah pertama YPK Kota Jayapura.

Sistem ini dirancang dengan mempertimbangkan:

- **Kemudahan penggunaan (Usability)**: Antarmuka yang intuitif dan mudah dipahami
- **Aksesibilitas (Accessibility)**: Dapat diakses oleh berbagai pengguna dengan berbagai tingkat kemampuan teknis
- **Efisiensi**: Fitur pencarian dan filter yang memungkinkan pengguna menemukan informasi dengan cepat
- **Visualisasi**: Peta interaktif yang memudahkan pemahaman lokasi geografis
- **Keamanan**: Mekanisme autentikasi untuk melindungi data administratif

Dengan struktur yang terorganisir dan fitur yang komprehensif, sistem ini diharapkan dapat memfasilitasi pengelolaan data sekolah secara efektif dan menyediakan akses informasi yang transparan bagi masyarakat umum.

---

## 10. GLOSARIUM

- **CRUD**: Create, Read, Update, Delete - operasi dasar pada data
- **GTK**: Guru dan Tenaga Kependidikan
- **NPSN**: Nomor Pokok Sekolah Nasional
- **NIP**: Nomor Induk Pegawai
- **SIG**: Sistem Informasi Geografis
- **UI/UX**: User Interface/User Experience
- **URL**: Uniform Resource Locator - alamat halaman web
- **API**: Application Programming Interface
- **Frontend**: Bagian antarmuka pengguna yang terlihat
- **Backend**: Bagian server yang mengelola logika dan data
- **Responsive Design**: Desain yang menyesuaikan dengan ukuran layar

---

**Dokumentasi ini disusun untuk memberikan pemahaman menyeluruh mengenai sistem antarmuka pengguna dan dapat digunakan sebagai referensi oleh pengguna akhir maupun pengembang sistem.**
