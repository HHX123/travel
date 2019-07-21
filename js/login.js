$(".code").html(null);
    function createCode() {
        var code = "";
        var length = 6;
        var i;
        var str = "";
        var content;
        var codeSpan = $(".code");
        var arrColor = ["blue", "red", "green", "brown", "gray", "pink", "red", "green", "brown", "blue"];
        codeSpan.html(null);
        for (i = 0; i < length; i++) {
            index = Math.floor(Math.random() * 6);
            code = Math.floor(Math.random() * 10);
            str += code;
            color = arrColor[index];
            content = $("<i></i>").html(code);
            content.appendTo(codeSpan);
            $(".code i").eq(index).css({"color": color});
        }
        codeSpan.attr("data-val", str);
    }

    $(".receive_code").click(createCode);

    $(function(){
        $('#logIn').click(function(){
            $('.error').remove();
            $.each($('.info input'),function(index,domEle){
                var id=$(domEle).attr('id');
                var info=$('#'+id).val();
                if(info==''){
                    $(this).after('<div class="error" id=error'+index+'>请输入信息</div>');
                    $('#error2').remove();     
                    $('#checkCode').after('<div class="error">请输入正确的验证码</div>')              
                }
            })            
        })
    })