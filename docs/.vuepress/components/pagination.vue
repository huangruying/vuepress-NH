<template>
<div>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <span style="margin: 3px 0 0 0;font-size: 15px;">第 {{ currentPage }} 页 / 共 {{ totalPage }} 页 &nbsp; 共 {{ total }} 条记录 &nbsp;</span>
    <span class="but_span" :class="page === 1?'none':''" @click="lookupTop('1')">首页</span>
    <span class="but_span" :class="page === 1?'none':''" @click="lookupTop('2')">上一页</span>
    <span class="but_span" :class="totalPage === page?'none':''" @click="lookupTop('3')">下一页</span>
    <span class="but_span" :class="totalPage === page?'none':''" @click="lookupTop('4')">末页</span>
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <span style="display: none;">{{ totalPages }}</span>
  </div>
</div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 20]
      }
    },
    layout: {
      type: String,
      // default: 'total, sizes, prev, pager, next, jumper'
      default: 'sizes, prev, pager, next'
    },
    background: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
        this.totalPage = Math.ceil(this.total / val)
      }
    },
    totalPages () {
      this.totalPageComputed(Math.ceil(this.total / this.limit))
      return Math.ceil(this.total / this.limit)
    }
  },
  data () {
    return {
      totalPage: ''
    }
  },
  methods: {
    totalPageComputed (totalPage) {
      this.totalPage = totalPage
    },
    handleSizeChange (val) {
      this.$emit('update:page', 1)
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
      }
    },
    handleCurrentChange (val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
      }
    },
    lookupTop (number) {
      // var num = JSON.parse(JSON.stringify(this.page))
      if (number === '1') { // 首页
        if (this.page == 1) {
          return
        }
        this.page = 1
      } else if (number === '2') { // 上一页
        if (this.page != 1) {
          this.page -= 1
          // num -= 1
        } else {
          return
        }
      } else if (number === '3') { // 下一页
        if (this.page != this.totalPage) {
          this.page += 1
          // num += 1
        } else {
          return
        }
      } else if (number === '4') { // 尾页
        if (this.totalPage === this.page) {
          return
        }
        this.page = this.totalPage
        // num = this.totalPage
      }
      this.$emit('update:limit', this.pageSize)
      this.$emit('update:page', this.page)
      this.$emit('pagination', { page: this.page, limit: this.pageSize })
      if (this.autoScroll) {
      }
    }
  }
}
</script>

<style>
.pagination-container {
  background: #fff;
  padding: 16px 0;
  display: flex;
  align-items: center;
}
.but_span{
  border: 1px solid #ddd;
  padding: 0 8px;
  cursor:pointer;
  display: block;
  margin-top: 3px;
  margin-right: 3px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  font-size: 15px;
}
.but_span:hover{
  border-color:  rgba(50, 180, 241, 0.6);
  color: rgba(50, 180, 241, 0.8);
}
.but_span.none{
  cursor: not-allowed;
  border: 1px solid #ccc;
  color: #ccc;
}
.pagination-container.hidden {
  display: none;
}
</style>
