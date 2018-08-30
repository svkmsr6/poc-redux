import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      attr:true,
      data:{
        body:'',
      },
      term:'',
      list:['Brahma','Vishnu','Shiva']
    }
    this.inputTxt = '';
    //this.toggleState.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => resp.json())
    .then(data => this.setState({data}))
  }

  toggleState(){
    this.setState({
      attr: !this.state.attr
    })
  }

  render() {
    //this.toggleState();
    console.log(this.inputTxt.value);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p style={{fontSize: (this.state.attr)? 30 : 10}} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input 
        type="text" 
        ref={ref => this.inputTxt = ref}
        value={this.state.term} 
        onChange={e => this.setState({term: e.target.value})}
        />
        <ul>
        {
          this.state.list
          .filter(item => item.toLowerCase().includes(this.state.term.toLowerCase()) || (this.state.term === ''))
          .map((item,index,stateList) => <li key={index}>{item}</li>)
        }
        </ul>
        <button onClick={() => this.toggleState()}>CLICK ME</button>
        <br />
        {this.state.data.body.length}
      </div>
    );
  }
}

export default App;
