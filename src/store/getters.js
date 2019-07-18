/*
包含n个基于state的getter计算属性方法的对象模块
 */
export default {

  // 总数量
  allCount(state) {
    return state.allTodo.task1.todoList.length
      + state.allTodo.task2.todoList.length
      + state.allTodo.task3.todoList.length
      + state.allTodo.task4.todoList.length
  },

  // 完成的数量
  finishCount(state) {
    return state.allTodo.task1.todoList.filter(todo => todo.finish).length
      + state.allTodo.task2.todoList.filter(todo => todo.finish).length
      + state.allTodo.task3.todoList.filter(todo => todo.finish).length
      + state.allTodo.task4.todoList.filter(todo => todo.finish).length
  }
}
