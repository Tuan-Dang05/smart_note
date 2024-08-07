<script setup>
// import logo from '@assets/img/logoLight.png';
import RateVue from '../Rating/RateVue.vue';

</script>
<template>
    <footer class="footer mt-5 bg-light text-dark">
        <div class="container">
            <div class="row footer_content">
                <div class="col-md-4">
                    <div class="logo">
                        <img src="@/assets/img/logoLight.png" alt="logo" width="50" class="logo_footer" />
                        <span class="fs-3 ms-5 fw-medium">Smart Note</span>
                    </div>
                    <p>
                        Smart Note is your ultimate solution for taking notes and managing task lists
                        efficiently. Stay organized and boost your productivity with our user-friendly
                        interface.
                    </p>
                    <a href="https://maps.app.goo.gl/drce9eEJHLahDCJ56" target="_blank">

                        <div class="button-icon" style="margin-top: 50px">
                            <div class="icon_location">
                                <i class="fa-solid fa-location-dot location"></i>
                            </div>
                            <div class="cube">
                                <span class="side front">Location</span>
                                <span class="side top">Open map</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-md-8 row">
                    <div class="col-md-4">
                        <h5 class="quick_link">Quick Links</h5>
                        <ul class="list-unstyled">
                            <router-link to="/" class="tree__action sidebar__action">
                                <span aria-current="page" class="tree__link nuxt-link-exact-active nuxt-link-active">
                                    <i class="tree__icon fa-solid fa-house"></i>
                                    <span class="tree__link-text"><span
                                            class="sidebar__item-name">Dashboard</span></span>
                                </span>
                            </router-link>
                            <router-link to="/richnote/0" class="tree__action sidebar__action">
                                <span aria-current="page" class="tree__link nuxt-link-exact-active nuxt-link-active">
                                    <i class="tree__icon fa-solid fa-pen"></i>
                                    <span class="tree__link-text"><span class="sidebar__item-name">Create
                                            Note</span></span>
                                </span>
                            </router-link>
                            <router-link to="/tasklists/0" class="tree__action sidebar__action">
                                <span aria-current="page" class="tree__link nuxt-link-exact-active nuxt-link-active">
                                    <i class="tree__icon fa-solid fa-list-check"></i>
                                    <span class="tree__link-text"><span class="sidebar__item-name">New
                                            TaskList</span></span>
                                </span>
                            </router-link>
                            <router-link to="/features" class="tree__action sidebar__action">
                                <span aria-current="page" class="tree__link nuxt-link-exact-active nuxt-link-active">
                                    <i class="tree__icon fa-solid fa-fire me-1"></i>
                                    <span class="tree__link-text"><span
                                            class="sidebar__item-name">Features</span></span>
                                </span>
                            </router-link>
                            
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h5 class="contact">Contact Us</h5>
                        <ul class="list-unstyled" style="text-align: start;">
                            <li><i class="fa-solid fa-map-location-dot"></i> Thanh Xuân, Hà Nội</li>
                            <li><i class="fa fa-phone"></i><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                            <li>
                                <i class="fa fa-envelope"></i><a
                                    href="mailto:support@smartnote.com">support@smartnote.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h5 class="Follow">Follow Us</h5>
                        <div class="social-icons">
                            <a><i class="fa-brands fa-facebook"></i></a>
                            <a><i class="fa-brands fa-instagram"></i></a>
                            <a><i class="fa-brands fa-square-twitter"></i></a>
                            <a><i class="fa-brands fa-telegram"></i></a>
                        </div>
                        <h5 style="margin-top: 30px;" class="rate">Rate Us</h5>
                        <RateVue/>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-12 text-start text-light mt-3 pb-1" style="background-color: black; margin-bottom: -15px; padding-left: 100px; padding-top: 15px; display: flex;" >
                <p class="copy">&copy; 2024 Smart Note. All Rights Reserved.</p>
                <p class="privacy" style="float: right; position: absolute; right: 100px;">Privacy Policy</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import './Footer.scss';
</style>
