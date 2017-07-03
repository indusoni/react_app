import { combineReducers } from 'redux';
import ToDo from './ToDo';
import TicTacTeo from './TicTacTeo';
import UserSettings from './UserSettings';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  UserSettings,
  TicTacTeo,
  ToDo,
});

export default allReducers;
