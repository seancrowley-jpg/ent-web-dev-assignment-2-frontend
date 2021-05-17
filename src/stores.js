import  { writable } from "svelte/store";

export const mainBar = [{
    title: "Report",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/report",
}]

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export  const subTitle = writable("");