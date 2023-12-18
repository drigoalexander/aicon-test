<template>
  <header
    class="flex justify-between py-4 px-10 fixed top-0 left-[5vw] w-[95vw] bg-white h-[6vh] shadow-md z-30"
  >
    <div class="flex items-center gap-6 justify-center">
      <div>
        <label for="select_year" class="sr-only">Select Year</label>
        <select
          id="select_year"
          class="bg-transparent border-2 border-gray-200 text-black rounded-full px-3 py-2 w-32"
        >
          <option :value="element" v-for="element in yearRange">
            {{ element }}
          </option>
        </select>
      </div>

      <button
        class="rounded-md bg-blue-600 gap-2 text-white hover:bg-blue-800 duration-300 ease-in-out px-3 py-1.5 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 aspect-square"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>

        <span>Change Editing</span>
      </button>
    </div>

    <div class="flex items-center justify-center gap-14">
      <div class="flex items-center justify-center gap-2">
        <div class="relative w-full">
          <label for="language" class="sr-only">Select Language</label>
          <div
            class="scale-[0.15] -translate-x-1/2 -translate-y-1/2 absolute left-2/3 top-1/2 z-10 text-black"
          >
            <svg-icon :name="selectedLanguage" />
          </div>
          <select
            v-model="selectedLanguage"
            class="bg-transparent text-black rounded-full px-3 py-2 w-32 relative z-0 outline-none"
          >
            <option
              :value="element"
              v-for="(element, idx) in language"
              :selected="idx === 0"
            >
              {{ element }}
            </option>
          </select>
        </div>
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 aspect-square fill-blue-600 relative z-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>

          <div
            class="absolute top-0 right-[1px] bg-red-600 rounded-full w-2 h-2 z-10"
          ></div>
        </div>
      </div>

      <div class="flex items-center justify-center gap-5 text-black w-full">
        <span> Hi, Anna </span>
        <img
          class="w-7 aspect-square rounded-full overflow-clip"
          src="https://i.pinimg.com/736x/0d/92/ba/0d92ba3e84b9f15dea2659fb4d8b6dfd.jpg"
          alt="Admin Picture"
        />
      </div>
    </div>
  </header>

  <aside
    class="fixed top-0 left-0 z-40 w-[5vw] h-screen transition-transform sm:translate-x-0 flex items-center justify-center bg-sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
      <ul class="space-y-2 font-medium flex flex-col gap-4 pt-2">
        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
              />
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
              />
            </svg>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>
          </NuxtLink>
        </li>
      </ul>
      <ul class="space-y-2 font-medium mb-56 flex flex-col gap-4">
        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
              version="1.1"
            >
              <g id="surface1">
                <path
                  style="
                    stroke: none;
                    fill-rule: nonzero;
                    fill: white;
                    fill-opacity: 1;
                  "
                  d="M 8.285156 3.964844 C -1.867188 9.566406 2.449219 25.667969 14 25.667969 C 19.949219 25.667969 25.667969 19.949219 25.667969 14.117188 C 25.667969 5.367188 15.984375 -0.351562 8.285156 3.964844 Z M 20.417969 7.582031 C 24.265625 11.316406 24.265625 16.683594 20.417969 20.417969 C 14.699219 26.25 4.667969 22.167969 4.667969 14 C 4.667969 9.214844 9.214844 4.667969 14 4.667969 C 16.214844 4.667969 18.667969 5.714844 20.417969 7.582031 Z M 20.417969 7.582031 "
                />
                <path
                  style="
                    stroke: none;
                    fill-rule: nonzero;
                    fill: white;
                    fill-opacity: 1;
                  "
                  d="M 10.5 8.75 C 8.515625 11.082031 9.917969 12.484375 12.25 10.5 C 15.285156 7.933594 17.265625 10.964844 14.582031 14 C 13.417969 15.285156 12.832031 16.683594 13.183594 17.148438 C 14.351562 18.199219 18.667969 14 18.667969 11.667969 C 18.667969 7.351562 13.183594 5.484375 10.5 8.75 Z M 10.5 8.75 "
                />
                <path
                  style="
                    stroke: none;
                    fill-rule: nonzero;
                    fill: white;
                    fill-opacity: 1;
                  "
                  d="M 12.832031 19.832031 C 12.832031 20.417969 13.417969 21 14 21 C 14.699219 21 15.167969 20.417969 15.167969 19.832031 C 15.167969 19.132812 14.699219 18.667969 14 18.667969 C 13.417969 18.667969 12.832031 19.132812 12.832031 19.832031 Z M 12.832031 19.832031 "
                />
              </g>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to=""
            class="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>

  <div class="py-8 px-20 ml-[5vw] mt-[6vh] bg-background min-h-screen">
    <slot />
  </div>
</template>

<script setup>
const yearRange = computed(() => {
  const yearNow = new Date().getFullYear();
  const length = 7;
  const listYear = Array.from(
    { length: length },
    (_, idx) => yearNow - 4 + idx
  );

  return listYear;
});

const language = unref(["ENG", "ID"]);
const selectedLanguage = ref("ENG");
</script>
