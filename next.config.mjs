/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
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

      
      // YouTube video thumbnails
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      // Substack post images
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'substack-post-media.s3.amazonaws.com',
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

