/*
包含n个用于直接更新状态的方法的对象模块
 */
import {ADD_TODO, DELETE_ALL_TODO, DELETE_FINISHED_TODO, DELETE_TODO, OPEN_ADD_DIALOG} from './mutation-types'

export default {

  [ADD_TODO] (state) {
    // 封装一个todo对象
    let todo = {
      content: state.addTodoDialog.todoContent,
      finish: false
    }
    state.allTodo[state.addTodoDialog.addTodoType].todoList.unshift(todo)
    state.addTodoDialog.todoContent = ''
    state.addTodoDialog.visible = false
  },

  [DELETE_TODO] (state, {todoType, index}) {
    state.allTodo[todoType].todoList.splice(index, 1)
  },

  [OPEN_ADD_DIALOG] (state, {todoType}) {
    state.addTodoDialog.addTodoType = todoType
    state.addTodoDialog.visible = true
  },

  [DELETE_FINISHED_TODO] (state) {
    state.allTodo.task1.todoList = state.allTodo.task1.todoList.filter(todo => !todo.finish)
    state.allTodo.task2.todoList = state.allTodo.task2.todoList.filter(todo => !todo.finish)
    state.allTodo.task3.todoList = state.allTodo.task3.todoList.filter(todo => !todo.finish)
    state.allTodo.task4.todoList = state.allTodo.task4.todoList.filter(todo => !todo.finish)
  },

  [DELETE_ALL_TODO] (state) {
    state.allTodo.task1.todoList = []
    state.allTodo.task2.todoList = []
    state.allTodo.task3.todoList = []
    state.allTodo.task4.todoList = []
  },

}
