import type { Metadata } from "next";
import { ExplorePage } from "@/components/explore-page";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "A cleaner category experience for the Village Socialite content ecosystem.",
};

export default function CategoriesPage() {
  return <ExplorePage />;
}
