export const socials = [
  {
    name: "GitHub",
    icon: "lucide:github",
    link: "https://github.com/yashash-pugalia",
  },
  {
    name: "LinkedIn",
    icon: "lucide:linkedin",
    link: "https://www.linkedin.com/in/yashash-pugalia",
  },
  {
    name: "X (Twitter)",
    icon: "lucide:twitter",
    link: "https://x.com/yashash_pugalia",
  },
  {
    name: "Instagram",
    icon: "lucide:instagram",
    link: "https://www.instagram.com/yashash_pugalia/",
  },
  {
    name: "Discord",
    icon: "ic:outline-discord",
    link: "https://discord.com/users/759823534100316200",
  },
  {
    name: "YouTube",
    icon: "lucide:youtube",
    link: "https://www.youtube.com/@yashashpugalia",
  },
  {
    name: "Email",
    icon: "lucide:mail",
    link: "mailto:yashash1511@gmail.com",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  linkPerson: string;
  avatar: string;
  link?: string;
  workIds?: string[];
  workPageOnly?: boolean;
};

export function testimonialSlug(name: string): string {
  return name.toLowerCase().replace(/ /g, "-");
}

export function getTestimonialsForMainPage(): Testimonial[] {
  return testimonials.filter((t) => !t.workPageOnly);
}

export const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/yashash-pugalia/details/recommendations/";

const workTestimonialOrder: Record<string, string[]> = {
  haast: ["jim-kelly"],
  "realm-labs": ["will-yoo"],
  "windows11-web": [
    "guillermo-rauch",
    "rich-harris",
    "eric-simons",
    "rohan-gupta",
  ],
};

export function getTestimonialsForWorkId(workId: string): Testimonial[] {
  const order = workTestimonialOrder[workId];
  if (!order) return [];
  const matching = testimonials.filter((t) => t.workIds?.includes(workId));
  return order
    .map((slug) => matching.find((t) => testimonialSlug(t.name) === slug))
    .filter((t): t is Testimonial => t != null);
}

export const testimonials: Testimonial[] = [
  {
    name: "Julie Zhuo",
    role: "Co-Founder Sundial | ex-VP Design Facebook",
    quote:
      "Love your work! Especially your dedication to building with craft and creative exploration.",
    linkPerson: "https://www.linkedin.com/in/julie-zhuo/",
    avatar: "https://unavatar.io/x/joulee",
  },
  {
    name: "Guillermo Rauch",
    role: "CEO Vercel | Creator Next.js",
    quote:
      "Well played https://win11-svelte.vercel.app <br> Also: modern web browsers are engineering marvels",
    link: "https://x.com/rauchg/status/1656493176088150017",
    linkPerson: "https://x.com/rauchg",
    avatar: "https://unavatar.io/x/rauchg",
    workIds: ["windows11-web"],
  },
  {
    name: "Eric Simons",
    role: "CEO Bolt.new",
    quote:
      "Great work on this @yashash_pugalia!, <br> One idea I had - you could even power the file system and standalone terminal app using the http://webcontainers.io api 👀",
    link: "https://x.com/EricSimons/status/1656644824190308352",
    linkPerson: "https://www.linkedin.com/in/eric-simons-a464a664/",
    avatar: "https://unavatar.io/linkedin/eric-simons-a464a664",
    workIds: ["windows11-web"],
  },
  {
    name: "Rich Harris",
    role: "Creator Svelte",
    quote:
      "i love the 'build a pretend OS in svelte' trend — kudos  @yashash_pugalia",
    link: "https://x.com/Rich_Harris/status/1657097805733715987",
    linkPerson: "https://x.com/Rich_Harris",
    avatar: "https://unavatar.io/x/Rich_Harris",
    workIds: ["windows11-web"],
  },
  {
    name: "Will Yoo",
    quote:
      "I want to say you're one of the most talented young engineers I've met, you make some engineers and even founders I've worked with look like amateurs. I highly encourage you to take risks, and do big things with your life. I'm always here to support you. Let's win together.",
    role: "Co-Founder Unto Labs, Thru",
    linkPerson: "https://www.linkedin.com/in/bywillyoo/",
    avatar: "https://unavatar.io/linkedin/bywillyoo",
    workIds: ["realm-labs"],
  },
  {
    name: "Jim Kelly",
    quote:
      "I've had the absolute pleasure of working alongside Yashash at Haast for the past two years. During this period of time I've watched Yashash grow alongside the organisation and continue to grow evermore capable as a frontend developer.<br><br>Yashash has a solid understanding of frontend development cycles and collaborated efficiently with our design team to build smooth, responsive interfaces. He knows how to push through problems independently and exactly when to ask for guidance to stay unblocked. He brings fantastic energy to the team, and I have absolutely no doubt he has a bright trajectory ahead of him. Any engineering team would be incredibly lucky to have him!",
    role: "Staff Software Engineer @ Haast",
    link: LINKEDIN_RECOMMENDATIONS_URL,
    linkPerson: "https://www.linkedin.com/in/jimkellyt/",
    avatar: "https://unavatar.io/linkedin/jimkellyt",
    workIds: ["haast"],
    workPageOnly: true,
  },
  // {
  //   name: "David Peng",
  //   role: "Senior Software Engineer @ Haast",
  //   quote: "You're a one man frontend team 🫡",
  //   linkPerson: "https://www.linkedin.com/in/david-peng-502747137/",
  //   avatar: "https://unavatar.io/linkedin/david-peng-502747137",
  //   workIds: ["haast"],
  // },
  {
    name: "Rohan Gupta",
    quote:
      "I had the chance to work closely with Yashash on the Windows 11 Web project, and it was honestly one of those rare collaborations where things just click.<br><br>What stood out immediately was his ability to take complex ideas and turn them into fast, polished, and highly intuitive user experiences. He doesn't just \"build UI\" — he thinks deeply about performance, scalability, and how real users will interact with the product.<br><br>Beyond the technical side, Yashash is great to work with — clear communicator, thoughtful in discussions, and someone who genuinely takes ownership of what he builds.<br><br>If you're looking for someone who can own frontend systems end-to-end and ship high-quality products at scale, Yashash is that person.",
    role: "Software Engineer @ Microsoft",
    link: LINKEDIN_RECOMMENDATIONS_URL,
    linkPerson: "https://www.linkedin.com/in/rohan1176/",
    avatar: "https://unavatar.io/github/blueedgetechno",
    workIds: ["windows11-web"],
    workPageOnly: true,
  },
];
