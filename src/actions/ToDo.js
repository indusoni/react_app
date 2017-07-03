export const addToDo = (taskData) => {
  
    return {
        type: 'TASK_ADD',
        payload: taskData
    }
};
export const markComplete = (taskData) => {
 
    return {
        type: 'TASK_COMPLETE',
        payload: taskData
    }
};
export const markInComplete = (taskData) => {
  
    return {
        type: 'TASK_INCOMPLETE',
        payload: taskData
    }
};
export const removeTask = (taskData) => {
  
    return {
        type: 'TASK_REMOVE',
        payload: taskData
    }
};
