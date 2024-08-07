<script setup>
import '../LoginForm/Login.scss';
</script>

<template>
    <main style="position: absolute; width: 100%; z-index: 9999; background-color: white; padding-top: 150px; margin-top: -50px;">

        <form class="form" style="margin-top: 100px;">
            <div class="flex-column">
                <label>Email </label>
            </div>
            <div class="inputForm">
                <i class="fa-solid fa-at"></i>
                <input type="text" class="input" placeholder="Enter your Email">
            </div>
            <button class="button-submit">Submit</button>
        </form>
    </main>
</template>

