import { callWithAsyncErrorHandling, createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app= createApp(App);
app.config.errorHandler=(error)=>{
    console.log(err);
}

app.mount('#app');
