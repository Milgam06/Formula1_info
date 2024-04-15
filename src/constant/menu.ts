interface MenuItemProps {
  title: string;
  path: string;
}

export const MENU_ITEMS_LIST: MenuItemProps[] = [
  { title: "LATEST", path: "/latest" },
  { title: "DRIVER", path: "/driver" },
  { title: "SESSION", path: "/session" },
];
