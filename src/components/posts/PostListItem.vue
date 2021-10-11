<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
    <toast-popup></toast-popup>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
import ToastPopup from '../common/ToastPopup.vue';

export default {
  components: { ToastPopup },
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      this.commit('showToast', '삭제하시겠습니까?');
      await deletePost(this.postItem._id);
      this.$emit('refresh');
      // if (confirm('You want to delete it?')) {
      //   await deletePost(this.postItem._id);
      //   this.$emit('refresh');
      // }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
