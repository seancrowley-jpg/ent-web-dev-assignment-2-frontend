<script>
    import {onMount} from "svelte"
    import PoiList from "./PoiList.svelte"

    const url = `http://localhost:4000/api/pois`
    let poiList;
    onMount(async () => {
        const response = await fetch(url)
        poiList = await response.json();
    })
</script>
<div class="uk-container">
    <h1> POI Client Application </h1>
    <PoiList poiList="{poiList}"/>
</div>