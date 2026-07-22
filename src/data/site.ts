export const site = {
  name: "Christopher Fillmore",
  shortName: "CF",
  title: "Software engineer & computational geometer/topologist",
  description:
    "I build reliable software and study the geometry and topology of complex structures.",
  location: "Vienna, Austria",
  availability: "Open to thoughtful collaborations",
  cv: { published: true, path: "CV.pdf" },
  email: {
    address: "cdfillmore@gmail.com",
    // Replace these character codes. Keeping the address out of generated HTML
    // discourages basic scraping; it is decoded only after user interaction.
    local: [99, 100, 102, 105, 108, 108, 109, 111, 114, 101],
    domain: [103, 109, 97, 105, 108, 46, 99, 111, 109],
  },
  profiles: [
    { label: "GitHub", href: "https://github.com/cdfillmore" },
    { label: "LinkedIn", href: "https://at.linkedin.com/in/chris-fillmore-5915ab62" },
    { label: "ORCID", href: "https://orcid.org/0000-0001-7631-2885" },
  ],
  researchThemes: [
    {
      number: "01",
      title: "Computational topology",
      text: "Algorithms and representations that make qualitative structure computable.",
    },
    {
      number: "02",
      title: "Discrete geometry",
      text: "Triangulations, medial structures, and robust geometric computation.",
    },
    {
      number: "03",
      title: "Research software",
      text: "Clear, tested tools that turn mathematical ideas into reproducible systems.",
    },
  ],
  timeline: [
    { period: "May — Present", role: "Software engineering intern", place: "Snapchat Spectacles · Vienna" },
    { period: "2019 — 2025", role: "Ph.D. in Mathematics", place: "Institute of Science and Technology Austria · Klosterneuburg" },
    { period: "2020 — 2024", role: "Teaching assistant", place: "Institute of Science and Technology Austria · Klosterneuburg" },
    { period: "2016 — 2018", role: "M.Sc. in Mathematics", place: "University of Bonn · Bonn" },
    { period: "2014 — 2015", role: "Trade statistician", place: "Australian Department of Foreign Affairs and Trade · Canberra" },
    { period: "2010 — 2013", role: "B.Sc. (Honours) in Mathematics", place: "University of Queensland · Brisbane" },
  ],
} as const;

export const nav = [
  { label: "About me", href: "/" },
  { label: "Publications", href: "/publications/" },
  { label: "Talks", href: "/talks/" },
] as const;
