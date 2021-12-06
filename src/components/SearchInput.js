import PropTypes from "prop-types"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserApi } from '../redux/actions/actions.js';
import './SearchInput.css'
import { FaSearch } from 'react-icons/fa';

class SearchInput extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
    this.handleSearchUser = this.handleSearchUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    const {requestUserApi} = this.props
    requestUserApi('octocat')
  }

  handleSearchUser(event){
    event.preventDefault()
    const {requestUserApi} = this.props
    const {inputValue} = this.state

    this.setState({
      inputValue: ''
    })
    
    requestUserApi(inputValue)
  }

  handleChange({target: {name, value}}){
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { inputValue } = this.state
    const { theme } = this.props
    return (
        <form>
          <div id='input-container' className={`input-container-${theme}`}>
            <div className="input-search">
              <label htmlFor="user-name-input">
                <FaSearch />
                <input
                  name="inputValue"
                  type="text"
                  id="user-name-input"
                  value={inputValue}
                  onChange={this.handleChange}
                  placeholder="Digite o username do Github"
                />
              </label>
            </div>
              <button type="submit" onClick={this.handleSearchUser}>Search</button>
          </div>
        </form>
    );
  }
}

SearchInput.propTypes = {
  requestUserApi: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  requestUserApi: (payload) => dispatch(fetchUserApi(payload))
});

const mapStateToProps = (state) => ({
  theme: state.theme.actualTheme,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);