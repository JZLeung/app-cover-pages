import './copyright.scss';

if (process.env.NODE_ENV !== 'development') {
  document.write(`
<!-- Global site tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-139671369-2"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-139671369-2');
  </script>
  <!-- 百度统计 -->
  <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?4924873aa1eeaa30ee9ff8bcea2386e6';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
    })();
  </script>
  <!-- 腾讯统计  -->
  <script>
  	var _mtac = {"senseQuery":1};
  	(function() {
  		var mta = document.createElement("script");
  		mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
  		mta.setAttribute("name", "MTAH5");
  		mta.setAttribute("sid", "500710256");
  		mta.setAttribute("cid", "500710257");
  		var s = document.getElementsByTagName("script")[0];
  		s.parentNode.insertBefore(mta, s);
  	})();
  </script>
  <!-- 腾讯热点图 -->
  <script type="text/javascript" src="//pingjs.qq.com/h5/hotclick.js?v2.0" name="mtah5hotclick" sid="500710256" hid="5e3a92432ef95"></script>
  <script type="text/javascript" src="//pingjs.qq.com/h5/hotclickurl.js?v1.0" name="mtah5hoturl" sid="500710256" hid="ht5e3a925c6da0c"></script>
`);

  window.downloadAPK = function() {
    MtaH5 && MtaH5.clickStat('download');
    window.location.href = 'https://appgallery.huawei.com/#/app/C101971237';
  };
} else {
  window.downloadAPK = function() {};
}
