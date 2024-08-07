<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import './account.scss';
import UserAcc from '@/assets/img/success.gif';
import Password from '@/assets/img/password.gif';
import history from '@/assets/img/history.gif';
import Bin from '@/assets/img/bin.gif';
import Delete from '@/assets/img/delete.gif';
import LogOut from '@/assets/img/logout.gif';

const isSidebarActive = ref(false);
const store = useStore();
const userImage = computed(() => store.getters.imageUrl);
const userName = computed(() => store.getters.name);

const toggleSidebar = () => {
    isSidebarActive.value = !isSidebarActive.value;
};
</script>

<template>
    <main>
        <div :class="['sidebar_nav nav-pills', isSidebarActive ? '' : 'active']" style="margin-top: 0px;">
            <div class="logo_content">
                <div class="logo">
                    <div class="" style="margin-left: -15px;">
                        <img :src="userImage" alt="user_image" 
                        style="object-fit: cover;
                        display: block;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        border: 1px solid black;
                        ">
                    </div>
                    <div class="logo_name">{{ userName }}</div>
                </div>
                <i :class="isSidebarActive ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'" id="btn"
                    style="cursor: pointer;" @click="toggleSidebar">
                </i>
            </div>
            <ul class="nav">
                <li class="d-flex">
                    <router-link to="/user/account" style="text-decoration: none; color: black;">
                        <span class="d-flex">
                            <!-- <v-img :src="UserAcc" alt="user_acc" class="me-5" style="width: 40px; margin-left: -5px;"></v-img> -->
                            <i  class="fa-regular fa-user me-4" style="width: 40px; margin-left: -10px;"></i>
                            <span class="link_name fs-6" style="cursor: pointer;">Account</span>
                        </span>
                    </router-link>
                </li>
                <li class="d-flex">
                    <router-link to="/user/password" style="text-decoration: none; color: black;">
                        <span class="d-flex">
                            <!-- <v-img :src="Password" alt="user_acc" class="me-5 mt-1" style="width: 40px; margin-left: -5px;"></v-img> -->
                            <i class="fa-solid fa-lock me-4" style="width: 40px; margin-left: -10px;"></i>
                            <span class="link_name fs-6">Password</span>
                        </span>
                    </router-link>
                </li>
                <li class="d-flex">
                    <router-link to="/user/history" style="text-decoration: none; color: black;">
                        <span class="d-flex">
                            <i class="fa-solid fa-book me-4" style="width: 40px; margin-left: -10px;"></i>   
                                                     <span class="link_name fs-6">Login history</span>
                        </span>
                    </router-link>
                </li>
                <li class="d-flex">
                    <router-link to="/user/recycal" style="text-decoration: none; color: black;">
                        <span class="d-flex">
                            <i class="fa-solid fa-trash-can me-4" style="width: 40px; margin-left: -10px;"></i>
                            <span class="link_name fs-6">Recycal bin</span>
                        </span>
                    </router-link>
                </li>
                <li class="d-flex">

                    <i class="fa-solid fa-user-xmark me-4" style="width: 40px; margin-left: -10px;"></i>
                                        <span class="link_name fs-6 text-danger">Delete account</span>
                </li>
                <li class="d-flex position-absolute bottom-0 mb-5">
                    <span class="d-flex">
                        <v-img :src="LogOut" alt="user_acc" class="me-5" style="width: 40px; margin-left: -5px;"></v-img>
                        <span class="link_name fs-5">Log out</span>
                    </span>
                </li>
            </ul>
        </div>
        <!-- <h1 class="text-center" style="margin-top: 100px;">sda</h1> -->
    </main>
</template>
