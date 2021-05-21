<script>
    import poiImg from "/src/assets/poi.png";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const poiService = getContext("PoiService")

    title.set("Point of Interest Web App");
    subTitle.set("Admin");
    navBar.set({
        bar: mainBar
    });
    let poiList;
    let userList;
    let data = {
        labels: ["Total POIs", "Total Users"],
        datasets: [
            {
                values: [0, 0]
            }
        ]
    };

    onMount(async () => {
        poiList = await poiService.getPois();
        userList = await poiService.getUsers();
        data.datasets[0].values[0] = poiList.length;
        data.datasets[0].values[1] = userList.length;

    })

    async function deleteUser(email) {
        await poiService.deleteAdmin(email)
        poiList = await poiService.getPois();
        userList = await poiService.getUsers();
        data.datasets[0].values[0] = poiList.length;
        data.datasets[0].values[1] = userList.length;
    }

</script>

<Chart data={data} type="bar" />

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table">
        <caption>
            All Users:
        </caption>
        <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Delete User</th>
        </thead>
        <tbody class="uk-text-left">
        {#if userList}
            {#each userList as user}
                <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td><button on:click={deleteUser(user._id)} class="uk-button-danger uk-button-primary uk-button-small">Delete</button></td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>