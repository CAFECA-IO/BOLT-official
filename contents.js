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

const faqData = [
  {
    question: "FAQ.question1",
    answer: "FAQ.answer1",
  },
  {
    question: "FAQ.question2",
    answer: "FAQ.answer2",
  },
  {
    question: "FAQ.question3",
    answer: "FAQ.answer3",
  },
  {
    question: "FAQ.question4",
    answer: "FAQ.answer4",
  },
];

const technologyData = [
  {
    anchor: "distributed-audit",
    title: "technology.title1",
    description: "technology.description1",
    image: "/img/technology01.svg",
  },
  {
    anchor: "zero-knowledge-proof",
    title: "technology.title2",
    description: "technology.description2",
    image: "/img/technology02.svg",
  },
  {
    anchor: "hybrid-chain-evidence",
    title: "technology.title3",
    description: "technology.description3",
    image: "/img/technology03.svg",
  },
];
