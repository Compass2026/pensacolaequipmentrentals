// Restricted Markdown shared with the CRM review renderer. React escapes text.
export type MdInline = { t: "text" | "strong" | "em"; v: string } | { t: "link"; v: string; href: string };
export type MdBlock =
  | { t: "h2" | "h3"; inline: MdInline[] }
  | { t: "p"; inline: MdInline[] }
  | { t: "ul" | "ol"; items: MdInline[][] };

export function parseInline(s: string): MdInline[] {
  const out: MdInline[] = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  for (const m of s.matchAll(re)) {
    if (m.index! > last) out.push({ t: "text", v: s.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: "link", v: m[1], href: m[2] });
    else if (m[3] !== undefined) out.push({ t: "strong", v: m[3] });
    else out.push({ t: "em", v: m[4] });
    last = m.index! + m[0].length;
  }
  if (last < s.length) out.push({ t: "text", v: s.slice(last) });
  return out;
}

export function parseMarkdown(md: string): MdBlock[] {
  const blocks: MdBlock[] = [];
  let para: string[] = [];
  let list: { t: "ul" | "ol"; items: MdInline[][] } | null = null;
  const flush = () => {
    if (para.length) blocks.push({ t: "p", inline: parseInline(para.join(" ")) });
    para = [];
    if (list) blocks.push(list);
    list = null;
  };
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    const ul = line.match(/^[-*]\s+(.*)$/);
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    if (!line) { flush(); continue; }
    if (h) { flush(); blocks.push({ t: h[1].length === 2 ? "h2" : "h3", inline: parseInline(h[2]) }); continue; }
    if (ul || ol) {
      if (para.length) { blocks.push({ t: "p", inline: parseInline(para.join(" ")) }); para = []; }
      const kind = ul ? "ul" : "ol";
      if (!list || list.t !== kind) { if (list) blocks.push(list); list = { t: kind, items: [] }; }
      list.items.push(parseInline((ul ?? ol)![1]));
      continue;
    }
    if (list) { blocks.push(list); list = null; }
    para.push(line);
  }
  flush();
  return blocks;
}
