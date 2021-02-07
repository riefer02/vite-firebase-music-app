<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center h-screen w-screen"
  >
    <div
      class="max-w-sm mx-auto bg-gray-200 rounded-xl shadow-md flex flex-col items-center space-x-4 p-6"
    >
      <h1 class="py-2 px-6 text-2xl">Music Player Distribution App</h1>
      <form>
        <label for="audio-upload">Select Audio:</label>
        <div class="flex justify-evenly items-center">
          <input
            id="audio-upload"
            name="audio-upload"
            type="file"
            accept="audio/*"
            @change="previewFiles"
          />
          <input
            type="submit"
            class="p-2 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-600 focus:ring-opacity-50"
          />
        </div>
      </form>
      <div
        class="bg-indigo-200 shadow-md rounded-lg p-2 border border-black border-opacity-50 hover:bg-indigo-100 hover:border-opacity-100"
        @click="uploadAudio"
      >
        Db Write Test
      </div>
    </div>
    {{ data }}
  </div>
</template>

<script>
import { fetchAudio, uploadAudio } from "./api/audio.js";

export default {
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    this.data = await fetchAudio();
  },
  methods: {
    previewFiles(e) {
      console.log(e.target.files);
    },
    uploadAudio,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Oswald&display=swap");
#app {
  /* font-family: "Merriweather", serif; */
  font-family: "Oswald", sans-serif;
}
</style>
