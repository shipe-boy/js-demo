

var pars = {
        rotateNum:8,
        body:'.container',
        clickFn:clickcbFun,
        judegFn:judegcbFun
}

var lottery  = new Lottery(pars);

function clickcbFun(){
    var deg = Math.floor(Math.random() * 360);
    lottery.goRotate(deg);
}

function judegcbFun(reg){
    var str = '';
        if (reg > 0 && reg < 45) {
            //二等奖
            str = '二等奖'
        } else if (reg > 90 && reg < 135 || reg > 280 && reg < 325) {
            //三等奖
            str = '三等奖'
        } else if (reg > 45 && reg < 90 || reg > 135 && reg < 180 || reg > 225 && reg < 270 || reg > 325 && reg < 360) {
            //四等奖
            str = '四等奖'
        } else if (reg > 180 && reg < 225) {
            //一等奖
            str = '一等奖';
        }
        alert('恭喜你 !大吉大利 今晚获得' + str);
}
// var num = 0,
//     bool = true;
// $('.btn').click(function () {
//     if(bool){
//         var reg = Math.floor(Math.random() * 360);
//         console.log(reg)
//         num = reg;
//         run(reg);
//         bool = false;
//     }
   
// })
// // console.log($('.pan').eq(0)[0])
// $('.pan').eq(0)[0].addEventListener('webkitTransitionEnd', function (e) {
//     console.log('ok');
//     judeg(num);
//     $('.pan').css({
//         transform: 'rotate(' + num + 'deg)',
//         transition: 'none'
//     })
//     bool =  true;
// })
// function run(reg) {
//     var NumberReg = 6 * 360 + reg;
//     $('.pan').css({
//         transform: 'rotate(' + NumberReg + 'deg)',
//         transition: 'all 5s'
//     })
// }

// function judeg(reg) {
//     var str = '';
//     if (reg > 0 && reg < 45) {
//         //二等奖
//         str = '二等奖'
//     } else if (reg > 90 && reg < 135 || reg > 280 && reg < 325) {
//         //三等奖
//         str = '三等奖'
//     } else if (reg > 45 && reg < 90 || reg > 135 && reg < 180 || reg > 225 && reg < 270 || reg > 325 && reg < 360) {
//         //四等奖
//         str = '四等奖'
//     } else if (reg > 180 && reg < 225) {
//         //一等奖
//         str = '一等奖';
//     }
//     alert('恭喜你 !大吉大利 今晚获得' + str);
// }

//模块化 封装的思想 让我们的代码 可重复性 可维护性 变量不污染全局 ，，，coder  -- programer
//函数  ： 最初的模块化思想 函数式编程---闭包的思想---偏函数，
// function add(a,b){
//     return a + b 
// }
//对象的方式，
// var obj = {
//     myname:'xuenan',
//     init:function(){
//         this.getName()
//     },
//     getName:function(){

//     }
// }
// obj.init();

// function Pro(name){
//     this.name = name,
//     this.init();
// }
// Pro.prototype.init = function(){

// }
// new Pro();

//；立即执行函数
// var xn  = (function(){
//     var  name  = 'xuena';
//     function abc(){
//         console.log(name)
//     }
//     return  {
//         add:abc
//     }
// })()
//jquery
//(
    // (function(a,b){
    //     //model   
    //     b(a);
    // })(window,function(window){
        
    //     window.jquery =  jquery = $;
    //     function jquery(){

    //     }
    //     jquery.prototype.init///// //jquery
    // })
    //node.js    AMD  CMD  COMMEN.JS  .webPack gulp  ..npm 