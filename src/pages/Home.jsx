import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full h-screen bg-black">
        <div className="md:hidden  ">
          <img src={hero} alt="hero" className="" />
        </div>

        <div className="md:hidden">
          <div className="">
            <h1 className="text-3xl lg:hidden text-blue-500 font-bold font-serif">
              Manage Your All Tasks
            </h1>
            <p className="font-semibold text-gray-400 ml-[110px] md:hidden mt-2 lg:hidden">
              Anytime, Anywhere
            </p>
          </div>

          <div className="flex justify-center items-center md:hidden">
            <Link to="/add">
              <button className="mt-4 md:mt-10  rounded-lg font-bold btn-grad btn-grad:hover">
                Add Task
              </button>
            </Link>
          </div>
        </div>

        <div className=" hidden md:block md:w-full bg-cover ">
          <img src={bg} alt="bg" />

          <div className="">
            <h1 className="text-3xl  md:block hidden  lg:text-6xl absolute top-60 left-40  text-blue-500 font-bold font-serif">
              Manage Your All Tasks
            </h1>
            <p className="font-semibold absolute top-72 mt-10 left-40 text-gray-400 ml-[110px] md:ml-0  lg:text-2xl">
              Anytime, Anywhere
            </p>
          </div>

          <div className="flex justify-center items-center absolute bottom-40 left-40 md:block">
            <Link to="/add">
              <button className="mt-4 md:mt-10 hidden md:block  rounded-lg font-bold btn-grad btn-grad:hover">
                Add Task
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
