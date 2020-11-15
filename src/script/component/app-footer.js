class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <p><a href="index.html" class="col-lg-6 footer-brand">Covid-19 Tracker</a></p>
                <div class="sumber-data col-lg-3">
                    <h6>Sumber Data<i class="fas fa-database text-white ml-2"></i></h6>
                    <a href="https://www.alodokter.com/virus-corona">ALODOKTER, </a>
                    <a href="https://www.flaticon.com/packs/coronavirus-155">Flaticon.</a><br><br>
                    <h6>APIs<i class="fas fa-sitemap text-white ml-2"></i></h6>
                    <a href="https://github.com/Reynadi531/api-covid19-indonesia-v2">Reynadi531, </a>
                    <a href="https://www.amcharts.com/">amCharts, </a>
                    <a href="https://github.com/inorganik/CountUp.js">CountUp.js.</a>
                </div>
                <div class="kontak col-lg-3">
                    <h6>Kontak</h6>
                    <p><i class="fas fa-envelope mr-2"></i>: <a href="mailto:lukmanrambe1945@gmail.com">lukmanrambe1945@gmail.com</a></p>
                    <p><i class="fab fa-github mr-2"></i>: <a href="https://github.com/LukmanRambe">LukmanRambe</a></p>
                    <p><i class="fab fa-instagram mr-2"></i>: <a href="https://www.instagram.com/l_rambe/">l_rambe</a></p>
                </div>
                <div id="copyright" class="col-lg-12">
                    <p>COVID-19 TRACKER &#169; 2020</p>
                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define("app-footer", Footer);