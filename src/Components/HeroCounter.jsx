import counterImg from "../assets/vector1.png";
const HeroCounter = ({ ticketData, resolvedData }) => {
  return (
    <div className="container mx-auto grid grid-cols-2 py-[80px] gap-6 ">
      <div className="flex justify-center items-center flex-col text-white py-[70px] bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] rounded-2xl relative overflow-hidden">
        <img src={counterImg} className="absolute top-0 left-0 w-2/5 h-full" />
        <img
          src={counterImg}
          className="absolute top-0 right-0 w-2/5 h-full transform scale-x-[-1]"
        />
        <p className="text-2xl font-normal">In-Progress</p>
        <h1 className="text-6xl font-semibold">{ticketData.length}</h1>
      </div>
      <div className="flex justify-center items-center flex-col text-white py-[70px] bg-gradient-to-tl to-[#00827A] from-[#54CF68] rounded-2xl relative overflow-hidden">
        <img src={counterImg} className="absolute top-0 left-0 w-2/5 h-full" />
        <img
          src={counterImg}
          className="absolute top-0 right-0 w-2/5 h-full transform scale-x-[-1]"
        />
        <p className="text-2xl font-normal">Resolved</p>
        <h1 className="text-6xl font-semibold">{resolvedData.length}</h1>
      </div>
    </div>
  );
};

export default HeroCounter;
