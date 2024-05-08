const baiduHmInit = function () {
  function setPageviewProperty () {
    try {
      window._hmt.push(['_setPageviewProperty', { page_group: location.pathname + '#' + 'opensource-guide' }]);
    } catch (e) {
      console.error(e);
    }
  }

  function Baidu () {
    var hm = document.createElement('script');
    var s = document.getElementsByTagName('script')[0];
    hm.src = 'https://hm.baidu.com/hm.js?24f17767262929947cc3631f99bfd274';
    s.parentNode.insertBefore(hm, s);

    if ('ActiveXObject' in window) {
      // IE 浏览器
      hm.onreadystatechange = function () {
        if (this.readyState === 'loaded' || this.readyState === 'complete') {
          setPageviewProperty();
        }
      };
    } else {
      hm.onload = function () {
        setPageviewProperty();
      };
    }
  }
  /************* 百度统计 *************/

  // GrowingIo
  function GrowingIo () {
    /* eslint-disable */
    !(function (e, t, n, g, i) {
      (e[i] =
        e[i] ||
        function () {
          (e[i].q = e[i].q || []).push(arguments);
        }),
        (n = t.createElement('script')),
        (tag = t.getElementsByTagName('script')[0]),
        (n.async = 1),
        (n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g),
        tag.parentNode.insertBefore(n, tag);
    })(window, document, 'script', 'assets.growingio.com/2.1/gio.js', 'gio');

    gio('init', 'abaa2ee5652ffb08', {});

    //custom page code begin here

    //custom page code end here

    gio('send');
  }

  Baidu();

  // GrowingIo()
};
export default baiduHmInit;
