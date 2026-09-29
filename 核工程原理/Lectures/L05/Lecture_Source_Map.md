---
type: lecture-source-map
course: "核工程原理"
lecture: "L05"
status: draft
archive_version: v2.0.1
---

# 来源、覆盖与订正

对应原转写标题2026年9月28日下午3:19的课堂，2026-09-28归档。按用户要求继续沿用L02的344页课件；开场回顾通量、反应率、平均截面，新授主范围为PDF150–219。220起裂变中子能谱、缓发中子和燃料消耗未作为本次已讲内容。课堂提到但课件没有的高温气冷堆、钠冷快堆示例作为口头补充保留。

## 来源与实际处理

| ID | 原件 | SHA256 | 实际处理 |
|---|---|---|---|
| S1 | [沿用344页课件](../L02/Raw/1.反应堆的核物理基础-上传版.pdf) | `f510751603de3a550884dea3bfcfaa3af8de61b791ab1c9b578031ec1480a905` | 新授150–219文本层读取，75页课件图保存；图表视觉核验具体页见QA，未宣称全部图逐细节核验 |
| S2 | [课堂录音](Raw/7690482448987360196_record_audio.m4a) | `65d36d1a11a6527e4170605268addcfa75ba95777f754949e51ac9a69459727d` | M4A mvhd元数据5471.50秒（01:31:11.50）；未做原音核听 |
| S3 | [原始转写](Raw/核反应截面与裂变相关知识讲解.txt) | `f5281d5ac4df5d93111fa23c16e5980d3ec07a5f9a912f302d9d3be1622011da` | 全文112个时间戳段读取并映射至31个课堂回顾片段 |
| G1 | [核工程原理第14稿，487页](../../Global/Raw/核工程原理%20第14稿.pdf) | `d07253fa99d2864ac5c8748a5ffa9f6f8aa8a50dc4e728d1da52b8f85d84a537` | PDF54–66、162–166相关内容读取；持久缓存本讲16页，关键原页核验见QA |

教材按现有完整SHA256确认身份，不把课件与教材的不同数据表强行统一。原始附件副本与Downloads逐字节一致；课件原件复用，未改写或重复保存。元数据时长、文本读取、渲染、视觉核验和真正核听是独立处理状态。

## 片段与全文覆盖

原稿段号按112个带时间戳的说话段顺序编号。第84段同时从例题转到功率密度，第98段从中微子研究转到余热，按实际内容拆分到相邻主题，因此时间区间存在有依据的重叠。页码是主题对齐，不是假定精确翻页时间。

