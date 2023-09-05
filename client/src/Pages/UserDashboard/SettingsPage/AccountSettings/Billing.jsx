import {
  Button,
  Stack,
  Grid,
  Divider,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  const myData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <Stack>
      <Typography variant="h5" gutterBottom>
        Billing Informations
      </Typography>
      <Divider />
      <br />
      <Card variant="outlined">
        <CardContent>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography color={"warning.main"} variant="h3">
              Balance {myData.balance + " $"}
            </Typography>
            <form
              action=" http://localhost:8000/stripe/create-checkout-session"
              method="POST"
            >
              <Button
                type="submit"
                variant="contained"
                size="medium"
                startIcon={<AccountBalanceWalletIcon />}
              >
                Add Funds
              </Button>
            </form>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
