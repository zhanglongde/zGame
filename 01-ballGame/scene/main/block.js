class Block {
  constructor({game, name, x, y}) {
    this.game = game
    this.name = name
    this.img = game.imageByName({name, x, y})

    this.x = this.img.x
    this.y = this.img.y
    this.w = this.img.w
    this.h = this.img.h
    this.eleImage = this.img.eleImage
  }

  kill() {
    console.log('kill')
  }
}
