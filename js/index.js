$(function () {
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            if(index==1){
                $(".mask1 h1").addClass("show1");
                $(".mask1 p").addClass("show2");
                $(".hire").css("opacity","1")
            }
            if(index == 2){
                $(".second h1").slideDown(1000);
                $(".second ul").show(1000);
            }
            if(index == 3){
                $(".mask3").show(1000).fadeIn(1000)
            }
            if(index == 4){
                function Fn(val,number) {
                    var obj = {num:0};
                    $(obj).animate({num:number},{
                        duration:1000,
                        step:function () {
                            val.html(Math.round(obj.num));
                        },
                        complete:function () {//最终显示2017
                            val.html(number);
                        }
                    });
                }

                Fn($("#can1"),80);
                Fn($("#can2"),85);
                Fn($("#can3"),88);
                Fn($("#can4"),80);
                Fn($("#can5"),80);
                Fn($("#can6"),20);
            }
            if(index == 5){
                $(".fifth-left").slideDown(1000);
                $(".fifth-right").slideDown(1000);
            }
        },
        onLeave: function(index, direction){
            if(index==1){
                $(".mask1 h1").removeClass("show1");
                $(".mask1 p").removeClass("show2");
                $(".hire").css("opacity","0")
            }
            if(index == '2'){
                $(".second h1").slideUp(1000);
                $(".second ul").hide(1000);
            }
            if(index == '3'){

            }
            if(index == '5'){
                $(".fifth-left").slideUp(1000);
                $(".fifth-right").slideUp(1000);
            }
        },

    });
    $(".mask1 h1").addClass("show1");
    $(".mask1 p").addClass("show2");
    $(".hire").css("opacity","1")



});
















