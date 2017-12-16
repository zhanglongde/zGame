
class SceneTitleStart extends SceneTitle {
  constructor({game, callback}) {
    super({
      game,
      title: '按 k 开始游戏',
      x: 200,
      y: 200,
      callback
    })
  }
}