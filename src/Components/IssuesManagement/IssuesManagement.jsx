import { use, useState } from "react";
import { BiError } from "react-icons/bi";
import HeroCounter from "../HeroCounter";
import TaskStatus from "./TaskStatus";
import TicketCard from "./TicketCard";
const IssuesManagement = ({ fetchPromise }) => {
  const promiseData = use(fetchPromise);

  const [allData, setAllData] = useState(promiseData);
  const [ticketData, setTicketData] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);
  // console.log(ticketData);

  return (
    <>
      <HeroCounter
        ticketData={ticketData}
        resolvedData={resolvedData}
      ></HeroCounter>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <h1 className="text-2xl font-semibold text-[#34485A] mb-5">
            Customer Tickets
          </h1>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
            {allData.length === 0 ? (
              <div className="col-span-full bg-white p-5 rounded-xl flex items-center justify-center gap-2 flex-col h-[500px]">
                <BiError className="text-8xl opacity-60" />
                <p>No tasks yet.</p>
              </div>
            ) : (
              allData.map((data) => (
                <div key={data.ticketId} className="w-full h-full">
                  <TicketCard
                    resolvedData={resolvedData}
                    ticketData={ticketData}
                    setTicketData={setTicketData}
                    data={data}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <TaskStatus
          setTicketData={setTicketData}
          ticketData={ticketData}
          resolvedData={resolvedData}
          setResolvedData={setResolvedData}
          allData={allData}
          setAllData={setAllData}
        ></TaskStatus>
      </div>
    </>
  );
};

export default IssuesManagement;
