import {navbar,footer} from "./navbar.js"

var nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var foot = document.getElementById("footer");
foot.innerHTML = footer();