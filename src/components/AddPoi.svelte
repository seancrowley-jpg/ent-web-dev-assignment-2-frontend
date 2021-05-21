<script lang="ts">
    import {getContext} from "svelte"
    const poiService = getContext("PoiService")

    export let justAddedPoi;

    let name = "";
    let description = "";
    export let lat = 0.0;
    export let lon = 0.0;
    let selectedCategory = 0;
    let category = ["Long Walk", "Short Walk", "Cycle Path", "Mountain Path"];
    let errorMessage = "";

    async function addPoi() {
        let poi= await poiService.addPoi(name, description,lat, lon, category[selectedCategory],)
        if (justAddedPoi) justAddedPoi(name, description);
    }
</script>
<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <form on:submit|preventDefault={addPoi} class="uk-form-stacked uk-text-left">
        <div class="uk-grid uk-grid-stack" id="form-stacked-text">
            <div class="uk-width-1-2@m">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Enter Name of Walk</label>
                    <div class="uk-form-controls">
                        <input bind:value={name} class="uk-input" type="text" name="name" placeholder="Name">
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Enter Description of Walk</label>
                    <div class="uk-form-controls">
                        <input bind:value={description} class="uk-input"  type="text" name="description" placeholder="Description" />
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Enter Latitude of Walk</label>
                    <div class="uk-form-controls">
                        <input bind:value={lat} class="uk-input"  type="number" step=".01" name="lat" placeholder="Latitude" />
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Enter Longitude of Walk</label>
                    <div class="uk-form-controls">
                        <input bind:value={lon} class="uk-input"  type="number" step=".01" name="lon" placeholder="Longitude" />
                    </div>
                </div>
                <div class="uk-margin">
                    <div class="uk-form-label">Choose Category </div>
                    <div class="uk-form-controls">
                        <label><input bind:group={selectedCategory} value={0} class="uk-radio" type="radio" name="category"> {category[0]} </label>
                        <label><input bind:group={selectedCategory} value={1} class="uk-radio" type="radio" name="category"> {category[1]} </label><br>
                        <label><input bind:group={selectedCategory} value={2} class="uk-radio" type="radio" name="category"> {category[2]} </label>
                        <label><input bind:group={selectedCategory} value={3} class="uk-radio" type="radio" name="category"> {category[3]} </label>
                    </div>
                </div>
                <div class=" uk-width-1-2@m">
                    <div class="uk-margin">
                        <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Walk</button>
                    </div>
                </div>
                {#if errorMessage}
                    <div class="uk-text-left uk-text-small">
                        {errorMessage}
                    </div>
                {/if}
            </div>
        </div>
    </form>
</div>