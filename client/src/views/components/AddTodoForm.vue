<template>
  <form class="register" @submit.prevent >
    <div class="register-input">
      <p class="register-input-title">タイトル</p>
      <input
        type="text"
        name="title"
        autocomplete="off"
        placeholder="Todoのタイトルを入力してね。"
        :value="form.title"
        @input="form.title = $event.target.value"

        >
    </div>
    <div class="register-input">
      <p class="register-input-title">内容</p>
      <textarea
        name="content"
        rows="3"
        placeholder="Todoの内容を入力してね。"
        :value="form.content"
        @input="form.content = $event.target.value"
        ></textarea>
    </div>
    <div class="register-submit">
      <button
        type="button"
        class="register-submit-button"
        @click="addCompleted"
      >
      追加する
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        title: '',
        content: ''
      },
    }
  },
  methods: {
    async addCompleted() {
      console.log({...this.form})
      const todo = await axios.post('/api/todo', {
        title: this.form.title,
        content: this.form.content,
      });
      console.log(todo)
      this.getTodoList()
      this.form.title = ""
      this.form.content = ""

    },
    ...mapActions({
      getTodoList: 'updateTodoList',
    }),
  }
}
</script>


<style lang="scss" scoped>
.register {

  &-input {
    &-title {
      font-weight: bold;
      font-size: 14px;
      text-align: left;
      margin: initial;
    }

    & input,
    & textarea {
      padding: 10px;
      width: 100%;
      font-size: 14px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      margin-top: 5px;
    }

    & + & {
      margin-top: 10px;
    }
  }

  &-submit {
    margin-top: 10px;

    &-button {
      padding: 10px 25px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 8px;
      border: solid 2px #2bff00;
      background-color: #fff;
      color: #2bff00;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
