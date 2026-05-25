# パートナー専用LPの使い方

このLPは、見た目は同じまま公式LINEのCTA先だけをパートナーごとに差し替えられます。

本番ドメインは `https://lp.profiling-aisou.com/` を想定しています。

## パートナーを追加する

`partners.js` の `PARTNER_LINE_LINKS` に、パートナーごとの管理コードとLINE URLを追加します。

URLに名前が出ないように、コードは `p001`、`p002` のような連番、または `p7k3a9` のようなランダムIDで管理します。パートナー名は公開フォルダ内のファイルには書かず、別の管理表で控えてください。

```js
p002: "https://lin.ee/xxxxx",
```

## 配布URL

パートナーコードをURLの末尾に付けて配布します。

```text
https://lp.profiling-aisou.com/?p=p002
```

指定がない場合、または存在しないコードの場合は、CTAは無効になります。

## 管理表の例

公開フォルダの外、または非公開のスプレッドシートで以下のように管理します。

```text
p001 / パートナーA / https://lin.ee/xxxxx / 配布日
p002 / パートナーB / https://lin.ee/yyyyy / 配布日
```
