import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./Profile.css";
import Collapsible from "react-collapsible";
import { IonButton } from "@ionic/react";
function MaklumatForm() {
  const [choices, setChoices] = useState([]);
  const [choicesBank, setShoicesBank] = useState([]);
  const [choicesCawangan, setShoicesCawangan] = useState([]);
  const [choicesKpemasaran, setShoicesKpemasaran] = useState([]);
  // const [choicesSperniagaan, setShoicesSperniagaan] = useState([]);
  // selected state
  const [selectedChoice, setSelectedChoice] = useState("");
  const [selectedChoiceBank, setSelectedChoiceBank] = useState("");
  const [selectedChoiceCawangan, setSelectedChoiceCawangan] = useState("");
  const [selectedChoiceKpemasaran, setSelectedChoiceKpemasaran] = useState("");

  // const [selectedChoiceSperniagaan, setSelectedChoiceSperniagaan] = useState(
  //   ""
  // );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        `https://tekun2.nakmenangtender.com/api/v2/profileFormParam`,
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5ZTUwNmU1ODczZGMyMmYzZDBjMjE2ODZkMjdkMzI0OGRhOTAxMDU2N2Y4YWQ0ODk5NmMwM2FhOTdhNTM4ZjA3MDdjYzZmYzZmYjU4ODZmIn0.eyJhdWQiOiIzIiwianRpIjoiODllNTA2ZTU4NzNkYzIyZjNkMGMyMTY4NmQyN2QzMjQ4ZGE5MDEwNTY3ZjhhZDQ4OTk2YzAzYWE5N2E1MzhmMDcwN2NjNmZjNmZiNTg4NmYiLCJpYXQiOjE2MDY3MDM0MzksIm5iZiI6MTYwNjcwMzQzOSwiZXhwIjoxNjM4MjM5NDM5LCJzdWIiOiIxMTkwIiwic2NvcGVzIjpbXX0.HdYLVX_2lGOvf7ZgjQNb8_O_K0TIljh8fpfQbskoMOkfOb-HCLukCF-WjcCTWpxbWV975X9AccBHmwF0CBUQZEiY55qWogLJM9EZoziXnFrjQ8nHkqbFCsHRhEodbAKhnMG97-LfYD3epyoFUiq54pR17x1nfIjENH69v2vBZizgBewG5dVKO6VIxhMRdCCpcRsyb1-95s7dAlFqoHPLAvuP90htBnNqUBwDtup0W7NeZsGzMERs5AeP86jHOf8laBl5Y31n8WYjNrZAAkNcgAZxM3Q1SJ77VrsyzANNX1V4rm1y4z9ekSLYts7q7xr8dDqP-Byh8yv1eLOM81tBr-4rHHAXHMyfhXrxvg_MQn9RcMHGkAvYpUK2aEtik526PklHC5SMphji8EAS6rgFmRuj8xIze40BV_Nxd-9USPlGKQMn7OdlNTQm_s1b7WOpiPgajHRgEz60vUmd0OOk6IhbSTDpgmDB0z1fGukoYIfFd5cJ3fAPHrG7IW0_EvMlT4CQJGJrp8VQLs-kUNAM6mvdbthTNB8XeiTS28CEgREVg7fDIkHOgUvLqChlKrc0XUjcN9G4em5YE1dAf-TJK9N7mSp1hpSK6-XhqmNe_Z2aJYvzLXFo0rD-JCS3bWyNFGMnM1cFgZMfjJkV0HqgN23FeyuMI-c5YuhavNJr2Qk",
            "Content-Type": "application/json",
          },
        }
      );
      setChoices(Object.values(result.data.Master_status_perniagaan));
      setShoicesBank(Object.values(result.data.Master_bank));
      setShoicesCawangan(Object.values(result.data.Master_cawangan));
      setShoicesKpemasaran(Object.values(result.data.Master_kaedah_pemasaran));
      // setShoicesKpemasaran(Object.values(result.data.Master_kaedah_pemasaran));
    };
    fetchData();
  }, []);

  function spniaga(event) {
    setSelectedChoice(event.target.value);
  }
  function nbank(event) {
    setSelectedChoiceBank(event.target.value);
  }
  function cawangan(event) {
    setSelectedChoiceCawangan(event.target.value);
  }
  function kpemasaran(event) {
    setSelectedChoiceKpemasaran(event.target.value);
  }

  // handleSubmit = (event) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      {console.log("choicesPerniagaan", choices)}
      {console.log("choicesBank", choicesBank)}
      {console.log("choicesCawangan", choicesCawangan)}
      <Grid className="grid">
        <form
          // onSubmit={this.handleSubmit}
          className="form"
          noValidate
        >
          <Collapsible trigger="Maklumat Asas">
            <TextField
              variant="outlined"
              fullWidth
              select
              label="Status Perniagaan"
              value={selectedChoice}
              onChange={spniaga}
            >
              {choices.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="standard-select-currency"
              select
              label="Nama Bank"
              value={selectedChoiceBank}
              onChange={nbank}
            >
              {choicesBank.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="standard-select-currency"
              select
              label="Cawangan"
              value={selectedChoiceCawangan}
              onChange={cawangan}
            >
              {choicesCawangan.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <FormHelperText>Mengikut Alamat SSM</FormHelperText>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="standard-select-currency"
              select
              label="Kaedah Pemasaran"
              value={selectedChoiceKpemasaran}
              onChange={kpemasaran}
            >
              {choicesKpemasaran.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
          </Collapsible>
          <Collapsible trigger="Maklumat Peribadi Pemohon"></Collapsible>
          <Collapsible trigger="Maklumat Perniagaan">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
          <IonButton expand="full" type="button" className="green">
            Simpan
          </IonButton>
        </form>
      </Grid>
    </div>
  );
}

export default MaklumatForm;
