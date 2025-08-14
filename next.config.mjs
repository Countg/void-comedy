/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ["assets.pippa.io", 'ewazrwzivgavdenagrnd.supabase.co'],
  
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.cdn.printful.com',
        // optionally specify port and pathname if needed
        // port: '',
        // pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
