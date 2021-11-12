import axios from "axios";

function myAxios(axiosConfig) {
  const service = axios.create({
    baseURL: 'https://qcsy9b.fn.thelarkcloud.com',
    timeout: 10000,
    headers: {
			'Content-type': 'application/json',
		},
  });

  return service(axiosConfig);
}

export default myAxios;