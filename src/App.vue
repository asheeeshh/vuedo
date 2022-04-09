<template>
  <v-app class="app-container">
    <main class="main-container">
      <Todo/>
    </main>
  </v-app>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',

  components: {
    Todo,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
}

.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app-container {
  width: 100%;
  height: 100%;
}
</style>
