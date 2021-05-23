<script>
    import poiImg from "/src/assets/poi.png"
    import {navBar, mainBar, subTitle, title} from "../stores";
    import AddPoi from "../components/AddPoi.svelte"
    import 'leaflet/dist/leaflet.css';
    import {onMount, getContext} from "svelte";
    import {LeafletMap} from "../services/leaflet-map";

    const poiService = getContext("PoiService")

    let map;
    //let poiList;

    let lat = 52.160858;
    let lon = -7.152420;

    function justAddedPoi(name, description) {
        const poiStr =  `${name} ${description}`;
        map.addMarker({lat: lat, lon: lon}, poiStr);
        map.moveTo(12, {lat: lat, lon: lon});
    }

    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lon: lon},
            zoom: 8,
            minZoom: 7,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.showZoomControl();
        //map.addMarker({lat: lat, lon: lon});
    });

    title.set("Point of Interest Web App");
    subTitle.set("Add a Walk");
    navBar.set({
        bar: mainBar
    });


</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div id="poi-map" class="ui embed" style="height:600px"></div>
        <div class="uk-width-expand@m">
            <AddPoi {justAddedPoi} bind:lat={lat} bind:lon={lon}/>
        </div>
    </div>
</div>
