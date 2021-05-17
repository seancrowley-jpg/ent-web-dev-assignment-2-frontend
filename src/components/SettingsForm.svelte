<script lang="ts">
    import {getContext} from "svelte";
    import {user} from "../stores"

    let firstName = $user.firstName;
    let lastName = $user.lastName;
    let email = $user.email;
    let password = $user.password
    let message = "";

    const poiService = getContext("PoiService")

    async function updateUser() {
        let success = await poiService.updateSettings(firstName, lastName, email, password, $user._id);
        if (success) {
            message = "Settings Updated";
        } else {
            message = "Error saving settings"
        }
    }
</script>

<form on:submit|preventDefault={updateUser}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: user"></span> <input bind:value={firstName} class="uk-input uk-form-large" type="text" name="firstName" placeholder="First Name">
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: user"></span> <input bind:value={lastName} class="uk-input uk-form-large" type="text" name="lastName" placeholder="Last Name">
            </div>
        </div>
        <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: mail"></span> <input bind:value={email} class="uk-input uk-form-large" type="text" name="email" placeholder="Email">
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: lock"></span> <input bind:value={password} class="uk-input uk-form-large" type="password" name="password" placeholder="Password">
            </div>
        </div>
    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Save Settings</button>
    </div>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</form>