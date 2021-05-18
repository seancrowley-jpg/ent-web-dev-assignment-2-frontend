import axios from "axios";
import {user} from "../stores";

export class PoiService {
    poiList = [];
    baseUrl= "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.donation) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.donation);
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
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                });
                localStorage.donation = JSON.stringify(response.data.token);
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
        localStorage.donation = null;
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

}