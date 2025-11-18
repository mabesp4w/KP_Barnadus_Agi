import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    structuredData?: object;
    noindex?: boolean;
    nofollow?: boolean;
    canonical?: string;
}

export default function SEO({
    title,
    description = 'Sistem Informasi Geografis Berbasis Web untuk Pemetaan dan Pengelolaan Data Sekolah Menengah Pertama (SMP) Yayasan Pendidikan Kristen (YPK) Kota Jayapura',
    keywords = 'SIG, Sistem Informasi Geografis, SMP YPK, Jayapura, Sekolah, Pendidikan, Peta Sekolah, Data Sekolah',
    image,
    url,
    type = 'website',
    author = 'SIG SMP YPK Jayapura',
    publishedTime,
    modifiedTime,
    structuredData,
    noindex = false,
    nofollow = false,
    canonical,
}: SEOProps) {
    const { url: currentUrl } = usePage();
    const appName = 'SIG SMP YPK Jayapura';
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullTitle = title ? `${title} - ${appName}` : appName;
    const fullUrl = url || `${siteUrl}${currentUrl}`;
    const defaultImage = image || `${siteUrl}/images/logo.png`;
    const canonicalUrl = canonical || fullUrl;

    // Generate meta tags
    const metaTags = [
        // Basic Meta Tags
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'author', content: author },
        { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
        
        // Open Graph Tags
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: description },
        { property: 'og:image', content: defaultImage },
        { property: 'og:url', content: fullUrl },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: appName },
        { property: 'og:locale', content: 'id_ID' },
        
        // Twitter Card Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: fullTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: defaultImage },
        
        // Article specific
        ...(type === 'article' && publishedTime ? [{ property: 'article:published_time', content: publishedTime }] : []),
        ...(type === 'article' && modifiedTime ? [{ property: 'article:modified_time', content: modifiedTime }] : []),
        ...(type === 'article' && author ? [{ property: 'article:author', content: author }] : []),
    ];

    // Structured Data (JSON-LD)
    const defaultStructuredData = {
        '@context': 'https://schema.org',
        '@type': type === 'article' ? 'Article' : 'WebSite',
        name: appName,
        url: siteUrl,
        ...(type === 'article' && {
            headline: fullTitle,
            description: description,
            image: defaultImage,
            author: {
                '@type': 'Organization',
                name: author,
            },
            publisher: {
                '@type': 'Organization',
                name: appName,
                logo: {
                    '@type': 'ImageObject',
                    url: `${siteUrl}/images/logo.png`,
                },
            },
            ...(publishedTime && { datePublished: publishedTime }),
            ...(modifiedTime && { dateModified: modifiedTime }),
        }),
        ...(structuredData || {}),
    };

    return (
        <>
            <Head title={fullTitle}>
                {/* Basic Meta Tags */}
                {metaTags.map((tag, index) => {
                    if (tag.name) {
                        return <meta key={`meta-${index}`} name={tag.name} content={tag.content} />;
                    }
                    if (tag.property) {
                        return <meta key={`og-${index}`} property={tag.property} content={tag.content} />;
                    }
                    return null;
                })}

                {/* Canonical URL */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData || defaultStructuredData),
                    }}
                />
            </Head>
        </>
    );
}

