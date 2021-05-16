<script>
    export let poiList;
</script>

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
                    <td></td>
                    <td>{poi.category}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>