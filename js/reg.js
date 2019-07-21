$(function(){
    $('#res').click(function(){
        $('.error').remove();
        $('.info input').each(function(index,domEle){
            var id=$(domEle).attr('id');
            var info=$('#'+id).val();
            if(info==''){
                $(this).after('<div class="error">请输入信息</div>');
            }
        })
        if($('#psd').val()!=$('#psd2').val()){
            $('#psd2').after('<div class="error">密码不一致</div>');
        }
        if($(checkItem).attr('checked')!='checked'){
            $('#checkItem').after('<span class="error">123123</span>');
        }
    })
})