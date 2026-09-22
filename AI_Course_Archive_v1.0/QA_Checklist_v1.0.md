# AI Course Archive — Quality Check / Verification Checklist v1.0

## 1. 使用方式

编译完成后，AI 必须逐项检查并先修复所有能基于现有证据安全修复的问题。报告只保留仍存在的问题。

严重级别：

- **Blocker**：会造成错误知识、虚假完成或无法回源。必须为 0 才能交付 `draft`。
- **Major**：明显影响完整性或学习效果。无法自动解决时必须列入人工复核。
- **Minor**：格式、措辞或非关键链接问题，不阻止使用。

最终判定：

- `PASS`：Blocker = 0，Major = 0。
- `PASS WITH REVIEW ITEMS`：Blocker = 0，存在已显式列出的 Major 或 unresolved uncertainty。
- `FAIL`：存在 Blocker，或输入覆盖不完整却无法界定影响。

## 2. 输入与覆盖

- [ ] **Blocker** 所有收到的文件都进入 Source Inventory。
- [ ] **Blocker** 明确区分“文件存在”“成功读取”“部分读取”“读取失败”。
- [ ] **Blocker** 没有把 `not-provided` 的来源写成已读取或据此生成教师口头内容、板书推导等独有信息。
- [ ] **Major** 页数、时长、图片数量或可用范围已记录。
- [ ] **Major** 常见来源类型已记录 availability；`not-provided` 的影响已说明但未被当作自动失败。
- [ ] **Major** transcript/录音、PPT、板书之间建立了足以核验关键内容的对应。
- [ ] **Major** 飞书妙记导出的本地 TXT/SRT 保留了可用时间戳；有说话人信息时也已保留。
- [ ] **Major** 已提供原始录音时，录音与转写稿一同保存在该讲次 `Raw/`。

## 3. Lecture Notes 内容完整性

- [ ] **Blocker** 所有关键公式的符号、上下标、正负号、边界和条件均有可靠证据，或明确标 `[?]`。
- [ ] **Major** 本节重要定义及适用条件无明显遗漏。
- [ ] **Major** 主要定理/结论及成立条件无明显遗漏。
- [ ] **Major** 关键推导保留起点、非显然步骤、依据和终点，没有错误简化。
- [ ] **Major** 课堂主要例题已收录，或明确记录未收录原因。
- [ ] **Major** 例题保留题设、方法、关键计算、结果状态和意义。
- [ ] **Major** 教师明确解释、纠错、常见错误和考试强调已保留。
- [ ] **Minor** Snapshot 与正文一致，没有出现正文未支持的结论。
- [ ] **Minor** Key Takeaways 是可检验的学习结果，不是空泛总结。

## 4. 来源与可追溯性

- [ ] **Blocker** 每个重要定义、关键公式、主要推导、课堂例题和教师强调至少有一个可复现定位符。
- [ ] **Blocker** 没有虚构页码、时间戳、章节、文件内容或“多来源一致”。
- [ ] **Major** Notes 使用的每个 `Sx/Gx` 都能在相应 Source Map 找到。
- [ ] **Major** Knowledge → Source Mapping 能从知识项直接定位到原始资料。
- [ ] **Major** Source Map 只写索引、质量和冲突，没有膨胀为第二份笔记。
- [ ] **Major** Source Map 使用的转写时间戳，在提供原始录音时能回到本地音频片段。
- [ ] **Blocker** 没有仅依赖不可访问的飞书页面或共享链接来生成课程事实。
- [ ] **Minor** 定位格式一致，PDF 页与印刷页差异已说明。

## 5. AI 污染检查

- [ ] **Blocker** 没有把无来源的外部知识写成课程 FACT。
- [ ] **Blocker** 没有把 AI 推测写成教师意图、考试重点或课堂例题。
- [ ] **Blocker** 没有静默解决可能的教师口误或真实来源冲突。
- [ ] **Major** AI 新增的代数步骤、分类或关系均标记 `Derived` 且可由来源推出。
- [ ] **Major** 对不确定符号、条件、单位和结果没有模式补全或猜测。

## 6. ASR、冲突和缺失

- [ ] **Blocker** 会改变数学含义的 ASR 内容已由更可靠来源确认，或标为不确定。
- [ ] **Major** 重要 ASR 错误保留原始定位和建议复听时间段。
- [ ] **Major** 来源冲突逐项并列，并说明当前处理与理由。
- [ ] **Minor** 不影响专业概念、公式、推导、例题结果或考试结论的小错误已降级为简短来源备注，没有进入课程级待办或反复提醒用户。
- [ ] **Major** 板书不可读、录音听不清、PPT 缺页等问题说明了影响范围。
- [ ] **Major** 所有 `[?]` 和 `[!]` 都集中出现在 Open Questions / Source Quality 中，且给出下一步核验动作。

## 7. 结构与低维护负担

- [ ] **Major** Notes 按知识逻辑组织，而非 transcript 时间顺序。
- [ ] **Major** Course Index 仍是轻量导航，没有长正文。
- [ ] **Major** Global Knowledge 仍是结构地图，没有变成教材摘要。
- [ ] **Major** 没有创建五类标准文件之外的新维护对象。
- [ ] **Minor** metadata 只使用模板规定字段，未知值没有猜测。
- [ ] **Minor** 未知的授课日期或学期已直接省略，没有为可选 metadata 增加用户操作负担。
- [ ] **Minor** wikilink 指向实际或计划中的稳定路径，没有为追求图谱密度强行加链接。
- [ ] **Minor** 重复内容已合并；Notes 与 Source Map 职责清楚。

## 8. 全局文件专项检查

- [ ] **Blocker** `Topic → Source Lookup` 的优先来源均有真实、可复现位置。
- [ ] **Major** 课程单元和 lecture 列表以 syllabus/正式安排或已发生课程为依据。
- [ ] **Major** 主要 topic 的前置、后续和课程位置有来源或 `Derived` 标记。
- [ ] **Major** 教材版本和页码体系明确，未混用其他版本页码。
- [ ] **Minor** 新增 lecture 只触发必要的 Index 更新；Global Knowledge 未被无意义重写。

## 9. 自动 QA 报告模板

```markdown
# Compilation QA Report

Result: PASS | PASS WITH REVIEW ITEMS | FAIL

## Coverage
- Sources received: <N>
- Fully read: <N>
- Partially read: <N>
- Failed / missing: <N>
- Not provided (allowed input scope): <N>

## Remaining issues

### Blocker
- None | <问题、影响、定位、所需动作>

### Major
- None | <问题、影响、定位、所需动作>

### Unresolved uncertainty
- None | <对应 Notes / Source Map 条目>

### Minor
- None | <问题>

## Human quick review — maximum 5 items
1. <最值得人看的公式/冲突/录音片段及定位>
```

## 10. 人工快速复核（目标 3–5 分钟）

人不需要通读全部原始资料。优先检查：

1. QA 报告中的所有 Blocker（正常应为 0）和 Major。
2. Notes §6 与 Source Map §4–5 的全部 `[?]`、`[!]`。
3. 本节最关键的 1–3 个公式及条件，对照 PPT/板书。
4. 教师明确纠错或考试强调，对照录音时间段。
5. 一条随机 Knowledge → Source 路径，确认确实能回到原文。

通过后把相关文档状态改为 `reviewed`。若抽查发现系统性问题，保持 `draft` 并重新编译受影响部分。
