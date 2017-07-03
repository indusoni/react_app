import React, { Component } from 'react';
import s from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChangePlayer } from '../../actions/TicTacTeo';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.markCell = this.markCell.bind(this);
  }
  markCell(e) {
    if (!this.props.Board[this.props.row][this.props.col]) {
      this.props.ChangePlayer({ row: this.props.row, col: this.props.col });
    }
  }
  render() {
    return (
      <s.TicTacToeCell onClick={this.markCell}>
        {this.props.Board[this.props.row][this.props.col] && this.props.Board[this.props.row][this.props.col]}
      </s.TicTacToeCell>
    );
  }
}
function mapAction(dispatch) {
  return bindActionCreators({ ChangePlayer }, dispatch);
}
export default connect(state => state.TicTacTeo, mapAction)(Cell);
