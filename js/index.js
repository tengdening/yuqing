$(function(){

    $("#fullpage").fullpage({
        navigation:true,
        fixedElements:".next",
        navigationPosition: 'right',
        navigationTooltips:['登录百度舆情', '领先：数据收集与处理', '全面：舆情分析与架构', '专业：专业数据可视化'],
        // onLeave: function(index, nextIndex, direction){
        //     if (index == 1) {
        //         $('#uc-safe-pwd-input').hide();
        //         $('.J_btn_login').fadeIn();
        //     }
        //     if (nextIndex == 1) {
        //         $('.J_btn_login').fadeOut();
        //     }
        // },
        // afterLoad: function(anchorLink, index){
        //     if (index == 1) {
        //         $('#uc-safe-pwd-input').show();
        //         $('#fullpage').css('transform', 'none');
        //     }
        // }
    })
    $(".btn-arrow").click(function () {
        $.fn.fullpage.moveSectionDown();
    })




    
})