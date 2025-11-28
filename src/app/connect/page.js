import ConnectPage from "@/components/Connect";

import showDates from "@/lib/showDates"



export default async function Connect() {
let shows = []

try {
  [shows] = await Promise.all([
    showDates().catch((err) => {
      console.error("Failed to fetch shows:", err);
      return [];
    }),
]);
} catch (err) {
  console.error("Unexpected fetch error:", err);
}



    return (
        <ConnectPage shows={shows} />
    )
}