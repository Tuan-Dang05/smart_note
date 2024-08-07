<script setup>
// import login from '@/assets/img/login.gif';
import { ref } from 'vue';
import './header.scss';
import logoDark from "@/assets/img/logoDark.png";
import SearchNoteVue from '../SearchNote/SearchNoteVue.vue';
import { RouterLink, useRoute } from "vue-router";
import HomeResponsiveVue from '../Responsive/HomeResponsive.vue';
import LoginView from '@/views/LoginView.vue';
import AccountView from '@/views/AccountView.vue';
import ThemeVue from '../Theme/ThemeVue.vue';
import Pen from '@/assets/img/pen.gif';
import Home from '@/assets/img/home.gif';
import Search from '@/assets/img/search.gif';
import Fire from '@/assets/img/fire.gif';
const isModalVisible = ref(false);

const showModal = () => {
    isModalVisible.value = true;
};

const hideModal = () => {
    isModalVisible.value = false;
};

</script>

<template>
    <main>
        <v-toolbar color="white" height="60" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 9999;">
            <v-row align="start" no-gutters>
                <v-col cols="4">
                    <RouterLink to="/" style="text-decoration: none; color: black;">
                        <div class="logo-container mt-1" style="display: flex; align-items: center;">
                            <v-img class="" style="margin-left: 100px; width: 40px;" max-width="40" :src="logoDark"></v-img>
                            <span class="tittle_smartNote fw-bold" style="margin-left: 20px;">Smart note</span>
                            <span class="line mt-1"></span>
                            <span class="slogan mt-1">
                                <span style="color: black; font-weight: 700;">Take note</span><br />
                                Anytime,<br /> Anywhere
                            </span>
                        </div>
                    </RouterLink>
                </v-col>
                <v-col cols="4">
                    <div class="center_text tab_bar" align-tabs="center">
                        <RouterLink to="/">
                            <v-tab value="createNote" style="color: black;" class="lowercase text-none">
                                <!-- <v-img :src="Pen" alt="pen" class="me-2" style="width: 30px;"></v-img> -->
                                <i class="fa-solid fa-pen me-2"></i>
                                Create Note
                            </v-tab>
                        </RouterLink>
                        <RouterLink to="/dashboard">
                            <v-tab value="Dashboard" style="color: black;" class="lowercase text-none">
                                <!-- <v-img :src="Home" alt="pen" class="me-2" style="width: 30px;"></v-img> -->
                                <i class="fa-solid fa-house me-2"></i>
                                Dashboard
                            </v-tab>
                        </RouterLink>
                        <span @click="showModal">
                            <v-tab value="Search" style="color: black;" class="lowercase text-none">
                                <!-- <v-img :src="Search" alt="pen" class="me-2" style="width: 30px;"></v-img> -->
                                <i class="fa-solid fa-magnifying-glass me-2"></i>
                                Search
                            </v-tab>
                        </span>
                        <RouterLink to="/features">
                            <v-tab value="features" style="color: black;" class="lowercase text-none">
                                <!-- <v-img :src="Fire" alt="pen" class="me-2" style="width: 30px;"></v-img> -->
                                <i class="fa-solid fa-fire me-2"></i>
                                Features
                            </v-tab>
                        </RouterLink>
                    </div>
                </v-col>
                <v-col cols="4 mt-2">
                    <ThemeVue/>
                    <LoginView/>
            
                    <!-- <AccountView/> -->
                </v-col>
            </v-row>
        </v-toolbar>
        <HomeResponsiveVue />
        
        <!-- Modal -->
        <v-dialog v-model="isModalVisible" max-width="500" style="margin-top: -20rem">
            <v-card>
                <v-card-title>
                    Search
                </v-card-title>
                <v-card-text>
                    <SearchNoteVue/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="hideModal">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
       
    </main>
</template>
