<template>
  <div class="flex flex-col gap-4">
    <buttonMenu
      :btn-color="el.color"
      :placeholder="el.placeholder"
      :list="el.list"
      v-for="(el, idx) in list.pageList"
      :key="idx"
    />
  </div>
  <ClientOnly>
    <Teleport to="#main">
      <NuxtPage />
    </Teleport>
  </ClientOnly>
</template>

<script setup>
const list = usePageList();
</script>
