<script>
    import PoiList from "./components/PoiList.svelte"
    import { setContext } from "svelte";
    import {PoiService} from "./services/poi-service";

    setContext("PoiService", new PoiService("http://localhost:4000"));
</script>
<div class="uk-container">
    <h1> POI Client Application </h1>
    <PoiList/>
</div>