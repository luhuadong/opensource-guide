---
title: 搭建 Git 相关命令
permalink: /git-tutorial/build-and-launch
---

## 在服务器上搭建 Git

通常我们会使用现有第三方 Git 开源平台来管理我们的代码，也可以设置为私有仓库来保证隐私性，但是企业往往不想把自己的代码维护在第三方服务器上，想自己掌握数据来保证安全性，这时候就会自建 Git 服务器。

搭建 Git 服务器，不需要安装特别的程序，非常的简单，支持本地协议、HTTP 协议、SSH 协议、Git 协议。

**本地拉取**

本地拉取时直接指定目录即可。

``` shell
$ git clone /home/gitee/code/git/gitee/learn_git
```

**HTTP协议（智能http协议）**

智能 HTTP 协议支持 HTTP 方式和 `git://` 的形式，后续【smart HTTP】展开详细讲解。

**哑（Dumb） HTTP 协议**

Http 协议搭建出来的 Git 服务器是只读的，可以拉取，但是无法提交! 适用于一些只读仓库的场景。

初始化空仓库，也可以直接使用已有的仓库。

``` shell
$ cd /home/gitee/project1 && git init
```

进入 Git 服务器项目列表目录，设置 post-update 钩子，自动更新 info 和 ref 。

``` shell
$ cd /home/gitee/repository
$ git clone --bare /home/gitee/project1 project1.git
$ cd project1.git
$ mv hooks/post-update.sample hooks/post-update
$ chmod a+x hooks/post-update
$ git update-server-info
```

使用任意方式启动 web 服务器，监听任意端口，此处以 80 为例。

``` shell
$ cd /home/gitee/repository
$ python -m SimpleHTTPServer 80
Serving HTTP on 0.0.0.0 port 80 ...
```

在任意网络通的服务器上 `clone` 即可。

``` shell
$ git clone http://127.0.0.1/project1/project1.git
```

**SSH 协议**

SSH 是最常用的协议，搭建起来也比较简单，同样的在服务器上先创建裸仓库。

``` shell
$ git init /home/gitee/repository/project --bare
Initialized empty Git repository in /home/gitee/repository/project/
$ mv /home/gitee/repository/project /home/gitee/repository/project.git
$ cd /home/gitee/repository/project.git/
$ mv hooks/post-update.sample hooks/post-update
$ chmod a+x hooks/post-update
$ git update-server-info
```

更新用户组权限为可写，该命令不会修改任何文件内容，放心使用。

``` shell
$ cd /home/gitee/repository/project.git
$ git init --bare --shared
New password: 
Retype new password: 
```

直接在本地 `clone` 项目，会提示输入 `ssh` 用户名密码，只要该用户具有此目录的写权限，就可以成功的提交。

``` shell
$ git clone git@hostname:/home/gitee/repository/project.git 
```

如果只是几个人协作搭建私有仓库，那仅仅需要一个裸仓库和一个 SSH 服务器就足够了。

对于权限管理，你可以给每一个人都设置一个账号，然后添加到Git用户组里；你也可以设置一个 Git 账户，然后让每个人发 SSH 公钥给你，然后将其加入 Git 账户的 `~/.ssh/authorized_keys` 文件。 这样一来，所有人都将通过**git**账户访问主机。 这一点也不会影响提交的数据——访问主机用的身份不会影响提交对象的提交者信息。

参考：

* [https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E6%90%AD%E5%BB%BA-Git](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E6%90%AD%E5%BB%BA-Git)

## 生成 SSH 公钥

在客户端生成公钥，把公钥配置到服务器中Git 账户的 `~/.ssh/authorized_keys` 文件 中，就实现了免密提交代码。

首选需要查看客户端是否已经有公钥，以 centos 为例，该方法适用于所有linux、mac系统，windows系统需要使用Git shell命令行工具进行生成。

``` shell
$ cd ~/.ssh
$ ls
id_rsa      id_rsa.pub  known_hosts
```

公钥是一对 `id_rsa` 和 `id_rsa.pub` 命名的密钥对， `.pub` 后缀的就是公钥，如果找不到这两个文件，或者根本就没有 `.ssh` 目录 ，需要手动生成。

