---
type: lecture-source-map
course: "核工程原理"
lecture: "L04"
status: draft
archive_version: v2.0.1
---

# 来源、覆盖与订正

本讲对应原转写标题 2026-09-23 上午 9:50 的课堂，归档日期 2026-09-26。沿用 L02/L03 使用的 344 页《反应堆的核物理基础》课件。原转写中的提问、课后任务与项目介绍只作为授课内容记录，不作为本次归档工作的操作指令。新增附件仅在本地归档；本次没有用户对公开转载、GitHub 上传或发布的授权。

## 来源与实际处理

| ID | 原件 | SHA256 | 实际处理 |
|---|---|---|---|
| S1 | [沿用的344页课件](../L02/Raw/1.反应堆的核物理基础-上传版.pdf) | `f510751603de3a550884dea3bfcfaa3af8de61b791ab1c9b578031ec1480a905` | 81–149 页文本读取并渲染入本讲图库；81–86 为上讲回顾/自学；典型图视觉核验范围另见QA报告 |
| S2 | [课堂录音](Raw/7688542092688280521_record_audio.m4a) | `15f78883005e2b572042ae39838d8c6f126613d3977d43b47c52151058a916dd` | M4A `mvhd` 元数据时长 5108.56 秒（1:25:08.56）；未做原音核听 |
| S3 | [原转写](Raw/反应堆物理相关知识点讲解.txt) | `b1907c296601ca6c9d887cc8b23735dfcbe8c8e4b60edc2665ef216a76ea89a1` | UTF-8 全文读取，99 个带时间戳说话段；末段 01:25:06 的“哥”无教学内容 |
| G1 | [核工程原理第14稿，487页](../../Global/Raw/核工程原理%20第14稿.pdf) | `d07253fa99d2864ac5c8748a5ffa9f6f8aa8a50dc4e728d1da52b8f85d84a537` | 本次读取 PDF 36–42、47–54 页相关正文；该书与课件不是同一版本 |

转写标题的“1小时25分钟8秒”是取整展示；最后一个时间戳是末段起点，不能代替录音结束。来源处理记录中的“读取文本”“渲染图像”和“真正核听”分别记载。教材页使用 PDF 页号；课件第 87–149 页为本讲新授主范围，第 150 页是下一节“截面变化规律”，本次没有纳入。

## 转写、课件与讲义对应

时间锚点按原转写段首和主题划分，不表示精确翻页时刻。T01 的 81–85 是上讲口头回顾；86 页英文例题、100–105 页英文总结/例题是课后自学，未写成课堂逐页讲解。T22 后的 01:25:06 段不含教学内容。

