import ConnectPage from "@/components/Connect";
import showDates from "@/lib/showDates";

export default async function Connect() {
  let shows = [];

  try {
    shows = await showDates();
  } catch (err) {
    console.error("Failed to fetch shows:", err);
  }

  return <ConnectPage shows={shows} />;
}
