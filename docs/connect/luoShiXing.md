# 罗仕星

## 交接清单

<table>
	<tr>
	    <th>名称</th>
	    <th>位置</th>
	    <th>是否上线</th>  
	</tr>
  <tr>
	    <td rowspan="5">MCS新客服平台首页头部操作栏</td>
      <td>客服头像</td>
      <td>是</td>
	</tr>
  <tr>
	  <td>客服状态切换（上线、小休、后处理、离线）</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>转接坐席</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>结束对话</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>客服接待信息</td>
    <td>是</td>
	</tr>
  <tr>
	  <td rowspan="3">MCS新客服平台首页左侧</td>
	  <td>获取和查找一、二级常用语列表</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>管理常用语</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>查询交互记录</td>
    <td>是</td>
	</tr>
  <tr>
	  <td rowspan="2">MCS新客服平台首页中侧</td>
	  <td>个性化设置</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>表情</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>MCS新客服平台首页右侧</td>
    <td>航班不正常证明</td>
    <td>是</td>
	</tr>
  <tr>
	  <td rowspan="5">工具箱</td>
	  <td>记事本</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>知识库</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>万年历</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>里程计算器</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>密码认证</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>大屏监控</td>
    <td>大屏监控</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>报表</td>
    <td>在线类报表</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>业务查询</td>
    <td>会话记录查询</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>侧边栏权限配置</td>
    <td>权限列表</td>
    <td>是</td>
	</tr>
  <tr>
	  <td>安全整改</td>
    <td>图片url地址修改</td>
    <td>是</td>
	</tr>
</table>

---

<div style="margin-top: 50px"></div>

---

## MCS新平台系统头部操作栏
具体系统功能要点说明：
* 客服状态切换（上线、小休、后处理、离线）【**通过vuex进行状态保存，同时控制着按钮状态**】
* 客服头像 【**Index.vue搜索关键字：所属组别:agentBranch**】
* 转接坐席
* 结束对话
* 客服接待信息

**注意事项**
* 重点内容：上线、小休、后处理、离线状态切换。客服切换状态函数readyHandle，restHandle，afterProHandle，offLineHandle，请求后台让服务器修改客服状态，并根据接口返回通过调用updateHandle修改保存在页面vuex内的状态（vuex的mutation为UPDATE_AGENTSTATUS
），在UPDATE_AGENTSTATUS中会根据一些业务逻辑来判断按钮展示状态，修改state.statusDisable来控制按钮状态

![](/luoShiXing1.png)

* 客服头像：客服头像目前为静态数据展示，未接入具体销售数据、休息数据等
* 转接坐席：转接坐席功能较为简单，主要是留意转接坐席成功会弹出提示框，提示框内容代码在Index.vue搜索关键字：title="转接"
* 结束对话：提交当前旅客信息结束对话，通过vuex的ADD_HISTORYVISITOR把旅客添加到历史旅客中

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页左侧
具体系统功能要点说明：
* 管理常用语【**增删改查常用语**】
* 获取和查找一、二级常用语列表
* 查询交互记录

**注意事项**
* 管理常用语涉及组件phraseComp.vue、phraseAddUse.vue、phraseDel.vue、phraseMoveTo.vue，addServiceType.vue，其中phraseComp.vue控制整个常用语业务流程，其余组件用作增删改功能弹窗。
* 获取和查找一、二级常用语列表：初始化默认请求一级接口，后续根据二级接口id获取二级列表数据
* 查询交互记录：页面在record.vue，根据currentVisitorId来获取聊天记录内容，聊天记录内的图片和表情内容根据关键字进行DOM节点拼装，具体方法在deliberatelyTrustDangerousSnippet。

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页中侧
具体系统功能要点说明：
* 个性化设置
* 表情

**注意事项**
* 个性化设置：setting.vue，首页加载客服信息的时候会返回当前客服的一些个性化设置configDetail，根据这个数据来设置页面风格，并且通过个性化设置可以发送请求改变页面设置。个性化设置中可以设置Alt+字母发送快捷输入，具体是在Chat.vue中进行识别

![](/luoShiXing2.png)

---

<div style="margin-top: 50px"></div>

---

## MCS新客服平台首页右侧
具体系统功能要点说明：
* 航班不正常证明

**注意事项**
* 航班不正常证明：src\components\meun\afterSale\flightIrregular\ 文件夹下，数据初始化都是依赖上个页面请求后保存数据到vuex中，在下个页面初始化请求时候获取并用作参数传参。

![](/luoShiXing3.png)

---

<div style="margin-top: 50px"></div>

---

## MCS工具箱
具体系统功能要点说明：
* 工具箱

**注意事项**
* 工具箱：tool.vue，使用element-ui的dialog组件展示各个功能的内容。通过自定义指令v-dialogDrag
来实现工具箱弹出框拖拉功能。v-dialogDrag实现方法在main.js中

---

<div style="margin-top: 50px"></div>

---

## MCS大屏监控
具体系统功能要点说明：
* 大屏监控

**注意事项**
* 大屏监控：screenMonitoring.vue，src\components\operationMonitoring\screenSub文件夹下的3个组件分别对应大屏监控下的三部分内容。
* agentStatus.vue：主要用来展示坐席状态，坐席状态能通过模态框放大，通过组件自调用实现，坐席聊天记录分页功能是前端分页。
* countChart.vue：使用Highcharts来生成可视化图表，根据接口返回内容展示渠道会话统计内容，在组件内监听鼠标移入移出事件来展示详细数据
* timeQuery.vue：使用Highcharts来生成可视化图表，并同步先获取每小时接入统计数据，可根据时间来生成对应时段图表

---

<div style="margin-top: 50px"></div>

---

## MCS报表
具体系统功能要点说明：
* 报表

**注意事项**
* 报表：src\components\reportStatistics\onlineReports文件夹下，报表多是查询功能，请求对应url即可

---

<div style="margin-top: 50px"></div>

---

## MCS业务查询
具体系统功能要点说明：
* 会话记录查询【**话务查询，在线查询**】

**注意事项**
* 会话记录查询：chatRecordSerch.vue，话务、在线、离线分为3个组件chatRecordPhone.vue、chatRecordOnline.vue、chatRecordOff.vue，控制3个不同的查询条件。分页为后台分页，查询内容展示之后通过单号链接详单页面。

---

<div style="margin-top: 50px"></div>

---

## MCS侧边栏权限配置
具体系统功能要点说明：
* 侧边栏权限配置

**注意事项**
* 侧边栏权限配置:通过接口请求返回权限列表，根据权限列表来制定导航栏显示内容，主要逻辑在func.js的keepPermissionMap，定义了routerList，并设置了权限属性permission，根据permission属性有无、sub属性有无进行递归遍历。同时在路由列表同样添加permission属性，在路由守卫处判断当前坐席是否有权限跳转对应路由。此处没有使用后台返回router列表并动态添加路由方法。

![](/luoShiXing4.png)

---

<div style="margin-top: 50px"></div>

---

## MCS安全整改
具体系统功能要点说明：
* 图片、文档url地址变更

**注意事项**
* 1.在Chat.vue中，上传文件时候添加currentVisitorId
* 2.在点击聊天发送按钮时候，识别到图片时候会进行后台请求（screenshot）保存图片，并根据请求返回拼装安全请求头部

![](/luoShiXing5.png)

* 3.在docType.vue中，由于本地上传文件和旅客端上传文件所持参数不一致，需要进行解析判断

![](/luoShiXing6.png)

* 4.在imageType.vue中，只需要在标签href处添加安全请求头部即可

![](/luoShiXing7.png)

