import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('아이디는 이메일 형식이 아니면 경고 메세지가 출력된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    // console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
    // const idInput = wrapper.find('#username');
    // console.log('input box value::: ', idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);

    // console.log(idInput.html());

    // expect(wrapper.vm.username).toBe('');
    // const instance = new Vue(LoginForm).$mount();
    // console.log(instance.username);
    // expect(instance).toBe('');
    // expect(instance).toBeTruthy();
    // new Vue(LoginForm).$mount;
    // new Vue({
    //   render: h => (App)
    // }).$mount();
  });

  test('ID와 pw가 입력되지 않으면 로그인 버튼이 비활성화된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const buttonText = wrapper.find('button');
    expect(buttonText.element.disabled).toBeTruthy();
  });
});

// import { sum } from './math';

// sum(10, 20);

// describe('math,js', () => {
//   test('10 + 20 = 30', () => {
//     const result = sum(10, 20);
//     expect(result).not.toBe(30);
//   });
// });
