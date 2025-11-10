// Data/data.js
import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { GiMonclerJacket, GiShoebillStork, GiSonicShoes } from "react-icons/gi";
import { MdToys } from "react-icons/md";
import { TbShoppingBagSearch } from "react-icons/tb";

export const navData = {
  // 1. Sports (multi_section)
  sports: {
    type: "multi_section",
    title: "Sports",
    sections: [
      {
        title: "SKI | SNOW",
        image:
          "https://static.everide.app/hCu85_F4q-DB7r9pv4rOXtJIjo0_eiejuPO8SmDoThY/rs:fill:288:432:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMV8xNjgwNjAwMDU2LTE2ODA2MDAwNTYtOGIzMmUuanBn.webp",
        subcategories: [
          { title: "Clothes", link: "/ski-snow/clothes" },
          { title: "Equipment", link: "/ski-snow/equipment" },
          { title: "Shoes", link: "/ski-snow/shoes" },
          { title: "Masks & Helmets", link: "/ski-snow/masks-helmets" },
          { title: "Backpacks & Covers", link: "/ski-snow/backpacks-covers" },
          { title: "Accessories", link: "/ski-snow/accessories" },
          { title: "Avalanche Safety", link: "/ski-snow/avalanche-safety" },
        ],
      },
      {
        title: "Climbing | Mountaineering",
        image:
          "https://static.everide.app/K-uD77x3W4ESBxwf4VJRKQR_Ji7WB51Z8WeMQyhH7Xs/rs:fill:288:432:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzhfMTY4MDYwMDI1Ny0xNjgwNjAwMjU3LWExODQxLmpwZw.jpg",
        subcategories: [
          { title: "Clothes", link: "/climbing/clothes" },
          { title: "Shoes", link: "/climbing/shoes" },
          { title: "Material", link: "/climbing/material" },
          { title: "Backpacks", link: "/climbing/backpacks" },
          { title: "Accessories", link: "/climbing/accessories" },
        ],
      },
      {
        title: "Hiking | Bivouac",
        image:
          "https://static.everide.app/FU9VqlaoP5Hdfri90G3ZoflevmqDNzctge4plVopJbM/rs:fill:288:432:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfNjhfMTY4MDYwMTQyMC0xNjgwNjAxNDIwLTMxOWJhLmpwZw.webp",
        subcategories: [
          { title: "Clothes", link: "/hiking/clothes" },
          { title: "Shoes", link: "/hiking/shoes" },
          { title: "Backpacks", link: "/hiking/backpacks" },
          { title: "Tents & Camping", link: "/hiking/tents-camping" },
          { title: "Accessories", link: "/hiking/accessories" },
        ],
      },
      {
        title: "Trail | Running",
        image:
          "https://static.everide.app/pakqUNnyvvqz2pJVB2dESWEWNseFuSh7CewBZgz_zK8/rs:fill:288:432:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfOTdfMTY4MDYwMTM0Ni0xNjgwNjAxMzQ2LTE2ZTgzLmpwZw.webp",
        subcategories: [
          { title: "Clothes", link: "/trail/clothes" },
          { title: "Shoes", link: "/trail/shoes" },
          { title: "Bags & Belts", link: "/trail/bags-belts" },
          { title: "Accessories", link: "/trail/accessories" },
        ],
      },
      {
        title: "Bicycles | Mountain Bikes",
        image:
          "https://static.everide.app/reXiT6fIQhG-9CPRK6y3HOF-QsQL5rP1VkU5WxrWScs/rs:fill:288:432:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMjE3XzE2ODA2MDA1MDEtMTY4MDYwMDUwMS0xMTc4Ni5qcGc.webp",
        subcategories: [
          { title: "Bicycles", link: "/bicycles" },
          { title: "Pilot Equipment", link: "/bicycles/pilot-equipment" },
          { title: "Clothes", link: "/bicycles/clothes" },
          { title: "Saddlebags", link: "/bicycles/saddlebags" },
          { title: "Accessories", link: "/bicycles/accessories" },
        ],
      },
      {
        title: "Flight | Paragliding",
        image:
          "https://static.everide.app/OwSm82ORfiYl1UcvvBE-rrx15ckgocXpB8UpgGg-ltM/rs:fill:288:432:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzEwXzE2ODA2MDExODEtMTY4MDYwMTE4MS0zNGNmOC5qcGc.webp",
        subcategories: [
          { title: "Wings", link: "/flight/wings" },
          { title: "Harnesses", link: "/flight/harnesses" },
          { title: "Instruments", link: "/flight/instruments" },
          { title: "Accessories", link: "/flight/accessories" },
        ],
      },
    ],
  },

  // 2. Outdoor (tabbed_sections)
  outdoor: {
    type: "tabbed_sections",
    title: "Outdoor",
    categories: [
      {
        icon:<GiMonclerJacket size={23} />,
        title: "Clothes",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["T-Shirts", "Jackets", "Pants", "Shorts", "Accessories","Pants", "Shorts", "Accessories","Pants", "Shorts", "Accessories","Pants", "Shorts", "Accessories","Pants", "Shorts", "Accessories"],
      },
      {
        icon:<GiSonicShoes size={23}/>,
        title: "Shoes",
        image: "https://static.everide.app/K-og0VTUbD80mGbS-G8V4aFzBYBfFUFk-J6FSMVQC5o/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjMxXzE2NDc5NjIzNDktMTY0Nzk2MjM0OS1mYjE2NC5qcGc.webp",
        items: ["Sneakers", "Boots", "Sandals", "Flip Flops"],
      },
      {
        icon:<TbShoppingBagSearch size={23}/>,
        title: "Bags",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Backpacks", "Hand Bags", "Luggage Storage"],
      },
      {
        icon:<FiWatch size={23}/>,
        title: "Accessories",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Hats", "Belts", "Sunglasses"],
      },
    ],
  },

  // 3. Children (tabbed_sections)
  children: {
    type: "tabbed_sections",
    title: "Children",
    categories: [
      {
        icon:<GiMonclerJacket size={23} />,
        title: "Kids Clothes",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Jackets", "Pants", "Shirts"],
      },
      {
        icon:<GiShoebillStork size={23} />,
        title: "Kids Shoes",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Boots", "Sneakers"],
      },
      {
        icon:<MdToys size={23} />,
        title: "Toys",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Balls", "Ropes", "Boards"],
      },
    ],
  },

  // 4. Lifestyle (tabbed_sections)
  lifestyle: {
    type: "tabbed_sections",
    title: "Lifestyle",
    categories: [
      {
        icon:<GiMonclerJacket size={23} />,
        title: "Clothes",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["T-Shirts", "Jackets", "Pants", "Shorts", "Accessories"],
      },
      {
        icon:<GiSonicShoes size={23} />,
        title: "Shoes",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Sneakers", "Boots", "Sandals", "Flip Flops"],
      },
      {
        icon:<TbShoppingBagSearch size={23} />,
        title: "Bags",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Backpacks", "Hand Bags", "Luggage Storage"],
      },
      {
        icon:<FiWatch size={23}/>,
        title: "Accessories",
        image: "https://static.everide.app/ZMawI-F9UrQJqSNmhW0Heao8ghniogorQgMhs4HjfeY/rs:fill:408:544:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfMjIxXzE2NDc5NjIzMDItMTY0Nzk2MjMwMi1iN2ZiNS5qcGc.webp",
        items: ["Hats", "Belts", "Sunglasses"],
      },
    ],
  },

  // 5. Brands (brand_sections)
  brands: {
    type: "brand_sections",
    title: "Brands",
    bestSellers: [
      {
        title: "Best Sellers",
        brands: [
          {
            name: "The North Face",
            link: "/the-north-face",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
          {
            name: "Mammut",
            link: "/mammut",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
          {
            name: "Montbell",
            link: "/montbell",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
          {
            name: "Marmot",
            link: "/marmot",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
          {
            name: "Mountain Hardwear",
            link: "/mountain-hardwear",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
          {
            name: "Black Diamond",
            link: "/black-diamond",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
          {
            name: "Petzl",
            link: "/petzl",
            logo: "https://static.everide.app/o_vIS9VLUIe2eCM8p6-EtAZnNhdAvR7Qg7O8j_MFMkk/rs:fit:50:50:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc183N18xNjQ0OTE4MzA4LTE2NDQ5MTgzMDgtMDRkNDMucG5n.webp",
          },
        ],
      },
    ],
    partners: {
      subtitle: "Partners",
      description: "Reconditioned and guaranteed",
      brands: [
        {
          name: "The North Face",
          link: "/the-north-face",
          logo: "https://example.com/logo1.jpg",
          image: "https://static.everide.app/wKeUPAFupADtjnCHlsIhT7pvF2xSUnJxsUUQYe4EIrw/rs:fill:460:276:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc19wYXJ0bmVyX2ltYWdlXzU2M18xNjYxNzg1ODYwLTE2NjE3ODU4NjAtYmEzZjYuanBn.jpg",
        },
        {
          name: "Mammut",
          link: "/mammut",
          logo: "https://example.com/logo2.jpg",
          image: "https://static.everide.app/wKeUPAFupADtjnCHlsIhT7pvF2xSUnJxsUUQYe4EIrw/rs:fill:460:276:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc19wYXJ0bmVyX2ltYWdlXzU2M18xNjYxNzg1ODYwLTE2NjE3ODU4NjAtYmEzZjYuanBn.jpg",
        },
        {
          name: "Montbell",
          link: "/montbell",
          logo: "https://example.com/logo3.jpg",
          image: "https://static.everide.app/wKeUPAFupADtjnCHlsIhT7pvF2xSUnJxsUUQYe4EIrw/rs:fill:460:276:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9icmFuZHNfaW1hZ2VzL2JyYW5kc19wYXJ0bmVyX2ltYWdlXzU2M18xNjYxNzg1ODYwLTE2NjE3ODU4NjAtYmEzZjYuanBn.jpg",
        },
       
      ],
    },
  },
};




// product data 
export const products = [
  {
    id: 1,
    categroy:"Clothes",
    title: "North Face Jacket",
    subtitle: "Men's Large",
    description: "Height: 175 - 185 cm",
    price: "55 €",
    badge: "No damages",
    image: "https://picsum.photos/id/1018/600/700",
    link: "/product/1",
    seller: {
      name: "john_doe",
      rating: 4.5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: 2,
    categroy:"Shoes",
    title: "Adidas Trail Shoes",
    subtitle: "Size 42 EU",
    description: "Used for 2 trips",
    price: "40 €",
    badge: "Like new",
    image: "https://picsum.photos/id/1027/600/700",
    link: "/product/2",
    seller: {
      name: "climber42",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    id: 3,
    categroy:"Backpacks",
    title: "Salomon Backpack",
    subtitle: "30L Capacity",
    description: "Ideal for hiking",
    price: "30 €",
    badge: "Good condition",
    image: "https://picsum.photos/id/1033/600/700",
    link: "/product/3",
    seller: {
      name: "mountain_mike",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  },
  {
    id: 4,
    categroy:"Clothes",
    title: "Patagonia Rain Jacket",
    subtitle: "Unisex Medium",
    description: "Waterproof gear",
    price: "60 €",
    badge: "No tears",
    image: "https://picsum.photos/id/1052/600/700",
    link: "/product/4",
    seller: {
      name: "eco_climber",
      rating: 4.8,
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
  },
  {
    id: 5,
    categroy:"Helmets",
    title: "Black Diamond Helmet",
    subtitle: "Climbing Gear",
    description: "Size M/L",
    price: "25 €",
    badge: "Safe and solid",
    image: "https://picsum.photos/id/1062/600/700",
    link: "/product/5",
    seller: {
      name: "rock_sarah",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    },
  },
  {
    id: 6,
    categroy:"Pants",
    title: "Columbia Hiking Pants",
    subtitle: "Men's 34",
    description: "Water-resistant",
    price: "20 €",
    badge: "Barely used",
    image: "https://picsum.photos/id/1071/600/700",
    link: "/product/6",
    seller: {
      name: "trail_runner",
      rating: 4.2,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  },
  {
    id: 7,
    categroy:"Tents",
    title: "Quechua Tent",
    subtitle: "2 Person",
    description: "Quick setup",
    price: "45 €",
    badge: "All accessories included",
    image: "https://picsum.photos/id/1084/600/700",
    link: "/product/7",
    seller: {
      name: "camp_lover",
      rating: 4.6,
      avatar: "https://randomuser.me/api/portraits/men/58.jpg",
    },
  },
  {
    id: 8,
    categroy:"Watches",
    title: "Garmin GPS Watch",
    subtitle: "Explorer Series",
    description: "Perfect for trekking",
    price: "80 €",
    badge: "Fully functional",
    image: "https://picsum.photos/id/1080/600/700",
    link: "/product/8",
    seller: {
      name: "hike_with_joe",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    },
  },
  {
    id: 9,
    categroy:"Shoes",
    title: "Merrell Hiking Boots",
    subtitle: "Size 43 EU",
    description: "Great grip",
    price: "35 €",
    badge: "Cleaned & ready",
    image: "https://picsum.photos/id/109/600/700",
    link: "/product/9",
    seller: {
      name: "gear_freak",
      rating: 3.8,
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  },
  {
    id: 10,
    categroy:"Sleeping Pads",
    title: "Therm-a-Rest Sleeping Pad",
    subtitle: "Ultra Light",
    description: "Used twice",
    price: "25 €",
    badge: "Comfort guaranteed",
    image: "https://picsum.photos/id/110/600/700",
    link: "/product/10",
    seller: {
      name: "sleep_comfy",
      rating: 4.9,
      avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    },
  },
];

