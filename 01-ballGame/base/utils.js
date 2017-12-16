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
  static RectCollide(a, b) {
    return !((a.x + a.w < b.x) || (a.x > b.x + b.w) || (a.y + a.h < b.y) || (a.y > b.y + b.h))
  }
}