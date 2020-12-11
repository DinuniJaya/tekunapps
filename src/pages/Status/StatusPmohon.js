import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  IonChip,
  IonLabel,
  IonList,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonItem,
  IonAvatar,
  IonIcon,
} from "@ionic/react";

const api = axios.create({
  baseURL: "https://tekun2.nakmenangtender.com/api/v2/permohonanList",

  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class StatusPmohon extends React.Component {
  state = {
    alldata: [],
    uListMohon: [],
    uL_TarikhSubmit: [],
    uL_Status: [],
    isLoading: true,
    errors: null,
  };

  async getPosts(props) {
    const response = await api.post();

    try {
      this.setState({
        alldata: response.data.data,
        uListMohon: response.data.data[0].permohonan_no,
        uL_TarikhSubmit: response.data.data[0].created_at,
        uL_Status: response.data.data[0].status.name,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <>
        <div>
          {/*-- List of Sliding Items --*/}
          <IonList>
            {/* <IonItemSliding> */}
            <IonItem>
              <IonAvatar slot="start" style={{ width: "50px", height: "50px" }}>
                <img src="/assets/img/user.jpg" alt="" />
              </IonAvatar>
              <IonLabel>
                <p>
                  <b>NAMA : </b>Mohd Mahyudin Bin Ayub
                </p>
                <p>
                  <b>No.KP : </b>890218126501
                </p>
                <p>
                  <b>SKIM : </b>SKIM PINJAMAN SEDERHANA
                </p>
              </IonLabel>
            </IonItem>
            {/* <IonItemOptions side="end">
                <IonItemOption>Unread</IonItemOption>
              </IonItemOptions> */}
            {/* </IonItemSliding> */}
          </IonList>
        </div>
        <div className="ion-padding flexsBtween">
          {console.log(this.state.alldata)}
          <div className="stext">
            No Borang Permohonan:
            <IonChip outline color="tertiary">
              <IonLabel>
                <b> {this.state.uListMohon}</b>
              </IonLabel>
            </IonChip>
          </div>
          <div className="stext">
            Status Permohonan :
            <IonChip outline color="danger">
              <IonLabel>
                <b> {this.state.uL_Status}</b>
              </IonLabel>
            </IonChip>
          </div>
        </div>
        <div className="ion-padding flexsBtween">
          <div className="stext">
            Tarikh Permohonan :
            <IonChip outline color="danger">
              <IonLabel>
                <b> {this.state.uL_TarikhSubmit}</b>
              </IonLabel>
            </IonChip>
          </div>
          {/* tarikh_submit */}
          <div className="stext">
            Tarikh Jangkaan Laporan :
            <IonChip outline color="danger">
              <IonLabel>
                <b> {this.state.uL_TarikhSubmit}</b>
              </IonLabel>
            </IonChip>
          </div>
        </div>
      </>
    );
  }
}
export default StatusPmohon;
