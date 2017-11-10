/**
 * 浣滆€咃細Bililovy
 *
 * 鏈€鍚庢洿鏂版椂闂达細2015.09.22
 *
 * 鏂囧瓧鍔ㄧ敾鎻掍欢锛屽府鍔╂洿濂界殑瑙ｅ喅鍔ㄧ敾鏁堟灉锛屼娇鐢ㄦ椂锛屽彧闇€灏唄tml鍏冪礌浠D鍛藉悕锛屼慨鏀规椤甸潰
 * 鐨勫厓绱犺缃紝鍙互鑷澧炲垹鍔ㄧ敾鍜屾寚瀹氬姩鐢绘晥鏋�
 */
(function($) {
    "use strict";
    var isOn=0,sets, fx, toAnimate = "#effect", settings = {
        animation:8, //鍔ㄧ敾鏂瑰紡 浠�1-15 姣忎釜鏁板瓧浠ｈ〃涓€涓姩鐢� 璇疯嚜娴嬫晥鏋�
        animationType: "in",//鏄剧ず鏂瑰紡 in 鍜宱ut 鍙傛暟锛宨n浠ｈ〃鍏ュ満,out浠ｈ〃鍑哄満
        backwards: false, //鏀瑰彉鍔ㄧ敾鏄剧ず鏂瑰悜锛岄粯璁alse 璁句负true 鍔ㄧ敾灏嗕粠鍚庡線鍓嶅€掑簭鎾斁
        easing: "easeOutQuint", //杩欓噷鐨勬晥鏋� 鍙互鍙傝http://code.ciaoca.com/jquery/easing/
        speed: 1000, //鍔ㄧ敾甯ч€� 鍗冲湪鎸囧畾鏃堕棿鍐呭畬鎴愬姩鐢�
        sequenceDelay: 100, //鍦烘櫙寤惰繜  鍗虫墽琛屽畬涓婁竴涓姩鐢诲悗锛岀瓑寰呮寚瀹氭椂闂寸户缁墽琛屼笅涓€鍔ㄧ敾
        startDelay: 0, //寮€濮嬪欢杩燂紝鍗虫墽琛屽綋鍓嶅姩鐢绘椂锛岀瓑寰呮寚瀹氭椂闂村悗鍐嶅紑濮�
        offsetX: 100,//鍔ㄧ敾鍏冪礌 x鍧愭爣鍋忕Щ閲�
        offsetY: 50,//鍔ㄧ敾鍏冪礌 Y鍧愭爣鍋忕Щ閲�
        onComplete: doThis, //鍥炶皟鍑芥暟 鍗� 鎵ц瀹屽姩鐢诲悗锛岄渶瑕佹墽琛岀殑鍥炶皟鏂规硶
        restoreHTML: true  //閲嶇疆鍏冪礌 鍗抽噸澶嶆挱鏀句袱娆¤鍔ㄧ敾 绫讳技浜庢鏁堟灉 榛樿true
    };

    jQuery(document).ready(function() {
        fx = jQuery("#effect");
        jQuery.cjTextFx(settings);
        jQuery.cjTextFx.animate(toAnimate);
    });

    function doThis(){
        fx = jQuery("#effect1");
        var animateObj='#effect1';
        if(isOn === 13) { fx.html('婕旂ず瀹屾瘯--by Bililovy'); sets = {animation: 1, animationType: "in", restoreHTML: false,onComplete:false};}else{
            (isOn < 13) ? isOn++ : isOn = 0;
            switch(isOn) {
                case 1:
                    sets = {
                        animation:2,
                        animationType: "in",
                        easing: "easeInQuint",
                        restoreHTML: false,
                    };
                    break;

                case 2:
                    sets = {animation: 11,animationType: "out", restoreHTML: false};
                    break;

                case 3:
                    fx.html("鐏垫椿杩愮敤锛屽埗閫犺嚜宸辩殑鍔ㄧ敾");
                    sets = {animation: 11, animationType: "in", restoreHTML: false};
                    break;
                case 4:
                    sets = {animation: 5, animationType: "out", restoreHTML: false};
                    break;
                case 5:
                    fx.html("鍏辨湁10澶氱鍏ュ満鍑哄満鏂瑰紡");
                    sets = {animation: 1};
                    break;

                case 6:
                    sets = {animation: 1, animationType: "out", restoreHTML: false};
                    break;

                case 7:
                    fx.html("杩欐槸涓€娆惧皬鍨嬩絾涓嶅瘨閰哥殑js鏂囧瓧鎻掍欢");
                    sets = {animation: 6, backwards: true};
                    break;

                case 8:
                    sets = {animation: 4, animationType: "out", backwards: true, restoreHTML: false};
                    break;

                case 9:
                    fx.html("鏈夊畠锛屽彲浠ュ府鍔╀綘杞绘澗瀹屾垚绠€鍗曞姩鐢�");
                    sets = {animation: 2, easing: "easeOutBounce"};
                    break;

                case 10:
                    sets = {animation: 2, animationType: "out", speed: 500, easing: "easeInBack", restoreHTML: false};
                    break;

                case 11:
                    fx.html("濡傛灉鍠滄姝ゆ彃浠讹紝鏁涓嬭浇鍚�");
                    sets = {animation: 14, startDelay: 1000, easing: "easeInBack", restoreHTML: false};
                    break;

                case 12:
                    sets = {animation: 6, animationType: "out", speed: 500, easing: "easeInBack", restoreHTML: false};
                    break;

                default :
                    isOn =13;//鍦ㄨ繖璁惧畾杩斿洖浠庡ご寮€濮�
                    break;
            }
        }
        jQuery.cjTextFx.animate(animateObj, sets);
    }


})(jQuery);