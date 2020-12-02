import React, { Component, useState } from "react";
import axios from "axios";

import { setUserSession, getToken } from "../Utils/Common";
import { PostData } from "../services/PostData";

import { Redirect } from "react-router-dom";

import { motion } from "framer-motion";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const no_kp_baru = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  let history = useHistory();

  console.log("props", history);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://tekun2.nakmenangtender.com/api/v2/login", {
        username: no_kp_baru.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.user_info.token, response.data.user_info);
        console.log("setUserSession", window.sessionStorage.getItem("token"));
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        if (error?.response?.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  const handleChange = () => {
    alert("handlechange !");
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
        <Grid>
          <div className="">
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="no_kad_pengenalan"
                label="No Kad Pengenalan"
                name="no_kp_baru"
                type="text"
                autoComplete="No Kad Pengenalan"
                {...no_kp_baru}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="kata laluan"
                label="Kata Laluan"
                type="password"
                name="password"
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
                value={loading ? "Loading..." : "Login"}
                onClick={handleLogin}
                disabled={loading}
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
        </Grid>
      </Grid>
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
