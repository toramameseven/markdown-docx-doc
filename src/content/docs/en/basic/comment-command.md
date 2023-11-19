---
title: Comment command
sidebar:
  label: Comment command
  order: 3
---

markdown-docx enters commands within comments.

## command


### docxTemplate


Specify the template file.

\<!-- word docxTemplate `template-file-name` -->

`template-file-name`: Specify the template file name. If not specified, the default template will be used.

example

\<!-- word docxTemplate sample.docx -->

### tablePrefix


It can not be used.

### figurePrefix


It can not be used.

### levelOffset


It can not be used.

### refFormat


Specifies the format of the cross-reference.

\<!-- word refFormat `Format` -->

`Format`: Specify the format.

- `$n`: Chapter number
- `$t`: Title
- `$p`: Page number

example

\<!-- word refFormat "[[$n $t (p.$p)]]" -->

`[[1.1 this section (p.10)]]`

### captionRefFormat


It can not be used.

### useCheckBox


\<!-- word tableParam useCheckBox `Setting` -->

`Setting`: `""` does not convert checkboxes to field codes. If you set something, it will be converted to field code.

example

\<!-- word tableParam useCheckBox "" -->

I won't do anything.

\<!-- word tableParam useCheckBox ON -->

Convert ☑ and ☐ to field codes.

### cols


\<!-- word tableParam cols `col1,co2,...` -->

`col1,co2,...`: Set column width as a ratio.

example

\<!-- word tableParam cols 4,2,2 -->

For a 3-column table, set the column widths to 2:1:1.

### tableStyle


It can not be used.

### rowMerge


\<!-- word tableParam rowMerge `merge info` -->

`merge info`: Specify the lines to be merged.

example

\<!-- word tableParam rowMerge 2-3,5-6 -->

Combine lines 2-3 and lines 5-6.

### emptyMerge


\<!-- word tableParam emptyMerge `Setting` -->

`Setting`: Do not combine with `""`. If you set something, it will combine.

example

\<!-- word tableParam emptyMerge "" -->

I won't do anything.

\<!-- word tableParam emptyMerge On -->

Join only in the row direction. If you do not want to combine, please set `<!-- comment -->`.

### tableWidth


\<!-- word tableParam tableWidth `width` -->

`width`: Specify the width in %. Since the width of the template cannot be obtained, set an appropriate value to fit the template.

example

\<!-- word tableParam tableWidth 80 -->

Set the table width to approximately 80 percent.

### tableAlign


It can not be used.

### tableCaption


It can not be used.

### tableCaptionId


It can not be used.

### imageWidth