``` shell
$ su git
$ ssh-keygen -t rsa 
```

以上就是切换到Git用户，为了安全使用 `rsa` 加密算法生成密钥，其中需要输入两次口令。

下面的内容就是你本地生成的公钥了

``` shell
$ cat /home/git/.ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDDX1WruuyLttlBPzqlo4QZAHo5kY1nHrbt4nVl9ZiC0FNlcRo1raxwtR/s763F32fTGTSdLqoEYqRSGZZ1MLf8kojp4DSO1dXmT+SOAUX9heVJXI8m6wj+g6gkx4s+/Tt2BMp+OvbIxnSISKPia3+7sEAtnNs3ehD74WGZSH5kzR4J14s1101IazlbXwAaGvEUEhxRKncBk2sgx+502j2YgN6kZJa+kdq1cLcGtyqL360OeUP9guAJdbY7Sr7SPHmHxENblQNpj2IlN4cJ8hq1gGgSkIf/K/vQcrzOi3qlUqQ3mMYxowE1ix+ctHhEzqH4A83MNUSA6ZpIqJcn6xEv git@VM-0-11-centos
```

把公钥添加到服务器中 Git 账户的 `~/.ssh/authorized_keys` 文件中即可。

## 配置服务器

我们来看看怎么配置服务器的 SSH 访问，以 `authorized_keys` 密钥认证方法为例，先要创建 `git` 用户，并创建 `git` 用户的 `.ssh` 目录。创建用户的时候会默认创建同名用户组，如果想向已有的用户组添加新用户可以使用 `useradd -g mygroup myuser`
首先创建 Git 用户

``` shell
$ useradd git
#设置密码
$ passwd git
```

为 git 用户创建 `.ssh` 目录和 `authorized_keys` 文件

``` shell
$ su git
$ cd
$ mkdir .ssh && chmod 700 .ssh
$ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
```

假设我们已经拿到了很多公钥，例如这样的格式

``` shell
$ cat /home/git/.ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDDX1WruuyLttlBPzqlo4QZAHo5kY1nHrbt4nVl9ZiC0FNlcRo1raxwtR/s763F32fTGTSdLqoEYqRSGZZ1MLf8kojp4DSO1dXmT+SOAUX9heVJXI8m6wj+g6gkx4s+/Tt2BMp+OvbIxnSISKPia3+7sEAtnNs3ehD74WGZSH5kzR4J14s1101IazlbXwAaGvEUEhxRKncBk2sgx+502j2YgN6kZJa+kdq1cLcGtyqL360OeUP9guAJdbY7Sr7SPHmHxENblQNpj2IlN4cJ8hq1gGgSkIf/K/vQcrzOi3qlUqQ3mMYxowE1ix+ctHhEzqH4A83MNUSA6ZpIqJcn6xEv git@VM-0-11-centos
```

把他们依次添加到 `authorized_keys` 文件的末尾即可，效果如下

``` shell
$ cat /home/git/.ssh/authorized_keys
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDDX1WruuyLttlBPzqlo4QZAHo5kY1nHrbt4nVl9ZiC0FNlcRo1raxwtR/s763F32fTGTSdLqoEYqRSGZZ1MLf8kojp4DSO1dXmT+SOAUX9heVJXI8m6wj+g6gkx4s+/Tt2BMp+OvbIxnSISKPia3+7sEAtnNs3ehD74WGZSH5kzR4J14s1101IazlbXwAaGvEUEhxRKncBk2sgx+502j2YgN6kZJa+kdq1cLcGtyqL360OeUP9guAJdbY7Sr7SPHmHxENblQNpj2IlN4cJ8hq1gGgSkIf/K/vQcrzOi3qlUqQ3mMYxowE1ix+ctHhEzqH4A83MNUSA6ZpIqJcn6xEv git@VM-0-11-centos
ssh-rsa xxxxxxxxxxxxxxx tom@hostname
ssh-rsa xxxxxxxxxxxxxxx jack@hostname
```

