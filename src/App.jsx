import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import IssuesManagement from "./Components/IssuesManagement/IssuesManagement";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";

const fetchTicketData = async () => {
  const res = fetch("data.json");
  return (await res).json();
};
function App() {
  const fetchPromise = fetchTicketData();
  return (
    <div className=" bg-[#F5F5F5]">
      <Navbar></Navbar>

      <Suspense fallback={<Spinner></Spinner>}>
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
