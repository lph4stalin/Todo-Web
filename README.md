# Todo-Web
学习JavaScript中用来练手的一个小程序


一、整体功能
新建、修改、完成、删除

二、细节
（一）新建
1，在input中输入todo
2，点击add后，在todo区域内出现新的todo
3，清空input中的内容
4，按下enter键也会执行2和3
5，input的默认文字：placehold="在此添加任务"
6，插入todo的同时插入时间
7，插入todo的同时插入deadline，默认无时限

（二）修改
1，双击todo文本后，弹出一个输入框
2，输入框默认文字为当前todo
3，修改输入框中文字后，单击页面其他地方，todo就会被替换成新的文字

（三）完成
1，给完成的todo添加中划线，字体颜色变灰
2，将完成的todo仅在所有任务和完成任务中展示，不在未完成任务中展示
3，统计未完成任务的个数

（四）删除
1，点击删除后，从todo中删除该项

（五）保存
完成新增、修改、完成、删除后，将当前的todo内容和状态存储到localStorage中

（六）读取
在页面刷新时，读取当前localStorage中存储的数据
