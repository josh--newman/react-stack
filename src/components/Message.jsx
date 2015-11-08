import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic} />}
        primaryText={this.props.message.message}/>
    );
  }
}

export default Message;
