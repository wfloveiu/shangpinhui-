<template>
    <div class="pagination">
        <!-- 上面部分 -->
        <button :disabled="pageNo == 1" @click="beforepage()">上一页</button>
        <button v-show="startNumendNum.start >= 2" @click="topage1()">1</button>
        <button v-show="startNumendNum.start > 2">...</button>

        <button v-for="(page, index) in startNumendNum.end" :key="index" v-show="page >= startNumendNum.start"
            :class="{ active: page == pageNo }" @click="$emit('getpageNo', page)">
            {{ page }} </button>


        <button v-show="startNumendNum.end < totalPage - 1">...</button>
        <button v-show="startNumendNum.end < totalPage" @click="$emit('getpageNo', totalPage)">{{ totalPage }}</button>
        <button :disabled="pageNo == totalPage" @click="$emit('getpageNo', pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共{{ total }}条</button>
    </div>
</template>
  
  <script>
export default {
    name: "PagiNation",
    // 从父组件接收的数据
    props: ['pageNo', 'pageSize', 'total', 'continues'],
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        //计算连续的页码的起始数字和结束数字
        startNumendNum() {
            let start = 0, end = 0;
            if (this.continues > this.totalPage) {
                start = 1;
                end = this.totalPage;
            }
            else {
                start = this.pageNo - parseInt(this.continues / 2);
                end = this.pageNo + parseInt(this.continues / 2);
                if (start < 1) {
                    start = 1;
                    end = this.continues;
                }
                if (end > this.totalPage) {
                    start = this.totalPage - this.continues + 1;
                    end = this.totalPage;
                }
            }
            return { start, end };
        },
    },
    methods: {
        beforepage() {
            // console.log(this.pageNo - 1);
            this.$emit('getpageNo', this.pageNo - 1);
        },
        topage1() {
            this.$emit('getpageNo', 1);
        },

    }

};
</script>
  
  <style lang="less" scoped>
  .pagination {
      text-align: center;
  
      button {
          margin: 0 5px;
          background-color: #f4f4f5;
          color: #606266;
          outline: none;
          border-radius: 2px;
          padding: 0 4px;
          vertical-align: top;
          display: inline-block;
          font-size: 13px;
          min-width: 35.5px;
          height: 28px;
          line-height: 28px;
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          border: 0;
  
          &[disabled] {
              color: #c0c4cc;
              cursor: not-allowed;
          }
  
          &.active {
              cursor: not-allowed;
              background-color: #409eff;
              color: #fff;
          }
      }
  }
  
  .active {
      background-color: skyblue;
  }
  
  .bluebgc {
      background-color: skyblue;
  }
  </style>