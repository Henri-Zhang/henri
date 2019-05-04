import axios from "axios";

export default class Visitors {
  static addVisitor = info => {
    info.date = new Date().toLocaleString();
    axios
      .post("https://vps.henri.ren:5000/visitors", info)
      .then(response => {
        // console.log(response.data)
      })
      .catch(error => {
        // console.log(error)
      });
  };
}
