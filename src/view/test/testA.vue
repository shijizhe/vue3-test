<template>
  <h3>
    展示水果列表
  </h3>
  <div style="width: 1000px;">
    <a-table bordered  :scroll="{ y: 300 }"
             :dataSource="tableData" :columns="tableColumn"/>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import http from "@/utils/axios/index.js";

let tableData = ref([])
let tableColumn = initColumns()
getAjaxData()

function getAjaxData() {
  http.get("/goods/fruit/list")
      .then(resp => {
        if (resp && resp.data.code === 200) {
          tableData.value = resp.data.data
        }
      })
      .catch(err => {
      })
}
function initColumns(){
  let columns = []
  columns.push(
      {
        title: '编码',
        dataIndex: 'frCode',
        key: 'frCode',
        minWidth: 150
      },
      {
        title: '名称',
        dataIndex: 'frName',
        key: 'frName',
        minWidth: 200
      },
      {
        title: '价格',
        dataIndex: 'frPrice',
        key: 'frPrice',
        minWidth: 120
      },
  )
  return columns
}
</script>

<style scoped>

</style>