| 片段 | 原稿段 | 时间 | 课件PDF页 | 讲义 | 内容 |
|---|---|---|---|---|---|
| [T01](Transcript_Corrected.md#T01) | 1–6 | 00:08–04:22 | 89,94,97,98,99 | [N01](Lecture_Notes.md#N01) | 上讲回顾：通量、反应率与平均截面 |
| [T02](Transcript_Corrected.md#T02) | 7–10 | 04:22–08:29 | 150,151,152,153 | [N02](Lecture_Notes.md#N02) | 截面的影响因素与三个能区 |
| [T03](Transcript_Corrected.md#T03) | 11–19 | 08:29–15:09 | 154,155,156 | [N03](Lecture_Notes.md#N03) | 低能吸收与1/v规律 |
| [T04](Transcript_Corrected.md#T04) | 20–23 | 15:09–18:54 | 157 | [N04](Lecture_Notes.md#N04) | 标准热中子速率与飞行时间 |
| [T05](Transcript_Corrected.md#T05) | 24–27 | 18:54–21:43 | 158,159,160,161,162,163 | [N04](Lecture_Notes.md#N04) | 氢吸收截面算例、数据表与修正 |
| [T06](Transcript_Corrected.md#T06) | 28–30 | 21:43–24:00 | 164,165 | [N05](Lecture_Notes.md#N05) | 铀238俘获共振 |
| [T07](Transcript_Corrected.md#T07) | 31–33 | 24:00–25:49 | 166,167 | [N05](Lecture_Notes.md#N05) | 怎样辨认可分辨共振区 |
| [T08](Transcript_Corrected.md#T08) | 34–36 | 25:49–28:09 | 168 | [N06](Lecture_Notes.md#N06) | 非弹性散射的阈能 |
| [T09](Transcript_Corrected.md#T09) | 37–42 | 28:09–32:14 | 169,170,171,172 | [N06](Lecture_Notes.md#N06) | 弹性散射曲线：平台、低能端与读数 |
| [T10](Transcript_Corrected.md#T10) | 43–46 | 32:14–35:59 | 173,174,175,176,177,178 | [N07](Lecture_Notes.md#N07) | 两类核素的裂变截面 |
| [T11](Transcript_Corrected.md#T11) | 47–49 | 35:59–39:50 | 179,180 | [N08](Lecture_Notes.md#N08) | 从实验与理论形成核数据库 |
| [T12](Transcript_Corrected.md#T12) | 50–53 | 39:50–42:43 | 181,182 | [N08](Lecture_Notes.md#N08) | 数据格式、程序存储与裂变问题 |
| [T13](Transcript_Corrected.md#T13) | 54–56 | 42:43–45:19 | 183,184 | [N09](Lecture_Notes.md#N09) | 三个中子参数与近似公式 |
| [T14](Transcript_Corrected.md#T14) | 57–60 | 45:19–47:37 | 185,186 | [N09](Lecture_Notes.md#N09) | 读ν的曲线与表格 |
| [T15](Transcript_Corrected.md#T15) | 61–64 | 47:37–50:24 | 187,188 | [N09](Lecture_Notes.md#N09) | 每次吸收的有效中子收益 |
| [T16](Transcript_Corrected.md#T16) | 65–67 | 50:24–52:39 | 189,190,191,192 | [N10](Lecture_Notes.md#N10) | 随机裂变与产额定义 |
| [T17](Transcript_Corrected.md#T17) | 68–70 | 52:39–55:47 | 193 | [N10](Lecture_Notes.md#N10) | 双峰曲线与质量数115的判断 |
| [T18](Transcript_Corrected.md#T18) | 71–75 | 55:47–59:39 | 194,195,196 | [N11](Lecture_Notes.md#N11) | 不同材料产额与常用放射源 |
| [T19](Transcript_Corrected.md#T19) | 76–79 | 59:39–01:02:11 | 197,198 | [N12](Lecture_Notes.md#N12) | 裂变能量换算与百万千瓦陷阱 |
| [T20](Transcript_Corrected.md#T20) | 80–82 | 01:02:11–01:05:18 | 199,200 | [N13](Lecture_Notes.md#N13) | 为什么功率与通量有关 |
| [T21](Transcript_Corrected.md#T21) | 83–84 | 01:05:18–01:08:14 | 201,202,203 | [N13](Lecture_Notes.md#N13) | 由给定反应率反求两个截面 |
| [T22](Transcript_Corrected.md#T22) | 84–86 | 01:06:54–01:09:44 | 204 | [N14](Lecture_Notes.md#N14) | 两个功率指标与富集度判断 |
| [T23](Transcript_Corrected.md#T23) | 87–90 | 01:09:44–01:13:22 | 205,206,207,208,209 | [N15](Lecture_Notes.md#N15) | 裂变能的构成和回收位置 |
| [T24](Transcript_Corrected.md#T24) | 91–92 | 01:13:22–01:15:13 | 210,211 | [N15](Lecture_Notes.md#N15) | 可利用能量与转化为热 |
| [T25](Transcript_Corrected.md#T25) | 93–93 | 01:15:13–01:16:17 | 212 | [N16](Lecture_Notes.md#N16) | 中微子的平均自由程算例 |
| [T26](Transcript_Corrected.md#T26) | 94–98 | 01:16:17–01:21:18 | 213 | [N16](Lecture_Notes.md#N16) | 怎样增加中微子事件数与研究旁例 |
| [T27](Transcript_Corrected.md#T27) | 98–100 | 01:20:24–01:22:06 | 214 | [N17](Lecture_Notes.md#N17) | 停堆并不意味着热源为零 |
| [T28](Transcript_Corrected.md#T28) | 101–102 | 01:22:06–01:23:53 | 215,216 | [N17](Lecture_Notes.md#N17) | 余热经验式与曲线阅读 |
| [T29](Transcript_Corrected.md#T29) | 103–105 | 01:23:53–01:27:04 | 216 | [N18](Lecture_Notes.md#N18) | 余热比例、热功率与加热水算例 |
| [T30](Transcript_Corrected.md#T30) | 106–108 | 01:27:04–01:28:30 | 217 | [N19](Lecture_Notes.md#N19) | 事故旁例中的冷却问题 |
| [T31](Transcript_Corrected.md#T31) | 109–112 | 01:28:30–01:31:11 | 217,218,219 | [N19](Lecture_Notes.md#N19) | 能动与非能动余热排出、乏燃料 |

<!-- ALIGNMENT_JSON
[
  {
    "id": "T01",
    "title": "上讲回顾：通量、反应率与平均截面",
    "start": 8,
    "end": 262,
    "time": "00:08–04:22",
    "pages": [
      89,
      94,
      97,
      98,
      99
    ],
    "notes": "N01",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T02",
    "title": "截面的影响因素与三个能区",
    "start": 262,
    "end": 509,
    "time": "04:22–08:29",
    "pages": [
      150,
      151,
      152,
      153
    ],
    "notes": "N02",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T03",
    "title": "低能吸收与1/v规律",
    "start": 509,
    "end": 909,
    "time": "08:29–15:09",
    "pages": [
      154,
      155,
      156
    ],
    "notes": "N03",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T04",
    "title": "标准热中子速率与飞行时间",
    "start": 909,
    "end": 1134,
    "time": "15:09–18:54",
    "pages": [
      157
    ],
    "notes": "N04",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T05",
    "title": "氢吸收截面算例、数据表与修正",
    "start": 1134,
    "end": 1303,
    "time": "18:54–21:43",
    "pages": [
      158,
      159,
      160,
      161,
      162,
      163
    ],
    "notes": "N04",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T06",
    "title": "铀238俘获共振",
    "start": 1303,
    "end": 1440,
    "time": "21:43–24:00",
    "pages": [
      164,
      165
    ],
    "notes": "N05",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T07",
    "title": "怎样辨认可分辨共振区",
    "start": 1440,
    "end": 1549,
    "time": "24:00–25:49",
    "pages": [
      166,
      167
    ],
    "notes": "N05",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T08",
    "title": "非弹性散射的阈能",
    "start": 1549,
    "end": 1689,
    "time": "25:49–28:09",
    "pages": [
      168
    ],
    "notes": "N06",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T09",
    "title": "弹性散射曲线：平台、低能端与读数",
    "start": 1689,
    "end": 1934,
    "time": "28:09–32:14",
    "pages": [
      169,
      170,
      171,
      172
    ],
    "notes": "N06",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T10",
    "title": "两类核素的裂变截面",
    "start": 1934,
    "end": 2159,
    "time": "32:14–35:59",
    "pages": [
      173,
      174,
      175,
      176,
      177,
      178
    ],
    "notes": "N07",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T11",
    "title": "从实验与理论形成核数据库",
    "start": 2159,
    "end": 2390,
    "time": "35:59–39:50",
    "pages": [
      179,
      180
    ],
    "notes": "N08",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T12",
    "title": "数据格式、程序存储与裂变问题",
    "start": 2390,
    "end": 2563,
    "time": "39:50–42:43",
    "pages": [
      181,
      182
    ],
    "notes": "N08",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T13",
    "title": "三个中子参数与近似公式",
    "start": 2563,
    "end": 2719,
    "time": "42:43–45:19",
    "pages": [
      183,
      184
    ],
    "notes": "N09",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T14",
    "title": "读ν的曲线与表格",
    "start": 2719,
    "end": 2857,
    "time": "45:19–47:37",
    "pages": [
      185,
      186
    ],
    "notes": "N09",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T15",
    "title": "每次吸收的有效中子收益",
    "start": 2857,
    "end": 3024,
    "time": "47:37–50:24",
    "pages": [
      187,
      188
    ],
    "notes": "N09",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T16",
    "title": "随机裂变与产额定义",
    "start": 3024,
    "end": 3159,
    "time": "50:24–52:39",
    "pages": [
      189,
      190,
      191,
      192
    ],
    "notes": "N10",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T17",
    "title": "双峰曲线与质量数115的判断",
    "start": 3159,
    "end": 3347,
    "time": "52:39–55:47",
    "pages": [
      193
    ],
    "notes": "N10",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T18",
    "title": "不同材料产额与常用放射源",
    "start": 3347,
    "end": 3579,
    "time": "55:47–59:39",
    "pages": [
      194,
      195,
      196
    ],
    "notes": "N11",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T19",
    "title": "裂变能量换算与百万千瓦陷阱",
    "start": 3579,
    "end": 3731,
    "time": "59:39–01:02:11",
    "pages": [
      197,
      198
    ],
    "notes": "N12",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T20",
    "title": "为什么功率与通量有关",
    "start": 3731,
    "end": 3918,
    "time": "01:02:11–01:05:18",
    "pages": [
      199,
      200
    ],
    "notes": "N13",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T21",
    "title": "由给定反应率反求两个截面",
    "start": 3918,
    "end": 4094,
    "time": "01:05:18–01:08:14",
    "pages": [
      201,
      202,
      203
    ],
    "notes": "N13",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听；原段跨主题，交界段按内容拆分"
  },
  {
    "id": "T22",
    "title": "两个功率指标与富集度判断",
    "start": 4014,
    "end": 4184,
    "time": "01:06:54–01:09:44",
    "pages": [
      204
    ],
    "notes": "N14",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听；原段跨主题，交界段按内容拆分"
  },
  {
    "id": "T23",
    "title": "裂变能的构成和回收位置",
    "start": 4184,
    "end": 4402,
    "time": "01:09:44–01:13:22",
    "pages": [
      205,
      206,
      207,
      208,
      209
    ],
    "notes": "N15",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T24",
    "title": "可利用能量与转化为热",
    "start": 4402,
    "end": 4513,
    "time": "01:13:22–01:15:13",
    "pages": [
      210,
      211
    ],
    "notes": "N15",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T25",
    "title": "中微子的平均自由程算例",
    "start": 4513,
    "end": 4577,
    "time": "01:15:13–01:16:17",
    "pages": [
      212
    ],
    "notes": "N16",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T26",
    "title": "怎样增加中微子事件数与研究旁例",
    "start": 4577,
    "end": 4878,
    "time": "01:16:17–01:21:18",
    "pages": [
      213
    ],
    "notes": "N16",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听；原段跨主题，交界段按内容拆分"
  },
  {
    "id": "T27",
    "title": "停堆并不意味着热源为零",
    "start": 4824,
    "end": 4926,
    "time": "01:20:24–01:22:06",
    "pages": [
      214
    ],
    "notes": "N17",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听；原段跨主题，交界段按内容拆分"
  },
  {
    "id": "T28",
    "title": "余热经验式与曲线阅读",
    "start": 4926,
    "end": 5033,
    "time": "01:22:06–01:23:53",
    "pages": [
      215,
      216
    ],
    "notes": "N17",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T29",
    "title": "余热比例、热功率与加热水算例",
    "start": 5033,
    "end": 5224,
    "time": "01:23:53–01:27:04",
    "pages": [
      216
    ],
    "notes": "N18",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T30",
    "title": "事故旁例中的冷却问题",
    "start": 5224,
    "end": 5310,
    "time": "01:27:04–01:28:30",
    "pages": [
      217
    ],
    "notes": "N19",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  },
  {
    "id": "T31",
    "title": "能动与非能动余热排出、乏燃料",
    "start": 5310,
    "end": 5471.5,
    "time": "01:28:30–01:31:11",
    "pages": [
      217,
      218,
      219
    ],
    "notes": "N19",
    "certainty": "按转写段首与课件主题对齐，非逐秒翻页记录；原音未核听"
  }
]
END_ALIGNMENT_JSON -->

## 逐页覆盖

英文配套页用于参看，不据此虚构逐字讲授。开场89/94/97–99是依据主题选取的回顾页，不表示教师确实逐页回翻。

| PDF页 | 页内容及范围身份 | 课堂片段与讲义 |
|---:|---|---|
| 89 | 上讲通量/反应率/平均截面回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 94 | 上讲通量/反应率/平均截面回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 97 | 上讲通量/反应率/平均截面回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 98 | 上讲通量/反应率/平均截面回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 99 | 上讲通量/反应率/平均截面回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 150 | 核反应截面的变化 | [T02](Transcript_Corrected.md#T02)/[N02](Lecture_Notes.md#N02) |
| 151 | 核反应截面的变化 | [T02](Transcript_Corrected.md#T02)/[N02](Lecture_Notes.md#N02) |
| 152 | 吸收截面的变化规律 | [T02](Transcript_Corrected.md#T02)/[N02](Lecture_Notes.md#N02) |
| 153 | 吸收截面的变化规律；英文/表格配套页，未逐字口述 | [T02](Transcript_Corrected.md#T02)/[N02](Lecture_Notes.md#N02) |
| 154 | 吸收截面的变化规律 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 155 | 1/v规律 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 156 | 1/v规律 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 157 | 低能区的吸收截面 | [T04](Transcript_Corrected.md#T04)/[N04](Lecture_Notes.md#N04) |
| 158 | 核反应截面计算 | [T05](Transcript_Corrected.md#T05)/[N04](Lecture_Notes.md#N04) |
| 159 | 上讲通量/反应率/平均截面回顾 | [T05](Transcript_Corrected.md#T05)/[N04](Lecture_Notes.md#N04) |
| 160 | 一些重要的截面数据 | [T05](Transcript_Corrected.md#T05)/[N04](Lecture_Notes.md#N04) |
| 161 | U235的裂变截面 | [T05](Transcript_Corrected.md#T05)/[N04](Lecture_Notes.md#N04) |
| 162 | 非1/v修正 | [T05](Transcript_Corrected.md#T05)/[N04](Lecture_Notes.md#N04) |
| 163 | U235的裂变截面 | [T05](Transcript_Corrected.md#T05)/[N04](Lecture_Notes.md#N04) |
| 164 | 中高能区的吸收截面 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 165 | U238的吸收截面 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 166 | U238的共振吸收截面 | [T07](Transcript_Corrected.md#T07)/[N05](Lecture_Notes.md#N05) |
| 167 | 几种核素的中低能截面 | [T07](Transcript_Corrected.md#T07)/[N05](Lecture_Notes.md#N05) |
| 168 | 非弹性散射截面 | [T08](Transcript_Corrected.md#T08)/[N06](Lecture_Notes.md#N06) |
| 169 | 弹性散射截面 | [T09](Transcript_Corrected.md#T09)/[N06](Lecture_Notes.md#N06) |
| 170 | 弹性散射截面 | [T09](Transcript_Corrected.md#T09)/[N06](Lecture_Notes.md#N06) |
| 171 | 弹性散射截面 | [T09](Transcript_Corrected.md#T09)/[N06](Lecture_Notes.md#N06) |
| 172 | 弹性散射截面 | [T09](Transcript_Corrected.md#T09)/[N06](Lecture_Notes.md#N06) |
| 173 | 裂变截面的变化规律 | [T10](Transcript_Corrected.md#T10)/[N07](Lecture_Notes.md#N07) |
| 174 | U235的裂变截面 | [T10](Transcript_Corrected.md#T10)/[N07](Lecture_Notes.md#N07) |
| 175 | U233的裂变截面 | [T10](Transcript_Corrected.md#T10)/[N07](Lecture_Notes.md#N07) |
| 176 | Pu239的裂变截面 | [T10](Transcript_Corrected.md#T10)/[N07](Lecture_Notes.md#N07) |
| 177 | U235与Pu239的裂变截面对比 | [T10](Transcript_Corrected.md#T10)/[N07](Lecture_Notes.md#N07) |
| 178 | 可裂变核素的裂变截面 | [T10](Transcript_Corrected.md#T10)/[N07](Lecture_Notes.md#N07) |
| 179 | 核数据的重要性 | [T11](Transcript_Corrected.md#T11)/[N08](Lecture_Notes.md#N08) |
| 180 | 评价核数据库 | [T11](Transcript_Corrected.md#T11)/[N08](Lecture_Notes.md#N08) |
| 181 | 评价核数据库 | [T12](Transcript_Corrected.md#T12)/[N08](Lecture_Notes.md#N08) |
| 182 | 与裂变相关的核数据 | [T12](Transcript_Corrected.md#T12)/[N08](Lecture_Notes.md#N08) |
| 183 | 与裂变相关的核数据 | [T13](Transcript_Corrected.md#T13)/[N09](Lecture_Notes.md#N09) |
| 184 | 裂变中子数ν | [T13](Transcript_Corrected.md#T13)/[N09](Lecture_Notes.md#N09) |
| 185 | 裂变中子数ν | [T14](Transcript_Corrected.md#T14)/[N09](Lecture_Notes.md#N09) |
| 186 | 裂变中子数ν | [T14](Transcript_Corrected.md#T14)/[N09](Lecture_Notes.md#N09) |
| 187 | 有效裂变中子数η | [T15](Transcript_Corrected.md#T15)/[N09](Lecture_Notes.md#N09) |
| 188 | 有效裂变中子数η | [T15](Transcript_Corrected.md#T15)/[N09](Lecture_Notes.md#N09) |
| 189 | 裂变产物 | [T16](Transcript_Corrected.md#T16)/[N10](Lecture_Notes.md#N10) |
| 190 | 裂变产物 | [T16](Transcript_Corrected.md#T16)/[N10](Lecture_Notes.md#N10) |
| 191 | 裂变产物 | [T16](Transcript_Corrected.md#T16)/[N10](Lecture_Notes.md#N10) |
| 192 | 裂变产物的产额 | [T16](Transcript_Corrected.md#T16)/[N10](Lecture_Notes.md#N10) |
| 193 | 裂变产物的产额 | [T17](Transcript_Corrected.md#T17)/[N10](Lecture_Notes.md#N10) |
| 194 | 裂变产物的产额 | [T18](Transcript_Corrected.md#T18)/[N11](Lecture_Notes.md#N11) |
| 195 | 裂变产物的产额 | [T18](Transcript_Corrected.md#T18)/[N11](Lecture_Notes.md#N11) |
| 196 | 裂变产物的重要性 | [T18](Transcript_Corrected.md#T18)/[N11](Lecture_Notes.md#N11) |
| 197 | 裂变的能量 | [T19](Transcript_Corrected.md#T19)/[N12](Lecture_Notes.md#N12) |
| 198 | 裂变的能量；英文/表格配套页，未逐字口述 | [T19](Transcript_Corrected.md#T19)/[N12](Lecture_Notes.md#N12) |
| 199 | 反应堆堆功率 | [T20](Transcript_Corrected.md#T20)/[N13](Lecture_Notes.md#N13) |
| 200 | 反应堆堆功率；英文/表格配套页，未逐字口述 | [T20](Transcript_Corrected.md#T20)/[N13](Lecture_Notes.md#N13) |
| 201 | 反应堆堆功率 | [T21](Transcript_Corrected.md#T21)/[N13](Lecture_Notes.md#N13) |
| 202 | 反应堆堆功率；英文/表格配套页，未逐字口述 | [T21](Transcript_Corrected.md#T21)/[N13](Lecture_Notes.md#N13) |
| 203 | 反应堆堆功率；英文/表格配套页，未逐字口述 | [T21](Transcript_Corrected.md#T21)/[N13](Lecture_Notes.md#N13) |
| 204 | 堆芯功率密度与燃料比功率 | [T22](Transcript_Corrected.md#T22)/[N14](Lecture_Notes.md#N14) |
| 205 | 裂变能的构成 | [T23](Transcript_Corrected.md#T23)/[N15](Lecture_Notes.md#N15) |
| 206 | 裂变能的构成 | [T23](Transcript_Corrected.md#T23)/[N15](Lecture_Notes.md#N15) |
| 207 | 裂变能的构成与回收 | [T23](Transcript_Corrected.md#T23)/[N15](Lecture_Notes.md#N15) |
| 208 | 瞬发能量；英文/表格配套页，未逐字口述 | [T23](Transcript_Corrected.md#T23)/[N15](Lecture_Notes.md#N15) |
| 209 | 瞬发能量；英文/表格配套页，未逐字口述 | [T23](Transcript_Corrected.md#T23)/[N15](Lecture_Notes.md#N15) |
| 210 | 可利用的裂变能量 | [T24](Transcript_Corrected.md#T24)/[N15](Lecture_Notes.md#N15) |
| 211 | 裂变能量的收集 | [T24](Transcript_Corrected.md#T24)/[N15](Lecture_Notes.md#N15) |
| 212 | 中微子在物质中的平均自由程 | [T25](Transcript_Corrected.md#T25)/[N16](Lecture_Notes.md#N16) |
| 213 | 中微子在物质中的平均自由程 | [T26](Transcript_Corrected.md#T26)/[N16](Lecture_Notes.md#N16) |
| 214 | 停堆后的剩余发热 | [T27](Transcript_Corrected.md#T27)/[N17](Lecture_Notes.md#N17) |
| 215 | 剩余发热计算公式 | [T28](Transcript_Corrected.md#T28)/[N17](Lecture_Notes.md#N17) |
| 216 | 剩余发热计算 | [T28](Transcript_Corrected.md#T28)/[N17](Lecture_Notes.md#N17), [T29](Transcript_Corrected.md#T29)/[N18](Lecture_Notes.md#N18) |
| 217 | 剩余发热的问题 | [T30](Transcript_Corrected.md#T30)/[N19](Lecture_Notes.md#N19), [T31](Transcript_Corrected.md#T31)/[N19](Lecture_Notes.md#N19) |
| 218 | 华龙一号的余热排出 | [T31](Transcript_Corrected.md#T31)/[N19](Lecture_Notes.md#N19) |
| 219 | 剩余发热的问题 | [T31](Transcript_Corrected.md#T31)/[N19](Lecture_Notes.md#N19) |
| 220–344 | 后续课件，未纳入本讲范围 | — |

## 重要订正与未决项

转写和课件原件保持原样。下列订正区分能够复算的结果与仍需核听的来源冲突；不能据此断言错误来自教师还是ASR。

| 定位 | 原表述或冲突 | 正文处理与依据 |
|---|---|---|
| 00:40–03:14 | N、小n、Φ与Σ混杂，“宏观截面代表多长” | 按课件89/94/97与上讲定义区分自由中子数密度n、材料核密度N；Σ为长度倒数；平均截面写完整积分。 |
| 05:00 | 10⁻⁵ eV到20 MeV“差13到14个量级” | 两端比为2×10¹²，约12.3个数量级；讲义订正数量级。 |
| 06:30、12:10等 | “氢核”被用于氢、氧、碳等整个类别 | 按课件151/155订正为轻核。 |
| 08:29–09:28 | “能量越低v越大”“σv乘E” | 课件154及教材55式(2-17)为σₐ√E常数；v随√E减小，增大的是截面。 |
| 10:09–11:23 | “n,2n、n,p、n,α都是有阈值的”，据此把吸收等同俘获 | 保留低能俘获占优的限定；不推广全部反应，硼10(n,α)等与本课程L04课件146直接构成反例。(n,2n)也不应简单视为净中子吸收损失。 |
| 12:44–14:41 | “波动到原子核上”解释1/v | 作为课堂直觉类比保留，讲义不把它当定量推导；从已给1/v与E=mv²/2推导能量关系。 |
| 15:47–16:29 | 0.0253 eV称为最可几“能量”的模糊表述 | 课件157明示最可几速率2200 m/s；区分速率众数对应动能与平均能量。分布变量改变后众数也会改变。 |
| 17:54 | 几厘米自由程后笼统给10⁻⁵至10⁻⁶秒 | 讲义用同一5 cm分别算热中子与2 MeV飞行时间；约2.3×10⁻⁵与2.6×10⁻⁹秒，不能混用。原音待核听。 |
| 18:54 | 代入时将0.332与0.0253混说，结果“0.05288” | 课件158/教材55支持0.332√0.0253=0.0528 b；该结果可复算。 |
| 21:43–23:31 | 峰高先约2万b后28000 b，峰宽0.027 eV | 课件164列2万/0.027；165图不足以核定精确宽度定义。正文仅用数万b和窄峰的定性说明，不把矛盾参数用于计算；待明确温度、评价库及宽度口径。 |
| 24:00–25:04 | “可分辨功能区”“平均能量代表” | 按课件166和教材66语境订正共振区；不可分辨共振用统计处理，不是某个平均能量就能替代全区。 |
| 26:56 | 重核非弹性散射“损失的能量也比较多”作普遍比较 | 课件168直接支持阈值与几个b的数量级；保留重核对快中子降能重要，不断言重核每次必比轻核损失更多。 |
| 28:09；课件169 | 几何截面7.5 b与R=1.25×10⁻¹³A^(1/3) cm | 代入铀238得到πR²≈1.89 b、4πR²≈7.54 b。讲义明确所用尺度，不能将7.5 b称几何投影面积；实际8.3 b仅为课件示例，未指定能量。 |
| 29:21–31:48 | 散射“上千b”“波粒二象性自然导致1/v” | 第172页是294 K曲线，氢平台约20 b、碳平台几个b；上千b在极低能端。只记录图示条件，不把所有自由核或束缚核散射都归为1/v。教材58及NJOY热散射说明提示模型/温度条件的重要性。 |
| 33:16–33:49 | “低于0.18没画”“从0.18以上” | 第174页纵轴下限约0.1 b，横轴为eV；未能确认转写0.18所指，不当作铀238裂变阈能。 |
| 35:59 | AI核截面论文发表于Science或Nature | 未给题目、作者和年份，作为课堂研究背景，不写成已核实成果。 |
| 36:56–40:30 | ENDF/A必为不公开军用库、B为民用等 | 已查NNDC官方入口，公开介绍ENDF/B与历史ENDF/A格式资料；不足以支持简单字母对应保密用途的说法。课堂具体断言待查，不在讲义作知识结论。 |
| 39:50–41:44 | GNDS“最新”、多群10K、蒙卡10G、GPU1G | 作为课堂时点介绍；库格式与版本分开。存储规模依程序/核素/温度/群数，优化效果未独立验证。 |
| 43:33 | “平均值是3” | 课件184写平均值为ν；实际由核素与能量决定，不固定为3。 |
| 44:39–47:11 | 对比铀235时多次说U239/布239 | 课件184–186明确Pu-239，订正为钚239；不能将铀239写成主要易裂变比较对象。 |
| 课件184与186 | 线性式Pu239低能2.862，而表热中子2.93；U235的1MeV数也与拟合不同 | 保留各自数据身份与近似性，不混合成唯一精确表；教材65也给出自己的核数据版本。 |
| 48:00 | “临界时η一定大于1”未说明系统损失与定义 | 说明针对燃料吸收定义，实际堆需补偿非燃料吸收/泄漏；理想边界可不同，η>1也非充分临界条件。 |
| 51:19 | 第二裂变通道“钕和锶” | 第190页式子为93Rb与140Cs、3n，电荷及质量数守恒。第一式90Kr+144Ba+2n亦核算；订正核素名。 |
| 52:39–53:57 | 对数图“面积等于2，因三分裂变大于2” | 按每次裂变的重碎片质量产额求和约2；图纸面积不是线性产额求和。独立/累计产额区分有ENDF-6格式说明支持，三分裂变须先定义计入的粒子，不能统一强加大于2。 |
| 54:25 | 以14MeV单能曲线直接判断快堆乏燃料比例 | 保留课堂曲线判断意图；讲义明确14MeV不代表任意快堆能谱，乏燃料还受燃耗与冷却等影响。 |
| 56:35 | “65的铀35的钚” | 第195页图为65%U/35%Pu配比，不是铀65/钚35核素。 |
| 58:38 | “环境影响通过裂变产物”“放射性核素都自然界不存在” | 不作穷尽/绝对结论；环境源项可含活化产物。原话留在Raw，回顾保留环境监测主题。 |
| 01:00:18–01:01:44 | 百万千瓦直接当裂变热功率 | 课件197的换算与课堂追问明确电/热区别；讲义用效率1/3的条件算9.4×10¹⁹ s⁻¹。 |
| 01:05:18 | 大小Σf在“谁也改不了”处混用 | 指定核素和能量的σf与含N的Σf区分；平均截面还受能谱影响，不能声称任意条件都不变。 |
| 01:05:18–01:06:54 | 反应率名未带密度 | 第201–203页单位cm⁻³s⁻¹，按反应率密度计算，结果Σf=0.043 cm⁻¹、σf=430 b。 |
| 01:09:44–01:14:11 | 将所有能量称动能；课件207/教材162把中微子列瞬发栏 | 光子/中微子称携带能量；第209页明确裂变产物衰变的中微子为缓发，不能一概瞬发。第206和208–209为不同近似表，正文不拼成单一能量账。 |
| 01:13:22 | 经验式文本抽取上下标断裂 | 第210页看图确认为1.29927×10⁻³ Z²A^0.5+33.12 MeV/fission，U235/Pu239分别201.7/210.6。 |
| 01:15:13 | “微观截面乘宏观截面”“10⁻¹⁹米” | 第212页为Nσ=10⁻¹⁹ cm⁻¹；倒数10¹⁹ cm，单位按题设订正。 |
| 01:17:53 | “自然界没有其他方式大规模产生中微子”“都应尽量靠近堆” | 本身后文与课件213列太阳中微子；课堂回顾保留反应堆源/体积/通量的例子，不把它作为唯一来源或所有实验布置原则。 |
| 01:19:28 | “几米内就衰变，十米外没有特性” | 核听与具体研究目标均未确认，不把振荡等同衰变；在回顾保留短基线研究设想及不确定性。 |
| 01:20:24–01:21:18 | 停堆后“裂变热没了”“产物都是不稳定的” | 改为自持链反应受抑、裂变功率快速下降，已有不稳定核素仍衰变；并非所有裂变产物不稳定，也并非瞬间所有裂变归零。教材164提供其他停堆功率来源背景。 |
| 01:22:06；课件215 | 经验式P用W、输出MeV/s易混 | 看图抄写并乘1.602×10⁻¹³得到0.0657系数；教材164另式系数和范围不同，不直接替换或混用。 |
| 01:23:53 | “6%×3000MW=180，18MW” | 可复算为180 MW，不能写18 MW；原音待核听。 |
| 01:24:26–01:24:54 | “P乘T就是功率”“像指数衰减” | 单位W·s=J，变量功率须积分；课件公式是幂律组合，且图为对数时间轴，非单一指数。 |
| 01:24:54–01:27:04 | 一小时读图1%，从0加热到100℃后称“烧干4吨” | 近似1%对应30MW，60秒约加热4.3t水至100℃，未包括汽化潜热；不能解释为烧干。按运行30天经验式得到0.934%，用于核对读图量级。 |
| 01:27:04–01:28:03 | 福岛柴油机“冲走”、72小时、专家建议及动机归因 | 作为教师事故旁例保留其冷却主题，原细节回查Raw；本轮未独立核实事故时间线与动机，未纳入讲义确定事实。 |
| 01:28:30–01:30:05 | ECCS等同全部余热系统、“无需管”与72h泛化 | 按课件217英文全称订正应急堆芯冷却系统；能动/非能动均有适用条件，具体堆型的72h范围和固有安全论断未独立核实。 |

## 直接依据、讲授解释与补足推导

- **FACT**：第150–219页课件及G1对应页支持的定义、图、反应式、例题与功率关系；图上数据是指定来源的示例，不宣称最新核数据。
- **EXPLANATION**：抓住跑动同学、掷骰子、读图先看坐标、用r=ΣΦ解释装量和富集度、用大体积增加中微子事件数等课堂主线均保留。
- **DERIVED**：log斜率−1/2、固定n下1/v吸收率、热速度分布量的区分、5cm飞行时间、完整空间能量积分、两种几何面积复算、η临界条件限定、30天余热0.934%、水加热的完整单位计算、自测答案。均融入讲义，不写成额外教师口述。
- **UNCERTAIN**：共振峰参数精确定义、0.18所指、ENDF/A用途、特定AI论文与GPU项目结果、短基线中微子效应、事故时间线和堆型安全保证。重点核听定位见上表；当前未核听。

<a id="external"></a>
## 外部核验入口（2026-09-28）

本轮仅访问公开说明，用于处理特定知识疑点；未上传用户录音或转写，也未下载新的第三方原件。所有正文与图在离线时可读，下列链接是可选外部核验入口。

- [NNDC ENDF官方入口](https://www.nndc.bnl.gov/endf-library/)：说明ENDF/B推荐评价数据、格式资料与历史入口，不能支持“只按A/B字母判定公开/保密用途”。
- [NJOY热散射模块说明](https://docs.njoy21.io/projects/thermalScattering/en/latest/LEAPR/)：热散射律与处理成截面的区别；本讲不据此新增未经计算的具体低能散射数据。
- [NEA ENDF-6格式说明](https://www.oecd-nea.org/dbdata/data/endf102.htm)：裂变产额数据区分独立与累计产额，热散射为独立子库；用于避免统计口径混淆。

## 原音与使用范围

录音定位只是转写锚点。没有进行原音播放核听、说话人鉴别或二次ASR。00:00–00:08在转写中没有对应文字，不推断其内容；音频末尾为01:31:11.50，01:30:28只是最后一段起点。

教师在转写中的“查一查”“问AI”“联系助教”等话语是课堂内容，未作为代理操作指令。新增素材仅本地归档，公开转载许可待确认；本轮用户没有要求上传、提交或推送。学术状态保持draft。
