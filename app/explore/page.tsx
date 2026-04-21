import type { Metadata } from "next";
import { ExplorePage } from "@/components/explore-page";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore the imported Village Socialite archive by category, collection, and recent stories.",
};

export default function ExploreRoute() {
  return <ExplorePage />;
}
