🚀🚀🚀 一个Uniapp的起始模版，Vite,Vue3,TypeScript

<br/>

Inspired by [Vitesse](https://github.com/antfu/vitesse) ❤

### Features

- ⚡️ [Vue3](https://vuejs.org/), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！
- 🗂 [基于文件的路由](https://github.com/uni-helper/vite-plugin-uni-pages)
- 📦 [组件自动化加载](./src/components)
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 🍍 [使用 Pinia 的状态管理](https://github.com/vuejs/pinia)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 与UniAPP API 无需引入
- 🦾 TypeScript, 当然


<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- Router
  - [`uni-native-router`](https://github.com/Gertyxs/uni-native-router#readme) - 使用uni-app原生钩子实现和方法实现、hooks的使用方式适配vue3
  - [`@uni-helper/vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 在 Vite 驱动的 uni-app 上使用基于文件的路由系统。
- [Pinia](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`@uni-helper/vite-plugin-uni-manifest`](https://github.com/uni-helper/vite-plugin-uni-manifest#readme) - 使用 TypeScript 编写 uni-app 的 manifest.json
- [`uni-ajax`](https://uniajax.ponjs.com) - 使用uni-ajax封装请求

## 使用

### 开发

```bash
pnpm i
```

```bash
pnpm dev:对应平台 如 pnpm dev:mp-weixin
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build:对应平台 如 pnpm build:mp-weixin
```

## Variations

- [react-template](https://github.com/yang1206/react-template.git)

- [vue-template](https://github.com/yang1206/vue-template.git)