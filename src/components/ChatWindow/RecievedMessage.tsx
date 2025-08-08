const RecievedMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-start gap-3">
      <img src="https://i.pravatar.cc/40?img=5" className="w-8 h-8 rounded-full" alt="Janice Contreras" />
      <div className="bg-white dark:bg-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm">{message}</div>
    </div>
  );
};

export default RecievedMessage;
