# 黄刚

## 交接清单

<table>
	<tr>
	    <th>名称</th>
	    <th>位置</th>
	    <th>是否上线</th>  
	</tr>
	<tr>
	    <td rowspan="4">MCS新客服平台首页头部操作栏</td>
      <td>精简知识开关</td>
      <td>是</td>
	</tr>
	<tr>
	  <td>在线坐席与电话坐席切换</td>
    <td>是</td>
	</tr>
	<tr>
    <td>退出操作</td>
	  <td>是</td>
	</tr>
  <tr>
    <td>头部Nav导航栏</td>
    <td>是</td>
  </tr>
  <tr>
    <td>MCS新客服平台首页最左侧</td>
    <td>各个菜单入口</td>
    <td>是</td>
  </tr>
  <tr>
    <td rowspan="6">MCS新客服平台首页左侧</td>
    <td>当前列表展示</td>
    <td>是</td>
  </tr>
  <tr>
    <td>历史列表展示</td>
    <td>是</td>
  </tr>
  <tr>
    <td>离线工单列表</td>
    <td>是</td>
  </tr>
  <tr>
    <td>加入黑名单</td>
    <td>是</td>
  </tr>
  <tr>
    <td>手动接入旅客</td>
    <td>是</td>
  </tr>
  <tr>
    <td>用户中心</td>
    <td>是</td>
  </tr>
  <tr>
    <td rowspan="4">MCS新客服平台首页中侧</td>
    <td>聊天板块</td>
    <td>是</td>
  </tr>
  <tr>
    <td>文件图片身份证卡号操作展示</td>
    <td>是</td>
  </tr>
  <tr>
    <td>业务办理</td>
    <td>是</td>
  </tr>
  <tr>
    <td>发送与发送习惯设置</td>
    <td>是</td>
  </tr>
  <tr>
    <td rowspan="2">MCS新客服平台首页右侧</td>
    <td>旅客变更</td>
    <td>是</td>
  </tr>
  <tr>
    <td>九宫格展示</td>
    <td>是</td>
  </tr>
  <tr>
    <td>服务链与各个详单页面</td>
    <td>服务链与各个详单页面</td>
    <td>否</td>
  </tr>
  <tr>
    <td>Socket.IO</td>
    <td>Socket.IO配置与连接</td>
    <td>是</td>
  </tr>
</table>

---

<div style="margin-top: 50px"></div>

---

## MCS新平台系统头部操作栏
具体系统功能要点说明：

|        功能要点        |            要点说明            |
| :--------------------: | :----------------------------: |
| 在线坐席与电话坐席切换 | 通过SWITCHOVER来控制电话与在线 |
|        退出操作        |               ——               |
|     头部Nav导航栏      |               ——               |
|      精简知识开关      |               ——               |

<div style="margin-top: 50px"></div>

**注意事项**

* 在线坐席与电话坐席切换:(在线切电话)注意先得判断是否还有人再聊天,切换之后记得改变客服的状态,不然还能接的进人.(电话切在线vos文小聪开发)

![](/huangGang1.png)

* 退出操作：退出操作较为简单,主要是判断退出前判断客服状态(agentStatus)

![](/huangGang2.png)

* 头部nav导航：该功能主要参考Tags.vue文件,里面有具体的get,set,remove方法.(记住新平台首页地址为/index/menu)当关闭所有的tag时会自动跳转到首页

![](/huangGang3.png)

* 精简知识开关：精简知识对应的开关比较简单,具体组件在switControl.vue文件,主要由vuex中的状态来控制,具体看截图

![](/huangGang4.png)

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页最左侧
具体系统功能要点说明：
* 功能要点: 各个菜单入口

<br>

**注意事项**
* 由vuex中的两个数组(userPermissions)来控制菜单的展示(也是权限的实现方式),具体组件在navList.vue文件中

![](/huangGang5.png)

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页左侧
具体系统功能要点说明（**此功能较为复杂,且功能大致相似,具体方法与状态查看chat.js文件**）：
* 1. 当前列表展示
* 2. 历史列表展示
* 3. 离线工单列表
* 4. 加入黑名单
* 5. 手动接入旅客
* 6. 用户中心

<br>

**注意事项**
* 当前列表展示: 当前列表展示是由socket推送过来一个人之后在chat.js执行ADD_LOG方法,根据currentVisitorId来区分当前选择的是哪个人,所有信息都存在currentList对象中,展示所遍历的数组则是currentKeyArr,(注意历史对话列表选中的与当前列表选中的都是由currentVisitorId来控制,离线由offLineId来控制) 注意当切换旅客时,得去展示不同旅客办理业务的位置,还得通过saveContent记录上个旅客的话。

