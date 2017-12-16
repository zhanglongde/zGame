
class ZGame {
  constructor({fps, images, ndCanvas, funCallback}) {
    window.fps = fps
    this.images = images
    this.runCallBack = funCallback

    this.canvas = ndCanvas
    this.context = this.canvas.getContext('2d')
    this.scene = null
    this.actions = {}
    this.keydowns = {}

    //事件状态
    window.addEventListener('keydown', event => {
      this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', event => {
      this.keydowns[event.key] = false
    })
    this.init()
  }
  /**
   * 绘制图片素材
   * @param img
   */
  drawImage(img) {
    this.context.drawImage(img.eleImage, img.x, img.y)
  }
  imageByName ({name, x, y}) {
    let img = this.images[name]
    let image = {
      w: img.width,
      h: img.height,
      x: x,
      y: y,
      eleImage:img
    }
    return image
  }
//   更新场景、精灵状态
  update () {
    this.scene.update()
  }
//   调用绘制器
  draw() {
    this.scene.draw()
  }
//   注册事件响应函数
  registerAction(key,callback) {
    this.actions[key] = callback
  }
//   图片全部加载完毕，开始游戏
  __start() {
    this.runCallBack(this)
  }

//     预先载入所有图片
  __initImages () {
    return new Promise((resolve, reject) => {
      let lenLoaded = 0
      let names = Object.keys(this.images)
      for(let i = 0,LEN = names.length; i < LEN; i++){
        let name = names[i]
        let path = this.images[name]
        let img = Utils.imageFromPath(path)
        img.onload = () => {
          //         已经加载成功的图片节点，还未绘制到canvas上
          this.images[name] = img
          lenLoaded ++
          if (lenLoaded === names.length) {
            resolve()
          }
        }
        img.onerror = () => {
          reject(name)
        }
      }
    })
  }

  init() {
    this.__initImages().then(() => {
      log('loaded images', this.images)
      this.__start()
    }).catch((error) => {
      logError('error image:', error, this.images[error])
    })
  }

//   处理按键
  keyLoop() {
    let actions = Object.keys(this.actions)
    for(let i = 0,LEN = actions.length; i < LEN; i++){
      let key = actions[i]
      if (this.keydowns[key]) {
        this.actions[key]()
      }
    }
  }

  runLoop() {
//     log(window.fps)
    this.keyLoop()

    this.update()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.draw()

//     无限循环
    setTimeout(() => {
      this.runLoop()
    }, 1000/window.fps)
  }

  replaceScene(scene) {
    this.scene = scene
  }

  runWithScene(scene) {
    this.replaceScene(scene)
    this.runLoop()
  }
}