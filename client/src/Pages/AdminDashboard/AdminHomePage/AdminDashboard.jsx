import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import DashboardFirstRow from "./components/DashboardFirstRow/DashboardFirstRow";
import DashboardSecondRow from "./components/DashboardSecondRow/DashboardSecondRow";

const AdminDashboard = () => {
  return (
    <div>
      <Stack spacing={2}>
        <DashboardFirstRow />
        <DashboardSecondRow />
      </Stack>
    </div>
  );
};

export default AdminDashboard;
