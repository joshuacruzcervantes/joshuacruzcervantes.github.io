/**
 * =============================================================================
 *  CONTENT CONFIG  —  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CHANGES
 * =============================================================================
 *
 *  Everything the website says lives here. Change a string in this file and it
 *  updates everywhere it appears. You do NOT need to touch any React component
 *  to update your name, bio, skills, certs, projects, or links.
 *
 *  Tips for editing safely:
 *   - Keep the quotes "" around text.
 *   - Items inside [ ] are lists; separate each item with a comma.
 *   - Don't delete the field names on the left of the colon (e.g. `title:`).
 *   - After saving, the dev server reloads automatically.
 *
 *  The `as const` at the very bottom just locks the shape so TypeScript can
 *  help you catch typos — you can ignore it.
 * =============================================================================
 */

export const content = {
  /* ------------------------------------------------------------------ */
  /*  SITE-WIDE / SEO                                                    */
  /* ------------------------------------------------------------------ */
  site: {
    name: "Joshua Cervantes",
    // Shown in the browser tab and search results.
    title: "Joshua Cervantes — IT Instructor & Industry Practitioner",
    description:
      "IT professional with 6 years of hands-on Support & Operations experience, now teaching networking, security, and systems as an IT instructor.",
    // Used by the logo/brand in the navbar. "Sir Vantes" is the teaching brand.
    brandShort: "Sir Vantes",
    url: "https://joshuacervantes.online", // the live site (custom domain on GitHub Pages)
  },

  /* ------------------------------------------------------------------ */
  /*  SOCIALS  —  one shared list, used by Contact and the Footer.       */
  /*  `icon` picks the brand glyph (see components/SocialLinks.tsx).     */
  /*  Add or reorder freely; both places update automatically.           */
  /* ------------------------------------------------------------------ */
  socials: [
    { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@sir.vantes" },
    { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@ytsirvantes" },
    { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/joshuacruzcervantesx/" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/joshuacruzcervantes/" },
  ],

  /* ------------------------------------------------------------------ */
  /*  NAVIGATION  —  the links in the top bar (anchor to section ids)    */
  /* ------------------------------------------------------------------ */
  nav: [
    { label: "About", href: "/#about" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Labs", href: "/labs/" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ],

  // The prominent button in the navbar (was "View CV"). Sends students to the
  // quiz hub. The hero keeps its own "View CV" CTA for the hiring audience.
  navCta: { label: "Find Your Path", href: "/quiz/" },

  /* ------------------------------------------------------------------ */
  /*  LABS  —  the student playground at /labs                           */
  /*  Each entry becomes a card on the labs page. Add a new lab by       */
  /*  dropping a self-contained HTML file in /public and appending here. */
  /* ------------------------------------------------------------------ */
  labsPage: {
    heading: "Labs Playground",
    kicker: "Hands-on practice",
    intro:
      "Pick a lab and run it in your browser — no sign-in, no installs. Progress saves locally on your device, so you can close the tab and pick up where you left off later.",
  },
  labs: [
    {
      title: "Network+ N10-009 Trainer",
      topic: "CompTIA Network+",
      blurb:
        "An adaptive single-page trainer covering 45 high-miss concepts across 8 scaffolded modules — subnetting, routing, DNS, cloud, VLANs, wireless, and ops drills. Each item closes when you answer it correctly twice in a row.",
      tags: ["Network+", "Subnetting", "Routing", "VLANs", "Cloud"],
      href: "/netplus-trainer.html",
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  QUIZZES  —  the quiz hub at /quiz                                  */
  /*  Each entry becomes a card. Add a quiz by dropping a self-contained */
  /*  HTML file in /public and appending here (same idea as labs).       */
  /* ------------------------------------------------------------------ */
  quizPage: {
    kicker: "Not sure yet? Start here",
    heading: "Find Your Path",
    intro:
      "Two quick quizzes to help you decide — no sign-up, instant result. One for students still choosing a college course, one for those already headed into IT.",
  },
  quizzes: [
    {
      title: "Alin sa 4 na landas ang bagay sa'yo?",
      audience: "For anyone choosing between TESDA, DTS, Ladderized, or College",
      blurb:
        "TESDA NC, Dual Training System, Ladderized Program, o College Diploma — magkaiba ang tulin, gastos, at destinasyon. Sagutin ang 6 na tanong at makakuha ng suhestiyon, kasama ang mga opisyal na link kung saan mag-che-check.",
      tags: ["4 pathways", "TESDA · DTS · Ladderized · College", "6 tanong"],
      href: "/pathways-quiz.html",
    },
    {
      title: "Anong kurso ang para sa'yo?",
      audience: "For incoming college students",
      blurb:
        "Hindi pa sigurado kung anong course kukunin? Sagutin ang 8 tanong at bibigyan ka namin ng suhestiyon — BSIT, BSCS, BSIS, BSCpE, Data Science, at iba pa. Walang tama o mali.",
      tags: ["Course finder", "Senior high → college", "8 tanong"],
      href: "/course-quiz.html",
    },
    {
      title: "Anong IT path ang bagay sa'yo?",
      audience: "For future IT pros",
      blurb:
        "Papasok ka na ba sa IT o nag-aaral na? Alamin kung aling sangay ang bagay sa'yo — Support, Networking, Security, Data, o Web/Dev — kasama ang totoong sahod sa PH.",
      tags: ["IT specialization", "Career path", "6 tanong"],
      href: "/it-path-quiz.html",
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  GUIDE  —  the paid PDF sales page at /guide                        */
  /*                                                                    */
  /*  This is a MANUAL GCash flow (the site is static and can't verify  */
  /*  payments). A buyer pays via GCash, sends you the receipt, and you */
  /*  reply with the PDF. Everything below is editable text.            */
  /*                                                                    */
  /*  IMPORTANT: do NOT put the paid PDF in /public — the URL would be  */
  /*  public and anyone could download it for free. Keep the PDF on     */
  /*  your computer / Google Drive and send it only after payment.      */
  /*  (A GCash QR image IS fine to place in /public/guide/.)            */
  /* ------------------------------------------------------------------ */
  guidePage: {
    kicker: "Digital guide for BSIT students",
    heading: "The Incoming BSIT Survival Guide",
    subheading:
      "Everything I wish someone told me before first year — from a 6-year IT pro turned instructor. Written in plain Taglish so it actually makes sense.",
    // Shown as a badge near the top and again in the payment card.
    price: "₱99",
    priceNote: "Student price · One-time payment · Lifetime access · PDF download",
    format: "PDF · viewable on phone or laptop · yours to keep",

    // "What's inside" — each string becomes a checkmarked line.
    contentsHeading: "What's inside",
    contents: [
      "What BSIT really is — and how it differs from CS and IS",
      "The subjects you'll face year by year, and which ones actually matter",
      "Gear you need vs. what you can skip on a student budget",
      "Free tools & accounts to set up before day one",
      "How to study tech the right way: labs over lectures",
      "Flowcharts & logic — how to think through a problem before you code",
      "Your first code, explained simply — variables, if/else, and loops",
      "Certs worth chasing while still in school (A+, Network+, cloud)",
      "Building a portfolio from year 1 — GitHub, home labs, projects",
      "Common first-year mistakes and how to dodge them",
      "IT career paths after BSIT — with real Philippine salary ranges",
      "My go-to free resources: channels, courses, and communities",
      "Bonus — a Quick-Start Checklist to set up before day one",
      "Bonus — a plain-Taglish glossary of common IT terms",
    ],

    // ---- Sneak peek (blurred preview images) -------------------------
    // These images live in /public/guide/ and are safe to be public —
    // the teaser page is blurred so the full text can't be read for free.
    previewHeading: "Silipin muna",
    previewNote:
      "Ito ang cover at unang chapter ng guide. Ang buong 21 na pahina — makukuha mo pagkatapos mong mabili.",
    coverImage: "/guide/guide-cover.png",
    peekImage: "/guide/guide-peek.png",
    peekBadge: "🔒 21 pages · buksan lahat sa ₱99",

    // "Who it's for" — each string becomes a bullet.
    audienceHeading: "Who it's for",
    audience: [
      "Incoming first-year BSIT students",
      "Senior-high grads still deciding on an IT course",
      "Parents or guardians helping a student get ready",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  PAYMENT  —  ONE shared GCash checkout for ALL paid products        */
  /*                                                                    */
  /*  Manual flow: buyer pays via GCash, sends proof, you send the file.*/
  /*  Used by both the /support page and each product page. Edit here ONCE */
  /*  and it updates everywhere.                                        */
  /*                                                                    */
  /*  IMPORTANT: never put a paid file (PDF/video) in /public — the URL */
  /*  would be public and downloadable for free. Keep paid files on     */
  /*  your computer / Drive and send them only after payment.           */
  /* ------------------------------------------------------------------ */
  payment: {
    heading: "How to buy (GCash)",
    intro:
      "Manual muna tayo: bayad via GCash, send mo ang resibo, ipapadala ko agad ang binili mo. Simple lang.",
    gcashName: "Joshua C. Cervantes",
    gcashNumber: "0975 966 0475",
    // Optional: drop a GCash QR image at /public/guide/gcash-qr.png and set
    // the path here. Leave as "" to hide the QR box.
    gcashQr: "",
    steps: [
      "Send the exact price to the GCash number above (account name: Joshua C. Cervantes).",
      "Screenshot your GCash receipt / reference number.",
      "Message me the screenshot (Messenger or email), and tell me which product you bought + the email to send it to.",
      "I'll reply with your file/access within 24 hours — usually much faster.",
    ],
    messengerLabel: "Send proof on Messenger",
    // Facebook profile — clicking opens your profile so buyers can message you.
    messengerHref: "https://www.facebook.com/joshuacruzcervantesx/",
    emailLabel: "Or email your proof to",
    email: "yt.sirvantes@gmail.com",
    emailSubject: "GCash proof of payment — Sir Vantes",
    note: "Not sure yet? Message me first — happy to answer questions before you buy.",
  },

  /* ------------------------------------------------------------------ */
  /*  SUPPORT  —  the storefront at /support (all paid products here)    */
  /*                                                                    */
  /*  Add a product by appending to `products`. status: "available"     */
  /*  makes the button link to `href`; "coming-soon" shows a disabled   */
  /*  badge instead. Leave `image` as "" to show a colored placeholder. */
  /* ------------------------------------------------------------------ */
  support: {
    navLabel: "Support",
    kicker: "Support Sir Vantes",
    heading: "Support",
    intro:
      "Everything here I make myself — on my own time, around a full-time job. That's exactly why I'd rather hand you a real guide or course than take your money for nothing. I don't do donations; I want a fair exchange — you get genuine value, and that support keeps me building more. Pay via GCash, instant access.",

    // ---- Coming-soon interest capture --------------------------------
    // Each "Coming soon" product shows a button that lets people tell you
    // they want it — so you know what to build next.
    //
    // Paste a form link in `interestUrl` (Google Forms recommended: free,
    // and responses collect in a Google Sheet you can sort by product).
    // Put the token PRODUCT anywhere in the link and it's replaced with the
    // product name, so you can pre-fill "which product" automatically.
    //
    // Leave interestUrl as "" and the button falls back to a pre-filled
    // email to you — so it works even before you make the form.
    interestUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScPQ0WkE2NuTvBATLdnt0NvqnwuDoOIK7fjY-zOBDIGPplw-g/viewform",
    interestLabel: "Notify me",

    // ---- Free downloads (lead magnets) -------------------------------
    // Genuinely useful free PDFs that each point to a paid product.
    // These files ARE meant to be public — they live in /public/free/.
    freebiesHeading: "Start free",
    freebiesNote:
      "Free downloads, no sign-up. Genuinely useful on their own — and the paid versions go deeper.",
    freebies: [
      {
        title: "Subnetting Made Simple",
        kind: "Free · Networking",
        blurb:
          "The block-size method that finally makes subnetting click — with worked examples and quick practice. The topic everyone fears, simplified.",
        file: "/free/Subnetting-Made-Simple-Free.pdf",
        leadsTo: "Cheat-Sheet & Practice packs",
      },
      {
        title: "Before You Start BSIT",
        kind: "Free · For students",
        blurb:
          "7 things to set up this summer so you walk into first year already ahead — accounts, tools, and how to study tech.",
        file: "/free/BSIT-Summer-Head-Start-Free.pdf",
        leadsTo: "BSIT Survival Guide",
      },
      {
        title: "5 IT Resume Mistakes",
        kind: "Free · Careers",
        blurb:
          "The mistakes that get fresh-grad resumes ignored in seconds — and the simple fix for each, from the hiring side.",
        file: "/free/5-IT-Resume-Mistakes-Free.pdf",
        leadsTo: "Resume + LinkedIn Guide",
      },
      {
        title: "BSIT Survival Guide — Free Trial",
        kind: "Free · For students",
        blurb:
          "The first half of the guide, free — Chapters 1 to 6 plus the intro and full contents. Read the real thing, then unlock the remaining 6 chapters (coding, certs, portfolio, career paths + PH salaries) in the ₱99 version.",
        file: "/free/The-Incoming-BSIT-Survival-Guide-Free-Trial.pdf",
        leadsTo: "BSIT Survival Guide",
      },
    ],

    products: [
      {
        title: "The Incoming BSIT Survival Guide",
        kind: "PDF Guide",
        price: "₱99",
        priceNote: "Student price",
        blurb:
          "21-page Taglish guide para sa mga papasok na BSIT — subjects year-by-year, gear, certs, portfolio, career paths na may totoong sahod sa PH, plus quick-start checklist at IT glossary.",
        tags: ["PDF", "21 pages", "Taglish"],
        slug: "guide",
        image: "/guide/guide-cover.png",
        href: "/guide/",
        cta: "View & buy",
        status: "available",
      },
      {
        title: "BSIT Head-Start Video Course",
        kind: "Video Course",
        price: "₱999",
        priceNote: "Lifetime access",
        blurb:
          "Step-by-step video lessons — from scratch to 1st year ready. Hands-on labs, walkthroughs, and real-world tips from 6 years of experience.",
        tags: ["Video", "Lifetime", "Beginner"],
        slug: "",
        image: "",
        href: "",
        cta: "Coming soon",
        status: "coming-soon",
      },
      {
        title: "Cert Cheat-Sheet & Reviewer Pack",
        kind: "Reviewer Pack",
        price: "₱49",
        priceNote: "Printable + digital",
        blurb:
          "Quick-reference reviewers for your cert exams — subnetting, ports & protocols, and flashcards. Printable and phone-friendly.",
        tags: ["Reviewer", "Cheat sheet", "Certs"],
        slug: "cheat-sheet",
        image: "/support/cheat-sheet-cover.png",
        href: "/support/cheat-sheet/",
        cta: "View & buy",
        status: "available",
      },
      {
        title: "Resume + LinkedIn Guide for IT Fresh Grads",
        kind: "PDF Guide",
        price: "₱129",
        priceNote: "PDF + templates",
        blurb:
          "How to build an IT resume and LinkedIn profile that actually gets callbacks — with templates and real examples.",
        tags: ["Resume", "LinkedIn", "Fresh grad"],
        slug: "resume-linkedin",
        image: "/support/resume-linkedin-cover.png",
        href: "/support/resume-linkedin/",
        cta: "View & buy",
        status: "available",
      },
      {
        title: "IT Cert Practice Exam Pack",
        kind: "Practice Exams",
        price: "₱149",
        priceNote: "50 questions + answers",
        blurb:
          "50 practice questions with clear explanations to get you exam-ready for CompTIA A+ and Network+.",
        tags: ["Practice", "A+", "Network+"],
        slug: "practice-exams",
        image: "/support/practice-exams-cover.png",
        href: "/support/practice-exams/",
        cta: "View & buy",
        status: "available",
      },
      {
        title: "Guide + Video Course Bundle",
        kind: "Bundle",
        price: "₱1,099",
        priceNote: "Save ₱99",
        blurb:
          "The BSIT Survival Guide plus the full video course, bundled together at a lower price than buying both.",
        tags: ["Bundle", "Best value"],
        slug: "",
        image: "",
        href: "",
        cta: "Coming soon",
        status: "coming-soon",
      },
      {
        title: "1-on-1 Mentoring Session",
        kind: "Mentoring",
        price: "₱500",
        priceNote: "Per session",
        blurb:
          "A private session with Sir Vantes — mock interview, resume review, or career advice. Book a slot and bring your questions.",
        tags: ["1-on-1", "Career", "Live"],
        slug: "",
        image: "",
        href: "",
        cta: "Coming soon",
        status: "coming-soon",
      },
      {
        title: "Monthly Mentorship Community",
        kind: "Membership",
        price: "₱149",
        priceNote: "Per month",
        blurb:
          "Join the community — monthly Q&A, guidance, and support while you study or job-hunt. Cancel anytime.",
        tags: ["Community", "Discord", "Monthly"],
        slug: "",
        image: "",
        href: "",
        cta: "Coming soon",
        status: "coming-soon",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  PRODUCT DETAILS  —  extra copy for each product's own page         */
  /*  (/support/<slug>). Keyed by the product `slug`. Cover/peek images  */
  /*  are derived from the slug: /support/<slug>-cover.png & -peek.png.  */
  /* ------------------------------------------------------------------ */
  productDetails: {
    "cheat-sheet": {
      subheading:
        "The tables and facts you keep forgetting — subnetting, ports, OSI, commands, and flashcards. Made to review fast, print, or keep on your phone.",
      format: "PDF · quick-reference · printable & phone-friendly",
      contentsHeading: "What's inside",
      contents: [
        "Subnetting cheat sheet — mask chart, CIDR → hosts, the magic numbers",
        "Ports & protocols table (the one everyone gets asked)",
        "OSI model with an easy mnemonic",
        "Private & special IP ranges (incl. APIPA & loopback)",
        "Essential Windows/Linux troubleshooting commands",
        "Rapid-fire flashcards to test yourself",
      ],
      peekBadge: "🔒 Full pack · unlock for ₱49",
    },
    "resume-linkedin": {
      subheading:
        "How to build an IT resume and LinkedIn profile that actually get interviews — even with no work experience yet. Templates and real before/after examples included.",
      format: "PDF · guide + fill-in template · examples",
      contentsHeading: "What's inside",
      contents: [
        "The resume structure that gets callbacks (with no experience)",
        "Bullet formulas — weak vs. strong, with real examples",
        "How to pass the ATS (resume-scanning software)",
        "A copy-paste fill-in resume template",
        "LinkedIn profile optimization (headline, about, skills)",
        "A pre-apply checklist to run every time",
      ],
      peekBadge: "🔒 Full guide · unlock for ₱129",
    },
    "practice-exams": {
      subheading:
        "50 original practice questions with clear explanations across 8 domains — get exam-ready for CompTIA A+ and Network+ by learning the 'why,' not just the answer.",
      format: "PDF · 50 questions · answers + explanations",
      contentsHeading: "What's covered",
      contents: [
        "Networking fundamentals & the OSI model",
        "IP addressing & subnetting (IPv4 + IPv6)",
        "Ports & protocols",
        "Routing, switching & VLANs",
        "Wireless & security basics",
        "Troubleshooting, tools, hardware & cloud",
      ],
      peekBadge: "🔒 All 50 questions · unlock for ₱149",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  1. HERO                                                            */
  /* ------------------------------------------------------------------ */
  hero: {
    // Small label above the name.
    eyebrow: "IT Instructor • 6 Years in the Field",
    name: "Joshua Cervantes",
    // The one-line positioning statement that speaks to BOTH audiences.
    tagline:
      "IT Instructor and Industry Practitioner. I teach networking, security, and systems from 6 years in the field, not from a textbook.",
    // A short supporting sentence under the tagline.
    subtext:
      "Enterprise IT Support & Operations turned educator. I translate real-world systems into lessons students can actually use.",
    // Call-to-action buttons.
    ctaPrimary: { label: "View CV", href: "/cv.pdf" }, // downloads the PDF in /public
    ctaSecondary: { label: "Follow on TikTok", href: "https://www.tiktok.com/@sir.vantes" },
    ctaTertiary: { label: "Follow me on YouTube", href: "https://www.youtube.com/@ytsirvantes" },
  },

  /* ------------------------------------------------------------------ */
  /*  TERMINAL  —  content revealed by the interactive terminal          */
  /*  (desktop only). `ls` lists these "files"; `cat <name>` prints them. */
  /* ------------------------------------------------------------------ */
  terminal: {
    // One-line bio printed by the `whoami` command.
    whoami:
      "joshua — IT Support & Operations (6 yrs) → IT Instructor. Networking, security, systems. Bilingual EN/Tagalog.",
    // The "files" the terminal exposes. The `name` is what users type after
    // `cat`. Use \n inside body strings to create new lines.
    files: [
      {
        name: "about.txt",
        body:
          "Joshua Cervantes\n6 years of hands-on enterprise IT (Support + Operations).\nNow teaching IT as an instructor/faculty.\nI bring the field into the classroom: real incidents, real fixes, real systems.",
      },
      {
        name: "skills.json",
        // Printed as-is, so it's formatted to look like JSON.
        body:
          '{\n  "networking": ["TCP/IP", "OSI", "VLANs", "Routing", "Cisco Packet Tracer"],\n  "systems":    ["Active Directory", "Windows Server", "Group Policy"],\n  "security":   ["Hardening", "Endpoint", "Security Fundamentals"],\n  "cloud":      ["Azure (AZ-900)", "Oracle Cloud (OCI)"],\n  "scripting":  ["PowerShell", "Bash"]\n}',
      },
      {
        name: "certs.md",
        body:
          "# Certifications\n- CompTIA A+ (2025)\n- CompTIA Network+ (in progress)\n- Google Cybersecurity Professional\n- Microsoft Azure Fundamentals (AZ-900)\n- Oracle Cloud Infrastructure Foundations\n- Master in Information Technology (in progress)",
      },
      {
        name: "contact.txt",
        body:
          "email:    yt.sirvantes@gmail.com\nyoutube:  youtube.com/@ytsirvantes\ntiktok:   tiktok.com/@sir.vantes\nlinkedin: linkedin.com/in/joshuacruzcervantes",
      },
    ],
    // A "directory" listed by `ls` — typing `cat projects/` hints to scroll.
    directories: ["projects/"],
  },

  /* ------------------------------------------------------------------ */
  /*  2. ABOUT                                                           */
  /* ------------------------------------------------------------------ */
  about: {
    heading: "About",
    // The small accent label above the big heading (adds variety per section).
    kicker: "Who I am",
    // Your photo lives at /public/profile.jpg.
    photo: "/profile.jpg",
    photoAlt: "Portrait of Joshua Cervantes",
    // Each string is a paragraph.
    paragraphs: [
      "I spent six years on the front lines of enterprise IT, doing Support and Operations, keeping systems, networks, and end users running. I've deployed and managed fleets of workstations, defended uptime, and dealt with the kind of messy, real-world problems that never show up in a textbook.",
      "Now I'm putting that experience into teaching. What makes me a strong instructor isn't theory, it's that I've actually done the work. I can show students how a concept plays out in a live environment, why it matters, and where it breaks.",
      "I teach bilingually in English and Tagalog, and I've worked with learners at every level, from absolute beginners touching a command line for the first time to students preparing for industry certifications.",
    ],
    // Small highlight chips shown next to the photo.
    highlights: [
      "6 years enterprise IT",
      "Support + Operations",
      "Bilingual EN / Tagalog",
      "All learner levels",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  3. TEACHING  —  sells the academe pivot                            */
  /* ------------------------------------------------------------------ */
  teaching: {
    heading: "Teaching",
    kicker: "What I teach",
    intro:
      "I teach the subjects I've lived. Every topic below comes with field stories, live demos, and the context that turns memorization into understanding — delivered bilingually in English and Tagalog.",
    // Photos from a live teaching demo. Drop images in /public/teaching/ and
    // update the src/alt below. Keep alt text descriptive for accessibility.
    gallery: {
      heading: "Live teaching demo",
      caption:
        "Delivering live IT lessons — slides, whiteboard, and a full class.",
      images: [
        {
          src: "/teaching/teaching-demo-1.jpg",
          alt: "Joshua Cervantes presenting an IT lesson with slides to a class in a computer lab",
        },
        {
          src: "/teaching/teaching-demo-2.jpg",
          alt: "Joshua Cervantes explaining a concept at the whiteboard during a live teaching demo",
        },
        {
          src: "/teaching/teaching-demo-3.jpg",
          alt: "Joshua Cervantes teaching a full class of students in a computer lab",
        },
      ],
    },
    // Subjects/courses you teach. `icon` picks one of the line icons drawn in
    // components/Teaching.tsx — valid values: "network", "hardware",
    // "security", "code". (If you add a new subject, reuse one of these.)
    subjects: [
      {
        icon: "network",
        title: "Networking",
        detail:
          "OSI & TCP/IP models, subnetting, routing & switching, VLANs — with hands-on labs in Cisco Packet Tracer.",
      },
      {
        icon: "hardware",
        title: "Hardware & Computer Systems Servicing",
        detail:
          "PC assembly, troubleshooting, and maintenance aligned to CompTIA A+ competencies.",
      },
      {
        icon: "security",
        title: "Security Fundamentals",
        detail:
          "Core security concepts, threats, hardening, and safe operations practices for everyday IT.",
      },
      {
        icon: "code",
        title: "Intro to Programming",
        detail:
          "Foundations of programming and problem solving in C, C++, C#, Java, PHP, and SQL.",
      },
    ],
    // The YouTube call-out card.
    youtube: {
      channelName: "Sir Vantes",
      channelUrl: "https://www.youtube.com/@ytsirvantes",
      tiktokUrl: "https://www.tiktok.com/@sir.vantes",
      // Your channel ID (starts with "UC..."), used to build the "uploads"
      // playlist embed below so the preview always shows your latest video
      // with zero manual updates. Find it via a channel-ID lookup tool, or
      // view page source on your channel and search for "externalId".
      channelId: "UCVltEiWbsqnMqarwjEK7iAw",
      // Optional: paste a specific YouTube video ID to pin one video instead
      // of always showing the latest upload. Find it in the video URL after
      // "v=" (e.g. dQw4w9WgXcQ). Leave "" to auto-show the newest upload.
      demoVideoId: "",
      blurb:
        "Watch a live teaching demo and see how I break down complex IT topics into clear, practical lessons.",
    },
    // The TikTok call-out card. Uses TikTok's official "Creator Profile
    // Embed" widget, which auto-updates with your live follower count and
    // your 10 most recent videos — no manual updates needed here either.
    tiktok: {
      handle: "sir.vantes",
      profileUrl: "https://www.tiktok.com/@sir.vantes",
      blurb:
        "Helping senior high students pick the right course and IT students figure out their next move, straight talk, no sugarcoating. New clips every week.",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  4. TECHNICAL SKILLS                                                */
  /* ------------------------------------------------------------------ */
  skills: {
    heading: "Technical Skills",
    kicker: "What I work with",
    intro:
      "Six years of doing, not just knowing. Grouped by domain — these are tools and systems I've worked with hands-on in production environments.",
    // Headline metrics shown as a stat strip.
    metrics: [
      { value: "99.9%", label: "System uptime maintained" },
      { value: "92%", label: "First-contact resolution" },
      { value: "80+", label: "Workstations deployed" },
    ],
    // Skill groups. Each group is a category with a list of tags.
    groups: [
      {
        category: "Networking",
        items: ["TCP/IP", "OSI Model", "Subnetting", "Routing & Switching", "VLANs", "Cisco Packet Tracer", "DNS / DHCP"],
      },
      {
        category: "Systems & Active Directory",
        items: ["Windows Server", "Active Directory", "Group Policy", "User & Access Management", "Backup & Recovery"],
      },
      {
        category: "Security",
        items: ["Endpoint Security", "Hardening", "Security Fundamentals", "Incident Response", "Patch Management"],
      },
      {
        category: "Operating Systems",
        items: ["Windows", "Linux", "macOS", "Command Line"],
      },
      {
        category: "Programming & Scripting",
        items: ["PowerShell", "Bash", "C / C++", "C#", "Java", "PHP", "SQL"],
      },
      {
        category: "Cloud",
        items: ["Microsoft Azure (AZ-900)", "Oracle Cloud Infrastructure", "Cloud Fundamentals"],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  5. PROJECTS / LABS  —  edit these 3 placeholders with real work    */
  /* ------------------------------------------------------------------ */
  projects: {
    heading: "Projects & Labs",
    kicker: "What I build",
    intro:
      "Hands-on labs and projects — the kind of work I both do and teach.",
    // Put images at /public/projects/<file> (see README). Set link to "" to
    // hide the link button on a card.
    items: [
      {
        title: "Packet Tracer Lab: Multi-VLAN Network",
        description:
          "A segmented campus network with inter-VLAN routing, DHCP, and access control — built and documented in Cisco Packet Tracer as a teaching reference.",
        tags: ["Networking", "Cisco", "VLANs", "Packet Tracer"],
        image: "/projects/placeholder-1.svg",
        link: "",
      },
      {
        title: "Home Lab: Active Directory Domain",
        description:
          "A virtualized Windows Server domain with organizational units, Group Policy, and managed user accounts — used to demo enterprise identity concepts.",
        tags: ["Windows Server", "Active Directory", "Virtualization"],
        image: "/projects/placeholder-2.svg",
        link: "",
      },
      {
        title: "Automation Scripts & Configs",
        description:
          "A collection of PowerShell and Bash scripts for provisioning, backups, and routine maintenance — refined over years of operations work.",
        tags: ["PowerShell", "Bash", "Automation"],
        image: "/projects/placeholder-3.svg",
        link: "",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  6. CERTIFICATIONS                                                  */
  /* ------------------------------------------------------------------ */
  certifications: {
    heading: "Certifications & Education",
    kicker: "Credentials",
    intro: "Credentials that back the experience.",
    // status: "done" shows a checkmark, "progress" shows an in-progress badge.
    items: [
      { name: "CompTIA A+", issuer: "CompTIA", year: "2025", status: "done" },
      { name: "CompTIA Network+", issuer: "CompTIA", year: "", status: "progress" },
      { name: "Google Cybersecurity Professional", issuer: "Google", year: "", status: "done" },
      { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "", status: "done" },
      { name: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle", year: "", status: "done" },
      { name: "Master in Information Technology", issuer: "Graduate Studies", year: "", status: "progress" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  7. CONTACT                                                         */
  /* ------------------------------------------------------------------ */
  contact: {
    heading: "Get in Touch",
    intro:
      "Hiring for a teaching role, or want to talk shop about IT? I'd love to hear from you.",
    email: "yt.sirvantes@gmail.com",
    // Pre-fills the email subject line when someone clicks your address.
    emailSubject: "Hello Joshua — Teaching / IT Opportunity",
    // Social links now live in the shared top-level `socials` list above.
    cvLabel: "Download CV",
    cvHref: "/cv.pdf",
  },

  /* ------------------------------------------------------------------ */
  /*  FOOTER                                                             */
  /* ------------------------------------------------------------------ */
  footer: {
    tagline: "Built and maintained by Joshua Cervantes.",
  },
} as const;

// A handy type export in case you want autocompletion elsewhere.
export type Content = typeof content;
