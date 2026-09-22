# 课程档案 v2 · 阅读界面 v2.1

以人的整堂课复习为验收目标。2026-09-22 用户认可信号与系统 L02 的效果并确认固定当前版本，后续沿用 v2.0；用户随后授权将其余四讲重编译为v2，当前交付见[本轮记录](Expansion_20260922.md)。版本边界和恢复方式见 [基线记录](BASELINE.md)。

- [编译规范](Compilation_Spec_v2.md)：资料编译的唯一规则源。
- [辅导规则](Tutoring_Spec.md)：教材检索、推导及确认后保存。
- [验收清单](QA_Checklist_v2.md)：内容、来源、网页和缓存的实际验收。
- [试点阅读入口](../信号与系统/Lectures/L02/Review.html)
- [试点验收报告](../信号与系统/Lectures/L02/QA_Report.md)

## 默认阅读入口

可选的[提问辅助插件](optional/question-helper/README.md)默认关闭，按需整理选中内容与来源，复制到Codex对话提问；关闭、缺失或出错不影响课程阅读。完全不带插件可运行 `scripts/build_portal.py --without-helper`。

[课程复习室](../index.html)提供三门课程、现有讲次与教材索引的统一导航；课程内容仍由Markdown维护。单讲Review.html继续可用，信号L02冻结产物未改。生成方式、兼容边界和验收见[统一入口v2.1](Portal_v2.1.md)。

## 保存与生成

讲次维护 `Lecture_Notes.md`、有转写时的 `Transcript_Corrected.md` 和 `Lecture_Source_Map.md`。`Review.html` 由前述文件生成，不能直接编辑其中教学正文。`assets` 是派生展示资源；教材缓存归课程 Global 管理。

`scripts/build_review.py <讲次目录>` 生成单讲页面并刷新统一入口；仅更新导航时运行 `scripts/build_portal.py`。Python Markdown 3.8.2 已保存在 vendor；KaTeX 0.16.22 的离线发行包与许可已保存在 vendor/package。无需在线 CDN。PDF 处理脚本需要 pypdf/Pillow 或 Poppler，优先使用 Codex bundled runtime。

`scripts/textbook_cache.py get|render --source <PDF> --root <Cache> --edition <版本> --pages 14-16,31-60 [--poppler <pdftoppm.exe>]` 查找或生成页面。来源指纹改变后自动使用新目录；旧目录保留但不冒充当前来源。

## 恢复

此次实施前的副本：`D:\learn\backups\course-v2-20260922-125343`。其中包含原 v1 规范、信号课程入口/Global 与 L02（包括 Raw）。恢复时仅从该副本复制需要恢复的编译文件；原始资料没有修改。v1 目录本身也保留。

skill 安装在 `<Codex用户目录>/skills/course-study`，只引用这里的规则，不复制另一份规范。当前流程已固定为 v2.0；用户认可阅读效果，原音核听与学术复核状态独立记录。

## 复测

本轮四讲使用 `node scripts/check_reviews.cjs <讲次目录> [其他讲次目录...]`：根据现有视图与锚点检查本地依赖、链接、图片、公式、滚动、窄屏和音频定位。结果在各讲 `assets/qa/browser-results.json`；这是工程检查，不能替代学术核验与原音核听。

`node scripts/check_pilot_browser.cjs <L02目录>` 执行本试点浏览器回归，输出到讲次 `assets/qa`。需要 Playwright 与 Chromium；可通过 `COURSE_PLAYWRIGHT` 指定已安装模块的绝对路径。脚本中的 T12/N05/N12 属于本试点检查点，新课程须按实际内容调整，不以这组锚点冒充通用学术验收。网页本身不需要这些开发依赖。
