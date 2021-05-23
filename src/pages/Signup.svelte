<script lang="ts">
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"
    import poiImg from "/src/assets/poi.png"

    title.set("Point of Interest Web App")
    subTitle.set("Sign up")

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{poiImg}" alt="poiImg">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Please enter details below</h3>
            <SignupForm />
        </div>
    </div>
</div>
