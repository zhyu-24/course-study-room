---
type: course-index
course: "信号与系统"
title: "信号与系统"
term: "2026年秋季学期"
updated: "2026-09-22"
status: draft
---

# 信号与系统

> 默认阅读入口：[课程复习室](../index.html#course=信号与系统)；下方单讲网页保留为兼容入口。


> 本文件只做导航；定义、公式与课堂要求请进入对应 Lecture Notes 或 Source Map。

## Global

- [教材目录与持久缓存](Global/Textbook_Index.md)

- [[Global/Global_Knowledge|Course Knowledge Map]]
- [[Global/Global_Source_Map|Global Source Map]]
- 教材：`Global/Raw/信号与系统_第三版_郑君里_上.pdf`（第三版，上册）
- 目前尚未提供独立教学大纲或公式表；课程总结构以教材与 L01 课件共同核验。

## Course Units

### Unit 1 — 绪论与连续时间信号基础

#### Lecture 01 — 绪论 I：课程概况、信号描述与自变量变换

- Topics：课程结构与学习方法；信号/系统基本概念；信号分类；典型信号；自变量变换
- 状态：`draft`
- [完整复习网页（v2默认入口）](Lectures/L01/Review.html)
- [讲义底稿](Lectures/L01/Lecture_Notes.md)
- [课堂回顾](Lectures/L01/Transcript_Corrected.md)
- [验收报告](Lectures/L01/QA_Report.md)
- [[Lectures/L01/Lecture_Source_Map|Source Map]]

#### Lecture 02 — 绪论 II：奇异信号、系统分类与线性时不变系统

- Topics：典型奇异信号；信号分解；系统模型与分类；因果、可逆与 BIBO 稳定；线性时不变系统
- 状态：`draft`
- [完整复习网页（默认入口）](Lectures/L02/Review.html)
- [课堂回顾](Lectures/L02/Transcript_Corrected.md)
- [完整讲义底稿](Lectures/L02/Lecture_Notes.md)
- [试点验收报告](Lectures/L02/QA_Report.md)
- [[Lectures/L02/Lecture_Source_Map|Source Map]]

### Unit 2 — 连续时间系统的时域分析

#### Lecture 03 — 经典解法、双零响应、冲激响应与卷积

- 日期：2026-09-20；课堂回顾分上下两段，相关知识衔接见讲义第6–8节。
- Topics：经典解法；起始点跳变；响应分解；冲激与阶跃响应；卷积图解、代数和微积分性质；边界项反例。
- 状态：`draft`；因果性与稳定性判据在L04继续学习。
- [完整复习网页（默认入口）](Lectures/L03/Review.html)
- [完整讲义底稿](Lectures/L03/Lecture_Notes.md)
- [课堂回顾](Lectures/L03/Transcript_Corrected.md)
- [来源、逐页覆盖与订正](Lectures/L03/Lecture_Source_Map.md)
- [验收报告](Lectures/L03/QA_Report.md)

### Unit 3 — 傅里叶分析

#### Lecture 04 — 傅里叶级数、幅相谱与有限项逼近

- 日期：2026-09-22；开头补完第二章的因果性与稳定性。
- Topics：复指数特征响应；三角与指数级数；单双边幅相谱；Parseval；对称性；矩形脉冲、带宽；有限项误差与Gibbs现象。
- 状态：`draft`；含44段课堂回顾。
- [完整复习网页](Lectures/L04/Review.html)
- [完整讲义底稿](Lectures/L04/Lecture_Notes.md)
- [课堂回顾](Lectures/L04/Transcript_Corrected.md)
- [来源、覆盖与订正](Lectures/L04/Lecture_Source_Map.md)
- [验收报告](Lectures/L04/QA_Report.md)

## Major Topics

| Topic | Primary location | Supporting locations |
|---|---|---|
| 信号与系统的分析框架 | [讲义 N01](Lectures/L01/Review.html#N01) | [来源与疑点](Lectures/L01/Review.html#sources) |
| 信号的描述与分类 | [讲义 N04](Lectures/L01/Review.html#N04) | [来源与疑点](Lectures/L01/Review.html#sources) |
| 典型连续时间信号 | [讲义 N06](Lectures/L01/Review.html#N06) | [来源与疑点](Lectures/L01/Review.html#sources) |
| 自变量变换 | [讲义 N09](Lectures/L01/Review.html#N09) | [来源与疑点](Lectures/L01/Review.html#sources) |
| 奇异信号与冲激性质 | [讲义 N03](Lectures/L02/Review.html#N03) | [课堂回顾 T07](Lectures/L02/Review.html#T07) |
| 系统分类与 LTI | [讲义 N08](Lectures/L02/Review.html#N08) | [课堂回顾 T22](Lectures/L02/Review.html#T22) |
| 经典法与双零分解 | [L03 N03](Lectures/L03/Review.html#N03)、[N06](Lectures/L03/Review.html#N06) | [RC差异](Lectures/L03/Review.html#T16) |
| 因果性与稳定性 | [L04 N02](Lectures/L04/Review.html#N02) | [课堂补讲](Lectures/L04/Review.html#T03) |
| 傅里叶级数与频谱 | [L04 N05](Lectures/L04/Review.html#N05)、[N09](Lectures/L04/Review.html#N09) | [例题N11](Lectures/L04/Review.html#N11) |
| 矩形脉冲与Gibbs | [L04 N14](Lectures/L04/Review.html#N14)、[N17](Lectures/L04/Review.html#N17) | [作业N18](Lectures/L04/Review.html#N18) |
| 冲激响应与卷积 | [L03 N08](Lectures/L03/Review.html#N08)、[N10](Lectures/L03/Review.html#N10) | [课堂回顾](Lectures/L03/Review.html#T18) |
| 卷积性质与作业 | [L03 N13](Lectures/L03/Review.html#N13)、[N15](Lectures/L03/Review.html#N15) | [作业 N16](Lectures/L03/Review.html#N16) |

## Unresolved Course-Level Issues

- [ ] 课堂课件推荐第四版（2024），当前归档教材为第三版上册。教师说明第三版通常可用、少数习题可能有差异；涉及题号、页码或新增内容时以实际版本页面复核。

## 阅读与版本

讲义采用v2.0.1的讲解型写法，课堂回顾保留授课顺序。学术状态仍为draft；来源、订正和核听进度见各讲来源记录。
