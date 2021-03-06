import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import t from 'tcomb-form';
import { addUser } from '../../actions/UserSettings';

class UserSettings extends PureComponent {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    this.state = { location: [] };
    this.FormSchema = t.struct({
      name: t.String,
      tagline: t.String,
      location: t.enums({}),
    });
  }
  submitData(e) {
    e.preventDefault();
    const formValue = this.refs.form.getValue();
    if (formValue) {
      console.log(formValue);
      this.props.addUser(formValue);
    } else {
      console.log('Form has errors', this.refs.form.validate());
    }
  }
  componentDidMount() {
    this.getStates();
  }

  getStates() {
    axios.get('https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=i6axz9cc8h79jy11n3a9cvx7').then(response => {
      const locationList = {};
      response.data.Data.forEach(locationData => {
        locationList[locationData.Name] = locationData.Name;
      });
      this.FormSchema = t.struct({
        name: t.String,
        tagline: t.String,
        location: t.enums({ ...locationList }),
      });
      this.setState({ location: response.data.Data });
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
          <t.form.Form ref="form" type={this.FormSchema} />
          <div>
            <button type="submit" onClick={this.submitData}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
function mapAction(dispatch) {
  return bindActionCreators({ addUser }, dispatch);
}
export default connect(state => state, mapAction)(UserSettings);
