import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Cell from './Cell';
import s from './style';
import { AddPlayers, ResetGame } from '../../actions/TicTacTeo';

class TicTacToe extends PureComponent {
  constructor(props) {
    super(props);
    this.AddPlayer = this.AddPlayer.bind(this);

    this.tictacteoCell = [];
  }
  AddPlayer(e) {
    this._input.selectedOptions.length === 2
      ? this.props.AddPlayers([this._input.selectedOptions[0].value, this._input.selectedOptions[1].value])
      : alert('select two players');
    this._input.selectedOptions.length === 2 && (e.target.disabled = true);
  }

  render() {
    return (
      <div>
        {this.props.UserSettings
          ? <div>
              <h3>Select Any two players</h3>
              <select name="player[]" ref={node => (this._input = node)} multiple>
                {Object.keys(this.props.UserSettings).map((value, index) =>
                  <option key={value}>
                    {value}
                  </option>,
                )}
              </select>
              <button type="button" onClick={this.AddPlayer}>
                Done
              </button>
            </div>
          : <h4>
              No User Added .Click on <Link to={'/UserSettings'}>Add User </Link>
            </h4>}
        {this.props.TicTacTeo.ActivePlayer &&
          <div>
            <h3>
              Player : {this.props.TicTacTeo.ActivePlayer}{' '}
            </h3>
            <s.TicTacToeContainer>
              {[0, 1, 2].map(value =>
                <s.TicTacToeCellContainer key={value}>
                  <Cell row={value} col="0" />
                  <Cell row={value} col="1" />
                  <Cell row={value} col="2" />
                </s.TicTacToeCellContainer>,
              )}
            </s.TicTacToeContainer>
            <input type="button" value="Reset" onClick={this.props.ResetGame} />
          </div>}
      </div>
    );
  }
}
function mapAction(dispatch) {
  return bindActionCreators({ AddPlayers, ResetGame }, dispatch);
}
export default connect(state => state, mapAction)(TicTacToe);
