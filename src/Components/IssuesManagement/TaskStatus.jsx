const TaskStatus = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-semibold text-[#34485A] mb-1">
          Customer Tickets
        </h1>
      </div>
      <div className="bg-white rounded-2xl p-4">
        <h1 className="text-[#001931] font-medium text-[18px]">
          Payment Failed - Card Declined
        </h1>
        <button className="w-full mt-3 bg-green-600 py-3 rounded-md text-xl font-semibold text-white">
          Complete
        </button>
      </div>
      <div>
        <h1 className="md:col-span-2 text-2xl font-semibold text-[#34485A] mb-1">
          Resolved Task
        </h1>
        <p>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TaskStatus;
