import React from "react";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import ProfileMenu from "./components/ProfileMenu";
import NotificationBell2 from "./components/NotificationCompany";
import Chat from "./components/Chat";
import AddPostMenuList from "./components/AddPost/AddPostMenuList";
import NotificationBell from "./components/Notifications/Notification";

const MenuIcons = () => {
  const role = JSON.parse(localStorage.getItem("user")).role;

  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}>
        {role === "company" && <AddPostMenuList />}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Chat />
        {role === "company" ? <NotificationBell2 /> : <NotificationBell />}
        <ProfileMenu />
      </Box>
    </div>
  );
};

export default MenuIcons;
