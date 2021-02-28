import axios from "axios";
import axiosRetry from "axios-retry";

//fetchAPIData
export function fetchAPIData() {
  axiosRetry(axios, { retries: 10 });
  return function (dispatch) {
    return axios
      .get("https://sometimes-maybe-flaky-api.gdshive.io/")
      .then((res) => {
        console.log("from API>>>>>>>>>");
        console.log(res.data);
        dispatch(setAPIData(res.data));
      })
      .catch((err) => {
        console.log("ERROR >>> " + err);
        return fetchAPIData();
      });
  };
}

//setAPIData
function setAPIData(data) {
  return {
    type: "SET_APIDATA",
    data: data,
  };
}
