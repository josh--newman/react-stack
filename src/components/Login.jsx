import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
  Card,
  CardText,
  RaisedButton
} = mui;

class Login extends React.Component {
  onClick() {
    Actions.login(this.context.router);
  }

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <Card style={{
        'maxWidth': '800px',
        'margin': '30px auto',
        'padding': '50px'
      }}>
        <CardText style={{
          'textAlign': 'center'
        }}>
          Please log in with your Google account
        </CardText>

        <RaisedButton style={{
          display: 'block'
        }} onClick={this.onClick.bind(this)} label="Log in with Google"/>
      </Card>
    );
  }
}

module.exports = Login;
