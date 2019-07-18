/*
包含n个用于间接更新状态的方法的对象模块
 */
import {ADD_TODO, DELETE_ALL_TODO, DELETE_FINISHED_TODO, DELETE_TODO, OPEN_ADD_DIALOG} from './mutation-types'

export default {

  addTodo({commit}) {
    commit(ADD_TODO)
  },

  deleteTodo({commit}, {todoType, index}) {
    // 提交一个comutation请求
    commit(DELETE_TODO, {todoType, index}) // 传递给mutation的是一个包含数据的对象
  },

  openAddDialog({commit}, todoType) {
    commit(OPEN_ADD_DIALOG, {todoType})
  },

  deleteFinishedTodo({commit}) {
    commit(DELETE_FINISHED_TODO)
  },

  deleteAllTodo({commit}) {
    commit(DELETE_ALL_TODO)
  },

}
