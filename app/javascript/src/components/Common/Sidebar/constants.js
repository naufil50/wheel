import { Notes, Settings, UserCircle as Contacts } from "neetoicons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Notes,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: Contacts,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
  },
];
