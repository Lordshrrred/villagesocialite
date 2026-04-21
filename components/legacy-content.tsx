export function LegacyContent({ html }: { html: string }) {
  return (
    <div
      className="legacy-content"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
