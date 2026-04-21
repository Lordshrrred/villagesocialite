import type { Metadata } from "next";
import { ExplorePage } from "@/components/explore-page";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Browse Village Socialite's editorial lanes for dining, events, golf cart life, moving, wellness, and community stories.",
};

export default function ExploreRoute() {
  return <ExplorePage />;
}
