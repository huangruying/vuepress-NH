# History 数据回显
::: tip 提示
这是个方法（函数），你只需要引入使用即可，想理解请自行看源码。
:::

<div style="margin-top: 50px"></div>

### 引入
```jsx
import { getHistoryList, setHistoryList } from '@/common/history'
```
### 存储记录
``` jsx
setHistoryList(JSON.parse(JSON.stringify(this.$data)), 'specialserver/sourdsMuets')
```
### 获取记录
``` jsx
getHistoryList(this, 'sourdsMuets')
```

---

<div style="margin-top: 50px"></div>

---

## Methods

|     方法名     |                        说明                        |     参数      |
| :------------: | :------------------------------------------------: | :-----------: |
| setHistoryList | 存储记录，当页面视图更新时或者data发生改变时需调用 | data,path,obj |
| getHistoryList |      获取记录,即数据回显，你可在初始化时调用       |   this,name   |

---

<div style="margin-top: 50px"></div>

---

**setHistoryList 参数说明**

| 参数 |                  说明                   |               默认值须填               |  类型  | 是否必传 |
| :--: | :-------------------------------------: | :------------------------------------: | :----: | :------: |
| data |       当前页面的data(必需深拷贝)        | JSON.parse(JSON.stringify(this.$data)) | Object |   必传   |
| path | 回显的路径，以‘’/‘’切割最后一个值为name |                   ——                   | String |   必传   |
| obj  |    此参数存在时将会替换第一参数data     |                   ——                   | Object |    ——    |

---

<div style="margin-top: 50px"></div>

---

**getHistoryList 参数说明**

| 参数 |              说明              | 默认值须填 |  类型  | 是否必传 |
| :--: | :----------------------------: | :--------: | :----: | :------: |
| this |         当前页面的this         |    this    | Object |   必传   |
| name | 路径的name。对应存储记录的name |     ——     | String |   必传   |



<br>
<br>
<br>


---

Ctrl + C、Ctrl + V 的次数多了，函数方法也就存在了。

---