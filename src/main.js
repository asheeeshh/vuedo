import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})
const app = createApp(App)

app.use(vuetify)
app.mount('#app')
