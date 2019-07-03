
(function(win,$){

    var defaultPar = {
        rotateNum:5,
        body:"body",
        clickFn:function(){},
        judegFn:function(){}
    }
    
    win.Lottery = Lottery;
    function Lottery(pars){
        this.pars = $.extend(true,{},defaultPar,pars);
        console.log(this.pars);
        this.isDoing = false;
        this.init();
    }
    Lottery.prototype.init = function(){
        var _this = this;
        $(this.pars.body).on('click','.btn',function(){
            if(!_this.isDoing){
                _this.isDoing = true;
                _this.pars.clickFn();
            }
        });
        
        $(this.pars.body).find('.pan').get(0).addEventListener('webkitTransitionEnd', function (e) {
               var degEnd =  $(_this.pars.body).attr('date-deg') ;
               _this.pars.judegFn(degEnd);
               $(_this.pars.body).find('.pan').css({
                transform: 'rotate(' + degEnd + 'deg)',
               transition: 'none'
              });
              _this.isDoing = false;
    
            })
    };
    Lottery.prototype.goRotate  = function(deg){
            var rotateEnd = this.pars.rotateNum*360 + deg;
            $(this.pars.body).find('.pan').css({
                      transform: 'rotate(' + rotateEnd + 'deg)',
                     transition: 'all 5s'
                    });
                    $(this.pars.body).attr('date-deg',deg) ;
    
    }





    
})(window,$)

