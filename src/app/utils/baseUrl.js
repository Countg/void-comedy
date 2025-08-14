export function getBaseUrl() {
 if (process.env.VERCEL_URL) {
  return `https://${process.env.VERCEL_URL}`;
}

if (process.env.NODE_ENV === 'production') {
  return 'https://gavinstephens.ca'; // Your real domain
}

return 'http://localhost:3000';
}
