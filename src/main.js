import Vue from 'vue'

import App from './App.vue'

//完整版引入mint-ui(薄荷)
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//按需导入 更好一点 让代码体积变小
//我们现在只想用mint-ui的button组件
// https://cloud.tencent.com/developer/section/1489979
//Button用在html上面
// mui 用了mui 有点问题要解决
// 用一个ui组件
// import { Button } from 'mint-ui';
// Vue.component(Button.name, Button);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui样式
import './lib/mui/css/mui.css'

const vm = new Vue({
  el:'#app',
  render:function(createElement){
    return createElement(App)
  }
})