![](/huangGang6.png)
![](/huangGang7.png)
![](/huangGang8.png)

* 历史列表展示: 当旅客或者客服结束对话时,会调用chat.js中的ADD_HISTORY方法来添加到历史对象中
所有信息都存在historyList对象中,展示所遍历的数组则是historyKeyArr中(历史列表展示不同旅客业务位置的方式与当前列表相同)

![](/huangGang9.png)
![](/huangGang10.png)

* 离线工单：离线工单主要需注意跟在线列表的区别,而且他与在线列表中只能选中一个所以需去监听是离线工单还是在线工单(离线工单展示不同旅客业务位置的方式与当前列表相同,就是id不同,离线是offLineId,在线是currentVisitorId)

![](/huangGang11.png)
![](/huangGang12.png)

* 加入黑名单：加入黑名单功能较简单,也没有过多的组件联系,具体看组件listBlackPop.vue

![](/huangGang13.png)
![](/huangGang14.png)

* 手动接入旅客：这个需要注意的点是每次当前列表数组发生改变的时候,可接入的人都需要改变具体方法参照List.vue中的manualAccessConfig,refreshManualNum,pollingSearch

![](/huangGang15.png)

* 用户中心：这个需注意每次切换不同旅客时用户中心的所展示的内容都不一致,所以我把所有的对象信息都存currentList对象中,具体方法参照List.vue文件中getMemberNoServiceList,getChatHistory,getOneIdTagList方法,具体组件在list/userinfomation中

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页中侧
具体系统功能要点说明：
* 聊天板块
* 文件图片身份证卡号操作展示
* 业务办理
* 发送与发送习惯设置

<br>

**注意事项**
* 聊天板块：聊天板块主要的逻辑在chat.vue与chat.js,其中需注意的点为每次切换得记录上个光标的位置,与上一个输入框的值,其接受消息的方法在socket.io.js中执行,会话消息的展示是根据currentList中的log数组来遍历展示的,还有就是截图的展示,根据dealMsgHtmlCode来拼凑展示

![](/huangGang16.png)

* 文件图片身份证卡号操作展示：根据socket推送过来的msgType来展示具体的某个对应的组件,具体组件在chat文件夹中,其中需注意的点是身份证号的判断需放在最后再判断(客票号 订单号的判断条件是身份证条件的子集)

![](/huangGang17.png)

* 业务办理：业务办理是原系统中的转工单到vos的业务,需注意的是需起一个websocket的服务(生产一般都是起好的,本地如果需要测试的话找志强要一个插件)

![](/huangGang18.png)

* 发送与发送习惯设置：发送需注意的点是不同类型的内容需给他用msgType标注出来,还有如果出现敏感词,需二次点击才能发送,具体方法参照sendMsg方法.而发送设置的方法在setSendKey方法中

![](/huangGang19.png)
![](/huangGang20.png)

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页右侧
具体系统功能要点说明：
* 九宫格展示
* 旅客变更 (**保存不同旅客的业务的位置**)

<br>

**注意事项**
* 旅客变更：src\components\meun\afterSale\ 文件夹下，数据初始化都是依赖上个页面请求后保存数据到vuex中，在下个页面初始化请求时候获取并用作参数传参,每个业务模块都配置了一个路由,根据路由的位置来确定每个旅客办理业务的位置(在每次切换旅客时记得取出每个旅客业务的位置),并把保存到的数据初始化。

![](/huangGang21.png)
![](/huangGang22.png)

* 九宫格展示：九宫格展示比较简单,注意每次点击进入到办理业务的页面中去时,记得存储一下业务的位置,具体请查看menu文件夹下的index.vue文件。

![](/huangGang23.png)

---

<div style="margin-top: 50px"></div>

---

## 服务链与各个详单页面
具体系统功能要点说明：
* 服务链与各个详单页面

**注意事项**
* 服务链与各个详单页面：服务链与各个详单页面在serviceChain文件夹下,这里须知的是由于需要改变tags的title标题,需要要在router文件夹中的index.js去拦截改变路由的title值.

![](/huangGang24.png)

---

<div style="margin-top: 50px"></div>

---

## Socket.IO的配置与连接
具体系统功能要点说明：
* Socket.io的配置与连接

**注意事项**
* Socket.IO的配置与连接：socket的配置在socket.io.js中,需注意的点是,socket连接是在初始化客服基本参数之后才去连接的(不然你获取不到userId),具体方法basicInformatica. 还有需注意的一点是socket里的一些监听方法都是在socket.io.js中的,所以有些可能你需要在这个文件中调用其他组件的方法.

![](/huangGang25.png)