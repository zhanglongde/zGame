var enableDebugMode = function (game, enable) {
  if (!enable) {
    return
  }
}

function __initScene(g) {
  console.log('init scene...', g)
  let scene = new SceneTitle(g)
  g.runWithScene(scene)
}

let __main = function () {
  let images = {
    ball: 'img/ball.png',
    block: 'img/block.png',
    paddle: 'img/paddle.png'
  }
  let params = {
    fps: 30,
    images,
    ndCanvas: document.querySelector('#ball-game-canvas'),
    funCallback: __initScene
  }
  let game = new ZGame(params)
  enableDebugMode(game, true)
}

__main()