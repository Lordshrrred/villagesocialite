const textHeavyImageFragments = [
  "/blog-images/archive/",
  "/reference-selected/",
  "/reference-selected/20251201",
  "/reference-selected/cropped-20251201",
  "citizens-first-bank",
  "panera-bread",
  "spanish-springs-entrance",
  "villages-banner",
  "villages-fl-golf-arch",
  "thevillagesgolf",
  "wvlg-studio",
  "wp-content/uploads/2026/03/",
];

export function shouldPreserveImageText(src: string) {
  const normalized = decodeURIComponent(src).toLowerCase();
  return textHeavyImageFragments.some((fragment) => normalized.includes(fragment.toLowerCase()));
}
