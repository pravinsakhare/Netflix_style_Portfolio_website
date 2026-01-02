/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    output: 'standalone',
    // Tempo configuration
    devIndicators: {
        appIsrStatus: false,
    },
    webpack: (config) => {
        config.watchOptions = {
            ...config.watchOptions,
            ignored: ['**/tempobook/**', '**/node_modules/**'],
        };
        return config;
    },
    // Allow external hosts in development for Tempo
    allowedDevOrigins: ['*'],
};

module.exports = nextConfig;  