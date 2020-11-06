import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

// instance.defaults.headers.common['SOMETHING'] = ''

export default instance;
