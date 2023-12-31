# 简介和安装

## 什么是 SVN

- 代码版本管理工具
- 能记住每次的修改
- 查看所有的修改记录
- 恢复到任何历史版本
- 恢复已经删除的文件



## SVN 和 Git 相比，有什么优势

- 使用简单，上手快
- 目录级权限控制，企业安全必备
- 子目录 Checkout，减少不必要的文件检出
  - Git 必须 Checkout 整个仓库



## 主要应用

1. 开发人员用来做代码的版本管理
2. 用来存储一些重要的文件，比如合同
3. 公司内部文件共享，并且能按目录划分权限
   1. 不同人员查看不同文件



## SVN 仓库

- 推荐：svnbucket.com、中文名：svn 桶
- 是目前最好用的 svn 桶
- https://svnbucket.com/



## 安装 SVN 客户端

官方地址：https://svnbucket.com/posts/svn-client-download/

![SVN 客户端](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904115329540.png)

- windows：TortoiseSVN下载官网 https://tortoisesvn.net/downloads.html

![SVN 下载](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904114827869.png)

汉化 SVN：双击汉化安装包

1. 双击`msi`文件安装

   ![image-20230904120529036](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904120529036.png)

2. <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904120438567.png" alt="image-20230904120438567" style="zoom: 67%;" />

3. 汉化成功



- MAC：Cornstone



# 基本操作

## 新增 add

1. 在 https://svnbucket.com 注册账号并登录

2. 创建项目

   ![image-20230904144959718](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904144959718.png)

   ![](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904145051334.png)

   ![image-20230904145338182](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904145338182.png)



## 检出 checkout

1. 复制 svn 链接

   ![image-20230904145558067](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904145558067.png)



2. 在目标文件夹下右击

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905154851263.png" alt="image-20230905154851263" style="zoom:80%;" />

3. <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904145902038.png" alt="image-20230904145902038" style="zoom:67%;" />

4. 输入用户名和密码

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904150413231.png" alt="image-20230904150413231" style="zoom:67%;" />





## 提交 commit

1. 右击

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904150819256.png" alt="image-20230904150819256" style="zoom:80%;" />

2. 操作提交对话框

   ![image-20230904151044054](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904151044054.png)

3. 提交完成

   ![image-20230904151159017](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904151159017.png)

   ![image-20230904151322552](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904151322552.png)

## 更新 update

修改文件之后，右击

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904151408490.png" alt="image-20230904151408490" style="zoom:67%;" />



## 历史记录

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904151604163.png" alt="image-20230904151604163" style="zoom:67%;" />

> 在每次提交之前先进行 SVN 更新，是一个很好的习惯，可以避免版本的冲突



# 撤销和恢复

## 撤销本地修改

**第一种方法：**

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904151953856.png" alt="image-20230904151953856" style="zoom:67%;" />

**第二种方法：**

右击选择【提交】，(然后在提交对话框双击修改的文件可以进行修改前后的对比)在已修改的文件上方右击，弹出菜单选择【SVN还原】确认恢复对话框选择【还原】即可恢复。

总结：右击【提交】 => 【SVN还原】 => 【还原】

![image-20230904152538656](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904152538656.png)

## 撤销已提交内容

1. 右击

   ![image-20230904153406585](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904153406585.png)

2. 选择最近一次的操作右击，即是恢复上一次的操作

   如果选择指定的版本后，点击【复原到此版本作出的修改】即是恢复到指定的版本

   ![image-20230904153521105](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904153521105.png)

## 恢复到指定版本

选择指定的版本，右击

![image-20230904154020765](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904154020765.png)



**注意**

> 每次修改后再进行提交后，才会有操作记录
>
> 要进行【撤销】一系列的操作，都要在【显示日志】功能进行



# 添加忽略

![image-20230904154826866](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904154826866.png)



**取消忽略**

![image-20230904155245448](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904155245448.png)

![取消忽略](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904155418570.png)



> 添加忽略或者取消忽略文件后，记得提交



# 解决冲突

## 什么情况下容易发生冲突

1. 多个人修改了同个文件的同一行
2. 无法进行合并的二进制文件



## 如何避免冲突

1. 经常 *update* 同步他人的代码
2. 二进制文件(图片等)不要多个人同时操作



## 如何解决冲突

- 在提交时解决冲突

![image-20230904160149924](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904160149924.png)



# 分支

## 什么情况下需要开分支

1. 隔离线上版本和开发版本
2. 大功能开发，不想影响其他人，自己独立开个分支进行开发



## SVN 经典目录结构

- trunk	主干
- branches 分支
- tags     标记



1. 手动创建 SVN 经典目录结构

   ![image-20230904161037157](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904161037157.png)

2. 为 trunk 创建分支

   1. 

   ![image-20230904161314494](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904161314494.png)

   2. 选择路径

      ![image-20230904161431818](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904161431818.png)

   3. 更新之后查看

      ![image-20230904161553463](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904161553463.png)



# 暂存代码

**作用**

1. 代码修改了很多，突然需要紧急修复一个 bug，但是代码还没有写完，不能提交
2. 代码重构了很多，突然需要发布新版本，但是代码还不能运行，不能提交

![image-20230904163511964](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904163511964.png)



![image-20230904163619625](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904163619625.png)

【贮藏】：不保留暂存的代码

【检查点】：保留暂存的代码