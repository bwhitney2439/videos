import axios from "axios";

const KEY = "AIzaSyA9PjNmN62Q8HwRK1nxyRrneiX2zUEcCK0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
