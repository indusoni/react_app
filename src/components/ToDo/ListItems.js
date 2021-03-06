import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/ToDo';

class ListItems extends PureComponent {
  markComplete(event, task) {
    if (event.target.checked) {
      this.props.markComplete({ user: this.props.user, task });
    } else {
      this.props.markInComplete({ user: this.props.user, task });
    }
  }
  removeTask(event, task) {
    this.props.removeTask({ user: this.props.user, task });
  }
  render() {
    return (
      <div>
        {this.props.user &&
          this.props.ToDo[this.props.user] &&
          <ul>
            {Object.keys(this.props.ToDo[this.props.user]).map(taskValue =>
              <li key={taskValue}>
                {this.props.source === 'oldTask' &&
                  this.props.ToDo[this.props.user][taskValue] === '1' &&
                  <div>
                    {taskValue}
                  </div>}
                {this.props.source === 'newTask' &&
                  <div>
                    {taskValue}
                    <input
                      type="checkbox"
                      onChange={event => this.markComplete(event, taskValue)}
                      checked={this.props.ToDo[this.props.user][taskValue] === '1'}
                    />{' '}
                    <input type="button" name="remove" value="X" onClick={event => this.removeTask(event, taskValue)} />{' '}
                  </div>}
              </li>,
            )}
          </ul>}
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions }, dispatch);
}
export default connect(state => state, matchDispatchToProps)(ListItems);
