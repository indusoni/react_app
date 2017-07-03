import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './style';

const Lobby = props =>
  <div>
    {props.UserSettings &&
      Object.keys(props.UserSettings).map((value, index) =>
        <s.usersContainer key= {props.UserSettings[value].name}>
          <s.userData>
            {index + 1}
          </s.userData>
          <s.userData>
            {props.UserSettings[value].name}
          </s.userData>
          <s.userData>
            {props.UserSettings[value].tagline}
          </s.userData>
          <s.userData>
            {props.UserSettings[value].location}
          </s.userData>
        </s.usersContainer>,
      )}
    <h4>
      {' '}<Link to={'/UserSettings'}>Add User </Link>
    </h4>
  </div>;
Lobby.propTypes = {
  UserSettings: PropTypes.object
};
export default connect(state => state)(Lobby);
