import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com";
// const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY;

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f398461366msh5ee20ef33dc7177p149d57jsn36608886fa30",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options);
    return response.data;
  },
};
