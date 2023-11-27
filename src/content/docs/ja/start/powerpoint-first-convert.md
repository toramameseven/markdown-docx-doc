---
title: 初めてのコンバート(PowerPoint)
sidebar:
  label: 初めてのコンバート(PowerPoint)
  order: 3
---

:::note[Note]
`0.0.4` での機能です。
:::

## markdownファイルを作成する


次のファイルを作成します。

```
# これがプレゼンテーションタイトル

## これがスライドタイトル1

ここが本文

## これがスライドタイトル2

<!-- pptx position 10,20,90,30 -->

* Item1
* Item2
* Item3

<!-- pptx position 10,60,90,30 -->

* Item1
* Item2
* Item3



```

## コンバートする


vscodeの編集画面で、右クリック、`Convert to Pptx` を選択します。

markdownファイルのあるフォルダに、 pptxファイルができます。

