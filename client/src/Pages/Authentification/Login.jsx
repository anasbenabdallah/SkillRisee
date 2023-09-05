import React, { useState, useEffect } from "react";
import RegisterLink from "@mui/material/Link";
import ForgetPasswordLink from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FaceRecognition from "./FaceRecognition";
import GoogleSignIn from "./Google";
import AlertContainer from "../../Components/alerts";
import { selectError, selectSuccess } from "../../redux/reducers/AuthReducer";

//redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/AuthAction";

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Container,
} from "@mui/material";

// project import
import FireBaseSocialIcons from "./components/FirebaseSocialIcons";
import LinkCopyright from "@mui/material/Link";
import AlertSuccess from "../../Components/successalert";

function Copyright(props) {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkCopyright color="inherit">SKILLRISE</LinkCopyright>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Login = () => {
  //login api
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isActionCompleted, setIsActionCompleted] = useState(false);
  const Error = useSelector(selectError);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const isSuccess = useSelector(selectSuccess);
  const myData = JSON.parse(localStorage.getItem("user"));

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await dispatch(login({ email, password }));
    console.log(data);
    setIsActionCompleted(true);
  };

  useEffect(() => {
    if (myData) {
      console.log("zzzz");
      const timeoutId = setTimeout(() => {
        if (myData.role == "admin") navigate("/adminDashboard");
        else if (myData.role == "user" || myData.role == "company") {
          navigate("/");
        }
        return () => clearTimeout(timeoutId); // clear the timeout when the component unmounts
      }, 3000);
    }
  }, [isActionCompleted]);
  // set the timeout to 3 seconds (3000 milliseconds)

  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Stack
        spacing={5}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1} display={"flex"} alignItems={"center"}>
              <Typography component="h1" variant="h1" color="primary">
                SKILLRISE
              </Typography>
            </Stack>
          </Grid>
          {isActionCompleted && <AlertContainer error={Error} />}
          {!myData && isSuccess && <AlertSuccess message={"logged out"} />}
          {myData && isSuccess && <AlertSuccess message={"logged in"} />}
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Email Address</InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                name="email"
                placeholder="Enter email address"
                fullWidth
                onChange={(e) => SetEmail(e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Password</InputLabel>
              <OutlinedInput
                fullWidth
                id="-password-login"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={(e) => SetPassword(e.target.value)}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sx={{ mt: -1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <FormControlLabel
                control={
                  <Checkbox name="checked" color="primary" size="small" />
                }
                label={<Typography variant="h6">Remember me</Typography>}
              />
              <ForgetPasswordLink
                underline="hover"
                variant="h6"
                color={"secondary"}
                component={Link}
                to="/forgetpassword"
              >
                Forgot Password?
              </ForgetPasswordLink>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Button
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => submitHandler(e)}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              columnGap={"0.2rem"}
            >
              <Typography variant="h6">Are you new here?</Typography>
              <RegisterLink
                underline="hover"
                variant="h6"
                color={"primary"}
                component={Link}
                to="/register"
              >
                Sign up
              </RegisterLink>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption">Login with</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <GoogleSignIn mode="login" />
            <FaceRecognition mode="verify" />{" "}
          </Grid>
        </Grid>
        <Copyright />
      </Stack>
    </Container>
  );
};

export default Login;
