<template>
  <EasyDataTable :headers="headers" :items="city.data.data" />
</template>

<script setup>
const { data: city } = await useFetch("/api/branch");

const headers = [
  { text: "CITY", value: "text" },
  { text: "VALUE", value: "value", sortable: true },
];
</script>
