import axios from "axios";

const token = process.env.PRINTFUL_TOKEN;
const api = "https://api.printful.com/store/products";

let cachedProducts = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

const productData = async () => {
  // Use cached result in dev to reduce API calls
  if (process.env.NODE_ENV === "development") {
    const now = Date.now();
    if (cachedProducts && now - lastFetchTime < CACHE_TTL) {
      return cachedProducts;
    }
  }

  try {
    const response = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const products = response.data;

    // Cache only in dev
    if (process.env.NODE_ENV === "development") {
      cachedProducts = products;
      lastFetchTime = Date.now();
    }

    return products;
  } catch (error) {
    console.error(
      "❌ Error fetching Printful products:",
      error.response?.data || error.message
    );
    return [];
  }
};

export default productData;






