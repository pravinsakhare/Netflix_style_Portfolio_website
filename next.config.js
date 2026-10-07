/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true,
    },
    output: 'export',
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
    // Note: allowedDevOrigins left as-is if present previously; remove if incompatible with Next export
    allowedDevOrigins: ['*'],
};

module.exports = nextConfig;  