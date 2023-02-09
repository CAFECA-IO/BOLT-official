export function getPageIndex() {
  return pageIndex;
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
