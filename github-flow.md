# Github flow

> 基于 [git-flow](https://github.com/nvie/gitflow)

主分支是 `develop`，线上分支为 `main`（生产环境）.

## 如何开始工作
1. 从 `develop` 分支切到新的分支
2. 然后在新分支进行开发
3. 开发完毕后 `push` 到对应的分支下
4. 到 `GitHub` 提交 `Pull Request` 到 `develop` 分支，打上对应的 `label`，然后 `request` 对应的同事 `review`

### 什么样的代码才能合并进 `develop` 分支：
- 有至少三个 `approved`
  - 一个 `fanxy1` 的 `approved`
  - 一个前端相互的 `approved`
  - 一个测试的 `approved`
- 经过 `Github Action` 的测试
- 解决当前 `pr` 产品或者测试创建的 `issue`

### Main Branch
- `main` 分支作为线上运行的版本，目前用单独的一个 `pr` 更新 `version`

### Commit 格式
- 参考 [Handbook](https://github.com/Byzanteam/handbook/edit/master/github-flow.md)

### Pull Request 格式
- 以 「飞书」 对应的 `card` 的 `title` 作为标题
- 描述里面附加本次 `PR` 的说明
- 描述里面附加 「飞书」 对应 `card` 的 `link`
- 适当添加一些 `todo list`
