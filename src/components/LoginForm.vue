<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <!-- v-bind: 는 : 으로 생략할수있다 -->
    <button :disabled="!isUserNameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        //   const response = await loginUser(userData);
        //   console.log(response);
        const { data } = await loginUser(userData);
        console.log(data);
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님 환영합니다`;
      } catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.intForm();
      }
    },
    intForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
