<template>
  <h1>Excel导出测试</h1>
  <p style="margin-top: 40px">
    <a-space>
      <a-button type="primary" :icon="h(DownloadOutlined)" @click="downloadFile">下载Excel</a-button>

      <a-upload
          v-model:file-list="fileList"
          name="file"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          上传Excel
        </a-button>
      </a-upload>

    </a-space>
  </p>
</template>

<script setup>
import {h} from 'vue';
import {DownloadOutlined} from '@ant-design/icons-vue';
import {UploadOutlined} from '@ant-design/icons-vue';
import {message} from "ant-design-vue";
import http from "@/utils/axios/index.js";
import {downloadFile as downer} from "@/utils/file.js";

function downloadFile() {
  http.get('/manage/order/export', {
    params: {
      orderNum: '000001'
    },
    responseType: 'blob'
  })
      .then(resp => {
          if (resp.data.type === 'application/json') {
            console.log(resp.data)
            const reader = new FileReader();
            reader.readAsText(resp.data, 'utf-8');
            reader.onload = () => {
              const result = JSON.parse(reader.result)
              message.error(
                  `Error: ${result.message}！`
              );
            };
          } else {
            downer(resp)
          }
      })
      .catch(err => {
        message.error('导出失败：' + err)
        console.log(err)
      })
}
</script>

<style scoped>

</style>
