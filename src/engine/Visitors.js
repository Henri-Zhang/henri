import axios from 'axios'

export default class Visitors {
  static addVisitor = info => {
    info.date = new Date().toLocaleString()
    axios.post('http://vps.henri.ren:8080/add-visitor', info).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
}