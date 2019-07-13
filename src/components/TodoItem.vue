<template>
  <div class="item" :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <el-checkbox v-model="todo.finish" style="display: block;padding: 12px 20px;">
      <del v-if="todo.finish">{{ todo.content }}</del>
      <span v-if="!todo.finish">{{ todo.content }}</span>
    </el-checkbox>
    <div class="deleteContainer">
      <el-popover placement="top" width="160" v-model="visible">
        <p>确定删除任务【<b>{{todo.content}}</b>】吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="deleteTodo">确定</el-button>
        </div>
        <el-button slot="reference" v-show="isShow" type="danger" icon="el-icon-delete" circle size="mini"/>
      </el-popover>
    </div>
    <div class="clear"/>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {// 指定属性名和属性值的类型
      todo: Object,
      index: Number,
      todoType: String
    },

    data () {
      return {
        visible: false,
        isShow: false,
        bgColor: 'rgba(0,0,0,0)'
      }
    },

    methods: {
      deleteTodo () {
        this.visible = false
        this.$store.dispatch('deleteTodo', this.todoType, this.index)
      },
      handleEnter (isEnter) {
        if (isEnter) { // 进入
          this.isShow = true
          this.bgColor = this.$store.state.allTodo[this.todoType].hoverBackground
        } else { // 离开
          this.isShow = false
          this.bgColor = 'rgba(0,0,0,0)'
        }
      },
    }
  }
</script>

<style scoped>
  .item {
    font-size: 14px;
    border-bottom: 1px dashed #d9d9d9;
    position: relative;
  }

  .item:last-child {
    border: none;
  }

  .item .deleteContainer {
    position: absolute;
    right: 12px;
    top: 8px;
  }

</style>
