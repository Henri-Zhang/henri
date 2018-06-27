import React, { Component } from 'react'

class Rain {
  x = 0
  y = 0
  speed = 0
  splashed = false
  width = 2
  height = 0
  canvasWidth = 0
  canvasHeight = 0
  drops = []

  constructor(canvas) {
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
  }

  init() {
    this.x = Math.random() * (this.canvasWidth + this.canvasHeight)
    this.y = Math.random() * 2 * -this.canvasHeight
    this.speed =  Math.random() * 5
    this.height = Math.random() * 0.5 * 40 + 20
    this.splashed = false
  }

}

class Drop {
  constructor() {
    this.center = {}
    this.radius = Math.round(Math.random() * 2 + 1)
    this.speedX = 0
    this.speedY = 0
    this.maxSpeed = 5
  }

  init(x, height, canvasHeight) {
    this.center = {
      x: x,
      y: canvasHeight - 10
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
  rains = []
  drops = []
  drawDrops = null
  timer = null
  g = 2
  rainColor = ""

  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.drawDrops = new Set()
    this.rainColor = 'white'
  }

  init() {
    for (let i = 0; i < 100; i++) {
      let rain = new Rain(this.canvas)
      rain.init()
      this.rains.push(rain)
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.rains.forEach(rain => {
      this.context.beginPath()
      this.context.moveTo(rain.x, rain.y)
      this.context.lineTo(rain.x, rain.y + rain.height)
      this.context.lineWidth = rain.width
      this.context.strokeStyle = this.rainColor
      this.context.stroke()

      rain.y = rain.y + rain.speed
      rain.speed += this.g
      if (rain.y > this.canvas.height) {
        for (let i = 0; i < 5; i++) {
          let drop = this.drops.pop() || new Drop()
          drop.init(rain.x, this.height, this.canvas.height)
          this.drawDrops.add(drop)
        }
        rain.init()
      }

    })

    this.drawDrops.forEach(drop => {
      this.context.beginPath()
      this.context.arc(drop.center.x, drop.center.y, Math.random() * 2, 0, 2 * Math.PI)
      this.context.fillStyle = this.rainColor
      this.context.fill()
      this.context.stroke()

      drop.center.x += drop.speedX
      drop.center.y += drop.speedY
      drop.speedY += this.g
      if (drop.center.y > this.canvas.height) {
        this.drawDrops.delete(drop)
        this.drops.push(drop)
      }
    })

  }

  run() {
    this.timer = setInterval(() => {
      this.draw()
    }, 30)
  }

  stop() {
    clearInterval(this.timer)
  }
}

class Raining extends Component {
  controller = null

  componentDidMount() {
    let canvas = this.refs.canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    this.controller = new Controller(this.refs.canvas)
    this.controller.init()
    setTimeout(() => {
      this.controller.run()
    }, 1000);
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