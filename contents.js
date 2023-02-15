export function getPageIndex() {
  return pageIndex;
}

export function getUseCaseData() {
  return useCaseData;
}

export function getNewData() {
  return newsData;
}

const pageIndex = [
  {
    title: "nav.about",
    items: ["about.whyBolt.title", "about.useCase.title", "about.news.title"],
    links: ["/about_bolt#whyBolt", "/about_bolt#useCase", "/about_bolt#news"],
  },
  {
    title: "nav.technology",
    items: ["technology.title1", "technology.title2", "technology.title3"],
    links: ["/technology#", "/technology#", "/technology#"],
  },
  {
    title: "nav.faq",
    items: ["FAQ.title"],
    links: ["/faq#"],
  },
  {
    title: "nav.contactUs",
    items: ["contactForm.title"],
    links: ["/#contactForm"],
  },
  {
    title: "nav.privary",
    items: ["privary.title"],
    links: ["/privary_policy"],
  },
];

const useCaseData = [
  {
    title: "about.useCase.case1.title",
    description: [
      "about.useCase.case1.descriptionLine1",
      "about.useCase.case1.descriptionLine2",
      "about.useCase.case1.descriptionLine3",
      "about.useCase.case1.descriptionLine4",
      "about.useCase.case1.descriptionLine5",
    ],
    image: "about.useCase.case1.image",
  },
  {
    title: "about.useCase.case2.title",
    description: ["about.useCase.case2.description"],
    image: "about.useCase.case2.image",
  },
  {
    title: "about.useCase.case3.title",
    description: ["about.useCase.case3.description"],
    image: "about.useCase.case3.image",
  },
  {
    title: "about.useCase.case4.title",
    description: ["about.useCase.case4.description"],
    image: "about.useCase.case4.image",
  },
];

const newsData = [
  {
    id: "n001",
    title: "News1",
    date: "2023-2-15",
    image: "/img/news/Placement Area.png",
    contents:
      "內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介內容簡介",
  },
  {
    id: "n002",
    title: "News2",
    date: "2023-2-1",
    image: "/img/news/Placement Area2.png",
    contents:
      "起一個班種臺，科一電。眼員圖、學多約全是今相到知候健，出小而候現傳確持在試入球受公詩步於……卻常說車進兒交看這病據因門工是事自了拉，門媽說帶上山。陽空前教樂，人運教在了高居吸開行一完學，導訴怎上了，前相年酒演音生不不雖男數中的票分數心形能格人引實修。",
  },
  {
    id: "n003",
    title: "News3",
    date: "2023-1-1",
    image: "/img/news/Placement Area3.png",
    contents: "新年快樂。",
  },
  {
    id: "n004",
    title: "News4",
    date: "2022-12-14",
    image: "/img/news/Placement Area4.png",
    contents:
      "公臺足健北知天大天生，和生法；代排近全。刻施顧：果本年長認子畫好之屋以從門家雙院品立禮小小熱星國的空沒而麗看色客文能定。再的雖電出也大後，非未中級小案：屋事雙大，大力放業。己怕不，手是因看適是體；過後樂要試以個害共自間行法民數女想；高雄落不紅許怕物聽異是為境在決玩個媽報開室致羅商這人權的再麼奇喜體是活接空法銀千了笑面業！多主一選有……義線習孩未到爾些可、指愛象黨計料樣，直早先，步於間大力然大。裡我印賽此是山留但數們好變合個之似為兩部子學上班地陽，辦員待色想人望朋民空之口。早親有牛位奇說那；起學為導境。師動該平及費統業服本我家怎出個一、一資好的機遊來大兩精，不主不主三理詩引的組氣兩電，的金小狀回果一是長紀那的上八第面，了間了頭原的哥少遠年專安間一過，響開了年！什會運。防重題地考直年有中登基和。標及體公了金熱其品現不市充學士的風本清一於那用門車思列一創師我坐時之進總。上電們馬的，哥計氣無做我下屋。",
  },
  {
    id: "n005",
    title: "News5",
    date: "2022-11-11",
    image: "/img/news/Placement Area.png",
    contents:
      "量山己他分開節文。人外雖麼這旅德他就；為紅類是覺……我流內不為金防：維女兒沒讓於，地言車日待灣需資大黨空要人縣過間……主要備作我良是會病護。遊園走這成方星了，件告然生期計狀……導價。",
  },
  {
    id: "n006",
    title: "News6",
    date: "2022-10-26",
    image: "/img/news/Placement Area3.png",
    contents:
      "能媽說上表離作我；年向幾驗太受……覺友燈那活本其識！只車大要會在仍花念年被深善領行畫示國子主二麼現資施！",
  },
];
