import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Info from './components/Info';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      attr:false,
      data:{
        body:'',
      },
      term:'',
      list:['Brahma','Vishnu','Shiva'],
      status:'DEFAULT'
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
      attr: !this.state.attr,
      status:'DEFAULT'
    })
  }

  updateStatus(status){
     this.setState({status});
  }

  render() {
    //this.toggleState();
    //console.log(this.inputTxt.value);
    return (
      <div className="App">
        <Header logo={logo} />
        <br />
        <p style={{fontSize: (this.state.attr)? 30 : 10}} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        {
          (this.state.attr)?
          <Info 
            term={this.state.term}
            updateStatus={status => this.updateStatus(status)}
          />:
          null
        }
        <br />
        <input 
          type="text" 
          ref={ref => this.inputTxt = ref}
          value={this.state.term} 
          onChange={e => this.setState({term: e.target.value})}
        />
        <br />
        <br />
        <div style={
          {
            width:'30%', 
            border:'2px solid',
            margin:'auto'
          }
        }>
          <ul>
          {
            this.state.list
            .filter(item => item.toLowerCase().includes(this.state.term.toLowerCase()) || (this.state.term === ''))
            .map((item,index,stateList) => <li key={index}>{item}</li>)
          }
          </ul>
        </div>
        <br />
        <br />
        <button onClick={() => this.toggleState()}>CLICK ME</button>
        <br />
        <br />
        {/* {this.state.data.body.length} */}
        { this.state.status }
      </div>
    );
  }
}

export default App;
