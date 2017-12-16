let log = console.log.bind(console)
let logError = console.error.bind(console)

class Utils {
  constructor () {
  }
  static imageFromPath(path) {
    let img = new Image()
    img.src = path
    return img
  }
}