import axios from "axios";

export default class CardsService {
    static async getAll(term = "") {
        const response = await axios.get(
            "http://127.0.0.1:3000", {
                params:{
                    term: term
                }
            }
        );
        return response;
    }
}
