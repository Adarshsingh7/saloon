import { useState } from "react";
import Table from "../components/Table";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const data = [
  {
    product: {
      name: "Laptop",
      category: "Electronics",
      details: {
        brand: "BrandA",
        model: "X100",
        price: 1200.99,
      },
    },
    stock: {
      quantity: 50,
      warehouse: "WarehouseA",
    },
    supplier: {
      name: "Tech Supplies Co.",
      contact: {
        phone: "987-654-3210",
        email: "contact@techsupplies.com",
      },
    },
  },
  {
    product: {
      name: "Smartphone",
      category: "Electronics",
      details: {
        brand: "BrandB",
        model: "Y200",
        price: 799.99,
      },
    },
    stock: {
      quantity: 200,
      warehouse: "WarehouseB",
    },
    supplier: {
      name: "Mobile World",
      contact: {
        phone: "555-123-4567",
        email: "sales@mobileworld.com",
      },
    },
  },
  {
    product: {
      name: "Headphones",
      category: "Accessories",
      details: {
        brand: "BrandC",
        model: "Z300",
        price: 150.49,
      },
    },
    stock: {
      quantity: 150,
      warehouse: "WarehouseC",
    },
    supplier: {
      name: "Audio Gear Inc.",
      contact: {
        phone: "321-654-0987",
        email: "support@audiogear.com",
      },
    },
  },
  {
    product: {
      name: "Smartwatch",
      category: "Wearables",
      details: {
        brand: "BrandD",
        model: "W400",
        price: 250.75,
      },
    },
    stock: {
      quantity: 75,
      warehouse: "WarehouseA",
    },
    supplier: {
      name: "Gadget Hub",
      contact: {
        phone: "456-789-0123",
        email: "info@gadgethub.com",
      },
    },
  },
  {
    product: {
      name: "Tablet",
      category: "Electronics",
      details: {
        brand: "BrandE",
        model: "T500",
        price: 899.99,
      },
    },
    stock: {
      quantity: 120,
      warehouse: "WarehouseB",
    },
    supplier: {
      name: "Tablet World",
      contact: {
        phone: "654-321-9876",
        email: "contact@tabletworld.com",
      },
    },
  },
  {
    product: {
      name: "Camera",
      category: "Photography",
      details: {
        brand: "BrandF",
        model: "C600",
        price: 1350.0,
      },
    },
    stock: {
      quantity: 30,
      warehouse: "WarehouseC",
    },
    supplier: {
      name: "Photo Supplies",
      contact: {
        phone: "789-012-3456",
        email: "orders@photosupplies.com",
      },
    },
  },
];

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
          <Table data={data} />
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
