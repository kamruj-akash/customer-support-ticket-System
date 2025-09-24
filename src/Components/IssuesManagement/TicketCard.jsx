import { FaCalendarAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { toast } from "react-toastify";

const TicketCard = ({ data, ticketData, setTicketData }) => {
  const handleTask = (dataSend) => {
    dataSend.status = "In-Progress";

    if (ticketData.find((elem) => elem == dataSend)) {
      toast.warn(`Ticket status Already in ${dataSend.status}`, {
        position: "top-right",
      });
    } else {
      toast.success(`Ticket status changed to ${dataSend.status}`, {
        position: "top-right",
      });
      setTicketData([...ticketData, dataSend]);
    }
  };

  // const showError = () => {

  // };

  return (
    <div
      onClick={() => handleTask(data)}
      className=" bg-white p-4 rounded-xl shadow-md cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[#001931] text-[16px]">
          {data.subject}
        </h1>
        <button
          className={`flex justify-center items-center py-2 px-3 rounded-2xl ${
            data.status == "Open"
              ? "bg-green-200 text-green-700"
              : data.status == "In-Progress" && "bg-yellow-200 text-yellow-700"
          }  `}
        >
          <GoDotFill className="text-xl"></GoDotFill>
          {data.status}
        </button>
      </div>
      <p className="mt-2 mb-4 text-[16px] font-light text-[#627382]">
        {data.description}
      </p>
      <div className="flex justify-between items-center text-[16px] font-light text-[#627382]">
        <div className="flex gap-5 w-1/2">
          <p className="">#{data.ticketId}</p>
          <p
            className={`uppercase ${
              data.priority == "HIGH"
                ? "text-red-500"
                : data.priority == "MEDIUM"
                ? "text-yellow-500"
                : data.priority == "LOW" && "text-green-500"
            }`}
          >
            {data.priority} Priority
          </p>
        </div>
        <div className="flex gap-5 w-1/2 items-center">
          <p className="">{data.requestedBy}</p>
          <p className="flex items-center gap-1">
            <FaCalendarAlt />
            {data.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
