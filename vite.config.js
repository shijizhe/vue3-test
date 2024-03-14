import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                }),
            ],
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            "@": resolve(__dirname, "src"),
        }
    },
    server: {
        open: true,// 启动项目自动弹出浏览器
        port: 4000,// 启动端口
        proxy: {
            '/boot-test': {
                target: 'http://localhost:8001/boot-test',	// 实际请求地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/boot-test/, '')
            },
        }
    },
})
