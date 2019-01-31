import Vue from 'vue'
import App from './App.vue'
import vueBem from '@verstaerker/vue-bem';

Vue.use(vueBem, {
  namespace: '',
  blockSource: 'name',
  method: '$bem',
  hyphenate: {
    blockAndElement: false,
    modifier: true,
  },
  delimiters: {
    element: '__',
    modifier: '_',
    value: '-',
  },
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
