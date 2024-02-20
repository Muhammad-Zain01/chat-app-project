export const SuggestionCard = ({ className, title, subTitle, onClick }) => {
  return (
    <div
      className={`p-3 border m-1 bg-card text-card-foreground rounded-md shadow w-6/12 hover:border-gray-400 ${className}`}
      onClick={onClick}
    >
      <h2 className="font-semibold text-md">{title}</h2>
      <h2 className="font-regular text-gray-400 text-sm">{subTitle}</h2>
    </div>
  );
};
