var enableDebugMode = function (game, enable) {
  if (!enable) {
    return
  }
}

function __initScene(game) {
  console.log('init scene...', game)
  let scene = new SceneTitleStart({game})
  game.registerAction('k', function () {
    let scene = FillMainScene(game)
    game.replaceScene(scene)
  })
  game.runWithScene(scene)
}

let __main = function () {
  let params = {
    fps: conf.fps,
    images: conf.images,
    ndCanvas: document.querySelector('#ball-game-canvas'),
    funCallback: __initScene
  }
  let game = new ZGame(params)
  enableDebugMode(game, true)
}

__main()