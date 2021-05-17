<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores";
    import poiImg from "/src/assets/poi.png";
    title.set("Point of Interest Web App ");
    subTitle.set("Sign up or log in ");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto@m">
            <img width="300" src="{poiImg}" />
        </div>
        <div class="uk-width-expand@m">
            <h1 class="uk-heading-small">Point of Interest Web App</h1>
            <p>Web application for adding walks/cycle paths around Ireland</p>
        </div>
    </div>
</div>