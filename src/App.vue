<template>
  <h1>{{ title }} </h1>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'App',
  computed: {
    title (): String {
      return ['Vue3 + Typescript + Snowpack从零开始构建应用']
    }
  }
})
</script>

<style>

</style>
