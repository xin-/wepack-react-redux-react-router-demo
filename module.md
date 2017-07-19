### 模块

1. commonJS (require/export)
2. AMD (require.js)
3. UMD 
4. CMD (sea.js)
5. ES6 (import/export)

commonJS：

> 服务器端规范 采用同步加载 加载完所有依赖之后 才开始模块内的代码

AMD：

> 浏览器端规范 首先使用script标签加载依赖 然后执行回调函数

CMD：

> 浏览器端规范 首先Function.toString()解析出来require的文件，然后加载依赖(不执行，只加载)， 然后执行回调函数， 在回调函数中执行到require的时候才执行加载回来的文件... — 二逼思路，极不推荐

UMD:

> 感觉只是做了一个判断，如果是在浏览器环境使用AMD 如果是在服务区环境使用commonJS 进行打包， 以表示 我兼容浏览器和服务区啦！ — 略二逼

ES6:

[ES6-module](http://es6.ruanyifeng.com/#docs/module)

> *不知道自己总结的对不对 ⬇️*

> es6 的import/export 提供的是语法层面的东西， 目前所有的es6的语法各个环境还没有提供完整的支持
>
> 1. ###### 在没有import之前 ：
>
> node实现同步，且单个文件即为一个module
>
> amd利用动态添加script标签实现异步 每一个回调函数即位一个module
>
> 2. ###### babel下的import：
>
> babel所做的事情是把es6的语法翻译为es5的语法 把所有es6语法的文件翻译成es5语法的文件 然后再执行， 其本质 与coffee等工具没毛区别
>
> 3. ###### es6 import：
>
> es6的import 是原生支持，我理解等到真正es6的时候：
>
> node端与现在变化不大
>
> 在浏览器端 因为不太可能像node一样一个文件分为一个module 这样网络请求数量太多，但是因为浏览器原生支持import/export   到时候babel将死 webpack将简化  webpack只需要把所有的模块放到一个文件中 import由浏览器自行解析
>
> 

