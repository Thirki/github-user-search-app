import React, { Component } from 'react'
import { FaTwitter, FaMapMarkerAlt, FaLink, FaBuilding } from 'react-icons/fa';
import { connect } from 'react-redux';
import './SocialMedia.css'

class SocialMedia extends Component {
  constructor(){
    super()
      this.state = {
        defaultData: 'Not Available',
        linkedinDoDev: 'https://www.linkedin.com/in/henriquegomesdev/'
      }
  }
  render() {
    const {userData, theme} = this.props;
    const {defaultData, linkedinDoDev} = this.state;
    return (
      <div id="social-media" className={`social-media-${theme}`}>
        <p 
          className={userData.location ? 'active' : 'disabled'}>
          <FaMapMarkerAlt/>{userData.location || defaultData}
        </p>
        <a 
          href={userData.twitter_username ? `https://twitter.com/${userData.twitter_username}` : linkedinDoDev}
          target="_blank"
          rel="noreferrer"
        >
          <p 
            className={userData.twitter_username ? 'active' : 'disabled'}
            id="twitter"
            onClick={this.handleClickLink}>
            <FaTwitter/>{userData.twitter_username || defaultData}
          </p>
        </a>
        <a
          href={`${userData.blog || linkedinDoDev} `}
          target="_blank" rel="noreferrer"
        >
          <p 
            className={userData.blog ? 'active' : 'disabled'}
            id="blog"
            onClick={this.handleClickLink}>
            <FaLink/>{userData.blog || defaultData}
          </p>
        </a>
        <a
          href={userData.company ? `https://github.com/${userData.company.replace('@','')}` : linkedinDoDev}
          target="_blank"
          rel="noreferrer"
        >
          <p
            className={userData.company ? 'active' : 'disabled'}
            id="company"
            onClick={this.handleClickLink}>
            <FaBuilding/>{userData.company || defaultData}
          </p>
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.fetchApi.data,
  theme: state.theme.actualTheme,
});

export default connect(mapStateToProps)(SocialMedia)
