const path = require('path')

const view = path.join(__dirname, '../app/view/app.html')
const preload = path.join(__dirname, '../app/preload.js')

console.log(view)

module.exports = {
    "view": view,
    "preload": preload
}