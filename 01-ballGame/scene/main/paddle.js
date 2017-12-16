class Paddle {
  constructor({game, name, x, y, speed = 15}) {
    this.game = game
    this.name = name
    this.img = game.imageByName({name, x, y})

    this.x = this.img.x
    this.y = this.img.y
    this.w = this.img.w
    this.h = this.img.h
    this.eleImage = this.img.eleImage
    this.speed = speed

    game.registerAction('a', () => {
      this.moveLeft()
    })
    game.registerAction('ArrowLeft', () => {
      this.moveLeft()
    })
    game.registerAction('d', () => {
      this.moveRight()
    })
    game.registerAction('ArrowRight', () => {
      this.moveRight()
    })
  }

  move(x) {
    if (x < 0) {
      x = 0
    }
    if (x > conf.bgWidth - this.w) {
      x = conf.bgWidth - this.w
    }
    this.x = x
  }

  moveLeft() {
    this.move(this.x - this.speed)
  }

  moveRight() {
    this.move(this.x + this.speed)
  }
}
