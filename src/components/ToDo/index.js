import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../actions/ToDo';
import { bindActionCreators } from 'redux';
import ListItems from './ListItems';
import s from './style';

class ToDo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addToDo(event) {
    if (event.keyCode === 13) {
      this.props.addToDo({ user: this.state.userSelected, task: event.target.value });
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.props.UserSettings &&
          <div>
            <select
              onChange={e => {
                this.setState({ userSelected: e.target.value });
              }}
            >
              <option>---select--</option>
              {Object.keys(this.props.UserSettings).map((value, index) =>
                <option key={value}>
                  {value}
                </option>,
              )}
            </select>
            {this.state.userSelected &&
              <div>
                <h4>
                  {this.state.userSelected} To Do List
                </h4>
                <input type="text" name="myInput" placeholder="Title..." onKeyUp={event => this.addToDo(event)} />
              </div>}
            <s.ListContainer>
              <div>
                <h4>
                  {this.state.userSelected} New Task{' '}
                </h4>
                <ListItems source="newTask" user={this.state.userSelected} />
              </div>
              <div>
                <h4>
                  {this.state.userSelected} Complete Task{' '}
                </h4>
                <ListItems source="oldTask" user={this.state.userSelected} />
              </div>
            </s.ListContainer>
          </div>}
      </div>
    );
  }
}
function mapAction(dispatch) {
  return bindActionCreators({ addToDo }, dispatch);
}
export default connect(state => state, mapAction)(ToDo);
