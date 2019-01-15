# Todo-Web
学习JavaScript中用来练手的一个小程序

一、网页设计
见原型图


二、功能
1增加：在add button绑定函数
在点击添加后清除input中的内容

2修改：双击可以修改

3删除：在delete button绑定函数

4完成：在complete button绑定函数
希望点击的不是完成按钮，而是一个箭头。初始是一个空的框，点击后出现一个箭头→可以通过切换不同的img达成这个目的

5保存：5.1将todo保存在localStorage中——将todo取出来，stringify后保存
5.2将todo保存在服务器中——使用ajax，在函数增删改之后将数据同步到服务器（访问服务器）

6读取：6.1将localStorage中的todo读取出来——将stringify读取为array，再分别添加到页面
6.2将服务器中的todo读取出来（例如，在删除某个todo后能够读取……）
