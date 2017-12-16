let Scene = function (game) {
  let s = {
    game: game
  }
  let score = 0
  let ball = game.imageByName({name: 'ball', x: 100, y:200})
  let paddle = game.imageByName({name: 'paddle', x: 100, y:250})

  s.draw = function () {
    // draw 背景
    game.context.fillStyle = '#58a'
    game.context.fillRect(0,0, 400, 300)
    
    game.drawImage(ball)
    game.drawImage(paddle)

    game.context.fillStyle = '#fff'
    game.context.fillText('分数:' + score, 100, 290)
  }

  s.update = function () {
    if (window.paused) {
      return
    }
  }

  return s
}