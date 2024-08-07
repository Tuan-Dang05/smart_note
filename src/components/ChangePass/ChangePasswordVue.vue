<script setup>
import './password.scss';
</script>
<template>
    <main>
       
        <div class="change-password" style="position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);">
            <h2 style="text-align: center;
        margin-bottom: 20px;
        color: #333;">Change Password</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="currentPassword">Current Password</label>
                    <div class="password-input">
                        <input :type="showCurrentPassword ? 'text' : 'password'"  placeholder="******" v-model="currentPassword"
                            id="currentPassword" required />
                        <i :class="showCurrentPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                            @click="toggleShowCurrentPassword"></i>
                    </div>
                </div>

                <div class="form-group">
                    <label for="newPassword">New Password</label>
                    <div class="password-input">
                        <input :type="showNewPassword ? 'text' : 'password'" v-model="newPassword" placeholder="******" id="newPassword"
                            required />
                        <i :class="showNewPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                            @click="toggleShowNewPassword"></i>
                    </div>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirm New Password</label>
                    <div class="password-input">
                        <input :type="showConfirmPassword ? 'text' : 'password'"  placeholder="******" v-model="confirmPassword"
                            id="confirmPassword" required />
                        <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                            @click="toggleShowConfirmPassword"></i>
                    </div>
                </div>

                <div v-if="error" class="error">{{ error }}</div>

                <button type="submit">Change Password</button>
            </form>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            showCurrentPassword: false,
            showNewPassword: false,
            showConfirmPassword: false,
            error: ''
        };
    },
    methods: {
        toggleShowCurrentPassword() {
            this.showCurrentPassword = !this.showCurrentPassword;
        },
        toggleShowNewPassword() {
            this.showNewPassword = !this.showNewPassword;
        },
        toggleShowConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        handleSubmit() {
            this.error = '';

            if (this.newPassword !== this.confirmPassword) {
                this.error = 'New passwords do not match.';
                return;
            }

            // Add logic to handle password change
            // Example: Send a request to the server to change the password

            console.log('Current Password:', this.currentPassword);
            console.log('New Password:', this.newPassword);

            // Reset form
            this.currentPassword = '';
            this.newPassword = '';
            this.confirmPassword = '';

            alert('Password changed successfully!');
        }
    }
};
</script>