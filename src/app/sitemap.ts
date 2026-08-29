import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/cv",
    "/work",
    "/community",
    "/foundation",
    "/recognition",
    "/speaking",
    "/mentorship",
    "/vision",
    "/gallery",
    "/news",
    "/contact",
    "/sources",
  ];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
