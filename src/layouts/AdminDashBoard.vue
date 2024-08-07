<script setup>
import AdminView from '@/views/AdminView/AdminView.vue';
import '../views/AdminView/admin.scss';
</script>

<template>
    <main>
        <v-layout class="rounded rounded-md">
            <!-- <v-app-bar>
                <child>

                </child>
            </v-app-bar> -->

            <v-navigation-drawer name="drawer" >
                <div>
                    <child>
                        <div class="sidebar">
                            <div class="user-info">
                                <img class="avatar" :src="avatarUrl" alt="User Avatar" />
                                <span class="username">{{ username }}</span>
                            </div>
                            <nav class="nav-links">
                                <div class="nav-link">Dashboard</div>
                                <router-link to="/admindashboard" class="nav-link">User Manager</router-link>
                            </nav>
                        </div>
                    </child>
                </div>

            </v-navigation-drawer>

            <v-main class="d-flex align-center justify-center" style="min-height: 300px; background-color: white; position: relative;" >
                <router-view />
                <div>
                    <div class="container">
                        <div class="card">
                            <span>Guest</span>
                            <i class="icon-user"></i>
                        </div>
                        <div class="card">
                            <span>User</span>
                            <i class="icon-user"></i>
                        </div>
                        <div class="card">
                            <span>Notes</span>
                            <i class="icon-note"></i>
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

                            </tbody>
                        </table>
                    </div>
                </div>
            </v-main>
            <AdminView/>
        </v-layout>
    </main>
</template>
