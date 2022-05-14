class AppHeader extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-lg fixed-top">
                    <div class="container col-md-12 col-lg-10 p-0">
                        <a href="index.html" class="navbar-brand">Covid-19 Tracker</a>
                        <button type="button" class="navbar-toggler navbar-dark border-white" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="col-2">
                        <div class="navbar-collapse collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Beranda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">Tentang</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `
	}
}

customElements.define('app-header', AppHeader)
