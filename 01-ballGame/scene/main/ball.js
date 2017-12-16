class Ball {
  constructor({game, name, x, y, fired = false, speedX = 5, speedY =5}) {
    this.game = game
    this.name = name
    this.img = game.imageByName({name, x, y})

    this.x = this.img.x
    this.y = this.img.y
    this.w = this.img.w
    this.h = this.img.h
    this.eleImage = this.img.eleImage

    this.speedX = speedX
    this.speedY = speedY
    this.fired = fired

    game.registerAction('f', () =>{
      this.fire()
    })
  }

  fire() {
    this.fired = true
  }

  move () {
    if (this.fired) {
//       碰壁，速度相仿
      if (this.x < 0 || this.x > conf.bgWidth) {
        this.speedX = -this.speedX
      }
      if (this.y < 0 || this.y > conf.bgHeight) {
        this.speedY = -this.speedY
      }
      this.x += this.speedX
      this.y += this.speedY
    }
  }

//   碰到挡板，反弹
  debounce () {
    this.speedY *= -1
  }
}
