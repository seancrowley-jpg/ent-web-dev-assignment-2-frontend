<script>

    import ViewPoi from "../components/ViewPoi.svelte";
    import poiImg from "../assets/poi.png"
    import {navBar, mainBar, subTitle,title} from "../stores";
    import {onMount, getContext} from "svelte"
    const poiService = getContext("PoiService")
    export let params = {}
    console.log(params)

    let poi = {}
    onMount(async () => {
        poi = await poiService.getOnePoi(encodeURI(params.wild));
        console.log(params);
        console.log(poi);
    })

    title.set("Point of Interest Web App");
    subTitle.set("Point of Interest Details");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-expand@m">
            <div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <table class="uk-table">
                    <caption>
                        Details for {poi.name} Walk
                    </caption>
                    <thead>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Category</th>
                    <th>Weather</th>
                    </thead>
                    <tbody class="uk-text-left">
                    <tr>
                        <td>{poi.name}</td>
                        <td>{poi.description}</td>
                        <td>{poi.lat}</td>
                        <td>{poi.lon}</td>
                        <td>{poi.category}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="uk-width-auto@m">
            <img width="300" src="{poiImg}">
        </div>
    </div>
</div>