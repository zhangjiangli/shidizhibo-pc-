(function() {
    window.common = {
        init: function() {
            // common.urls = 'http://121.41.86.29:8068/sddc'
            // common.urls = 'http://live.seedland.cc/sddc'
            common.urls = 'http://test-live.seedland.cc/sddc'
            common.data = JSON.parse(localStorage.getItem('userInfo'))
            console.log(common.data)
            common.show = JSON.parse(localStorage.getItem('show'))
            console.log(common.show)
        },
        replace: function(oTarget) { //-----移除空格-----
            var re = /^\s*(.*?)\s*$/;
            return oTarget.replace(re, '$1');
        },
        

    }
    common.init();
    
   
   
})()
function ssologout(){
	window.location.href = 'http://test-sso-java.seedland.cc/ssologout?ReturnUrl='+common.urls + '/pc/index.htm';
}

 