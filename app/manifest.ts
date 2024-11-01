import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hazem Khaled's Website",
    short_name: "Hazem",
    description: "Scaling things",
    theme_color: "#FF7F50",
    background_color: "#FF4500",
    start_url: "/",
    display: "browser",
    orientation: "portrait",
  };
}
