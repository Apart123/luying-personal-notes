
# 数据库设计

## SQL

Structured Query Language 结构化查询语言

大部分关系型数据，拥有者基本一致的 SQL 语法；比如 Oracle、SQL Server...

分支：

- DDL：Data Definition Language 数据定义语言
  - 操作数据库对象：比如库、表、视图、存储过程

- **DML：** Data Manipulation Language 数据操控语言
  - 操作数据库中的记录

- DCL：Data Control Language 数据控制语句
  - 操作用户权限

> 这三个分支的语法大致一致

## 管理库

### SQL 命令

- 创建库

```shell
# 创建数据库
CREATE DATABASE 库名;
```

- 切换当前库

```shell
USE 数据库名称;
```

- 删除库

```shell
DROP DATABASE 数据库名称;
```



### 图形化界面

![image-20231001230810046](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001230810046.png)

## 管理表

### 创建表

每一列就相当于一个字段

**常见字段类型：**

- bit：(占 1 位，0 或 1，false 或 ture)，适用于只存两种数据的字段，比如性别
- int：(占 32 位，整数)
- decimal(M, N)：能精确计算的实数，M 是总的数字位数，N 是小数位数；如 3.14159(6,5)
- char(n)：固定长度位 n 的字符，字符长度不足空格补全
- varchar(n)：长度可变，最大长度位 n 的字符
- text：大量的字符
- date：仅日期
- datetime：日期和时间
- time：仅时间

**SQL 命令**

```shell
CREATE TABLE `库名`.`表名`  (
  `name` varchar(255) NOT NULL,
  `sex` bit NOT NULL DEFAULT 0,
  `birthday` date NOT NULL,
  `stuno` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`stuno`)
);
```



**图形化界面**

![image-20231001231022612](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001231022612.png)

### 修改表

```shell
# 新增 class 字段
ALTER TABLE `learning`.`student` 
ADD COLUMN `class` int NOT NULL AFTER `birthday`;
```



![image-20231001231349408](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001231349408.png)

### 删除表

```shell
DROP TABLE `库名`.`表名`;
```



![image-20231001232052043](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001232052043.png)

## 主键和外键

### 主键

根据设计原则，每张表都要有主键

**主键必须满足的要求：**唯一、不能更改、无业务含义(无现实含义)

可以使用多列组合为主键(设置多个主键进行唯一组合)

```shell
SELECT uuid(); # 打印 uuid
```

### 外键

用于产生表关系的列

外键列会连接到另一张表(或自己)主键

```shell
ALTER TABLE `learning`.`student` 
ADD FOREIGN KEY (`class`) REFERENCES `learning`.`class` (`id`);
```







**应用：**

1. 表 class

![image-20231001233650636](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001233650636.png)

2. 表 student 设置外键 

![image-20231001233308982](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001233308982.png)

3. 表 student 的 class 字段

![image-20231001233542726](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231001233542726.png)

## 表关系

### 一对一

一个 A 对应一个 B，一个 B 对应一个 A

例如：用户和用户信息

把任意一张表的主键

### 一对多

一个A对应多个B，一个B对应一个A，A和B是一对多，B和A是多对一

例如：班级和学生，用户和文章

在多一端的表上设置外键，对应到另一张表的主键

### 多对多

一个A对应多个B，一个B对应多个A

例如：学生和老师

需要新建一张关系表，关系表至少包含两个外键，分别对应到两张表




## 三大设计范式

1. 要求数据库表的每一列都是不可分割的原子数据项
2. 非主键列必须依赖于主键列
3. 非主键列必须直接依赖主键列
