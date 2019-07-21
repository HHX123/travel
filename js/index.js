$(function () {
    var style1 = document.createElement('style');
    style1.innerHTML = '.jump1::after{opacity:1}';
    document.head.appendChild(style1);

    var style2 = document.createElement('style');
    style2.innerHTML = '.jump2::after{opacity:1}';
    document.head.appendChild(style2);

    $('#showHome').click(function () {
        $('#home').toggle(200);
    })

    $(document).click(function () {
        $('#home').fadeOut(200);
    })

    $('#showHome').click(function (e) {
        e.stopPropagation();
    })

    $('#jump1').click(function () {
        scrollToHot('#hotSaleT', 100);
        setTimeout(function(){
        // $(this).addClass('clickJump').siblings().removeClass('clickJump');
        })
        
    })

    $('#jump2').click(function () {
        scrollToWeekend('#weekend', 100);
        $('#jump1').attr('id','');
        // $(this).addClass('clickJump').siblings().removeClass('clickJump');
    })


    getInfo('GET','https://losterchristmas.github.io/travel/static/mock/index.json',asd);


    function scrollToHot(ele, speed) {
        $('html,body').animate({ scrollTop: ($(ele).offset().top - 70) }, speed);
    }

    function scrollToWeekend(ele, speed) {
        $('html,body').animate({ scrollTop: ($(ele).offset().top - 90) }, speed);
    }

    // $('#jump1').click(function () {
    //     scrollToHot('#hotSaleT', 100);
    // })

    // $('#jump2').click(function () {
    //     scrollToWeekend('#weekend', 100);
    // })





    var hotImg = new Array();
    var hotTitle = new Array();
    var hotLike = new Array();
    hotImg = ['"../img/lijiang.jpg"', '"../img/ouzhou.jpg"', '"../img/balidao.jpg"', '"../img/taiguo.jpg"', '"../img/sanya.jpg"', '"../img/riben.jpg"'];
    hotTitle = ['丽江', '欧洲', '巴厘岛', '泰国', '三亚', '日本'];
    hotLike = ['12123人喜欢', '6755人喜欢', '23456人喜欢', '12123人喜欢', '6755人喜欢', '23456人喜欢'];
    for (let i = 0; i < 3; i++) {
        $('.hotTop').append('<div class="hotTop1"><img src=' + hotImg[i] + ' alt=""><div class="innerImg"><p>' + hotTitle[i] + '</p><p>' + hotLike[i] + '</p></div></div>')
    }

    for (let j = 3; j < hotImg.length; j++) {
        $('.hotBottom').append('<div class="hotBottom1"><img src=' + hotImg[j] + ' alt=""><div class="innerImg"><p>' + hotTitle[j] + '</p><p>' + hotLike[j] + '</p></div></div>')
    }

    var arr = new Array();
    arr = [{
        'img': '"../img/hotSale1.jpg"',
        'tittle': '山海关+北戴河2日',
        'desc': '人人都有一双发现美的眼睛，身边的事物...'
    },
    {
        'img': '"../img/hotSale2.jpg"',
        'tittle': '长隆水上乐园',
        'desc': '界欢乐汇聚长隆，这里拥有多个大型娱...'
    },
    {
        'img': '"../img/hotSale3.jpg"',
        'tittle': '香港迪士尼乐园',
        'desc': '暑期特惠，最适合儿童游玩的娱乐场所，有...'
    },
    {
        'img': '"../img/hotSale4.jpg"',
        'tittle': '浮在海上的绿洲',
        'desc': '南国冰海之城，避寒胜地，有暖暖的阳光和...'
    },
    {
        'img': '"../img/hotSale5.jpg"',
        'tittle': '野生动物世界',
        'desc': '观看阵容数量最强大的熊猫群体，大象表演...'
    },
    {
        'img': '"../img/hotSale6.jpg"',
        'tittle': '儿童游乐场',
        'desc': '在这里可以观看到最适合儿童的各种卡通人物...'
    },
    {
        'img': '"../img/hotSale7.jpg"',
        'tittle': '海南三亚',
        'desc': '这里的天空和海洋让人心旷神怡，配上各种...'
    }]

    $.each(arr, function (index, item) {
        $('.hotSale').append(`
            <div class="innerHotSale">
			<div class="hotSaleImg"><img src=${item.img} alt=""></div>
			<div class="hotSaleText">
				<h6>${item.tittle}</h6>
				<p>${item.desc}</p>
				<a href="../html/hotSale.html"><button>查看详情</button></a>
			</div>
		</div>`)
    })

})


function jump(){
    let jump = $('#jump');
    let win = $(window);
    let doc = $(document);
    let weekTitle=$('#weekendtitle').offset().top;
    let Y = $('#jump').offset().top;
    //console.log(weekTitle);
    
    
    win.scroll(function () {
        if (doc.scrollTop() >= (Y - 30)&&doc.scrollTop()<=(weekTitle-90)) {
            $('#jump').addClass('moveJump');
            $('#jump1').addClass('clickJump');
            $('#jump2').removeClass('clickJump');
            $('#hotSaleT').css({ 'margin-top': '5rem' });
            
            
        }
        else if(doc.scrollTop()>=(weekTitle-90)){
             $('#jump2').addClass('clickJump').siblings().removeClass('clickJump');
             $('.jump1').attr('id','jump1');
        }
        else {
            $('#jump').removeClass('moveJump');
            $('#hotSaleT').css({ 'margin-top': '' });
            $('#jump1').removeClass('clickJump');
            $('#jump2').removeClass('clickJump');
        }
    })
}



var asd = function (data) {

    if (data.ret) {
        data = data.data

        let weekendArr = data.weekendArr;

        $.each(weekendArr, function (index, item) {
            let str = `
            <div class="wedImg" id="wedImg">
                <img src="${item.img}" alt="">
            </div>
            <div class="wedTittle" id="wedTittle">
                <h4>${item.title}</h4>
            </div>
            <div class="wedDesc" id="wedDesc">
                <p>${item.desc}</p>
            </div>`

            $('#weekend').append(str)
        })
    } else {
        alert('请求失败')
    }

    jump();
}

function getInfo(type,url,callback) {
    $.ajax({
        type: type,
        url: url,
        success: function (data) {
            callback&& callback(data);
        }
    })

    var date = new Date();
    var day=date.getDay();
    var c=5-day;
    console.log(c);
   $('#weekendtitle').append(`<span style="float:right;color:red;font-size:1rem;margin-top:1.8%;margin-right:4%;">距离周末还有：${c}天</span>`);
}