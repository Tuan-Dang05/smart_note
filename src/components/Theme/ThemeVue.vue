<script setup>
import './theme.scss';
import { ref } from 'vue'
const isDarkMode = ref(true);
const toggleThemeIcon = () => {
    isDarkMode.value = !isDarkMode.value;
};
</script>
<template>
    <div class="container">
        <div class="toggle">
            <button class="button">
                <i :class="['fa-solid', isDarkMode ? 'fa-moon' : 'fa-sun']" style="cursor: pointer;" @click="toggleThemeIcon"></i>
            </button>
        </div>
    </div>
</template>