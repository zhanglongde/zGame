class SceneTitleEnd extends SceneTitle {
  constructor({game, callback}) {
    super({
      game,
      title: '游戏结束，按 r 重新开始游戏',
      x: 100,
      y: 290,
      callback: callback || function () {
        game.registerAction('r', function () {
          let scene = FillMainScene(game)
          game.replaceScene(scene)
        })
      }
    })
  }
}