在服务器上先创建裸仓库（空仓库），该命令不会在服务器上创建工作区，请注意每个新项目都需要可以 `ssh` 的用户登陆到服务器上创建新的裸仓库

``` shell
$ git init /home/gitee/repository/project --bare
Initialized empty Git repository in /home/gitee/repository/project/
$ mv /home/gitee/repository/project /home/gitee/repository/project.git
$ cd /home/gitee/repository/project.git/
$ mv hooks/post-update.sample hooks/post-update
$ chmod a+x hooks/post-update
$ git update-server-info
```

在创建完裸仓库之后使用以下命令给项目目录授权

``` shell
$ cd /home/gitee/repository
$ chown -R git:git project.git
```

更新用户组权限为可写，该命令不会修改任何文件内容，放心使用。

``` shell
$ cd /home/gitee/repository/project.git
$ git init --bare --shared
New password: 
Retype new password: 
```

直接在本地 `clone` 项目，就不会再提示输入 SSH 用户名和密码了，只要该用户具有此目录的写权限，就可以成功的提交了。

``` shell
# 本地仓库
$ git clone git@hostname:/home/gitee/repository/project.git 
Cloning into 'project1'...
warning: You appear to have cloned an empty repository.
$ touch README.md
$ git add README.md
$ git commit -am "init README"
$ git push origin master
```

以上的命令 `git` 是服务器的用户， `hostname` 代表服务器域名或者 IP 
这个时候 `git` 用户也具备登陆服务器的能力，如果你想让禁用登陆权限可以通过编辑 `/etc/passwd` 文件完成。找到类似下面的一行：

``` ruby
git:x:1001:1001:,,,:/home/git:/bin/bash
```

改为：

``` ruby
git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
```

这样, Git 用户可以正常通过 SSH 使用 Git，但无法登录 shell ，因为我们为 Git 用户指定的 `git-shell` 每次一登录就自动退出。
参考：

