export default class Visitors {
  static addVisitor = info => {
    info.date = new Date().toLocaleString()
  }
}