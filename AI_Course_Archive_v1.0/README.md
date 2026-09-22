# AI Course Archive Standard v1.0

这是一套面向工科课程的、模型无关的课程资料编译标准。它把 PPT、教材、课堂录音、转写和板书整理成可长期保存的 Markdown 知识档案，同时保留回到原始证据的路径。

## v1.0 交付内容

```text
AI_Course_Archive_v1.0/
├── README.md
├── Compilation_Spec_v1.0.md
├── QA_Checklist_v1.0.md
├── templates/
│   ├── Course_Index.md
│   ├── Global_Knowledge.md
│   ├── Global_Source_Map.md
│   ├── Lecture_Notes.md
│   └── Lecture_Source_Map.md
└── prompts/
    ├── Compile_Global_Materials.md
    └── Compile_Single_Lecture.md
```

## 最小使用流程

1. 建立课程目录，把原始资料放进对应的 `Raw/`。
2. 首次建库时，用 `Compile_Global_Materials.md` 编译全局资料。
3. 每节课后，用 `Compile_Single_Lecture.md` 生成两份课程文件。
4. AI 按 `QA_Checklist_v1.0.md` 自检；人只检查阻断项、疑点和关键公式。
5. 人检查后把 `status` 从 `draft` 改为 `reviewed`；只有关键内容已回看原始来源时才使用 `verified`。

## v1.0 推荐工具分工

- **主编译器：Codex 桌面版。** 直接在课程资料根目录工作，读取原始文件，生成和更新五类 Markdown，并执行 QA。
- **可选采集器：飞书妙记。** 有课堂录音时可用于录音、转写和按时间定位；把导出的 transcript 与原始录音放回对应 `Raw/` 后，再由 Codex 综合编译。飞书不是正式资料库，也不要求 Codex 直接读取妙记。
- **学习与答疑：任意可靠 AI。** 优先提供 `Course_Index.md`、相关 `Lecture_Notes.md`；需要核验时再读取 Source Map 和原始资料。

第一阶段不创建独立 Agent、工作流或双向同步，也不需要购买飞书 AI 会员。建议在完成 3–5 节真实课程并确认规则稳定后，再考虑把固定 Prompt 封装为 Codex skill。

## 固定边界

- 标准文件只有五类，不新增“概念卡片”“每日笔记”等维护对象。
- 原始文件不改写、不覆盖；编译文件可以重建，但应保留版本记录。
- `Lecture_Notes.md` 负责学习，`Lecture_Source_Map.md` 负责定位证据，二者不重复写成长篇正文。
- 默认先读编译结果；只有答案不足、存在争议或需要核验时，才回到原始资料。
- 录音、转写、板书或教材可以缺席；Source Map 记录 `not-provided` 及覆盖影响，现有资料仍正常编译。
- 授课日期和学期是可选信息；资料中没有明确给出时直接省略，AI 不应追问。
- v1.0 不依赖 Obsidian、RAG、数据库、自动化平台或特定 AI。

## 飞书妙记作为可选转写入口

1. 在飞书妙记中录音，或上传课堂原始音频。
2. 导出“文字记录”为 TXT（也可保留 SRT）；导出时选择保留时间戳，如有说话人区分也一并保留。
3. 保留原始音频文件。
4. 将音频与 TXT/SRT 一起放进对应讲次的 `Lectures/Lxx/Raw/`。
5. 将该讲次 `Raw/` 中的全部输入交给 Codex，按固定 Prompt 编译。

若妙记没有导出入口，先检查妙记是否归你所有，以及分享设置是否禁止导出。没有本地可读的导出稿时，不能把飞书内的内容视为已提供；仍按实际资料继续编译，并把录音或转写稿标记为 `not-provided`。飞书官方的导出说明见：[妙记文字记录导出](https://www.feishu.cn/content/article/7578773484596153570)。

## 状态定义

| 状态 | 含义 |
|---|---|
| `draft` | AI 已编译并自检，尚未经过人类快速检查 |
| `reviewed` | 人已检查关键公式、重点、冲突和疑点，可用于日常学习 |
| `verified` | 关键主张已逐项回到权威来源核验，适合考试或正式引用 |

通常使用到 `reviewed` 就足够；`verified` 不是每节课的强制要求。
