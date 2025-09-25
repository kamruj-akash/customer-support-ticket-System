import { BiError } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const TaskStatus = ({
  ticketData,
  setTicketData,
  resolvedData,
  setResolvedData,
  allData,
  setAllData,
}) => {
  // handle complete task
  const completeTaskHandler = (getData) => {
    const newTicketData = ticketData.filter((elem) => elem != getData);
    setTicketData(newTicketData);

    const changeToResolved = allData.find((elem) => elem == getData);
    changeToResolved.status = "Resolved";
    setResolvedData([...resolvedData, getData]);

    const remainingAllData = allData.filter((elem) => elem != getData);
    setAllData(remainingAllData);

    // toast massage
    toast.success("Complete Task", {
      position: "top-right",
    });
  };

  // handle remove task
  const MdRemoveDoneHandler = (data) => {
    const remainingResolvedData = resolvedData.filter((elem) => elem != data);
    setResolvedData(remainingResolvedData);

    //toast mas
    toast.success("Remove Task Successful", {
      position: "top-right",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-semibold text-[#34485A] mb-1">
          Customer Tickets
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        {ticketData.length == 0 && (
          <div className="bg-white p-5 rounded-xl flex items-center justify-center gap-2 flex-col ">
            <BiError className="text-5xl"></BiError>
            <p>No In-Process tasks yet.</p>
          </div>
        )}

        {ticketData.map((data, index) => (
          <div key={index} className="bg-white rounded-2xl p-4">
            <h1 className="text-[#001931] font-medium text-[18px]">
              {data.subject}
            </h1>
            <button
              onClick={() => completeTaskHandler(data)}
              className="w-full mt-3 bg-green-600 py-3 rounded-md text-xl font-semibold text-white cursor-pointer"
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      <div>
        <h1 className="md:col-span-2 text-2xl font-semibold text-[#34485A] mb-5">
          Resolved Task
        </h1>

        {resolvedData.length == 0 && (
          <div className="bg-white p-5 rounded-xl flex items-center justify-center gap-2 flex-col ">
            <BiError className="text-5xl"></BiError>
            <p>No Resolved tasks yet.</p>
          </div>
        )}

        {resolvedData.map((data, index) => (
          <div
            key={index}
            className="bg-green-200 p-5 rounded-xl shadow-sm shadow-green-300 mb-5"
          >
            <h1 className="text-[#001931] font-medium text-[18px] mb-2">
              {data.subject}
            </h1>
            <div className="flex justify-between items-center">
              <p className="text-green-500 flex items-center gap-2">
                <FaCheck /> Completed
              </p>
              <button
                onClick={() => MdRemoveDoneHandler(data)}
                className="text-sm text-gray-600 cursor-pointer"
              >
                Click To Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
