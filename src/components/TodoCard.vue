<template>
  <el-col :lg="12" :xl="12" :md="12">
    <div class="cardContainer" :style="{background: allTodo[todoType].cardContainerBackground}">
      <div class="card-header" :style="{background: allTodo[todoType].cardHeaderBackground}">
        <span>{{ allTodo[todoType].title }}</span>
        <el-button style="float: right; padding: 5px" icon="el-icon-plus" circle @click="openAddDialog"></el-button>
      </div>
      <div class="cardContent">
        <todoItem v-for="(todo, index) in allTodo[todoType].todoList" :key="index" :todo="todo"
                  :index="index" :todoType="todoType"></todoItem>
      </div>
    </div>
  </el-col>
</template>

<script>
  import TodoItem from './TodoItem'
  import {mapState} from 'vuex'
  import storageUtil from '../utils/storageUtil'

  export default {
    name: 'TodoCard',
    components: {TodoItem},
    data () {
      return {
        task: this.$store.state.allTodo[this.todoType]
      }
    },
    props: {// 指定属性名和属性值的类型
      todoType: String
    },
    computed: {
      ...mapState(['allTodo'])
    },
    watch: {
      task: {
        deep: true,
        handler (newValue, oldValue) {
          storageUtil.saveTodos(newValue.title, newValue.todoList)
        }
      }
    },
    methods: {
      openAddDialog () {
        this.$store.dispatch('openAddDialog', this.todoType)
      }
    }
  }
</script>

<style scoped>

  .cardContainer {
    margin: 10px;
  }

  .cardContainer .card-header {
    padding: 20px 20px;
    border-bottom: 1px solid #c9d3dc;
  }

  .cardContainer .card-header span {
    font-size: 16px;
    font-weight: 800;
  }

  .cardContainer .cardContent {
    height: 350px;
    padding: 0;
    overflow-x: hidden;
  }
</style>
