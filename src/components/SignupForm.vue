<template>
  <!-- <form v-on:submit="submitForm"> v-on 은 @ 와  같다 -->
  <form @submit="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      :disabled="!isUserNameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',

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
      console.log('폼 제출');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.username);
      // const response = await registerUser(userData);
      //console.log(response.data);
      this.logMessage = `${data.username} 님이 가입되었습니다`;
      this.intForm();
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
