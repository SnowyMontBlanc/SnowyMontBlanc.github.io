# NekoLex Works カード追加 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ポートフォリオの Works セクションに NekoLex をリッチカード形式で追加する。

**Architecture:** `src/data/portfolio.ts` の `worksData` 型を拡張して NekoLex データを追加し、`src/components/Works.tsx` のカードレイアウトをスクリーンショット・ハイライト・カテゴリバッジ対応に更新する。既存フィールドはすべて optional のまま後方互換を維持する。

**Tech Stack:** Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4

---

## ファイルマップ

| 役割 | パス |
|---|---|
| データ定義 | `src/data/portfolio.ts` |
| Works コンポーネント | `src/components/Works.tsx` |

---

### Task 1: `worksData` 型を拡張して NekoLex データを追加する

**Files:**
- Modify: `src/data/portfolio.ts`

- [ ] **Step 1: `worksData` の型注釈と NekoLex エントリを追記する**

`src/data/portfolio.ts` の `worksData` を以下に置き換える:

```typescript
export const worksData: {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  image?: string;
  highlights?: string[];
  category?: string;
}[] = [
  {
    title: "NekoLex — 猫品種マスター",
    description: "猫を撮るだけで品種がわかる。ゲーム感覚で学べる iOS / Android アプリ。",
    category: "iOS & Android App",
    image:
      "https://raw.githubusercontent.com/SnowyMontBlanc/nekolex/main/assets/screenshots/home.png",
    highlights: [
      "Gemini 2.5 Flash で品種と信頼度を数秒で識別",
      "図鑑コレクション 20品種（発見済み/未発見を視覚的に管理）",
      "間隔反復クイズで記憶を定着（1→3→7→14→30→60日）",
      "Go プロキシ + Cloud Run でAPIキーをサーバー側に隔離",
      "GitHub Actions で lint → test → デプロイを全自動化",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Go",
      "Gemini AI",
      "Cloud Run",
      "GCS",
      "GitHub Actions",
    ],
    url: "https://github.com/SnowyMontBlanc/nekolex",
  },
];
```

- [ ] **Step 2: TypeScript のエラーがないことを確認する**

```bash
npx tsc --noEmit
```

期待出力: エラーなし（警告のみの場合は無視可）

- [ ] **Step 3: コミットする**

```bash
git add src/data/portfolio.ts
git commit -m "feat: add NekoLex to worksData with rich card fields"
```

---

### Task 2: Works コンポーネントをリッチカード対応に更新する

**Files:**
- Modify: `src/components/Works.tsx`

- [ ] **Step 1: Works.tsx を以下の内容に置き換える**

```tsx
import Image from "next/image";
import { worksData } from "@/data/portfolio";

export default function Works() {
  if (worksData.length === 0) return null;

  return (
    <section id="works" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Works</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {worksData.map((work, index) => (
            <div
              key={index}
              className="flex flex-col bg-card-bg rounded-lg border border-card-border overflow-hidden"
            >
              {work.category && (
                <div className="px-6 pt-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    {work.category}
                  </span>
                </div>
              )}

              {work.image && (
                <div className="relative h-48 mx-6 mt-3 rounded-md overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-secondary text-sm mb-4">{work.description}</p>

                {work.highlights && work.highlights.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {work.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-foreground/70 flex gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {work.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background rounded-full border border-card-border text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {work.url && (
                  <div className="flex justify-end">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: TypeScript のエラーがないことを確認する**

```bash
npx tsc --noEmit
```

期待出力: エラーなし

- [ ] **Step 3: ビルドが通ることを確認する**

```bash
npm run build
```

期待出力: `✓ Compiled successfully` （または同等の成功メッセージ）

- [ ] **Step 4: コミットする**

```bash
git add src/components/Works.tsx
git commit -m "feat: update Works component with rich card layout (image, highlights, category)"
```

---

### Task 3: 動作確認してプッシュする

**Files:** なし（確認のみ）

- [ ] **Step 1: 開発サーバーを起動して Works セクションを目視確認する**

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開き、Works セクションまでスクロールして以下を確認:
- NekoLex のスクリーンショット画像が表示される
- "iOS & Android App" バッジが表示される
- ハイライト 5項目が箇条書きで表示される
- 技術タグが表示される
- "GitHub →" リンクが表示される

- [ ] **Step 2: lint が通ることを確認する**

```bash
npm run lint
```

期待出力: エラーなし

- [ ] **Step 3: main ブランチにプッシュする**

```bash
git push origin main
```

GitHub Actions が自動で GitHub Pages へデプロイする。
