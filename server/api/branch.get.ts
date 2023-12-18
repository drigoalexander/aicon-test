export default defineEventHandler(async (event) => {
  console.log(event);
  const data = await $fetch(
    "https://private-46841d-dummybljr.apiary-mock.com/incentive_api/api/v1/dropdown_branch",
    { method: "GET" }
  );

  return { data };
});
