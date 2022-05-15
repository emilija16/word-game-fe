import http from "../http-common";

class WordGameService {
  getAll() {
    return http.get("/");
  }

  create(data) {
    return http.post("/add-word", data);
  }
}

export default new WordGameService();
