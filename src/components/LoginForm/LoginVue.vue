<script setup>
import { ref } from 'vue';
import './Login.scss';

// Define reactive states
const email = ref('');
const password = ref('');
const passwordVisible = ref(false);
const emailError = ref('');
const passwordError = ref('');

// Method to toggle password visibility
const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};

// Method to validate email format
const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

// Method to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    emailError.value = '';
    passwordError.value = '';

    // Validate email
    if (!email.value) {
        emailError.value = 'Email is required';
    } else if (!isValidEmail(email.value)) {
        emailError.value = 'Please enter a valid email';
    }

    // Validate password
    if (!password.value) {
        passwordError.value = 'Password is required';
    }

    // If no errors, proceed with form submission
    if (!emailError.value && !passwordError.value) {
        // Add form submission logic here (e.g., API call)
        console.log('Form submitted', { email: email.value, password: password.value });
    }
};
</script>

<template>
    <main class="bg_image">
        <div className='filter'></div>
        <form class="form" style="margin-top: 300px; z-index: 99999;"  @submit="handleSubmit">
            <div class="flex-column">
                <label>Email</label>
            </div>
            <div class="inputForm">
                <i class="fa-solid fa-at"></i>
                <input type="text" class="input" placeholder="Enter your Email" v-model="email">
            </div>
            <div v-if="emailError" class="error">{{ emailError }}</div>

            <div class="flex-column">
                <label>Password</label>
            </div>
            <div class="inputForm">
                <i class="fa-solid fa-lock"></i>
                <input :type="passwordVisible ? 'text' : 'password'" class="input" placeholder="Enter your Password" v-model="password">
                <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" @click="togglePasswordVisibility" style="cursor: pointer;"></i>
            </div>
            <div v-if="passwordError" class="error">{{ passwordError }}</div>

            <div class="flex-row">
                <div>
                    <input type="checkbox">
                    <label>Remember me</label>
                </div>
                <RouterLink to="/forgotpassword" style="text-decoration: none;">
                    <span class="span">Forgot password?</span>
                </RouterLink>
            </div>
            <button type="submit" class="button-submit">Sign In</button>
            <p class="p">Don't have an account?
                <RouterLink to="/signup" style="text-decoration: none;">
                    <span class="span">Sign Up</span>
                </RouterLink>
            </p>
            <div class="separator">
                <hr class="line">
                <span class="ms-5">Or</span>
                <hr class="line">
            </div>
            <div class="flex-row">
                <button class="btn google">
                    <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
                        <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
                        <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
                        <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"></path>
                    </svg>
                    Google
                </button>
            </div>
        </form>
    </main>
</template>

<style scoped>
/* Your existing styles */
.error {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
}
</style>
