class SceneTitle extends ZScene {
  constructor(game) {
    super(game)
    game.registerAction('r', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }
  draw() {
//     console.log('按 k 开始游戏', this.game.context)
    this.game.context.font = "10px serif"
    this.game.context.fillText('游戏结束，按 r 重新开始游戏', 100, 290)
  }
}