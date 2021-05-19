<script lang="ts">
    import {navBar, mainBar, subTitle,title} from "../stores";
    import {getContext, onMount} from "svelte";

    const poiService = getContext("PoiService")

    title.set("Point of Interest Web App");
    subTitle.set("Update Walk details");
    navBar.set({
        bar: mainBar
    });
    export let params = {}
    console.log(params)

    let name = "";
    let description = "";
    let lat = 0;
    let lon = 0;
    let selectedCategory = 0;
    let category = ["Long Walk", "Short Walk", "Cycle Path", "Mountain Path"];
    let errorMessage = "";

    let poi = {}
    onMount(async () => {
        poi = await poiService.getOnePoi(params.wild);
        console.log(params);
        console.log(poi);
    })

    async function updatePoi () {
        await poiService.editPoi(name, description, lat, lon, category[selectedCategory], poi._id)
        poi = await poiService.getOnePoi(params.wild);
    }
</script>
<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto@m">
            <div class="uk-card uk-card-default uk-width-xlarge uk-card-body uk-box-shadow-large">
                <h3 class="uk-card-title uk-text-center">Walk Details: </h3>
                <form on:submit|preventDefault={updatePoi} class="uk-form-stacked uk-text-left">
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: name"></span>
                            <input bind:value={name} class="uk-input uk-form-large" type="text" name="name" placeholder="{poi.name}">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: description"></span>
                            <input bind:value={description} class="uk-input uk-form-large" type="text" name="description" placeholder="{poi.description}">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lat"></span>
                            <input bind:value={lat}  class="uk-input uk-form-large" type="number" step=".01" name="lat" placeholder="{poi.lat}">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lon"></span>
                            <input bind:value={lon} class="uk-input uk-form-large" type="number" step=".01" name="lon" placeholder="{poi.lon}">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-form-label">Choose Category</div>
                        <div class="uk-form-controls">
                            <label><input bind:group={selectedCategory} value={0} class="uk-radio" type="radio" name="category" placeholder="{poi.category}"> {category[0]} </label>
                            <label><input bind:group={selectedCategory} value={1} class="uk-radio" type="radio" name="category" placeholder="{poi.category}"> {category[1]} </label><br>
                            <label><input bind:group={selectedCategory} value={2} class="uk-radio" type="radio" name="category" placeholder="{poi.category}"> {category[2]} </label>
                            <label><input bind:group={selectedCategory} value={3} class="uk-radio" type="radio" name="category" placeholder="{poi.category}"> {category[3]} </label>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Update Walk</button>
                    </div>
                    {#if errorMessage}
                        <div class="uk-text-left uk-text-small">
                            {errorMessage}
                        </div>
                    {/if}
                </form>
            </div>
        </div>
    </div>
</div>
