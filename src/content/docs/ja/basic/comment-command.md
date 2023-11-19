---
title: コメントコマンド
sidebar:
  label: コメントコマンド
  order: 3
---

markdown-docxは、コメント内にコマンドを入力します。

## コマンド


### docxTemplate


テンプレートファイルを指定します。

\<!-- word docxTemplate `template-file-name` -->

`template-file-name`: テンプレートファイル名を指定します。指定しない場合は、既定のテンプレートを使います。

例

\<!-- word docxTemplate sample.docx -->

### tablePrefix


使用できません。

### figurePrefix


使用できません。

### levelOffset


使用できません。

### refFormat


相互参照のフォーマットを指定します。

\<!-- word refFormat `Format` -->

`Format`: フォーマットを指定します。

- `$n`: 章番号
- `$t`: タイトル
- `$p`: ページ番号

例

\<!-- word refFormat "[[$n $t (p.$p)]]" -->

  `[[1.1 this section (p.10)]]`

### captionRefFormat


使用できません。

### useCheckBox


\<!-- word tableParam useCheckBox `Setting` -->

`Setting`:  `""`でチェックボックスをフィールドコードに変換しません。 何かを設定するとフィールドコードに変換します。

例

\<!-- word tableParam useCheckBox "" -->

何もしません。

\<!-- word tableParam useCheckBox ON -->

☑と☐ をフィールドコードに変換します。

### cols


\<!-- word tableParam cols `col1,co2,...` -->

`col1,co2,...`: 列幅を比率で設定します。

例

\<!-- word tableParam cols 4,2,2 -->

3列の表の場合、列幅を2:1:1に設定します。

### tableStyle


使用できません。

### rowMerge


\<!-- word tableParam rowMerge `merge info` -->

`merge info`: 結合する行を指定します。

例

\<!-- word tableParam rowMerge 2-3,5-6 -->

2-3行目と5-6行目を結合します。

### emptyMerge


\<!-- word tableParam emptyMerge `Setting` -->

`Setting`:  `""`で結合しません。 何かを設定すると結合します。

例

\<!-- word tableParam emptyMerge "" -->

何もしません。

\<!-- word tableParam emptyMerge On -->

行方向のみ結合します。結合したくない場合は `<!-- comment -->` を設定してください。

### tableWidth


\<!-- word tableParam tableWidth `width` -->

`width`: 幅を%で指定します。テンプレートの横幅を取得できないので、テンプレート合うように適切な値を設定します。

例

\<!-- word tableParam tableWidth 80 -->

表の幅を約80パーセントに設定します。

### tableAlign


使用できません。

### tableCaption


使用できません。

### tableCaptionId


使用できません。

### imageWidth


