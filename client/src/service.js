import axios from "axios";
const defaultUrl = "http://localhost:7000";
const sendData = (data) => {
  return axios
    .post(`${defaultUrl}/data`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default sendData;
