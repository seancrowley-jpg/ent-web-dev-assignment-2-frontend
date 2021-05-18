<script>
    import UserPoiList from "../components/UserPoiList.svelte"
    import {navBar, mainBar, subTitle,title} from "../stores";

    title.set("Point of Interest Web App");
    subTitle.set("Your Walks ");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-expand@m">
            <UserPoiList/>
        </div>
    </div>
</div>