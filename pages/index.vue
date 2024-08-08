<template>
  <div class="wrapper">
    <nav>
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/about">ABOUT</NuxtLink>
    </nav>
    <h1>HOME 頁面</h1>
    <el-button plain @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button>

    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="500"
      align-center
    >
      <span>
        It should be noted that the content will not be aligned in center by
        default
      </span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
  const centerDialogVisible = ref(false)

  useHead({
    title: 'HOME｜DEMO NUXT 3',
    meta: [{ name: 'description', content: '這是 Home description' }]
  })
</script>

<style scoped lang="scss">
  // @use '~/assets/scss/main';
</style>
