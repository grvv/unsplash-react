import axios from "axios";

const searchPhotos = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID your_access_key"
  }
});

export { searchPhotos };
