import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Box, Stack } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";
import { useSelector, useDispatch } from "react-redux";
import { getCompanies } from "../../../../../../redux/actions/AdminAction";

const NewUsers = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.Admin.companies);
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  const number = companies.length;
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-end"}
            columnGap={"0.5rem"}
          >
            <BusinessIcon />
            <Typography>Total Companies</Typography>
          </Stack>
          <Typography component="p" variant="h4">
            {number}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default NewUsers;
