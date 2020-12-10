import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../services/PostData";

import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_kp_baru: "",
      password: "",
      email: "",
      name: "",
      redirectToReferrer: false,
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if (
      this.state.no_kp_baru &&
      this.state.password &&
      this.state.email &&
      this.state.name
    ) {
      PostData(
        "https://tekun2.nakmenangtender.com/api/v2/register",
        this.state
      ).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else alert(result.error);
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/Dashboard"} />;
    }
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
          {/* <img src="./assets/img/people.svg" alt="people" /> */}
        </div>
        <Grid className="grid">
          <div className="LoginContainer">
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="No Kad Pengenalan"
                name="no_kp_baru"
                autoComplete="No Kad Pengenalan"
                type="text"
                placeholder="Username"
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Kata Laluan"
                autoComplete="current-password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Kata Laluan Pengesahan"
                autoComplete="current-password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="no telefon"
                label="No Telefon"
                type="text"
                placeholder="6xxxxxxxxxxx"
                autoComplete="6xxxxxxxxxxx"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="alamatemail"
                label="Alamat Email"
                id="email"
                autoComplete=""
                type="text"
                placeholder="Email"
                onChange={this.onChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="button"
                value="Sign Up"
                onClick={this.signup}
              >
                Register
              </Button>
            </form>
          </div>
          <Grid>
            <Button href="/Login" className="button">
              {"Login"}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RegisterForm;
