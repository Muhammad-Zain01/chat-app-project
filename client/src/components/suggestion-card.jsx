export const SuggestionCard = ({ className }) => {
  return (
    <div
      className={`p-3 border m-1 bg-card text-card-foreground rounded-md shadow w-6/12 hover:border-gray-400 ${className}`}
    >
      <h2 className="font-semibold text-md">Help me Pick</h2>
      <h2 className="font-regular text-gray-400 text-sm">
        an outfit that look good on camera
      </h2>
    </div>
  );
};
