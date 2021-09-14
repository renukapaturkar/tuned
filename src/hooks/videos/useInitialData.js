import axios from "axios";
import { useEffect, useContext } from "react";
import { PrimaryContext } from "../../context/PrimaryContext.js";

export const useInitialData = () => {
  const { primaryDispatch } = useContext(PrimaryContext);

  const getVideos = async () => {
    try {
      const response = await axios.get(
        "https://think-tunes-server.herokuapp.com/videos"
      );
      primaryDispatch({ type: "INITIAL_DATA", payload: response.data.videos });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
};
