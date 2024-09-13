import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Departments",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Create new department",
        path: "/departments/create",
        icon: <IoIcons.IoIosPaper />,
      }
    ],
  },
  {
    title: "Employees",
    path: "/employees",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Create new employee",
        path: "/employees/create",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      }
    ],
  },
];