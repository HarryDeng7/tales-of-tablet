(function () {
  "use strict";

  const ui = {
    en: {
      metaTitle: "Story Rocket — Build a rocket, read its story",
      metaDescription: "Story Rocket is a bright, interactive storybook shelf for children. Build a rocket, name it, and send it flying through Johnny’s Mars adventure.",
      brandHomeAria: "Story Rocket home",
      headerTip: "Build your rocket, then tap the glowing dots inside every story",
      heroEyebrow: "A storybook shelf for young makers",
      heroLine1: "Build a rocket.",
      heroLine2: "Read its story.",
      heroLede: "Name it, paint it, and pack a snack. Your rocket will fly through Johnny’s Mars adventure.",
      browseShelf: "Browse the shelf",
      buildRocket: "Build your rocket",
      editRocket: "Edit your rocket",
      ribbonBuild: "Build it",
      ribbonMine: "Your rocket",
      workshopKicker: "Rocket workshop",
      workshopTitle: "Make it yours",
      workshopIntro: "Name it, paint it, add a sticker, and pack one thing. Your rocket will appear inside Johnny’s story.",
      nameLabel: "Name your rocket",
      nameHint: "Up to 18 characters.",
      namePlaceholder: "Star Hopper",
      defaultRocketName: "Star Hopper",
      paintLabel: "Paint it",
      bodyColor: "Body",
      noseColor: "Nose cone",
      finColor: "Fins",
      stickerLabel: "Add a sticker",
      stickerNone: "Plain",
      stickerStar: "Star",
      stickerStripes: "Stripes",
      stickerPlanet: "Planet",
      stickerBolt: "Lightning",
      cargoLabel: "Pack one thing",
      cargoSandwich: "Sandwich",
      cargoTeddy: "Teddy",
      cargoCamera: "Camera",
      cargoPlant: "Plant",
      previewLabel: "Your blueprint",
      previewCargo: "Packed: {cargo}",
      buildAndRead: "Build & read",
      saveRocket: "Save my rocket",
      buildingRocket: "Building...",
      closeWorkshopAria: "Close rocket workshop",
      yourRocketNote: "Your rocket: {name} · Cargo: {cargo}",
      editShort: "Edit",
      colorCoral: "Coral",
      colorTangerine: "Tangerine",
      colorMint: "Mint",
      colorSky: "Sky blue",
      colorBubblegum: "Bubblegum",
      colorGrape: "Grape",
      colorSunshine: "Sunshine",
      colorLeaf: "Leaf",
      colorCream: "Cream",
      colorCloud: "Cloud white",
      surprise: "Pick one for me",
      shelfTitle: "Today's shelf",
      shelfNote: "Three picture books. Choose a cover to start.",
      swipeHint: "Swipe the shelf to see all three books.",
      howEyebrow: "How it works",
      howTitle: "Three little steps",
      step1Title: "Build your rocket",
      step1Text: "Name it, choose its colors, and pack one thing for the trip.",
      step2Title: "Read your story",
      step2Text: "Your rocket flies into Johnny’s Mars adventure. Then meet two more tales on the shelf.",
      step3Title: "Tap the sparkly spots",
      step3Text: "Every picture hides a tiny page. Tap the glowing dots to find out what is inside.",
      footerBrand: "Story Rocket",
      footerByline: "— made for reading together.",
      footerNote: "No ads. No accounts. Just stories.",
      readerBrand: "STORY ROCKET",
      readerBack: "Shelf",
      backAria: "Back to the bookshelf",
      readToMe: "Read to me",
      stopReading: "Stop reading",
      readAria: "Read this page aloud",
      stopReadAria: "Stop reading this page",
      soundOffAria: "Turn sound off",
      soundOnAria: "Turn sound on",
      languageLabel: "Language",
      readerAria: "Story reader",
      pageDotsLabel: "Choose a page",
      pageHint: "Tap the glowing dots",
      pageAllFound: "All tiny pages found here",
      pageNote: "Glowing dots hide tiny pages.",
      endStamp: "The End",
      prevLabel: "Back",
      prevAria: "Go to the previous page",
      nextPage: "Next page",
      finishStory: "Finish story",
      nextAria: "Go to the next page",
      finishAria: "Finish the story and return to the shelf",
      tinyKicker: "A tiny page about {label}",
      tinyBack: "Back to the story",
      closeTinyAria: "Close tiny page",
      openBookAria: "Open {title}",
      openBuilderAria: "Build your rocket for {title}",
      pagesCount: "{count} pages",
      tinyPagesCount: "{count} tiny pages",
      openLabel: "Open",
      foundBadgeTitle: "{count} of {total} tiny pages found",
      foundCount: "{count} of {total} tiny pages found",
      foundAll: "All {total} tiny pages found",
      pageDotAria: "Go to page {number}: {title}",
      openTinyAria: "Open tiny page: {label}",
      pageAnnounce: "Page {number} of {total}. {title}.",
      openedAnnounce: "Opened {title}. Page 1 of {total}.",
      backAnnounce: "Back to the bookshelf.",
      soundOnAnnounce: "Sound on.",
      soundOffAnnounce: "Sound off.",
      languageChanged: "Language changed to English.",
      finishAllToast: "The End! You found all {total} tiny pages in {title}.",
      finishSomeToast: "The End! You found {count} of {total} tiny pages in {title}.",
      closeMessageAria: "Close message",
      emptyShelf: "The shelf is being restocked. Please check back soon."
    },
    zh: {
      metaTitle: "故事火箭 — 造一枚火箭，读它的故事",
      metaDescription: "故事火箭是一座明亮、有趣的儿童互动书架。设计一枚火箭，给它取名字，让它飞进约翰尼的火星冒险。",
      brandHomeAria: "故事火箭首页",
      headerTip: "先造一枚火箭，再点故事里的发光圆点",
      heroEyebrow: "给小小创作者的故事书架",
      heroLine1: "造一枚火箭。",
      heroLine2: "读它的故事。",
      heroLede: "给它取名字、涂颜色、装上行李，然后让它飞进约翰尼的火星冒险。",
      browseShelf: "看看书架",
      buildRocket: "造我的火箭",
      editRocket: "修改我的火箭",
      ribbonBuild: "造火箭",
      ribbonMine: "我的火箭",
      workshopKicker: "火箭工作室",
      workshopTitle: "把它变成你的",
      workshopIntro: "给它取名字、涂颜色、贴贴纸，再装一样行李。你的火箭会出现在约翰尼的故事里。",
      nameLabel: "给火箭取名字",
      nameHint: "最多 18 个字符。",
      namePlaceholder: "星星号",
      defaultRocketName: "星星号",
      paintLabel: "涂一涂",
      bodyColor: "箭体",
      noseColor: "鼻锥",
      finColor: "尾翼",
      stickerLabel: "贴个贴纸",
      stickerNone: "不贴",
      stickerStar: "星星",
      stickerStripes: "条纹",
      stickerPlanet: "星球",
      stickerBolt: "闪电",
      cargoLabel: "装一样行李",
      cargoSandwich: "三明治",
      cargoTeddy: "泰迪熊",
      cargoCamera: "相机",
      cargoPlant: "小植物",
      previewLabel: "你的蓝图",
      previewCargo: "已装好：{cargo}",
      buildAndRead: "造好并读故事",
      saveRocket: "保存我的火箭",
      buildingRocket: "组装中……",
      closeWorkshopAria: "关闭火箭工作室",
      yourRocketNote: "你的火箭“{name}” · 行李：{cargo}",
      editShort: "修改",
      colorCoral: "珊瑚橙",
      colorTangerine: "橘子橙",
      colorMint: "薄荷绿",
      colorSky: "天空蓝",
      colorBubblegum: "泡泡粉",
      colorGrape: "葡萄紫",
      colorSunshine: "阳光黄",
      colorLeaf: "叶子绿",
      colorCream: "奶油白",
      colorCloud: "云朵白",
      surprise: "帮我选一本",
      shelfTitle: "今天的书架",
      shelfNote: "三本绘本，点开封面就能读。",
      swipeHint: "左右滑动书架，看看全部三本书。",
      howEyebrow: "怎么玩",
      howTitle: "三个小步骤",
      step1Title: "造一枚自己的火箭",
      step1Text: "给它取名字、选颜色，再装一样旅行行李。",
      step2Title: "读你的故事",
      step2Text: "你的火箭会飞进约翰尼的火星冒险。书架上还有另外两个故事等着你。",
      step3Title: "点一点闪光的地方",
      step3Text: "每幅画里都藏着一个小页面。点开发光圆点，看看里面有什么。",
      footerBrand: "故事火箭",
      footerByline: "— 为一起阅读而做。",
      footerNote: "没有广告，不用账号，只有故事。",
      readerBrand: "故事火箭",
      readerBack: "书架",
      backAria: "返回书架",
      readToMe: "读给我听",
      stopReading: "停止朗读",
      readAria: "朗读这一页",
      stopReadAria: "停止朗读这一页",
      soundOffAria: "关闭声音",
      soundOnAria: "打开声音",
      languageLabel: "语言",
      readerAria: "故事阅读器",
      pageDotsLabel: "选择页面",
      pageHint: "点一点发光圆点",
      pageAllFound: "这一页的小页面都找到了",
      pageNote: "发光圆点里藏着小页面。",
      endStamp: "完",
      prevLabel: "上一页",
      prevAria: "前往上一页",
      nextPage: "下一页",
      finishStory: "读完故事",
      nextAria: "前往下一页",
      finishAria: "读完故事并返回书架",
      tinyKicker: "小页面：{label}",
      tinyBack: "回到故事",
      closeTinyAria: "关闭小页面",
      openBookAria: "打开《{title}》",
      openBuilderAria: "为《{title}》造火箭",
      pagesCount: "{count} 页",
      tinyPagesCount: "{count} 个小页面",
      openLabel: "打开",
      foundBadgeTitle: "已找到 {count}/{total} 个小页面",
      foundCount: "已发现 {count}/{total} 个小页面",
      foundAll: "已找到全部 {total} 个小页面",
      pageDotAria: "前往第 {number} 页：{title}",
      openTinyAria: "打开小页面：{label}",
      pageAnnounce: "第 {number} 页，共 {total} 页。{title}。",
      openedAnnounce: "已打开《{title}》。第 1 页，共 {total} 页。",
      backAnnounce: "已返回书架。",
      soundOnAnnounce: "声音已打开。",
      soundOffAnnounce: "声音已关闭。",
      languageChanged: "已切换为中文。",
      finishAllToast: "故事结束！你找到了《{title}》里全部 {total} 个小页面。",
      finishSomeToast: "故事结束！你在《{title}》里找到了 {count}/{total} 个小页面。",
      closeMessageAria: "关闭提示",
      emptyShelf: "书架正在补货，请稍后再来看看。"
    }
  };

  const booksZh = {
    johnny: {
      title: "约翰尼的火星火箭",
      tag: "太空冒险",
      author: "Story Rocket 原创故事",
      blurb: "一个纸箱火箭，一个勇敢的孩子，还有一颗红红的星球。",
      ribbon: "新书",
      pages: [
        {
          kicker: "第一章",
          title: "红色的小点",
          text: "每天晚上，约翰尼都会在院子里数星星。可有一个亮点和别的星星不一样。它发出铁锈一样的光。“那是火星，”他小声说，“总有一天，我要去那里。”",
          hotspots: [
            {
              label: "火星",
              title: "认识火星",
              text: "火星被称为红色星球，因为它的尘土里含有大量铁锈。它的大小大约只有地球的一半。"
            },
            {
              label: "望远镜",
              title: "晃晃悠悠的望远镜",
              text: "约翰尼的望远镜是用纸筒和两颗玻璃弹珠做的。它看月亮时，月亮会变成一颗晃晃悠悠的蛋。"
            },
            {
              label: "彗星",
              title: "副驾驶彗星",
              text: "彗星不知道火星是什么。不过，只要约翰尼去，彗星就一定会跟着去。狗可是很棒的副驾驶。"
            }
          ]
        },
        {
          kicker: "第二章",
          title: "纸箱火箭",
          text: "约翰尼把车库里的纸箱全拖了出来。水桶变成了火箭头，纸板尾翼用四十七条胶带粘了上去。接着，他把整枚火箭涂成了自己喜欢的样子。“还差一样东西，”他说，“想象力。”",
          hotspots: [
            {
              label: "计划",
              title: "大计划",
              text: "第一步：找纸箱。第二步：贴胶带。第三步：带上零食。计划上用大字写着一条规则：玩得开心。"
            },
            {
              label: "胶带",
              title: "四十七条胶带",
              text: "爷爷说，胶带能修好任何东西。约翰尼拿翅膀、窗户和左脚的鞋子做了实验。"
            },
            {
              label: "颜料",
              title: "自己的颜色",
              text: "颜料罐上写着“谷仓红”。约翰尼划掉“谷仓”，写上“火箭”，然后挑了最喜欢的颜色。"
            }
          ]
        },
        {
          kicker: "第三章",
          title: "三……二……一……",
          text: "玛雅做了一块倒计时牌。彗星躲到了柠檬水后面。约翰尼装好了一个最重要的三明治。“三……二……一……”纸板开始发抖。整个花园都屏住了呼吸。然后——嗖！",
          hotspots: [
            {
              label: "倒计时",
              title: "准备，开始……",
              text: "大声试试看：三……二……一……发射！有了倒计时，每一次冒险都更正式了。"
            },
            {
              label: "柠檬水",
              title: "任务燃料",
              text: "柠檬水不是真正的火箭燃料，不过它非常适合倒计时派对，也很容易把小手弄得黏糊糊。"
            },
            {
              label: "三明治",
              title: "最重要的货物",
              text: "花生酱、香蕉，再加一颗巧克力豆。只在紧急时候吃，或者现在就吃。"
            }
          ]
        },
        {
          kicker: "第四章",
          title: "向上，向上，飞走了",
          text: "篱笆变小了。小镇变得更小了。整个地球变成了一颗蓝色的小弹珠。约翰尼笑得太厉害，头盔都起雾了。太空可比他的后院大太多了。",
          hotspots: [
            {
              label: "地球",
              title: "甜蜜的家",
              text: "从太空看，地球大部分是蓝色的，因为海洋占了很大面积。那些白色的旋涡是云和风暴。"
            },
            {
              label: "嗖",
              title: "嗖的力量",
              text: "约翰尼的火箭靠想象力、胶水，还有一声超级响亮的“嗖”飞行。最重要的就是那一声“嗖”。"
            },
            {
              label: "袜子",
              title: "逃跑的袜子",
              text: "起飞时，一只袜子逃跑了。它现在还在某个地方飘着，是太阳系里飞得最快的袜子。"
            }
          ]
        },
        {
          kicker: "第五章",
          title: "失重零食时间",
          text: "在太空里，什么都待不住。彗星飘了起来，三明治飘了起来，连约翰尼的嗝也飘了起来。窗外，火星越来越近——一颗巨大的红球，藏着一个秘密。",
          hotspots: [
            {
              label: "火星",
              title: "快到了",
              text: "真正去火星大约要七个月。约翰尼在一个睡前故事的时间里就到了，快多了。"
            },
            {
              label: "三明治",
              title: "抓得到吗",
              text: "宇航员吃密封包装的食物，这样碎屑就不会飘进按钮里。约翰尼的三明治没有密封。哎呀。"
            },
            {
              label: "按钮",
              title: "大橙色按钮",
              text: "上面写着“请勿按压”。约翰尼按了两次。它发出了一声非常好听的“哔”。"
            }
          ]
        },
        {
          kicker: "第六章",
          title: "红色岩石上的问候",
          text: "约翰尼的靴子踩在红色尘土上，发出咔嚓咔嚓的声音。天空是桃粉色的。这时，有什么东西从岩石后面滚了出来。哔，哔，啵！一辆只有一根摇晃天线的小火星车过来打招呼。",
          hotspots: [
            {
              label: "皮普",
              title: "火星车皮普",
              text: "皮普有六个轮子、一根天线，还有一颗很爱“哔哔”叫的心。它在火星上说的第一句话是：“哔哔啵。”意思是：你好。"
            },
            {
              label: "火山",
              title: "最高的火山",
              text: "火星上有一座奥林帕斯山，是太阳系里最高的火山。它差不多有珠穆朗玛峰的三倍高。"
            },
            {
              label: "地球",
              title: "小小的蓝点",
              text: "从火星看，地球会像一颗明亮的蓝色星星。约翰尼认识的每一个人，都在那一个小点里。"
            }
          ]
        },
        {
          kicker: "第七章",
          title: "火星上的花园",
          text: "约翰尼把一颗种子种进了一个小红盆里。“每一次冒险，都应该留下一点会生长的东西。”他说。火星车哔哔叫着，搬来了一个小洒水壶。火星从没见过这么绿的东西。",
          hotspots: [
            {
              label: "幼苗",
              title: "小却了不起",
              text: "植物需要阳光、水和空气。在火星上，科学家会在叫作“穹顶”的特殊温室里种食物。"
            },
            {
              label: "旗帜",
              title: "第一面旗帜",
              text: "约翰尼的旗子上画着火箭、星星，还有一个三明治。每一面旗都应该展示最重要的东西。"
            },
            {
              label: "皮普",
              title: "皮普的新工作",
              text: "皮普负责浇水。皮普非常非常认真地对待这份工作，可能有点太认真了。"
            }
          ]
        },
        {
          kicker: "第八章",
          title: "回家喝热可可",
          text: "火箭在睡觉前刚好回到家。约翰尼把他的火星画挂在了冰箱上。“明天还是这个时间？”他小声问。屋顶上方，一个红色小点闪了一下。那表示：好。",
          hotspots: [
            {
              label: "画",
              title: "证据",
              text: "画上有一枚晃晃悠悠的火箭、一片红色沙漠，还有一位六轮朋友。爷爷用一块香蕉形状的磁铁把它挂在了冰箱上。"
            },
            {
              label: "望远镜",
              title: "望向下一站",
              text: "约翰尼下一趟要去哪儿？先去月球，再去木星，也许还可以去零食柜。太空可以等吃完早饭再去。"
            },
            {
              label: "火星",
              title: "明天见",
              text: "火星离我们有好几百万公里。可是有好故事和勇敢的想象力，它只差一次翻页的距离。"
            }
          ]
        }
      ]
    },
    luna: {
      title: "露娜与迷路的星星",
      tag: "睡前故事",
      author: "Story Rocket 原创故事",
      blurb: "一颗困倦的星星，需要有人帮它找到回家的路。",
      ribbon: "",
      pages: [
        {
          kicker: "第一页",
          title: "花园里的星星",
          text: "露娜正在找月亮，忽然，一个金色的小东西从天上滚了下来。它“叮”的一声落进了花坛。那是一颗星星——它正在哭出闪闪发光的眼泪。",
          hotspots: [
            {
              label: "星星",
              title: "微弱的光",
              text: "小星星失去了光泽。它眨了两下眼睛，然后打了个喷嚏，喷出一个迷你小星系。"
            },
            {
              label: "望远镜",
              title: "观星的人",
              text: "露娜的望远镜几乎和她一样高。它很擅长找月亮，却很不擅长找丢失的袜子。"
            },
            {
              label: "麻糬",
              title: "猫咪麻糬",
              text: "麻糬对星星没什么兴趣。麻糬只对温暖的毯子和鱼肉三明治感兴趣。"
            }
          ]
        },
        {
          kicker: "第二页",
          title: "累得不会眨眼了",
          text: "露娜把星星抱进屋里，用自己最柔软的围巾把它裹起来。她泡了加三颗棉花糖的热可可。星星喝了一小口，光亮了一点。",
          hotspots: [
            {
              label: "热可可",
              title: "好大的杯子",
              text: "星星只喝了三小口。棉花糖不是火箭燃料，但确实能让人更勇敢一点。"
            },
            {
              label: "星星",
              title: "快好了",
              text: "星星太累了，飞不回家。它需要一个好主意，还需要一个朋友的帮忙。"
            },
            {
              label: "窗户",
              title: "月亮在守夜",
              text: "月亮整晚都从窗户里探着头。它什么也没说，但一直陪在旁边。"
            }
          ]
        },
        {
          kicker: "第三页",
          title: "带着星星的风筝",
          text: "露娜找来纸、细绳和两根弯吸管。她做了一只风筝，还留了一个星星大小的口袋。“我们要把你送回家。”她说。麻糬躲到了桌子底下。",
          hotspots: [
            {
              label: "风筝",
              title: "纸火箭？不，是风筝！",
              text: "风筝能飞，是因为流动的空气会推着它。露娜的风筝需要一个风很大的夜晚。"
            },
            {
              label: "绳子",
              title: "好长好长的绳子",
              text: "露娜把绳子绑在勺子上、椅子上，最后打了一个结。那个结哪儿也不会去。"
            },
            {
              label: "星星",
              title: "准备起飞",
              text: "星星爬进风筝口袋，紧紧抓住。它的光把纸照得像一盏小灯笼。"
            }
          ]
        },
        {
          kicker: "第四页",
          title: "爬上风大的小山",
          text: "露娜爬上屋后的小山。风使劲拉，风筝摇摇晃晃，星星开始一闪一闪。“再高一点！”它唱道，“就再高一点点！”",
          hotspots: [
            {
              label: "风筝",
              title: "飞吧，小风筝",
              text: "风筝在天空中跳舞，尾巴画出一条弯弯曲曲的线，一直连到星星那里。"
            },
            {
              label: "风",
              title: "一阵大风",
              text: "风把风筝往上推，推得越来越高。露娜用两只手和一根非常用力的脚趾紧紧抓住。"
            },
            {
              label: "月亮",
              title: "月亮的建议",
              text: "月亮在上面看着。它的建议很简单：抓稳，让风来做难的部分。"
            }
          ]
        },
        {
          kicker: "第五页",
          title: "最明亮的问候",
          text: "星星从风筝口袋里跳出来，稳稳地落进夜空。它变成了露娜窗前最亮的一点光。每天晚上，它都会朝她眨眨眼。露娜也总会眨回去。",
          hotspots: [
            {
              label: "星座",
              title: "新的星座",
              text: "这颗星星和其他四颗星星连成了一个弯弯的形状。露娜给它取名“歪歪猫座”。麻糬说，可以接受。"
            },
            {
              label: "星星",
              title: "一闪一闪",
              text: "星星的光要经过很多年才能到达我们这里。露娜的新朋友，正在送来一声来自过去的问候。"
            },
            {
              label: "麻糬",
              title: "麻糬的看法",
              text: "麻糬在窗台上看着星星。麻糬没有眨眼。它只是很慢很慢地眯了一下眼睛，那是猫咪的眨眼。"
            }
          ]
        }
      ]
    },
    dragon: {
      title: "袜子龙的野餐",
      tag: "幽默故事",
      author: "Story Rocket 原创故事",
      blurb: "一场摇摇晃晃的野餐，两个小伙伴，还有一只很有弹性的袜子。",
      ribbon: "",
      pages: [
        {
          kicker: "第一页",
          title: "摇摇晃晃的野餐",
          text: "袜子龙铺好毯子，摆出篮子，还放上一个大蛋糕。他一屁股坐下来，扑通一声。三明治弹了起来，柠檬水晃来晃去，蛋糕正好落在他的鼻子上。",
          hotspots: [
            {
              label: "袜子龙",
              title: "袜子龙",
              text: "他是用十二只不成对的袜子、一颗纽扣和一颗很大的心做成的。没有两只袜子是一样的，这正是他最喜欢的地方。"
            },
            {
              label: "篮子",
              title: "野餐篮",
              text: "里面有：三明治、柠檬水、一个蛋糕，还有一块紧急饼干。紧急饼干只在紧急的时候吃。"
            },
            {
              label: "大黄蜂",
              title: "大黄蜂邦布尔",
              text: "邦布尔是来吃果酱的，结果留下来吃蛋糕屑。邦布尔很擅长参加野餐。"
            }
          ]
        },
        {
          kicker: "第二页",
          title: "一阵大风的惊喜",
          text: "一阵大风抓住了毯子。三明治飞了出去，餐巾纸到处飘。袜子龙坐在一个角上，用尾巴压住另一个角。“野餐紧急情况！”他说。",
          hotspots: [
            {
              label: "风车",
              title: "野餐微风",
              text: "风车转得太快，看起来像一道彩虹。可毯子并不同意这个计划。"
            },
            {
              label: "三明治",
              title: "天上的三明治",
              text: "三明治翻了两个跟头，正好落进篮子里。它是一块非常勇敢的三明治。最后还是被吃掉了。"
            },
            {
              label: "毯子",
              title: "抓住它！",
              text: "尾巴很有用：可以保持平衡、可以拥抱，还可以在一阵大风里压住毯子。"
            }
          ]
        },
        {
          kicker: "第三页",
          title: "朋友们来了",
          text: "小鼠带着一罐果酱来了。小鸭带着三把勺子和一声很响的“嘎”来了。袜子龙把柠檬水倒进小杯子里。不知怎么的，也倒了一些在自己胳膊肘上。",
          hotspots: [
            {
              label: "米莉",
              title: "小鼠米莉",
              text: "米莉带来了草莓果酱。她还带了一张小餐巾。米莉总是准备得很充分。"
            },
            {
              label: "柠檬水",
              title: "柠檬水时间",
              text: "柠檬水太甜、太冰，还冒着好多气泡。换句话说，完美。"
            },
            {
              label: "达布",
              title: "小鸭达布",
              text: "达布带来了三把勺子，却没带餐巾。达布有自己更重要的安排。"
            }
          ]
        },
        {
          kicker: "第四页",
          title: "袜子大小的雨伞",
          text: "滴答，滴答，滴答。下雨了。朋友们挤到一张餐巾纸下面。袜子龙伸开一只长长的袜子翅膀，罩在他们上方。它变成了一把很舒服的屋顶。",
          hotspots: [
            {
              label: "雨",
              title: "滴答，滴答",
              text: "雨点落在毯子上。蛋糕保持干燥，因为蛋糕在龙的下方。"
            },
            {
              label: "翅膀",
              title: "一只会伸展的翅膀",
              text: "这只翅膀是用一只长长的条纹袜子做的。它能撑得下小鼠、小鸭，还有一个很重要的蛋糕。"
            },
            {
              label: "饼干",
              title: "紧急饼干",
              text: "紧急饼干一直留到真正的紧急时刻。下雨算一个，肚子饿也算。"
            }
          ]
        },
        {
          kicker: "第五页",
          title: "一块饼干，三个朋友",
          text: "雨停了，一道彩虹弯弯地横在草地上。只剩一块饼干了。袜子龙把它分成三块，大小几乎一样。一块给小鼠，一块给小鸭，一块给龙自己。",
          hotspots: [
            {
              label: "彩虹",
              title: "一整道彩虹",
              text: "阳光穿过雨滴，就会出现彩虹。朋友们觉得，这一道彩虹是专门为他们出现的。"
            },
            {
              label: "茶壶",
              title: "茶壶帽子",
              text: "野餐结束后，袜子龙把茶壶戴到了头上。“留着下次用。”他说。大家都觉得这是一顶好帽子。"
            },
            {
              label: "饼干",
              title: "一块饼干，三个朋友",
              text: "三块饼干并不完全一样大。可没人介意。果酱和友谊能弥补很多事。"
            }
          ]
        }
      ]
    }
  };

  window.STORY_I18N = { ui: ui, booksZh: booksZh };
})();
