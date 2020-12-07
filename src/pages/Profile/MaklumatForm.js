import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { getUser } from "../../Utils/Common";
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./Profile.css";
import Collapsible from "react-collapsible";
import { IonButton, IonButtons, IonRow, IonSegmentButton } from "@ionic/react";
function MaklumatForm() {
  const user = getUser();
  // <Start> Choices Maklumat Asas
  const [mkasas, setMkasas] = useState([]);
  const [mkaBank, setMkaBank] = useState([]);
  const [mkaCawangan, setMkaCawangan] = useState([]);
  const [choicesKpemasaran, setShoicesKpemasaran] = useState([]);
  // const [mkaAktiviti, setMkaAktiviti] = useState([]);
  // const [mkaSktorNiaga, setMkaSektorNiaga] = useState([]);

  // selected Maklumat Asas
  const [selectMkasas, setSelectMkasas] = useState("");
  const [selectedMkaBank, setSelectedMkaBank] = useState("");
  const [selectedMkaCawangan, setSelectedCawangan] = useState("");
  const [selectedChoiceKpemasaran, setSelectedChoiceKpemasaran] = useState("");
  // const [selectedMkaSektorNiaga, setSelectedMkaSektorNiaga] = useState("");
  // const [selectedMkaAktiviti, setSelectedMkaAktiviti] = useState("");

  // <End>

  // <Start>Choices Maklumat Peribadi Pemohon
  // const [userMpp, setUserMpp] = useState([]);

  // selected Maklumat Peribadi Pemohon
  // const [selectedUserMpp, setSelectedUserMpp] = useState("");
  // <End>
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        `https://tekun2.nakmenangtender.com/api/v2/profileFormParam`,
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc5NjIzYTZmMzgyMWI3ZjhmNmM4MjYxYWE0NDJiYzAwMDJlYzhhYWQ1MjQ2Yzk0ZDViMTEyMmRkZTdiOTFlNTJjN2FkZmUwOWRiNDg1NmFhIn0.eyJhdWQiOiIzIiwianRpIjoiNzk2MjNhNmYzODIxYjdmOGY2YzgyNjFhYTQ0MmJjMDAwMmVjOGFhZDUyNDZjOTRkNWIxMTIyZGRlN2I5MWU1MmM3YWRmZTA5ZGI0ODU2YWEiLCJpYXQiOjE2MDY0OTc0NzksIm5iZiI6MTYwNjQ5NzQ3OSwiZXhwIjoxNjM4MDMzNDc4LCJzdWIiOiIxMTkwIiwic2NvcGVzIjpbXX0.xXgcWy5bnchckWtBTb_ck0Ri-c3ZpMQUChq-qUXSZ1jEjNE1a5PyJ3asxhQBrbrcVRt8LpFN1TD5B6YDjn4pRkqDQ_ElahIWny5URHbcPFNPG1W1ZDgMuvuM9Qo5HzadK1XYpnMoguNASU8zck1Jj4qcvv4RBKpeV_Y00z7bzalv6wICuDerSKytTcxcIKDQkdCPhvQD7NaeRVjAX-Zvm4xIG1D0CpFO7XTXnO-12WNQLwk358i8zehOXf-hMKIKme1-tE71IYDFSzRH2VxS3K3D8U1EDXZplnR02fURYwjope9vkGKYg9NhZwOCu73gho0k0AfkbjM-DwS-IgTFLTvS1_XAXtA7f5GSX8EwNNVINfCn2Qah3OBspf0VP3gf0tVhWTv-MKButfMRW-hTCVkS-Maj7dZocQkAo3g8yGqP3YRcFMFyIfVD0cQAj6XWoDSW1GvuBHdSkr2jxZ52_Z7m8yl9CciLcjILFUfymqZqh2UEpsmPypWfILoQnIDel799fM_aZhU8JeLtuqKDyhEnsx6dBPkSj2q5x0wmNbTestP6cfscp8htigbRGvdKA6VhqwF3-NemDgHQ09hHKNwgolFECp0lEtJPAW0lB1P25dCeyWNkFrmsx9fIM1n3gCNAiFU7OhLI5VzMWIL8W8DiFpbuotSQbvuwmErGFMw",
            "Content-Type": "application/json",
          },
        }
      );
      setMkasas(Object.values(result.data.Master_status_perniagaan));
      setMkaBank(Object.values(result.data.Master_bank));
      setMkaCawangan(Object.values(result.data.Master_cawangan));
      setShoicesKpemasaran(Object.values(result.data.Master_kaedah_pemasaran));
      // setCSniaga(Object.values(result.data.Master_sektor_perniagaan));
    };
    fetchData();
  }, []);

  function onMkasas(event) {
    setSelectMkasas(event.target.value);
  }
  function onMkasasBank(event) {
    setSelectedMkaBank(event.target.value);
  }
  function onCawangan(event) {
    setSelectedCawangan(event.target.value);
  }
  function kpemasaran(event) {
    setSelectedChoiceKpemasaran(event.target.value);
  }

  // handleSubmit = (event) => {
  //   e.preventDefault();
  // };

  // <motion.div
  //     id="app"
  //     className={show ? "disable-scroll" : ""}
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //   ></motion.div>
  return (
    <>
      {console.log("mkasas", mkasas)}
      {console.log("mkaBank", mkaBank)}
      {console.log("mkaCawangan", mkaCawangan)}
      <motion.Grid className="grid">
        <form
          // onSubmit={this.handleSubmit}
          className="form"
          noValidate
        >
          <Collapsible trigger="Maklumat Asas">
            <TextField
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              variant="outlined"
              fullWidth
              select
              label="Status Perniagaan"
              value={selectMkasas}
              onChange={onMkasas}
            >
              {mkasas.map((choice, id) => (
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
              value={selectedMkaBank}
              onChange={onMkasasBank}
            >
              {mkaBank.map((choice, id) => (
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
              value={selectedMkaCawangan}
              onChange={onCawangan}
            >
              {mkaCawangan.map((choice, id) => (
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
          <Collapsible trigger="Maklumat Peribadi Pemohon">
            <TextField
              variant="outlined"
              fullWidth
              id="NamaPemohon"
              label="Nama Pemohon"
              disabled
              value={user.name}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="NoKpBaru"
              label="No Kad Pengenalan"
              disabled
              value={user.no_kp_baru}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="NoKpLama"
              label="No Kad Pengenalan Lama"
              value={user.no_kp_lama}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              id="Umur"
              label="Umur"
              value={user.umur}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="Email"
              label="Email"
              disabled
              value={user.email}
            />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="TarafPerkahwinan"
              label="Taraf Perkahwinan"
              disabled
              value={user.email}
            />
          </Collapsible>
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
          <IonButton expand="block" type="button" color="success ion-padding">
            Simpan
          </IonButton>
        </form>
      </motion.Grid>
    </>
  );
}

export default MaklumatForm;
