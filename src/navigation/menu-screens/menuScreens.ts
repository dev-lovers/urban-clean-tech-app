import React from "react";
import HomeStack from "../home-stack/HomeStack";
import MapStack from "../map-stack/MapStack";

interface MenuItem {
  id: number;
  icon: string;
  routeName: string;
  title: string;
  component: React.ComponentType;
}

const menu: MenuItem[] = [
  {
    id: 1,
    icon: "home",
    routeName: "homeStack",
    title: "Home",
    component: HomeStack,
  },
  {
    id: 2,
    icon: "map",
    routeName: "mapStack",
    title: "Map",
    component: MapStack,
  },
];

export default menu;
