# 跳转服务链
::: tip 提示
这是一个页面，并不是组件，所以你只需跳转之前存储好数据即可。
:::

<div style="margin-top: 50px"></div>

![图片丢失了](/fuWuLian.png)

**引入**
```jsx
import { setHistoryList } from '@/common/history'
```

**存储**
```jsx
var obj = {
    dataList: { refundNo: '1234567890', router: 'TADetailedList' },
    // 或 dataList: [{ refundNo: '1234567890', router: 'TADetailedList' }]
    title: '你的服务链名称' // 注意与dataList同级！
}
setHistoryList({}, 'component/componentServiceChain', obj)

// 如果你喜欢，这样也行，不需要再引入了。
this.$store.commit('meun/SET_VISITORTODETAIL', {
          value: { dataList: { refundNo: '1234567890', router: 'TADetailedList' } },
          name: 'componentServiceChain',
          id: this.currentId,
          path: 'component/componentServiceChain'
        })
```

**跳转**
```jsx
// 请注意以唯一值name进行跳转。
this.$router.push({ name: 'componentServiceChain' })
```

---

<div style="margin-top: 50px"></div>

---

## Attributes

|   参数   |     说明     |     类型     |  默认值  |  详细  |
| :------: | :----------: | :----------: | :------: | :----: |
| dataList |  服务链数据  | Array/Object |    ——    | 见下表 |
|  title   | 服务链的标题 |    String    | ’服务链‘ |        |

当dataList类型是**对象**时存在以下合法值。数组请按多个对象格式即可。

|       参数       |                             说明                             |  类型   | 是否必传 |
| :--------------: | :----------------------------------------------------------: | :-----: | :------: |
|      router      |                             路由                             | string  |   必传   |
|     refundNo     |                             单号                             | string  |   必传   |
| serviceChainShow |     是否显示跳转服务链图标，默认显示。**不显示请传true**     | boolean |    ——    |
|   serviceChain   | 仅在**serviceChainShow**为true时生效，点击单号直接跳转服务链 | boolean |    ——    |


<br>
<br>
<br>


---

组件存在的意义是让你快速开发。

---