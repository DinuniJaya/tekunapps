import React, { Component } from "react";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { getToken, setUserSession } from "../../Utils/Common";

// `https://tekun2.nakmenangtender.com/api/v2/profileFormParam`,
//   {},
//   {
//     headers: {
//       Authorization:
//         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc5NjIzYTZmMzgyMWI3ZjhmNmM4MjYxYWE0NDJiYzAwMDJlYzhhYWQ1MjQ2Yzk0ZDViMTEyMmRkZTdiOTFlNTJjN2FkZmUwOWRiNDg1NmFhIn0.eyJhdWQiOiIzIiwianRpIjoiNzk2MjNhNmYzODIxYjdmOGY2YzgyNjFhYTQ0MmJjMDAwMmVjOGFhZDUyNDZjOTRkNWIxMTIyZGRlN2I5MWU1MmM3YWRmZTA5ZGI0ODU2YWEiLCJpYXQiOjE2MDY0OTc0NzksIm5iZiI6MTYwNjQ5NzQ3OSwiZXhwIjoxNjM4MDMzNDc4LCJzdWIiOiIxMTkwIiwic2NvcGVzIjpbXX0.xXgcWy5bnchckWtBTb_ck0Ri-c3ZpMQUChq-qUXSZ1jEjNE1a5PyJ3asxhQBrbrcVRt8LpFN1TD5B6YDjn4pRkqDQ_ElahIWny5URHbcPFNPG1W1ZDgMuvuM9Qo5HzadK1XYpnMoguNASU8zck1Jj4qcvv4RBKpeV_Y00z7bzalv6wICuDerSKytTcxcIKDQkdCPhvQD7NaeRVjAX-Zvm4xIG1D0CpFO7XTXnO-12WNQLwk358i8zehOXf-hMKIKme1-tE71IYDFSzRH2VxS3K3D8U1EDXZplnR02fURYwjope9vkGKYg9NhZwOCu73gho0k0AfkbjM-DwS-IgTFLTvS1_XAXtA7f5GSX8EwNNVINfCn2Qah3OBspf0VP3gf0tVhWTv-MKButfMRW-hTCVkS-Maj7dZocQkAo3g8yGqP3YRcFMFyIfVD0cQAj6XWoDSW1GvuBHdSkr2jxZ52_Z7m8yl9CciLcjILFUfymqZqh2UEpsmPypWfILoQnIDel799fM_aZhU8JeLtuqKDyhEnsx6dBPkSj2q5x0wmNbTestP6cfscp8htigbRGvdKA6VhqwF3-NemDgHQ09hHKNwgolFECp0lEtJPAW0lB1P25dCeyWNkFrmsx9fIM1n3gCNAiFU7OhLI5VzMWIL8W8DiFpbuotSQbvuwmErGFMw",
//       "Content-Type": "application/json",
//     },
//   };

class MaklumatPribadi extends Component {
  constructor() {
    super();
    this.state = {
      FullData: "",
      // added this new state to preserve selected zipcode
      Master_status_perniagaan: "",
    };
  }

  componentDidMount = (e) => {
    axios
      .post(
        `https://tekun2.nakmenangtender.com/api/v2/profileFormParam`,
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5ZTUwNmU1ODczZGMyMmYzZDBjMjE2ODZkMjdkMzI0OGRhOTAxMDU2N2Y4YWQ0ODk5NmMwM2FhOTdhNTM4ZjA3MDdjYzZmYzZmYjU4ODZmIn0.eyJhdWQiOiIzIiwianRpIjoiODllNTA2ZTU4NzNkYzIyZjNkMGMyMTY4NmQyN2QzMjQ4ZGE5MDEwNTY3ZjhhZDQ4OTk2YzAzYWE5N2E1MzhmMDcwN2NjNmZjNmZiNTg4NmYiLCJpYXQiOjE2MDY3MDM0MzksIm5iZiI6MTYwNjcwMzQzOSwiZXhwIjoxNjM4MjM5NDM5LCJzdWIiOiIxMTkwIiwic2NvcGVzIjpbXX0.HdYLVX_2lGOvf7ZgjQNb8_O_K0TIljh8fpfQbskoMOkfOb-HCLukCF-WjcCTWpxbWV975X9AccBHmwF0CBUQZEiY55qWogLJM9EZoziXnFrjQ8nHkqbFCsHRhEodbAKhnMG97-LfYD3epyoFUiq54pR17x1nfIjENH69v2vBZizgBewG5dVKO6VIxhMRdCCpcRsyb1-95s7dAlFqoHPLAvuP90htBnNqUBwDtup0W7NeZsGzMERs5AeP86jHOf8laBl5Y31n8WYjNrZAAkNcgAZxM3Q1SJ77VrsyzANNX1V4rm1y4z9ekSLYts7q7xr8dDqP-Byh8yv1eLOM81tBr-4rHHAXHMyfhXrxvg_MQn9RcMHGkAvYpUK2aEtik526PklHC5SMphji8EAS6rgFmRuj8xIze40BV_Nxd-9USPlGKQMn7OdlNTQm_s1b7WOpiPgajHRgEz60vUmd0OOk6IhbSTDpgmDB0z1fGukoYIfFd5cJ3fAPHrG7IW0_EvMlT4CQJGJrp8VQLs-kUNAM6mvdbthTNB8XeiTS28CEgREVg7fDIkHOgUvLqChlKrc0XUjcN9G4em5YE1dAf-TJK9N7mSp1hpSK6-XhqmNe_Z2aJYvzLXFo0rD-JCS3bWyNFGMnM1cFgZMfjJkV0HqgN23FeyuMI-c5YuhavNJr2Qk",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // console.log("getToken", setUserSession);
        // setUserSession(res.data.user_info.token, res.data.user_info);
        // const FullData = res.data;
        // this.setState({ FullData });
      });
  };

  handleChange = (event) => {
    this.setState({
      // update only zip code
      //   Master_status_perniagaan: event.target.value,
    });
  };

  render() {
    return (
      <FormControl fullWidth={true}>
        <InputLabel id="demo-simple-select-label">*Select</InputLabel>
        {/* <Select
          //set selected value (while edit for it will we useful at first page load, initially it is empty but onChange it will get selected menu)
          value={this.state.data.Master_status_perniagaan || ""}
          name=""
          labelId=""
          id=""
          placeholder="Select"
          onChange={this.handleChange}
        >
          {this.state.data.Master_status_perniagaan.filter(
            (user) => user.data.Master_status_perniagaan
          ).map((user) => {
            return (
              <MenuItem
                key={user.data.Master_status_perniagaan}
                id={user.data.Master_status_perniagaan.id}
                // as I see api response zipcode is in address object
                value={user.data.Master_status_perniagaan.name}
              >
                {user.address.street}
              </MenuItem>
            );
          })}
        </Select> */}
      </FormControl>
    );
  }
}

export default MaklumatPribadi;
