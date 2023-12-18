<template>
  <div class="flex items-start" id="main">
    <div class="w-[40%] flex flex-col gap-8 text-blue-500">
      <h3 class="text-4xl font-bold">REPORT DETAIL</h3>
      <searchBar />
      <div class="flex items-center justify-start gap-3 relative w-fit">
        <div
          class="w-full h-1 bottom-0 left-0 absolute z-10 bg-btn-focused rounded-full"
        ></div>
        <NuxtLink
          :class="{
            'bg-btn-focused': route.fullPath.includes('/admin/pages'),
            'bg-btn-not-focused': !route.fullPath.includes('/admin/pages'),
            'text-btn-focused': route.fullPath.includes('/admin/pages'),
            'text-btn-not-focused': route.fullPath.includes('/admin/pages'),
          }"
          to="/admin/pages"
          class="px-16 py-3 rounded-t-md uppercase"
          >Pages</NuxtLink
        >
        <NuxtLink
          to="/admin/result"
          :class="{
            'bg-btn-focused': route.fullPath.includes('/admin/result'),
            'bg-btn-not-focused': !route.fullPath.includes('/admin/result'),
            'text-btn-focused': !route.fullPath.includes('/admin/result'),
            'text-btn-not-focused': route.fullPath.includes('/admin/result'),
          }"
          class="px-16 py-3 rounded-t-md uppercase"
          >Result</NuxtLink
        >
      </div>

      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const route = useRoute();
</script>
