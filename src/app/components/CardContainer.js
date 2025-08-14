export default function CardContainer({ children }) {
  return (
    <div className="border rounded-lg p-6 bg-[#131427]/40 mt-10  hover:scale-[1.01] hover:shadow-[0_0_20px_#FF6719]/20 border-[#131427] shadow-md hover:shadow-[0_0_20px_#FF6719]/20 transition-all duration-300">
      {children}
    </div>
  );
}

