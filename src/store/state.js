/*
状态对象模块
 */
import storageUtil from '../utils/storageUtil'

export default {
  allTodo: {
    task1: {
      title: '很重要-很紧急',
      cardHeaderBackground: '#FFBEAA',
      cardContainerBackground: '#ffede7',
      hoverBackground: '#ffdcd0',
      todoList: storageUtil.readTodos('很重要-很紧急')
    },
    task2: {
      title: '重要-不紧急',
      cardHeaderBackground: '#FFD278',
      cardContainerBackground: '#ffefcb',
      hoverBackground: '#fbe2ab',
      todoList: storageUtil.readTodos('重要-不紧急')
    },
    task3: {
      title: '不重要-紧急',
      cardHeaderBackground: '#63d8ff',
      cardContainerBackground: '#d6f4fe',
      hoverBackground: '#afebff',
      todoList: storageUtil.readTodos('不重要-紧急')
    },
    task4: {
      title: '不重要-不紧急',
      cardHeaderBackground: '#bdff7c',
      cardContainerBackground: '#eeffdd',
      hoverBackground: '#d3fdaa',
      todoList: storageUtil.readTodos('不重要-不紧急')
    },
  },
  addTodoDialog: {
    visible: false,
    addTodoType: 'task1',
    todoContent: ''
  }
}
