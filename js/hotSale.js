$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://losterchristmas.github.io/travel/static/mock/customer.json',
        success: function (data) {
            //console.log(data);
            $.each(data, function (index, info) {
                xuanranData(info);
            })
        },
        error: function () {
            $('#othersComment').append(`<div style='color:red;'>加载失败</div>`)
        }
    })

    $('#submitBtn').click(function () {
        var myComment = $('#myComment').val();
        // console.log($('.clickStar').children().eq(0).not('.light'));
        if ($('.clickStar').children().eq(0).not('.light').length == 1) {
            alert(`请选择评分`);
        }
        else if (myComment == '') {
            alert(`请输入内容`);
        }
        else {
            let obj = newComment();
            //console.log(obj);
            //提交游客data
            inputCustomerInfo(obj);



        }
    })

    $('#img').click(function () {
        $('#fullPic').addClass('fullPic');
        $('#fullPic').fadeIn(500);
        $('#othersComment').delay(500).hide(0);
        // let text = `<img src="../img/hotSale.jpg" alt="" id="innerPic">`
        let text = `  <div class="swiper-container" style="width:100%;height:50rem;top:50%;transform: translate(0px, -50%);">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../img/hotSale.jpg" alt="" class="innerPic"></div>
          <div class="swiper-slide"><img src="../img/hotSale_2.jpg" alt="" class="innerPic"></div>
          <div class="swiper-slide"><img src="../img/hotSale_3.jpg" alt="" class="innerPic"></div>
          <div class="swiper-slide"><img src="../img/hotSale_4.jpg" alt="" class="innerPic"></div>
        </div>
      </div>
      <div class="swiper-pagination" style="margin-bottom:55%"></div>`
        $('#fullPic').append(text);
        newSwiper();
        $('.innerPic').click(function (e) {
            e.stopPropagation();
        })
    })

    $('#fullPic').click(function () {
        $(this).removeClass('fullPic');
        $(this).children().remove();
        $('#othersComment').show();
        $('#fullPic').fadeOut(500);
    })

    function newSwiper() {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        });
    }

    function xuanranData(info) {
        let liContent = '';
        for (let i = 0; i < 5; i++) {
            let liContentList = `<li class='${info.num > i ? "light star" : "star"}'></li>`
            liContent += liContentList
        }
        // console.log(liContent);
        let str = ` <div class="comment">
                        <div class="commentLeft">
                            <div class="commentImg">
                                <img src="../img/youke.jpg" alt="">
                                <p>${info.name}</p>
                            </div>
                        </div>   
                        <div class="commentText">
                            <ul class="starContainer">
                            ${liContent}
                            </ul>   
                            <p style="font-size:1rem;">${info.comment}</p>
                        </div>         
                    </div>`
        $('#othersComment').append(str);

    }

    $('.clickStar li').click(function () {
        clickStarIndex = parseInt($(this).attr('clickStarli'));
        //$(this).addClass('light');
        //console.log(i);
        //console.log($('.clickStar').children().eq(0)) ;
        for (let j = 0; j < 5; j++) {
            let index = parseInt($('.clickStar').children().eq(j).attr('clickStarli'));
            if (index <= clickStarIndex) {
                $('.clickStar').children().eq(j).addClass('light');
            }
            else {
                $('.clickStar').children().eq(j).removeClass('light');
            }
        }

    })

    function newComment() {
        let obj = {
            num: clickStarIndex,
            name: '游客',
            comment: $('#myComment').val()
        };
        return obj;
    }

    function inputCustomerInfo(info) {
        //ajax提交info


        //成功返回执行函数
        // $.ajax({
        //     url: "",
        //     type: "POST",
        //     data: obj,
        //     success: res => {
        //         if (res) {
        //             successCustomerInfo(info)
        //         }
        //     }
        // })
        successCustomerInfo(info)


    }
    function successCustomerInfo(info) {
        $('#myComment').val('');
        $('.clickStar').children().removeClass('light');
        xuanranData(info)
        alert(`提交成功`);
    }
})