<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {onMount} from "svelte";

    let lat = 52.160858;
    let lon = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lon: lon},
            zoom: 8,
            minZoom: 7,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.showZoomControl();
        map.showLayerControl();
    });

    title.set("Point of Interest Web App ");
    subTitle.set("Map of all POIS");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="poi-map" class="ui embed" style="height:800px"></div>
    </div>
</div>