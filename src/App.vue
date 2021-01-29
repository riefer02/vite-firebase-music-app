<template>
  <div
    class="container mx-auto flex items-center justify-center h-screen w-screen"
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
    </div>
  </div>
</template>

<script>
// console.log(import.meta.env);
// import { fetchAudio } from "./api/audio.js";

export default {
  mounted() {
    // fetchAudio();
  },
  methods: {
    previewFiles(e) {
      console.log(e.target.files);
    },
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
