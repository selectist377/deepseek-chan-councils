# 更新记录 | Changelog

## 4.5.2 · 转币、花色与积变流程 | Coin, Suits & Cumulative Flow

### 中文
- 转币改为每局三次，按钮显示剩余次数；人机也会在额度内使用硬币。
- 玩法速览与规则说明中的 ♥♦♠♣ 按红黑着色，牌面信息更直观。
- 积变对局在“本轮议事计算过程”中展示当轮轮次、点数加成、牌色状态与每张牌的有效点数。
- 音乐面板补回“收起”按钮；手机端 AI 议席立绘区域的白底完整覆盖到立绘下方。

### English
- Coin Flip now allows three uses per match, with the remaining count shown on the button; the AI can also use coins within that limit.
- ♥♦♠♣ in the tutorial and rules are colored red or black for quicker reading.
- Cumulative Change matches now show the current round, point bonus, color state, and each card's effective value in the round calculation panel.
- Restored the music panel's Collapse button; on mobile, the white advisor panel now covers the full area beneath the portraits.

## 4.5.1 · 牌桌与移动端 | Table & Mobile Polish

### 中文
- 空覆改为每局三次；单人模式的人机也会根据牌面强度选择空覆。
- 扣牌区改为居中布局，单张与多张扣牌都保持在牌区中央。
- 移动端补充安全区、操作条、顶栏与横屏适配；图鉴卡片按需渲染，页面滚动更顺。
- 图标按钮补充可见说明文字，并统一补齐悬停/读屏描述。

### English
- Pass is now available three times per match; the solo AI can also choose to pass based on hand strength.
- Played cards are centered in their zone, whether one card or several.
- Added safe-area, action-bar, top-bar, and landscape refinements for mobile; codex cards render on demand for smoother scrolling.
- Icon-only buttons now show short visible captions, with hover and screen-reader descriptions filled in.

## 4.5 · 新绘与双语 | New Art & Bilingual Edition

### 中文
- 六位 AI 议席（ChatGPT、Claude、Gemini、Qwen、Zhipu、Grok）启用全新立绘，DeepSeek 保留原有形象；图鉴、对局头像与展示页同步更新。
- 中文与英文拆分为独立页面：`index.html` 与 `index.en.html`，界面、规则、DLC、对白、桌宠动作与结算文案各自完整成篇。
- 桌宠支持全屏拖动、位置记忆、收起与恢复；106 种动作在两种语言下均有对应名称。
- 统一宣传视频的中文文件名；更新 PWA 清单、离线缓存与移动端排版。
- 中文入口与英文入口均提供完整术语表与说明文档。

### English
- New portraits for six AI advisors: ChatGPT, Claude, Gemini, Qwen, Zhipu, and Grok; DeepSeek keeps its original look. Updated across the codex, match portraits, and gallery.
- Chinese and English are now separate, complete pages: `index.html` and `index.en.html`, covering the interface, rules, DLC, dialogue, pet actions, and result screens in each language.
- The pet can be dragged anywhere, remembers its position, and can be hidden or restored; all 106 actions have names in both languages.
- Standardized the promo video's Chinese filename; refreshed the PWA manifests, offline cache, and mobile layout.
- Both entries include a full terminology guide and documentation.

## 4.4 · 积变升级 | Cumulative Change
- 新增 DLC 7「积变 · 十二轮的颜色」：十二轮制、偶数轮换色、点数随轮次累积。
- 音乐播放器改为视口固定面板；完善移动端顶栏、DLC 卡片与操作条布局。
- 新增 AI 三档强度、选牌摘要、逐步裁定、战报、本机战绩与 30 秒教程。
- Added DLC 7 “Cumulative Change”: 12-round matches, color flips on even rounds, and round-based point bonuses.
- Added the viewport-fixed music panel and refined the mobile top bar, DLC grid, and action bar.
- Added three AI strengths, selection summary, step-by-step resolution, match log, local record, and a 30-second tutorial.
