/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration here

  // Add the following lines to enable export
  // This assumes you want to export the static HTML files
  experimental: {
    output: 'export',
  },
};

module.exports = nextConfig;
