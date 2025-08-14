export function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === 'production') {
    // Replace with your real domain if not Vercel
    return 'https://your-production-domain.com';
  }

  return 'http://localhost:3000';
}