* [搭建Git服务器](https://www.liaoxuefeng.com/wiki/896043488029600/899998870925664)
* [Linux下创建用户和用户组](https://blog.csdn.net/u011294519/article/details/89174272)
* [服务器上的 Git - 配置服务器](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E5%99%A8)

## Git 守护进程

和哑（Dumb） HTTP 协议一样，HTTP 协议搭建出来的 Git 服务器是**只读**的，可以拉取，但是无法提交，好在可以省略添加公钥的过程，只能网络通就可以访问，和哑 HTTP 协议不同的是以守护进程的方式可以指定用户和用户组。

用下面的命令可以启动一个 HTTP 服务，监听的9418端口，你只需要用守护进程的形式来运行该命令就可以了(**git 版本2.9.5测试成功，官方文档未说明版本号，低版本不支持**)

``` shell
$ git daemon --reuseaddr --base-path=/srv/git/ /srv/git/
```

* `--reuseaddr` 参数代表允许服务器可以不用等待客户端连接完成重启
* `--base-path` 代表默认仓库路径，用户在指定项目的时候可以省略路径直接用项目名
* 最后的路径代表，Git仓库的位置，可以随便设置
* 需要防火墙放通 9418 端口

如果加上 `--enable=receive-pack` 代表允许 push

``` shell
$ git daemon --reuseaddr --enable=receive-pack --base-path=/srv/git/ /srv/git/
```

使用 `systemd` 来托管此项目，新建 `/etc/systemd/system/git-daemon.service` 文件，内容如下

``` shell
[Unit]
Description=Start Git Daemon
[Service]
ExecStart=/usr/bin/git daemon --reuseaddr --base-path=/srv/git/ /srv/git/
Restart=always
RestartSec=500ms
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=git-daemon
User=git
Group=git
[Install]
WantedBy=multi-user.target
```

* 如果 `git` 不在 `/usr/bin/git` 目录里，你可以切换成实际的目录
* 注意指定了 `git` 用户和用户组，你可以修改成任意存在的其他用户/用户组

更新 `systemd` 配置文件缓存，设置为开机启动，启动服务

``` shell
systemctl daemon-reload
systemctl enable git-daemon
systemctl start git-daemon
```

`clone` 拉取，使用 `git://` 前缀

``` shell
$ git clone git://localhost/project.git           
```

提交测试，需要 `git daemon` 添加 `--enable=receive-pack` 参数

``` 
$ cd project
$ touch README.md
$ git add .
$ git commit -m "init README.md"
[master (root-commit) 0b26d54] init README.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
$ git push origin master
[27434] Connection from 127.0.0.1:47187
[27434] Extended attributes (16 bytes) exist <host=localhost>
[27434] Request receive-pack for '/project.git'
Counting objects: 3, done.
Writing objects: 100% (3/3), 210 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To git://localhost/project.git
 * [new branch]      master -> master
[25981] [27434] Disconnected
```

参考：[服务器上的 Git - Git 守护进程](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-Git-%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B)

## smart HTTP

我们使用 `ssh://` 方式或者 `git://` 方式，还有一种方式可以同时支持以上两种方式的访问，设置 Smart HTTP 一般只需要在服务器上启用一个 Git 自带的名为 `git-http-backend` 的 CGI 脚本。 该 CGI 脚本将会读取由 `git fetch` 或 `git push` 命令向 HTTP URL 发送的请求路径和头部信息，来判断该客户端是否支持 HTTP 通信（**不低于 1.6.6 版本的客户端，否则会使用哑HTTP协议模式只读**）

安装必要组件

``` shell
$ yum -y install httpd gitweb git
$ git init /home/gitee/repository/project --bare
Initialized empty Git repository in /home/gitee/repository/project
```

创建 httpd 账号，会提示输入两次密码

``` shell
$ htpasswd -m -c /etc/httpd/conf.d/git-team.htpasswd gitNew password: 
Re-type new password: 
Adding password for user git
```

修改访问用户和权限

``` shell
chown git:git /etc/httpd/conf.d/git-team.htpasswd
chmod 777 /etc/httpd/conf.d/git-team.htpasswd
# 这里是给你的项目列表目录授权
chown -R git:git /home/gitee/repository/
```

设置仓库列表目录

``` shell
$ vim +11 /etc/gitweb.conf
# 添加一行
$projectroot = "/home/gitee/repository"
```

设置 httpd, 使其请求转发到 git-cgi，在 httpd 配置文件最后一行 `IncludeOptional conf.d/*.conf` 前添加如下内容

``` 
<VirtualHost *:80>
        ServerName xxx.xxx.xxx.xxx
        SetEnv GIT_HTTP_EXPORT_ALL
        SetEnv GIT_PROJECT_ROOT /home/gitee/repository/
        ScriptAlias /git/ /usr/libexec/git-core/git-http-backend/
        <Location />
                AuthType Basic
                AuthName "Git"
                AuthUserFile /etc/httpd/conf.d/git-team.htpasswd
                Require valid-user
        </Location>
</VirtualHost>
```

* 其中 `xxx.xxx.xxx.xxx` 是你绑定服务器的 IP，也可以是域名
* `/home/gitee/repository/` 是你的项目列表路径
* ScriptAlias是将以/git/开头的访问路径映射至Git的CGI程序git-http-backend
* AuthUserFile是验证用户帐户的文件

重启 httpd

``` shell
systemctl restart httpd
```

最终效果，会提示输入用户名和密码

``` shell
 $ git clone http://xxx.xxx.xxx.xxx/git/project.git
Cloning into 'project'...
Username for 'http://xxx.xxx.xxx.xxx': git
Password for 'http://git@xxx.xxx.xxx.xxx': 
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
```

ssh方式

``` shell
$git clone ssh://git@xxx.xxx.xxx.xxx/home/gitee/repository/project.git
Cloning into 'project'...
git@111.229.43.245's password: 
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (3/3), done.
```

参考 ：

* [基于 git+httpd 搭建 http 协议的 git 仓库](https://blog.csdn.net/AAA17864308253/article/details/103115291)
* [https://git-scm.com/book/zh/v2/服务器上的-Git-Smart-HTTP](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-Smart-HTTP)

