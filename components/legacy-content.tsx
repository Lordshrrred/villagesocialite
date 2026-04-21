function normalizeInternalLinks(html: string) {
  return html
    .replace(/https:\/\/villagesocialite\.com\/category\/([^"'?#/\s]+)\/?/g, "/category/$1")
    .replace(/https:\/\/villagesocialite\.com\/tag\/([^"'?#/\s]+)\/?/g, "/tag/$1")
    .replace(/https:\/\/villagesocialite\.com\/([^"'?#\s]+)\/?/g, "/$1");
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
