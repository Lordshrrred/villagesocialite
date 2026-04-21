function normalizeInternalLinks(html: string) {
  return html
    .replace(
      /href=(["'])https?:\/\/(?:www\.)?villagesocialite\.com\/category\/([^"'?#/\s]+)\/?([^"']*)\1/gi,
      'href="/category/$2$3"',
    )
    .replace(
      /href=(["'])https?:\/\/(?:www\.)?villagesocialite\.com\/tag\/([^"'?#/\s]+)\/?([^"']*)\1/gi,
      'href="/tag/$2$3"',
    )
    .replace(
      /href=(["'])https?:\/\/(?:www\.)?villagesocialite\.com\/([^"'?#\s]+)\/?([^"']*)\1/gi,
      'href="/$2$3"',
    )
    .replace(/\s+target=(["'])_blank\1(?=[^>]*href=["']\/)/gi, "")
    .replace(/\s+rel=(["'])noopener noreferrer\1(?=[^>]*href=["']\/)/gi, "");
}

export function LegacyContent({ html }: { html: string }) {
  return (
    <div
      className="legacy-content"
      dangerouslySetInnerHTML={{
        __html: normalizeInternalLinks(html),
      }}
    />
  );
}
