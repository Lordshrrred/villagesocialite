import type { Metadata } from "next";
import { ExplorePage } from "@/components/explore-page";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse every preserved Village Socialite category inside the rebuilt site.",
};

export default function CategoriesPage() {
  return <ExplorePage />;
}
