import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  
  {
    id: 7,
    title: "Career",
    path: "/career",
    newTab: false,
  },

  {
    id: 8,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Services",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Website Devlopment",
        path: "/",
        newTab: false,
      },
      
      {
        id: 46,
        title: "App Devlopment",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "SMTP Services",
        path: "/",
        newTab: false,
      }
    ],
  },
];
export default menuData;
