### gulp-demo

This is a simple demo for gulp project. It contains a basic folder structure and gulpfile to help you start a project quickly.


### gulp plugins
- gulp-jshint: js语法检查，格式化
- gulp-stylus: stylus 插件
- gulp-imagemin: 图片压缩
- gulp-livereload: 自动重载
- gulp-notify: 更改提示
- gulp-concat: 合并
- gulp-uglify: 文件的压缩
- gulp-rename: 重命名
- gulp-del: 删除文件
- gulp-cache: 缓存文件
- gulp-minifycss: 压缩css

### what it can do
- cross browsers. do not need install livereload browser plugin.


        
### how to use

install gulp in the global environment to use CLI of gulp

        $ npm install gulp -g

install local gulp environment for certain project

        $ cd gulp-demo
        $ npm install gulp --save-dev

install gulp plugins

        $ npm install gulp-jshint gulp-stylus gulp-imagemin gulp-livereload gulp-del gulp-notify gulp-concat gulp-uglify gulp-rename gulp-cache gulp-minifycss --save-dev

start project
    
        $ gulp

view in the browser
        
        http://localhost/gulp-demo/

watch project 
        
        $ gulp watch

### simple project structure

        - assets
        - images
        - css
        - js
        - index.html
        - gulpfile.js
        - package.json
