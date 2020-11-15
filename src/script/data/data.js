class Data extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set country(country) {
        this._country = country;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="card shadow mb-3">
                <div class="row">
                    <div class="col-12 national-title ml-3 mt-3">
                        <h3>Data Nasional</h3>
                        <p id="updated"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body" id="positif">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <h3 class="card-text font-weight-bold" id="data-c"></h3>
                            <p class="card-text font-weight-bold">TERKONFIRMASI</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body" id="aktif">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <h3 class="card-text font-weight-bold" id="data-a"></h3>
                            <p class="card-text font-weight-bold">KASUS AKTIF</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body" id="sembuh">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <h3 class="card-text font-weight-bold" id="data-r"></h3>
                            <p class="card-text font-weight-bold">SEMBUH</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card-body" id="meninggal">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <h3 class="card-text font-weight-bold" id="data-d"></h3>
                            <p class="card-text font-weight-bold">MENINGGAL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("data-kasus", Data);

export default Data;