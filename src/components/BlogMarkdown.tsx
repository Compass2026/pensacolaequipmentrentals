import { parseMarkdown, type MdInline } from "@/lib/blog-markdown";

/* Renders an article's restricted Markdown (src/lib/blog-markdown.ts) as text
   elements: no HTML passes through and links are http(s) only. */
function Inline({ parts }: { parts: MdInline[] }) {
  return (
    <>
      {parts.map((p, i) =>
        p.t === "link" ? (
          <a key={i} href={p.href} className="font-semibold text-brand-blue underline underline-offset-4 hover:text-brand-red">
            {p.v}
          </a>
        ) : p.t === "strong" ? (
          <strong key={i} className="font-bold text-brand-black">{p.v}</strong>
        ) : p.t === "em" ? (
          <em key={i}>{p.v}</em>
        ) : (
          <span key={i}>{p.v}</span>
        )
      )}
    </>
  );
}

export function BlogMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-6 text-[1.0625rem] leading-relaxed text-gray-700 [overflow-wrap:anywhere]" data-blog-body>
      {parseMarkdown(markdown).map((b, i) => {
        if (!("items" in b)) {
          if (b.t === "h2") return <h2 key={i} className="pt-6 font-heading text-2xl font-bold text-brand-black sm:text-3xl"><Inline parts={b.inline} /></h2>;
          if (b.t === "h3") return <h3 key={i} className="pt-2 font-heading text-xl font-bold text-brand-black"><Inline parts={b.inline} /></h3>;
          return <p key={i}><Inline parts={b.inline} /></p>;
        }
        const items = b.items.map((it, j) => <li key={j} className="pl-1"><Inline parts={it} /></li>);
        return b.t === "ul" ? (
          <ul key={i} className="list-disc space-y-2 pl-6 marker:text-brand-red">{items}</ul>
        ) : (
          <ol key={i} className="list-decimal space-y-2 pl-6 marker:font-bold marker:text-brand-red">{items}</ol>
        );
      })}
    </div>
  );
}
