import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { getUser } from "../../Utils/Common";
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import "./Profile.css";
import Collapsible from "react-collapsible";
import { IonButton } from "@ionic/react";
function MaklumatForm() {
  const user = getUser();
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

  // handleSubmit = (event) => {
  //   e.preventDefault();
  // };
  return (
    <>
      {/* {console.log("mkasas", mkasas)}
      {console.log("mkaBank", mkaBank)}
      {console.log("mkaCawangan", mkaCawangan)} */}
      {console.log("mkaSperniagaan", mkaSktorNiaga)}
      {/* {console.log("setMkaAktiviti", setMkaAktiviti)} */}
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
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              select
              id="TarafPerkahwinan"
              label="Taraf Perkahwinan"
              // onChange={TarafPerkahwinan}
            >
              <MenuItem value="Bujang">Bujang</MenuItem>
              <MenuItem value="Berkahwin">Berkahwin</MenuItem>
              <MenuItem value="Duda">Duda</MenuItem>
              <MenuItem value="Janda">Janda</MenuItem>
              <MenuItem value="Ibu Tungal">Ibu Tungal</MenuItem>
            </TextField>
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
