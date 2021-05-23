<script>
    import poiImg from "/src/assets/poi.png"
    import {title, subTitle, user} from "../stores";
</script>

<div class="uk-width-1-2@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
        <div class="uk-width-1-6@m">
            <a href="/"> <img src="{poiImg}" width="60" alt="poi"/> </a>
        </div>
        <div class="uk-width-expand@m uk-text-left">
            <div class="title">
                {$title}
            </div>
            <div class="uk-text-muted uk-text-small">
                {$subTitle}
            </div>
        </div>
        <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
            <div>
                <i class="fas fa-user fa-3x" style="color:rgb(95, 96, 173)" pos="bottom" uk-tooltip></i>
            </div>
            <div class="uk-width-expand@m uk-text-left">
                <div class="uk-text-muted uk-text-center" style="font-size:xx-small">{$user.email}</div>
            </div>
        </div>
    </div>
</div>