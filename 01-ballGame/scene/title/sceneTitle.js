class SceneTitle extends ZScene {
  constructor(game) {
    super(game)
    game.registerAction('k', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }
  draw() {
//     console.log('按 k 开始游戏', this.game.context)
    this.game.context.font = "10px serif"
    this.game.context.fillText('按 k 开始游戏', 100, 100)
  }
}