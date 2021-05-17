<script>
    import Report from "./pages/Report.svelte"
    import {setContext} from "svelte";
    import {PoiService} from "./services/poi-service";
    import Navigator from "./components/Navigator.svelte";
    import Router from "svelte-spa-router";

    setContext("PoiService", new PoiService("http://localhost:4000"));

    const navBar = [{
        title: "Report",
        icon: "fas fa-clipboard-list fa-3x",
        colour: "color:rgb(63, 122, 139)",
        link: "/#/report",
    }]

    let routes = {
        "/report": Report,
    }
</script>
<div class="uk-container">
    <Navigator {navBar}/>
    <Router {routes} />
</div>