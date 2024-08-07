<script setup>
import Editor from '@tinymce/tinymce-vue'
import './CreateNote.scss'
import { ref } from 'vue';
// import TaskListVue from '../TaskList/TaskList.vue'
// const tinymceApiKey = import.meta.env.VITE_TINYMCE_TOKEN
const items = ref(['Rich text note', 'Task List'])
const selectedItem = ref('Rich text note')
const statuses = ref(['Public Note', 'Private Note'])
const selectedStatus = ref('Public Note')
</script>

<template>
    <main class="main container-fluid" style="z-index: -9999;">
        <main id="sample">
            <div class="container" style="margin-bottom: 20px;">
                <div class="d-flex header_rich">
                    <h2 class="text-center" style="margin-left: 6%;"><i>Rich text note</i></h2>
                    <div class="title_input col-lg-4" style="margin-left: 5.5%; z-index:4; float: left;">
                        <input type="text" placeholder="Enter Folder Title" name="text" class="input_title col-lg-4">
                    </div>
                </div>
                <div class="d-flex mt-5 col-lg-4 dropdown" style="margin-left: 6%;">

                    <v-select 
                    density="compact"
                    :items="items" 
                    v-model="selectedItem" 
                    variant="outlined" class="dropdown">
                        <template #option="{ option }">
                            <span>{{ option.split(' (format:')[0] }}</span>
                            <font-awesome-icon :icon="[option.split(' (format:')[1].slice(0, -1)]" class="ms-2" />
                        </template>
                    </v-select>
                    
                    <v-select 
                    density="compact"
                    :items="statuses" 
                    v-model="selectedStatus" 
                    variant="outlined" 
                    class="ms-5 dropdown">
                        <template #option="{ option }">
                            <span>{{ option }}</span>
                        </template>
                    </v-select>
                </div>
            </div>

            <div v-if="selectedItem === 'Rich text note'" class="rich-note-editor">
                <Editor api-key="xabehmgabjzhymnf8o2swiernvs30me9y576axtn1vc1evch" :init="{
                    toolbar_mode: 'sliding',
                    toolbar:
                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    plugins:
                        'advlist autolink lists link image charmap print preview hr anchor pagebreak media filemanager responsivefilemanager',
                    tinycomments_author: 'Author name',
                    image_advtab: true
                }" />
            </div>
            
            <div v-if="selectedItem === 'Task List'" class="task-list-editor">
                <!-- <TaskListVue /> -->
                <Editor api-key="xabehmgabjzhymnf8o2swiernvs30me9y576axtn1vc1evch" :init="{
                    toolbar: 'checklist',
                    menu: {
                        format: {
                            title: 'Format',
                            items: 'checklist | bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align | forecolor backcolor | removeformat'
                        }
                    },
                    plugins: 'lists checklist'
                }" />
            </div>
        </main>
        <button class="BtnCreate">Create note
            <svg class="svg" viewBox="0 0 512 512">
                <path
                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z">
                </path>
            </svg>
        </button>
    </main>
</template>

