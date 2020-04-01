import axios from "axios";
import { withRouter } from "react-router-dom";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "c919f8b8c63efb348cc4277d55a583df";

const params = {
  api_key: API_KEY,
  lenguage: "ru-RU"
};

const services = {
  async getTrending() {
    try {
      const data = await axios.get("trending/all/day", { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },
  async getMovieDetalies(id) {
    try {
      const data = await axios.get(`movie/${id}`, { params });
      return data;
    } catch (error) {
      console.log("Movie Detalies error", error);
      throw new Error(error);
    }
  },
  async getCast(id) {
    try {
      const data = await axios.get(`movie/${id}/credits?`, { params });
      return data;
    } catch (error) {
      console.log("Cast error", error);
      throw new Error(error);
    }
  },
  async getReviewes(id) {
    try {
      const data = await axios.get(`movie/${id}/reviews?&page=1`, { params });
      return data;
    } catch (error) {
      console.log("Reviwes error", error);
      throw new Error();
    }
  },
  async getSearchMovie(query) {
    try {
      const data = await axios.get(
        `search/movie?&language=en-US&query=${query}&page=1&include_adult=false`,
        { params }
      );
      return data;
    } catch (error) {
      console.log("Search movie error", error);
      throw new Error();
    }
  }
};
export default withRouter(services);
