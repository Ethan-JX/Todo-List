<template>
  <el-dialog title="新建Todo" width="360px" :visible.sync="addTodoDialog.visible">
    <el-form label-position="top" label-width="80px" :model="addTodoDialog">
      <el-form-item label="Todo 类型">
        <el-select v-model="addTodoDialog.addTodoType" class="add_todo_select">
          <el-option label="很重要-很紧急" value="task1"></el-option>
          <el-option label="重要-不紧急" value="task2"></el-option>
          <el-option label="不重要-紧急" value="task3"></el-option>
          <el-option label="不重要-不紧急" value="task4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Todo 内容">
        <el-input v-model="addTodoDialog.todoContent"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="addTodoDialog.visible = false">取消</el-button>
      <el-button type="primary" @click="addTodo">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  import {Message} from 'element-ui'

  export default {
    name: 'AddTodoDialog',
    computed: {
      ...mapState(['addTodoDialog'])
    },
    methods: {
      addTodo() {
        // 得到输入的数据
        const inputTodo = this.addTodoDialog.todoContent.trim()
        // 检查合法性
        if (!inputTodo) {
          Message.error({
            showClose: true,
            message: 'todo 内容不能为空!'
          })
          return
        }
        this.$store.dispatch('addTodo')
      }
    }
  }
</script>

<style scoped>
  .add_todo_select {
    display: block;
  }
</style>
