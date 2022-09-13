# Manage Repository

> Skylark 团队项目仓库的管理

#### 分支
- 项目的 *开发分支* 是 `develop`，默认分支也是 `develop` ✅
- *生产分支* 为 `main`（部署到线上的版本） ✅
- 代码只有经过 **review** 后才可以合并到 `develop` 和 `main` 分支
#### 基础设置
- 仓库名称 ✅
- 简单的仓库描述 ✅
- 相关文档
- 客户信息（如果没有可忽略）
- 打上对应的标签如：slp, slp-frontend 等 ✅
#### 权限
   - 给对应团队的权限 ✅
     - `admin`: slp-admin（固定）
     - `write`: 当前仓库的开发者所在的团队（如：slp-frontend）
     - `read`: slp-test
     ![COLLABORATORSANDTEAMS](./misc/github_collaborators_and_teams.png)
   - [团队信息参考](https://github.com/orgs/Byzanteam/teams)
   - 需要修改的仓库配置 ✅
     - General
       - Features 
         - 中只保留 `issues`
           ![GENERALFEATURES](./misc/github_general_features.png)
       - Pull Requests 
         - 取消 `Allow merge commits`
           - [PR 合并建议使用 squash merge](https://github.com/conventional-changelog/standard-version#should-i-always-squash-commits-when-merging-prs)
         - 取消 `Allow auto-merge`
           ![GENERALPULLREQUESTS](./misc/github_general_pull_requests.png)
     - Branches ✅
       - 分支 `main` / `develop` 的 `Require approvals` 设置成 3
         - 至少需要三个 `approved` 才能 merge（特殊情况 @slp-admin）
           ![BRANCHESRULES](./misc/github_branches_rules.png)
   - 项目的管理权限需要移交给 [fanxy1](https://github.com/fanxy1)
