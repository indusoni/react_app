export const AddPlayers = userName => ({
  type: 'ADD_PALYER',
  payload: userName,
});
export const ChangePlayer = CellAddr => ({
  type: 'CHANGE_PALYER',
  payload: CellAddr,
});

export const ResetGame = () => ({
  type: 'RESET_GAME',
  payload: {},
});
