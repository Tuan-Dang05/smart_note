<script setup>
import NavVue from "../Navigation/NavVue.vue";
import "./bin.scss";
</script>
<template>
    <main>
        <!-- <NavVue /> -->
        <div id="note-manager" style="position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);">
            <div class="container bin_container">
                <h2>Notes</h2>
                <div v-if="activeNotes.length" class="notes">
                    <div v-for="note in activeNotes" :key="note.id" class="note">
                        <p>{{ note.content }}</p>
                        <button class="btn-delete" @click="deleteNote(note.id)">
                            Delete
                        </button>
                    </div>
                </div>
                <div v-else class="no-notes">No active notes</div>

                <h2>Recycle Bin</h2>
                <div v-if="deletedNotes.length" class="notes">
                    <div v-for="note in deletedNotes" :key="note.id" class="note deleted">
                        <p>{{ note.content }}</p>
                        <button class="btn-restore" @click="restoreNote(note.id)">
                            Restore
                        </button>
                    </div>
                </div>
                <div v-else class="no-notes">Recycle bin is empty</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            notes: [
                { id: 1, content: "Note 1", deleted: false },
                { id: 2, content: "Note 2", deleted: false },
                { id: 3, content: "Note 3", deleted: true },
                { id: 4, content: "Note 4", deleted: true },
            ],
        };
    },
    computed: {
        activeNotes() {
            return this.notes.filter((note) => !note.deleted);
        },
        deletedNotes() {
            return this.notes.filter((note) => note.deleted);
        },
    },
    methods: {
        deleteNote(id) {
            const note = this.notes.find((note) => note.id === id);
            if (note) note.deleted = true;
        },
        restoreNote(id) {
            const note = this.notes.find((note) => note.id === id);
            if (note) note.deleted = false;
        },
    },
};
</script>
