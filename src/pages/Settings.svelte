<script lang="ts">
    import {mainBar, navBar, title, subTitle} from "../stores";
    import poiImg from "/src/assets/poi.png"
    import SettingsForm from "../components/SettingsForm.svelte"

    title.set("Point of Interest Web App");
    subTitle.set("Your details..")

    navBar.set({
        bar: mainBar
    })


</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{poiImg}" alt="homer">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Your Account Details:</h3>
            <SettingsForm/>
        </div>
    </div>
</div>