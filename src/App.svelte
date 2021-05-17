<script>
    import Report from "./pages/Report.svelte"
    import {setContext} from "svelte";
    import {PoiService} from "./services/poi-service";
    import Navigator from "./components/Navigator.svelte";

    setContext("PoiService", new PoiService("http://localhost:4000"));
</script>
<div class="uk-container">
    <Navigator/>
    <Report/>
</div>