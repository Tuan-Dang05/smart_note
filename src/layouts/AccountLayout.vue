<script setup>
import Header from '@/components/Header/Header.vue';
import NavVue from '@/components/Navigation/NavVue.vue';
import AccountVue from '@/components/Account/AccountVue.vue';
</script>
<template>
    <v-layout ref="app" class="rounded rounded-md">
        <v-app-bar>
            <child>
                <Header/>
            </child>
        </v-app-bar>

        <v-navigation-drawer  name="drawer" permanent>
            <div>
                <child>
                    <NavVue/>
                </child>
            </div>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <router-view/>
            <!-- <AccountVue/> -->
        </v-main>

    </v-layout>
</template>
<script>
import { useLayout } from 'vuetify'

const Child = {
    setup(props, ctx) {
        const { getLayoutItem } = useLayout()

        function print(key) {
            alert(JSON.stringify(getLayoutItem(key), null, 2))
        }

        return () => ctx.slots.default({ print })
    },
}

export default {
    components: { Child },
}
</script>