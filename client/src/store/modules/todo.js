import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const state = () => ({
  todoList: [],
})

const getters = {
  todoList (state) { return state.todoList } ,
  isCompletedTodoList (getters) { return getters.todoList.filter((todo) => todo.isCompleted === 1)},
}

const mutations = {
  updateTodoList(state, todoList) {
    state.todoList = todoList;
  },
}

const actions = {
  async updateTodoList({ commit }) {
    const todoList = await axios
      .get(`${BASE_URL}/todo`)
      .then((res) => res.data);
    commit('updateTodoList', todoList);
  },
  async updateTodo({ dispatch }, todo) {
    await axios.put(`${BASE_URL}/todo/${todo.id}`, todo);
    dispatch('updateTodoList');
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};