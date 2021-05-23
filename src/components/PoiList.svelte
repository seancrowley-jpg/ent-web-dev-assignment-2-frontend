<script>
    import {onMount, getContext} from "svelte"
    const poiService = getContext("PoiService")

    let selectedCategory = 0;
    let category = ["Long Walk", "Short Walk", "Cycle Path", "Mountain Path"];

    export let poiList;
    onMount(async () => {
        poiList = await poiService.getPois();
    })

    async function filterCategory () {
        poiList = await poiService.getPois();
        let filteredPoiList = [];
        poiList.forEach(poi=>{
            if(poi.category == category[selectedCategory]){
                filteredPoiList.push(poi);
            };
        })
        poiList = filteredPoiList;
    }
</script>
<div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-expand@m">
        <div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
            <form on:submit|preventDefault={filterCategory} class="uk-form-stacked uk-text-left">
                <div class="uk-grid uk-grid-stack">
                    <div class="uk-width-1-2@m">
                        <div class="uk-margin">
                            <div class="uk-form-label">Sort By Category</div>
                            <div class="uk-form-controls">
                                <label><input bind:group={selectedCategory} value={0} class="uk-radio" type="radio" name="category"> {category[0]} </label>
                                <label><input bind:group={selectedCategory} value={1} class="uk-radio" type="radio" name="category"> {category[1]} </label><br>
                                <label><input bind:group={selectedCategory} value={2} class="uk-radio" type="radio" name="category"> {category[2]} </label>
                                <label><input bind:group={selectedCategory} value={3} class="uk-radio" type="radio" name="category"> {category[3]} </label>
                            </div>
                        </div>
                        <div class=" uk-width-1-2@m">
                            <div class="uk-margin">
                                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table">
        <caption>
            Walks
        </caption>
        <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Added By</th>
        <th>Category</th>
        <th>View</th>
        </thead>
        <tbody class="uk-text-left">
        {#if poiList}
            {#each poiList as poi}
                <tr>
                    <td>{poi.name}</td>
                    <td>{poi.description}</td>
                    <td>{poi.user.firstName} {poi.user.lastName}</td>
                    <td>{poi.category}</td>
                    <td><a href="/#/poi/{poi._id}"><button class="uk-button uk-button-primary uk-button-small">View</button></a></td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>