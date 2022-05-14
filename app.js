import 'regenerator-runtime/runtime'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import 'bootstrap'
import './src/styles/style.css'
import './src/styles/responsive.css'
import './src/script/component/app-header.js'
import './src/script/component/app-footer.js'
import './src/script/data/data-kasus.js'
import provinsi from './src/script/view/provinsi.js'
import main from './src/script/view/main.js'

document.addEventListener('DOMContentLoaded', provinsi)
document.addEventListener('DOMContentLoaded', main)
