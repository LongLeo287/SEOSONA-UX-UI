# Typography line-break guardrails (widows / orphans / runts / rivers)

Small line-break defects make an otherwise-polished landing page read as cheap. AI-generated copy and
layout tools do **not** auto-fix these — they need explicit CSS and a human eye. This is heavier for
**Vietnamese**: single-syllable words (each token is short) orphan far more easily than long English
words, so a VN line often drops one lone syllable onto its own line.

Source (reference, not vendored): voquoccuong.com — "Rớt chữ rớt dòng: lỗi typography AI không tự sửa
cho bạn" (Võ Quốc Cường, 2026). Rules below are the factual techniques, restated as a checklist.

## The defects

- **Widow / orphan** — a lone line (or a single word) split from the rest of its paragraph.
- **Runt** — a paragraph whose last line is a single short word/character.
- **River** — vertical channels of white space lining up down a justified block.

## CSS guardrails (apply by default on generated pages)

- **Never full-justify body text.** Use `text-align: left` — justification is what manufactures rivers
  and stretched word-spacing.
- **Headings:** `text-wrap: balance;` — evens the line lengths of short, multi-line headings.
- **Paragraphs:** `text-wrap: pretty;` — the browser avoids leaving a runt on the last line.
- **Keep critical phrases unbroken** with a non-breaking space: `50&nbsp;triệu`, `SEOSONA&nbsp;OS`,
  brand + number, unit + value. In VN, bind classifier + noun where a break would read wrong.
- **Measure 45–75 characters per line** (`max-width` in `ch`), the readable range that also reduces
  orphan frequency.

## The rule that can't be automated

Resize the viewport and **look** — mobile, tablet, desktop. `balance`/`pretty` reduce but do not
eliminate bad breaks; the final pass is human visual inspection at real breakpoints. Bake the CSS in
automatically; flag the visual check as a required manual QA step, never claim it's auto-solved.
