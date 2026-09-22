---
type: lecture-source-map
course: "<课程代码或简称>"
lecture: "<L01>"
# date: "<YYYY-MM-DD，可选；未知时删除本行>"
status: draft
---

# Lecture <XX> — Source Map

> 只记录来源范围、知识定位、质量和冲突。详细教学内容写入 `Lecture_Notes.md`。

## 1. Source Availability

| Expected source | Status | File / note | Effect on coverage |
|---|---|---|---|
| Slides | `provided-readable` | `Raw/<slides.pdf>` | <覆盖范围> |
| Recording | `not-provided` | 本次未提供 | 无法核验教师口头补充、语气和即时纠错 |
| Transcript | `not-provided` | 本次未提供 | 无法建立课堂时间线和检索口头讲解 |
| Board images | `not-provided` | 本次未提供 | 无法覆盖课件外的板书推导 |
| Textbook / handout | `not-provided` | 本次未提供 | 无法用课程全局资料交叉核验 |

允许的状态：`provided-readable`、`provided-partial`、`provided-unreadable`、`not-provided`、`not-applicable`。

`not-provided` 是本次输入范围，不自动构成失败；只有 AI 声称覆盖了该来源独有的内容，或用户明确表示文件已提供却未进入处理，才构成覆盖问题。

## 2. Source Inventory

| ID | File | Type | Extent | Quality notes |
|---|---|---|---|---|
| S1 | `Raw/<slides.pdf>` | slides | <N pages> | <清晰度、是否缺页>
| S2 | `Raw/<transcript.txt>` | transcript | <duration / lines> | <ASR 语言、时间戳情况>
| S3 | `Raw/<board_01.jpg>` | board image | 1 image | <清晰度、遮挡>
| S4 | `Raw/<recording.mp3>` | audio | <HH:MM:SS> | <音质、缺失片段>

### Alignment Notes

- 录音起点与 transcript：<一致 / 偏移约 N 秒 / unknown>
- PPT 切页与时间：<若能识别，记录关键切页；否则写 unknown>
- 板书顺序：<文件顺序是否等于课堂顺序>

## 3. Source Segments

### S1 — <slides.pdf>

| Location | Topic | Importance | Related notes |
|---|---|---|---|
| PDF p.1–4 | <复习/主题> | Low / Medium / High | Notes §<编号> |

### S2 — <transcript.txt>

| Time / lines | Topic | Reliability | Related sources |
|---|---|---|---|
| 00:00:00–00:08:22 | <主题> | High / Medium / Low | S1 PDF p.1–4 |

### S3 — <board_01.jpg>

- 内容：<公式、图、推导或例题>
- 对应：Notes §<编号>；S1 PDF p.N；S2 <时间段>
- 可读性：<完整 / 局部模糊 / 无法确认>

<!-- 录音只需索引 transcript 缺失、冲突或必须听原音的片段，不必重复做全量时间表。 -->

## 4. Knowledge → Source Mapping

### <Knowledge Item>

- Notes：§<编号与标题>
- Primary：`S1 PDF p.N–M`
- Supporting：`S3 board_01`；`S2 00:10:20–00:13:05`
- Global：`G1 Ch.X §X.Y, PDF p.N`
- Verification note：<优先核验哪一来源及原因>

<!-- 每个重要定义、关键公式、主要推导、课堂例题和教师强调各应至少有一条映射。 -->

## 5. Source Quality / Conflicts

### Confirmed

- <内容> — <两个或以上相互印证的定位符>。

### ASR / Audio Issues

- [?] `S2 <时间段或行号>`：<疑似识别错误>；建议听 `S4 <时间段>`。

### Missing / Illegible

- [?] <缺页、板书不清或录音缺失> — 影响 Notes §<编号>。

### Conflict or Possible Slip

- [!] <主题>
  - 来源 A：<原表述与定位>
  - 来源 B：<原表述与定位>
  - 是否有明确课堂修正：<有，给定位 / 无 / unknown>
  - 当前记录方式：<并列保留 / 采用明确修正版 / unresolved>

### Minor Source Notes

- <不影响专业知识的背景统计、行政信息或排版小错误> — <定位>；简要说明即可，不列入人工复核。

## 6. Coverage Gaps

- [ ] <Notes 中仍缺可靠来源支撑的内容，或某个原始来源尚未成功读取>
- 若无：`None found after inventory and mapping.`
