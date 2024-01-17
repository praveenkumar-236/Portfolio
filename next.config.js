/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration here

  // Add the following line to enable export
  // This assumes you want to export the static HTML files
  // If you have other configurations, you may need to adjust accordingly
  output: {
    // Set to true to enable static HTML export
    export: true,
  },
};

module.exports = nextConfig;
