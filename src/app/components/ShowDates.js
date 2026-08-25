import abbreviateCountry from "../lib/country";

export default function ShowDates({ comedy = [] }) {
  return (
    <section id="shows" className="pbo-section">
      <div className="pbo-kicker">Live Show Dates</div>

      <div className="pbo-tourlist">
        {Array.isArray(comedy) && comedy.length > 0 ? (
          comedy.map((show, i) => {
            if (!show || !show.venue) return null;
            const { datetime, venue, url } = show;

            return (
              <div key={show.id || i} className="pbo-tourrow">
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="venue">{venue.name}</span>
                <span className="date">
                  {datetime
                    ? new Date(datetime).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "Date TBA"}{" "}
                  · {venue.city || "Unknown City"},{" "}
                  {abbreviateCountry(venue.country || "Unknown Country")}
                </span>
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="tix">
                    Tickets
                  </a>
                ) : (
                  <span />
                )}
              </div>
            );
          })
        ) : (
          <div className="pbo-empty">No upcoming shows.</div>
        )}
      </div>
    </section>
  );
}
