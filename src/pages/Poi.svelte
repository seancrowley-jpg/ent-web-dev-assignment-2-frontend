<script>

    import ViewPoi from "../components/ViewPoi.svelte";
    import poiImg from "../assets/poi.png"
    import {navBar, mainBar, subTitle,title} from "../stores";
    import {getContext} from "svelte"
    const poiService = getContext("PoiService")
    export let params = {}
    console.log(params)


    title.set("Point of Interest Web App");
    subTitle.set("Point of Interest Details");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-expand@m">
            <ViewPoi/>
        </div>
        <div class="uk-width-auto@m">
            <img width="300" src="{poiImg}">
        </div>
    </div>
</div>