const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-32 h-32 border-5 border-solid border-transparent rounded-full border-t-red-500 animate-spin">
        <div className="absolute inset-0 rounded-full border-5 border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-5 border-t-green-500 animate-spin animation-delay-150"></div>
        <div className="absolute inset-0 rounded-full border-5 border-t-yellow-500 animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default Spinner;
