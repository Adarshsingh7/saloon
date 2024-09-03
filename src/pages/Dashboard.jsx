import { useState } from "react";
import Table from "../components/Table";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section>
      <div className="flex md:min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-full md:w-60 p-5" : "w-20 items-center px-2 py-5"
          } bg-white flex flex-col justify-between transition-width duration-100 h-screen `}
        >
          <div>
            {/* <div className="p-2 pl-4">
              <RxHamburgerMenu fontSize={22} onClick={toggleSidebar} />
              <p>Saloon</p>
            </div> */}
            <nav className="md:mt-1 mt-2">
              <ul className="space-y-3">
                <div onClick={toggleSidebar}>
                  <SidebarItem
                    isSidebarOpen={isSidebarOpen}
                    icon={<RxHamburgerMenu size={25} />}
                  >
                    Collapse
                  </SidebarItem>
                </div>
                <SidebarItem
                  isSidebarOpen={isSidebarOpen}
                  icon={<HiOutlineComputerDesktop size={25} />}
                >
                  Dashboard
                </SidebarItem>
                <SidebarItem
                  isSidebarOpen={isSidebarOpen}
                  icon={<BsCartPlus size={25} />}
                >
                  Product
                </SidebarItem>

                <SidebarItem
                  isSidebarOpen={isSidebarOpen}
                  icon={<MdAccountCircle size={25} />}
                >
                  Curstomer
                </SidebarItem>

                <SidebarItem
                  isSidebarOpen={isSidebarOpen}
                  icon={<RiMoneyPoundCircleLine size={25} />}
                >
                  Income
                </SidebarItem>

                <SidebarItem
                  isSidebarOpen={isSidebarOpen}
                  icon={<IoSettingsOutline size={25} />}
                >
                  Subscription
                </SidebarItem>
              </ul>
            </nav>
          </div>

          <SideboarFooter
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </aside>

        {/* Main Content */}
        <main
          className={`relative transition-margin duration-100 ease-in-out md:flex-1 md:block   ${
            isSidebarOpen ? "hidden" : "block w-full"
          } h-screen overflow-x-auto`}
        >
          {/* <div className="border border-dashed border-gray-400 rounded-md flex items-center justify-center  h-full">
          </div> */}
          <Table />
        </main>
      </div>
    </section>
  );
}

function SidebarItem({ isSidebarOpen, icon, children }) {
  return (
    <li>
      <div
        className={`group flex items-center px-3 py-2 text-sm text-gray-500 ${
          children === "Collapse" ? "" : "hover:bg-black hover:text-white"
        }  rounded-lg justify-between cursor-pointer`}
      >
        <span className="flex items-center">
          {icon}
          <span className={`${isSidebarOpen ? "block ml-3" : "hidden"}`}>
            {children}
          </span>
        </span>
      </div>
    </li>
  );
}

function SideboarFooter({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className="flex flex-col gap-10">
      {isSidebarOpen ? (
        <div>
          <div className="group flex items-center pr-3 py-2 text-sm text-gray-500 rounded-lg justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <FaRegCircleUser size={40} />

              <p className="flex flex-col">
                <span className="text-sm text-black font-bold">
                  Aubrey Hepburn
                </span>
              </p>
            </span>
          </div>
        </div>
      ) : (
        <FaRegCircleUser size={50} />
      )}
    </div>
  );
}
