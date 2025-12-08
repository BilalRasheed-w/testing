import axios from "axios";

const url = "";

const Attendance = () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  const time = today.toLocaleTimeString();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const moment = weekday + " " + date + " " + time;

  const handleSubmit = async () => {
    
    alert("Attendance submitted successfully");
    // try {
      // const res = await axios.post(url,moment)
    // } catch (error) {

    // }
  };

  return (
    <div className="bg-blue backdrop-blur-lg  text-white  rounded-xl h-full py-5 px-8 flex flex-col space-y-6  ">
      <div className=" ">
        <h1 className=" xl:text-3xl 2xl:text-5xl mb-2 ">Attendance</h1>
        <hr />
      </div>
      <div className="flex items-center gap-8 ">
        <p className="rounded-xl  2xl:text-2xl border-2 border-green-300 px-8 py-2 text-shadow-lg text-shadow-pink-500   text-white">
          {moment}
        </p>
        <button
          onClick={handleSubmit}
          className="bg-green-400 text-black 2xl:text-xl
          hover:scale-110 transition-transform px-7 py-2 cursor-pointer rounded-xl "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Attendance;
