---
type: global-source-map
course: "核工程原理"
updated: "2026-09-19"
status: draft
---

# 核工程原理 — Global Source Map

> 已收到教师自编主教材与一组参考教材。全局知识、章节对应与后续答疑均遵循：**G1 主教材优先；G2 参考教材只作补充、解释与交叉核对；发生差异时不静默合并，明确记录。** Lecture 01/02 的课堂材料仍分别引用 `L01-Sx` / `L02-Sx`，不被教材替代。

## 1. Source Availability

| Expected source | Status | Note | Effect on coverage |
|---|---|---|---|
| Teacher-authored textbook | `provided-readable` | `Raw/核工程原理 第14稿.pdf`（487 PDF 页，未加密） | 课程知识的全局首要依据；可建立章节与页码定位 |
| Reference textbooks | `provided-partial` | 已解压至 `Raw/Reference_Textbooks/`；6 份 PDF 的文件、页数、加密状态和校验值已核验，内容尚未逐页阅读 | 仅作补充与交叉核对；当前可按书名定位，尚不引用其具体内容页码 |
| Syllabus / course outline | `not-provided` | 第一节课课件含部分课程安排 | 完整考核规则和教学日历无法确认 |
| Official handout | `not-provided` | 本次未提供 | 暂无影响；若后续存在则增量加入 |
| Formula sheet | `not-provided` | 本次未提供 | 第一节课没有公式推导，当前影响较小 |

## 2. Source Inventory

| ID | File | Role | Extent / quality | SHA-256 |
|---|---|---|---|---|
| G1 | `Raw/核工程原理 第14稿.pdf` | 教师自编主教材 | 487 PDF 页；Microsoft Word LTSC 生成；未加密；封面、内容简介与目录已视觉核验 | `D07253FA99D2864AC5C8748A5FFA9F6F8AA8A50DC4E728D1DA52B8F85D84A537` |
| G2 | `Raw/核工程原理参考教材.zip` | 参考教材集合 | 158,884,853 bytes；目录可读，内含 6 份 PDF；未对内含书逐页作事实核验 | `290D3C54191F9283BB39C605B6F9F9027FBA45135D9367DE0B9E7D8BB6977F96` |

G2 已解压至 `Raw/Reference_Textbooks/`。内含书目如下；这些文件只完成技术可读性核验，不能据此宣称其内容已用于课程事实。

| File | Pages | Encryption | SHA-256 |
|---|---:|---|---|
| `中文拉马什1.pdf` | 180 | no | `43F0252CC4BA471488D4754A1780AE0323A274CA15A00514BDF3E46087774ED1` |
| `中文拉马什2.pdf` | 266 | no | `AADA13092E519AE2C67E188B35DE6441BD31FA1B5A42FB534F18DC70A91AACD6` |
| `堆物理教材_佐治亚.pdf` | 735 | RC4; print/copy permitted | `B1D2A751DA143811F7A8B0FD5CDE9B44456D2099F37A5A7A6B3E51E21FDE34E2` |
| `核反应堆分析（杜达）.pdf` | 657 | no | `7EBAD77B422199C5EE3856BBCBB98D22B447EB43DD0668F5FECBD4842CC5CAA0` |
| `核反应堆工程.pdf` | 614 | no | `16FDF0A989597320C6C5786764985809E72347EE0D42739534350D3CF7DE5ABE` |
| `核反应堆物理分析_谢仲生.pdf` | 320 | no | `B3F94598998B3CE524C2BFB41E2BC9E8A2E406B8811B6D816E1E8CD528DC18E0` |

## 3. Declared References Not Yet Archived

以下仅是课件列出的书目，不代表已读取或已核验：

- 谢仲生、曹良志、张少泓：《核反应堆物理分析》（第五版），西安交通大学出版社，2020.7。`[L01-S1 PDF p.12]`
- 王侃、俞冀阳、施工、李泽光：《核工程原理》（教材草稿）。`[L01-S1 PDF p.12]`
- J. R. Lamarsh：《核反应堆物理导论》。`[L01-S1 PDF p.12]`
- Weston M. Stacey, *Nuclear Reactor Physics*. `[L01-S1 PDF p.12]`
- J. J. Duderstadt & L. J. Hamilton, *Nuclear Reactor Analysis*. `[L01-S1 PDF p.12]`
- Glasstone & Sesonske, *Nuclear Reactor Engineering*. `[L01-S1 PDF p.12]`

## 4. Topic → Source Lookup

### 教师自编主教材的结构入口

1. `G1 PDF p.2` — 内容简介：全书由原子核物理基础、反应堆理论、热工水力、控制、安全、设计及反应堆类型与发展等主题构成。
2. `G1 PDF p.6–10 / printed p.6–10` — 目录：第 1–12 章及各章起始页；用于后续教材章节映射。

| Chapter | Title | Printed start page |
|---|---|---:|
| 1 | 原子核物理基础 | 19 |
| 2 | 中子的核反应截面 | 47 |
| 3 | 中子扩散模型与输运方程 | 80 |
| 4 | 中子的慢化与能谱 | 114 |
| 5 | 核反应堆临界理论 | 161 |
| 6 | 反应堆燃耗与中毒 | 210 |
| 7 | 反应堆动力学基础 | 244 |
| 8 | 反应性变化与控制 | 262 |
| 9 | 核反应堆堆芯设计 | 276 |
| 10 | 反应堆安全 | 356 |
| 11 | 高性能计算在核工程领域的应用 | 375 |
| 12 | 反应堆堆型与发展 | 406 |

### 课程定位与安排

1. `L01-S1 PDF p.3–17` — 课堂的课程定义、定位、教学计划、教材和学习要求。
2. `G1 PDF p.2–4` — 主教材的编写对象、目标和与核工程设计的关系；仅作为教材定位，不替代课堂安排。

### 核反应堆与反应堆物理

1. `G1 Ch.1–8` — 主教材中的基础理论至反应性控制；具体知识项须再定位到章节与页码。
2. `L01-S1 PDF p.19–21, p.33–38` — 课堂概念、学科对象和英文定义材料。

### 压水堆基本结构与发电流程

1. `G1 Ch.12, printed p.413–445` — 压水堆核电厂与一回路系统等教材入口。
2. `L01-S1 PDF p.22–32` — 课堂流程图、结构图和工程实例。

### 反应堆分类、用途与发展

1. `G1 Ch.12, printed p.406–452` — 反应堆堆型、压水堆、重水堆和先进反应堆的教材入口。
2. `L01-S1 PDF p.39–76` — 课堂分类、用途、历史和发展材料。

### 典型压水堆参数

1. `L01-S1 PDF p.77–78` — 当前唯一来源，给出尺寸、材料、功率、温压和寿命范围。

## 5. Source Quality and Conflicts

### Confirmed within available material

- G1 第 1 章（printed p.19–46）已逐页视觉核验，章节、公式、图表、例题、习题和参考文献均可读；该章可作为后续相关知识项的首要教材来源。

### Ambiguous / Missing

- [?] G2 各书虽已解压并完成技术元数据核验，但尚未逐页阅读；在需要使用其中事实前，先核验目标页并记录其版本和页码。
- [?] L01 课件书目与 G2 内文件是否为同一版本尚未逐本比对。

### Minor source note

- `L01-S1 PDF p.42–43` 对无年份的“当前运行核电机组数量”分别写为 57 台和 55 台，属于背景统计页的小更新不一致。它不影响本课程的专业概念；使用此类数据时按后续带明确年份的页面为准即可，无需列为课程待办。
