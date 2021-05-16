export class PoiService {
    poiList = [];
    baseUrl= "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPois() {
        try {
            const response = await fetch(this.baseUrl + "/api/pois")
            this.poiList = await  response.json();
            return this.poiList;
        } catch (error) {
            return [];
        }
    }
}