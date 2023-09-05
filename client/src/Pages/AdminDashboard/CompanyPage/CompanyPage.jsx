import React, { useEffect, useState } from "react";

import { makeStyles } from "@mui/styles";

//redux imports
import { useSelector } from "react-redux";
import {
  selectCompanies,
  selectUsers,
} from "../../../redux/reducers/AdminReducer";
import { useDispatch } from "react-redux";
import { getCompanies, getUsers } from "../../../redux/actions/AdminAction";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  Typography,
  Grid,
} from "@mui/material";
import { Stack } from "@mui/system";
import ChallengeDialog from "./challengeDialog";
import CompanyTableMenuItem from "./CompanyTableMenuItem";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

const CompanyPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  const companies = useSelector(selectCompanies);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpen = (row) => {
    setModalOpen(true);
    setSelectedRow(row);
    console.log(row);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div>
      <TableContainer component={Paper} elevation={0} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>USER</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((company) => (
                <TableRow
                  key={company._id}
                  hover
                  onClick={(event) => {
                    if (
                      !(
                        event.target.closest("td") ===
                          event.currentTarget.cells[0] ||
                        event.target.closest("td") ===
                          event.currentTarget.cells[1] ||
                        event.target.closest("td") ===
                          event.currentTarget.cells[2]
                      )
                    ) {
                      return; // exit the function if the click is not on the first three cells
                    }
                    handleOpen(company);
                  }}
                >
                  {" "}
                  <TableCell>
                    <Grid
                      container
                      spacing={1}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Grid item lg={2}>
                        <Avatar
                          alt={`${company.companyName}`}
                          src={company.picturePath}
                          className={classes.avatar}
                        />
                      </Grid>
                      <Grid item lg={10}>
                        <Stack flexDirection={"row"} columnGap={1}>
                          <Typography
                            className={classes.name}
                            color="textSecondary"
                            variant="body1"
                          >
                            {company.companyName}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.name}>
                    {company.email}
                  </TableCell>
                  <TableCell>
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor:
                          (company.verified === true && "green") ||
                          (company.verified === false && "red"),
                      }}
                    >
                      {company.verified ? "Verified" : "Not Verified"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <CompanyTableMenuItem companyId={company._id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {modalOpen && (
          <ChallengeDialog
            open={modalOpen}
            selectedRow={selectedRow}
            handleClose={handleClose}
            company={selectedRow}
          />
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={companies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default CompanyPage;
