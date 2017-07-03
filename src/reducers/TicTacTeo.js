const initialState = { Board: [[], [], []] };

export default (state = { Board: [[], [], []] }, action) => {
  switch (action.type) {
    case 'ADD_PALYER':
      state = {
        ...state,
        Player1: action.payload[0],
        Player2: action.payload[1],
        ActivePlayer: action.payload[0],
        [action.payload[0]]: 'X',
        [action.payload[1]]: 'O',
      };
      break;
    case 'CHANGE_PALYER':
      const Board = [...state.Board];
      Board[action.payload.row][action.payload.col] = state[state.ActivePlayer];

      const ActivePlayer = state.ActivePlayer === state.Player1 ? state.Player2 : state.Player1;
      state = { ...state, ActivePlayer, Board };

      break;
    case 'RESET_GAME':
      state = { Board: initialState.Board };
      break;
    default:
      break;
  }

  return state;
};
