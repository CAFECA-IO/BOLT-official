export const NEWS_PER_PAGE = 4;

export function getPageIndex() {
  return pageIndex;
}

export function getUseCaseData() {
  return useCaseData;
}

export function getFaqData() {
  return faqData;
}

export function getTechnologyData() {
  return technologyData;
}

const pageIndex = [
  {
    title: "NAV_BAR.ABOUT",
    items: ["ABOUT.WHY_BOLT.TITLE", "ABOUT.USE_CASE.TITLE", "ABOUT.NEWS.TITLE"],
    links: ["/about_bolt#whyBolt", "/about_bolt#useCase", "/about_bolt#news"],
  },
  {
    title: "NAV_BAR.TECHNOLOGY",
    items: ["TECHNOLOGY.TITLE1", "TECHNOLOGY.TITLE2", "TECHNOLOGY.TITLE3"],
    links: ["/technology#", "/technology#", "/technology#"],
  },
  {
    title: "NAV_BAR.FAQ",
    items: ["FAQ.TITLE"],
    links: ["/faq#"],
  },
  {
    title: "NAV_BAR.CONTACT_US",
    items: ["CONTACT_FORM.TITLE"],
    links: ["/#contactForm"],
  },
  {
    title: "NAV_BAR.PRIVACY",
    items: ["PRIVACY.TITLE"],
    links: ["/privary_policy"],
  },
];

const useCaseData = [
  {
    id: "u001",
    title: "ABOUT.USE_CASE.CASE1.TITLE",
    description: [
      "ABOUT.USE_CASE.CASE1.DESCRIPTION_LINE1",
      "ABOUT.USE_CASE.CASE1.DESCRIPTION_LINE2",
      "ABOUT.USE_CASE.CASE1.DESCRIPTION_LINE3",
      "ABOUT.USE_CASE.CASE1.DESCRIPTION_LINE4",
      "ABOUT.USE_CASE.CASE1.DESCRIPTION_LINE5",
    ],
    image: "ABOUT.USE_CASE.CASE1.IMAGE",
  },
  {
    id: "u002",
    title: "ABOUT.USE_CASE.CASE2.TITLE",
    description: ["ABOUT.USE_CASE.CASE2.DESCRIPTION"],
    image: "ABOUT.USE_CASE.CASE2.IMAGE",
  },
  {
    id: "u003",
    title: "ABOUT.USE_CASE.CASE3.TITLE",
    description: ["ABOUT.USE_CASE.CASE3.DESCRIPTION"],
    image: "ABOUT.USE_CASE.CASE3.IMAGE",
  },
  {
    id: "u004",
    title: "ABOUT.USE_CASE.CASE4.TITLE",
    description: [
      "ABOUT.USE_CASE.CASE4.DESCRIPTION1",
      "ABOUT.USE_CASE.CASE4.DESCRIPTION2",
    ],
    image: "ABOUT.USE_CASE.CASE4.IMAGE",
  },
];

const faqData = [
  {
    id: "q001",
    question: "FAQ.QUESTION1",
    answer: [
      "FAQ.ANSWER1_LINE1",
      "FAQ.ANSWER1_LINE2",
      "FAQ.ANSWER1_LINE3",
      "FAQ.ANSWER1_LINE4",
      "FAQ.ANSWER1_LINE5",
    ],
  },
  {
    id: "q002",
    question: "FAQ.QUESTION2",
    answer: ["FAQ.ANSWER2_LINE1", "FAQ.ANSWER2_LINE2", "FAQ.ANSWER2_LINE3"],
  },
  {
    id: "q003",
    question: "FAQ.QUESTION3",
    answer: [
      "FAQ.ANSWER3_LINE1",
      "FAQ.ANSWER3_LINE2",
      "FAQ.ANSWER3_LINE3",
      "FAQ.ANSWER3_LINE4",
      "FAQ.ANSWER3_LINE5",
    ],
  },
  { id: "q004", question: "FAQ.QUESTION4", answer: ["FAQ.ANSWER4"] },
];

const technologyData = [
  {
    anchor: "distributed-audit",
    title: "TECHNOLOGY.TITLE1",
    description: "TECHNOLOGY.DESCRIPTION1",
    image: "/img/technology01.svg",
  },
  {
    anchor: "zero-knowledge-proof",
    title: "TECHNOLOGY.TITLE2",
    description: "TECHNOLOGY.DESCRIPTION2",
    image: "/img/technology02.svg",
  },
  {
    anchor: "hybrid-chain-evidence",
    title: "TECHNOLOGY.TITLE3",
    description: "TECHNOLOGY.DESCRIPTION3",
    image: "/img/technology03.svg",
  },
];
