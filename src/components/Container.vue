<template>
  <el-row>
    <el-col :lg="{span: 16, offset: 4}" :xl="{span: 16, offset: 4}">
      <el-row>
        <el-container>
          <el-header>
            <Header/>
          </el-header>
          <el-main>
            <div class="controlButtonContainer">
              <el-badge :value="finishCount" class="item" :hidden="finishCount==0">
                <el-button type="warning" icon="el-icon-delete" plain :disabled="finishCount==0"
                           @click="deleteFinishedTodo">删除已完成
                </el-button>
              </el-badge>
              <el-badge :value="allCount" class="item" :hidden="allCount==0">
                <el-button type="danger" icon="el-icon-delete" plain :disabled="allCount==0" @click="deleteAllTodo">
                  全部删除
                </el-button>
              </el-badge>
            </div>
            <todo-card :todoType="'task1'"/>
            <todo-card :todoType="'task2'"/>
            <todo-card :todoType="'task3'"/>
            <todo-card :todoType="'task4'"/>
            <AddTodoDialog/>
          </el-main>
        </el-container>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Message, MessageBox} from 'element-ui'

  import Header from './Header'
  import TodoCard from './TodoCard'
  import AddTodoDialog from './AddTodoDialog'

  export default {
    name: 'Container',
    components: {TodoCard, Header, AddTodoDialog},
    computed: {
      ...mapGetters(['allCount', 'finishCount']),
    },
    methods: {
      deleteFinishedTodo () {
        MessageBox.confirm('确定删除【已完成】的todo?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('deleteFinishedTodo')
          Message.success({
            showClose: true,
            message: '删除成功!'
          })
        }).catch(() => {
          Message.info({
            showClose: true,
            message: '已取消删除'
          })
        })
      },
      deleteAllTodo () {
        MessageBox.confirm('确定删除【所有】的todo?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('deleteAllTodo')
          Message.success({
            showClose: true,
            message: '删除成功!'
          })
        }).catch(() => {
          Message.info({
            showClose: true,
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
