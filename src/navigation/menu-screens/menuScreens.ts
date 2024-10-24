import React from "react";
import HomeStack from "../home-stack/HomeStack";

interface MenuItem {
  id: number;
  icon: string;
  name: string;
  title: string;
  component: React.ComponentType;
}

const menu: MenuItem[] = [
  {
    id: 1,
    icon: "home",
    name: "homeStack",
    title: "Home",
    component: HomeStack,
  },
];

export default menu;
