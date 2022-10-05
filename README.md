# utools 插件 `模板项目`

## 参考 https://github.com/csj8520/utools-plugin-tinypng
感谢 @csj8520 大佬，拜读了该项目源码，想着后续如果如果开发者要实现功能强大的插件，有一个模板应该会方便很多

## 特性

- vue3
- typescript
- element-ui

## 如何使用

### 开发
- git clone 本项目
- yarn && yarn start  会启动一个 local server ，监听3000端口，utools开发模式可以指向 local server，具体可以看plugin.json描述
- 在utools开发者工具中创建项目，配置plugin文件目录为 dist 目录下的那个即可开始开发了，如下图
<img src="https://github.com/bravekingzhang/utools-plugin-template/blob/main/doc/utoos-config.png" alt="配置" style="width: 40%;" />

#### 打包
yarn build 会打包构建项目，构建会在dist目录下面，当然也感谢@csj8520大佬写的vite插件同时构建了一个.upx。
- 上传插件可以直接使用dist 目录下的上传。
- .upx可以拿来分享

## 注意事项
- 注意修改 public/plugin.json 下面的相关信息
- 注意修改 package.json 里面的项目信息
- 如果不愿意修改，那么作者就都是我啦，哈哈~~~

## 版本记录

### 1.0.0
- 从 https://github.com/csj8520/utools-plugin-tinypng 项目构造模板

### 赞赏

如果贵客觉得有用，可以打赏我一杯咖啡。

<img src="https://github.com/bravekingzhang/utools-code2flow-official/blob/main/shoukuanma.png" alt="收款码" style="width: 40%;" />
