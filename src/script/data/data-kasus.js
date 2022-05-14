class DataKasus extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
        <div class="container">
            <div class="card shadow">
                <div class="row">
                    <div class="col-12 national-title">
                        <h3>Data Nasional</h3>
                        <p id="updated"></p>
                    </div>
                </div>
                <div class="row data-kasus">
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body positif">
                            <h3 class="card-text fw-bold" id="data-positif"></h3>
                            <p class="card-text fw-bold">TERKONFIRMASI</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body aktif">
                            <h3 class="card-text fw-bold" id="data-aktif"></h3>
                            <p class="card-text fw-bold">KASUS AKTIF</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body sembuh">
                            <h3 class="card-text fw-bold" id="data-sembuh"></h3>
                            <p class="card-text fw-bold">SEMBUH</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body meninggal">
                            <h3 class="card-text fw-bold" id="data-meninggal"></h3>
                            <p class="card-text fw-bold">MENINGGAL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
	}
}

customElements.define('data-kasus', DataKasus)

export default DataKasus
