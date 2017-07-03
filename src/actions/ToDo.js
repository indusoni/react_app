export const addToDo = taskData => ({
  type: 'TASK_ADD',
  payload: taskData,
});
export const markComplete = taskData => ({
  type: 'TASK_COMPLETE',
  payload: taskData,
});
export const markInComplete = taskData => ({
  type: 'TASK_INCOMPLETE',
  payload: taskData,
});
export const removeTask = taskData => ({
  type: 'TASK_REMOVE',
  payload: taskData,
});
