export function Spinner({
  size = "text-6xl",
  color = "bg-indigo-600",
  speed = "animate-spin",
}) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`border-4 border-t-4 border-${color} border-opacity-50 w-24 h-24 rounded-full ${size} ${speed} transform hover:scale-110 transition-all duration-300 shadow-lg`}
      />
    </div>
  );
}
