---
type: lecture-source-map
course: "信号与系统"
lecture: "L03"
updated: "2026-09-22"
status: draft
archive_version: v2.0.1
---

# 来源、覆盖与订正

## 来源与处理状态

本讲为2026-09-20上下两段同一讲素材，归档L03。日期及起始时刻来自转写头部，未验证秒级墙钟。下载原件复制到本讲 Raw，未覆盖、编辑或重命名原件。以下完整SHA256与下载原件逐文件比较一致。

| ID | 来源 | 规模 | 实际处理 |
|---|---|---|---|
| S1 | [原件](Raw/Ch2.pdf)：Ch2.pdf | 59页 | 全部文本提取，全部59页渲染并按联系表视觉检查；关键公式、图形及作业页核验 |
| S2 | [原件](Raw/连续时间系统时域分析讲解.txt)：连续时间系统时域分析讲解.txt | 完整读取文本 | 全文阅读、人工订正、按段对齐；不是音频核听 |
| S3 | [原件](Raw/7687485415771655366_record_audio.m4a)：7687485415771655366_record_audio.m4a | 2080.0065秒 | 读取容器时长；未ASR、未实际核听；按时长与上下段文本顺序配对，内容匹配尚未核听 |
| S4 | [原件](Raw/信号系统卷积与冲击响应讲解.txt)：信号系统卷积与冲击响应讲解.txt | 完整读取文本 | 全文阅读、人工订正、按段对齐；不是音频核听 |
| S5 | [原件](Raw/7687499313052323003_record_audio.m4a)：7687499313052323003_record_audio.m4a | 2550.6665秒 | 读取容器时长；未ASR、未实际核听；按时长与上下段文本顺序配对，内容匹配尚未核听 |

- S1 SHA256：`51b0ea29a9a8af3cbb7a4c31a47f03bbb1e31971687f37e6739fc5bf2edc1960`。
- S2 SHA256：`9a3b2b8437890dea3d8be561c2b893800ddb0b8c2e5b2d70bd5400000926d67b`。
- S3 SHA256：`7632906391750824c6705829a93977a389df72efa72d0bf16102eee62796214a`。
- S4 SHA256：`1b6d445f83392ccf318050f7db4aaee396f97df7117c4ba2e2fce910f639bc37`。
- S5 SHA256：`3794ea7c02bd410268c63e669137628e43300585b83f87ee96a5e9cca1357870`。

- G1：郑君里等《信号与系统》第三版上册，课程既有教材，448页。SHA256：`10d306ff84e86b481416f9078618de2a72fb0edecc87269348c3caa143c05915`。版本及目录沿用既有原页核验；本轮只核当前公式/作业相关页。不是第四版。
- [教材索引](../../Global/Textbook_Index.md)。本轮渲染PDF p.66–95、102–108；实际视觉精读 p.76、80、92、102–106。其余新缓存页仅渲染，不能记为已精读。
- 派生音频 `assets/audio/combined.m4a` 为A后接B的AAC播放版，约4630.708秒。B偏移2080.0065秒，拼接处没有添加缺失内容。原音保留两份。重编码/容器舍入约数十毫秒，不视作逐秒校准。
- 转写头部A为34分39秒、B为42分30秒，容器实测约34:40.007、42:30.667。A最后时间戳34:03、B为41:54，均为最后发言起点，不是录音终点。

## 本讲范围与中断

S2从课程开场、LTI回顾讲到p.18的RC全响应；S4起始已在p.26因果卷积积分限。中间p.19–25缺少对应转写，不能确定录音中断期间的逐项讲授。讲义用课件补足双零例题、零状态线性、冲激/阶跃定义与分解推导，并就地标明。没有给缺失部分制造音频锚点。

S4末端明确表示因果性留待下次、自学；p.54–56记未讲预览，p.57记课件总结、未确认逐项口述，p.58作业由课件核对。两段音频都存在且可播放，但本次没有可靠的原音语义核听，所有关键差异仍列待核听。

## 逐段对齐

时间列为各自原转写时钟。JSON start/end为派生播放器秒数；local_start/local_end为A/B本地秒数。end采用下一段起点或已测音频结尾，是覆盖边界，不冒充精确口述结束。pages是主题对应页，并非逐秒翻页记录。

