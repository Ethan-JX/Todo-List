/*
向local中存储数据的工具模块
 */

export default {
  readTodos (todoType) {
    return JSON.parse(localStorage.getItem(todoType) || '[]')
  },
  saveTodos (todoType, todoList) {
    localStorage.setItem(todoType, JSON.stringify(todoList))
  }
}
