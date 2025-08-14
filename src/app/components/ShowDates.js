import CardContainer from "./CardContainer";
import abbreviateCountry from "../lib/country";


export default function ShowDates({ comedy = [] }) {


  return (
    <CardContainer>
      <h2 className="text-accent-orange font-bold text-xl mb-2 font-mono tracking-wide" id="shows">
        LIVE SHOW DATES
      </h2>

    <div className="border border-white/10 p-4 mt-6 w-full max-w-full space-y-4">


        {Array.isArray(comedy) && comedy.length > 0 ? (
          comedy.map((show, i) => {
            if (!show || !show.venue) return null;
            const { datetime, venue, url } = show;

            return (
              <div
                key={show.id || i}
                className="flex justify-between items-center gap-4 border-t border-white/10 pt-4 first:border-none hover:bg-white/5 rounded-md p-3 transition-colors"
              >
                <div className="flex flex-col">
                  <p className="text-accent-orange uppercase text-md font-mono">
                    {venue.name}
                  </p>
                  <p className="text-white/60 text-sm">
                    {datetime
                      ? new Date(datetime).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Date TBA"}{" "}
                    · {venue.city || "Unknown City"},{" "}
                    {abbreviateCountry(venue.country || "Unknown Country")}
                  </p>
                </div>

                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1 px-1 py-1 text-sm font-mono font-semibold text-dark-indigo bg-accent-orange rounded hover:brightness-110 transition"
                  >
                    🎟️ Tickets
                  </a>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-[#b3b3b3] font-mono">No upcoming shows.</div>
        )}
      </div>
    </CardContainer>
  );
}



