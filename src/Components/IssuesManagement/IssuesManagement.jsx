import { use, useState } from "react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-3 gap-5">
          <h1 className="md:col-span-2 text-2xl font-semibold text-[#34485A] mb-1">
            Customer Tickets
          </h1>
          {allData.map((data) => (
            <TicketCard
              resolvedData={resolvedData}
              ticketData={ticketData}
              setTicketData={setTicketData}
              data={data}
              key={data.ticketId}
            ></TicketCard>
          ))}
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
