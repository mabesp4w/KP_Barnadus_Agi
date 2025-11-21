import MapView from '@/Components/maps/MapView';
import SEO from '@/Components/SEO';
import Badge from '@/Components/ui/Badge';
import Card, { CardBody, CardHeader, CardTitle } from '@/Components/ui/Card';
import useAOS from '@/hooks/useAOS';
import UserLayout from '@/Layouts/UserLayout';
import { Link, router } from '@inertiajs/react';
import { Award, Calendar, Globe, Mail, MapPin, Phone, School, Search } from 'lucide-react';
import { useEffect, useMemo } from 'react';

export default function SekolahIndex({ sekolahs, kecamatans, kelurahans, filters, sekolahsForMap = [] }) {
    useAOS();

    // Filter kelurahan berdasarkan kecamatan yang dipilih
    const filteredKelurahans = useMemo(() => {
        if (!filters?.kecamatan || !kelurahans) {
            return kelurahans || [];
        }
        return kelurahans.filter((kelurahan) => kelurahan.id_kecamatan == filters.kecamatan);
    }, [filters?.kecamatan, kelurahans]);

    // Validasi: jika kelurahan yang dipilih tidak ada di kecamatan yang dipilih, reset kelurahan
    const currentKelurahanValid = useMemo(() => {
        if (!filters?.kelurahan || !filters?.kecamatan) {
            return true;
        }
        return filteredKelurahans.some((kel) => kel.id == filters.kelurahan);
    }, [filters?.kelurahan, filters?.kecamatan, filteredKelurahans]);

    // Reset kelurahan jika tidak valid (hanya jika ada perubahan)
    useEffect(() => {
        if (filters?.kecamatan && filters?.kelurahan && !currentKelurahanValid) {
            const newFilters = { ...filters };
            delete newFilters.kelurahan;
            router.get(getRouteUrl('user.sekolah.index', '/sekolah'), newFilters, { preserveState: true, replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters?.kecamatan]);

    const getRouteUrl = (routeName, fallbackUrl) => {
        try {
            if (typeof route === 'function') {
                const url = route(routeName);
                if (url && url !== '#') {
                    return url;
                }
            }
            return fallbackUrl || '#';
        } catch (error) {
            return fallbackUrl || '#';
        }
    };

    const getAkreditasiBadge = (akreditasi) => {
        const colors = {
            A: 'success',
            B: 'info',
            C: 'warning',
            Belum: 'error',
        };
        return <Badge variant={colors[akreditasi] || 'error'}>{akreditasi || 'Belum'}</Badge>;
    };

    return (
        <UserLayout title="Daftar Sekolah">
            <SEO
                title="Daftar Sekolah"
                description="Daftar lengkap Sekolah Menengah Pertama (SMP) Yayasan Pendidikan Kristen (YPK) di Kota Jayapura. Temukan informasi sekolah, lokasi di peta interaktif, dan data lengkap setiap sekolah."
                keywords="Daftar Sekolah, SMP YPK Jayapura, Peta Sekolah, Lokasi Sekolah, Informasi Sekolah, NPSN, Akreditasi Sekolah"
            />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-6 text-center" data-aos="fade-down">
                    <h1 className="text-3xl font-bold text-base-content">Daftar Sekolah</h1>
                    <p className="mt-2 text-base-content/70">Temukan informasi lengkap tentang sekolah di daerah Anda</p>
                </div>

                {/* Peta dengan Search dan Filter di dalamnya */}
                <Card className="mb-6" data-aos="fade-up" data-aos-delay="200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            Peta Lokasi Sekolah
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="p-0">
                        <div className="relative">
                            {/* Search dan Filter Overlay di pojok kiri atas */}
                            <div className="absolute top-2 left-2 z-[1000] w-full max-w-xs space-y-2 rounded-lg bg-base-100 p-3 shadow-lg">
                                {/* Search Box */}
                                <div>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            router.get(
                                                getRouteUrl('user.sekolah.index', '/sekolah'),
                                                { ...filters, search: e.target.search?.value || null },
                                                { preserveState: true },
                                            );
                                        }}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="Cari sekolah..."
                                            className="input-bordered input input-sm w-full"
                                            defaultValue={filters?.search || ''}
                                        />
                                        <button type="submit" className="btn btn-sm btn-primary">
                                            <Search className="h-4 w-4" />
                                        </button>
                                        {filters?.search && (
                                            <button
                                                type="button"
                                                className="btn btn-outline btn-sm"
                                                onClick={() => {
                                                    router.get(
                                                        getRouteUrl('user.sekolah.index', '/sekolah'),
                                                        { ...filters, search: null },
                                                        { preserveState: true },
                                                    );
                                                }}
                                            >
                                                Reset
                                            </button>
                                        )}
                                    </form>
                                </div>

                                {/* Filter Kecamatan */}
                                {kecamatans && kecamatans.length > 0 && (
                                    <div>
                                        <label className="label-text mb-1 block text-xs font-semibold">Kecamatan:</label>
                                        <select
                                            className="select-bordered select w-full select-sm"
                                            value={filters?.kecamatan || ''}
                                            onChange={(e) => {
                                                const selectedKecamatan = e.target.value || null;
                                                // Reset kelurahan jika kecamatan berubah
                                                router.get(
                                                    getRouteUrl('user.sekolah.index', '/sekolah'),
                                                    { ...filters, kecamatan: selectedKecamatan, kelurahan: null },
                                                    { preserveState: true },
                                                );
                                            }}
                                        >
                                            <option value="">Semua Kecamatan</option>
                                            {kecamatans.map((kecamatan) => (
                                                <option key={kecamatan.id} value={kecamatan.id}>
                                                    {kecamatan.nm_kecamatan}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {/* Filter Kelurahan */}
                                <div>
                                    <label className="label-text mb-1 block text-xs font-semibold">Kelurahan:</label>
                                    <select
                                        className="select-bordered select w-full select-sm"
                                        value={filters?.kelurahan || ''}
                                        onChange={(e) => {
                                            router.get(
                                                getRouteUrl('user.sekolah.index', '/sekolah'),
                                                { ...filters, kelurahan: e.target.value || null },
                                                { preserveState: true },
                                            );
                                        }}
                                        disabled={filters?.kecamatan && filteredKelurahans.length === 0}
                                    >
                                        <option value="">
                                            {filters?.kecamatan
                                                ? filteredKelurahans.length === 0
                                                    ? 'Tidak ada kelurahan'
                                                    : 'Semua Kelurahan'
                                                : 'Pilih Kecamatan terlebih dahulu'}
                                        </option>
                                        {filteredKelurahans && filteredKelurahans.length > 0
                                            ? filteredKelurahans.map((kelurahan) => (
                                                  <option key={kelurahan.id} value={kelurahan.id}>
                                                      {kelurahan.nm_kelurahan}
                                                  </option>
                                              ))
                                            : filters?.kecamatan
                                              ? null
                                              : kelurahans?.map((kelurahan) => (
                                                    <option key={kelurahan.id} value={kelurahan.id}>
                                                        {kelurahan.nm_kelurahan} - {kelurahan.kecamatan?.nm_kecamatan}
                                                    </option>
                                                ))}
                                    </select>
                                </div>

                                {/* Filter Akreditasi */}
                                <div>
                                    <label className="label-text mb-1 block text-xs font-semibold">Akreditasi:</label>
                                    <select
                                        className="select-bordered select w-full select-sm"
                                        value={filters?.akreditasi || ''}
                                        onChange={(e) => {
                                            router.get(
                                                getRouteUrl('user.sekolah.index', '/sekolah'),
                                                { ...filters, akreditasi: e.target.value || null },
                                                { preserveState: true },
                                            );
                                        }}
                                    >
                                        <option value="">Semua Akreditasi</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="Belum">Belum</option>
                                    </select>
                                </div>
                            </div>

                            {/* Notifikasi jika tidak ada sekolah yang sesuai filter */}
                            {(!sekolahsForMap || sekolahsForMap.length === 0) &&
                                (filters?.search || filters?.kecamatan || filters?.kelurahan || filters?.akreditasi) && (
                                    <div className="absolute top-12 right-2 z-[1000] max-w-xs rounded-lg bg-warning/90 p-3 shadow-lg">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="h-5 w-5 flex-shrink-0 text-warning-content" />
                                            <div>
                                                <p className="text-sm font-semibold text-warning-content">
                                                    Tidak ada sekolah yang sesuai dengan filter
                                                </p>
                                                <p className="mt-1 text-xs text-warning-content/80">
                                                    Coba ubah filter atau hapus pencarian untuk melihat semua sekolah.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            {/* Peta selalu ditampilkan */}
                            <MapView sekolahs={sekolahsForMap || []} height="500px" />

                            {/* Info jumlah sekolah di bawah peta */}
                            {sekolahsForMap && sekolahsForMap.length > 0 ? (
                                <p className="mt-2 px-4 pb-4 text-xs text-base-content/60">
                                    <span className="mr-1 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                                    Menampilkan {sekolahsForMap.length} sekolah di peta. Klik marker untuk melihat informasi sekolah.
                                </p>
                            ) : (
                                <p className="mt-2 px-4 pb-4 text-xs text-base-content/60">
                                    {filters?.search || filters?.kecamatan || filters?.kelurahan || filters?.akreditasi
                                        ? 'Tidak ada sekolah yang sesuai dengan filter.'
                                        : 'Belum ada data sekolah dengan koordinat.'}
                                </p>
                            )}
                        </div>
                    </CardBody>
                </Card>

                {/* Sekolah Grid */}
                {sekolahs.data.length === 0 ? (
                    <Card data-aos="fade-up" data-aos-delay="250">
                        <CardBody>
                            <div className="py-12 text-center">
                                <School className="mx-auto h-12 w-12 text-base-content/30" />
                                <p className="mt-4 text-base-content/70">
                                    {filters?.search || filters?.kecamatan || filters?.kelurahan || filters?.akreditasi
                                        ? 'Tidak ada sekolah yang ditemukan.'
                                        : 'Belum ada data sekolah.'}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sekolahs.data.map((sekolah, index) => (
                            <Card key={sekolah.id} data-aos="fade-up" data-aos-delay={250 + index * 50}>
                                <CardBody>
                                    {sekolah.foto_utama && (
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src={`/storage/${sekolah.foto_utama}`}
                                                alt={sekolah.nm_sekolah}
                                                className="h-48 w-full object-cover transition-transform hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="mb-2 flex items-start justify-between">
                                        <h3 className="text-lg font-bold">{sekolah.nm_sekolah}</h3>
                                        {getAkreditasiBadge(sekolah.akreditasi)}
                                    </div>
                                    <div className="space-y-2 text-sm text-base-content/70">
                                        <div className="flex items-center gap-2">
                                            <School className="h-4 w-4" />
                                            <span className="font-mono">{sekolah.npsn}</span>
                                        </div>
                                        {sekolah.kelurahan && (
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                <span>
                                                    {sekolah.kelurahan.nm_kelurahan}
                                                    {sekolah.kelurahan.kecamatan && `, ${sekolah.kelurahan.kecamatan.nm_kecamatan}`}
                                                </span>
                                            </div>
                                        )}
                                        {sekolah.no_telp && (
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4" />
                                                <span>{sekolah.no_telp}</span>
                                            </div>
                                        )}
                                        {sekolah.email && (
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4" />
                                                <span>{sekolah.email}</span>
                                            </div>
                                        )}
                                        {sekolah.website && (
                                            <div className="flex items-center gap-2">
                                                <Globe className="h-4 w-4" />
                                                <a
                                                    href={sekolah.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:underline"
                                                >
                                                    {sekolah.website}
                                                </a>
                                            </div>
                                        )}
                                        {sekolah.thn_berdiri && (
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>Berdiri: {sekolah.thn_berdiri}</span>
                                            </div>
                                        )}
                                        {sekolah.akreditasi && sekolah.akreditasi !== 'Belum' && (
                                            <div className="flex items-center gap-2">
                                                <Award className="h-4 w-4" />
                                                <span>Akreditasi: {sekolah.akreditasi}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            href={getRouteUrl('user.sekolah.show', `/sekolah/${sekolah.id}`)}
                                            className="btn w-full btn-sm btn-primary"
                                        >
                                            Lihat Detail
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {sekolahs.links.length > 3 && (
                    <div className="mt-6 flex justify-center" data-aos="fade-up">
                        <div className="join">
                            {sekolahs.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`btn join-item btn-sm ${link.active ? 'btn-active' : link.url ? '' : 'btn-disabled'}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </UserLayout>
    );
}
