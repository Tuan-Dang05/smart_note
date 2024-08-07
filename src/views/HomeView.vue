<script setup lang="ts">
import { ref } from 'vue';
// import TheWelcome from '../components/TheWelcome.vue'
import CreateNoteVue from '@/components/CreateNote/CreateNote.vue';
import Headers from '@/components/Header/Header.vue';
import FooterVue from '@/components/Footer/FooterVue.vue';
import sloganVue from '@/components/Slogan/sloganVue.vue';
import Header from '@/components/Header/Header.vue';

const isDropdownVisible = ref(false);

const toggleDropdownVisibility = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<template>
  <main>
    <div class="app-header">
      <Headers />
    </div>
    <div class="slogan">
      <sloganVue/>
    </div>
    <div class="header">
      <Headers/>
    </div>
    <div class="createNote">
      <CreateNoteVue/>
    </div>
    <div class="footer">
      <FooterVue/>
    </div>
  </main>
</template>

<style scoped>

</style>
