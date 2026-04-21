# 多设备同步指南

你的 vault 位于 `bananajia/vault/`，通过 Git 与 GitHub 同步。

## 推荐方案：Obsidian Git 插件

### 1. 安装插件

- 在 Obsidian 中点击左下角的 设置 → 第三方插件 → 浏览
- 搜索 **Git**
- 安装 **Obsidian Git** 插件

### 2. 配置插件

- 设置 → 第三方插件 → Obsidian Git
- 配置如下：
  - **Commit message**: `vault backup: {{date}}`
  - **Auto commit**: 开启（可选，定时自动提交）
  - **Auto push**: 开启（推荐，保存后自动 push 到 GitHub）

### 3. Git 配置

确保当前机器已配置 Git 身份：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 4. 快捷键

| 快捷键 | 动作 |
|--------|------|
| Ctrl + P → Git: Commit | 手动提交 |
| Ctrl + P → Git: Push | 手动推送 |
| Ctrl + P → Git: Pull | 拉取最新 |

### 5. 新电脑配置

在新电脑上：

```bash
# 1. 克隆仓库
git clone https://github.com/jiaxi-78/bananajia.git

# 2. 在 Obsidian 中打开 vault 文件夹
# 选择 "Open folder as vault"
# 路径: bananajia/vault/

# 3. 安装 Obsidian Git 插件，配置同上
```

## 备选方案：命令行

如果不想用插件，可以用终端：

```bash
# 提交更新
cd bananajia
git add vault/
git commit -m "update notes"
git push

# 获取更新
git pull
```

## 自动部署

每次 `git push` 到 main 分支后，GitHub Actions 会自动：
1. 运行 `build-content.mjs` 生成 content.js
2. 运行 `vite build` 构建站点
3. 部署到 GitHub Pages

无需手动操作！
