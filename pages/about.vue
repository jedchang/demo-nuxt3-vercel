<template>
  <div class="wrapper">
    <nav>
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/about">ABOUT</NuxtLink>
    </nav>
    <h1>ABOUT 頁面</h1>
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
  </div>
</template>

<script setup>
  import { Edit } from '@element-plus/icons-vue'

  const size = ref('32px')
  const color = ref('#60a100')

  useHead({
    title: 'ABOUT｜DEMO NUXT 3',
    meta: [{ name: 'description', content: '這是 About description' }]
  })
</script>

<style scoped lang="scss"></style>
