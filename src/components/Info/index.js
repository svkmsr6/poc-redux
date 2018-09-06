import React, { Component } from 'react';
import './Info.css';

export default class Info extends Component {
  constructor(props){
      super(props);
      this.state = {
          switch:'on'
      };
      console.log('Info Initialization');
  }

  componentWillMount(){
    console.log('Info Will Mount');
  }

  componentDidMount(){
    console.log('Info Did Mount');
  }

  componentWillReceiveProps(nextProps){
    console.log('Info has value of prop term => ',this.props.term);
    console.log('Info has received new value of prop term => ',nextProps.term);
  }

  componentWillUpdate(){
    console.log('Info Will Update');
  }

  shouldComponentUpdate(nextProps, nextStates){
    console.log('Info has current switch state => ',this.state.switch);
    console.log('Info has received new switch state => ',nextStates.switch);
    return true;
  }

  componentDidUpdate(){
    console.log('Info Did Update');
  }

  componentWillUnmount(){
    console.log('Info Will Unmount');
  }

  toggleState(){
    this.setState(state =>({switch:(state.switch === 'off')?'on':'off'}));
    this.props.updateStatus((this.state.switch === 'on')?'ON':'OFF');
  }

  render() {
    console.log('Info Render');
    return (
      <div className="info-container">
        <p>Search Term - {this.props.term}</p>
        <button 
        style={
            {
                color:'white',
                backgroundColor:(this.state.switch === 'on')?'green':'red'
            }
        } 
        onClick={() => this.toggleState()}
        >
        TOGGLE
        </button>.
      </div>
    )
  }
}
