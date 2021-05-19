<script>
    import {onMount, getContext} from "svelte"
    import {user} from "../stores";
    const poiService = getContext("PoiService")

    let poiList;
    onMount(async () => {
        poiList = await poiService.getUserPois();
    })
</script>

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table">
        <caption>
            Walks
        </caption>
        <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Category</th>
        <th>View Walk</th>
        <th>Edit Walk</th>
        <th>Delete Walk</th>
        </thead>
        <tbody class="uk-text-left">
        {#if poiList}
            {#each poiList as poi}
                <tr>
                    <td>{poi.name}</td>
                    <td>{poi.description}</td>
                    <td>{poi.category}</td>
                    <td><a href="/#/poi/{poi._id}"><button class="uk-button uk-button-primary uk-button-small">View</button></a></td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>