---
title: 常用 Git 命令
---

## Git 命令手册

### 配置相关

省略 `--global` 参数代表仅本项目生效

``` shell
# 初始化本仓库（创建新仓库）    
git init                                   
git config --global user.name "xxx"             # 配置用户名    
git config --global user.email "xxx@xxx.com"    # 配置邮件    
git config --global color.ui true               # git status等命令自动着色               
git config --global color.status auto    
git config --global color.diff auto    
git config --global color.branch auto    
git config --global color.interactive auto    
git config --global http.proxy                  # 查看当前代理设置      
git config --global http.proxy 'http://127.0.0.1:1080'  # 设置http代理      
git config --global https.proxy 'socks5://127.0.0.1:1080' # 设置https代理     
git config --global --unset http.proxy    #删除 proxy git config    
```

### 代码文件与提交相关

``` shell
git status                           # 查看当前版本状态   
git add t.txt                        # 添加单个文件至暂存区   
git add .     # 增加所有更改过的文件至index，不包括删除               
git add -u    # 仅增加所有已经跟踪的文件至index，不包括新文件         
git add -A    # git add . 和 git add -u的合集      
git commit -m 'xxx'                  # 提交    
git commit --amend -m 'xxx'          # 合并上一次提交（用于反复修改）    
git commit -am 'xxx'                 # 将add和commit合为一步    
git rm xxx                           # 删除index中的文件    
git rm -r *                          # 递归删除    
git log                              # 显示提交日志    
git log -1                           # 显示1行日志 -n为n行      
git log --stat                       # 显示提交日志及相关变动文件    
git log -p -m    
git log -- filename                  # 查看文件的修改日志     
git show xxxx                        # 显示某个提交的详细内容    
git show dfb02                       # 可只用commitid的前几位    
git show HEAD                        # 显示HEAD提交日志    
git show HEAD^                       # 显示上一个版本的提交日志 ^^为上两个版本 ^5为上5个版本                    
git whatchanged                      # 显示提交历史对应的文件修改    
git revert xxxxxx                    # 撤销提交xxxxx    
```

### tag 相关

``` shell
git tag                              # 显示已存在的tag    
git tag -a v2.0 -m 'xxx'             # 增加v2.0的tag    
git show v2.0                        # 显示v2.0的日志及详细内容    
git log v2.0                         # 显示v2.0的日志    
git push --tags                      # 把所有tag推送到远程仓库    
git tag -d tag_name                  # 本地删除名为tag_name的tag    
git push origin :refs/tags/tag_name  # 远程删除名为tag_name的tag    
```

### 差异比较相关

``` shell
git diff                             # 显示所有未添加至index的变更    
git diff --cached                    # 显示所有已添加index但还未commit的变更    
git diff HEAD^                       # 比较与上一个版本的差异    
git diff HEAD -- ./lib               # 比较与HEAD版本lib目录的差异    
git diff origin/master..master        # 比较远程分支master上有本地分支master上没有的                   
git diff origin/master..master --stat # 只显示差异的文件，不显示具体内容    
```

### 分支相关

``` shell
git clone git+ssh://git@xxx.xxx.xxx.xxx/xx.git       # clone远程仓库    
git remote add origin git+ssh://git@xxx.xxx.xxx.xxx/xx.git # 增加远程定义（用于push/pull/fetch）    
git branch                           # 显示本地分支    
git branch --contains 50089          # 显示包含提交50089的分支    
git branch -a                        # 显示所有分支    
git branch -r                        # 显示所有原创分支    
git branch --merged                  # 显示所有已合并到当前分支的分支    
git branch --no-merged               # 显示所有未合并到当前分支的分支    
git branch -m master master_copy     # 本地分支改名    
git checkout -b master_copy          # 从当前分支创建新分支master_copy并检出    
git checkout -b master master_copy   # 上面的完整版    
git checkout dev/minibear2333        # 检出已存在的分支    
git checkout --track dev/minibear2333   # 检出远程分支dev/minibear2333并创建本地跟踪分支    
git checkout v2.0                    # 检出版本v2.0    
git checkout -b devel origin/develop # 从远程分支develop创建新本地分支devel并检出    
git checkout -- README               # 检出head版本的README文件（可用于修改错误回退）    
git merge origin/master              # 合并远程master分支至当前分支    
git cherry-pick xxxxxx               # 合并提交xxxxxx的修改    
git push origin master               # 将当前分支push到远程master分支    
git push origin :dev/minibear2333    # 删除远程仓库的dev/minibear2333分支    
git fetch                            # 获取所有远程分支（不更新本地分支，另需merge）    
git fetch --prune                    # 获取所有原创分支并清除服务器上已删掉的分支    
git pull origin master               # 获取远程分支master并merge到当前分支    
git mv README README2                # 重命名文件README为README2    
git reset --hard HEAD                # 将当前版本重置为HEAD（通常用于merge失败回退）    
git rebase    
git branch -d dev/minibear2333       # 删除分支dev/minibear2333（需要确认本分支修改已合并到其他分支）    
git branch -D dev/minibear2333       # 强制删除分支dev/minibear2333，小心操作    
git ls-files                         # 列出git index包含的文件    
git show-branch                      # 图示当前分支历史    
git show-branch --all                # 图示所有分支历史    
```

