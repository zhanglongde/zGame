/**
 * 主场景
 */
class Scene extends ZScene {
  constructor({game, paddle, ball, blocks}) {
    super(game)
    this.game = game
    this.paddle = paddle
    this.ball = ball
    this.blocks = blocks
    this.score = 0
  }

  draw() {
    // draw 背景
    this.game.context.fillStyle = conf.backgroundColor
    this.game.context.fillRect(0, 0, conf.bgWidth, conf.bgHeight)

    this.game.drawImage(this.ball)
    this.game.drawImage(this.paddle)
    this.game.drawImage(this.blocks)

    this.game.context.fillStyle = '#fff'
    this.game.context.fillText('分数:' + this.score, 100, 390)
  }

  update() {
    if (window.paused) {
      return
    }
    this.ball.move()
//     挡板与小球相撞
    if (Utils.RectCollide(this.ball, this.paddle)) {
      this.ball.debounce()
    }
//     小球与碰到砖块
    if (Utils.RectCollide(this.ball, this.blocks)) {
      this.blocks.kill()
      this.ball.debounce()
    }
  }
}

function FillMainScene(game) {
  return new Scene({
    game,
    paddle: new Paddle({game, name: 'paddle', x: 100, y:350}),
    ball: new Ball({game, name: 'ball', x: 100, y:200}),
    blocks: new Block({game, name: 'block', x: 100, y:100})
  })
}