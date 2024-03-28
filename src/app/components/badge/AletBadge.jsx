export const AlertBadge = ({ message }) => {
  return (
    <div className="bg-red-900/50 border border-red-500 text-red-500 rounded-2xl px-3 shadow font-medium">
      {message}
    </div>
  );
};
