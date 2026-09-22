---
type: global-source-map
course: "<课程代码或简称>"
updated: "<YYYY-MM-DD>"
status: draft
---

# <课程名称> — Global Source Map

> 本文件只回答“去哪里核验”，不写第二份课程正文。

## 1. Source Inventory

| ID | File | Type | Authority | Scope | Locator | Notes |
|---|---|---|---|---|---|---|
| G1 | `Global/Raw/<textbook.pdf>` | textbook | High | 全课程 | PDF page / printed page | <版本、页码偏移等> |
| G2 | `Global/Raw/<syllabus.pdf>` | syllabus | High | 课程安排 | PDF page | <学期/版本> |
| G3 | `Global/Raw/<handout.pdf>` | official handout | High | <范围> | PDF page / section | <说明> |
| G4 | `Global/Raw/<formula_sheet.pdf>` | official formula sheet | High | <范围> | PDF page | <说明> |

### Locator Notes

- PDF 页码统一指：`PDF p.N`；若印刷页码不同，写成 `PDF p.N / printed p.M`。
- 章节定位统一写成：`Ch.X §X.Y`。
- 扫描件若无页码，从第一页起人工编号为 `scan p.1`。

## 2. Source Structure

### G1 — <教材名与版本>

| Location | Topic | Related lectures | Importance |
|---|---|---|---|
| Ch.1 / PDF p.1–40 | <主题> | L01–L02 | High |

### G2 — <Syllabus 名称>

| Location | Content | Effect |
|---|---|---|
| PDF p.1 | <考核/进度/范围> | <它决定什么> |

<!-- 为实际存在的全局资料添加简短结构，不要求逐页索引。 -->

## 3. Topic → Source Lookup

### <Topic Name>

**Preferred verification order**

1. `G1 Ch.X §X.Y, PDF p.N–M` — <为什么优先>
2. `G3 PDF p.N` — <补充作用>
3. [[Lectures/Lxx/Lecture_Source_Map#知识点标题|Lecture XX sources]]

**Coverage note**

<这些来源各自覆盖定义、推导、例题还是考试边界；没有则写 unknown。>

## 4. Source Quality and Conflicts

### Confirmed

- <结论> — `G1 <定位>` 与 `G3 <定位>` 一致。

### Ambiguous / Missing

- [?] <问题> — 已检查：<定位>；缺少：<所需证据>。

### Conflict

- [!] <冲突主题>
  - `G1 <定位>`：<来源 A 的表述>
  - `G3 <定位>`：<来源 B 的表述>
  - 当前处理：<并列保留 / 采用教师明确修正版>
  - 理由：<可验证理由；不能确认则写 unresolved>

