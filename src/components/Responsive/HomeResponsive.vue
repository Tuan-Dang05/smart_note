<script>
import { RouterLink } from 'vue-router';
import './HomeRes.scss';
export default {
    data() {
        return {
            themes: [
                { id: 1, name: 'Light' },
                { id: 2, name: 'Dark' }
            ],
            languages: [
                { id: 1, name: 'English' },
                { id: 2, name: 'Vietnamese' }
            ],
            selectedTheme: 'Light', // Default selected theme
            selectedLanguage: 'English' // Default selected language
        };
    },
    methods: {
        selectTheme(theme) {
            this.selectedTheme = theme.name;

            // if (theme.name === 'Dark') {
            //     // Apply dark theme
            //     document.body.classList.add('dark-theme');
            // } else {
            //     // Apply light theme
            //     document.body.classList.remove('dark-theme');
            // }
        },
        // selectLanguage(language) {
        //     this.selectedLanguage = language.name;
        //     // Here you can implement logic to change language settings
        //     // For demonstration purposes, you can console log the selected language
        //     console.log('Selected language:', language.name);
        // }
    }
};
</script>
<template>
    <nav class="navbar fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">

                    <div class="account_res">
                        <img width="50" style="border-radius: 50%;" src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="user">
                        <span class="name_acc">Smart note</span>
                        <div class="status_acc">You are not logged in!</div>
                    </div>


                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <router-link to="/dashboard" style="text-decoration: none;">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <i class="fa-solid fa-house me-2"></i>
                                    Dashboard</a>
                                </li>
                        </router-link>
                        <RouterLink to="/" style="text-decoration: none;">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <i class="fa-solid fa-pen me-2"></i>
                                    Create note</a>
                                </li>
                            </RouterLink>
                            <RouterLink to="/tasklist" style="text-decoration: none;">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">
                                        <i class="fa-solid fa-search me-2"></i>
                                        Search</a>
                                    </li>
                                </RouterLink>
                                <RouterLink to="/feature" style="text-decoration: none;">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">
                                            <i class="fa-solid fa-fire me-2"></i>
                                            Feature</a>
                                        </li>
                                    </RouterLink>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span><i class="fa-solid fa-language me-2"></i>Language:</span>
                                {{ selectedLanguage }}
                            </a>
                            <ul class="dropdown-menu text-center">
                                <li v-for="language in languages" :key="language.id">
                                    <a class="dropdown-item" href="#" @click="selectLanguage(language)">
                                        {{ language.name }}
                                    </a>
                                </li>
                            </ul>
                        </li> -->

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span><i class="fa-solid fa-gear me-2"></i>Setting:</span>
                                {{ selectedTheme }}
                            </a>
                            <ul class="dropdown-menu text-center">
                                <li v-for="theme in themes" :key="theme.id">
                                    <a class="dropdown-item" href="#" @click="selectTheme(theme)">
                                        {{ theme.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <RouterLink to="/login">
                        <button class="Btn">
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
