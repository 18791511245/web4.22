
<template>
<div class="tablebox">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="头像"
        width="180">
         <template slot-scope="scope">
          <div>
            <img :src="scope.row.avatarUrl" width="90" height="100"/>
          </div>
      </template>
      </el-table-column>
      <el-table-column
        prop="realName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>
    </el-table>

     <div class="block">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="sizenum"
      layout="total, prev, pager, next"
      :total="totalNum">
    </el-pagination>
     </div>


    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [],
          currentPage:1,
          sizenum:20,
          totalNum:1,
        }
      },
      created(){
        this.getALL();
      },
      methods:{
        //   "http://route.showapi.com/1793-1?
        //   showapi_appid=替换自己的值&name=&page=&sort=&showapi_sign=替换自己的值"
          getALL(){
        const self=this;

              this.$axios.get('http://route.showapi.com/126-2',{
                    params:{
                        showapi_appid:'169840',
                        showapi_sign:'08ffb83b9f9b40b9bfd04f66a586656f',
                        type:'可爱',
                        page:self.currentPage,
                        order:'1',
                    }
              }).then(res=>{
                  console.log(res);
                  self.tableData = res.data.showapi_res_body.pagebean.contentlist;
                  self.totalNum = res.data.showapi_res_body.pagebean.allNum;

                //   self.totalnum=
              })
          },
         handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
          this.currentPage=val;
          this.getALL();
      }
      },
    }
  </script>
  <style >
  .tablebox{
      width: 90%;
      margin: 20px auto;
  }
  </style>