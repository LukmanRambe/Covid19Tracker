class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <button class="navbar-toggler navbar-dark border-white" data-toggle="collapse" data-target="#collapse_target">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a href="index.html" class="navbar-brand col-fluid">Covid-19 Tracker</a>
                
                    <div class="collapse navbar-collapse" id="collapse_target">
                        <div class="container">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link" href="index.html">Beranda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="information.html">Informasi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">Tentang</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }
}

customElements.define("app-bar", AppBar);