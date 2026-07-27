import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yadav Medicals",
    short_name: "Yadav Medicals",
    description: "Pharmacy & Pathkind Lab with Blood Collection – Khalilabad",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0e87f5",
    icons: [],
  };
}
