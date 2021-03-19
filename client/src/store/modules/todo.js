export const todo = {
  namespaced: true,
  state: {
    todoList: [],
    userList: [],
  },
  getters: {
    todoList (state) { return state.todoList } ,
    isCompletedTodoList (getters) { return getters.todoList.filter((todo) => todo.isCompleted === 1)},
    userList (state){ return state.userList },
  },
  mutations: {
    updateTodoList(state, todoList) {
      state.todoList = todoList;
    },
    updateUserList(state, userList) {
      state.userList = userList;
    },
  },
  actions: {
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
  },
}