import axios from "axios";
import {user} from "../stores";

export class PoiService {
    poiList = [];
    poi = {};
    baseUrl= "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.poi) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.poi);
        }
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

    async getUserPois(id) {
        try {
            const response = await axios.get(`${this.baseUrl}/api/pois/userpois/${id}`)
            this.poiList = await response.data;

            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getOnePoi(id) {
        try {
            const response = await axios.get(`${this.baseUrl}/api/pois/${id}`)
            this.poi = await response.data;
            return this.poi;
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

    async deletePoi(id) {
        try {
            const response = await axios.delete(`${this.baseUrl}/api/pois/${id}`);
            return response.status == 200;
        } catch (e) {
            return false;
        }
    }
    
    async editPoi(name, description, lat, lon, category, id) {
        const poiDetails = {
            name: name,
            description: description,
            lat: lat,
            lon: lon,
            category: category,
        };
        console.log("New Poi Details:")
        console.log(poiDetails);
        await axios.put(`${this.baseUrl}/api/pois/${id}`, poiDetails);
    }

    async getWeather(id) {
        try {
            const weather = axios.get(`${this.baseUrl}/api/pois/${id}/weather`)
            return weather
        } catch (e) {
            return {};
        }

    }

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users")
            this.userList = await response.data;
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.poi = null;
    }

    async signup (firstName, lastName, email, password) {
        try{
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set({
                email: newUser.email,
                token: newUser.token
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    async deleteUser(id) {
        try {
            const response = await axios.delete(`${this.baseUrl}/api/users/${id}`);
            return response.status == 200;
        } catch (e) {
            return false;
        }
    }

    async addImage(id, imageFile) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/pois/${id}`, imageFile);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async deleteImage(id) {
        try {
            const response = await axios.delete(`${this.baseUrl}/api/pois/${id}/image`);
            return response.status == 200;
        } catch (error){
            return false
        }
    }

}