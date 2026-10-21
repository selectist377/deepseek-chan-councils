# 对议牌 · 蓝色大肥鱼版本 4.5

## Councils (deepseek-chan edition) 4.5

一款融合扑克牌、AI 议席与策略博弈的轻量桌游。玩家通过扣牌、猜测与计算，在每一轮「对议」中争夺议点；七种 DLC 规则会改写牌局逻辑，让每一局都产生新的博弈方式。

> 大家都是鲸鱼，只有牌局知道谁在说真话。

---

## 中文说明

### 这一版

- **六席新绘**：ChatGPT、Claude、Gemini、Qwen、Zhipu、Grok 换上全新立绘；DeepSeek 保留原有鲸鱼娘形象。图鉴、对局头像与大图鉴同步更新。
- **双语独立页面**：`index.html` 为完整中文版，`index.en.html` 为完整英文版。界面、规则、DLC、角色对白、桌宠动作与结算文案各自成篇，不再逐词替换。
- **会跑的桌宠**：DeepSeek 桌宠收录 106 种动作，可拖动到屏幕任意位置并记住位置；支持收起与恢复，也能点击随机换动作。
- **七种 DLC**：纯净议事、除尊、空覆、同夺、引骰、转币、求同、积变。每局启用一项，规则卡可翻面阅读。
- **完整对局体验**：AI 三档强度、选牌摘要、逐步裁定、战报、本机战绩、30 秒教程与结算分享。
- **可安装、可离线**：PWA 清单、Service Worker 与移动端布局齐备，首次加载后可离线游玩核心内容。

### 文件结构

```
index.html                  中文入口
index.en.html               英文入口
manifest.webmanifest        中文 PWA 清单
manifest.en.webmanifest     英文 PWA 清单
sw.js                       离线缓存
icon.svg                    PWA 图标
characters/                 七席立绘、鲸鱼标志与扑克牌素材
characters/cards/           牌面素材
pets/                       桌宠 GIF
pets-all/                   桌宠图鉴 WebP
music/                      背景音乐
assets/                     页面样式
对议牌_Councils_DeepSeek娘_1920x1080宣传视频.mp4
README.md / 说明.txt / PROJECT_TITLE.txt / CHANGELOG.md
```

### 运行

1. 解压整个压缩包，保持 `index.html`、`index.en.html` 与资源目录的相对位置不变。
2. 直接双击 `index.html` 即可游玩；如果浏览器限制本地文件读取，可用任意静态服务器：
   ```bash
   python3 -m http.server 8000
   # 中文：http://localhost:8000/
   # 英文：http://localhost:8000/index.en.html
   ```
3. 页面左下角的语言按钮在中文页与英文页之间切换。切换会载入对应语言页面。

### 操作

- 点击手牌选择/取消，每轮最多 2 张；有骰子/硬币时最多 1 张牌 + 1 个特殊行动。
- 「提交提案」结算本轮；「下一轮」继续。
- 「讨论结束」需要连续点击两次确认。
- 顶栏可打开图鉴、DLC、规则、音乐与全屏；音乐面板支持播放列表与本地选曲。
- 桌宠可拖动、点击换动作，右上角关闭按钮可收起，左下角「宠物」按钮恢复。

### 术语

- 对议牌：**Councils**
- 蓝色大肥鱼：**deepseek-chan**
- 对议点数 / 议点：**Conuncils Point**（项目指定拼写）

### 兼容性

- 目标浏览器：Chrome / Edge / Safari / Firefox 近两年版本。
- 手机端建议 iOS 16+ 或 Android 10+。
- Service Worker 仅在 `https://` 或 `localhost` 下注册；本地双击打开也可正常游玩，只是没有离线缓存。

### 素材与版权

本项目为同人桌游网页，角色形象与音乐版权归原作者所有。4.5 版更新了 AI 议席立绘与双语页面，保留原有玩法、素材目录与署名信息。

---

## English

### What's in 4.5

- **Six new portraits**: ChatGPT, Claude, Gemini, Qwen, Zhipu, and Grok each get a new character illustration; DeepSeek keeps its original whale-girl look. Updated across the codex, match portraits, and gallery.
- **Two complete language pages**: `index.html` is the full Chinese edition; `index.en.html` is the full English edition. Interface, rules, DLC text, character dialogue, pet actions, and result screens are written for each language rather than swapped word by word.
- **A pet that goes anywhere**: the DeepSeek pet includes 106 actions, can be dragged to any corner, and remembers its position. Hide it with the close button and bring it back from the pet button.
- **Seven DLC rule sets**: Standard Council, Rank Removal, Pass, Mutual Snatch, Dice Call, Coin Flip, Parity, and Cumulative Change. Enable one per match and flip a rule card to read it.
- **Full match flow**: three AI strengths, selection summary, step-by-step resolution, match log, local record, a 30-second tutorial, and shareable results.
- **Installable and offline-ready**: PWA manifests, a service worker, and a mobile-first layout. Core content remains playable offline after the first load.

### Files

```
index.html                  Chinese entry
index.en.html               English entry
manifest.webmanifest        Chinese PWA manifest
manifest.en.webmanifest     English PWA manifest
sw.js                       Offline cache
icon.svg                    PWA icon
characters/                 Seven portraits, whale mark, and card art
characters/cards/           Card faces
pets/                       Pet GIFs
pets-all/                   Pet codex WebP images
music/                      Background music
assets/                     Page styles
对议牌_Councils_DeepSeek娘_1920x1080宣传视频.mp4
README.md / 说明.txt / PROJECT_TITLE.txt / CHANGELOG.md
```

### How to run

1. Extract the archive and keep `index.html`, `index.en.html`, and the resource folders in the same relative layout.
2. Open `index.html` directly. If the browser restricts local files, serve the folder:
   ```bash
   python3 -m http.server 8000
   # Chinese: http://localhost:8000/
   # English: http://localhost:8000/index.en.html
   ```
3. Use the language button at the lower-left to switch between the Chinese and English pages. Switching loads the corresponding page.

### Controls

- Tap a card to select or deselect it; play up to 2 cards per round, or 1 card plus 1 special action when dice/coins are available.
- **Submit Proposal** settles the round; **Next Round** continues.
- **End Discussion** requires a second confirmation.
- The top bar opens the codex, DLC rules, game rules, music player, and fullscreen. The music panel supports playlists and local tracks.
- Drag the pet to move it, tap it for a random action, hide it with the close button, and restore it from the pet button.

### Terminology

- 对议牌: **Councils**
- 蓝色大肥鱼: **deepseek-chan**
- 对议点数 / 议点: **Conuncils Point** (project-specified spelling)

### Compatibility

- Target browsers: recent Chrome / Edge / Safari / Firefox.
- Mobile: iOS 16+ or Android 10+.
- The service worker registers only on `https://` or `localhost`. Opening the file directly still works; offline caching is the only difference.

### Credits

This is a fan-made card game page. Character and music rights remain with their original creators. The 4.5 update refreshes the AI advisor portraits and provides complete bilingual pages while preserving the original gameplay, asset layout, and credits.
