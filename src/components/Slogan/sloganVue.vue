<script setup>
import bg from '@/assets/img/bg.jpeg';
import './slogan.scss'
</script>

<template>
    <div class="slogan_bg">
        <img :src="bg" alt="bg" class="background" />
        <div class="content">
            <h1 class="slogan">Your Smart Note Companion</h1>
            <h2 class="slogan">Organize your thoughts seamlessly</h2>
            <p class="fs-5" style="color: gray;">Your very own Smart Note, the indispensable tool for organizing and preserving every creative idea you have</p>
            <button class="get_started">
                    <router-link to="/login" style="text-decoration: none; color: white;">
                    Create free account
                </router-link>
                </button>
        </div>
        <p class="small-slogan">Your Smart Note Companion - Organize your thoughts seamlessly</p>
    </div>
</template>
