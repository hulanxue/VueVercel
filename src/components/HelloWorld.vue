<script setup>
import { ref,reactive,computed } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const message=ref(10)
const rawHtml=ref(' <span style="color: red">This should be red.</span>')
const id=ref(111)
const buttonDisabled=ref(false)

const buttonClick=()=>{
  state.status++
}

const state=reactive({status:1})

const isAuto=computed(()=>{
  return state.status>10?true:false;
})
</script>

<template>
  <span >{{ message+10 }}</span>
  <span v-html="rawHtml"></span>
  <h1 :id="id">{{ msg }}</h1>
  <button type="button" :disabled="isAuto" @click="buttonClick">Button</button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div>{{ state.status }}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
