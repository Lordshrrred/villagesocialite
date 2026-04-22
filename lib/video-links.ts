import { stripHtml } from "@/lib/content-format";
import type { WordpressItem } from "@/lib/wordpress";

const YOUTUBE_ID = "[A-Za-z0-9_-]{11}";
const YOUTUBE_VIDEO_URL = new RegExp(
  `https?:\\/\\/(?:www\\.)?(?:youtube\\.com\\/(?:watch\\?[^\\s<"']*?v=|embed\\/|shorts\\/|live\\/)|youtu\\.be\\/)(${YOUTUBE_ID})(?:[^\\s<"']*)?`,
  "i",
);

export function getYouTubeVideoId(value: string) {
  const decoded = value.replace(/&amp;/g, "&");
  const directMatch = decoded.match(YOUTUBE_VIDEO_URL);

  if (directMatch?.[1]) return directMatch[1];

  try {
    const url = new URL(decoded);

    if (url.hostname.includes("youtube.com")) {
      const watchId = url.searchParams.get("v");
      if (watchId && new RegExp(`^${YOUTUBE_ID}$`).test(watchId)) return watchId;

      const pathMatch = url.pathname.match(
        new RegExp(`^\\/(?:embed|shorts|live)\\/(${YOUTUBE_ID})`),
      );
      if (pathMatch?.[1]) return pathMatch[1];
    }

    if (url.hostname === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      if (id && new RegExp(`^${YOUTUBE_ID}$`).test(id)) return id;
    }
  } catch {
    return null;
  }

  return null;
}

export function getYouTubeUrlFromHtml(html: string) {
  const match = html.replace(/&amp;/g, "&").match(YOUTUBE_VIDEO_URL);
  return match?.[0] ?? null;
}

export function getVideoTarget(item: WordpressItem) {
  const directUrl = getYouTubeUrlFromHtml(item.content);
  const videoId = directUrl ? getYouTubeVideoId(directUrl) : null;

  if (videoId) {
    return {
      kind: "embed" as const,
      href: `https://www.youtube.com/watch?v=${videoId}`,
      id: videoId,
    };
  }

  if (item.type !== "post") return null;

  return {
    kind: "search" as const,
    href: `https://www.youtube.com/results?search_query=${encodeURIComponent(stripHtml(item.title))}`,
    id: null,
  };
}
