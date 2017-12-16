class SceneTitle extends ZScene {
  constructor({game, title, font = "10px serif", x, y, callback}) {
    super(game)
    this.title = title
    this.font = font
    this.x = x
    this.y = y
    if (typeof callback === 'function') {
      callback()
    }
  }
  draw() {
    this.game.context.font = this.font
    this.game.context.fillText(this.title, this.x, this.y)
  }
}