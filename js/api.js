var API = {
    path : "/gulp-demo/",
    localIp: '192.168.2.221',
    watch: true,
    startWatch: function() {
        if(this.watch) {
            document.write('<script src="http://' + (location.host || API.localIp).split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
        }
    }
};