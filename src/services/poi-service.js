import axios from "axios";

export class PoiService {
    poiList = [];
    baseUrl= "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async addPoi(name, description, lat, lon, category) {
        try {
            const poi = {
                name: name,
                description: description,
                lat: lat,
                lon: lon,
                category: category,
            };
            const response =  await axios.post(this.baseUrl + "/api/pois", poi);
            return response.status == 200;
        }   catch (error) {
            return false;
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users")
            this.userList = await response.json();
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            return response.status == 200;

        } catch (error) {
            return false;
        }
    }
}