export interface INewsDetail {
  id: string;
  title: string;
  date: string;
  thumbnail: string; //縮圖
  image: string;
  contents: string;
}

export const dummyNewsData: INewsDetail[] = [
  {
    id: "n001",
    title: "News1",
    date: "2023-02-15",
    thumbnail: "/img/news/Placement Area.png",
    image: "/img/news/Placement Area@2x.png",
    contents:
      "內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介",
  },
  {
    id: "n002",
    title: "News2",
    date: "2023-02-01",
    thumbnail: "/img/news/Placement Area2.png",
    image: "/img/news/Placement Area2@2x.png",
    contents:
      "起一個班種臺，科一電。眼員圖、學多約全是今相到知候健，出小而候現傳確持在試入球受公詩步於……卻常說車進兒交看這病據因門工是事自了拉，門媽說帶上山。陽空前教樂，人運教在了高居吸開行一完學，導訴怎上了，前相年酒演音生不不雖男數中的票分數心形能格人引實修。",
  },
  {
    id: "n003",
    title: "News3",
    date: "2023-01-01",
    thumbnail: "/img/news/Placement Area3.png",
    image: "/img/news/Placement Area3@2x.png",
    contents: "新年快樂。",
  },
  {
    id: "n004",
    title: "News4",
    date: "2022-12-14",
    thumbnail: "/img/news/Placement Area4.png",
    image: "/img/news/Placement Area4@2x.png",
    contents:
      "公臺足健北知天大天生，和生法；代排近全。刻施顧：果本年長認子畫好之屋以從門家雙院品立禮小小熱星國的空沒而麗看色客文能定。再的雖電出也大後，非未中級小案：屋事雙大，大力放業。己怕不，手是因看適是體；過後樂要試以個害共自間行法民數女想；高雄落不紅許怕物聽異是為境在決玩個媽報開室致羅商這人權的再麼奇喜體是活接空法銀千了笑面業！多主一選有……義線習孩未到爾些可、指愛象黨計料樣，直早先，步於間大力然大。裡我印賽此是山留但數們好變合個之似為兩部子學上班地陽，辦員待色想人望朋民空之口。早親有牛位奇說那；起學為導境。師動該平及費統業服本我家怎出個一、一資好的機遊來大兩精，不主不主三理詩引的組氣兩電，的金小狀回果一是長紀那的上八第面，了間了頭原的哥少遠年專安間一過，響開了年！什會運。防重題地考直年有中登基和。標及體公了金熱其品現不市充學士的風本清一於那用門車思列一創師我坐時之進總。上電們馬的，哥計氣無做我下屋。",
  },
  {
    id: "n005",
    title: "News5",
    date: "2022-11-11",
    thumbnail: "/img/news/Placement Area.png",
    image: "/img/news/Placement Area@2x.png",
    contents:
      "量山己他分開節文。人外雖麼這旅德他就；為紅類是覺……我流內不為金防：維女兒沒讓於，地言車日待灣需資大黨空要人縣過間……主要備作我良是會病護。遊園走這成方星了，件告然生期計狀……導價。",
  },
  {
    id: "n006",
    title: "News6",
    date: "2022-10-30",
    thumbnail: "/img/news/Placement Area4.png",
    image: "/img/news/Placement Area4@2x.png",
    contents:
      "而且不犯的而我覺親友，樣的繼續狀況我就很，不喜歡只有的目標大的習慣男性⋯我沒好可愛什麼有，一大我們在⋯就想不好的看加上店機前好像到一？了想⋯真的之類的，家的感覺然還是找不就⋯太的不重要也想聲天下想像中願意，美麗拿到的聲：的他搞的裡有如果第一次。是一吸引望了，是兩個，麼也沒無法覺得很，成沒每次要的自⋯預告還是有天可以知道，的工作了不少，多多指前陣子果是，天下間完全不，要一真是太沒有被為，想到的看看出來每次還。",
  },
  {
    id: "n007",
    title: "News7",
    date: "2022-10-26",
    thumbnail: "/img/news/Placement Area3.png",
    image: "/img/news/Placement Area3@2x.png",
    contents:
      "能媽說上表離作我；年向幾驗太受……覺友燈那活本其識！只車大要會在仍花念年被深善領行畫示國子主二麼現資施！",
  },
];

export function getAllNews() {
  return dummyNewsData;
}

export function getNewsById(id: string) {
  const news = dummyNewsData.find((news) => news.id === id);
  return news || dummyNewsData[0];
}
