<script>
    import {setContext} from "svelte";
    import {PoiService} from "./services/poi-service";
    import Main from "./pages/Main.svelte"
    import Home from "./pages/Home.svelte"
    import Signup from "./pages/Signup.svelte"
    import Login from "./pages/Login.svelte"
    import Report from "./pages/Report.svelte"
    import UserReport from "./pages/UserReport.svelte"
    import Poi from "./pages/Poi.svelte"
    import UpdatePoi from "./pages/UpdatePoi.svelte"
    import Map from "./pages/Map.svelte"
    import Settings from "./pages/Settings.svelte"
    import Admin from "./pages/Admin.svelte"
    import Navigator from "./components/Navigator.svelte";
    import Router from "svelte-spa-router";

    setContext("PoiService", new PoiService("https://radiant-coast-86425.herokuapp.com"));


    let routes = {
        "/" : Main,
        "/signup": Signup,
        "/login": Login,
        "/home": Home,
        "/report": Report,
        "/poi/*": Poi,
        "/update-poi/*": UpdatePoi,
        "/user-report": UserReport,
        "/map": Map,
        "/admin": Admin,
        "/settings": Settings,
        "/logout": Main
    }
</script>
<div class="uk-container">
    <Navigator />
    <Router {routes} />
</div>