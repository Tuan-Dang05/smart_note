<script setup>
import Profile_user from '../assets/img/profile.gif';
import HeartRed from '../assets/img/heart-red.gif';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RouterLink } from 'vue-router';

const store = useStore();
const userImage = computed(() => store.getters.imageUrl);

// Track the heart state
const isHeartRed = ref(false);

// Toggle heart state on click
const toggleHeart = () => {
  isHeartRed.value = !isHeartRed.value;
};
</script>

<template>
  <main>
    <RouterLink to="/user/account">
      <v-img 
        :src="userImage" 
        alt="user_image" 
        style="object-fit: cover;
               display: block;
               float: right;
               margin-top: 0px;
               margin-right: 90px;
               border-radius: 50%;
               width: 40px;
               height: 40px;
               border: 1px solid black;"
      ></v-img>
    </RouterLink>
    <i 
      :class="['fa-heart', isHeartRed ? 'fa-solid fa-heart heart-red' : 'fa-regular fa-heart heart']" 
      class="fs-3 mt-2" 
      @click="toggleHeart"
    ></i>
  </main>
</template>

<style scoped>
.user {
  width: 50px;
  float: right;
  margin-right: 80px;
  margin-top: 2px;
  cursor: pointer;
}
.heart, .heart-red {
  width: 50px;
  margin-right: 10px;
  margin-top: 2px;
  float: right;
  cursor: pointer;
}
.heart-red {
  color: red;
}
</style>
