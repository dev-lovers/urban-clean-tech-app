import React from "react";
import HomeStack from "../home-stack/HomeStack";
import MapStack from "../map-stack/MapStack";
import ProfileStack from "../profile-stack/ProfileStack";

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
    title: "Mapa",
    component: MapStack,
  },
  {
    id: 3,
    icon: "account-circle",
    routeName: "profileStack",
    title: "Perfil",
    component: ProfileStack,
  },
];

export default menu;
