<template>
  <div class="text-btn-focused w-full flex ml-10 flex-col gap-4">
    <div class="flex w-full justify-between items-center">
      <div class="flex gap-4 items-center">
        <span>Standard</span>
        <div>
          <label class="sr-only">Select type</label>
          <select
            class="cursor-pointer bg-white border-2 border-gray-200 text-black rounded-sm px-3 py-2 w-44"
          >
            <option>Grid</option>
          </select>
        </div>
      </div>

      <div class="flex gap-4 items-center">
        <span>View Report as</span>
        <div>
          <label class="sr-only">Select view report</label>
          <select
            class="cursor-pointer bg-white border-2 border-gray-200 text-black rounded-sm px-3 py-2 w-44"
          >
            <option>Kantor Pusat</option>
          </select>
        </div>
        <div>
          <label class="sr-only">Select view report</label>
          <select
            class="cursor-pointer bg-white border-2 border-gray-200 text-black rounded-sm px-3 py-2 w-44"
          >
            <option>Kantor Pusat</option>
          </select>
        </div>
      </div>
    </div>

    <div
      class="w-full flex items-center justify-evenly uppercase bg-green-600 text-white rounded-lg px-4 py-10"
    >
      <div class="flex flex-col gap-2 items-center justify-center">
        <span>{{ filteredList[0].name }}</span>
        <span class="text-lg"> {{ filteredCategory[0].placeholder }}</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>{{ filteredList[0].name }}</span>
        <span class="text-sm"
          >{{ filteredList[0].name }}
          {{ filteredCategory[0].placeholder }}</span
        >
        <span class="text-lg"> {{ filteredCategory[0].placeholder }}</span>
      </div>

      <div class="flex items-center self-end gap-4">
        <button
          class="bg-background text-btn-focused px-3 py-1 rounded-md text-sm flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
            />
          </svg>

          <span>Refresh</span>
        </button>
        <button
          class="bg-background text-btn-focused px-3 py-1 rounded-md text-sm flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>

          <span>Help</span>
        </button>
      </div>
    </div>

    <div class="flex w-full items-start gap-4">
      <div
        class="w-[40%] flex flex-col border-t-4 h-32 rounded-md border-sidebar bg-white text-sidebar space-y-3 px-8 py-4 text-base justify-center items-center"
      >
        <div class="flex gap-4 items-center justify-center">
          <span>Year</span>
          <div>
            <label class="sr-only">Select Year</label>
            <select
              class="cursor-pointer bg-white border-2 border-gray-200 text-black rounded-sm px-3 py-2 w-44"
            >
              <option>2021</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <input
            id="show-annual"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-sidebar"
          />
          <label
            for="show-annual"
            class="ms-2 text-sm font-medium text-gray-900"
            >Show Annual</label
          >
        </div>
      </div>
      <div
        class="w-[60%] flex border-t-4 rounded-md h-32 border-sidebar bg-white text-sidebar gap-8 px-8 py-4 text-base justify-center items-center"
      >
        <span class="flex self-start">Period</span>

        <ul class="flex text-sm gap-1">
          <li v-for="idx in 10">
            <a
              href="#"
              class="rounded-full flex items-center justify-center w-8 h-8 leading-tight text-btn-focused bg-background border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >{{ idx }}</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="flex flex-col gap-4 bg-white rounded-md py-10 px-10 items-start"
    >
      <span class="text-xl">Penggunaan Energi Dalam Organisasi</span>
      <div class="flex w-full justify-between items-center">
        <span>/</span>
        <div class="flex items-center self-end gap-4">
          <button
            class="bg-btn-focused text-white px-3 py-1 rounded-md text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
              />
            </svg>

            <span>Refresh</span>
          </button>
          <button
            class="bg-btn-focused text-white px-3 py-1 rounded-md text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
              />
            </svg>

            <span>Filter</span>
          </button>
        </div>
      </div>
      <tableReport />
    </div>
  </div>
</template>

<script setup>
const list = usePageList();
const route = useRoute();

const filteredCategory = list.pageList.filter((page) => {
  return page.list.some((item) => item.path === route.fullPath);
});
const filteredList = filteredCategory[0].list.filter((listName) => {
  return listName.path === route.fullPath;
});
</script>
