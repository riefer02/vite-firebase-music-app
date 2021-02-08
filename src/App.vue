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
            @change="handleSubmit"
          />
          <input
            type="submit"
            class="p-2 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-600 focus:ring-opacity-50"
          />
        </div>
      </form>
      <div
        @click="
          register({
            email: 'andrew.riefenstahl@gmail.com',
            password: 'legacy21',
          })
        "
        class="bg-indigo-200 shadow-md rounded-lg p-2 m-2 border border-black border-opacity-50 hover:bg-indigo-100 hover:border-opacity-100"
      >
        Register
      </div>
      <div
        class="bg-indigo-200 shadow-md rounded-lg p-2 m-2 border border-black border-opacity-50 hover:bg-indigo-100 hover:border-opacity-100"
      >
        Login Button
      </div>
      <div
        class="bg-indigo-200 shadow-md rounded-lg p-2 border border-black border-opacity-50 hover:bg-indigo-100 hover:border-opacity-100"
        @click="uploadToStorage(this.audio)"
      >
        Db Write Test
      </div>
    </div>
    {{ data }}
  </div>
</template>

<script>
import { fetchAudio, uploadToFirebase, uploadToStorage } from "./api/audio.js";
import { register } from "./api/auth";

export default {
  data() {
    return {
      data: null,
      audio: null,
    };
  },
  async mounted() {
    this.data = await fetchAudio();
  },
  methods: {
    handleSubmit(e) {
      this.audio = e.target.files[0];
      console.log(this.audio);
    },
    uploadToStorage,
    register,
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
