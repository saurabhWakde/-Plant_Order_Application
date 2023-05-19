import { navbar,footer } from "./components/footer_navbar.js"

var nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var foot = document.getElementById("footer");
foot.innerHTML = footer();