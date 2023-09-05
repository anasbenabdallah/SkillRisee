import { Stack } from "@mui/material";
import React from "react";
import Leaders from "./Leaders/Leaders";
import MoneyBalance from "./MoneyBalance/MoneyBalance";
import MyContestLists from "./MyContestsLists/MyContestsLists";

const RightSideContent = () => {
  return (
    <div>
      <Stack spacing={2}>
        <MoneyBalance />
        <Leaders />
        <MyContestLists />
      </Stack>
    </div>
  );
};

export default RightSideContent;
