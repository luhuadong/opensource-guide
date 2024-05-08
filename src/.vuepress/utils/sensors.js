// 神策
const sensorsInit = function () {
  (function (para) {
    var p = para.sdk_url,
      n = para.name,
      w = window,
      d = document,
      s = 'script',
      x = null,
      y = null;
    if (typeof w['sensorsDataAnalytic201505'] !== 'undefined') {
      return false;
    }
    w['sensorsDataAnalytic201505'] = n;
    w[n] =
      w[n] ||
      function (a) {
        return function () {
          (w[n]._q = w[n]._q || []).push([a, arguments]);
        };
      };
    var ifs = [
      'track',
      'quick',
      'register',
      'registerPage',
      'registerOnce',
      'trackSignup',
      'trackAbtest',
      'setProfile',
      'setOnceProfile',
      'appendProfile',
      'incrementProfile',
      'deleteProfile',
      'unsetProfile',
      'identify',
      'login',
      'logout',
      'trackLink',
      'clearAllRegister',
      'getAppStatus'
    ];
    for (var i = 0; i < ifs.length; i++) {
      w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
      (x = d.createElement(s)), (y = d.getElementsByTagName(s)[0]);
      x.async = 1;
      x.src = p;
      x.setAttribute('charset', 'UTF-8');
      w[n].para = para;
      y.parentNode.insertBefore(x, y);
    }
  })({
    sdk_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.15.21/sensorsdata.min.js',
    name: 'sensors',
    server_url: 'https://haveaniceday.gitee.com:3443/sa?project=production',
    show_log: false,
    heatmap: {
      //default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
      clickmap: 'default',
      //default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭。
      scroll_notice_map: 'not_collect'
    }
  });
  sensors.quick('autoTrack');
};
export default sensorsInit;
