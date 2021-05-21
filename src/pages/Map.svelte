<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";

    const poiService = getContext("PoiService")

    let lat = 52.160858;
    let lon = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lon: lon},
            zoom: 8,
            minZoom: 1,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.addLayerGroup('All Poi');
        map.addLayerGroup('Long Walk');
        map.addLayerGroup('Short Walk');
        map.addLayerGroup('Cycle Path');
        map.addLayerGroup('Mountain Path');
        map.showZoomControl();
        map.showLayerControl();
        const pois = poiService.poiList;
        console.log(pois);
        pois.forEach(poi=>{
            const poiStr =  `${poi.name} ${poi.description}`;
            if(poi.lat && poi.lon) {
                map.addMarker({lat: poi.lat, lon: poi.lon}, poiStr, 'All Poi');
            }
            if(poi.category === "Long Walk"){
                map.addMarker({lat: poi.lat, lon: poi.lon}, poiStr, 'Long Walk');
            }
            if(poi.category && poi.category === "Short Walk"){
                map.addMarker({lat: poi.lat, lon: poi.lon}, poiStr, 'Short Walk');
            }
            if(poi.category && poi.category === "Cycle Path"){
                map.addMarker({lat: poi.lat, lon: poi.lon}, poiStr, 'Cycle Path');
            }
            if(poi.category && poi.category === "Mountain Path"){
                map.addMarker({lat: poi.lat, lon: poi.lon}, poiStr, 'Mountain Path');
            }
        });
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