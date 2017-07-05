export default (state = {}, action) => {
  switch (action.type) {
    case 'TASK_ADD':
      return { ...state, [action.payload.user]: { ...state[action.payload.user], [action.payload.task]: '0' } };
    case 'TASK_COMPLETE':
      return { ...state, [action.payload.user]: { ...state[action.payload.user], [action.payload.task]: '1' } };

      break;
    case 'TASK_INCOMPLETE':
      return { ...state, [action.payload.user]: { ...state[action.payload.user], [action.payload.task]: '0' } };

      break;
    case 'TASK_REMOVE': {
      const revertedList = Object.keys(state[action.payload.user])
        .filter(k => k !== action.payload.task)
        .reduce((acc, k) => ({ ...acc, [k]: state[action.payload.user][k] }), {});
      return { ...state, [action.payload.user]: revertedList };
    }
    default:
      break;
  }

  return state;
};
