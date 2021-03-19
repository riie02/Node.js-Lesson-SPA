<template>
  <div>
    <my-navi />
    <template>
      <div
        v-for="user in userList"
        :key="user.id"
      >
        <p>id:{{ user.id }}</p>
        <p>username:{{ user.username }}</p>
      </div>
    </template>
  </div>

</template>

<script>
import MyNavi from '@/components/Navi.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.getAllUser();
  },
  components: {
    MyNavi
  },
  methods: {
    ...mapActions('user',{
      getAllUser: 'updateUserList',
    }),
  },
  computed: {
    ...mapGetters('user',[
      'userList',
    ])
  },
}
</script>
