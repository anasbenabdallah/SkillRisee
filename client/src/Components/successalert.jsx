import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { selectError } from "../redux/reducers/index";
import { selectSuccess } from "../redux/reducers/AuthReducer";

const AlertSuccess = ({ message }) => {
  const [open, setOpen] = useState(false);
  console.log("alert");

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Alert
      severity="success"
      sx={{
        position: "fixed",
        top: "32%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        opacity: open ? 1 : 0,
        transition: "opacity 1s ease-out",
      }}
    >
      {
        <>
          <strong>Successfully {message} ! </strong>
        </>
      }
    </Alert>
  );
};

export default AlertSuccess;
