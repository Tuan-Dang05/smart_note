<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import NavBar from '../Navigation/NavVue.vue';
import './account.scss';

const store = useStore();

const imageUrl = ref('https://via.placeholder.com/200'); // Đường dẫn mặc định đến ảnh
const name = ref(''); // Tên mặc định

const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const handleChange = () => {
    store.dispatch('updateImageUrl', imageUrl.value);
    store.dispatch('updateName', name.value);
};
</script>

<template>
    <main>
        <!-- <NavBar /> -->
        <div id="app_acc" style="position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);">
            <div class="container account">
                <h1>Account</h1>
                <div class="profile_acc">
                    <img :src="imageUrl" alt="Profile Image" class="profile-image">
                    <input type="file" @change="onImageChange" class="file-input">
                </div>
                <div class="name-section">
                    <h2>{{ name }}</h2>
                    <input type="text" v-model="name" placeholder="Nhập tên của bạn" class="name-input">
                </div>
                <button type="button" class="btn btn-success" @click="handleChange">Change</button>
            </div>
        </div>
    </main>
</template>
