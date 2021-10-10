// 로그인, 회원가입, 회원탈퇴 (사용자계정에 관련된 API)
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
