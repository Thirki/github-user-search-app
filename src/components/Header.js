import React, { Component } from 'react';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import { connect } from 'react-redux';
import { switchTheme } from '../redux/actions/actions'
import './Header.css'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      theme: 'Light'
    }
    this.switchTheme = this.switchTheme.bind(this);
  }

  componentDidMount(){
    const { switchTheme } = this.props
    switchTheme('Light')
    const body = document.body;
    body.style.backgroundColor = "#F6F8FF"
  }

  componentDidUpdate(prevState){
    const { switchTheme } = this.props
    const {theme} = this.state
    if(prevState.theme !== theme){
      switchTheme(theme)
      const color = theme === 'Light' ? '#F6F8FF' : '#141d2f';
      const body = document.body;
      body.style.backgroundColor = color;
    }
  }

  switchTheme(event){
    event.preventDefault()
    const { theme } = this.state
    const actualTheme = theme === 'Light' ? 'Dark' : 'Light';
    this.setState({
      theme: actualTheme,
    })
  }

  render() {
    const { theme } = this.state
    return (
      <header className={theme}>
        <span>devfinder</span>
        <button type="submit" onClick={this.switchTheme} id="switch">
          {theme === 'Light' ? 'Dark' : 'Light'}
          {theme === 'Light' ? <FaRegSun/> : <FaRegMoon/>}
        </button>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  switchTheme: (payload) => dispatch(switchTheme(payload))
});


export default connect(null, mapDispatchToProps)(Header);