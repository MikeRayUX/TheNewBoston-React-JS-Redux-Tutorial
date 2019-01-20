import React, { Component } from "react";
// this is a container which means it connects to the redux store and can access redux state that can then be passed into the container as props
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// needs to be connected to the container
import { selectUser } from "../actions";

class UserList extends Component {
  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.first} {user.last}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.createListItems()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// hooking up selectUser action creator through props
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectUser: selectUser
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  // hooks up selectUser action creator to container
  matchDispatchToProps
)(UserList);
