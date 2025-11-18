<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="winter">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'SIG SMP YPK Jayapura') }}</title>

    <!-- Default SEO Meta Tags -->
    <meta name="description" content="Sistem Informasi Geografis Berbasis Web untuk Pemetaan dan Pengelolaan Data Sekolah Menengah Pertama (SMP) Yayasan Pendidikan Kristen (YPK) Kota Jayapura">
    <meta name="keywords" content="SIG, Sistem Informasi Geografis, SMP YPK, Jayapura, Sekolah, Pendidikan, Peta Sekolah, Data Sekolah">
    <meta name="author" content="SIG SMP YPK Jayapura">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Indonesian">
    <meta name="revisit-after" content="7 days">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="SIG SMP YPK Jayapura">
    <meta property="og:locale" content="id_ID">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
