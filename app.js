import "regenerator-runtime";
import "./node_modules/jquery/dist/jquery.min.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./node_modules/chart.js/dist/Chart.min.js";
import "./node_modules/chartjs-plugin-zoom/chartjs-plugin-zoom.js";
import "./node_modules/countup.js/dist/countUp.min.js";
import "./src/styles/style.css";
import "./src/styles/responsive.css";
import "./src/script/component/app-bar.js";
import "./src/script/component/app-footer.js";
import "./src/script/data/data.js";
import "./sw.js";
import "./manifest.json";
import provinsi from "./src/script/view/provinsi.js";
import main from "./src/script/view/main.js";

document.addEventListener("DOMContentLoaded", provinsi);
document.addEventListener("DOMContentLoaded", main);