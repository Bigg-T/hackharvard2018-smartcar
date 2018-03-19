/**
 * 
 */
import React, {Component} from 'react';
import {Message} from 'semantic-ui-react';

class Error extends Component {
  render() {
    return (
        <div>
          <Message negative>
            <Message.Header>
              {this.props.error_code}
            </Message.Header>
            <p>{this.props.msg}</p>
          </Message>
        </div>
    );
  }
}

export default Error;
