/**
 * BLOG POSTS
 * ----------
 * Video-led blog for search and discoverability. Each post is data here;
 * the list lives at /blog and each post at /blog/<slug>. Draft content,
 * edit freely. Bodies are simple blocks (h = subheading, p = paragraph).
 */
export type PostBlock = { type: "h" | "p" | "img"; text?: string; src?: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string; // Career | Media | Teaching
  excerpt: string;
  cover?: string;
  video?: { kind: "youtube" | "tiktok"; href: string; youtubeId?: string };
  cta?: { label: string; href: string };
  tags: string[];
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "it-vs-is-vs-cs-vs-cpe",
    title: "IT vs IS vs CS vs CpE: Ano ang pinagkaiba?",
    date: "2026-07-03",
    category: "Career",
    excerpt:
      "The four IT-related degree programs look almost the same from the outside. Here is how they actually differ in focus, workload, and where each one leads.",
    cover: "/media/viral-frv01.jpg",
    video: { kind: "tiktok", href: "https://www.tiktok.com/@sir.vantes/video/7657884987919781128" },
    tags: ["BSIT", "College", "Career"],
    body: [
      { type: "p", text: "Every enrollment season the same question comes up: IT, IS, CS, or CpE? The names blur together, and a wrong guess can cost years. Here is the plain-language difference." },
      { type: "h", text: "The short version" },
      { type: "p", text: "BSIT (Information Technology) is about applying and running technology: networks, systems, security, web and apps, and support. It is the most hands-on, and the most directly tied to the jobs most companies hire for." },
      { type: "p", text: "BSIS (Information Systems) sits between tech and business. You still learn systems, but the focus is how technology serves an organization: processes, data for decisions, and the people side of IT." },
      { type: "p", text: "BSCS (Computer Science) is the theory and the why: algorithms, mathematics, and the foundations of software. It goes deepest into programming and is the path toward research and heavy software engineering." },
      { type: "p", text: "BSCpE (Computer Engineering) is where hardware meets software: circuits, microcontrollers, and embedded systems. If you want to build the devices, not just program them, this is the one." },
      { type: "h", text: "How to choose" },
      { type: "p", text: "Pick by what you want to spend four years doing, not by which sounds most impressive. If you like fixing, building, and running real systems, IT fits. If you like business and data, IS. If you love math and theory, CS. If you want hardware, CpE. All four can lead to good careers; the difference is the daily work along the way." },
    ],
  },
  {
    slug: "magkano-ang-kita-sa-it",
    title: "Magkano ba talaga ang kita sa IT?",
    date: "2026-07-05",
    category: "Career",
    excerpt:
      "Real, rough Philippine salary ranges for IT roles, from fresh-grad support to the specialized paths that pay the most.",
    cover: "/media/cover-ep02.jpg",
    video: { kind: "tiktok", href: "https://www.tiktok.com/@sir.vantes/video/7658531466141338898" },
    tags: ["Salary", "Career", "Philippines"],
    body: [
      { type: "p", text: "Salary is the question everyone wants answered and nobody posts honestly. Here are rough monthly ranges in the Philippines. Treat them as starting points: company, location, and skills move these a lot." },
      { type: "h", text: "Entry level" },
      { type: "p", text: "Fresh-grad IT support and helpdesk roles typically start around PHP 18,000 to 25,000 a month. It is the most common first job and the fastest way in." },
      { type: "h", text: "A few years in" },
      { type: "p", text: "Network and systems administration usually lands around PHP 25,000 to 45,000 once you have real experience and a certification or two." },
      { type: "h", text: "Specialized paths" },
      { type: "p", text: "Security, cloud, and data roles are where pay climbs fastest, often PHP 40,000 to 80,000 and higher. Remote work for foreign companies can pay well above local rates for the same skills." },
      { type: "p", text: "The pattern is simple: the closer your work is to a specific, in-demand skill, the more you are paid. Certifications and a visible portfolio move you up faster than years alone." },
    ],
  },
  {
    slug: "every-it-job-ranked",
    title: "Every IT job, ranked S to F",
    date: "2026-07-11",
    category: "Career",
    excerpt:
      "A tier list of entry-level IT jobs, ranked by how easy they are to get into and how much room they give you to grow.",
    cover: "/media/cover-tier01.jpg",
    video: { kind: "tiktok", href: "https://www.tiktok.com/@sir.vantes/video/7662373231122205960" },
    tags: ["Tier List", "Career", "Entry-level"],
    body: [
      { type: "p", text: "A tier list is not about which job is good or bad. It ranks entry-level IT roles by two things that matter when you are starting out: how accessible the job is to a fresh graduate, and how much it sets you up for the next step." },
      { type: "p", text: "Support and helpdesk rank high for accessibility: almost anyone can start here, and it teaches you how real systems break. Networking and systems administration sit a notch up, harder to enter but with a clear path forward." },
      { type: "p", text: "Security, cloud, and data roles are lower on accessibility, since they usually want experience first, but highest on growth and pay. The move is to enter where you can, then climb toward where you want to be." },
      { type: "p", text: "Watch the full ranking in the video, then use it to plan your first two years, not just your first job." },
    ],
  },
  {
    slug: "choosing-your-it-path",
    title: "TESDA, Diploma, DTS, or Ladderized: which IT path fits you?",
    date: "2026-07-09",
    category: "Career",
    excerpt:
      "There is more than one way into IT. Here are the four main routes and the trade-offs in speed, cost, and how far each can take you.",
    cover: "/media/cover-ep03.jpg",
    cta: { label: "Take the pathways quiz", href: "/quiz/" },
    tags: ["TESDA", "College", "Pathways"],
    body: [
      { type: "p", text: "College is not the only door into IT. Four routes lead in, and each trades something off." },
      { type: "h", text: "The four routes" },
      { type: "p", text: "TESDA (NC certifications) is the fastest and cheapest. You gain a specific, job-ready skill in months. The ceiling is lower for roles that require a degree, but it gets you working sooner." },
      { type: "p", text: "A college diploma (BSIT and the rest) is the longest and most expensive, but it opens the widest set of doors, including roles and employers that require a degree." },
      { type: "p", text: "DTS (Dual Training System) mixes school with paid work in a company, so you earn and build experience while studying. It is practical and connected to real hiring." },
      { type: "p", text: "Ladderized programs let you step off with a certificate and step back on later, stacking credentials toward a degree over time. Good if you need to work and study in stages." },
      { type: "h", text: "Not sure which fits?" },
      { type: "p", text: "The right route depends on your time, money, and goal. Take the quick pathways quiz on this site to get a starting suggestion, with official links to check." },
    ],
  },
  {
    slug: "as-seen-on-net25-kada-umaga",
    title: "As seen on NET25 Kada Umaga: talking AI on national TV",
    date: "2026-09-22",
    category: "Media",
    excerpt:
      "I was invited onto NET25's Kada Umaga as a resource person on artificial intelligence. Here is what we talked about, and how it happened.",
    cover: "/media/net25-panel.jpg",
    video: { kind: "youtube", href: "https://www.youtube.com/watch?v=8mToSdE6XFU", youtubeId: "8mToSdE6XFU" },
    tags: ["NET25", "AI", "Media"],
    body: [
      { type: "p", text: "On September 22, 2026, I joined NET25's Kada Umaga live as the resource person for a segment on super intelligent AI, a roughly twenty-minute conversation with the three hosts." },
      { type: "img", src: "/media/net25-studio.jpg", caption: "On the Kada Umaga panel with the hosts, NET25." },
      { type: "p", text: "We kept it understandable for a general audience: the difference between narrow AI, artificial general intelligence, and superintelligence, two live demonstrations of generative AI tools, and an honest look at which jobs are most and least exposed to automation." },
      { type: "p", text: "The invitation came through the Sir Vantes channel, which is the whole point of making free IT content: it reaches people, and sometimes it reaches a national broadcast. The hosts invited me back for a future segment." },
      { type: "img", src: "/media/net25-studio-2.jpg", caption: "On set during the taping." },
      { type: "p", text: "Watch the full segment above." },
    ],
  },
  {
    slug: "why-i-teach-it",
    title: "Why I teach IT, and where I am headed",
    date: "2026-10-06",
    category: "Teaching",
    excerpt:
      "I spent six years in the industry before I ever stood in front of a class. Here is why I made the switch, and the plan from here.",
    cover: "/media/hero-portrait.jpg",
    tags: ["Teaching", "Career", "MSIT"],
    body: [
      { type: "p", text: "I did not start in teaching. I spent six years in enterprise IT, in support and operations, before I stood in front of a class. That order matters to me: I teach the work because I did the work." },
      { type: "img", src: "/teaching/teaching-demo-1.jpg", caption: "In the classroom: slides, whiteboard, and a full section." },
      { type: "p", text: "Teaching is the career now, not a side job. I teach at ACLC Baliuag, and I am taking my Master of Science in Information Technology at PUP, with a doctorate as the long-term goal." },
      { type: "img", src: "/teaching/teaching-demo-2.jpg", caption: "Explaining a concept at the board during a live demo." },
      { type: "p", text: "The free content, the channel, and the reviewers all come from one belief: a lot of capable students struggle in IT not because they cannot do it, but because nobody explained it plainly, or they could not afford the materials. I can fix part of that." },
      { type: "img", src: "/teaching/teaching-demo-3.jpg", caption: "A full class in the computer lab." },
      { type: "p", text: "So the plan is simple. Keep teaching, keep the explanations free, finish the graduate work, and keep getting better at the one thing I want to be known for." },
    ],
  },
];
