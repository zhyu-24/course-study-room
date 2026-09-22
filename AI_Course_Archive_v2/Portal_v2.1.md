# 课程复习室 v2.1

交付日期：2026-09-22。默认入口：[课程复习室](../index.html)。

## 本次交付

统一首页、课程目录和讲次阅读界面；当前接入信号与系统L01–L03、核工程原理L01–L02、聚变能源概论L01，共三门课程六讲。桌面提供课程/讲次、正文和本讲目录三栏；窄屏导航折叠。课程及讲次标题可筛选，教材索引在同一界面阅读，原始PDF/图像仍打开实际文件。

保留完整讲义、已有课堂回顾、来源记录、图片放大、折叠答案、原音定位与打印。无转写的讲次不显示课堂回顾；切换课程、讲次或视图时暂停旧音频。原音定位可用不等于音频已核听。

Markdown仍为唯一内容底稿。原有单讲Review.html继续可用；信号L02冻结内容与原始资料未改写。资料规范继续采用v2，阅读界面为v2.1；用户已确认此前缺素材与聚变教材补充效果，本次新导航体验待用户确认，学术状态未提升。

## 生成与更新

在D:/learn运行，Python需能加载项目vendor中的Markdown，网页阅读无需Python/Node：

~~~powershell
python AI_Course_Archive_v2/scripts/build_portal.py
~~~

仅从既有底稿更新统一入口，不重建单讲页面。每次新增课程/讲次先维护对应Course_Index，构建时校验索引与实际Lecture_Notes一致。标题支持现有“#### Lecture 01 — 标题”与聚变课程的Lecture表格，单元沿用“### Unit …”。无法匹配的新增格式会报错；不要用空标题绕过校验。

~~~powershell
python AI_Course_Archive_v2/scripts/build_review.py "聚变能源概论/Lectures/L01"
~~~

生成单讲兼容页后自动刷新统一入口；--no-portal仅供单讲兼容页排查。补教材时按编译规范先核查原页、更新相应底稿及Global索引，再运行构建。统一入口不扫描用户的其他项目。

## 派生数据与定位

- index.html与site目录由生成器维护，勿直接编辑教学正文。模板和脚本源在本规范目录的assets/scripts；全项目构建复用build_review.render_md。
- site/catalog.js包含课程、单元、讲次标题、主题简介、可用视图、Global文档和数据包位置；site/data/*.js按需加载，不用fetch、iframe、网络API或常驻服务。
- 数据包包含course、item、views、inputs与segments；inputs为原始Markdown相对路径及SHA256，segments来自Source Map的对齐记录。KaTeX渲染保留LaTeX注释，图片带data-source-path。只有当前讲次/文档挂载到正文DOM，避免不同课程同名N/T锚点冲突。
- 路由字段为course、lecture、view、anchor；Global文档用document替代lecture/view。例：../index.html#course=信号与系统&lecture=L02&view=notes&anchor=N05。参数由URLSearchParams编码；刷新与浏览器前进/后退可恢复定位。
- 数据包内底稿链接转为相应路由；教材PDF链接仍保留#page=。site/build.json记录输入指纹及本地资源清单，输入变化后必须重新生成。
- 保持项目目录相对结构即可搬迁；单独复制index.html或site不足以携带课件、教材和音频。

## 验收

~~~powershell
# COURSE_PLAYWRIGHT可指向已安装的playwright模块绝对路径
node AI_Course_Archive_v2/scripts/check_portal.cjs
~~~

[浏览器报告](../site/qa/browser-results.json)：Chromium断网file URL，89项检查通过；遍历六讲共16个阅读视图及9份Global文档，检查课程导航、标题筛选、前进/后退、刷新深链接、跨视图定位、上一讲/下一讲、同名锚点、全部重写的来源链接、图片、公式、音频定位与停止、无录音边界、打印及390px窄屏。外部请求和脚本错误均为0。

已由Agent看图检查[首页](../site/qa/home.png)、[桌面阅读](../site/qa/reading-desktop.png)、[窄屏阅读](../site/qa/reading-mobile.png)与[窄屏目录](../site/qa/navigation-mobile.png)。工程检查与视觉检查不代替用户体验确认或学术复核。

[完整性报告](../site/qa/integrity.json)核对原始资料、讲义/订正稿/来源记录、信号L02全部冻结文件及当前构建输入；课程索引仅新增导航与本轮任务收尾记录，列为授权变更。

## 恢复与下一步

更新前备份：D:/learn/backups/portal-v2.1-before-20260922-170003，包含原规范/生成器、项目入口/状态/变更记录、三门课程索引及217个文件的指纹清单。原单讲页继续可用，可随时通过它们阅读。需要回退界面时先关闭新入口，使用旧Review.html；若恢复工作流，仅恢复备份中本次修改的规范/脚本/导航文件，并核对后续新增资料，不整库覆盖，不删除Raw。

本轮没有AI提问按钮、API密钥、模型调用或网页聊天。下一阶段在用户体验确认后，验证Codex原生批注与课程定位的组合，再决定选区提问交互；回答继续在Codex对话中。尚未宣称自建网页能直接发送消息。


2026-09-22后续更新：用户已认可统一入口，授权实施[可选提问辅助](optional/question-helper/README.md)。主体逻辑和样式未修改；辅助默认关闭，复制提问材料后人工发送到Codex。上述“下一步”描述为统一入口初次交付时的边界，当前进展以插件文档为准。
