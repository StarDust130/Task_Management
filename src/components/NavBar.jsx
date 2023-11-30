
import { AiOutlineHome } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="  items-center  ">
      <NavLink to="/">
        <AiOutlineHome />
      </NavLink>

      <NavLink to="/list">
        <FaRegListAlt />
      </NavLink>

      <NavLink to="/add">
        <IoMdAddCircleOutline className="text-3xl" />
      </NavLink>
      <NavLink to="/edit">
        <FaRegEdit />
      </NavLink>

      <div className="tooltip-container">
        <a
          href="https://github.com/StarDust130"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> <span className="tooltiptext">My GitHub</span>
        </a>
      </div>
    </nav>
  );
}
export default NavBar;
