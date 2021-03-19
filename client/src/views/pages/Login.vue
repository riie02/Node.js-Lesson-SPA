<template>
  <my-login-form
    @updateLoginUser="updateLoginUser"
  />
</template>

<script>
import MyLoginForm from '@/components/LoginForm.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    MyLoginForm,
  },
  methods: {
    ...mapActions('user', [
      'updateLoginUser',
      'updateIsAuthenticated',
    ]),
  },
  computed: {
    ...mapState('user',[
      'loginUser',
      'isAuthenticated',
    ]),
  },
  watch: {
    isAuthenticated() {
      if (this.isAuthenticated) {
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>

