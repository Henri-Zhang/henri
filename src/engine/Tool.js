export default class Tool {
  static getRandomColor() {
    const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)]
    }
    return color
  }
}