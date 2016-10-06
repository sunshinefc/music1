$(function(){
    var database=[

        {name:'Almost Lover',src:'mp3/Almost Lover.mp3',songer:'A Fine Frenzy',img:'img/geshou1.png',duration:'04:30'},
        {name:'丑八怪',src:'mp3/丑八怪.mp3',songer:'薛之谦',img:'img/gesho2.png',duration:'04:13',lyrics:[
            {time:"00:02",lyric:"丑八怪 - 薛之谦"},
            {time:"00:04",lyric:"作词：甘世佳"},
            {time:"00:06",lyric:"作曲：李荣浩"},
            {time:"00:20",lyric:"如果世界漆黑 其实我很美"},
            {time:"00:24",lyric:"在爱情里面进退 最多被消费"},
            {time:"00:28",lyric:"不管同样的是非 又怎么不对 无所谓"},
            {time:"00:36",lyric:"如果像你一样 总有人赞美"},
            {time:"00:39",lyric:"围绕着我的卑微 也许能消退"},
            {time:"00:43",lyric:"其实我并不在意 有很多机会"},
            {time:"00:46",lyric:"像巨人一样的无畏"},
            {time:"00:49",lyric:"放纵我心里的鬼 可是我不配"},
            {time:"00:55",lyric:"丑八怪 能否别把灯打开"},
            {time:"01:02",lyric:"我要的爱 出没在漆黑一片的舞台"},
            {time:"01:10",lyric:"丑八怪 在这暧昧的时代"},
            {time:"01:18",lyric:"我的存在 像意外"},
            {time:"01:38",lyric:"有人用一滴泪 会红颜祸水"},
            {time:"01:41",lyric:" 有人丢掉称谓 什么也不会"},
            {time:"01:45",lyric:"只要你足够虚伪 就不怕魔鬼 对不对"},
            {time:"01:53",lyric:"如果剧本写好 谁比谁高贵"},
            {time:"01:57",lyric:"我只能沉默以对 美丽本无罪"},
            {time:"02:00",lyric:"当欲望开始贪杯 有更多机会"},
            {time:"02:04",lyric:"像尘埃一样的无畏"},
            {time:"02:07",lyric:"化成灰谁认得谁 管他配不配"},
            {time:"02:12",lyric:" 丑八怪 能否别把灯打开"},
            {time:"02:20",lyric:"我要的爱 出没在漆黑一片的舞台"},
            {time:"02:27",lyric:"丑八怪 在这暧昧的时代"},
            {time:"02:35",lyric:"我的存在 不意外"},
            {time:"03:02",lyric:"丑八怪 其实见多就不怪"},
            {time:"03:10",lyric:"放肆去HIGH 用力踩"},
            {time:"03:14",lyric:"那不堪一击的洁白"},
            {time:"03:17",lyric:"丑八怪 这是我们的时代"},
            {time:"03:26",lyric:"我不存在 才意外"}]},
        {name:'好久不见',src:'mp3/好久不见.mp3',songer:'陈奕迅',img:'img/geshou3.png',duration:'04:10',
            lyrics:[
                {time:"00:02",lyric:"好久不见"},
                {time:"00:04",lyric:"陈奕迅"},
                {time:"00:15",lyric:"我来到 你的城市"},
                {time:"00:17",lyric:"走过你来时的路"},
                {time:"00:23",lyric:"想像着 没我的日子"},
                {time:"00:29",lyric:"你是怎样的孤独"},
                {time:"00:37",lyric:"拿着你 给的照片"},
                {time:"00:43",lyric:"熟悉的那一条街"},
                {time:"00:49",lyric:"只是没了你的画面"},
                {time:"00:55",lyric:"我们回不到那天"},
                {time:"01:03",lyric:"你会不会忽然的出现"},
                {time:"01:10",lyric:"在街角的咖啡店"},
                {time:"01:16",lyric:"我会带着笑脸 挥手寒喧"},
                {time:"01:22",lyric:" 和你 坐着聊聊天"},
                {time:"01:29",lyric:"我多么想和你见一面"},
                {time:"01:35",lyric:"看看你最近改变"},
                {time:"01:41",lyric:"不再去说从前 只是寒喧"},
                {time:"01:48",lyric:"对你说一句 只是说一句"},
                {time:"01:56",lyric:"好久不见"},
                {time:"02:15",lyric:"拿着你 给的照片"},
                {time:"02:21",lyric:"熟悉的那一条街"},
                {time:"02:28",lyric:" 只是没了你的画面"},
                {time:"02:33",lyric:" 我们回不到那天"},
                {time:"02:41",lyric:"你会不会忽然的出现"},
                {time:"02:47",lyric:"在街角的咖啡店"},
                {time:"02:53",lyric:"我会带着笑脸 挥手寒喧"},
                {time:"03:00",lyric:"和你 坐着聊聊天"},
                {time:"03:07",lyric:"我多么想和你见一面"},
                {time:"03:13",lyric:"看看你最近改变"},
                {time:"03:19",lyric:" 不再去说从前 只是寒喧"},
                {time:"03:26",lyric:" 对你说一句 只是说一句"},
                {time:"03:34",lyric:"好久不见"}]},
        {name:'经过',src:'mp3/经过.mp3',songer:'陈楚生',img:'img/geshou4.png',duration:'04:59',lyrics:
            [{time:"0:02",lyric:"经过"},
                {time:"00:04",lyric:"陈楚生"},
                {time:"00:06",lyric:"词曲：仓雁彬"},
                {time:"00:17",lyric:" 若我爱你的方式"},
                {time:"00:22",lyric:" 已不同开始"},
                {time:"00:26",lyric:"不如我们变换下位置"},
                {time:"00:29",lyric:"看一看原来它的样子"},
                {time:"00:33",lyric:"我害怕那种坚持"},
                {time:"00:37",lyric:" 无声的休止"},
                {time:"00:58",lyric:"浪漫被岁月滴水穿石"},
                {time:"01:02",lyric:"散落却从来都没发觉"},
                {time:"01:08",lyric:"沉默的你呀 我们能懂得"},
                {time:"01:13",lyric:"什么都不说"},
                {time:"01:18",lyric:"如果这生命如同一段旅程"},
                {time:"01:23",lyric:"总要走过后才完整"},
                {time:"01:29",lyric:"谁不曾 怀疑过 等待过"},
                {time:"01:34",lyric:"有过都值得"},
                {time:"01:40",lyric:"多幸运有你为伴每个挫折"},
                {time:"01:45",lyric:" 纵流过眼泪又如何"},
                {time:"01:55",lyric:"我想象 的未来 是有你"},
                {time:"01:59",lyric:"怎么都不换 曾有的经过"},
                {time:"02:01",lyric:"若我爱你的方式"},
                {time:"02:05",lyric:"已不同开始"},
                {time:"02:11",lyric:"不如我们变换下位置"},
                {time:"02:16",lyric:"看一看原来它的样子"},
                {time:"02:22",lyric:"我害怕那种坚持"},
                {time:"02:27",lyric:"无声的休止"},
                {time:"02:32",lyric:"浪漫被岁月滴水穿石"},
                {time:"02:37",lyric:"散落却从来都没发觉"},
                {time:"02:42",lyric:"沉默的你呀 我们能懂得"},
                {time:"02:47",lyric:"什么都不说"},
                {time:"02:53",lyric:" 如果这生命如同一段旅程"},
                {time:"02:59",lyric:" 总要走过后才完整"},
                {time:"03:02",lyric:"谁不曾 怀疑过 相信过 等待过 离开过"},
                {time:"03:08",lyric:"有过都值得"},
                {time:"03:14",lyric:"多幸运有你为伴每个挫折"},
                {time:"03:20",lyric:" 纵流过眼泪又如何"},
                {time:"03:24",lyric:"我想象 的未来 和永远 是有你 一起的"},
                {time:"03:29",lyric:" 怎么都不换"},
                {time:"3:35",lyric:"如果这生命如同一段旅程"},
                {time:"03:40",lyric:"总要走过后才完整"},
                {time:"03:45",lyric:"谁不曾 怀疑过 相信过 等待过 离开过"},
                {time:"03:50",lyric:"有过都值得"},
                {time:"03:55",lyric:"多幸运有你为伴每个挫折"},
                {time:"04:01",lyric:" 纵流过眼泪又如何"},
                {time:"04:05",lyric:"我想象 的未来 和永远 是有你 一起的"},
                {time:"04:11",lyric:" 怎么都不换 曾有的经过"}]},
        {name:'气球',src:'mp3/气球.mp3',songer:'许哲佩',img:'img/geshou5.png',duration:'04:17',lyrics:
            [{time:"0:02",lyric:"气球"},
                {time:"00:04",lyric:"许哲佩"},
                {time:"00:17",lyric:" 黑的白的红的黄的"},
                {time:"00:22",lyric:" 紫的绿的蓝的灰的"},
                {time:"00:26",lyric:" 你的我的他的她的"},
                {time:"00:29",lyric:"大的小的圆的扁的"},
                {time:"00:33",lyric:"好的坏的美的丑的"},
                {time:"00:37",lyric:" 新的旧的各种款式各种花色任你选择"},
                {time:"00:58",lyric:"黑的白的红的黄的"},
                {time:"01:02",lyric:"紫的绿的蓝的灰的"},
                {time:"01:08",lyric:"你的我的他的她的"},
                {time:"01:13",lyric:"大的小的圆的扁的"},
                {time:"01:18",lyric:"好的坏的美的丑的"},
                {time:"01:23",lyric:"新的旧的各种款式各种花色任我选择"},
                {time:"01:29",lyric:"飞的高高越远越好"},
                {time:"01:34",lyric:"剪断了线它就死掉"},
                {time:"01:40",lyric:" 寿命短短高兴就好"},
                {time:"01:45",lyric:" 喜欢就好没大不了"},
                {time:"01:55",lyric:"越变越小越来越小"},
                {time:"01:59",lyric:"快要死掉也很骄傲"},
                {time:"02:01",lyric:" 你不想说就别再说"},
                {time:"02:05",lyric:"我不想听不想再听"},
                {time:"02:11",lyric:"就把一切誓言当作汽球一般 随它而去"},
                {time:"02:16",lyric:"我不在意不会在意 放它而去随它而去"},
                {time:"02:22",lyric:"气球"},
                {time:"02:27",lyric:" 飘进云里"},
                {time:"02:32",lyric:" 飘进风里"},
                {time:"02:37",lyric:"结束生命"},
                {time:"02:42",lyric:" 气球"},
                {time:"02:47",lyric:"飘进爱里"},
                {time:"02:53",lyric:" 飘进心里"},
                {time:"02:59",lyric:" 慢慢死去"},
                {time:"03:02",lyric:"黑的白的红的黄的"},
                {time:"03:08",lyric:"紫的绿的蓝的灰的"},
                {time:"03:14",lyric:"你的我的他的她的"},
                {time:"03:20",lyric:" 大的小的圆的扁的"},
                {time:"03:24",lyric:"好的坏的美的丑的"},
                {time:"03:29",lyric:" 新的旧的各种款式各种花色任你选择"},
                {time:"3:35",lyric:"黑的白的红的黄的"},
                {time:"03:40",lyric:"紫的绿的蓝的灰的"},
                {time:"03:45",lyric:"你的我的他的她的"},
                {time:"03:50",lyric:"大的小的圆的扁的"},
                {time:"03:55",lyric:"好的坏的美的丑的"},
                {time:"04:01",lyric:" 新的旧的各种款式各种花色任我选择"},
                {time:"04:05",lyric:"飞的高高越远越好"},
                {time:"04:11",lyric:" 剪断了线它就死掉"},
                {time:"01:40",lyric:" 寿命短短高兴就好"},
                {time:"01:45",lyric:" 喜欢就好没大不了"},
                {time:"01:55",lyric:"越变越小越来越小"},
                {time:"01:59",lyric:"快要死掉也很骄傲"},
                {time:"02:01",lyric:" 你不想说就别再说"},
                {time:"02:05",lyric:"我不想听不想再听"},
                {time:"02:11",lyric:"就把一切誓言当作汽球一般 随它而去"},
                {time:"02:16",lyric:"我不在意不会在意 放它而去随它而去"},
                {time:"02:22",lyric:"气球"},
                {time:"02:27",lyric:" 飘进云里"},
                {time:"02:32",lyric:" 飘进风里"},
                {time:"02:37",lyric:"结束生命"},
                {time:"02:42",lyric:" 气球"},
                {time:"02:47",lyric:"飘进爱里"},
                {time:"02:53",lyric:" 飘进心里"},
                {time:"03:46",lyric:" 慢慢死去"}]},
        {name:'树读',src:'mp3/树读.mp3',songer:'王俊凯',img:'img/geshou6.png',duration:'03:56'},
        {name:'算你狠',src:'mp3/算你狠.mp3',songer:'陈小春',img:'img/geshou7.png',duration:'02:37',lyrics:
            [{time:"00:02",lyric:"算你狠"},
             {time:"00:04",lyric:"陈小春"},
            {time:"00:13",lyric:" 一杯二锅头 呛得眼泪流"},
            {time:"00:18",lyric:" 生旦净末丑 好汉不回头"},
            {time:"00:23",lyric:" 你若要走 我不会留"},
            {time:"00:28",lyric:" 强留的爱情不会撑得太久"},
            {time:"00:33",lyric:" 不耐寂寞 尺度游走"},
            {time:"00:38",lyric:" 别以为地下恋情密不透风"},
            {time:"00:44",lyric:" 我说算你狠 善用无辜的眼神"},
            {time:"00:49",lyric:" 谎话说了两次我就当真"},
            {time:"00:54",lyric:" 我说算我笨 软不隆咚的耳根"},
            {time:"00:59",lyric:" 只为一时的气氛 搞一肚子的气愤"},
            {time:"01:06",lyric:" 一看到你我就想到过去"},
            {time:"01:08",lyric:" 就立刻让我血冲到脑子里去"},
            {time:"01:10",lyric:" 我的心里只会永远的恨你"},
            {time:"01:16",lyric:" 你跟别人吃香又喝辣去"},
            {time:"01:18",lyric:" 丢我一个人在这里吹冷空气"},
            {time:"01:21",lyric:" 我会过得很好真的没关系"},
            {time:"01:26",lyric:" 心事那无讲出来 有谁人会知"},
            {time:"01:37",lyric:" 心爱你拿有了解 请你着忍耐"},
            {time:"01:47",lyric:" WHATS UP SPEAK UP OR JUST SHUT UP"},
            {time:"01:49",lyric:" 你到底哪一点在不爽心里不平衡"},
            {time:"01:52",lyric:" 作祟的是男人最要命的自尊"},
            {time:"01:55",lyric:" YOU KNOW"},
            {time:"01:56",lyric:" 还是那女人骄傲的高跟和红唇"},
            {time:"01:58",lyric:" 思春的虫子命运蠢蠢蠢"},
            {time:"02:00",lyric:" 打不开的心门那就只好闷闷闷"},
            {time:"02:02",lyric:" 你要学学这个屡败屡战的strong的人"},
            {time:"02:05",lyric:" 否则就注定要当一辈子的光棍"},
            {time:"02:08",lyric:" 算你狠 善用无辜的眼神"},
            {time:"02:12",lyric:" 谎话说了两次我就当真"},
            {time:"02:18",lyric:" 我说算我笨 软不隆咚的耳根"},
            {time:"02:23",lyric:" 只为一时的气氛"},
            {time:"02:25",lyric:" 搞一肚子一肚子一肚子的气愤"},
            {time:"02:34",lyric:" 我会过得很好真的没关系"},
            {time:"02:39",lyric:" 一看到你我就想到过去"},
            {time:"02:41",lyric:" 就立刻让我血冲到脑子里去"},
            {time:"02:44",lyric:" 我的心里只会永远的恨你"},
            {time:"03:11",lyric:" 算你狠"}
            ]},
        {name:'演员',src:'mp3/演员.mp3',songer:'薛之谦',img:'img/geshou8.png',duration:'04:21',lyrics:
            [{time:"00:02",lyric:"演员"},
            {time:"00:04",lyric:"演员 - 薛之谦"},
            {time:"00:06",lyric:"词：薛之谦"},
            {time:"00:08",lyric:"曲：薛之谦"},
            {time:"00:21",lyric:"简单点说话的方式简单点"},
            {time:"00:30",lyric:"递进的情绪请省略"},
            {time:"00:34",lyric:"你又不是个演员"},
            {time:"00:37",lyric:"别设计那些情节"},
            {time:"00:42",lyric:"没意见我只想看看你怎么圆"},
            {time:"00:52",lyric:"你难过的太表面 像没天赋的演员"},
            {time:"00:58",lyric:"观众一眼能看见"},
            {time:"01:02",lyric:"该配合你演出的我演视而不见"},
            {time:"01:08",lyric:"在逼一个最爱你的人即兴表演"},
            {time:"01:13",lyric:"什么时候我们开始收起了底线"},
            {time:"01:18",lyric:"顺应时代的改变看那些拙劣的表演"},
            {time:"01:23",lyric:"可你曾经那么爱我干嘛演出细节"},
            {time:"01:29",lyric:"我该变成什么样子才能延缓厌倦"},
            {time:"01:34",lyric:"原来当爱放下防备后的这些那些"},
            {time:"01:40",lyric:"才是考验"},
            {time:"01:45",lyric:"没意见你想怎样我都随便"},
            {time:"01:55",lyric:"你演技也有限"},
            {time:"01:59",lyric:"又不用说感言"},
            {time:"02:01",lyric:"分开就平淡些"},
            {time:"02:05",lyric:"该配合你演出的我演视而不见"},
            {time:"02:11",lyric:"别逼一个最爱你的人即兴表演"},
            {time:"02:16",lyric:"什么时候我们开始没有了底线"},
            {time:"02:22",lyric:"顺着别人的谎言被动就不显得可怜"},
            {time:"02:27",lyric:"可你曾经那么爱我干嘛演出细节"},
            {time:"02:32",lyric:"我该变成什么样子才能配合出演"},
            {time:"02:37",lyric:"原来当爱放下防备后的这些那些"},
            {time:"02:42",lyric:"都有个期限"},
            {time:"02:47",lyric:"其实台下的观众就我一个"},
            {time:"02:53",lyric:"其实我也看出你有点不舍"},
            {time:"02:59",lyric:"场景也习惯我们来回拉扯"},
            {time:"03:02",lyric:"还计较着什么"},
            {time:"03:08",lyric:"其实说分不开的也不见得"},
            {time:"03:14",lyric:"其实感情最怕的就是拖着"},
            {time:"03:20",lyric:"越演到重场戏越哭不出了"},
            {time:"03:24",lyric:"是否还值"},
            {time:"03:29",lyric:"该配合你演出的我尽力在表演"},
            {time:"03:35",lyric:"像情感节目里的嘉宾任人挑选"},
            {time:"03:40",lyric:"如果还能看出我有爱你的那面"},
            {time:"03:45",lyric:"请剪掉那些情节让我看上去体面"},
            {time:"03:50",lyric:"可你曾经那么爱我干嘛演出细节"},
            {time:"03:55",lyric:"不在意的样子是我最后的表演"},
            {time:"04:01",lyric:"是因为爱你我才选择表演 这种成全"}]},
        {name:'阴天',src:'mp3/阴天.mp3',songer:'莫文蔚',img:'img/geshou9.png',duration:'04:09',
            lyrics:[
            {time:"00:02",lyric:"阴天"},
            {time:"00:04",lyric:"莫文蔚"},
            {time:"00:06",lyric:"作品李"},
            {time:"00:08",lyric:"Amin"},
            {time:"00:12",lyric:"李宗盛"},
            {time:"00:19",lyric:"阴天在不开灯的房间"},
            {time:"00:23",lyric:"当所有思绪都一点一点沉淀"},
            {time:"00:26",lyric:"爱情究竟是精神鸦片"},
            {time:"00:29",lyric:"还是世纪末的无聊消遣"},
            {time:"00:34",lyric:"香烟氲成一摊光圈"},
            {time:"00:37",lyric:"和他的照片就摆在手边"},
            {time:"00:41",lyric:"傻傻两个人笑得多甜"},
            {time:"00:47",lyric:"开始总是分分钟都妙不可言"},
            {time:"00:51",lyric:"谁都认为热情它永不会减"},
            {time:"00:54",lyric:"除了激情褪去后的那一点点倦"},
            {time:"01:01",lyric:"也许像谁说过的贪得无厌"},
            {time:"01:05",lyric:"活该应了谁说过的不知检点"},
            {time:"01:09",lyric:"总之那几年感性赢了理性那一面"},
            {time:"01:31",lyric:"阴天在不开灯的房间"},
            {time:"01:34",lyric:"当所有思绪都一点一点沉淀"},
            {time:"01:38",lyric:"爱恨情欲里的疑点盲点"},
            {time:"01:41",lyric:"呼之欲出那么明显"},
            {time:"01:45",lyric:"女孩通通让到一边"},
            {time:"01:48",lyric:"这歌里的细微末节就算都体验"},
            {time:"01:52",lyric:"若想真明白真要好几年"},
            {time:"02:27",lyric:"回想那一天喧闹的喜宴"},
            {time:"02:35",lyric:"耳边想起的究竟是序曲或完结篇?"},
            {time:"02:42",lyric:"感情不就是你情我愿"},
            {time:"02:45",lyric:"最好爱狠扯平俩不相欠"},
            {time:"02:49",lyric:"感情说穿了一人挣脱的一人去捡"},
            {time:"02:55",lyric:"男人大可不必百口莫辨"},
            {time:"03:00",lyric:"女人实在无须楚楚可怜"},
            {time:"03:03",lyric:"总之那几年你们俩个没有缘"},
            {time:"03:13",lyric:"阴天在不开灯的房间"},
            {time:"03:16",lyric:"当所有思绪都一点一点沉淀"},
            {time:"03:20",lyric:"爱情究竟是精神鸦"},
            {time:"03:23",lyric:"还是世纪末的无聊消遣"},
            {time:"03:27",lyric:"香烟氲成一摊光圈"},
            {time:"03:31",lyric:"和他的照片就摆在手边"},
            {time:"03:34",lyric:"傻傻两个人笑得多甜"},
            {time:"03:41",lyric:"傻傻两个人笑得多甜"}]},
        {name:'最好的我们',src:'mp3/最好的我们.mp3',songer:'王栎鑫',img:'img/geshou10.png',duration:'03:34'},
    ];

    var index=0;
    //重绘
    function dawlist(){
        $('.play-list').empty();
        $.each(database,function(i,v){
            if(i===index){
                $('<li id-date='+i+'><div class="music"></div><span class="name">'+v.name+'</span><span class="songer">'+v.songer+'</span><span class="duration">'+v.duration+'</span><div class="button"><div class="love"></div><div class="download"></div><div class="del"></div></div></li>').addClass('active').appendTo('.play-list')
                $('.active .music').addClass('wave');
            }else{
                $('<li id-date='+i+'><div class="music"></div><span class="name">'+v.name+'</span><span class="songer">'+v.songer+'</span><span class="duration">'+v.duration+'</span><div class="button"><div class="love"></div><div class="download"></div><div class="del"></div></div></li>').appendTo('.play-list')

            }
        });

    }

    dawlist();

    //歌曲列表
    $('.play-list').on('click','li',function(){
        index=$(this).index();
        audio.src=database[index].src;
        $('.message').text(database[index].name);

        //换图片
        var img=database[index].img;
        $('.songers img').attr('src',img);
        //换歌手
        $('.geshou').text(database[index].songer);
        //换歌曲
        $('.geming').text(database[index].name);

        audio.play();
        clearInterval(dh)
    })


    //切换播放模式
    $('.xunhuan .xhgd').on('click',function(){
        $('.xunhuan ul').toggleClass('chuxian');
        $('.qhxunhuan').css('display','block')
    })

    $('.xunhuan ul li').on('click',function(){
        // console.log($(this).attr('class'))
        $('.xhgd').attr('class','xhgd');
        $('.xhgd').addClass($(this).attr('class'));
        $('.qhxunhuan').css('display','none')

    })



    // console.log(dqmodel)
    //下一首
    $('.nextsong').on('click',function(){
        if($('.xunhuan .xhgd').hasClass('danqu')){
            // alert('单曲')
        }else if($('.xunhuan .xhgd').hasClass('liebiao')){
            // alert('列表')
            index++;
        }else if($('.xunhuan .xhgd').hasClass('suiji')){
            // alert('随机')
            index=Math.floor(Math.random()*database.length);
        }
        // index++;
        if(index===database.length){
            index=0;
        }
        audio.src=database[index].src;
        $('.message').text(database[index].name);

        var img=database[index].img;
        $('.songers img').attr('src',img);


        $('.geshou').text(database[index].songer);
        $('.geming').text(database[index].name);
        audio.play();
        clearInterval(dh)


    })
    //上一首
    $('.lastsong').on('click',function(){
        index--;
        if(index===-1){
            index=database.length-1;
        }
        audio.src=database[index].src;
        $('.message').text(database[index].name);

        var img=database[index].img;
        $('.songers img').attr('src',img);


        $('.geshou').text(database[index].songer);
        $('.geming').text(database[index].name);
        audio.play();
        clearInterval(dh)
    })

    //开始 暂停
    var audio=$('audio').get(0);
    var flag=true;
    $('.start-pause').on('click',function(){
       if(flag){
           audio.play();
           flag=false;
       }else{
           audio.pause();
           flag=true;
       }

    })

    //audio.volume 音量 audio.src 地址 audio.currentTime 当前已播放时长
    //拖动改变音量（静音） 当前播放



    //只写样式（事件驱动的编程模式：样式和逻辑分开写）
    audio.onplay=function(){
        $('.start-pause').addClass('zanting');
        $('.song').addClass('imgdong');
        dh=setInterval(dong,150);
        dawlist();
    }
    audio.onpause=function(){
        $('.start-pause').removeClass('zanting');
        $('.song').removeClass('imgdong');
        clearInterval(dh)
    }
    //时间又分转化为秒
    function format(second){
        var m=parseInt(second/60);
        var s=parseInt(second%60);
        s=(s < 10)?( '0' + s):s;
        m=(m<10)?('0'+m):m;
        var time=m + ":" + s;
        return time;
    }

    //歌曲在播放过程中一直调用函数
    audio.ontimeupdate=function(){
        $('.nowsonglength').text(format(audio.currentTime)+'/');
        $('.allsonglength').text(format(audio.duration));
        $('.circles').css({left : $('.jindu').width()*(audio.currentTime/audio.duration)});
        $(database[index].lyrics).each(function(i,v){
            if(format(audio.currentTime) == v.time){
                // console.log(i)
                var a=i;
                $(".lyric").empty()
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3
                }
                for(var j=i;j<database[index].lyrics.length;j++){
                    $("<p class="+ j +">"+database[index].lyrics[j].lyric+"</p>").appendTo(".hid-play .lyric")
                }
                $("."+a).addClass("active")
            }
        })


    }
    $('.jindu').on('click',function(e){
        // alert(audio.duration*(e.offsetX - $(this).find('.circles').width()/2)/$(this).width())
        audio.currentTime=audio.duration*(e.offsetX - $(this).find('.circles').width()/2)/$(this).width();

        // console.log(audio.currentTime)
    })




    $('.jindu .circles').on('click',false);


    //拖动进度条
    $('.jindu .circles').on('mousedown',function(){
        $(document).on('mousemove',function(e){
            var gjd=(e.pageX-$('.jindu').offset().left)/$('.jindu').width()*audio.duration;
            gjd=gjd>=audio.duration?audio.duration:gjd;
            gjd=gjd<=0?0:gjd;
            audio.currentTime=gjd;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })

    })

    //音量
    $('.voicejindu').on('click',function(e){

        audio.volume=(e.offsetX - $(this).find('.circlev').width()/2)/$(this).width();
    })
    $('.voicejindu .circlev').on('click',false);

    //静音
    $('.voice').on('click',function(){
        if( $(this).attr('pre-v') ){
            audio.volume=$(this).attr('pre-v');
            $(this).removeAttr('pre-v');
        }else{
            $(this).attr('pre-v',audio.volume)
            audio.volume=0;
        }
    });


    //音量改变调用这个函数
    audio.onvolumechange=function(){
        if(audio.volume===0){
            $('.voice').addClass('jingyinv')
        }else{
            $('.voice').removeClass('jingyinv')

        }
        $('.circlev').css({left : $('.voicejindu').width()*audio.volume});
    }

    //音量拖动
    $('.voicejindu .circlev').on('mousedown',function(e){
        $(document).on('mousemove',function(e){
            var v=(e.pageX-$('.voicejindu').offset().left)/$('.voicejindu').width();
            v=(v>1)?1:v;
            v=(v<0)?0:v;
            audio.volume=v
        })
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
        })
    })


    //一首歌曲播放结束之后，调用
    audio.onended=function(){
        // audio.play();
        $('.nextsong').trigger('click');
    }

    $('.play-list').on('mouseenter','li',function(){
        $(this).find('.button').css({visibility:'visible'})
    })
    $('.play-list').on('mouseleave','li',function(){
        $(this).find('.button').css({visibility:'hidden'})
    })


    //删除

    $('.play-list').on('click','.del',function(){
        // alert('您确认删除？');
        if (!confirm("确认要删除？")) {
            close();
        }else{
            var shan=$(this).parent().parent().attr('id-date');
            // console.log(shan)
            database.splice(shan,1);
            $('.nextsong').trigger('click')
        }
    })

    var gcflag=true;
    $('.songers').on('click',function(){
        if(gcflag){
            $('.play-list').addClass('ani fade-out-right')
            $('.hid-play .lyric-box').css('display','block')
            gcflag=false;
        }else{
            $('.play-list').removeClass('ani fade-out-right')
            $('.hid-play .lyric-box').css('display','none')
            gcflag=true;
        }


    })
    




    //动画
    var dh;
    function dong(){
        $('.donghua li').height(function(){
            return Math.random()*60;
        })
    }


    

    //清除浏览器默认操作
    $('.message').on('mousedown',false);
    $('.play-list').on('mousedown',false);
    $('.songlength').on('mousedown',false);
    $('.geshou').on('mousedown',false);
    $('.geming').on('mousedown',false);
    // $(document).on('mousedown',false);


    //歌词
    $('.song').on('click',function(){
        // "<div class=title>"+database[index].name+"</div><div class=people>"+database[index].songer+
        $(".hid-play").append("</div><div class=lyric-box><div class=lyric></div></div>")
        $(database[index].lyrics).each(function(i,v){
            $("<p class="+ i +">"+v.lyric+"</p>").appendTo(".hid-play .lyric")
        })
    })

})