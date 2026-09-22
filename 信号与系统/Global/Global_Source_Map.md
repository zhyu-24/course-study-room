---
type: global-source-map
course: "信号与系统"
updated: "2026-09-22"
status: draft
---

# 信号与系统 — Global Source Map

> 本文件以已归档的第三版上册为全局教材来源。它与课件推荐的第四版不同，涉及题号、页码或新增内容时必须核对实际版本页面。

## 1. Source Inventory

| ID | File | Type | Authority | Scope | Locator | Notes |
| G1 | `Global/Raw/信号与系统_第三版_郑君里_上.pdf` | textbook | High | Ch.1–6、附录与习题 | PDF p.N / printed p.M | 第三版上册；扫描型 PDF，448 页；与课件推荐第四版存在版本差异 |

### Locator Notes

- 本书正文第一章印刷 p.1 对应 `G1 PDF p.17`；本 Source Map 同时写 PDF 页和印刷页。
- 本书为扫描型 PDF，正文不能稳定全文检索；页码、标题、公式和题目已通过视觉阅读核验。

## 2. Topic → Source Lookup

### G1 — 《信号与系统（第三版，上册）》

| Location | Topic | Related lectures | Importance |
|---|---|---|---|
| Ch.1 §1.1–§1.3, PDF p.17–30 / printed p.1–14 | 信号与系统、描述分类、信号运算 | L01 | High |
| Ch.1 §1.4–§1.8, PDF p.31–55 / printed p.15–39 | 奇异信号、分解、系统分类、LTI 总览 | L02 起 | High |
| Ch.2, PDF p.61–108 / printed p.45–92 | 连续时间系统的时域分析 | L03；非整章已授 | High |
| Ch.3, PDF p.109–199 / printed p.93–183 | 傅里叶变换 | 后续 | High |
| Ch.4, PDF p.200–292 / printed p.184–276 | 拉普拉斯变换与 s 域分析 | 后续 | High |
| Ch.5, PDF p.293–347 / printed p.277–331 | 傅里叶变换应用、滤波、调制与抽样 | 后续 | High |
| Ch.6, PDF p.348–403 / printed p.332–387 | 信号的矢量空间分析 | 后续 | Medium |

## 3. Topic → Source Lookup

### 课程整体结构

1. `G1 Ch.1 §1.8, PDF p.53–55 / printed p.37–39` — 教材的完整框架图与讲授顺序。
2. [L01-S1 / L01-S2](../Lectures/L01/Lecture_Source_Map.md) — 本学期教师的实际教学安排和强调。

**Coverage note**

教材的章节与基础习题可回到 G1；评分和本学期学习要求以 L01 为准。下册和正式教学大纲仍缺失。

### L01：绪论 I

1. `G1 Ch.1 §1.1–§1.3, PDF p.17–30 / printed p.1–14` — 概念、分类和信号运算的教材依据。
2. `G1 Exercises, PDF p.56–58 / printed p.40–42` — L01 指定的 1-3、1-4、1-5、1-10、1-12 所在页。
3. [L01-S1 / L01-S2](../Lectures/L01/Lecture_Source_Map.md) — 课堂采用的表述和教师强调。

## 4. Source Quality and Missing Inputs

- [!] 版本差异：`G1` 是第三版上册；`L01-S1 PDF p.5` 推荐第四版（2024）。教师在 `L01-S2 00:00–01:07` 说明第三版通常可用、个别习题可能不同。
  - 当前处理：概念、公式和图示优先以实际 G1 页面核验；作业题号与新增内容逐项核对，不假定跨版本完全一致。
- [?] 未提供下册、教学大纲或独立课程日历。


## v2 教材入口

[完整目录级导航与当前精读缓存](Textbook_Index.md)。L02 实际使用第三版 PDF 31–60；习题原页 59–60，不要求用户重复提供已归档题面。缓存以原件 SHA256 隔离版本，各页阅读核验状态见 manifest。L01 原记录保留。

## L03：时域分析与卷积（2026-09-22归档）

[L03来源与订正](../Lectures/L03/Lecture_Source_Map.md)登记5份新增素材。两段转写共94个发言块，整理为44段；59页课件全部登记去向。原音未核听，断点知识由课件补充，不虚构中间口述。

本轮教材新增渲染PDF66–95、102–108；精读76、80、92、102–106，其他新页仅缓存。2-18按课件p.58更正激励为2e^(−3t)u(t)；第三版PDF105原题为u(t−1)。2-19(b)图在105、题干在106，已核页。第四版具体题面尚未验证。
