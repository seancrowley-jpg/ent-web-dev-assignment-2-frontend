<script>
    import poiImg from "/src/assets/poi.png"
    import {navBar, mainBar, subTitle, title} from "../stores";
    import AddPoi from "../components/AddPoi.svelte"

    title.set("Point of Interest Web App");
    subTitle.set("Add a Walk");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto@m">
            <img width="300" src="{poiImg}" alt="poiImg"  />
        </div>
        <div class="uk-width-expand@m">
            <AddPoi/>
        </div>
    </div>
</div>
