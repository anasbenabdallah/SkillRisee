import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { selectError } from "../redux/reducers/index";

const AlertContainer = ({ error }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const obj = { msg: "User already exists" };
  const msg = obj["msg"];
  console.log(error);

  const message =
    error?.error?.msg || error?.msg || error?.error || error || msg;
  console.log(message);

  return (
    <Alert
      severity="error"
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
      {error && (
        <>
          {message} <strong>check it out!</strong>
        </>
      )}
    </Alert>
  );
};

export default AlertContainer;
