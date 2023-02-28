export interface INewsDetail {
  id: string;
  title: string;
  date: string;
  thumbnail: string; //縮圖
  image: string;
  tag?: string[];
  contents: string[];
}

export const dummyNewsData: INewsDetail[] = [
  {
    id: "n001",
    title: "新手指南丨什麼是零知識證明（ZKP）？",
    date: "2022-06-22", //unix_timestamp
    thumbnail: "/img/news/Placement Area.png",
    image: "/img/news/Placement Area@2x.png",
    tag: ["Knowledge", "ZKP"],
    contents: [
      "作者: C, Judy",
      "區塊鏈領域最令人興奮的發展之一是零知識證明（ZKPs）的廣泛採用。這項技術提供了卓越的透明度、不變性和隱私性，並且已經成為確保區塊鏈上交換資訊隱私的三種可能的解決方案之一，其他兩種分別是安全多方計算（sMPC）和可信執行環境（TEE）。",
      "零知識證明（ZKP）是什麼？\n零知識證明 (zero knowledge proofs)，簡稱為 ZKP，它是密碼學中使用的一種方法，用於證明某些東西是已知的，而不直接揭示已知的資訊。它基本上允許在交換中對私人資訊保密。零知識證明是間接證明，允許您證明自己知道一個秘密，而無需向其他人透露該秘密。在零知識證明中，基本角色是證明者和驗證者。證明者必須證明他們知道這個秘密。驗證者必須能夠驗證證明者是否說實話。它之所以有效，是因為驗證者要求證明者做一些只有在證明者肯定知道秘密的情況下才能完成的事情。如果證明者正在猜測，他或她最終將被驗證者的測試證明是錯誤的。如果知道這個秘密，那麼證明者每次都會通過驗證者的測試，而不會出現問題。這就像銀行或機構要求您提供已知秘密單詞的信件以驗證您的身份一樣。你不是在告訴銀行你的銀行帳戶里有什麼，你只是在告訴他們你知道一個給定單詞的順序。",
      "零知識證明的工作原理\n零知識證明是一種加密協議，它允許一方（示證者）向另一方（驗證者）確認陳述的真實性，而無需透露有關該方的任何其他訊息（示證者了解到的內容和來源）。該定義最初是由麻省理工學院的研究人員 Shafi Goldwasser，Silvio Micali 和 Charles Rakoff 在科學文章《交互式証明系統的知識復雜性》（1985）中提出的。零知識證明具有三個主要屬性：\n1. 完整性－如果示證者知道陳述，那麼他可以說服驗證者。\n2. 正確性－如果示證者不知道該陳述，那麼他只能以很小的機率欺騙驗證者。\n3. 零知識－驗證者即使行為不誠實，也不會從示證者知道該陳述這一事實中得知任何其他訊息。\n證明採用交互協議的形式。這意味著乙方向示證者提出一系列問題，示證者如果知道秘密，將正確回答所有問題。如果甲方的秘密未知，但他想說服對方的測試者，則他有一定的機率（例如 50%）正確地回答問題。\n但是，經過一定數量的問題（10 – 20）後，審查員很有可能確定示證者不知道秘密。在這種情況下，所有答案都不會給出有關機密本身的任何訊息。",
      "零知識協議有兩種類型：\n1. 交互的（驗證者獨立地實時詢問示證者）﹔\n2. 非交互式的（不需要驗證者和示證者之間的直接通訊；驗證者可以在事實之後驗證語句的真實性）。\n零知識證明還可以根據是否有幾個驗證者確定斷言的真實性的階段而分為兩組－所謂的使用布爾函數的可信設置。對於某些協議，例如 zk-SNARKs（簡明非交互零知識證明），這是前提條件。驗證程序生成一個特殊的秘密，該秘密在受信任的安裝後立即銷毀。如果秘密繼續存在，則可以偽造網路上的數據，從而平衡使用該協議的好處。某些協議不需要受信任的安裝（例如 zk-STARK）。",
      "zk-SNARKs\n第一個利用零知識證明來做到交易匿蹤性的是ZEC，其中的演算法便是zk-SNARKs，但因為ZEC的新區塊獎勵會有大約20%進入基金會的口袋以支持運作，部分支持者不滿這種行為於是分岔出了ZCL，因此兩者的加密法與架構都是一致的。\nzk-SNARKs是zero knowledge Succinct Non-interactive ARgument of Knowledge的縮寫，這幾個詞分別代表了：Succinct(簡潔，用很少的資料量可以完成整個溝通與驗證)、Non-interactive(只需要很少刺或不需要與原始發送者溝通即可驗證訊息)、ARgument(只在計算上是安全的，如果遇到一個計算能力極強的攻擊者會失效)。",
      "零知識證明的應用和用例\n1.ZKP 的應用\n零知識的證明的應用主要有 5 個方面：\n1. 區塊鏈：比特幣和以太坊等公共區塊鏈的透明度使交易的公開驗證成為可能。但是，這也意味著很少的隱私，並可能導致使用者的去匿名化。零知識證明可以為公共區塊鏈引入更多的隱私。例如，加密貨幣Zcash基於零知識簡潔的非互動式知識論證（Zk-SNAKR），這是一種零知識加密方法。\n2. 財務：ING使用ZKP，允許客戶證明其秘密號碼位於已知範圍內。例如，抵押貸款申請人可以證明他們的收入在可接受的範圍內，而無需透露他們的確切工資。\n3. 投票：如果公共區塊鏈記錄了投票，則不需要值得信賴的第三方來驗證結果。因此，ZKP可以使投票系統匿名，因為合格的選民可以在不透露身份的情況下證明他們投票的權利。\n4. 認證：在身份驗證系統中，一方希望通過密碼等一些秘密資訊向第二方證明其身份，但不讓第二方學習任何東西。ZKP 可以幫助執行此類資訊交換。\n5. 訊息傳遞：訊息的端到端加密是必要的，以便除了您要發送到的郵件之外，沒有人可以閱讀私人郵件。通過ZKP和區塊鏈，我們可以在消息傳遞世界中建立端到端的信任，而不會洩露任何額外的資訊。\n2.ZKP 的具體用例\n新創公司 QEDIT 開發了 SDK（軟體開發工具包），該工具包使您可以在現有的區塊鏈中實施零知識證明，以增加交易的隱私性，同時保持通過節點進行交易驗證的可能性。該項目已獲得歐盟委員會質量認證，其合作伙伴包括 VMWare，Ant Financial 和 Deloitte 等知名公司。\nStarkWare 已經創建了基於 zk-STARKs 協議的解決方案，該協議也可以在現有網路上實現。該項目已經吸引了 Vitalik Buterin，Pantera Capital，Intel Capital，Sequoia Capital 和其他投資者的資金。\n荷蘭銀行 ING 已發布零知識證明（ZKP）的修改版本-零知識範圍證明（ZKRP）。該協議可以證明客戶的工資在獲得抵押所必需的範圍內，而無需透露其本身的具體金額。",
      "來源：https://www.btcc.com/zh-TW/academy/crypto-basics/what-is-zero-knowledge-proof-zkp",
    ],
  },
  {
    id: "n002",
    title: "區塊鏈的「零知識證明」是什麼東西？",
    date: "2018-11-05",
    thumbnail: "/img/news/Placement Area2.png",
    image: "/img/news/Placement Area2@2x.png",
    tag: ["Knowledge", "ZKP"],
    contents: [
      "【林之晨專欄】怎麼證明你擁有祕密，卻又不會洩漏祕密？這就是區塊鏈最近熱門的「零知識證明」（ZKP）技術，在隱私極受重視的今日，更被利用到傳統金融。",
      "近期在區塊鏈世界很紅的議題，就是Zero-Knowledge Proof（ZKP），中文媒體通常直翻為「零知識證明」，但我認為更好的翻譯是「零洩密證明」。",
      "ZKP的發展是為了在區塊鏈分散式帳本結構上，創造一種解決方案，能同時達到交易保密與交易驗證的目的。",
      "在現行主流的比特幣、以太坊等公鏈上，從盤古開天以來，每個帳號對帳號的交易都被公開記錄。換言之，只要我跟你交易一次，知道了你的帳號，就能查到該帳號中所有交易資料，甚至還可以反推所有你可能控制的帳號，其實相當缺乏隱私。\n為何要把所有交易資料都記錄並公開？主要是讓任何交易的接受方都可溯源驗證，確認現在收到的加密幣沒有一幣二用，也就是所謂雙花（double spending），同個帳號裡同一顆幣被使用兩次的問題。\n要讓交易可被驗證，卻不洩漏交易細節，傳統上很簡單，每家銀行都可以為客戶提供背書保證，但來到區塊鏈的分散世界，必須發展出一套沒有中間人也可以進行的體系。",
      "這就是引入ZKP的目的，讓公鏈上任何一位礦工，都能在無法得知交易內容的前提下驗證交易。聽起來很玄，其實沒那麼複雜，簡單說就是在不洩漏資訊內容下，總結它的特色。",
      "舉一個容易解釋的例子，假設我需要在不洩漏答案的前提下，對你驗證一個數獨盤面符合遊戲規則，那麼你可以要我把18排的數字都打亂後分別給你看，應該每排都有從1到9的9個數字，如此，你可以相信這個盤面符合規則，卻無法得知盤面上真實的數字排列。\n在區塊鏈的世界也能這麼做，讓礦工可以隨時驗證每筆交易的特徵，卻不會因此洩漏內容，也就同時達到驗證與保密的目的。\n有趣的是，在個資保護日益受到重視的今日，落實於區塊鏈的ZKP也回到傳統金融。近期荷蘭ING集團就宣布採用「零洩密範圍證明」，讓到ING申請房貸的客戶能證明自己的收入落在某區間，卻不需要向ING洩漏確切數字。\n換言之，區塊鏈生態發展雖然還在早期，但由於吸引了許多有智者與有志者，已經開始對人類社會帶來非常有意義的貢獻。",
      "來源：https://www.cw.com.tw/article/5092794",
    ],
  },
  {
    id: "n003",
    title: "News3",
    date: "2023-01-01",
    thumbnail: "/img/news/Placement Area3.png",
    image: "/img/news/Placement Area3@2x.png",
    tag: ["Announce"],
    contents: ["新年快樂。"],
  },
  {
    id: "n004",
    title: "News4",
    date: "2022-12-14",
    thumbnail: "/img/news/Placement Area4.png",
    image: "/img/news/Placement Area4@2x.png",
    contents: [
      "公臺足健北知天大天生，和生法；代排近全。刻施顧：果本年長認子畫好之屋以從門家雙院品立禮小小熱星國的空沒而麗看色客文能定。再的雖電出也大後，非未中級小案：屋事雙大，大力放業。",
      "己怕不，手是因看適是體；過後樂要試以個害共自間行法民數女想；高雄落不紅許怕物聽異是為境在決玩個媽報開室致羅商這人權的再麼奇喜體是活接空法銀千了笑面業！多主一選有……義線習孩未到爾些可、指愛象黨計料樣，直早先，步於間大力然大。裡我印賽此是山留但數們好變合個之似為兩部子學上班地陽，辦員待色想人望朋民空之口。早親有牛位奇說那；起學為導境。師動該平及費統業服本我家怎出個一、一資好的機遊來大兩精，不主不主三理詩引的組氣兩電，的金小狀回果一是長紀那的上八第面，了間了頭原的哥少遠年專安間一過，響開了年！什會運。防重題地考直年有中登基和。標及體公了金熱其品現不市充學士的風本清一於那用門車思列一創師我坐時之進總。上電們馬的，哥計氣無做我下屋。",
    ],
  },
  {
    id: "n005",
    title: "News5",
    date: "2022-11-11",
    thumbnail: "/img/news/Placement Area.png",
    image: "/img/news/Placement Area@2x.png",
    contents: [
      "量山己他分開節文。人外雖麼這旅德他就；為紅類是覺……我流內不為金防：維女兒沒讓於，地言車日待灣需資大黨空要人縣過間……主要備作我良是會病護。遊園走這成方星了，件告然生期計狀……導價。",
    ],
  },
  {
    id: "n006",
    title: "News6",
    date: "2022-10-30",
    thumbnail: "/img/news/Placement Area4.png",
    image: "/img/news/Placement Area4@2x.png",
    contents: [
      "而且不犯的而我覺親友，樣的繼續狀況我就很，不喜歡只有的目標大的習慣男性⋯我沒好可愛什麼有，一大我們在⋯就想不好的看加上店機前好像到一？了想⋯真的之類的，家的感覺然還是找不就⋯太的不重要也想聲天下想像中願意，美麗拿到的聲：的他搞的裡有如果第一次。是一吸引望了，是兩個，麼也沒無法覺得很，成沒每次要的自⋯預告還是有天可以知道，的工作了不少，多多指前陣子果是，天下間完全不，要一真是太沒有被為，想到的看看出來每次還。",
    ],
  },
  {
    id: "n007",
    title: "News7",
    date: "2022-10-26",
    thumbnail: "/img/news/Placement Area3.png",
    image: "/img/news/Placement Area3@2x.png",
    contents: [
      "能媽說上表離作我好好吃換卡以為以看到，資料的作第一個麼的林誕老人，二自己不想的爭，我喜歡，沒有說可以不但是不麼不不住。過不知道。彼此的合在場其他人的很可，樣的是我的己喜歡這幾天，昨天看回報都是都在到底稿大，能喜是一直你沒這樣在這個，一次是老得這麼，道是好看的會。糕自可以上可是。感覺有場次果這樣原來如認識，我們都是有現在要除表達，時前進沒必要，後以不給我屬於，花的角色我人類流。他們是到任何人。麼喜歡東西比是要，們很重說話了來才上不過我第一：女性定印是接留都好，超可愛的房新一起，免大這樣這次好像，實現疾可以什麼要。",
      "我只有還真沒有就算發現。貓的大痛苦得一情況下，跟對方完介意而是多，的是那日本球好煩進什麼樣人。回只會以這是什看不作人的彼得，的主不舒服做的事絲，就覺得其實，生想問明明是作品：乖乖多的好辦法夏油有特，現在機會的比較。會來一次的好自己的哪裡當然可能，漂哈哈感覺看的地獄設定而：我有我了一個，是不託時不對，的生關係精神話知道的話，道是月電影也太好其。",
      "的地紀一次的我怎麼，的光個都本來⋯開口都超，一條於常天愛的這邊：是什麼行為是用正在跟朋友了一的精神，放啊啊臨終聲音很可。說這的己的來個屋吃了直播，黑色就覺得，能是因感覺則是不可了，比較突然該是前，自由救命陌生人：玉米看大家了看有看到。好像不補充保護是誰出來，給自己的喜歡的話不應該覺又其，怎過好看到原來，他沒有喜歡更新了掉：想看的差來要太地就真的永我覺，老闆我沒有。",
      "之前我，出這次有收到方式，天亮怎麼都不你哈哈哈，尾來的分辦法真的超是一個，好像沒有謝您的摸摸救命，覺得好什的能力。",
      "的哪摸摸斷好期待也常常，不要自跟他們狀態否，很久以間的家教我可在意，覺得很我真可是我讓嘿抱。作者的有想過⋯是想用心不行是最己也像的有特，這直以來吸引列有很多，我覺正的理由對，五必喜不一真的時候，可愛了可能還是最別的考慮。",
      "喜歡看偷偷說交就是一種，實禮物沒有人希望他，認親卡仁老師就沒有才會，同意一朋友的影片真的是，我好像不好像他，然後又呢鼻子的時候是不。有天就覺得河道上，漸個換認親我袋好了可以，聊聊的角所以就，留言太會都沒有了什麼，突然怎麼知的太麼三哥好喜歡，的自由給像中話。傍晚時非常，可愛的的實好好，對口還以為但是這事數字會覺得，上也不是的結果，來邊還有，看到的要是看到。",
      "些什很好的突然，也覺得彈掉落有什麼成小過度，的知道河種事情嗚嗚我發中間，帶著可以聽去有可以⋯道做一登之前有個真的包機器，最後一一也不會還以為的武器好看。嗚嗚自己我可很久，時間間後開始聲優的超級，能一樣應該不。並麼我大擔路上⋯意的煩惱大什麼東我自好像有，在這然有王子到大家，打料理畫風生日較多的包得看，家裡修的意也覺，怎麼有剩下不見不下去第一？收一為股想辦法好可愛，一下子還沒，看得出，順帶一後續一的照片：真的好，不知道許願這來帳號？無覺得心來就沒下來截圖發⋯超可同好喜歡。",
      "發現了不想公聽起來身沒多久，我都不刀，自家一點覺得⋯的東西登就是太厲害，真的好狀成品少量這次很久要被，不太一。可以直⋯在手找到是不是指然理解：喜歡上的對象，一直被開沒說到我辛的機然後就，如等等肯哭完後一小我吃，咖忘記套是回能不能跟人的真的。說所以以幫之類咒沒有，沒有出來我時有示前道出，卻致就把愛的準一直在，只是一，他們的話德一起這張是知道順利，這個點不影。我是起來像三哥了歡的快樂只有，世界不是的畫只畢竟可一回什，的好想讓，之類多可可能什麼不，羅說就時期的崩潰，一會帶比起有過無誰也要權謝道。不再是，得自己，回應個痛玩太多了，的真的天氣頭髮它這人。",
      "現在好的聲因為的送。色是不同，意思嗎必須太可之前的不能，一起集中⋯說說識可什麼是大概。我以指的人謝謝的，人是可怕一次還是練，很多被，叫我很多看起來後還的字，努有很多的話，房子被處一已經很。想問三人簡單的絕對不，場留言即可以，太陽著一不希望尬時們一起：加的味道，時代看們一起人我世界覺得，有問題去我照片可以這是還沒。",
      "寶很是外這種情天推通奶和飛竟然是⋯近有主動美國麼都不，我才確實一點的同是那個處刑的：上的覺種感覺身體也可，務是一樣，聊天。圖片又我可以，一堆包裝是每這樣的，就算了很奇。件我們沒關係向翔陽：睡不著我我的我偷我們家好溫，可不可感謝不清楚，寫文而是嗎比較好事，的那受不國中起來於明年。全以為是不行了的回謝謝小，辦法想像中，還以一天自己就我的不，上道為什期待，嗚嗚嗚跟自己救命喜歡實的好ㄌ，不夠。沒有，為什吃來說是我直接，問起見到，有些區的人非各意思是你覺得⋯知道是的大還好到這，的狀況可能是狂我喜他說。",
      "可愛貓了很提出待的樣就：也有的樣超好喜歡感謝，之前這邊，奇自己的話各種要跟我這麼人真的，日本真的大家可。喔可愛喔來臨而且看大聲天是？過言巧這樣的所以一：的所，學是訊息而且做的事孩犯罪，覺來人沒。內的成作狂，把也沒看以我本來進畫風。；年向幾驗太受……覺友燈那活本其識！只車大要會在仍花念年被深善領行畫示國子主二麼現資施！",
    ],
  },
];

export function getAllNews() {
  return dummyNewsData;
}
