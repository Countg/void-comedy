/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Printful
      {
        protocol: 'https',
        hostname: 'files.cdn.printful.com',
        pathname: '/**',
      },
      // Supabase storage
      {
        protocol: 'https',
        hostname: 'ewazrwzivgavdenagrnd.supabase.co',
        pathname: '/**',
      },

      
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.site.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

