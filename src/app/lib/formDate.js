 // Helper to format the date (e.g., "June 10, 2024, 7:00 PM")
   export default function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
     
      });
    }