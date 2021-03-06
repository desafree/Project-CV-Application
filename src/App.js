import React, {Component} from "react";
import Editable from '../src/components/editable'
import NotEditable from "./components/notEditable";
import "../src/styles/App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      infoDef:{name:'',email:'',number:'',school:'',title:'',date:'',company:'',position:'',period:''},
      infoChang:{},
      number:0,
    }

    this.change = this.change.bind(this)
    this.confirm = this.confirm.bind(this)
    this.confirmNumber = this.confirmNumber.bind(this)
    this.changeNumber = this.changeNumber.bind(this)
  }


  change(e) {
    let name = e.target.id
    let newObj = {}
    newObj[name] = e.target.value
    this.setState({
      infoChang:{...this.state.infoChang,...newObj}
    })
    console.log(this.state)
  }

  confirm(e) {
    e.preventDefault();
    this.setState({
      infoDef:{...this.state.infoDef,...this.state.infoChang},
      infoChang:{}
    })

    this.confirmNumber()

    console.log(this.state)
  }

  confirmNumber() {
    this.setState({
      number:1
    })

    console.log(this.state,'hello')
  }

  changeNumber() {
    this.setState({
      number:0
    })

    console.log(this.state,'ciao')
  }





  render() {
    return(
      <div className='container'>
        {this.state.number===0?<Editable change={this.change} confirm={this.confirm} info={this.state.infoDef}/>:<NotEditable info={this.state.infoDef} changeNumber={this.changeNumber}/>}
      </div>
    )
  }
}

export default App;
