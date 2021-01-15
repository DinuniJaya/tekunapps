import React, { Component, useState } from "react";
import axios from "axios";

import { setUserSession, getToken } from "../Utils/Common";

import { motion } from "framer-motion";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { IonButton } from "@ionic/react";

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleLogin = () => {
    // ionAlert(null);
    setLoading(true);

    axios
      .post("https://tekunfin.tekun.gov.my/staging/api/v2/login", {
        // .post("https://tekun2.nakmenangtender.com/api/login", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        // ionLogged;
        setUserSession(response.data.user_info.token, response.data.user_info);
        // console.log("setUserSession", setUserSession.getItem("token"));

        history.replace("/dashboard");
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        if (error.response?.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="container">
      <div className="ontopboard">
        <motion.img
          src="./assets/img/logotekun.svg"
          alt="logo"
          animate={{ scale: [0, 1], opacity: [0.2, 2] }}
          transition={{ duration: 0.9 }}
        />
        <hr />
      </div>
      <Grid className="grid">
        <div className="LoginContainer">
          <form className="form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="no_kad_pengenalan"
              label="No Kad Pengenalan"
              // name="username"
              type="text"
              autoComplete="No Kad Pengenalan"
              {...username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Kata Laluan"
              type="password"
              // name="password"
              {...password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ingat kata laluan"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              type="button"
              // value={loading ? "Loading..." : "Login"}
              onClick={handleLogin}
              // disabled={loading}
            >
              Log Masuk
            </Button>
            <Grid container className="flex-space">
              <Grid item>
                <Link href="#" variant="body2">
                  Lupa kata laluan ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Daftar Akaun?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <IonButton className="green" onClick={() => history.push("/register")}>
          Daftar
        </IonButton>
      </Grid>

      <div className="ion-padding">
        <div className="onboardbg">
          <img src="./assets/img/onboardbg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default LoginForm;