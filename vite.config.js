import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactSvgPlugin from "vite-plugin-react-svg";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), reactRefresh(), reactSvgPlugin()],

    server: {
        port: '3000',
        open: false, //自动打开 
        base: "./ ", //生产环境路径
        proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
            // 正则表达式写法
            '^/api': {
                target: 'https://lab.isaaclin.cn/nCoV/api', // 后端服务实际地址
                changeOrigin: true, //开启代理
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
});
