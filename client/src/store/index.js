import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { todo, user } from './modules'

const BASE_URL = 'http://localhost:8080/api';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    todo,
    user,
  },
  // state: {
  //   loginUser: {
  //     userName: '',
  //     userId: null,
  //   },
  //   isAuthenticated: false,
  //   todoList: [],
  //   userList: [],
  // },
  // getters: {
  //   loginUser: (state) => state.loginUser,
  //   isAuthenticated: (state) => state.isAuthenticated,
  //   todoList: (state) => state.todoList,
    // isCompletedTodoList: (state, getters) => {
    //   // console.log(state)
    //   // console.log(getters.todoList)
    //   // todoListの中の一つ一つのtodoListのisCompletedがtrueのリストを表示させたい
    //   const result = getters.todoList.filter(todo => {
    //     // console.log({...todo})
    //     return todo.isCompleted === 1
    //   })
    //   return result
    //   console.log(result);
    // }
    // isCompletedTodoList: (getters) => getters.todoList.filter((todo) => todo.isCompleted === 1),
    // addUserList: (state, getters) => {
    //   const foo = getters.userList
    // }
    // userList: (state) => state.userList,
      // console.log(state)
      // console.log(state.userList)
  // },
  // mutations: {
  //   updateLoginUser(state, user) {
  //     state.loginUser = user;
  //   },
  //   resetLoginUser(state) {
  //     state.loginUser = {
  //       userName: '',
  //       userId: null,
  //     };
  //   },
  //   updateIsAuthenticated(state, payload) {
  //     state.isAuthenticated = payload;
  //   },
  //   updateTodoList(state, todoList) {
  //     state.todoList = todoList;
  //   },
  //   updateUserList(state, userList) {
  //     state.userList = userList;
  //   },
  // },
  // actions: {
  //   async updateLoginUser({ commit }, param) {
  //     const res = await axios
  //       .post(`${BASE_URL}/login`, param)
  //       .then((resp) => resp)
  //       .catch((err) => err.response);

  //     if (res.status === 200) {
  //       commit('updateLoginUser', res.data);
  //       commit('updateIsAuthenticated', true);
  //     } else {
  //       commit('resetLoginUser');
  //       commit('updateIsAuthenticated', false);
  //     }
  //   },
  //   async logout({ commit }) {
  //     await axios.post(`${BASE_URL}/logout`);
  //     commit('resetLoginUser');
  //     commit('updateIsAuthenticated', false);
  //   },
  //   async checkAuthenticated({ commit }) {
  //     const res = await axios
  //       .get(`${BASE_URL}/user`)
  //       .then((resp) => resp)
  //       .catch((err) => err.response);

  //     if (res.status === 200) {
  //       commit('updateLoginUser', res.data.user);
  //       commit('updateIsAuthenticated', true);
  //     } else {
  //       commit('resetLoginUser');
  //       commit('updateIsAuthenticated', false);
  //     }
  //   },

  //   async updateTodoList({ commit }) {
  //     const todoList = await axios
  //       .get(`${BASE_URL}/todo`)
  //       .then((res) => res.data);
  //     commit('updateTodoList', todoList);
  //   },
    // async updateTodoList({ commit }) {
    //   const todoList = function() {
    //     return new Promise(function(resolve){
    //       get(`${BASE_URL}/todo`),
    //       then((res) => res.data),
    //       commit('updateTodoList', todoList),
    //       console.log(todoList)
    //       resolve()
    //     })
    //   // todoList();
    //   //   .then()
    //   }
    //   const onFulfilled = () => {
    //     console.log("resolveされたときに呼ばれる");
    //   };
    //   todoList.then(onFulfilled, dat);
    // },
    // updateTodoList(todoList)
    //   .then((data) => {
    //     console.log(data);
    //     return updateTodoList(todoList);
    // })
    // async updateTodoList({ commit }) {
    //   const promise = new Promise((resolve, reject) => {
    //     get(`${BASE_URL}/todo`)
    //     resolve((res) => res.dat, commit('updateTodoList', todoList))
    //   })
    //     // .get(`${BASE_URL}/todo`)
    //     // .then((res) => res.data);
    // },
  //   async updateTodo({ dispatch }, todo) {
  //     await axios.put(`${BASE_URL}/todo/${todo.id}`, todo);
  //     dispatch('updateTodoList');
  //   },
  //   async updateUserList({ commit }) {
  //     const userList = await axios
  //       .get(`${BASE_URL}/user/all`)
  //       .then((res) => res.data);
  //     commit('updateUserList', userList);
  //   },
  // },
});
