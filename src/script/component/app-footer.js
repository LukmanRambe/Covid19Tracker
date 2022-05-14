class Footer extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		const date = new Date()
		const currentYear = date.getFullYear()

		this.innerHTML = `
                <footer>
                    <div class="row">
                        <a href="index.html" class="col-lg-3 footer-brand">Covid-19 Tracker</a>
                        <div class="sumber-data col-lg-3">
                            <h3>Sumber Data <i class="fas fa-database text-white"></i></h3>
                            <p>
                                <a href="https://www.alodokter.com/virus-corona">ALODOKTER</a>,
                                <a href="https://www.flaticon.com/packs/coronavirus-155">Flaticon</a>
                            </p>

                            <h3>APIs <i class="fas fa-sitemap text-white"></i></h3>
                            <p>
                                <a href="https://github.com/Reynadi531/api-covid19-indonesia-v2">Reynadi531</a>, 
                                <a href="https://www.amcharts.com/">amCharts</a>, 
                                <a href="https://github.com/inorganik/CountUp.js">CountUp.js</a>
                            </p>
                        </div>
                        <div class="kontak col-lg-3">
                            <h3>Kontak</h3>
                            <ul class="fa-ul">
                                <li>
                                    <p><span class="fa-li"><i class="fas fa-envelope"></i></span> <a href="mailto:lukmanrambe1945@gmail.com">lukmanrambe1945@gmail.com</a></p>
                                </li>
                                <li>
                                    <p><span class="fa-li"><i class="fab fa-github"></i></span> <a href="https://github.com/LukmanRambe">LukmanRambe</a></p>
                                </li>
                                <li>
                                    <p><span class="fa-li"><i class="fab fa-instagram"></i></span> <a href="https://www.instagram.com/l_rambe/">l_rambe</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="copyright">
                        <p>Covid-19 Tracker &#169; ${currentYear}</p>
                    </div>
                </footer>
        `
	}
}

customElements.define('app-footer', Footer)
