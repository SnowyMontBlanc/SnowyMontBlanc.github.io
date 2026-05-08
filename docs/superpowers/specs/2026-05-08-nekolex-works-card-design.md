# NekoLex を Works セクションに追加する設計書

**日付**: 2026-05-08  
**対象リポジトリ**: `SnowyMontBlanc/SnowyMontBlanc.github.io`

---

## 概要

現在空の `worksData` に NekoLex を追加し、Works セクションのカードをリッチ表示に拡張する。

---

## 変更対象ファイル

| ファイル | 変更内容 |
|---|---|
| `src/data/portfolio.ts` | `worksData` の型拡張 + NekoLex データ追加 |
| `src/components/Works.tsx` | リッチカード対応にコンポーネントを更新 |

---

## データ設計

### 型拡張（`portfolio.ts`）

`worksData` の各要素に以下の optional フィールドを追加する:

```typescript
image?: string;        // スクリーンショット画像 URL
highlights?: string[]; // 箇条書きで表示する特徴・技術的判断
category?: string;     // カード上部に表示するカテゴリバッジ
```

既存フィールド（`title`, `description`, `technologies`, `url`）はそのまま維持し、後方互換を保つ。

### NekoLex エントリ

```typescript
{
  title: "NekoLex — 猫品種マスター",
  description: "猫を撮るだけで品種がわかる。ゲーム感覚で学べる iOS / Android アプリ。",
  category: "iOS & Android App",
  image: "https://raw.githubusercontent.com/SnowyMontBlanc/nekolex/main/assets/screenshots/home.png",
  highlights: [
    "Gemini 2.5 Flash で品種と信頼度を数秒で識別",
    "図鑑コレクション 20品種（発見済み/未発見を視覚的に管理）",
    "間隔反復クイズで記憶を定着（1→3→7→14→30→60日）",
    "Go プロキシ + Cloud Run でAPIキーをサーバー側に隔離",
    "GitHub Actions で lint → test → デプロイを全自動化",
  ],
  technologies: ["React Native", "Expo", "TypeScript", "Go", "Gemini AI", "Cloud Run", "GCS", "GitHub Actions"],
  url: "https://github.com/SnowyMontBlanc/nekolex",
}
```

スクリーンショットは NekoLex の public リポジトリの raw URL を参照するため、ポートフォリオリポジトリへの画像コピーは不要。

---

## コンポーネント設計

### Works.tsx カードレイアウト（上から順）

1. **category バッジ**（`category` がある場合のみ）
   - 左上に小さなバッジとして表示
2. **スクリーンショット画像**（`image` がある場合のみ）
   - `object-cover` + 固定高さ（例: `h-48`）で表示
   - `alt` はタイトル文字列
3. **タイトル** + **説明文**
4. **highlights リスト**（`highlights` がある場合のみ）
   - `•` 付きの箇条書き、小フォント
5. **technologies タグ群**
   - 既存スタイル（`bg-background rounded-full border`）を継続
6. **GitHub リンク**（`url` がある場合のみ）
   - 右寄せで "GitHub →" テキストリンク

### 後方互換

`image`, `highlights`, `category` はすべて optional。値がない場合はそのブロックを描画しない。将来の作品追加で既存カードが壊れない。

---

## 対象外

- 専用詳細ページ（`/works/nekolex` ルートの追加）
- Skills セクションへの技術追加（React Native, Go など）
- 他の worksData エントリの追加
