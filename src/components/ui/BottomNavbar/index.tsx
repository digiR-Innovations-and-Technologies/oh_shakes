import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { CgCoffee } from "react-icons/cg";
import { SiSwiggy, SiZomato } from "react-icons/si";

const data = [
  {
    icon: <CgCoffee />,
    text: "Our Menu",
    link: "/menu",
  },
  {
    icon: <BsInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/oh.shakes/",
  },
  {
    icon: <SiSwiggy />,
    text: "Swiggy",
    link: "https://www.swiggy.com/menu/632170?source=sharing",
  },
  {
    icon: <SiZomato />,
    text: "Zomato",
    link: "https://zomato.onelink.me/xqzv/6f9flr7g",
  },
];

const BottomNavbar = () => {
  return (
    <div className="px-4 md:hidden z-[100] fixed bottom-0 left-0 right-0 py-4 h-[80px]  bg-dark-brown">
      <div className="flex justify-between gap-4">
        {data.map((item, index) => (
          <Link  key={index} href={item.link}>
            <div
             
              className="flex flex-col items-center justify-center text-light"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