| 段 | 原时间 | 原稿行范围 | 课件PDF页 | 讲义 | 对齐依据 |
|---|---|---|---|---|---|
| [T01](Transcript_Corrected.md#T01) 本讲任务：连续时间系统的时域分析 | A 00:03–03:01 | S2 L7–L15 | 1,3,4 | [N01](Lecture_Notes.md#N01) | 转写主题+课件内容；未核听 |
| [T02](Transcript_Corrected.md#T02) 回顾 LTI 与冲激分解 | A 03:01–04:44 | S2 L16–L21 | 2 | [N01](Lecture_Notes.md#N01) | 转写主题+课件内容；未核听 |
| [T03](Transcript_Corrected.md#T03) 系统建模与求解路线 | A 04:44–06:45 | S2 L22–L27 | 3,4 | [N01](Lecture_Notes.md#N01) | 转写主题+课件内容；未核听 |
| [T04](Transcript_Corrected.md#T04) 课程重点与电路建模基础 | A 06:45–09:08 | S2 L28–L36 | 4,5 | [N02](Lecture_Notes.md#N02) | 转写主题+课件内容；未核听 |
| [T05](Transcript_Corrected.md#T05) 复杂电路列式要求降低，给定方程仍须会求 | A 09:08–11:56 | S2 L37–L45 | 5,6 | [N02](Lecture_Notes.md#N02) | 转写主题+课件内容；未核听 |
| [T06](Transcript_Corrected.md#T06) 由指数试解得到特征方程 | A 11:56–13:58 | S2 L46–L51 | 7 | [N03](Lecture_Notes.md#N03) | 转写主题+课件内容；未核听 |
| [T07](Transcript_Corrected.md#T07) 指数形式也包含正弦与余弦 | A 13:58–15:38 | S2 L52–L57 | 7,8 | [N03](Lecture_Notes.md#N03) | 转写主题+课件内容；未核听 |
| [T08](Transcript_Corrected.md#T08) 特解形式与自由/强迫响应 | A 15:38–17:19 | S2 L58–L63 | 8,13 | [N03](Lecture_Notes.md#N03) | 转写主题+课件内容；未核听 |
| [T09](Transcript_Corrected.md#T09) 用初始条件确定系数 | A 17:19–19:16 | S2 L64–L69 | 9 | [N03](Lecture_Notes.md#N03) | 转写主题+课件内容；未核听 |
| [T10](Transcript_Corrected.md#T10) 激励接入瞬间可能跳变 | A 19:16–21:12 | S2 L70–L78 | 10,14 | [N04](Lecture_Notes.md#N04) | 转写主题+课件内容；未核听 |
| [T11](Transcript_Corrected.md#T11) 经典法流程与课堂动笔练习 | A 21:12–23:26 | S2 L79–L81 | 11,12 | [N05](Lecture_Notes.md#N05) | 转写主题+课件内容；未核听 |
| [T12](Transcript_Corrected.md#T12) 二阶例题：配平特解、代初值定齐次项 | A 23:26–27:17 | S2 L82–L90 | 12 | [N05](Lecture_Notes.md#N05) | 转写主题+课件内容；未核听 |
| [T13](Transcript_Corrected.md#T13) 回看两部分解与起始点条件 | A 27:17–27:59 | S2 L91–L93 | 13,14 | [N04](Lecture_Notes.md#N04) | 转写主题+课件内容；未核听 |
| [T14](Transcript_Corrected.md#T14) 按响应起因分成零输入与零状态 | A 27:59–29:50 | S2 L94–L99 | 15 | [N06](Lecture_Notes.md#N06) | 转写主题+课件内容；未核听 |
| [T15](Transcript_Corrected.md#T15) 双零分解与经典分解怎样相容 | A 29:50–31:40 | S2 L100–L105 | 16,17 | [N06](Lecture_Notes.md#N06) | 转写主题+课件内容；未核听 |
| [T16](Transcript_Corrected.md#T16) RC 例题：初始电压与单位阶跃 | A 31:40–33:19 | S2 L106–L111 | 18 | [N06](Lecture_Notes.md#N06) | 转写主题+课件内容；未核听 |
| [T17](Transcript_Corrected.md#T17) 由连续性求完全解，上段在此中断 | A 33:19–34:40 音频末端 | S2 L112–L117 | 18 | [N06](Lecture_Notes.md#N06) | 转写主题+课件内容；未核听 |
| [T18](Transcript_Corrected.md#T18) 下段接续：因果输入与因果系统的积分限 | B 00:00–01:30 | S4 L7–L18 | 26 | [N08](Lecture_Notes.md#N08) | 转写主题+课件内容；未核听 |
| [T19](Transcript_Corrected.md#T19) 由冲激响应确定 LTI 零状态特性 | B 01:30–02:57 | S4 L19–L24 | 27,28 | [N08](Lecture_Notes.md#N08) | 转写主题+课件内容；未核听 |
| [T20](Transcript_Corrected.md#T20) 冲激后的自由演化与掌握知识点 | B 02:57–04:44 | S4 L25–L30 | 28,29 | [N09](Lecture_Notes.md#N09) | 转写主题+课件内容；未核听 |
| [T21](Transcript_Corrected.md#T21) 冲激响应例题：让求导产生冲激项 | B 04:44–06:36 | S4 L31–L36 | 30,31 | [N09](Lecture_Notes.md#N09) | 转写主题+课件内容；未核听 |
| [T22](Transcript_Corrected.md#T22) 显式阶跃与“零状态、齐次形式”的关系 | B 06:36–07:53 | S4 L37–L45 | 31,32 | [N09](Lecture_Notes.md#N09) | 转写主题+课件内容；未核听 |
| [T23](Transcript_Corrected.md#T23) 奇异项与方程阶次 | B 07:53–08:23 | S4 L46–L48 | 29,32 | [N09](Lecture_Notes.md#N09) | 转写主题+课件内容；未核听 |
| [T24](Transcript_Corrected.md#T24) 卷积是一种新运算 | B 08:23–10:47 | S4 L49–L54 | 33,34 | [N10](Lecture_Notes.md#N10) | 转写主题+课件内容；未核听 |
| [T25](Transcript_Corrected.md#T25) 卷积表达式与反折、平移 | B 10:47–12:15 | S4 L55–L57 | 34,35 | [N10](Lecture_Notes.md#N10) | 转写主题+课件内容；未核听 |
| [T26](Transcript_Corrected.md#T26) 每个 t 求一个值，组合成输出函数 | B 12:15–13:47 | S4 L58–L60 | 35,36 | [N10](Lecture_Notes.md#N10) | 转写主题+课件内容；未核听 |
| [T27](Transcript_Corrected.md#T27) 图示：进入重叠、达到峰值、完全离开 | B 13:47–16:08 | S4 L61–L66 | 36 | [N10](Lecture_Notes.md#N10) | 转写主题+课件内容；未核听 |
| [T28](Transcript_Corrected.md#T28) 课堂观察：卷积的长度与平滑 | B 16:08–18:42 | S4 L67–L78 | 36 | [N10](Lecture_Notes.md#N10) | 转写主题+课件内容；未核听 |
| [T29](Transcript_Corrected.md#T29) RL 阶跃响应与因果积分限 | B 18:42–20:09 | S4 L79–L84 | 37,38 | [N11](Lecture_Notes.md#N11) | 转写主题+课件内容；未核听 |
| [T30](Transcript_Corrected.md#T30) 截断指数激励：分段限制积分区间 | B 20:09–22:15 | S4 L85–L90 | 38,39 | [N11](Lecture_Notes.md#N11) | 转写主题+课件内容；未核听 |
| [T31](Transcript_Corrected.md#T31) 阶跃表达让分段结果更紧凑 | B 22:15–22:55 | S4 L91–L93 | 40 | [N11](Lecture_Notes.md#N11) | 转写主题+课件内容；未核听 |
| [T32](Transcript_Corrected.md#T32) 课后重算要求与卷积区间规则 | B 22:55–24:03 | S4 L94–L96 | 40,41 | [N10](Lecture_Notes.md#N10) | 转写主题+课件内容；未核听 |
| [T33](Transcript_Corrected.md#T33) 矩形与斜坡例题，预告性质能简化计算 | B 24:03–25:20 | S4 L97–L99 | 42 | [N12](Lecture_Notes.md#N12) | 转写主题+课件内容；未核听 |
| [T34](Transcript_Corrected.md#T34) 为什么重视卷积 | B 25:20–26:41 | S4 L100–L102 | 33,43 | [N13](Lecture_Notes.md#N13) | 转写主题+课件内容；未核听 |
| [T35](Transcript_Corrected.md#T35) 交换律、分配律、结合律 | B 26:41–28:39 | S4 L103–L114 | 43,44 | [N13](Lecture_Notes.md#N13) | 转写主题+课件内容；未核听 |
| [T36](Transcript_Corrected.md#T36) 信号/系统互换，以及并联与级联 | B 28:39–30:55 | S4 L115–L123 | 44,45,46,47 | [N13](Lecture_Notes.md#N13) | 转写主题+课件内容；未核听 |
| [T37](Transcript_Corrected.md#T37) 卷积的微分与累积积分 | B 30:55–33:15 | S4 L124–L129 | 47,48 | [N14](Lecture_Notes.md#N14) | 转写主题+课件内容；未核听 |
| [T38](Transcript_Corrected.md#T38) 自己推导性质，比只记题目更重要 | B 33:15–34:00 | S4 L130–L132 | 48,49 | [N14](Lecture_Notes.md#N14) | 转写主题+课件内容；未核听 |
| [T39](Transcript_Corrected.md#T39) 用冲激平移简化矩形卷积 | B 34:00–36:16 | S4 L133–L141 | 50 | [N14](Lecture_Notes.md#N14) | 转写主题+课件内容；未核听 |
| [T40](Transcript_Corrected.md#T40) 冲激、冲激偶、阶跃与奇偶性问答 | B 36:16–37:25 | S4 L142–L153 | 51 | [N14](Lecture_Notes.md#N14) | 转写主题+课件内容；未核听 |
| [T41](Transcript_Corrected.md#T41) 选择更简单的一边微分或积分 | B 37:25–39:19 | S4 L154–L159 | 51,52,53 | [N14](Lecture_Notes.md#N14) | 转写主题+课件内容；未核听 |
| [T42](Transcript_Corrected.md#T42) 符号函数反例：差了一个常数 | B 39:19–40:43 | S4 L160–L168 | 53 | [N15](Lecture_Notes.md#N15) | 转写主题+课件内容；未核听 |
| [T43](Transcript_Corrected.md#T43) 负无穷边界条件的课堂解释 | B 40:43–41:54 | S4 L169–L174 | 53 | [N15](Lecture_Notes.md#N15) | 转写主题+课件内容；未核听 |
| [T44](Transcript_Corrected.md#T44) 因果性留待下次，作业与下课 | B 41:54–42:31 音频末端 | S4 L175–L177 | 54,58 | [N16](Lecture_Notes.md#N16) | 转写主题+课件内容；未核听 |

<!-- ALIGNMENT_JSON
[
  {
    "id": "T01",
    "title": "本讲任务：连续时间系统的时域分析",
    "start": 3,
    "end": 181,
    "time": "A 00:03–03:01",
    "pages": [
      1,
      3,
      4
    ],
    "notes": "N01",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 3,
    "local_end": 181,
    "raw_lines": [
      7,
      15
    ]
  },
  {
    "id": "T02",
    "title": "回顾 LTI 与冲激分解",
    "start": 181,
    "end": 284,
    "time": "A 03:01–04:44",
    "pages": [
      2
    ],
    "notes": "N01",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 181,
    "local_end": 284,
    "raw_lines": [
      16,
      21
    ]
  },
  {
    "id": "T03",
    "title": "系统建模与求解路线",
    "start": 284,
    "end": 405,
    "time": "A 04:44–06:45",
    "pages": [
      3,
      4
    ],
    "notes": "N01",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 284,
    "local_end": 405,
    "raw_lines": [
      22,
      27
    ]
  },
  {
    "id": "T04",
    "title": "课程重点与电路建模基础",
    "start": 405,
    "end": 548,
    "time": "A 06:45–09:08",
    "pages": [
      4,
      5
    ],
    "notes": "N02",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 405,
    "local_end": 548,
    "raw_lines": [
      28,
      36
    ]
  },
  {
    "id": "T05",
    "title": "复杂电路列式要求降低，给定方程仍须会求",
    "start": 548,
    "end": 716,
    "time": "A 09:08–11:56",
    "pages": [
      5,
      6
    ],
    "notes": "N02",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 548,
    "local_end": 716,
    "raw_lines": [
      37,
      45
    ]
  },
  {
    "id": "T06",
    "title": "由指数试解得到特征方程",
    "start": 716,
    "end": 838,
    "time": "A 11:56–13:58",
    "pages": [
      7
    ],
    "notes": "N03",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 716,
    "local_end": 838,
    "raw_lines": [
      46,
      51
    ]
  },
  {
    "id": "T07",
    "title": "指数形式也包含正弦与余弦",
    "start": 838,
    "end": 938,
    "time": "A 13:58–15:38",
    "pages": [
      7,
      8
    ],
    "notes": "N03",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 838,
    "local_end": 938,
    "raw_lines": [
      52,
      57
    ]
  },
  {
    "id": "T08",
    "title": "特解形式与自由/强迫响应",
    "start": 938,
    "end": 1039,
    "time": "A 15:38–17:19",
    "pages": [
      8,
      13
    ],
    "notes": "N03",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 938,
    "local_end": 1039,
    "raw_lines": [
      58,
      63
    ]
  },
  {
    "id": "T09",
    "title": "用初始条件确定系数",
    "start": 1039,
    "end": 1156,
    "time": "A 17:19–19:16",
    "pages": [
      9
    ],
    "notes": "N03",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1039,
    "local_end": 1156,
    "raw_lines": [
      64,
      69
    ]
  },
  {
    "id": "T10",
    "title": "激励接入瞬间可能跳变",
    "start": 1156,
    "end": 1272,
    "time": "A 19:16–21:12",
    "pages": [
      10,
      14
    ],
    "notes": "N04",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1156,
    "local_end": 1272,
    "raw_lines": [
      70,
      78
    ]
  },
  {
    "id": "T11",
    "title": "经典法流程与课堂动笔练习",
    "start": 1272,
    "end": 1406,
    "time": "A 21:12–23:26",
    "pages": [
      11,
      12
    ],
    "notes": "N05",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1272,
    "local_end": 1406,
    "raw_lines": [
      79,
      81
    ]
  },
  {
    "id": "T12",
    "title": "二阶例题：配平特解、代初值定齐次项",
    "start": 1406,
    "end": 1637,
    "time": "A 23:26–27:17",
    "pages": [
      12
    ],
    "notes": "N05",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1406,
    "local_end": 1637,
    "raw_lines": [
      82,
      90
    ]
  },
  {
    "id": "T13",
    "title": "回看两部分解与起始点条件",
    "start": 1637,
    "end": 1679,
    "time": "A 27:17–27:59",
    "pages": [
      13,
      14
    ],
    "notes": "N04",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1637,
    "local_end": 1679,
    "raw_lines": [
      91,
      93
    ]
  },
  {
    "id": "T14",
    "title": "按响应起因分成零输入与零状态",
    "start": 1679,
    "end": 1790,
    "time": "A 27:59–29:50",
    "pages": [
      15
    ],
    "notes": "N06",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1679,
    "local_end": 1790,
    "raw_lines": [
      94,
      99
    ]
  },
  {
    "id": "T15",
    "title": "双零分解与经典分解怎样相容",
    "start": 1790,
    "end": 1900,
    "time": "A 29:50–31:40",
    "pages": [
      16,
      17
    ],
    "notes": "N06",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1790,
    "local_end": 1900,
    "raw_lines": [
      100,
      105
    ]
  },
  {
    "id": "T16",
    "title": "RC 例题：初始电压与单位阶跃",
    "start": 1900,
    "end": 1999,
    "time": "A 31:40–33:19",
    "pages": [
      18
    ],
    "notes": "N06",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1900,
    "local_end": 1999,
    "raw_lines": [
      106,
      111
    ]
  },
  {
    "id": "T17",
    "title": "由连续性求完全解，上段在此中断",
    "start": 1999,
    "end": 2080.0065,
    "time": "A 33:19–34:40 音频末端",
    "pages": [
      18
    ],
    "notes": "N06",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S2",
    "audio_source": "S3",
    "local_start": 1999,
    "local_end": 2080.0065,
    "raw_lines": [
      112,
      117
    ]
  },
  {
    "id": "T18",
    "title": "下段接续：因果输入与因果系统的积分限",
    "start": 2080.0065,
    "end": 2170.0065,
    "time": "B 00:00–01:30",
    "pages": [
      26
    ],
    "notes": "N08",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 0,
    "local_end": 90,
    "raw_lines": [
      7,
      18
    ]
  },
  {
    "id": "T19",
    "title": "由冲激响应确定 LTI 零状态特性",
    "start": 2170.0065,
    "end": 2257.0065,
    "time": "B 01:30–02:57",
    "pages": [
      27,
      28
    ],
    "notes": "N08",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 90,
    "local_end": 177,
    "raw_lines": [
      19,
      24
    ]
  },
  {
    "id": "T20",
    "title": "冲激后的自由演化与掌握知识点",
    "start": 2257.0065,
    "end": 2364.0065,
    "time": "B 02:57–04:44",
    "pages": [
      28,
      29
    ],
    "notes": "N09",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 177,
    "local_end": 284,
    "raw_lines": [
      25,
      30
    ]
  },
  {
    "id": "T21",
    "title": "冲激响应例题：让求导产生冲激项",
    "start": 2364.0065,
    "end": 2476.0065,
    "time": "B 04:44–06:36",
    "pages": [
      30,
      31
    ],
    "notes": "N09",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 284,
    "local_end": 396,
    "raw_lines": [
      31,
      36
    ]
  },
  {
    "id": "T22",
    "title": "显式阶跃与“零状态、齐次形式”的关系",
    "start": 2476.0065,
    "end": 2553.0065,
    "time": "B 06:36–07:53",
    "pages": [
      31,
      32
    ],
    "notes": "N09",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 396,
    "local_end": 473,
    "raw_lines": [
      37,
      45
    ]
  },
  {
    "id": "T23",
    "title": "奇异项与方程阶次",
    "start": 2553.0065,
    "end": 2583.0065,
    "time": "B 07:53–08:23",
    "pages": [
      29,
      32
    ],
    "notes": "N09",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 473,
    "local_end": 503,
    "raw_lines": [
      46,
      48
    ]
  },
  {
    "id": "T24",
    "title": "卷积是一种新运算",
    "start": 2583.0065,
    "end": 2727.0065,
    "time": "B 08:23–10:47",
    "pages": [
      33,
      34
    ],
    "notes": "N10",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 503,
    "local_end": 647,
    "raw_lines": [
      49,
      54
    ]
  },
  {
    "id": "T25",
    "title": "卷积表达式与反折、平移",
    "start": 2727.0065,
    "end": 2815.0065,
    "time": "B 10:47–12:15",
    "pages": [
      34,
      35
    ],
    "notes": "N10",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 647,
    "local_end": 735,
    "raw_lines": [
      55,
      57
    ]
  },
  {
    "id": "T26",
    "title": "每个 t 求一个值，组合成输出函数",
    "start": 2815.0065,
    "end": 2907.0065,
    "time": "B 12:15–13:47",
    "pages": [
      35,
      36
    ],
    "notes": "N10",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 735,
    "local_end": 827,
    "raw_lines": [
      58,
      60
    ]
  },
  {
    "id": "T27",
    "title": "图示：进入重叠、达到峰值、完全离开",
    "start": 2907.0065,
    "end": 3048.0065,
    "time": "B 13:47–16:08",
    "pages": [
      36
    ],
    "notes": "N10",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 827,
    "local_end": 968,
    "raw_lines": [
      61,
      66
    ]
  },
  {
    "id": "T28",
    "title": "课堂观察：卷积的长度与平滑",
    "start": 3048.0065,
    "end": 3202.0065,
    "time": "B 16:08–18:42",
    "pages": [
      36
    ],
    "notes": "N10",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 968,
    "local_end": 1122,
    "raw_lines": [
      67,
      78
    ]
  },
  {
    "id": "T29",
    "title": "RL 阶跃响应与因果积分限",
    "start": 3202.0065,
    "end": 3289.0065,
    "time": "B 18:42–20:09",
    "pages": [
      37,
      38
    ],
    "notes": "N11",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1122,
    "local_end": 1209,
    "raw_lines": [
      79,
      84
    ]
  },
  {
    "id": "T30",
    "title": "截断指数激励：分段限制积分区间",
    "start": 3289.0065,
    "end": 3415.0065,
    "time": "B 20:09–22:15",
    "pages": [
      38,
      39
    ],
    "notes": "N11",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1209,
    "local_end": 1335,
    "raw_lines": [
      85,
      90
    ]
  },
  {
    "id": "T31",
    "title": "阶跃表达让分段结果更紧凑",
    "start": 3415.0065,
    "end": 3455.0065,
    "time": "B 22:15–22:55",
    "pages": [
      40
    ],
    "notes": "N11",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1335,
    "local_end": 1375,
    "raw_lines": [
      91,
      93
    ]
  },
  {
    "id": "T32",
    "title": "课后重算要求与卷积区间规则",
    "start": 3455.0065,
    "end": 3523.0065,
    "time": "B 22:55–24:03",
    "pages": [
      40,
      41
    ],
    "notes": "N10",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1375,
    "local_end": 1443,
    "raw_lines": [
      94,
      96
    ]
  },
  {
    "id": "T33",
    "title": "矩形与斜坡例题，预告性质能简化计算",
    "start": 3523.0065,
    "end": 3600.0065,
    "time": "B 24:03–25:20",
    "pages": [
      42
    ],
    "notes": "N12",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1443,
    "local_end": 1520,
    "raw_lines": [
      97,
      99
    ]
  },
  {
    "id": "T34",
    "title": "为什么重视卷积",
    "start": 3600.0065,
    "end": 3681.0065,
    "time": "B 25:20–26:41",
    "pages": [
      33,
      43
    ],
    "notes": "N13",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1520,
    "local_end": 1601,
    "raw_lines": [
      100,
      102
    ]
  },
  {
    "id": "T35",
    "title": "交换律、分配律、结合律",
    "start": 3681.0065,
    "end": 3799.0065,
    "time": "B 26:41–28:39",
    "pages": [
      43,
      44
    ],
    "notes": "N13",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1601,
    "local_end": 1719,
    "raw_lines": [
      103,
      114
    ]
  },
  {
    "id": "T36",
    "title": "信号/系统互换，以及并联与级联",
    "start": 3799.0065,
    "end": 3935.0065,
    "time": "B 28:39–30:55",
    "pages": [
      44,
      45,
      46,
      47
    ],
    "notes": "N13",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1719,
    "local_end": 1855,
    "raw_lines": [
      115,
      123
    ]
  },
  {
    "id": "T37",
    "title": "卷积的微分与累积积分",
    "start": 3935.0065,
    "end": 4075.0065,
    "time": "B 30:55–33:15",
    "pages": [
      47,
      48
    ],
    "notes": "N14",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1855,
    "local_end": 1995,
    "raw_lines": [
      124,
      129
    ]
  },
  {
    "id": "T38",
    "title": "自己推导性质，比只记题目更重要",
    "start": 4075.0065,
    "end": 4120.0064999999995,
    "time": "B 33:15–34:00",
    "pages": [
      48,
      49
    ],
    "notes": "N14",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 1995,
    "local_end": 2040,
    "raw_lines": [
      130,
      132
    ]
  },
  {
    "id": "T39",
    "title": "用冲激平移简化矩形卷积",
    "start": 4120.0064999999995,
    "end": 4256.0064999999995,
    "time": "B 34:00–36:16",
    "pages": [
      50
    ],
    "notes": "N14",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 2040,
    "local_end": 2176,
    "raw_lines": [
      133,
      141
    ]
  },
  {
    "id": "T40",
    "title": "冲激、冲激偶、阶跃与奇偶性问答",
    "start": 4256.0064999999995,
    "end": 4325.0064999999995,
    "time": "B 36:16–37:25",
    "pages": [
      51
    ],
    "notes": "N14",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 2176,
    "local_end": 2245,
    "raw_lines": [
      142,
      153
    ]
  },
  {
    "id": "T41",
    "title": "选择更简单的一边微分或积分",
    "start": 4325.0064999999995,
    "end": 4439.0064999999995,
    "time": "B 37:25–39:19",
    "pages": [
      51,
      52,
      53
    ],
    "notes": "N14",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 2245,
    "local_end": 2359,
    "raw_lines": [
      154,
      159
    ]
  },
  {
    "id": "T42",
    "title": "符号函数反例：差了一个常数",
    "start": 4439.0064999999995,
    "end": 4523.0064999999995,
    "time": "B 39:19–40:43",
    "pages": [
      53
    ],
    "notes": "N15",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 2359,
    "local_end": 2443,
    "raw_lines": [
      160,
      168
    ]
  },
  {
    "id": "T43",
    "title": "负无穷边界条件的课堂解释",
    "start": 4523.0064999999995,
    "end": 4594.0064999999995,
    "time": "B 40:43–41:54",
    "pages": [
      53
    ],
    "notes": "N15",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 2443,
    "local_end": 2514,
    "raw_lines": [
      169,
      174
    ]
  },
  {
    "id": "T44",
    "title": "因果性留待下次，作业与下课",
    "start": 4594.0064999999995,
    "end": 4630.673,
    "time": "B 41:54–42:31 音频末端",
    "pages": [
      54,
      58
    ],
    "notes": "N16",
    "certainty": "依据转写内容与课件主题对齐；不是精确翻页时刻；原音未核听",
    "source": "S4",
    "audio_source": "S5",
    "local_start": 2514,
    "local_end": 2550.6665,
    "raw_lines": [
      175,
      177
    ]
  }
]
END_ALIGNMENT_JSON -->

## 逐页覆盖清单

每一页均有去向。多页重复展示同一主题时，稳定讲义章节集中讲解，不把重复页机械扩成重复正文。

| PDF页 | 内容 / 状态 | 落点 |
|---|---|---|
| [p.1](Raw/Ch2.pdf#page=1) | 封面、章名；非知识正文 | [N01](Lecture_Notes.md#N01) |
| [p.2](Raw/Ch2.pdf#page=2) | 前课回顾：冲激、分解、LTI | [N01](Lecture_Notes.md#N01) |
| [p.3](Raw/Ch2.pdf#page=3) | 输入输出模型及分析路线图 | [N01](Lecture_Notes.md#N01) |
| [p.4](Raw/Ch2.pdf#page=4) | 本章目标、重难点 | [N01](Lecture_Notes.md#N01) |
| [p.5](Raw/Ch2.pdf#page=5) | 元件约束与三步法 | [N02](Lecture_Notes.md#N02) |
| [p.6](Raw/Ch2.pdf#page=6) | 复杂电路建模示例，列式非本课必做要求 | [N02](Lecture_Notes.md#N02) |
| [p.7](Raw/Ch2.pdf#page=7) | 特征方程与无重根齐次解 | [N03](Lecture_Notes.md#N03) |
| [p.8](Raw/Ch2.pdf#page=8) | 特解表、自由/强迫定义 | [N03](Lecture_Notes.md#N03) |
| [p.9](Raw/Ch2.pdf#page=9) | 初始条件定系数 | [N03](Lecture_Notes.md#N03) |
| [p.10](Raw/Ch2.pdf#page=10) | 0−/0+与后续拉氏法 | [N04](Lecture_Notes.md#N04) |
| [p.11](Raw/Ch2.pdf#page=11) | 经典法流程图 | [N03](Lecture_Notes.md#N03) |
| [p.12](Raw/Ch2.pdf#page=12) | 二阶多项式例题，完整复算 | [N05](Lecture_Notes.md#N05) |
| [p.13](Raw/Ch2.pdf#page=13) | 自由与强迫分解 | [N03](Lecture_Notes.md#N03) |
| [p.14](Raw/Ch2.pdf#page=14) | 状态与起始点跳变 | [N04](Lecture_Notes.md#N04) |
| [p.15](Raw/Ch2.pdf#page=15) | 三种响应分解及双零定义 | [N06](Lecture_Notes.md#N06) |
| [p.16](Raw/Ch2.pdf#page=16) | 双零响应形式 | [N06](Lecture_Notes.md#N06) |
| [p.17](Raw/Ch2.pdf#page=17) | 两种分解的系数关系 | [N06](Lecture_Notes.md#N06) |
| [p.18](Raw/Ch2.pdf#page=18) | RC题设与全响应，转写−1/课件−3冲突 | [N06](Lecture_Notes.md#N06) |
| [p.19](Raw/Ch2.pdf#page=19) | RC双零细算；断点课件补充 | [N06](Lecture_Notes.md#N06) |
| [p.20](Raw/Ch2.pdf#page=20) | 分解波形与线性；断点课件补充 | [N06](Lecture_Notes.md#N06) |
| [p.21](Raw/Ch2.pdf#page=21) | 零状态/零输入线性例题；断点课件补充 | [N07](Lecture_Notes.md#N07) |
| [p.22](Raw/Ch2.pdf#page=22) | 自由响应系数与跳变说明；断点课件补充 | [N07](Lecture_Notes.md#N07) |
| [p.23](Raw/Ch2.pdf#page=23) | h、g定义；断点课件补充 | [N08](Lecture_Notes.md#N08) |
| [p.24](Raw/Ch2.pdf#page=24) | 冲激分解示意；断点课件补充 | [N08](Lecture_Notes.md#N08) |
| [p.25](Raw/Ch2.pdf#page=25) | 窄脉冲极限推导；断点课件补充 | [N08](Lecture_Notes.md#N08) |
| [p.26](Raw/Ch2.pdf#page=26) | 卷积表达与因果限，B段起始接续 | [N08](Lecture_Notes.md#N08) |
| [p.27](Raw/Ch2.pdf#page=27) | 冲激响应叠加图 | [N08](Lecture_Notes.md#N08) |
| [p.28](Raw/Ch2.pdf#page=28) | h的系统意义与自由演化 | [N08](Lecture_Notes.md#N08) |
| [p.29](Raw/Ch2.pdf#page=29) | 奇异项阶次平衡；简略讲述 | [N09](Lecture_Notes.md#N09) |
| [p.30](Raw/Ch2.pdf#page=30) | 求h例题题设、齐次根 | [N09](Lecture_Notes.md#N09) |
| [p.31](Raw/Ch2.pdf#page=31) | 阶跃求导与系数配平 | [N09](Lecture_Notes.md#N09) |
| [p.32](Raw/Ch2.pdf#page=32) | h的形式及阶次条件，k=0漏项订正 | [N09](Lecture_Notes.md#N09) |
| [p.33](Raw/Ch2.pdf#page=33) | 卷积引入及跨学科图示 | [N10](Lecture_Notes.md#N10) |
| [p.34](Raw/Ch2.pdf#page=34) | 复习由h求零状态响应 | [N08](Lecture_Notes.md#N08) |
| [p.35](Raw/Ch2.pdf#page=35) | 卷积四步骤 | [N10](Lecture_Notes.md#N10) |
| [p.36](Raw/Ch2.pdf#page=36) | 矩形/斜坡的六图过程 | [N10](Lecture_Notes.md#N10) |
| [p.37](Raw/Ch2.pdf#page=37) | RL阶跃响应例题 | [N11](Lecture_Notes.md#N11) |
| [p.38](Raw/Ch2.pdf#page=38) | 因果卷积步骤图及有效积分区间 | [N11](Lecture_Notes.md#N11) |
| [p.39](Raw/Ch2.pdf#page=39) | 截断指数题设与积分限 | [N11](Lecture_Notes.md#N11) |
| [p.40](Raw/Ch2.pdf#page=40) | 截断指数结果/波形，峰值示意差异 | [N11](Lecture_Notes.md#N11) |
| [p.41](Raw/Ch2.pdf#page=41) | 交集积分限与输出支撑 | [N10](Lecture_Notes.md#N10) |
| [p.42](Raw/Ch2.pdf#page=42) | 矩形/斜坡另一例；编者补全演算 | [N12](Lecture_Notes.md#N12) |
| [p.43](Raw/Ch2.pdf#page=43) | 交换、分配、结合律 | [N13](Lecture_Notes.md#N13) |
| [p.44](Raw/Ch2.pdf#page=44) | 三组等效系统框图 | [N13](Lecture_Notes.md#N13) |
| [p.45](Raw/Ch2.pdf#page=45) | 交换律解释，其他框图重复 | [N13](Lecture_Notes.md#N13) |
| [p.46](Raw/Ch2.pdf#page=46) | 并联解释，其他框图重复 | [N13](Lecture_Notes.md#N13) |
| [p.47](Raw/Ch2.pdf#page=47) | 级联解释，其他框图重复 | [N13](Lecture_Notes.md#N13) |
| [p.48](Raw/Ch2.pdf#page=48) | 微分、积分性质推导 | [N14](Lecture_Notes.md#N14) |
| [p.49](Raw/Ch2.pdf#page=49) | 高阶及一导一积推广 | [N14](Lecture_Notes.md#N14) |
| [p.50](Raw/Ch2.pdf#page=50) | 矩形求导、斜坡积分的图解 | [N14](Lecture_Notes.md#N14) |
| [p.51](Raw/Ch2.pdf#page=51) | 与冲激、冲激偶、阶跃卷积 | [N14](Lecture_Notes.md#N14) |
| [p.52](Raw/Ch2.pdf#page=52) | 双极矩形例题；编者补全演算 | [N14](Lecture_Notes.md#N14) |
| [p.53](Raw/Ch2.pdf#page=53) | sgn反例与负无穷边界 | [N15](Lecture_Notes.md#N15) |
| [p.54](Raw/Ch2.pdf#page=54) | 因果性：教师明确留后续，自学预览 | [N16](Lecture_Notes.md#N16) |
| [p.55](Raw/Ch2.pdf#page=55) | 稳定性判据：无本讲已授证据，未讲预览 | [N16](Lecture_Notes.md#N16) |
| [p.56](Raw/Ch2.pdf#page=56) | 稳定性两例：无本讲已授证据，未讲预览 | [N16](Lecture_Notes.md#N16) |
| [p.57](Raw/Ch2.pdf#page=57) | 课件要求总结；未确认逐项口述 | [N16](Lecture_Notes.md#N16) |
| [p.58](Raw/Ch2.pdf#page=58) | 作业、2-18更正、预习 | [N16](Lecture_Notes.md#N16) |
| [p.59](Raw/Ch2.pdf#page=59) | 致谢，非教学正文 | [N16](Lecture_Notes.md#N16) |

## 重要订正、条件与待核听

| 编号 | 原定位/原表述 | 处理与可靠依据 | 音频状态及影响 |
|---|---|---|---|
| C01 | A多处“其次解”“冲击响应” | 规范为齐次解、冲激响应；课件与教材统一术语 | 未核听；不影响数值 |
| C02 | A 15:38–17:19“自由响应跟输入没有关系” | 区分模态形式与系数；p.22及教材PDF p.76说明系数可依赖激励 | 待核听；避免自由=零输入的误解 |
| C03 | A 19:49冲激“0时刻取无穷大” | 只作直观说法；讲义按广义函数积分性质说明 | 未核听；不当作普通跳变定义 |
| C04 | A 23:26“没有零根” | 订正为无重根；p.7条件与p.12互异根−2、−1 | 待核听，根数值不变 |
| C05 | A 32:07“特征根−1” | p.18元件1Ω、1/3F及方程r′+3r=3e，一致支持−3；采用e^(−3t) | 重点待核听；时间常数受影响 |
| C06 | A 28:52“零状态初始条件就是0” | 指激励前状态，不能一般推输出0+为零；p.14、23、31及教材PDF p.80 | 未核听；定义条件补足 |
| C07 | B 04:44“输出天然在0以后” | 限定本例因果初始静止系统，非任意LTI的性质 | 待核听；不改变本例结果 |
| C08 | 课件p.32奇异求和从k=1开始 | 改k=0起；同页m=n应含δ的说明及最高阶配平支持；低阶系数可为零 | PDF可证，非ASR；不修改Raw |
| C09 | B 10:47“先平移再反折都可以” | 使用p.35固定顺序；若反序则须改变移位方向 | 待核听；操作条件补足 |
| C10 | B 21:00把u(τ)、u(τ−2)识成u(t)、u(t−2) | 依p.39的积分变量/不等式订正为τ | 待核听；决定积分限 |
| C11 | B 22:55“上下限取并集” | 依p.41上限取小、下限取大，订正交集；N10给出不等式推导 | 重点待核听；不得按并集求积 |
| C12 | B 27:10分配律第二项f2*f3 | 依p.43订正为f1*f3 | 重点待核听；公式错误 |
| C13 | B 33:15高阶微积分公式识别混乱 | 按p.49给公式，不虚构逐字口述，条件见p.53 | 待核听；仅恢复课件式 |
| C14 | B 36:16“频率影响” | p.51平移冲激卷积式支持时间平移 | 待核听；术语影响含义 |
| C15 | B 39:19“2倍的预期的” | p.53反例图支持2u(t)，与sgn差常数1 | 重点待核听 |
| C16 | B 41:02“负无穷不得0…我不保证全对” | 保留口头限定；N15用边界项作编者推导；教材PDF p.92核页 | 未核听；不夸大课堂结论 |
| C17 | p.40示意图峰值似在2 | 公式一阶导数给峰值2ln2，约1.386；正文指出示意差异 | PDF与复算支持；不改原图 |
| C18 | p.25单个窄脉冲区间写τ<t<t+Δ | 正确局部区间为τ≤t<τ+Δ；课件阶跃差直接支持；讲义用一般窄脉冲极限避免混淆 | PDF可证，非音频确认 |
| C19 | p.29中次高阶系数重复写C0、E0；p.7中一次r写i | 总模型统一C0,C1…及E0,E1…，输出统一r；p.3、5和教材p.80支持 | 课件符号排印订正 |
| C20 | p.38写积分区间(−∞,t) | 作为因果h的截断上限可用；结合本例因果输入，实际非零区间[0,t] | 不简单判整式错误，N11解释 |
| C21 | 课件p.58更正2-18激励 | 采用2e^(−3t)u(t)；第三版PDF p.105原题确为u(t−1) | 原页核验，未验证第四版 |

不得把“可能为ASR或口头差异”擅自归因为教师说错。C05、C11、C12、C15为优先核听项，分别返回A32:07、B22:55、B27:10、B39:19附近。当前学习结论已有课件及复算限定，交付draft，不宣称reviewed。

## 教材检索与缓存证据

| 目的 | 实际页 | 结果 |
|---|---|---|
| 双零定义、自由响应系数 | PDF76 / 印刷60 | 视觉精读，明确自由模态形式与系数的区别 |
| 冲激响应定义及阶次 | PDF80 / 印刷64 | 视觉精读，定义明确要求零状态 |
| 微积分性质的条件 | PDF92 / 印刷76，式(2-70)后 | 视觉精读，时间受限/负无穷条件；提示2-19(b) |
| 作业2-4 | PDF103 / 印刷87 | 三组齐次方程及0+条件已核到题面，不解题 |
| 作业2-6、2-7、2-8 | PDF103–104 / 印刷87–88 | 题面和选做电路图核验 |
| 作业2-12、2-13(1,5)、2-18 | PDF104–105 / 印刷88–89 | 题面/更正范围核验 |
| 作业2-19(b) | 波形PDF105，题干PDF106 / 印刷89–90 | f1=1+u(t−1)在负时间不为零；f2=e^(−t−1)u(t+1) |

局部可检索节选另存教材缓存；不是整页OCR，也不是全书已读。缓存身份由当前教材完整SHA256决定。重复命中和改变来源不命中旧缓存的实测结果见QA报告。

## 内容分层与删除边界

- FACT：课件模型、定义、例题数据、图和作业；转写可证的课程要求。
- EXPLANATION：教师对指数解、冲激储能、卷积图解、线性、学习方法的说明，保留于课堂回顾。
- DERIVED：重根/共振条件、跳变积分示例、断点课件的展开、分段例题细算、峰值复算、边界项证明；正文就地标识，不冒充教师原话。
- UNCERTAIN：原音语义、断点实际讲述、课件与口头数字冲突、第四版题面；正文及本页都有限定。
- 两份转写共有94个带时间戳发言块，均归入44段；覆盖清单见 `assets/qa/transcript-coverage.json`。检查覆盖并不自动证明语义忠实，人工已逐段对读。
- 删除：无意义的“是吧”等重复、断续重复词、27:55的重复字母，以及与教学无关的闹钟细节；保留课初回顾、学生“平滑/奇函数”回答、动笔要求与课末选做说明。只有删除赘词，不以旧摘要替换正文。
- 本页对齐JSON为唯一正式映射；表格由同一数据生成。未创建学习记录，未重编译历史讲次，未修改v2.0基线或共享渲染器。

## v2.0.1语言修订记录

2026-09-22：用户已认可L01的讲解型写法，本讲按相同规范通读修订。编校说明移出学习叙述，必要推导自然衔接；原始材料、N/T锚点和片段映射保留。来源与实际处理状态以本文件原有记录为准，本轮语言修订不表示新增原音核听。RC特征根采用原有订正结果−3；中断段的内容补足仍在讲义，未新增课堂T段。上段约34:40，下段約42:31，B段播放器偏移2080.0065秒，按原有映射定位。

<details markdown="1">
<summary>按片段归并的编校说明</summary>

- [T02](Transcript_Corrected.md#T02)：公式依上文和课件 p.25 补全为 \(e(t)=\int e(\tau)\delta(t-\tau)d\tau\)。开场转写只留下“有这么一个性质”等指代，没有完整识别公式；不是新增的教师逐字引文。

- [T06](Transcript_Corrected.md#T06)：术语“其次解”统一订正为“齐次解”。指数形式及无重根条件以课件 p.7 为准；重根补充放在讲义，不写成教师本段讲授。

- [T08](Transcript_Corrected.md#T08)：原转写把自由响应概括为“跟输入无关”，应理解为齐次模态的形式由系统决定；系数仍可能与激励有关，见课件 p.22。课件查表也有不与齐次解重合等条件，讲义已单列说明。

- [T10](Transcript_Corrected.md#T10)：冲激不是普通跳变函数；转写的“零时刻取无穷大”只保留为直观描述。变换法把跳变计入结果，并非可以不顾跳变。

- [T12](Transcript_Corrected.md#T12)：转写中的“没有零根”按上下文及 p.7 的条件订正为“没有重根”；公式系数和最终结果按 p.12 补全。

- [T14](Transcript_Corrected.md#T14)：本段口头“初始条件就是零”在严谨定义中指激励前状态为零；不代表各种输入下输出 \(0^+\) 值都必须为零。

- [T17](Transcript_Corrected.md#T17)：本例电压连续有无冲激电流的前提。最后一个转写时间戳是 34:03，音频总长约 34:40；两者不是同一个概念。

- [T18](Transcript_Corrected.md#T18)：数学条件是 \(h(t-\tau)=0\) 对 \(\tau>t\) 成立。下段开头已经在讨论卷积积分限；前面的详细推导没有出现在已提供的两份转写中。

- [T19](Transcript_Corrected.md#T19)：本段“任意输入的响应”限定为零状态；零点可能存在的冲激直接项另见 T23。

- [T21](Transcript_Corrected.md#T21)：公式依 p.30–31 补全：\(h''+4h'+3h=\delta'+2\delta\)，配平得到 \(A_1+A_2=1\)、\(3A_1+A_2=2\)。这里不是说所有系统输出天然都是因果信号。

- [T23](Transcript_Corrected.md#T23)：课件 p.32 的求和漏了零阶项，本稿在讲义 N09 订正，并未把完整阶次推导写成这一分钟内的课堂讲解。

- [T25](Transcript_Corrected.md#T25)：原话提到也可“先平移再反折”。本稿固定采用课件顺序；若调换顺序，平移方向须相应变化，不能原样交换两步。

- [T26](Transcript_Corrected.md#T26)：图中从左向右移动对应参数 \(t\) 的变化；对某一个固定位置求面积，才是对 \(\tau\) 积分。两者在口头描述中交织，本稿明确区分。

- [T28](Transcript_Corrected.md#T28)：讲义以 \(f*\delta=f\) 提醒这不是普遍定理；支撑区间条件见 N10。

- [T30](Transcript_Corrected.md#T30)：上述 \(\tau\) 变量按 p.39 订正；原转写数处把积分变量识别成 t。输入题设是 \(e^{-t/2}[u(t)-u(t-2)]\)。

- [T31](Transcript_Corrected.md#T31)：讲义 N11 保留两种结果并补全计算；课件曲线只作示意，峰值位置应由公式复算。

- [T32](Transcript_Corrected.md#T32)：关键订正：原转写说积分上下限“取它的并集”。课件 p.41 明写“上限取小，下限取大”，实际是反折平移后两因子非零区间的**交集**。原音未核听，不判定是口误还是识别错误；不应照原转写计算。

- [T34](Transcript_Corrected.md#T34)：“事物相互作用往往是卷积”是课堂直觉性解释；本稿的数学结论限定在相应 LTI、零状态与卷积存在条件下。

- [T35](Transcript_Corrected.md#T35)：原转写分配律第二项为 \(f_2*f_3\)，按 p.43 订正；27:55 的重复字母无独立教学含义，合并删除。

- [T37](Transcript_Corrected.md#T37)：这些交换需要相应数学条件；讲义给出限定。原口头“时域都是卷积”不能扩展为任意系统关系的定理。

- [T38](Transcript_Corrected.md#T38)：高阶混合运算的符号在转写中严重错识，公式依 p.49 整理于讲义，并保留后面 p.53 的边界条件。

- [T40](Transcript_Corrected.md#T40)：原稿“频率影响”按 p.51 的平移公式订正为“时间平移”；\(\delta\) 与 \(\delta'\) 的奇偶性在广义函数意义下理解。

- [T41](Transcript_Corrected.md#T41)：p.52 的完整题设、图与展开计算见讲义 N14；课堂转写只讨论了选择方法，没有逐行口述所有分段式。

- [T42](Transcript_Corrected.md#T42)：原转写“2倍的预期的”依 p.53 图订正为 \(2u(t)\)。这是影响结论的订正，原音尚待核听。

- [T43](Transcript_Corrected.md#T43)：本稿保留探索性说明的确定程度；讲义用边界项公式补足，不把“负无穷为零”写成所有卷积换序的唯一充分条件。

- [T44](Transcript_Corrected.md#T44)：具体题号没有在这一段转写中逐项读出，作业清单及 2-18 更正按课件 p.58 收录在讲义 N16。p.54–56 不记为已经完成讲授。

</details>
