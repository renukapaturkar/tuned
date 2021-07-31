import axios from "axios";
import { useEffect, useState } from "react";

export const useVideoDetails = (id) => {
  const [videoDetails, setVideoDetails] = useState([]);

  const getDetails = async () => {
    try {
      const { data, status } = await axios.get(
        `https://damp-escarpment-27928.herokuapp.com/videos/${id}`
      );

      if (status === 200) {
        setVideoDetails(data.data);
      } else {
        console.log("something went wrong!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return videoDetails;
};
