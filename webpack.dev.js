const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const $ = require("jquery");

module.exports = merge(common, {
    mode : "development"
})