### 图示命令

``` shell
git ls-tree HEAD                   # 内部命令：显示某个git对象    
git rev-parse v2.0                 # 内部命令：显示某个ref对于的SHA1 HASH    
git reflog                         # 显示所有提交，包括孤立节点    
git show xxx                       # 查看xxx提交改变了哪些文件内容  
git show HEAD                      # 显示当前分支昨天的状态    
git log --pretty=format:'%h %s' --graph             # 图示提交日志    
git show HEAD~3                    # 查看倒数第三次提交改变了哪些内容  
git show -s --pretty=raw xxxxxx    
```

### 暂存相关

``` shell
git stash                            # 暂存当前修改，将所有至为HEAD状态    
git stash list                       # 查看所有暂存    
git stash show -p stash@{0}          # 参考第一次暂存    
git stash apply stash@{0}            # 应用第一次暂存    
```

### 查找

``` shell
git grep "delete from"               # 查找当前分支下的文件内容，可以git grep --help看具体用法                              
git grep "delete from" v2.0          # 指定tag来查找    
```

### git index 操作（追踪）

``` shell
git update-index —assume-unchanged 文件名      # 取消本地跟踪    
git update-index —no-assume-unchanged 文件名   # 恢复本地跟踪    
git ls-files -v| grep '^h\ '                  # 可以看到本地不跟踪的文件    
```

### 管理远程分支

``` shell
git remote              # 不带参数，列出已经存在的远程分支                          
git remote -v           #(-v是–verbose 的简写,取首字母)列出详细信息，在每一个名字后面列出其远程url                          
git remote add [shortname]  url              #添加远程仓库    
git fetch origin        # 字符串 origin 指代对应的仓库地址了.比如说,要抓取所有 origin 有的,但本地仓库没有的信息,可以用 
```

### 打标签

Git 可以给任意一个提交打上标签，以示重要，默认使用标签来记录版本，这一节主要讲解标签的基本使用方法。

**列出所有的标签**

``` shell
$ git tag
```

**如果标签太多，支持模糊匹配**

``` shell
$ git tag -l "v1*"
```

**创建标签**

不带标签提示信息快速创建(轻量标签)，使用 git `tag` 标签名的形式，这种形式的 `tag` 很像一个不会改变的分支——它只是某个特定提交的引用，默认在当前分支最后一个提交打 `tag`

``` 
$ git tag v2.3
```

携带提示信息创建的是附注标签，它是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 通常会建议创建附注标签，这样你可以拥有以上所有信息。但是如果你只是想用一个临时的标签， 或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。

``` shell
$ git tag v2.4 -a -m "test"
```

以上的 `-a` 参数可以省略

**查看附注标签**

``` shell
$ git show v2.4
```

当然，你也可以给历史提交打 `tag` ，如下 `9fceb02` 就是 `commitid`

``` shell
$ git tag -a v2.5 9fceb02
```

**推送到远程**

打完标签远程还没有，需要手动推送

推送单个标签

``` shell
$ git push origin v1.0
```

**推送全部标签**

``` shell
$ git push origin --tags
```

**删除标签**

``` shell
$ git tag -d v1.0
```

注意上述命令并不会从任何远程仓库中移除这个标签，你必须用 git `push <remote> :refs/tags/<tagname> ` 来更新你的远程仓库：

``` shell
$ git push origin :refs/tags/v1.0
```

第二种方式更直观

``` shell
$ git push origin -- delete v1.0
```

**检出标签**

如果你想把某个标签内容检出到本地，和检出分支的命令完全一样

``` shell
$ git checkout v1.1
```

注意：检出的 `tag` 不属于任何分支，如果你在检出 `tag` 上提交代表再切到其他分支，代表会丢失，除非你记得 `commit id` ，所以如果你想在某个 `tag` 的基础上提交代码，最好的方式是创建一个新分支，如下

``` shell
$ git checkout -b v1.1-dev v1.1
```

引用：

[机智的程序员小熊-Git常用命令](https://coding3min.com/328.html)

[https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE)