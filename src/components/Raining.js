import React, { Component } from 'react'

class Rain {
  constructor() {
    this.x = 0
    this.y = 0
    this.speed = 0
    this.width = 2
    this.length = 0
  }

  init() {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * 2 * -window.innerHeight
    this.speed =  Math.random() * 5
    this.length = Math.random() * 0.5 * 40 + 20
  }

}

class Drop {
  constructor() {
    this.center = {}
    this.speedX = 0
    this.speedY = 0
    this.maxSpeed = 5
  }

  init(x, length) {
    this.center = {
      x: x,
      y: window.innerHeight - length * 0.2
    }
    let angle = Math.random() * Math.PI
    let speed = Math.random() * this.maxSpeed
    this.speedX = Math.cos(angle) * 3 * speed
    this.speedY = -Math.sin(angle) * 3 * speed
  }

}

class Controller {
  canvas = null
  context = null
  rains = null
  drops = null
  dropPool = null
  timer = null

  constructor(options) {
    this.canvas = options.canvas
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.context = this.canvas.getContext('2d')
    this.rainColor = options.rainColor
    this.g = options.g
    this.dropCount = options.dropCount
    this.interval = options.interval
  }

  init() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.rains = []
    this.drops = new Set()
    this.dropPool = []
    let rainCount = Math.round(window.innerWidth / 100)

    for (let i = 0; i < rainCount; i++) {
      let rain = new Rain()
      rain.init()
      this.rains.push(rain)
    }
  }

  draw() {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.rains.forEach(rain => {
      this.context.beginPath()
      this.context.moveTo(rain.x, rain.y)
      this.context.lineTo(rain.x, rain.y + rain.length)
      this.context.lineWidth = rain.width
      this.context.strokeStyle = this.rainColor
      this.context.stroke()

      rain.y = rain.y + rain.speed
      rain.speed += this.g
      if (rain.y > window.innerHeight) {
        for (let i = 0; i < this.dropCount; i++) {
          let drop = this.dropPool.pop() || new Drop()
          drop.init(rain.x, rain.length)
          this.drops.add(drop)
        }
        rain.init()
      }

    })

    this.drops.forEach(drop => {
      this.context.beginPath()
      this.context.arc(drop.center.x, drop.center.y, Math.random() * 2, 0, 2 * Math.PI)
      this.context.fillStyle = this.rainColor
      this.context.fill()
      this.context.stroke()

      drop.center.x += drop.speedX
      drop.center.y += drop.speedY
      drop.speedY += this.g
      if (drop.center.y > window.innerHeight) {
        this.drops.delete(drop)
        this.dropPool.push(drop)
      }
    })

  }

  run() {
    this.timer = setInterval(() => {
      this.draw()
    }, this.interval)
  }

  stop() {
    clearInterval(this.timer)
  }
}

class Raining extends Component {
  controller = null

  componentDidMount() {
    const options = {
      canvas: this.refs.canvas,
      rainColor: 'white',
      g: 2,
      dropCount: 5,
      interval: 30
    }

    this.controller = new Controller(options)
    this.controller.init()
    setTimeout(() => {
      this.controller.run()
    }, 1000)

    this.resize = this.resize.bind(this)
    window.addEventListener('resize', this.resize)
  }

  resize() {
    if (this.controller) {
      this.controller.stop()
      this.controller.init()
      this.controller.run()
    }
  }

  componentWillUnmount() {
    this.controller.stop()
  }

  render() {
    return (
      <canvas ref="canvas"></canvas>
    )
  }
}

export default Raining