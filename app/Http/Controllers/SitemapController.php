<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use App\Models\Galeri;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\URL;

class SitemapController extends Controller
{
    /**
     * Generate sitemap.xml
     */
    public function index(): Response
    {
        $baseUrl = config('app.url');
        $now = now()->toAtomString();

        $urls = [];

        // Homepage
        $urls[] = [
            'loc' => $baseUrl,
            'lastmod' => $now,
            'changefreq' => 'daily',
            'priority' => '1.0',
        ];

        // Static pages
        $staticPages = [
            ['url' => '/sekolah', 'priority' => '0.9', 'changefreq' => 'daily'],
            ['url' => '/galeri', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/tentang', 'priority' => '0.5', 'changefreq' => 'monthly'],
        ];

        foreach ($staticPages as $page) {
            $urls[] = [
                'loc' => $baseUrl . $page['url'],
                'lastmod' => $now,
                'changefreq' => $page['changefreq'],
                'priority' => $page['priority'],
            ];
        }

        // Dynamic sekolah pages
        $sekolahs = Sekolah::where('status_sekolah', 'aktif')
            ->select('id', 'updated_at')
            ->get();

        foreach ($sekolahs as $sekolah) {
            $urls[] = [
                'loc' => URL::route('user.sekolah.show', $sekolah->id),
                'lastmod' => $sekolah->updated_at->toAtomString(),
                'changefreq' => 'weekly',
                'priority' => '0.7',
            ];
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach ($urls as $url) {
            $xml .= "  <url>\n";
            $xml .= "    <loc>" . htmlspecialchars($url['loc']) . "</loc>\n";
            $xml .= "    <lastmod>" . $url['lastmod'] . "</lastmod>\n";
            $xml .= "    <changefreq>" . $url['changefreq'] . "</changefreq>\n";
            $xml .= "    <priority>" . $url['priority'] . "</priority>\n";
            $xml .= "  </url>\n";
        }

        $xml .= '</urlset>';

        return response($xml, 200)
            ->header('Content-Type', 'application/xml; charset=utf-8');
    }
}

