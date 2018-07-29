$(function () {
    <!-- 返回到顶部 -->
    $("div#topcontrol").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    <!-- 在文本或密码输入时禁止空格键 -->
    $('input.nospace').keydown(function (e) {
        if (e.keyCode == 32) {
            return false;
        }
    });
});