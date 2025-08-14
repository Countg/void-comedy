  export default function abbreviateCountry(country) {
    const map = {
      UnitedStates: "US",
      Canada: "CA",
      Australia: "AU",
      UnitedKingdom: "UK",
      Germany: "DE",
      France: "FR",
    };
    return map[country] || country;
  }