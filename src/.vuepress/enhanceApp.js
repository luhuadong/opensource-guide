import baiduHmInit from './utils/hm';
import sensorsInit from './utils/sensors';
// import wxInit from './utils/weixin';
export default ({ isServer, Vue }) => {
  // !isServer
  if (!isServer) {
    import('./utils/weixin').then(wxInit => {
      const ENV = window.location.hostname == '127.0.0.1' || window.location.hostname == 'localhost' ? 'dev' : 'prod';
      if (ENV === 'prod') {
        baiduHmInit();
        sensorsInit();
        wxInit.default();
      }
    });
  }
  Vue.mixin({
    mounted () {}
  });
};