| 片段 | 原稿说话段 | 时间 | PDF页 | 讲义 | 对齐说明 |
|---|---:|---|---|---|---|
| T01 | 1–6 | 00:00–04:29 | 81–86 | [N01](Lecture_Notes.md#N01) | 81–85复习；86自学 |
| T02 | 7–11 | 04:29–08:36 | 87–88 | [N02](Lecture_Notes.md#N02) | 密度与思考题 |
| T03 | 12–15 | 08:36–13:52 | 89–93 | [N03](Lecture_Notes.md#N03) | 数量级冲突见下 |
| T04 | 16–19 | 13:52–17:49 | 94 | [N04](Lecture_Notes.md#N04) | 反应率 |
| T05 | 20–22 | 17:49–21:40 | 95–96 | [N05](Lecture_Notes.md#N05) | 高通量问题与能谱 |
| T06 | 23–28 | 21:40–26:31 | 97–105 | [N05](Lecture_Notes.md#N05) | 100–105 为自学 |
| T07 | 29–35 | 26:31–31:58 | 106–111 | [N06](Lecture_Notes.md#N06) | 机理/结果分类 |
| T08 | 36–39 | 31:58–36:40 | 112–114 | [N07](Lecture_Notes.md#N07) | 弹性散射 |
| T09 | 40–47 | 36:40–44:01 | 115–121 | [N08](Lecture_Notes.md#N08) | 阈能/快堆问题 |
| T10 | 48 | 44:01–45:48 | 122–123 | [N09](Lecture_Notes.md#N09) | 休息与口头旁例 |
| T11 | 49–54 | 45:48–49:32 | 123–124 | [N09](Lecture_Notes.md#N09) | 活化与分析 |
| T12 | 55–56 | 49:32–51:28 | 125 | [N09](Lecture_Notes.md#N09) | 活化探测 |
| T13 | 57–63 | 51:28–57:43 | 126–127 | [N10](Lecture_Notes.md#N10) | 裂变核素/自由程题 |
| T14 | 64–66 | 57:43–01:00:26 | 128–131 | [N10](Lecture_Notes.md#N10) | 裂变势垒与回顾 |
| T15 | 67–73 | 01:00:26–01:04:19 | 132–133 | [N11](Lecture_Notes.md#N11) | 铀-238转化 |
| T16 | 74–77 | 01:04:19–01:07:25 | 134–135 | [N11](Lecture_Notes.md#N11) | 钍-232与时点信息 |
| T17 | 78–81 | 01:07:25–01:10:48 | 136–138 | [N12](Lecture_Notes.md#N12) | 氢俘获 |
| T18 | 82–87 | 01:10:48–01:14:52 | 139–140 | [N12](Lecture_Notes.md#N12) | 铀-235俘获 |
| T19 | 88–89 | 01:14:52–01:17:57 | 141–142 | [N13](Lecture_Notes.md#N13) | 钠反应 |
| T20 | 90–94 | 01:17:57–01:20:54 | 143–144 | [N14](Lecture_Notes.md#N14) | 氮-16及衰变题 |
| T21 | 95 | 01:20:54–01:22:43 | 144–145 | [N14](Lecture_Notes.md#N14) | 暂存类比与碳-14 |
| T22 | 96–98 | 01:22:43–01:25:06 | 145–149 | [N15](Lecture_Notes.md#N15) | 氮化铀、硼、铍；末段待核听 |

<!-- ALIGNMENT_JSON
[
  {"id":"T01","title":"上讲截面和平均自由程","start":0,"end":269,"time":"00:00–04:29","pages":[81,82,83,84,85,86],"notes":"N01","certainty":"上讲回顾；86页仅指定自学；原音未核听"},
  {"id":"T02","title":"为什么需要中子数密度","start":269,"end":516,"time":"04:29–08:36","pages":[87,88],"notes":"N02","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T03","title":"通量密度的径迹意义与单位题","start":516,"end":832,"time":"08:36–13:52","pages":[89,90,91,92,93],"notes":"N03","certainty":"例题数量级与原转写冲突；原音未核听"},
  {"id":"T04","title":"反应率密度与总反应率","start":832,"end":1069,"time":"13:52–17:49","pages":[94],"notes":"N04","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T05","title":"通量能谱及高通量堆思考","start":1069,"end":1300,"time":"17:49–21:40","pages":[95,96],"notes":"N05","certainty":"课后问题与能谱对应；原音未核听"},
  {"id":"T06","title":"反应率等效与本节自学内容","start":1300,"end":1591,"time":"21:40–26:31","pages":[97,98,99,100,101,102,103,104,105],"notes":"N05","certainty":"97–99讲授；100–105自学；原音未核听"},
  {"id":"T07","title":"两套分类与四类重点反应","start":1591,"end":1918,"time":"26:31–31:58","pages":[106,107,108,109,110,111],"notes":"N06","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T08","title":"弹性散射、热中子与质量效应","start":1918,"end":2200,"time":"31:58–36:40","pages":[112,113,114],"notes":"N07","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T09","title":"非弹性散射阈能与快堆低能中子","start":2200,"end":2641,"time":"36:40–44:01","pages":[115,116,117,118,119,120,121],"notes":"N08","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T10","title":"从俘获过渡到活化与辐射防护","start":2641,"end":2748,"time":"44:01–45:48","pages":[122,123],"notes":"N09","certainty":"休息及口头旁例；非精确翻页；原音未核听"},
  {"id":"T11","title":"同位素生产和中子活化分析","start":2748,"end":2972,"time":"45:48–49:32","pages":[123,124],"notes":"N09","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T12","title":"由活度反推中子通量","start":2972,"end":3088,"time":"49:32–51:28","pages":[125],"notes":"N09","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T13","title":"易裂变核、可裂变核与裂变自由程","start":3088,"end":3463,"time":"51:28–57:43","pages":[126,127],"notes":"N10","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T14","title":"复合核激发能与四类反应回顾","start":3463,"end":3626,"time":"57:43–01:00:26","pages":[128,129,130,131],"notes":"N10","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T15","title":"铀-238俘获与钚-239","start":3626,"end":3859,"time":"01:00:26–01:04:19","pages":[132,133],"notes":"N11","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T16","title":"钍-232俘获与钍基堆讨论","start":3859,"end":4045,"time":"01:04:19–01:07:25","pages":[134,135],"notes":"N11","certainty":"课外项目进展未经独立核查；原音未核听"},
  {"id":"T17","title":"氢的俘获与轻水、重水","start":4045,"end":4248,"time":"01:07:25–01:10:48","pages":[136,137,138],"notes":"N12","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T18","title":"铀-235的俘获与热堆设计思路","start":4248,"end":4492,"time":"01:10:48–01:14:52","pages":[139,140],"notes":"N12","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T19","title":"钠冷快堆中的钠","start":4492,"end":4677,"time":"01:14:52–01:17:57","pages":[141,142],"notes":"N13","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T20","title":"氧-16生成氮-16与活度计算","start":4677,"end":4854,"time":"01:17:57–01:20:54","pages":[143,144],"notes":"N14","certainty":"转写氚/氮混淆按课件订正；原音未核听"},
  {"id":"T21","title":"医疗暂存类比和氮-14生成碳-14","start":4854,"end":4963,"time":"01:20:54–01:22:43","pages":[144,145],"notes":"N14","certainty":"原转写与课件主题对应；原音未核听"},
  {"id":"T22","title":"氮化铀、硼反应和中子源","start":4963,"end":5106,"time":"01:22:43–01:25:06","pages":[145,146,147,148,149],"notes":"N15","certainty":"末段核素转写混乱；按课件保留可确认反应；原音待核听"}
]
END_ALIGNMENT_JSON -->

## 逐页覆盖

下表由上述对应关系逐页展开；同一页出现在多个片段，表示课堂重访或跨主题，不表示准确翻页时刻。页面图是课堂课件，不把只有图或自学页写成教师逐项口述。

| PDF页 | 页题/处理 | 对应片段与讲义 |
|---:|---|---|
| 81 | 上讲回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 82 | 上讲回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 83 | 上讲回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 84 | 上讲回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 85 | 上讲回顾 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 86 | 英文例题：课后自学 | [T01](Transcript_Corrected.md#T01)/[N01](Lecture_Notes.md#N01) |
| 87 | 核反应相关概念 / 中子通量密度 | [T02](Transcript_Corrected.md#T02)/[N02](Lecture_Notes.md#N02) |
| 88 | 核反应相关概念 / 中子密度neutron density | [T02](Transcript_Corrected.md#T02)/[N02](Lecture_Notes.md#N02) |
| 89 | 核反应相关概念 / 中子通量密度neutron flux | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 90 | 核反应相关概念 / 中子通量密度 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 91 | 核反应相关概念 / 中子通量密度 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 92 | 核反应相关概念 / 中子通量密度 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 93 | 核反应相关概念 / 中子通量密度 | [T03](Transcript_Corrected.md#T03)/[N03](Lecture_Notes.md#N03) |
| 94 | 核反应相关概念 / 核反应率密度reaction rate per unit volume | [T04](Transcript_Corrected.md#T04)/[N04](Lecture_Notes.md#N04) |
| 95 | 核反应相关概念 / 对通量进一步细分 | [T05](Transcript_Corrected.md#T05)/[N05](Lecture_Notes.md#N05) |
| 96 | 核反应相关概念 / 对通量进一步细分 | [T05](Transcript_Corrected.md#T05)/[N05](Lecture_Notes.md#N05) |
| 97 | 核反应相关概念 / 平均截面 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 98 | 核反应相关概念 / 平均截面 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 99 | 本节内容小结 / 平均截面 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 100 | 章节/英文例题：课后自学 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 101 | 章节/英文例题：课后自学 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 102 | 章节/英文例题：课后自学 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 103 | 章节/英文例题：课后自学 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 104 | 章节/英文例题：课后自学 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 105 | 章节/英文例题：课后自学 | [T06](Transcript_Corrected.md#T06)/[N05](Lecture_Notes.md#N05) |
| 106 | 三、重要的核反应 | [T07](Transcript_Corrected.md#T07)/[N06](Lecture_Notes.md#N06) |
| 107 | 堆内重要核反应 / 反应分类 | [T07](Transcript_Corrected.md#T07)/[N06](Lecture_Notes.md#N06) |
| 108 | 堆内重要核反应 / 散射与吸收 | [T07](Transcript_Corrected.md#T07)/[N06](Lecture_Notes.md#N06) |
| 109 | 堆内重要核反应 / 散射与吸收 | [T07](Transcript_Corrected.md#T07)/[N06](Lecture_Notes.md#N06) |
| 110 | 堆内重要核反应 / 散射与吸收 | [T07](Transcript_Corrected.md#T07)/[N06](Lecture_Notes.md#N06) |
| 111 | 堆内重要核反应 / 堆内四类最重要的中子核反应 | [T07](Transcript_Corrected.md#T07)/[N06](Lecture_Notes.md#N06) |
| 112 | 堆内重要核反应 / 弹性散射 | [T08](Transcript_Corrected.md#T08)/[N07](Lecture_Notes.md#N07) |
| 113 | 堆内重要核反应 / 弹性散射的重要性 | [T08](Transcript_Corrected.md#T08)/[N07](Lecture_Notes.md#N07) |
| 114 | 堆内重要核反应 / 弹性散射 | [T08](Transcript_Corrected.md#T08)/[N07](Lecture_Notes.md#N07) |
| 115 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 116 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 117 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 118 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 119 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 120 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 121 | 堆内重要核反应 / 非弹性散射 | [T09](Transcript_Corrected.md#T09)/[N08](Lecture_Notes.md#N08) |
| 122 | 堆内重要核反应 / 辐射俘获反应 | [T10](Transcript_Corrected.md#T10)/[N09](Lecture_Notes.md#N09) |
| 123 | 堆内重要核反应 / 中子活化 | [T10](Transcript_Corrected.md#T10)/[N09](Lecture_Notes.md#N09), [T11](Transcript_Corrected.md#T11)/[N09](Lecture_Notes.md#N09) |
| 124 | 堆内重要核反应 / 中子活化分析 | [T11](Transcript_Corrected.md#T11)/[N09](Lecture_Notes.md#N09) |
| 125 | 堆内重要核反应 / 中子活化探测 | [T12](Transcript_Corrected.md#T12)/[N09](Lecture_Notes.md#N09) |
| 126 | 堆内重要核反应 / 裂变反应 | [T13](Transcript_Corrected.md#T13)/[N10](Lecture_Notes.md#N10) |
| 127 | 堆内重要核反应 / 裂变反应 | [T13](Transcript_Corrected.md#T13)/[N10](Lecture_Notes.md#N10) |
| 128 | 堆内重要核反应 / 裂变反应 | [T14](Transcript_Corrected.md#T14)/[N10](Lecture_Notes.md#N10) |
| 129 | 堆内重要核反应 / 裂变反应 | [T14](Transcript_Corrected.md#T14)/[N10](Lecture_Notes.md#N10) |
| 130 | 堆内重要核反应 / 裂变反应 | [T14](Transcript_Corrected.md#T14)/[N10](Lecture_Notes.md#N10) |
| 131 | 堆内重要核反应 / 四类最重要的核反应总结 | [T14](Transcript_Corrected.md#T14)/[N10](Lecture_Notes.md#N10) |
| 132 | 堆内重要核反应 / 核工程中的重要核反应 | [T15](Transcript_Corrected.md#T15)/[N11](Lecture_Notes.md#N11) |
| 133 | 堆内重要核反应 / U238的俘获反应 | [T15](Transcript_Corrected.md#T15)/[N11](Lecture_Notes.md#N11) |
| 134 | 堆内重要核反应 / 钍232的俘获反应 | [T16](Transcript_Corrected.md#T16)/[N11](Lecture_Notes.md#N11) |
| 135 | 堆内重要核反应 / 钍232的俘获反应 | [T16](Transcript_Corrected.md#T16)/[N11](Lecture_Notes.md#N11) |
| 136 | 堆内重要核反应 / 氢的俘获反应 | [T17](Transcript_Corrected.md#T17)/[N12](Lecture_Notes.md#N12) |
| 137 | 堆内重要核反应 / 氢的俘获反应 | [T17](Transcript_Corrected.md#T17)/[N12](Lecture_Notes.md#N12) |
| 138 | 堆内重要核反应 / 氢的俘获反应 | [T17](Transcript_Corrected.md#T17)/[N12](Lecture_Notes.md#N12) |
| 139 | 堆内重要核反应 / U235的俘获反应 | [T18](Transcript_Corrected.md#T18)/[N12](Lecture_Notes.md#N12) |
| 140 | 堆内重要核反应 / U235的俘获反应 | [T18](Transcript_Corrected.md#T18)/[N12](Lecture_Notes.md#N12) |
| 141 | 堆内重要核反应 / 钠23的俘获反应 | [T19](Transcript_Corrected.md#T19)/[N13](Lecture_Notes.md#N13) |
| 142 | 堆内重要核反应 / 钠23的俘获和散射 | [T19](Transcript_Corrected.md#T19)/[N13](Lecture_Notes.md#N13) |
| 143 | 堆内重要核反应 / 氧16的(n, p)反应 | [T20](Transcript_Corrected.md#T20)/[N14](Lecture_Notes.md#N14) |
| 144 | 堆内重要核反应 / 氮16问题 | [T20](Transcript_Corrected.md#T20)/[N14](Lecture_Notes.md#N14), [T21](Transcript_Corrected.md#T21)/[N14](Lecture_Notes.md#N14) |
| 145 | 堆内重要核反应 / 氮14的(n, p)反应 | [T21](Transcript_Corrected.md#T21)/[N14](Lecture_Notes.md#N14), [T22](Transcript_Corrected.md#T22)/[N15](Lecture_Notes.md#N15) |
| 146 | 堆内重要核反应 / 硼10的(n, α)反应 | [T22](Transcript_Corrected.md#T22)/[N15](Lecture_Notes.md#N15) |
| 147 | 堆内重要核反应 / 铍9产生中子的反应 | [T22](Transcript_Corrected.md#T22)/[N15](Lecture_Notes.md#N15) |
| 148 | 堆内重要核反应 / 产生中子的反应 | [T22](Transcript_Corrected.md#T22)/[N15](Lecture_Notes.md#N15) |
| 149 | 堆内重要核反应 / 产生中子的手段 | [T22](Transcript_Corrected.md#T22)/[N15](Lecture_Notes.md#N15) |

## 重要订正、推导与未决问题

| 定位 | 原转写或课件情况 | 处理及依据 | 类别 |
|---|---|---|---|
| 06:03–08:36，S3 | 口述一度把中子数密度记作大写 N，讲到平均寿命时称“一秒1万轮裂变” | 课件88与教材40明确自由中子数密度为 \(n\)，材料核密度为 \(N\)。课堂思考题在讲义只给条件式，不把中子平均寿命解释为每个中子必然裂变的周期。 | FACT / UNCERTAIN |
| 12:01–12:30，S3 | 口算提到 \(10^{11}\) 量级并称选 D；题面是 \(2200\,\mathrm{m/s}\) 与 \(8\times10^8\,\mathrm{cm^{-3}}\) | 单位换算后 \(2200\,\mathrm{m/s}=2.2\times10^5\,\mathrm{cm/s}\)，乘积 \(1.76\times10^{14}\,\mathrm{cm^{-2}s^{-1}}\)。来源无法判定是口误还是转写误识，音频 12:01–12:45 待核听；讲义采用可复算数值。 | FACT / UNCERTAIN |
| 20:07–20:36，S3 | 称 \(n(E)\) 与 \(\phi(E)\)“没啥区别” | 教材53明确 \(\phi(E)=v(E)n(E)\)，两者可互推但一般数值和量纲不同；讲义写出关系。 | FACT |
| 36:40–39:22，S1/S3 | 口述非弹性散射阈能与“复合核虚能上第一激发态”混杂，并在例子中提及碳-13/铀-239 | 课件116与教材37的定性例子采用靶核 \(^{12}\mathrm C\) 4.43 MeV、\(^{238}\mathrm U\) 0.045 MeV。讲义只用其说明能级趋势，指出精确阈值需考虑反冲，不直接等同两数。 | FACT / UNCERTAIN |
| 49:32–51:28，S3 | “自己能探测器”等识别 | 课件125为“自给能探测器”，据课件订正术语；具体工作原理留作课堂指定调研。 | FACT |
| 57:43–59:10，S1/S3 | “分离能”用于裂变所需形变能量 | 课件129本身同时写“分离能”“临界能”；讲义以“裂变势垒/临界能”解释定性条件，避免与普通中子分离能混用。 | EXPLANATION |
| 01:04:19–01:07:25，S3 | 钍资源、实验堆和拟议专项金额与进度 | 作为2026-09-23课堂时点叙述保留在回顾；未以它确认当前外部项目状态。 | UNCERTAIN |
| 01:07:25–01:08:03，S1/S3/G1 | 教师口述氢截面约0.38 b，课件136约0.3 b，教材49在0.0253 eV用0.332 b | 数值依能量/数据源而变；讲义只说“单核截面不大”，不强行选定一个同条件值。需要精确计算时指定核数据与能量。 | UNCERTAIN |
| 01:17:57–01:20:54，S3 | 多次出现“氚16”及“氚石榴” | 课件143–144和教材38–39均为 \(^{16}\mathrm N\) 氮-16；整理稿据反应式订正。 | FACT |
| 01:20:33–01:20:54，S3 | 衰变常数口述被识成“等于 T2 分之一” | 按上讲课件与教材，\(\lambda_d=\ln2/T_{1/2}\)，讲义用等价半衰期式计算；不能把两者直接相等。 | FACT |
| 01:22:43–01:25:06，S3 | “淡化铀”“硼石 NR”“氚和氦”等识别与第145–149页不合 | “淡化铀”按语境为氮化铀；硼-10为 \((n,\alpha)\)，铍-9有 \((\alpha,n)\) 与 \((\gamma,n)\) 产中子反应。末段具体原音未核听，课堂回顾只写课件可确认部分。 | FACT / UNCERTAIN |

## 来源用途与学术边界

- **FACT**：截面、通量、反应率及核反应式以本次课件与 G1 对照；课件第 87–149 页每页至少有对应主题，图表是否逐页口述另记。
- **EXPLANATION**：为什么轻核散射慢化显著、为什么反应率需能谱加权、为何快堆要结合能谱读截面图，按课堂解释与课件整理。
- **DERIVED**：通量算例 \(1.76\times10^{14}\)、氮-16衰变题约 140.5 秒、\(\mathcal R=\int_Vr\,\mathrm dV\) 和活化产物收支式属于按已给条件核算/补足，未写成教师额外口述。
- **UNCERTAIN**：12:01–12:45 数量级、末段核素名、钍项目时点与氮化铀材料效果待核听或独立核查。未核听前学术状态仍为 `draft`。

课堂指定作业与自学见[讲义末尾](Lecture_Notes.md#assignments)；不以教师建议“问 AI”授权自动对外查询、上传原件或发布资料。
