import  { writable } from "svelte/store";

export const mainBar = [{
    title: "Home",
    icon: "fas fa-compass fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/home",
},{
    title: "Report",
    icon: "fas fa-th-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/report",
},{
    title: "Your Poi's",
    icon: "fas fa-map fa-3x",
    colour: "color:rgb(252, 186, 3)",
    link: "/#/user-report",
},{
    title: "POI Map",
    icon: "fas fa-map-marked-alt fa-3x",
    colour: "rgb(102, 153, 255)",
    link: "/#/Map",
},{
    title: "Settings",
    icon: "fas fa-sliders-h fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/settings",
}, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
},]

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export  const subTitle = writable("");

export const welcomeBar = [
    {
        title: "Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(63, 160, 155)",
        link: "/#/signup",
    },
    {
        title: "Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:green",
        link: "/#/login",
    },
];

export const user = writable({
    email: "",
    token: ""
});