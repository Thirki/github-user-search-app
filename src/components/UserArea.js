import PropTypes from "prop-types"
import React, { Component } from 'react'
import { connect } from 'react-redux';
import getYear from '../services/getYear'
import SocialMedia from "./SocialMedia";
import './UserArea.css'

class UserArea extends Component {
  constructor(){
    super()
      this.state = {
        defaultData: 'Not Available',
      }
  }

  render() {
    const { userData, fetching, theme } = this.props
    const { defaultData } = this.state
    let joinedData = {
      day: '',
      month: '',
      year: '',
    };
    if(userData && userData.message !== "Not Found"){
      joinedData = getYear(userData.created_at)
    }
    return (
      <div id="user-area" className={`user-area-${theme}`}>
        {(userData && !fetching && userData.message !== "Not Found")&& (
          <>
            <div className="profile">
              <img src={userData.avatar_url} alt="profile"></img>
            </div>
            <div className="data">
              <div className="name-area">
                <h1 className={`name-${theme}`}>{userData.name || defaultData}</h1>
                <span
                  className={`joined joined-${theme}`}
                >{(`Joined ${joinedData.day} ${joinedData.month} ${joinedData.year}`) || defaultData}</span>
              </div>
              <span className="login">{(`@${userData.login}`) || defaultData}</span>
              <p className={`bio bio-${theme}`}>{userData.bio || defaultData}</p>
              <table className={`metrics metrics-${theme}`}>
                <thead>
                  <tr>
                    <th>Repos</th>
                    <th>Followers</th>
                    <th>Following</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userData.public_repos || 0}</td>
                    <td>{userData.followers || 0}</td>
                    <td>{userData.following || 0}</td>
                  </tr>
                </tbody>
              </table>
              <SocialMedia />
            </div>
          </>
        )}
        {fetching&& <h1>Loading...</h1>}
        {userData.message === "Not Found"&& <h1>Dev não encontrado 😢</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.fetchApi.data,
  fetching: state.fetchApi.isFetching,
  theme: state.theme.actualTheme,
});

UserArea.propTypes = {
  fetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    bio: PropTypes.string,
    blog: PropTypes.string,
    company: PropTypes.string,
    created_at: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    location: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    public_repos: PropTypes.number,
    twitter_username: PropTypes.string
  }).isRequired
}

export default connect(mapStateToProps)(UserArea);