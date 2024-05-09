import wx from 'weixin-js-sdk';
import request from './request.js';
// /opensource-guide/logo100.png
// 添加隐藏的分享图片

const wxInit = function () {
  const oShareImg = document.createElement('img');
  oShareImg.style.position = 'absolute';
  oShareImg.style.opacity = 0;
  oShareImg.style.zIndex = -1000;
  oShareImg.src = '/opensource-guide/logo100.png';
  document.body.insertAdjacentElement('afterbegin', oShareImg);

  // 微信分享 相关
  (function () {
    if (location.href.indexOf('gitee.com') < 0) return;
    request('get', '/weixin/actions/jssign_package', 'url=' + encodeURIComponent(location.href), function (result) {
      if (!result) return;
      var data = JSON.parse(result || null).data;
      var wxconfig = {
        debug: false,
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,
        jsApiList: [
          // 可能需要用到的能力
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ] // 必填，需要使用的JS接口列表
      };
      wx.config(wxconfig);
      wx.ready(
        function () {
          var shareTitle = '开源指北 1.0';
          var shareDesc = '一份给开源新手的保姆级开源百科';
          var shareImg = 'https://gitee.com/opensource-guide/logo100.png';
          var shareUrl = location.href;
          setTimeout(() => {
            // 老版本废弃方法 ,兼容ios
            wx.onMenuShareAppMessage({
              title: shareTitle, // 分享标题
              desc: shareDesc, // 分享描述
              link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: shareImg, // 分享图标
              type: '', // 分享类型,music、video或link，不填默认为link
              dataUrl: shareImg, // 如果type是music或video，则要提供数据链接，默认为空
              success: function () {}
            });
            wx.onMenuShareTimeline({
              title: shareTitle, // 分享标题
              link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: shareImg, // 分享图标
              success: function () {}
            });
            wx.updateAppMessageShareData({
              title: shareTitle,
              // 分享标题
              desc: shareDesc, // 分享描述
              link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: shareImg, // 分享图标
              success: function (err) {
                // alert("分享1设置成功");
                // alert(JSON.stringify(err));
              },
              cancel: err => {
                console.log(err);
              }
            });

            // 分享到朋友圈
            wx.updateTimelineShareData({
              title: shareTitle, // 分享标题
              link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: shareImg, // 分享图标
              success: function (err) {
                // alert("分享2设置成功");
                // alert(JSON.stringify(err));
              },
              cancel: err => {
                console.log(err);
              }
            });
          }, 0);
        },
        function (err) {
          console.log('调试信息', JSON.stringify(err));
        }
      );
    });
  })();
};
export default wxInit;
