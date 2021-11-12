<template>
  <div>
    <Pagination @pagination="getList" :page.sync="data.pageNum" :limit.sync="data.pageSize" :hidden="data.total == 0" :total="data.total" />
  </div>
</template>

<script>
import Pagination from './pagination.vue'
export default {
  components: {
    Pagination // 注册
  },
  data () {
      return {
          data: {
            pageNum: 1, // 第几页
            pageSize: 10, // 每页显示的数量
            total: 20 // 总数
          }
      }
  },
  methods: {
      getList () {
        //  var params = {
        //      pageNum: this.data.pageNum,
        //      pageSize: this.data.pageSize
        //  }
      }
  }
}
</script>

<style>

</style>