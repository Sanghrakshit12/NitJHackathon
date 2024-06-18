import axios from "axios";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "a4e02be279msh2920ad70279af73p1f6697jsnafde7a228e25",
};

export const fetchCoins = async (url) => {
  const res = await axios.get(url, {
    headers: cryptoApiHeaders,
  });
  const data = await res.data;
  return data;
};
