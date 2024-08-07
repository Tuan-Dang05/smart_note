<script setup>
import { ref } from 'vue';
import './dashboard.scss';
import FooterVue from '../Footer/FooterVue.vue';
import Header from '../Header/Header.vue';
// import HomePage from '@/views/HomePage/HomePage.vue';
// Reactive data for notes
const notes = ref([
    { id: 1, title: 'Folder 1', bookmarked: false },
    { id: 2, title: 'Folder 2', bookmarked: false },
    { id: 3, title: 'Folder 3' },
    { id: 4, title: 'Folder 4' },
]);

const folders = ref([]);

const selectedNotes = ref([]);
const selectedFolders = ref([]);

const newFolderName = ref('');


const toggleBookmark = (item) => {
    item.bookmarked = !item.bookmarked; // Toggle the bookmarked state
};

const selectNote = (note) => {
    const noteIndex = selectedNotes.value.findIndex(n => n.id === note.id);
    if (noteIndex > -1) {
        selectedNotes.value.splice(noteIndex, 1); // Remove the note if it's already selected
    } else {
        selectedNotes.value.push(note); // Add the note if it's not selected
    }
};

// Function to handle folder selection
const selectFolder = (folder) => {
    const folderIndex = selectedFolders.value.findIndex(f => f.id === folder.id);
    if (folderIndex > -1) {
        selectedFolders.value.splice(folderIndex, 1); // Remove the folder if it's already selected
    } else {
        selectedFolders.value.push(folder); // Add the folder if it's not selected
    }
};

// Function to create a new folder
const createFolder = () => {
    if (newFolderName.value.trim() !== '') {
        folders.value.push({ id: Date.now(), title: newFolderName.value });
        newFolderName.value = ''; // Clear the input field after creating the folder
    }
};

</script>

<template>
    <main>
        <Header/>
        <div class="container con_dash" style="flex-wrap: wrap;">
            <h2 style="margin-top: 100px; margin-bottom: -130px;"><i>Dashboard </i></h2>
            <div class="dashboard">
                <input type="text" v-model="newFolderName" placeholder="Folder Name">
                <button class="create" @click="createFolder">
                    Create Folder
                </button>
            </div>
            <div class="d-flex" >
                <div class="note-section">
                    <button>Create Your First Note</button>
                    <button>Create Your First TaskList</button>
                    <div class="note-folder" style="cursor: pointer;">
                        <span role="img" aria-label="folder">📁</span>
                        <span>All Note</span>
                        <div v-for="note in notes" :key="note.id" class="child_note mt-3" @click="selectNote(note)">
                            📁 {{ note.title }}


                        </div>
                        <div v-for="folder in folders" :key="folder.id" class="child_note"
                            @click="selectFolder(folder)">
                            📁 {{ folder.title }}

                        </div>
                    </div>
                </div>

                <!-- CARD -->
                <div class="d-flex" style="flex-wrap: wrap; margin-top: 90px; margin-left: 20rem; position: absolute;">
                    <div v-for="item in [...selectedNotes, ...selectedFolders]" :key="item.id" class="card ms-4 pt-3">
                        <p class="text-dark ms-2 fs-5">{{ item.title }}
                            <span style="color: rgb(136, 136, 136); font-size: 15px;" class="ms-3">0 note</span>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </p>

                        
                        <div class="author mb-3">
                            <i class="fa-solid fa-user-pen text-dark ms-2"></i>
                            Create by
                            <span class="name">
                                Tuan dang
                            </span> <br />
                            <span style="color: rgb(133, 133, 133);">
                                <i class="fa-regular fa-clock me-1 ms-3" style="color: rgb(133, 133, 133);">
                                </i>4 days ago</span>
                            <i class="fa-regular fa-bookmark text-dark"
                                :class="{ 'fa-solid': item.bookmarked, 'text-warning': item.bookmarked }"
                                @click="toggleBookmark(item)" style="float: right; 
                                        margin-right: 10px; 
                                        font-size: 20px;
                                        margin-top: -15px;
                                        cursor: pointer;"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight-topic">
                <h2>HIGHLIGHT TOPIC</h2>
                <p>You currently have no highlighted topics. Start exploring and highlighting topics to see them here!
                </p>
            </div>
            <div class="new-note-today">
                <h2>NEW NOTE TODAY</h2>
                <button>Try Your First Note Today</button>
                <button>Try Your First TaskList Today</button>
            </div>
        </div>
        <FooterVue/>
    </main>
</template>
