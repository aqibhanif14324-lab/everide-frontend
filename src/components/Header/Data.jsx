import { MdOutlinePayment } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export const topHeader = [
    {
        icon: <MdOutlinePayment size={23} />,
        title: "Secure Payment",
        hide:false
    }
    ,{
        icon: <IoCubeOutline size={23} />,
        title: "Integrated Delivery",
        hide:false
    },
    {
        icon: <RiSecurePaymentLine size={23} />,
        title: "Purchase Protection",
    },
    {
        icon: <FaArrowRightArrowLeft size={23} />,
        title: "Satisfied or your money back",
        hide:true
    }

]
export const middleHeader = [
    {
      categories: ["Sports", "Lifestyle"],
    },
    {
      categories: ["Men", "Women","Children"],
    },
    {
      categories: ["Brands"],
    },
  ];

  export const  activities = ["snow", "climb", "camp & hike", "run", "cycle", "fly", "water"];
