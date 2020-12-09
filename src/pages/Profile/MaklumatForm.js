import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { getToken, getUser, setUserSession } from "../../Utils/Common";
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import "./Profile.css";
import Collapsible from "react-collapsible";
import { IonButton } from "@ionic/react";

function MaklumatForm(props) {
  const user = getUser();

  // v2/user
  useEffect(() => {
    const fUserP = async () => {
      const resUserP = await axios
        .post(
          `https://tekun2.nakmenangtender.com/api/v2/user`,
          {},
          {
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((result) => {
          console.log("resultUser", result);
          let resuser = result;
          if (resuser.dataProfile) {
            setUserSession("dataProfile", JSON.stringify(resuser));
            this.setState({ redirectToReferrer: true });
          }
          // else alert(result.error);
        });
    };
    fUserP();
  }, []);

  // <Start> Maklumat Asas
  const [mkasas, setMkasas] = useState([]);
  const [mkaBank, setMkaBank] = useState([]);
  const [mkaCawangan, setMkaCawangan] = useState([]);
  const [mkaKpemasaran, setMkaKpemasaran] = useState([]);
  const [mkaSktorNiaga, setMkaSektorNiaga] = useState([]);
  const [mkaAktiviti, setMkaAktiviti] = useState([]);

  // selected Maklumat Asas
  const [selectMkasas, setSelectMkasas] = useState("");
  const [selectedMkaBank, setSelectedMkaBank] = useState("");
  const [selectedMkaCawangan, setSelectedCawangan] = useState("");
  const [selectedMkaKpemasaran, setSelectedMkaKpemasaran] = useState("");
  const [selectedMkaSektorNiaga, setSelectedMkaSektorNiaga] = useState("");
  const [selectedMkaAktiviti, setSelectedMkaAktiviti] = useState("");

  // <End>

  // <Start>Maklumat Peribadi Pemohon
  const [mppsK, setMppsk] = useState([]);
  const [mppsB, setMppsB] = useState([]);
  const [mppsB_Kaum, setMppsB_Kaum] = useState([]);
  const [mppsTp, setMppsTp] = useState([]);

  // selected Maklumat Peribadi Pemohon
  const [smppsK, setSMppsk] = useState("");
  const [smppsB, setSMppsB] = useState("");
  const [smppsB_Kaum, setSMppsB_Kaum] = useState("");
  const [smppsTp, setSMppsTp] = useState("");
  // <End>

  // /v2/profileFormParam
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        `https://tekun2.nakmenangtender.com/api/v2/profileFormParam`,
        {},
        {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      // set Maklumat Asas
      setMkasas(Object.values(result.data.Master_status_perniagaan));
      setMkaBank(Object.values(result.data.Master_bank));
      setMkaCawangan(Object.values(result.data.Master_cawangan));
      setMkaKpemasaran(Object.values(result.data.Master_kaedah_pemasaran));
      setMkaSektorNiaga(Object.values(result.data.Master_sektor_perniagaan));
      setMkaAktiviti(Object.values(result.data.Master_sektor_perniagaan));

      // set Maklumat Peribadi
      setMppsk(Object.values(result.data.Master_status_kediaman));
      setMppsB(Object.values(result.data.Master_bangsa));
      setMppsB_Kaum(Object.values(result.data.MasterBumiputera));
      setMppsTp(Object.values(result.data.Master_taraf_pendidikan));
    };
    fetchData();
  }, []);

  // onchange Maklumat Asas
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
    setSelectedMkaKpemasaran(event.target.value);
  }
  function onMkaSniaga(event) {
    setSelectedMkaSektorNiaga(event.target.value);
  }
  function onMkaAktiviti(event) {
    setSelectedMkaAktiviti(event.target.value);
  }

  // onchange Maklumat Peribadi
  function onMppsK(event) {
    setSMppsk(event.target.value);
  }
  function onMppsB(event) {
    setSMppsB(event.target.value);
  }
  function onMppsB_Kaum(event) {
    setSMppsB_Kaum(event.target.value);
  }
  function onMppsTp(event) {
    setSMppsTp(event.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     url: "https://tekun2.nakmenangtender.com/api/v2/profileFormParam",
  //     data: setSelectMkasas,
  //     setSelectedMkaBank,
  //     setSelectedCawangan,
  //     setSelectedMkaKpemasaran,
  //     setSelectedMkaSektorNiaga,
  //     setSelectedMkaAktiviti,
  //     setSMppsk,
  //     setSMppsB,
  //     setSMppsB_Kaum,
  //     setSMppsTp,
  //   }).then((response) => {
  //     if (response.data.status === "success") {
  //       alert("Message Sent.");
  //       // this.resetForm();
  //     } else if (response.data.status === "fail") {
  //       alert("Message failed to send.");
  //     }
  //   });
  // }
  // console.log("handleSubmit", handleSubmit);
  return (
    <>
      {/* {console.log("mkasas", mkasas)}
      {console.log("mkaBank", mkaBank)}
      {console.log("mkaCawangan", mkaCawangan)} */}
      {/* {console.log("mkaSperniagaan", mkaSktorNiaga)} */}
      {/* {console.log("setMkaAktiviti", setMkaAktiviti)} */}
      <motion.Grid className="grid">
        <form
          // onSubmit={handleSubmit}
          className="form"
          noValidate
        >
          <Collapsible trigger="Maklumat Asas" className="iconP1">
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
              value={selectedMkaKpemasaran}
              onChange={kpemasaran}
            >
              {mkaKpemasaran.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="NoAkaunAsas"
              label="No Akaun Bank"
              value={user.no_akaun_asas}
            ></TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="SektorPerniagaan"
              select
              label="Sektor Perniagaan"
              value={selectedMkaSektorNiaga}
              onChange={onMkaSniaga}
            >
              {mkaSktorNiaga.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="SektorPerniagaanAktiviti"
              select
              label="Aktiviti"
              value={selectedMkaAktiviti}
              onChange={onMkaAktiviti}
            >
              {mkaAktiviti.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.details[0].desc}
                </MenuItem>
              ))}
            </TextField>
          </Collapsible>
          <Collapsible trigger="Maklumat Peribadi Pemohon" className="iconP2">
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
              value={(user.umur = 40)}
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
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              // select
              id="TarafPerkahwinan"
              label="Taraf Perkahwinan"
              // onChange={TarafPerkahwinan}
            ></TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="StatusKediaman"
              select
              label="Status Kediaman"
              value={smppsK}
              onChange={onMppsK}
            >
              {mppsK.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="Bangsa"
              select
              label="Bangsa"
              value={smppsB}
              onChange={onMppsB}
            >
              {mppsB.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="Kaum"
              select
              label="Kaum"
              value={smppsB_Kaum}
              onChange={onMppsB_Kaum}
            >
              {mppsB_Kaum.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              id="BilanganTanggungan"
              label="Bilangan Tanggungan"
            ></TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              id="NoTel"
              label="No Telefon"
              disabled
              value={user.no_tel}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="TarafPendidikan"
              select
              label="Taraf Pendidikan"
              value={smppsTp}
              onChange={onMppsTp}
            >
              {mppsTp.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
          </Collapsible>
          <Collapsible trigger="Maklumat Perniagaan" className="iconP3">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
          <IonButton
            type="submit"
            expand="block"
            type="button"
            color="success ion-padding"
          >
            Simpan
          </IonButton>
        </form>
      </motion.Grid>
    </>
  );
}

export default MaklumatForm;
