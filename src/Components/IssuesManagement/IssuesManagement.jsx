import { use } from "react";
import TaskStatus from "./TaskStatus";
import TicketCard from "./TicketCard";

const IssuesManagement = ({ fetchPromise }) => {
  const ticketData = use(fetchPromise);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-3 gap-5">
        <h1 className="md:col-span-2 text-2xl font-semibold text-[#34485A] mb-1">
          Customer Tickets
        </h1>
        {ticketData.map((data) => (
          <TicketCard data={data} key={data.ticketId}></TicketCard>
        ))}
      </div>
      <TaskStatus></TaskStatus>
    </div>
  );
};

export default IssuesManagement;
