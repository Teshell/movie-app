import axios from "axios";

const baseUrl = "http://www.omdbapi.com/?apikey=";
const urlKey = "3d74c353";

const fetchMovie = async (movie) => {
  const { data } = await axios.get(`${baseUrl}${urlKey}&s=${movie}`);

  return data.Search;
};

export default fetchMovie;
