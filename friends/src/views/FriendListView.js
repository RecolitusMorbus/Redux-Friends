import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import { FriendList } from '../components';

class FriendListView extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  };

  render() {
    if (this.props.fetching) {
      return <div>Loadin' them plebians...</div>
    } if (this.props.error) {
      return <div>{this.props.error}</div>
    } else {
      return (
        <div>
          <FriendList friends={this.props.friends} />
        </div>
      );
    }
  }
};

const mapStateToProps = ({ friendsReducer }) => ({
  friends: friendsReducer.friends,
  fetching: friendsReducer.fetching,
  error: friendsReducer.error
});

export default connect(mapStateToProps, { fetchFriends })(FriendListView);