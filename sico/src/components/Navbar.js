
import { Link } from "react-router-dom"
import { RiDashboardLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col -span-1 p-8">
        {/*Logotipo*/}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu Logo</h1>
        </div>
        {/*menu*/}
        <nav>
          <ul>
            <li>
              < Link to="/" className="flex items-center gap-4 hover:bg-purple-600 p-2 text-gray-500 hover:text-white rounded-lg p-8 transition-colors">
                <RiDashboardLine />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Productores" className="flex items-center gap-2 hover:bg-purple-600 p-2 hover:text-white rounded-lg p-8 transition-colors">
                <BsPeopleFill />
                Productor
              </Link>
            </li>
            <li>
              <Link to ="/Empleados" className="flex items-center gap-4 hover:bg-purple-600 p-2 hover:text-white rounded-lg p-8 transition-colors">
                <FaPeopleCarry />
                Empleados
              </Link>
            </li>
            <li>
              <Link to="/Planilla" className="flex items-center gap-4 hover:bg-purple-600 p-2 hover:text-white rounded-lg p-8 transition-colors">
                <FaListCheck />
                Planilla
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col -span-5"></div>{/*contenido*/}
    </div>
  );
};
export default Navbar;
