# Pagination 分页
::: tip 提示
基于element的二次封装分页，element有的属性这里都支持
:::

**基础用法**
<pagination2 />

```jsx
// 使用
<hry-pagination @pagination="getList" :page.sync="data.pageNum" :limit.sync="data.pageSize" :hidden="data.total == 0" :total="data.total" />

// 引入
import hryPagination from '@/component/Pagination'

export default {
  components: {
    hryPagination // 注册
  },
  data () {
      return {
          data: {
            pageNum: 1, // 第几页
            pageSize: 20, // 每页显示的数量
            total: 0 // 总数
          }
      }
  },
  methods: {
      getList () {
         var params = {
             pageNum: this.data.pageNum,
             pageSize: this.data.pageSize
         }
         this.$post(url,params).then(res=>{})
      }
  }
}
```

## Attributes

|   参数    |      说明      |  类型   |           默认值           | 是否必传 |
| :-------: | :------------: | :-----: | :------------------------: | :------: |
|   total   |     总条数     | Number  |                            |   必传   |
|   page    |     第几页     | Number  |             1              |    ——    |
|   limit   | 每页显示的数量 | Number  |             20             |    ——    |
| pageSizes |   每页多少条   |  Array  |          [20, 50]          |    ——    |
|  hidden   |    是否隐藏    | Boolean |           false            |    ——    |
|  layout   | 见element分页  | String  | ‘sizes, prev, pager, next’ |    ——    |

## 唯一事件

|     名称   |                            说明                                  |
| :--------: | :-------------------------------------------------------------:  |
| pagination | 入参均做双向绑定处理，你可直接获取当前页面的data数据进行你要的操作。 |



<br>
<br>
<br>


---

组件存在的意义是让你快速开发。

---