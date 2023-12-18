export default {
  pageList: [
    {
      placeholder: "GENERAL",
      color: "red",
      list: [],
    },
    {
      placeholder: "ECONOMIC",
      color: "blue",
      list: [],
    },
    {
      placeholder: "ENVIRONMENT",
      color: "green",
      list: [
        {
          name: "GRI 302 - ENERGI",
          path: "/admin/pages/gri-302-energi",
        },
        {
          name: "GRI 300 - 1 Penggunaan Energi",
          path: "/admin/pages/gri-300-1-penggunaan-energi",
        },
        {
          name: "GRI 300 - 2 (K)",
          path: "/admin/pages/gri-300-2-(k)",
        },
      ],
    },
    {
      placeholder: "SOCIAL",
      color: "orange",
      list: [],
    },
  ],
};
