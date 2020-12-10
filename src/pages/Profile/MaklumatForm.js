import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { getUser } from "../../Utils/Common";
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import "./Profile.css";
import Collapsible from "react-collapsible";
import { IonButton } from "@ionic/react";

function MaklumatForm(props) {
  const user = getUser();

  // v2/user
  // START USER PROFILE
  const [uAkaun, setUakaun] = useState([]); // profilling
  const [ulistMohon, setUlistMohon] = useState([]); // inboxes

  // SELECTED USER PROFILE
  // const [suAkaun, setSUakaun] = useState([]); // set profilling;
  // const [sulistMohon, setSUlistMohon] = useState([]); // set inboxes

  // END USER PROFILE
  useEffect(() => {
    const fUserP = async () => {
      const resUserP = await axios.post(
        `https://tekun2.nakmenangtender.com/api/v2/user`,
        {},
        {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      // SET USER PROFILE
      setUakaun(resUserP.data.data.profiling); // profilling
      setUlistMohon(resUserP.data.data.inboxes); // inboxes
    };
    fUserP();
  }, []);

  // END USER PROFILE

  // /v2/profileFormParam
  // START MAKLUMAT ASAS
  // LOOP .map
  const [mkasas, setMkasas] = useState([]);
  const [mkaBank, setMkaBank] = useState([]);
  const [mkaCawangan, setMkaCawangan] = useState([]);
  const [mkaKpemasaran, setMkaKpemasaran] = useState([]);
  const [mkaSktorNiaga, setMkaSektorNiaga] = useState([]);
  const [mkaAktiviti, setMkaAktiviti] = useState([]);
  // const [mkaUsbank, setmkaUbank] = useState([]);

  // SELECTED MAKLUMAT ASAS
  const [selectedMkaUsbank, setSelectedMkaUbank] = useState([]);
  const [selectMkasas, setSelectMkasas] = useState("");
  const [selectedMkaBank, setSelectedMkaBank] = useState("");
  const [selectedMkaCawangan, setSelectedCawangan] = useState("");
  const [selectedMkaKpemasaran, setSelectedMkaKpemasaran] = useState("");
  const [selectedMkaSektorNiaga, setSelectedMkaSektorNiaga] = useState("");
  const [selectedMkaAktiviti, setSelectedMkaAktiviti] = useState("");

  // END MAKLUMAT ASAS

  // START MAKLUMAT PRIBADI
  // LOOP .map
  const [mppsK, setMppsk] = useState([]);
  const [mppsB, setMppsB] = useState([]);
  const [mppsB_Kaum, setMppsB_Kaum] = useState([]);
  const [mppsTp, setMppsTp] = useState([]);
  const [mppsNegeri, setSNegeri] = useState([]);
  const [uJantina, setJantina] = useState([]);
  const [uAgama, setAgama] = useState([]);

  // SELECTED MAKLUMAT PRIBADI
  const [smppsK, setSMppsk] = useState("");
  const [smppsB, setSMppsB] = useState("");
  const [smppsB_Kaum, setSMppsB_Kaum] = useState("");
  const [smppsTp, setSMppsTp] = useState("");
  const [sMppsNegeri, setSMppNegeri] = useState("");
  const [suJantina, setSJantina] = useState([]);
  const [suAgama, setSAgama] = useState([]);

  // START MAKLUMAT PERNIAGAAN
  // LOOP .map
  const [mkpp, setMkpp] = useState([]); // STATUS PREMIS PROJEK*
  const [mkmilikp, setMkmilikp] = useState([]); // PEMILIKAN PERNIAGAAN*
  // SELECTED MAKLUMAT PERNIAGAAN
  const [sMkpp, setSMkpp] = useState([]); // SELECT STATUS PREMIS PROJEK*
  const [smkmilikp, setSmkmilikp] = useState([]); // SELECT PEMILIKAN PERNIAGAAN*
  // END MAKLUMAT PRIBADI

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
      console.log("profileFormParam", result);

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
      setSNegeri(Object.values(result.data.MasterState));
      setJantina(Object.values(result.data.Master_jantina));
      setAgama(Object.values(result.data.Master_agama));

      // set Maklumat Perniagaan
      setMkpp(Object.values(result.data.Master_premis_status));
      setMkmilikp(Object.values(result.data.Master_pemilik_perniagaan));
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
  function onUakaunBank(event) {
    setSelectedMkaUbank(event.target.value);
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
  function onMppsNegeri(event) {
    setSMppNegeri(event.target.value);
  }
  function onUjantina(event) {
    setSJantina(event.target.value);
  }
  function onUAgama(event) {
    setSAgama(event.target.value);
  }

  // onchange Maklumat Perniagaan
  function onMkpp(event) {
    setSMkpp(event.target.value);
  }
  function onMkmilikp(event) {
    setSmkmilikp(event.target.value);
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
      {/* {console.log("uAkaun", uAkaun)} */}
      {console.log("ulistMohon", ulistMohon)}
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
              value="4444"
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
              id="uJantina"
              select
              label="Jantina"
              value={suJantina}
              onChange={onUjantina}
            >
              {uJantina.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="Agama"
              select
              label="Agama"
              value={suAgama}
              onChange={onUAgama}
            >
              {uAgama.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
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
              // label="Umur"
              disabled
              value={uAkaun.umur}
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
              type="text"
              id="BilanganTanggungan"
              label="Bilangan Tanggungan"
              value={uAkaun.bil_tanggungan}
            ></TextField>
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
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="Alamat"
              label="Alamat"
              disabled
              value={uAkaun.alamat}
              // onChange={onAlamat}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              id="Poskod"
              // label="Poskod"
              disabled
              value={uAkaun.poskod_pemohon}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="standard-select-currency"
              select
              label="Negeri"
              value={sMppsNegeri}
              onChange={onMppsNegeri}
            >
              {mppsNegeri.map((choice, id) => (
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
              label="Daerah"
              value={selectedMkaCawangan}
              onChange={onCawangan}
            >
              {mkaCawangan.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
          </Collapsible>
          <Collapsible trigger="Maklumat Perniagaan" className="iconP3">
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="NamaPerniagaan"
              label="Nama Perniagaan / Syarikat"
              disabled
              value={uAkaun.nama_perniagaan}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="TempohPengalamanTahun"
              label="Tempoh Pengalaman Tahun"
              disabled
              value={uAkaun.tempoh_pengalaman_tahun}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="NoTelPerniagaan"
              label="No Tel Perniagaan"
              disabled
              value={uAkaun.no_tel_hp}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="StatusPremisProjek"
              select
              label="Status Premis Projek"
              value={sMkpp}
              onChange={onMkpp}
            >
              {mkpp.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="AngaranPendapatanKasar"
              label="Angaran Pendapatan Kasar ( Sebulan )"
              disabled
              value={uAkaun.anggaran_pendapatan_kasar}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="AlamatPerniagaan"
              label="Alamat Perniagaan"
              disabled
              value={uAkaun.alamat_perniagaan}
            />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="AlamatPerniagaan"
              // label="Alamat Perniagaan"
              disabled
              value={uAkaun.alamat2_perniagaan}
            />
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              id="AlamatPerniagaan"
              // label="Alamat Perniagaan"
              disabled
              value={uAkaun.poskod_perniagaan}
            />
            <hr />
            <TextField
              variant="outlined"
              fullWidth
              id="standard-select-currency"
              select
              label="Negeri"
              value={sMppsNegeri}
              onChange={onMppsNegeri}
            >
              {mppsNegeri.map((choice, id) => (
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
              label="Pemilikan Tunggal"
              value={smkmilikp}
              onChange={onMkmilikp}
            >
              {mkmilikp.map((choice, id) => (
                <MenuItem key={id} value={choice}>
                  {choice.name}
                </MenuItem>
              ))}
            </TextField>
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
