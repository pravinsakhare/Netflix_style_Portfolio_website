/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    output: 'standalone', // ← Add this for Docker!
    i18n: {
        locales: ['en', 'fr', 'es'],
        defaultLocale: 'en',
    }
};

module.exports = nextConfig; // ← Only ONE export!  