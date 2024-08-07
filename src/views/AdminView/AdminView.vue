<script setup>
// import AdminDashBoard from "@/layouts/AdminDashBoard.vue";
import './admin.scss';
</script>
<template>
    <main>
        <div class="" style="
        background-color: white;
        z-index: 9999;
        position: absolute;
        top: 0;
        width: 100%;
      ">
            <h1 style="margin-top: 10px; float: left; margin-left: 20rem">
                Dashboard 
            </h1>
            <div class="container admin_container">
                <div class="card">
                    <span>Guest</span>
                    <!-- <i class="icon-user"></i> -->
                </div>
                <div class="card">
                    <span>User</span>
                    <!-- <i class="icon-user"></i> -->
                </div>
                <div class="card">
                    <span>Notes</span>
                    <!-- <i class="icon-note"></i> -->
                </div>

                <h2>Top 10 Lastest User</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>email</th>
                            <th>role</th>
                            <th>createAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table content will go here -->
                    </tbody>
                </table>
            </div>
            <!-- <div class="sidebar">
                <div class="user-info">
                    <img class="avatar" :src="avatarUrl" alt="User Avatar" />
                    <span class="username">{{ username }}</span>
                </div>
                <nav class="nav-links">
                    <div class="nav-link">Dashboard</div>
                    <router-link to="/admindashboard" class="nav-link">User Manager</router-link>
                </nav>
            </div> -->
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            avatarUrl: "https://via.placeholder.com/150",
            username: "John Doe",
        };
    },
};
</script>
