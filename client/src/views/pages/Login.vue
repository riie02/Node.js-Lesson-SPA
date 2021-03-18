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
    ...mapActions([
      'updateLoginUser',
      'updateIsAuthenticated',
    ]),
  },
  computed: {
    ...mapState([
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

