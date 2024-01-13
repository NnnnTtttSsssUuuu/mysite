`use strict`;

//12/28 sbstr、sliceをsubstringで統一
//1/2 jQueryを使わないコードに変更完了
// 1/13 iPhoneへの対応を完了


{
  // 異体字（単一コード）チェックリスト 異体字・標準字の順で並ぶ
  const checkString = '勉勉塚塚鴬鶯諌諫潅灌﨔欅頚頸妍姸壷壺昿曠攅攢懴懺渗滲侭儘賎賤筝箏薮藪鯵鰺騨驒鈬鐸畴疇涛濤梼檮涜瀆迩邇蝿蠅埓埒蛎蠣檪櫟臈﨟并幷桝枡沪濾弯彎嘘噓躯軀嚢囊溌潑醗醱屡屢屏屛靭靱頴穎撹攪唖啞麹麴鹸鹼噛嚙掻搔荆荊鼡鼠桧檜軣轟莱萊芦蘆焔焰掴摑侠俠繋繫蝉蟬箪簞顛顚祷禱蝋蠟呑吞倶俱閠閏蒋蔣鴎鷗繍繡醤醬兔兎祢禰圓円學学氣気絲糸靑青蟲虫壓圧圍囲營営衞衛益益應応櫻桜假仮價価舊旧經経險険檢検效効鑛鉱吿告殺殺雜雑贊賛飼飼舍舎證証條条狀状精精稅税絕絶祖祖總総增増屬属團団斷断獨独佛仏辨弁瓣弁辯弁豐豊餘余歷歴惡悪醫医飮飲驛駅橫横溫温漢漢館館區区輕軽硏研縣県號号齒歯實実寫写者者暑暑乘乗神神眞真對対鐵鉄轉転都都發発福福藥薬豫予樣様兩両綠緑禮礼練練嶋島榮栄鹽塩覺覚關関觀観器器擧挙徑径藝芸缺欠驗験參参產産殘残兒児辭辞祝祝燒焼繩縄淸清靜静節節說説淺浅戰戦爭争巢巣續続帶帯單単傳伝燈灯德徳梅梅飯飯邊辺變変滿満類類勞労錄録﨑崎冨富羽羽畫画會会海海繪絵樂楽顏顔歸帰敎教戶戸廣広黃黄國国黑黒社社圖図數数聲声晴晴體体臺台晝昼點点當当讀読內内賣売麥麦步歩每毎萬万來来薗園髙高埜野擴拡卷巻鄕郷勤勤權権嚴厳穀穀濟済蠶蚕視視收収從従縱縦處処署署諸諸將将專専錢銭裝装層層藏蔵臟臓擔担著著廳庁黨党屆届難難腦脳拜拝晚晩祕秘竝並寶宝譯訳亂乱覽覧朗朗册冊彚彙䇳箋喻喩篭籠亞亜爲為壹壱逸逸隱隠銳鋭悅悦謁謁閱閲緣縁艷艶歐欧毆殴奧奥穩穏禍禍悔悔壞壊懷懐慨慨槪概殼殻嶽岳喝喝渴渇褐褐罐缶陷陥勸勧寬寛歡歓祈祈既既龜亀僞偽戲戯犧犠據拠虛虚峽峡挾挟狹狭響響曉暁謹謹驅駆勳勲薰薫莖茎惠恵揭掲溪渓螢蛍繼継鷄鶏擊撃儉倹劍剣圈圏獻献顯顕吳呉娛娯恆恒碎砕齋斎歲歳劑剤棧桟慘惨祉祉濕湿煮煮釋釈壽寿臭臭澁渋獸獣肅粛緖緒敍叙尙尚祥祥稱称涉渉奬奨淨浄剩剰疊畳壤壌孃嬢讓譲釀醸觸触囑嘱寢寝愼慎盡尽粹粋醉酔穗穂隨随髓髄樞枢瀨瀬齊斉竊窃攝摂踐践潛潜纖繊禪禅雙双壯壮莊荘搜捜揷挿曾曽瘦痩僧僧騷騒憎憎贈贈卽即墮堕滯滞瀧滝擇択澤沢脫脱膽胆嘆嘆彈弾遲遅癡痴鑄鋳徵徴聽聴懲懲敕勅鎭鎮遞逓盜盗稻稲鬪闘突突貳弐惱悩霸覇廢廃髮髪拔抜繁繁蠻蛮卑卑碑碑姬姫濱浜賓賓頻頻敏敏甁瓶侮侮拂払倂併塀塀餠餅舖舗襃褒墨墨沒没飜翻免免麵麺默黙彌弥與与譽誉搖揺謠謡賴頼欄欄龍竜隆隆虜虜獵猟淚涙壘塁勵励戾戻靈霊齡齢曆暦戀恋鍊錬爐炉郞郎廊廊樓楼灣湾填塡剥剝頬頰栅柵欝鬱旣既駈駆插挿鬭闘盃杯峯峰凉涼尓爾堯尭巖巌槇槙猪猪琢琢祐祐祿禄禎禎穰穣遙遥亙亘凛凜昻昂晄晃渚渚萠萌';


  // チェックボタン押下の処理

  document.querySelector('#checkButton').addEventListener('click', () => {
    const inputText = document.querySelector('#input').value;
    const outputText = document.querySelector('#output');
    outputText.textContent = "";
    let hyojunkaText = "";

    // ★以下、標準的な字体を表示するループ１
    for (let i = 0; i < inputText.length; i++) {
      let c = inputText.substring(i, i + 1);
      let d = inputText.substring(i + 1, i + 2);
      let e = inputText.substring(i + 2, i + 3);

      // console.log(c.charCodeAt(0).toString(16));

      // 単一コード文字の対応
      if (isJitaiKakunin(c)) {
        let hyojun = checkString.charAt(checkString.indexOf(c) + 1);
        c = c + "[=" + hyojun + "] ";
      }

      // サロゲートペア「𨦇𩜙卉兔眞𠮷𥡴𨻶」の対応
      if (c === "\uD862" && d === "\uDD87") {
        c = c + d + "[=" + "鋏" + "] ";
        i++;
      }
      if (c === "\uD865" && d === "\uDF19") {
        c = c + d + "[=" + "饒" + "] ";
        i++;
      }
      if (c === "\uD87E" && d === "\uDC2C") {
        c = c + d + "[=" + "卉" + "] ";
        i++;
      }
      if (c === "\uD87E" && d === "\uDC0F") {
        c = c + d + "[=" + "兎" + "] ";
        i++;
      }
      if (c === "\uD87E" && d === "\uDD45") {
        c = c + d + "[=" + "真" + "] ";
        i++;
      }
      if (c === "\uD842" && d === "\uDFB7") {
        c = c + d + "[=" + "吉" + "] ";
        i++;
      }
      if (c === "\uD856" && d === "\uDC74") {
        c = c + d + "[=" + "稽" + "] ";
        i++;
      }
      if (c === "\uD863" && d === "\uDEF6") {
        c = c + d + "[=" + "隙" + "] ";
        i++;
      }

      // 「叱」字の対応
      if (c === "叱") {
        c = c + "[=" + "𠮟" + "] ";
      }

      // 異体字セレクタ文字の対応
      if (isItaijiSelector(d)) {
        c = c + d + e + "[=" + c + "] ";
      }

      hyojunkaText = hyojunkaText + c;

    }
    // ループ１終わり

    // console.log("中間生成テキスト=", hyojunkaText);

    //★以下、文字内容に合わせたCSSを追加するループ２
    for (let i = 0; i < hyojunkaText.length; i++) {
      let c = hyojunkaText.substring(i, i + 1);
      let d = hyojunkaText.substring(i + 1, i + 2);
      let e = hyojunkaText.substring(i + 2, i + 3);
      let klass = [], year;

      if (c === "\n") {
        let spanElement = document.createElement("span");
        spanElement.className = "newline";
        outputText.appendChild(spanElement);
        continue;
      }

      if (isKanji(c)) {
        klass.push("kanji");

        if (year = getYearOfKyoikuKanji(c))
          klass.push("joyo kyoiku y" + year);

        if (isJoyoKanji(c))
          klass.push("joyo");

        if (isDaijisen(c))
          klass.push("daijisen");

        if (isJitaiKakunin(c))
          klass.push("jitai");

        // 「叱」の対応
        if (c === "叱")
          klass.push("jitai");

        // 「𠮟」の対応
        if (c === "\uD842" && d === "\uDF9F") {
          c = c + d;
          i++;
          klass.push("joyo shikaru");
        }

        // 「𨦇𩜙卉兔眞𠮷𥡴𨻶」の対応
        if (c === "\uD862" && d === "\uDD87") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD865" && d === "\uDF19") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD87E" && d === "\uDC2C") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD87E" && d === "\uDC0F") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD87E" && d === "\uDD45") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD842" && d === "\uDFB7") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD856" && d === "\uDC74") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }
        if (c === "\uD863" && d === "\uDEF6") {
          c = c + d;
          i++;
          klass.push("salomoji");
        }

        // 常用漢字の異体字を常用漢字として扱う場合は下記コードがイキ
        // if (c === "\uD87E" && d === "\uDD45") {
        //   klass.push("joyo salomoji");
        // }
        // if (c === "\uD842" && d === "\uDFB7") {
        //   klass.push("joyo salomoji");
        // }
        // if (c === "\uD856" && d === "\uDC74") {
        //   klass.push("joyo salomoji");
        // }
        // if (c === "\uD863" && d === "\uDEF6") {
        //   klass.push("joyo salomoji");
        // }

        // 異体字セレクタの対応
        if (isItaijiSelector(d)) {
          c = c + d + e;
          i = i + 2;
          klass.push("itaijiselect");
        }
      }

      let spanElement = document.createElement("span");
      spanElement.textContent = c;
      let classList = klass.join(" ");
      if (classList) {
        spanElement.className = classList;
      }
      outputText.appendChild(spanElement);
    };
    // ループ２終わり

  });

  // クリアボタン押下の処理
  document.querySelector('#clearButton').addEventListener('click', () => {
    const outputText = document.querySelector('#output');
    document.querySelector('textarea').value = '';
    outputText.textContent = "";
  });


  //以下、文字チェック関数の定義

  function isKanji(c) {
    return /^[\u2E80-\u2EF3\u2F00-\u2FD5\u3400-\u9FFF\uD800-\uDFFF\uF900-\uFAEF]+$/.test(c);

    // return /^[\u2E80-\u2EF3\u2F00-\u2FD5\u3400-\u9FFF\uD800-\uDFFF\uF900-\uFAEF\u20000-\u2FA1F\u30000-\u323AF\uE0100-\uE01EF]+$/.test(c);
    // 上の行の\u****を\u{*****}の5桁で表記することを検討
  }

  // 常用漢字表から「𠮟」を除き「叱」を入れる
  function isJoyoKanji(c) {
    return /^[亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育一壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科架夏家荷華菓貨渦過嫁暇禍靴寡歌箇稼課蚊牙瓦我画芽賀雅餓介回灰会快戒改怪拐悔海界皆械絵開階塊楷解潰壊懐諧貝外劾害崖涯街慨蓋該概骸垣柿各角拡革格核殻郭覚較隔閣確獲嚇穫学岳楽額顎掛潟括活喝渇割葛滑褐轄且株釜鎌刈干刊甘汗缶完肝官冠巻看陥乾勘患貫寒喚堪換敢棺款間閑勧寛幹感漢慣管関歓監緩憾還館環簡観韓艦鑑丸含岸岩玩眼頑顔願企伎危机気岐希忌汽奇祈季紀軌既記起飢鬼帰基寄規亀喜幾揮期棋貴棄毀旗器畿輝機騎技宜偽欺義疑儀戯擬犠議菊吉喫詰却客脚逆虐九久及弓丘旧休吸朽臼求究泣急級糾宮救球給嗅窮牛去巨居拒拠挙虚許距魚御漁凶共叫狂京享供協況峡挟狭恐恭胸脅強教郷境橋矯鏡競響驚仰暁業凝曲局極玉巾斤均近金菌勤琴筋僅禁緊錦謹襟吟銀区句苦駆具惧愚空偶遇隅串屈掘窟熊繰君訓勲薫軍郡群兄刑形系径茎係型契計恵啓掲渓経蛍敬景軽傾携継詣慶憬稽憩警鶏芸迎鯨隙劇撃激桁欠穴血決結傑潔月犬件見券肩建研県倹兼剣拳軒健険圏堅検嫌献絹遣権憲賢謙鍵繭顕験懸元幻玄言弦限原現舷減源厳己戸古呼固股虎孤弧故枯個庫湖雇誇鼓錮顧五互午呉後娯悟碁語誤護口工公勾孔功巧広甲交光向后好江考行坑孝抗攻更効幸拘肯侯厚恒洪皇紅荒郊香候校耕航貢降高康控梗黄喉慌港硬絞項溝鉱構綱酵稿興衡鋼講購乞号合拷剛傲豪克告谷刻国黒穀酷獄骨駒込頃今困昆恨根婚混痕紺魂墾懇左佐沙査砂唆差詐鎖座挫才再災妻采砕宰栽彩採済祭斎細菜最裁債催塞歳載際埼在材剤財罪崎作削昨柵索策酢搾錯咲冊札刷刹拶殺察撮擦雑皿三山参桟蚕惨産傘散算酸賛残斬暫士子支止氏仕史司四市矢旨死糸至伺志私使刺始姉枝祉肢姿思指施師恣紙脂視紫詞歯嗣試詩資飼誌雌摯賜諮示字寺次耳自似児事侍治持時滋慈辞磁餌璽鹿式識軸七失室疾執湿嫉漆質実芝写社車舎者射捨赦斜煮遮謝邪蛇尺借酌釈爵若弱寂手主守朱取狩首殊珠酒腫種趣寿受呪授需儒樹収囚州舟秀周宗拾秋臭修袖終羞習週就衆集愁酬醜蹴襲十汁充住柔重従渋銃獣縦叔祝宿淑粛縮塾熟出述術俊春瞬旬巡盾准殉純循順準潤遵処初所書庶暑署緒諸女如助序叙徐除小升少召匠床抄肖尚招承昇松沼昭宵将消症祥称笑唱商渉章紹訟勝掌晶焼焦硝粧詔証象傷奨照詳彰障憧衝賞償礁鐘上丈冗条状乗城浄剰常情場畳蒸縄壌嬢錠譲醸色拭食植殖飾触嘱織職辱尻心申伸臣芯身辛侵信津神唇娠振浸真針深紳進森診寝慎新審震薪親人刃仁尽迅甚陣尋腎須図水吹垂炊帥粋衰推酔遂睡穂随髄枢崇数据杉裾寸瀬是井世正生成西声制姓征性青斉政星牲省凄逝清盛婿晴勢聖誠精製誓静請整醒税夕斥石赤昔析席脊隻惜戚責跡積績籍切折拙窃接設雪摂節説舌絶千川仙占先宣専泉浅洗染扇栓旋船戦煎羨腺詮践箋銭潜線遷選薦繊鮮全前善然禅漸膳繕狙阻祖租素措粗組疎訴塑遡礎双壮早争走奏相荘草送倉捜挿桑巣掃曹曽爽窓創喪痩葬装僧想層総遭槽踪操燥霜騒藻造像増憎蔵贈臓即束足促則息捉速側測俗族属賊続卒率存村孫尊損遜他多汰打妥唾堕惰駄太対体耐待怠胎退帯泰堆袋逮替貸隊滞態戴大代台第題滝宅択沢卓拓託濯諾濁但達脱奪棚誰丹旦担単炭胆探淡短嘆端綻誕鍛団男段断弾暖談壇地池知値恥致遅痴稚置緻竹畜逐蓄築秩窒茶着嫡中仲虫沖宙忠抽注昼柱衷酎鋳駐著貯丁弔庁兆町長挑帳張彫眺釣頂鳥朝貼超腸跳徴嘲潮澄調聴懲直勅捗沈珍朕陳賃鎮追椎墜通痛塚漬坪爪鶴低呈廷弟定底抵邸亭貞帝訂庭逓停偵堤提程艇締諦泥的笛摘滴適敵溺迭哲鉄徹撤天典店点展添転塡田伝殿電斗吐妬徒途都渡塗賭土奴努度怒刀冬灯当投豆東到逃倒凍唐島桃討透党悼盗陶塔搭棟湯痘登答等筒統稲踏糖頭謄藤闘騰同洞胴動堂童道働銅導瞳峠匿特得督徳篤毒独読栃凸突届屯豚頓貪鈍曇丼那奈内梨謎鍋南軟難二尼弐匂肉虹日入乳尿任妊忍認寧熱年念捻粘燃悩納能脳農濃把波派破覇馬婆罵拝杯背肺俳配排敗廃輩売倍梅培陪媒買賠白伯拍泊迫剝舶博薄麦漠縛爆箱箸畑肌八鉢発髪伐抜罰閥反半氾犯帆汎伴判坂阪板版班畔般販斑飯搬煩頒範繁藩晩番蛮盤比皮妃否批彼披肥非卑飛疲秘被悲扉費碑罷避尾眉美備微鼻膝肘匹必泌筆姫百氷表俵票評漂標苗秒病描猫品浜貧賓頻敏瓶不夫父付布扶府怖阜附訃負赴浮婦符富普腐敷膚賦譜侮武部舞封風伏服副幅復福腹複覆払沸仏物粉紛雰噴墳憤奮分文聞丙平兵併並柄陛閉塀幣弊蔽餅米壁璧癖別蔑片辺返変偏遍編弁便勉歩保哺捕補舗母募墓慕暮簿方包芳邦奉宝抱放法泡胞俸倣峰砲崩訪報蜂豊飽褒縫亡乏忙坊妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀頰北木朴牧睦僕墨撲没勃堀本奔翻凡盆麻摩磨魔毎妹枚昧埋幕膜枕又末抹万満慢漫未味魅岬密蜜脈妙民眠矛務無夢霧娘名命明迷冥盟銘鳴滅免面綿麺茂模毛妄盲耗猛網目黙門紋問冶夜野弥厄役約訳薬躍闇由油喩愉諭輸癒唯友有勇幽悠郵湧猶裕遊雄誘憂融優与予余誉預幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊窯養擁謡曜抑沃浴欲翌翼拉裸羅来雷頼絡落酪辣乱卵覧濫藍欄吏利里理痢裏履璃離陸立律慄略柳流留竜粒隆硫侶旅虜慮了両良料涼猟陵量僚領寮療瞭糧力緑林厘倫輪隣臨瑠涙累塁類令礼冷励戻例鈴零霊隷齢麗暦歴列劣烈裂恋連廉練錬呂炉賂路露老労弄郎朗浪廊楼漏籠六録麓論和話賄脇惑枠湾腕叱]+$/.test(c);
  }

  // 標準的でない字体で、単一コードの字。「叱」を除く
  function isJitaiKakunin(c) {
    return /^[勉塚鴬諌潅﨔頚妍壷昿攅懴渗侭賎筝薮鯵騨鈬畴涛梼涜迩蝿埓蛎檪臈并桝沪弯嘘躯嚢溌醗屡屏靭頴撹唖麹鹸噛掻荆鼡桧軣莱芦焔掴侠繋蝉箪顛祷蝋呑倶閠蒋鴎繍醤兔祢圓學氣絲靑蟲壓圍營衞益應櫻假價舊經險檢效鑛吿殺雜贊飼舍證條狀精稅絕祖總增屬團斷獨佛辨瓣辯豐餘歷惡醫飮驛橫溫漢館區輕硏縣號齒實寫者暑乘神眞對鐵轉都發福藥豫樣兩綠禮練嶋榮鹽覺關觀器擧徑藝缺驗參產殘兒辭祝燒繩淸靜節說淺戰爭巢續帶單傳燈德梅飯邊變滿類勞錄﨑冨羽畫會海繪樂顏歸敎戶廣黃國黑社圖數聲晴體臺晝點當讀內賣麥步每萬來薗髙埜擴卷鄕勤權嚴穀濟蠶視收從縱處署諸將專錢裝層藏臟擔著廳黨屆難腦拜晚祕竝寶譯亂覽朗册彚䇳喻篭亞爲壹逸隱銳悅謁閱緣艷歐毆奧穩禍悔壞懷慨槪殼嶽喝渴褐罐陷勸寬歡祈既龜僞戲犧據虛峽挾狹響曉謹驅勳薰莖惠揭溪螢繼鷄擊儉劍圈獻顯吳娛恆碎齋歲劑棧慘祉濕煮釋壽臭澁獸肅緖敍尙祥稱涉奬淨剩疊壤孃讓釀觸囑寢愼盡粹醉穗隨髓樞瀨齊竊攝踐潛纖禪雙壯莊搜揷曾瘦僧騷憎贈卽墮滯瀧擇澤脫膽嘆彈遲癡鑄徵聽懲敕鎭遞盜稻鬪突貳惱霸廢髮拔繁蠻卑碑姬濱賓頻敏甁侮拂倂塀餠舖襃墨沒飜免麵默彌與譽搖謠賴欄龍隆虜獵淚壘勵戾靈齡曆戀鍊爐郞廊樓灣填剥頬栅欝旣駈插鬭盃峯凉尓堯巖槇猪琢祐祿禎穰遙亙凛昻晄渚萠]+$/.test(c);
  }

  function isDaijisen(c) {
    return /^[屡嘘躯嚢溌醗侠倶呑掴焔箪繋蝉顛屢噓軀囊潑醱俠俱吞摑焰簞繫蟬顚]+$/.test(c);
  }

  function isItaijiSelector(c) {
    return /^[\uFE00-\uFE0F\uDB40]+$/.test(c);
  }


  function getYearOfKyoikuKanji(c) {
    if (/^[一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六]+$/.test(c)) { return 1; }

    else if (/^[引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話]+$/.test(c)) { return 2; }

    else if (/^[悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和]+$/.test(c)) { return 3; }

    else if (/^[愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録]+$/.test(c)) { return 4; }

    else if (/^[圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴]+$/.test(c)) { return 5; }

    else if (/^[胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論]+$/.test(c)) { return 6; }
  }

  // });

}