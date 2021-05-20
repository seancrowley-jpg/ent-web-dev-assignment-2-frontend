<script>

    import ViewPoi from "../components/ViewPoi.svelte";
    import poiImg from "../assets/poi.png"
    import {navBar, mainBar, subTitle,title ,user} from "../stores";
    import {getContext, onMount} from "svelte"
    const poiService = getContext("PoiService")
    export let params = {}
    //console.log(params)

    let poi = {};
    let weather = {};
    let report = {};
    let images = [];
    let currentUserEmail = $user.email;
    let userPoiCheck;

    function checkUser(poi){
        if (poi.user.email == currentUserEmail) {
            userPoiCheck = true;
        }
    }

    onMount(async () => {
        poi = await poiService.getOnePoi(encodeURI(params.wild));
        weather = await poiService.getWeather(encodeURI(params.wild))
        report = weather.data;
        images = poi.image;
        checkUser(poi);
        //console.log(userPoiCheck);
        //console.log(poi.user.email);
        //console.log(currentUserEmail);
        //console.log($user.email);
        //console.log(weather);
        //console.log(report);
        //console.log(poi.image[0].id);
        console.log(images);
    })

    async function deleteImage(id) {
        await poiService.deleteImage(id);
        poi = await poiService.getOnePoi(encodeURI(params.wild));
        weather = await poiService.getWeather(encodeURI(params.wild))
        report = weather.data;
        images = poi.image;
        checkUser(poi);
    }

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
                        <td>Feels Like: {report.feelsLike}°C<br> Sky: {report.clouds}</td>
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
<div class="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid uk-height-match="target: .uk-card">
    {#if images}
        {#each images as image}
            <div class="uk-card uk-card-default uk-card-small uk-text-center uk-text-baseline uk-animation-scale-up">
                <div class="uk-card-media-top">
                    <img src="{image.url}">
                </div>
                <div>
                    <div class="uk-card-footer">
                        <p> {image.public_id}</p>
                        {#if userPoiCheck}

                            <td><a on:click={deleteImage(image.public_id)} uk-icon="icon: trash"></a></td>
                            {/if}
                    </div>
                </div>
            </div>
            {/each}
        {/if}
</div>