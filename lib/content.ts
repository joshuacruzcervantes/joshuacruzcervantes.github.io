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
    title: "Joshua Cervantes | IT Instructor & Industry Practitioner",
    description:
      "IT instructor at ACLC Baliuag and MSIT student at PUP, with 6 years of enterprise IT Support and Operations experience. I teach networking, security, programming, and systems.",
    // Used by the logo/brand in the navbar. "Sir Vantes" is the teaching brand.
    brandShort: "Sir Vantes",
    url: "https://joshuacervantes.online", // the live site (custom domain on GitHub Pages)
    orcidId: "0009-0000-5226-5244",
    orcidUrl: "https://orcid.org/0009-0000-5226-5244",
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
    { label: "Teaching", href: "/#teaching" },
    { label: "Teaching Record", href: "/teaching-record/" },
    { label: "Automation", href: "/work-with-me/" },
    { label: "Labs", href: "/labs/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/#contact" },
  ],

  // The prominent button in the navbar (was "View CV"). Sends students to the
  // quiz hub.
  navCta: { label: "Find Your Path", href: "/quiz/" },

  /* ------------------------------------------------------------------ */
  /*  AS SEEN ON  —  a thin credibility strip rendered under the hero.   */
  /*  Text only. No TV footage (repost permission unconfirmed).          */
  /* ------------------------------------------------------------------ */
  asSeenOn: {
    label: "As seen on",
    outlet: "NET25 Kada Umaga",
    note: "Invited on national TV as a resource person on artificial intelligence.",
  },

  /* ------------------------------------------------------------------ */
  /*  IDENTITIES  —  the three hats, shown as a strip under the hero.    */
  /* ------------------------------------------------------------------ */
  identities: [
    {
      title: "Instructor",
      detail:
        "IT faculty at ACLC Baliuag. I teach networking, security, programming, and systems, and I write my own courses.",
    },
    {
      title: "Researcher",
      detail:
        "Taking my MSIT at PUP on the way to a doctorate in IT. My focus is learning analytics and how IT is actually taught.",
    },
    {
      title: "Content Creator",
      detail:
        "Sir Vantes: free Tagalog IT education on YouTube and TikTok, and a resource person on national television.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  FEATURED  —  the big NET25 section right under the hero.           */
  /*  Images are deinterlaced stills from the segment recording.         */
  /* ------------------------------------------------------------------ */
  featured: {
    kicker: "As seen on national TV",
    outlet: "NET25",
    show: "Kada Umaga",
    headline: "Resource person on superintelligent AI, live on national television.",
    detail:
      "A twenty-minute live conversation with the three hosts. I explained narrow AI, AGI, and superintelligence for a general audience and ran two live demos of generative AI tools. The hosts invited me back for future segments.",
    date: "September 22, 2026 · Aired live",
    facts: [
      { value: "20 min", label: "live segment" },
      { value: "2", label: "live AI demos" },
      { value: "Invited", label: "back on the show" },
    ],
    image: "/media/net25-onair-name.jpg",
    imageAlt: "Joshua Cervantes on NET25 Kada Umaga with his name on screen",
    imageWide: "/media/net25-onair-wide.jpg",
    imageWideAlt: "Joshua Cervantes with the three hosts at the Kada Umaga table",
    href: "https://www.youtube.com/watch?v=8mToSdE6XFU",
    hrefLabel: "Watch the segment",
  },

  /* ------------------------------------------------------------------ */
  /*  MEDIA  —  the "On camera" section (TV + channel).                 */
  /* ------------------------------------------------------------------ */
  media: {
    kicker: "On camera",
    heading: "Media & Public Engagement",
    // The most-watched clip, shown as a reliable card (TikTok's live embed
    // rate-limits, so we link out instead of embedding).
    viralClip: {
      cover: "/media/viral-frv01.jpg",
      title: "IT vs IS vs CS vs CpE: Ano ang pinagkaiba?",
      views: "768.4K views",
      series: "Most-watched \u00b7 FRV series",
      blurb:
        "My most-watched video: a plain-Tagalog breakdown of the four IT-related degree programs, from the Sir Vantes Frequently Raised Questions series.",
      href: "https://www.tiktok.com/@sir.vantes/video/7657884987919781128",
      hrefLabel: "Watch on TikTok",
    },
    items: [
      {
        title: "Resource Person, NET25 Kada Umaga",
        period: "September 22, 2026 · aired live",
        image: "/media/net25-panel.jpg",
        imageAlt: "Joshua Cervantes on the NET25 Kada Umaga panel",
        href: "https://www.youtube.com/watch?v=8mToSdE6XFU",
        hrefLabel: "Watch the segment",
        detail:
          "Invited on live national television as the resource person on super intelligent AI, a twenty-minute conversation with the three hosts. I explained narrow AI, AGI, and superintelligence for a general audience, with two live demonstrations of generative AI tools.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  LABS  —  the student playground at /labs                           */
  /*  Each entry becomes a card on the labs page. Add a new lab by       */
  /*  dropping a self-contained HTML file in /public and appending here. */
  /* ------------------------------------------------------------------ */
  labsPage: {
    heading: "Labs Playground",
    kicker: "Hands-on practice",
    intro:
      "Pick a lab and run it in your browser. No sign-in, no installs. Progress saves locally on your device, so you can close the tab and pick up where you left off later.",
  },
  labs: [
    {
      title: "Network+ N10-009 Trainer",
      topic: "CompTIA Network+",
      blurb:
        "An adaptive single-page trainer covering 45 high-miss concepts across 8 scaffolded modules (subnetting, routing, DNS, cloud, VLANs, wireless, and ops drills). Each item closes when you answer it correctly twice in a row.",
      tags: ["Network+", "Subnetting", "Routing", "VLANs", "Cloud"],
      href: "/netplus-trainer.html",
    },
    {
      title: "Security Teaching Toolkit",
      topic: "MSIT 643 · Security Mechanisms",
      blurb:
        "An interactive encryption and firewall playground built for a Lecture 7 teaching demo: symmetric vs. asymmetric encryption (with a mailbox-slot and a paint-mixing Diffie-Hellman analogy), a click-and-drag firewall rule lab, and a Lecture 7-grounded quick reference sheet.",
      tags: ["Encryption", "Diffie-Hellman", "Firewalls", "MSIT 643"],
      href: "/security-teaching-toolkit.html",
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
      "Two quick quizzes to help you decide. No sign-up, instant result. One for students still choosing a college course, one for those already headed into IT.",
  },
  quizzes: [
    {
      title: "Alin sa 4 na landas ang bagay sa'yo?",
      audience: "For anyone choosing between TESDA, DTS, Ladderized, or College",
      blurb:
        "TESDA NC, Dual Training System, Ladderized Program, o College Diploma: magkaiba ang tulin, gastos, at destinasyon. Sagutin ang 6 na tanong at makakuha ng suhestiyon, kasama ang mga opisyal na link kung saan mag-che-check.",
      tags: ["4 pathways", "TESDA · DTS · Ladderized · College", "6 tanong"],
      href: "/pathways-quiz.html",
    },
    {
      title: "Anong kurso ang para sa'yo?",
      audience: "For incoming college students",
      blurb:
        "Hindi pa sigurado kung anong course kukunin? Sagutin ang 8 tanong at bibigyan ka namin ng suhestiyon: BSIT, BSCS, BSIS, BSCpE, Data Science, at iba pa. Walang tama o mali.",
      tags: ["Course finder", "Senior high → college", "8 tanong"],
      href: "/course-quiz.html",
    },
    {
      title: "Anong IT path ang bagay sa'yo?",
      audience: "For future IT pros",
      blurb:
        "Papasok ka na ba sa IT o nag-aaral na? Alamin kung aling sangay ang bagay sa'yo: Support, Networking, Security, Data, o Web/Dev, kasama ang totoong sahod sa PH.",
      tags: ["IT specialization", "Career path", "6 tanong"],
      href: "/it-path-quiz.html",
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  GUIDE  —  the BSIT Survival Guide page at /guide                   */
  /*                                                                    */
  /*  Everything is free now. The PDFs live in /public/downloads/ and   */
  /*  are meant to be public. Everything below is editable text.        */
  /* ------------------------------------------------------------------ */
  guidePage: {
    kicker: "Digital guide for BSIT students",
    heading: "The Incoming BSIT Survival Guide",
    subheading:
      "Everything I wish someone told me before first year, from a 6-year IT pro turned instructor. Written in plain Taglish so it actually makes sense.",
    // Shown as a badge near the top and again in the payment card.
    price: "Free",
    priceNote: "Free · Just follow Sir Vantes · PDF",
    file: "/downloads/BSIT-Survival-Guide.pdf",
    format: "PDF · viewable on phone or laptop · yours to keep",

    // "What's inside" — each string becomes a checkmarked line.
    contentsHeading: "What's inside",
    contents: [
      "What BSIT really is, and how it differs from CS and IS",
      "The subjects you'll face year by year, and which ones actually matter",
      "Gear you need vs. what you can skip on a student budget",
      "Free tools & accounts to set up before day one",
      "How to study tech the right way: labs over lectures",
      "Flowcharts & logic: how to think through a problem before you code",
      "Your first code, explained simply: variables, if/else, and loops",
      "Certs worth chasing while still in school (A+, Network+, cloud)",
      "Building a portfolio from year 1: GitHub, home labs, projects",
      "Common first-year mistakes and how to dodge them",
      "IT career paths after BSIT, with real Philippine salary ranges",
      "My go-to free resources: channels, courses, and communities",
      "Bonus: a Quick-Start Checklist to set up before day one",
      "Bonus: a plain-Taglish glossary of common IT terms",
    ],

    // ---- Sneak peek (blurred preview images) -------------------------
    // These images live in /public/guide/ and are safe to be public —
    // the teaser page is blurred so the full text can't be read for free.
    previewHeading: "Silipin muna",
    previewNote:
      "Ito ang cover at unang chapter ng guide. Ang buong 21 na pahina, makukuha mo pagkatapos mong mabili.",
    coverImage: "/guide/guide-cover.png",
    peekImage: "/guide/guide-peek.png",
    peekBadge: "Free · 21 pages · just follow me",

    // "Who it's for" — each string becomes a bullet.
    audienceHeading: "Who it's for",
    audience: [
      "Incoming first-year BSIT students",
      "Senior-high grads still deciding on an IT course",
      "Parents or guardians helping a student get ready",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  PAYMENT  —  the shared "follow me" card (everything is free)       */
  /*                                                                    */
  /*  Used by both the /support page and each product page. Edit here   */
  /*  ONCE and it updates everywhere.                                   */
  /* ------------------------------------------------------------------ */
  payment: {
    heading: "It's all free. Just follow me.",
    intro:
      "I don't sell anything here. Take whatever helps, free. The only thing I ask is a follow, so these reach more students.",
    messengerLabel: "Message me for your copy",
    messengerHref: "https://www.facebook.com/joshuacruzcervantesx/",
    emailLabel: "Or email me",
    email: "joshuacruzcervantes@gmail.com",
    note: "Everything here is free. If it helped, a follow and a share is the best thank-you.",
  },

  /* ------------------------------------------------------------------ */
  /*  SUPPORT  —  the storefront at /support (all free products here)    */
  /*                                                                    */
  /*  Add a product by appending to `products`. status: "available"     */
  /*  makes the button link to `href`; "coming-soon" shows a disabled   */
  /*  badge instead. Leave `image` as "" to show a colored placeholder. */
  /* ------------------------------------------------------------------ */
  support: {
    navLabel: "Support",
    kicker: "Everything here is free",
    heading: "Support",
    intro:
      "I don't sell anything here. Every guide and reviewer is free. The only thing I ask is that you follow Sir Vantes, so these reach more students. Grab whatever helps.",

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
    // Genuinely useful free PDFs.
    // These files ARE meant to be public — they live in /public/free/.
    freebiesHeading: "Start free",
    freebiesNote:
      "Free downloads, no sign-up. Genuinely useful on their own.",
    freebies: [
      {
        title: "Subnetting Made Simple",
        kind: "Free · Networking",
        blurb:
          "The block-size method that finally makes subnetting click, with worked examples and quick practice. The topic everyone fears, simplified.",
        file: "/free/Subnetting-Made-Simple-Free.pdf",
        leadsTo: "Cheat-Sheet & Practice packs",
      },
      {
        title: "Before You Start BSIT",
        kind: "Free · For students",
        blurb:
          "7 things to set up this summer so you walk into first year already ahead: accounts, tools, and how to study tech.",
        file: "/free/BSIT-Summer-Head-Start-Free.pdf",
        leadsTo: "BSIT Survival Guide",
      },
      {
        title: "5 IT Resume Mistakes",
        kind: "Free · Careers",
        blurb:
          "The mistakes that get fresh-grad resumes ignored in seconds, and the simple fix for each, from the hiring side.",
        file: "/free/5-IT-Resume-Mistakes-Free.pdf",
        leadsTo: "Resume + LinkedIn Guide",
      },
      {
        title: "BSIT Survival Guide: Free Trial",
        kind: "Free · For students",
        blurb:
          "The first half of the guide, free: Chapters 1 to 6 plus the intro and full contents. The full guide is free too, with the remaining 6 chapters (coding, certs, portfolio, career paths + PH salaries).",
        file: "/free/The-Incoming-BSIT-Survival-Guide-Free-Trial.pdf",
        leadsTo: "BSIT Survival Guide",
      },
    ],

    products: [
      {
        title: "The Incoming BSIT Survival Guide",
        kind: "PDF Guide",
        price: "Free",
        priceNote: "Just follow me",
        blurb:
          "21-page Taglish guide para sa mga papasok na BSIT: subjects year-by-year, gear, certs, portfolio, career paths na may totoong sahod sa PH, plus quick-start checklist at IT glossary.",
        tags: ["PDF", "21 pages", "Taglish"],
        slug: "guide",
        file: "/downloads/BSIT-Survival-Guide.pdf",
        image: "/guide/guide-cover.png",
        href: "/guide/",
        cta: "Download free",
        status: "available",
      },
      {
        title: "Cert Cheat-Sheet & Reviewer Pack",
        kind: "Reviewer Pack",
        price: "Free",
        priceNote: "Just follow me",
        blurb:
          "Quick-reference reviewers for your cert exams: subnetting, ports & protocols, and flashcards. Printable and phone-friendly.",
        tags: ["Reviewer", "Cheat sheet", "Certs"],
        slug: "cheat-sheet",
        file: "/downloads/Cert-Cheat-Sheet-Reviewer-Pack.pdf",
        image: "/support/cheat-sheet-cover.png",
        href: "/support/cheat-sheet/",
        cta: "Download free",
        status: "available",
      },
      {
        title: "Resume + LinkedIn Guide for IT Fresh Grads",
        kind: "PDF Guide",
        price: "Free",
        priceNote: "Just follow me",
        blurb:
          "How to build an IT resume and LinkedIn profile that actually gets callbacks, with templates and real examples.",
        tags: ["Resume", "LinkedIn", "Fresh grad"],
        slug: "resume-linkedin",
        file: "/downloads/Resume-LinkedIn-Guide.pdf",
        image: "/support/resume-linkedin-cover.png",
        href: "/support/resume-linkedin/",
        cta: "Download free",
        status: "available",
      },
      {
        title: "IT Cert Practice Exam Pack",
        kind: "Practice Exams",
        price: "Free",
        priceNote: "Just follow me",
        blurb:
          "50 practice questions with clear explanations to get you exam-ready for CompTIA A+ and Network+.",
        tags: ["Practice", "A+", "Network+"],
        slug: "practice-exams",
        file: "/downloads/IT-Cert-Practice-Exam-Pack.pdf",
        image: "/support/practice-exams-cover.png",
        href: "/support/practice-exams/",
        cta: "Download free",
        status: "available",
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
        "The tables and facts you keep forgetting: subnetting, ports, OSI, commands, and flashcards. Made to review fast, print, or keep on your phone.",
      format: "PDF · quick-reference · printable & phone-friendly",
      contentsHeading: "What's inside",
      contents: [
        "Subnetting cheat sheet: mask chart, CIDR → hosts, the magic numbers",
        "Ports & protocols table (the one everyone gets asked)",
        "OSI model with an easy mnemonic",
        "Private & special IP ranges (incl. APIPA & loopback)",
        "Essential Windows/Linux troubleshooting commands",
        "Rapid-fire flashcards to test yourself",
      ],
      peekBadge: "Free · full pack · just follow me",
    },
    "resume-linkedin": {
      subheading:
        "How to build an IT resume and LinkedIn profile that actually get interviews, even with no work experience yet. Templates and real before/after examples included.",
      format: "PDF · guide + fill-in template · examples",
      contentsHeading: "What's inside",
      contents: [
        "The resume structure that gets callbacks (with no experience)",
        "Bullet formulas: weak vs. strong, with real examples",
        "How to pass the ATS (resume-scanning software)",
        "A copy-paste fill-in resume template",
        "LinkedIn profile optimization (headline, about, skills)",
        "A pre-apply checklist to run every time",
      ],
      peekBadge: "Free · full guide · just follow me",
    },
    "practice-exams": {
      subheading:
        "50 original practice questions with clear explanations across 8 domains. Get exam-ready for CompTIA A+ and Network+ by learning the 'why,' not just the answer.",
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
      peekBadge: "Free · all 50 questions · just follow me",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  1. HERO                                                            */
  /* ------------------------------------------------------------------ */
  hero: {
    // Small label above the name.
    eyebrow: "IT Instructor · Researcher · AI Automation",
    name: "Joshua Cervantes",
    // Nate-style big headline. `headlineAccent` is the word shown in the
    // brand color, placed after `headline`.
    headline: "IT, taught from the",
    headlineAccent: "field",
    // Proof numbers shown above the headline.
    stats: [
      { value: "768K+", label: "views on my top lesson" },
      { value: "6 yrs", label: "enterprise IT experience" },
      { value: "NET25", label: "national TV resource person" },
    ],
    // The one-line positioning statement that speaks to BOTH audiences.
    tagline:
      "IT Instructor and Industry Practitioner. I teach networking, security, and systems from 6 years in the field, not from a textbook.",
    // One short line under the headline (Nate-style).
    subtext:
      "I teach networking, security, and systems from 6 years of real enterprise work, and I build AI automations on the side.",
    // Small credential line above the headline: where you teach and study.
    credentials: "IT Instructor at ACLC Baliuag · MSIT at PUP",
    // Call-to-action buttons.
    // Hero portrait: cutout on an SV-blue studio backdrop, shown in an arch frame.
    // Formal portrait kept at /media/hero-portrait.jpg (used for SEO + blog avatar).
    photo: "/media/hero-blue.jpg",
    photoAlt: "Joshua Cervantes in a suit",
    // The three "doors": one per audience. The first one is the main button.
    doors: [
      { label: "Hire me to teach", href: "/teaching-record/" },
      { label: "Automate my business", href: "/work-with-me/" },
      { label: "I'm a student", href: "/labs/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  TERMINAL  —  content revealed by the interactive terminal          */
  /*  (desktop only). `ls` lists these "files"; `cat <name>` prints them. */
  /* ------------------------------------------------------------------ */
  terminal: {
    // One-line bio printed by the `whoami` command.
    whoami:
      "joshua: IT Support & Operations (6 yrs) → IT instructor (ACLC), MSIT student at PUP. Bilingual EN/Tagalog.",
    // The "files" the terminal exposes. The `name` is what users type after
    // `cat`. Use \n inside body strings to create new lines.
    files: [
      {
        name: "about.txt",
        body:
          "Joshua Cervantes\n6 years of hands-on enterprise IT (Support + Operations).\nNow IT faculty at ACLC Baliuag and an MSIT student at PUP.\nI bring the field into the classroom: real incidents, real fixes, real systems.",
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
          "# Certifications\n- CompTIA A+ (2025)\n- CompTIA Network+ (in progress)\n- Google Cybersecurity Professional\n- Microsoft Azure Fundamentals (AZ-900)\n- Oracle Cloud Infrastructure Foundations\n- Master in Information Technology, PUP Open University (in progress)\n- BS Information Technology, Bulacan State University, Bustos (2019)",
      },
      {
        name: "contact.txt",
        body:
          "email:    joshuacruzcervantes@gmail.com\nyoutube:  youtube.com/@ytsirvantes\ntiktok:   tiktok.com/@sir.vantes\nlinkedin: linkedin.com/in/joshuacruzcervantes",
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
      "Now I teach it. I'm an IT instructor at ACLC Baliuag, while taking my Master in Information Technology at PUP. What makes me a strong instructor isn't theory, it's that I've actually done the work. I can show students how a concept plays out in a live environment, why it matters, and where it breaks.",
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
      "I teach the subjects I've lived. Every topic below comes with field stories, live demos, and the context that turns memorization into understanding, delivered bilingually in English and Tagalog.",
    // Photos from a live teaching demo. Drop images in /public/teaching/ and
    // update the src/alt below. Keep alt text descriptive for accessibility.
    gallery: {
      heading: "Live teaching demo",
      caption:
        "Delivering live IT lessons: slides, whiteboard, and a full class.",
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
        title: "Data Communications & Networking",
        detail:
          "OSI & TCP/IP, subnetting, routing & switching, and VLANs, with hands-on Cisco Packet Tracer labs. Taught as DCN1 and DCN3.",
      },
      {
        icon: "code",
        title: "Web & Application Development",
        detail:
          "Full-stack foundations: HTML, CSS, JavaScript, the DOM, PHP, MySQL, and OOP with data structures. Taught as Advanced OOP (AOOP).",
      },
      {
        icon: "security",
        title: "Information Assurance & Security",
        detail:
          "Core security concepts, threats, hardening, and IT audit and control, with live classroom demos. Taught as IAS2 and the IS elective.",
      },
      {
        icon: "hardware",
        title: "Systems & Platform Technologies",
        detail:
          "Platforms and operating systems, hardware and computer systems servicing aligned to CompTIA A+, and Living in the IT Era for first-years.",
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
      "Six years of doing, not just knowing. Grouped by domain: these are tools and systems I've worked with hands-on in production environments.",
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
      "Hands-on labs and projects, the kind of work I both do and teach.",
    // Put images at /public/projects/<file> (see README). Set link to "" to
    // hide the link button on a card.
    items: [
      {
        title: "Network+ N10-009 Trainer",
        description:
          "An adaptive, single-page study tool covering 45 high-miss Network+ concepts across 8 scaffolded modules. Runs in the browser with no sign-in; progress saves locally. Live in the Labs playground.",
        tags: ["Network+", "Subnetting", "Routing", "JavaScript"],
        image: "/projects/placeholder-1.svg",
        link: "/netplus-trainer.html",
      },
      {
        title: "Security Teaching Toolkit",
        description:
          "An interactive encryption and firewall playground built for a live lecture: symmetric vs. asymmetric encryption with a paint-mixing Diffie-Hellman analogy, plus a click-and-drag firewall rule lab.",
        tags: ["Encryption", "Diffie-Hellman", "Firewalls"],
        image: "/projects/placeholder-2.svg",
        link: "/security-teaching-toolkit.html",
      },
      {
        title: "Classroom Reference Build",
        description:
          "A full-stack reference website (HTML, CSS, JavaScript, PHP, MySQL) built as the worked answer for my Advanced OOP and Data Structures course, with deliberately broken copies and an auditor script for student defect-hunting.",
        tags: ["PHP", "MySQL", "Full-stack", "Teaching"],
        image: "/projects/classroom-build.png",
        link: "",
      },
      {
        title: "Instructor Attendance & Grading System",
        description:
          "The reusable attendance and grading machinery I run across both schools: spreadsheet-based, low-infrastructure by design, and built to produce accreditation evidence as a byproduct of normal teaching.",
        tags: ["Google Sheets", "Automation", "Operations"],
        image: "/projects/grading-system.png",
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
      { name: "BS Information Technology", issuer: "Bulacan State University, Bustos", year: "2019", status: "done" },
      { name: "Master in Information Technology", issuer: "PUP Open University", year: "", status: "progress" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  7. CONTACT                                                         */
  /* ------------------------------------------------------------------ */
  contact: {
    heading: "Get in Touch",
    intro:
      "Hiring for a teaching role, planning an automation project, or a student with a question? Pick the one that fits and your email opens ready to go.",
    email: "joshuacruzcervantes@gmail.com",
    // Pre-fills the email subject line when someone clicks your address.
    emailSubject: "Hello Joshua: Teaching / IT Opportunity",
    // One button per audience; each pre-fills its own subject line.
    subjects: [
      { label: "Teaching role", subject: "Teaching Opportunity: Joshua Cervantes" },
      { label: "Automation project", subject: "Automation Project Inquiry" },
      { label: "Student question", subject: "Question from a Student" },
    ],
    // Social links now live in the shared top-level `socials` list above.
  },

  /* ------------------------------------------------------------------ */
  /*  WORK WITH ME  —  /work-with-me. AI automation services.            */
  /*  PLACEHOLDER: fill in real services and case studies once built.    */
  /*  Prices intentionally left out until rates are decided.             */
  /* ------------------------------------------------------------------ */
  workWithMe: {
    kicker: "Work with me",
    heading: "AI Automation",
    status: "In development",
    intro:
      "I build AI automation workflows that take repetitive work off your plate, using n8n and AI agents. This page is being built: services and case studies are coming soon.",
    servicesHeading: "Services",
    services: [
      {
        title: "Workflow Automation",
        detail: "Connect the apps you already use and let routine tasks run on their own. Details coming soon.",
      },
      {
        title: "AI Agents & Assistants",
        detail: "AI that answers, sorts, and drafts for you, built around your actual process. Details coming soon.",
      },
      {
        title: "Process Audit",
        detail: "A review of where your time goes and what is worth automating first. Details coming soon.",
      },
    ],
    caseStudiesHeading: "Case studies",
    caseStudies: [
      { title: "Case study coming soon", detail: "Problem, the workflow I built, and the result in hours saved." },
      { title: "Case study coming soon", detail: "Problem, the workflow I built, and the result in hours saved." },
    ],
    ctaHeading: "Have a process you want automated?",
    ctaText: "Send a short description of the task and the tools you use. I will reply with whether it can be automated.",
    ctaLabel: "Email me about a project",
    emailSubject: "Automation Project Inquiry",
  },

  /* ------------------------------------------------------------------ */
  /*  TEACHING RECORD  —  /teaching-record. The academic / hiring-panel  */
  /*  evidence page (BSU-oriented). Edit any text here.                  */
  /* ------------------------------------------------------------------ */
  teachingRecord: {
    kicker: "For program chairs & hiring panels",
    heading: "Teaching Record",
    intro:
      "A reference profile of my appointments, credentials, and the instructional materials I build. I came to teaching after six years in the field, and I prepare my own syllabi, semester programs, laboratory manuals, and examinations.",

    credentials: [
      {
        title: "Master of Science in Information Technology",
        org: "Polytechnic University of the Philippines",
        note: "In progress, 9 units completed. 2026 to present.",
      },
      {
        title: "Bachelor of Science in Information Technology",
        org: "Bulacan State University, Bustos Campus",
        note: "2019.",
      },
    ],

    certifications: [
      "CompTIA Network+ (N10-009), in preparation, target 2026",
      "CompTIA A+ (2025)",
      "Microsoft Certified: Azure Fundamentals (AZ-900) (2024)",
      "Google Cybersecurity Professional Certificate (2023)",
      "Oracle Cloud Infrastructure Foundations (2023)",
    ],

    appointments: [
      {
        role: "Full-Time Instructor",
        org: "Richwell Colleges, Incorporated, Plaridel, Bulacan",
        period: "August 2026 to present",
        summary:
          "A full-time load of four subjects across nine sections in three degree programs. Class adviser to BSIS 3-2.",
        subjects: [
          "Advanced Object-Oriented Programming and Data Structures (IS313C), BS Information Systems",
          "Usability Engineering (IS313B), BS Information Systems",
          "IT Audit and Control (ISELECT313A), BS Information Systems",
          "Living in the IT Era (ELEC 113 and GEC ELECT 1s), BS Tourism Management and BS Civil Engineering",
        ],
        note:
          "I wrote the CHED-aligned syllabus for every offering and rebuilt Advanced OOP around a full-stack track (HTML, CSS, Bootstrap, JavaScript, PHP, MySQL), ending with data structures from first principles. Every graded activity can be completed on paper when the lab or internet is unavailable. Complete courses deployed to Google Classroom, including graded assessments, using Google Apps Script.",
      },
      {
        role: "Part-Time Instructor",
        org: "ACLC College of Baliuag, Bulacan",
        period: "July 2026 to present",
        summary:
          "Four tertiary IT subjects under the BS Information Technology program.",
        subjects: [
          "Data Communications and Networking 1 (DCN1)",
          "Data Communications and Networking 3 (DCN3)",
          "Information Assurance and Security 2 (IAS2)",
          "Principles of Operating Systems and its Applications (POSA)",
        ],
        note:
          "Prepared the complete course package for each subject: semester program, laboratory manual, and all four major examinations, following the institutional LMS and the prescribed BSIT curriculum outcomes. Networking is delivered through Cisco Packet Tracer and Cisco Networking Academy material; security through live demonstrations. I lecture bilingually for mixed-ability sections.",
      },
    ],

    experience: [
      {
        role: "Information Technology Support",
        org: "Asalus Corporation (Intellicare)",
        period: "April 2023 to May 2026",
        points: [
          "Resolved daily hardware and software incidents on Windows and Linux workstations, averaging 150+ tickets a month, most on first contact.",
          "Deployed and configured workstations to the security baseline; administered Active Directory, group policy, and user access.",
          "Took part in three OS and software migrations with the accompanying hardware refresh.",
        ],
      },
      {
        role: "Operational Analyst",
        org: "Smart Communications, Inc.",
        period: "June 2020 to April 2023",
        points: [
          "Monitored high-availability platforms on a 24-hour rotation; handled critical escalations within service levels.",
          "Coordinated the transfer of ISP circuits, surveillance, and biometric systems during an office relocation, with no service interruption.",
        ],
      },
      {
        role: "Network Systems Administration (On-the-Job Training)",
        org: "Philippine Long Distance Telephone Company (PLDT)",
        period: "2019",
        points: [],
      },
    ],

    materials: [
      "CHED-aligned syllabi, semester programs, and laboratory manuals for every subject I teach",
      "Six student self-study packs with answer keys (330 marks), each producible on paper with no lab and no internet",
      "Network+ N10-009 browser trainer and a Security Teaching Toolkit, both used in class and public on the Labs page",
      "A full-stack classroom reference build (HTML, CSS, JavaScript, PHP, MySQL) with a defect-hunting lab for Advanced OOP",
      "A reusable attendance and grading system run across both schools, built to produce accreditation evidence as a byproduct",
      "Complete Google Classroom course deployments, including graded assessments, automated with Google Apps Script",
    ],

    media: [
      {
        title: "Resource Person, Kada Umaga",
        org: "NET25 live national television",
        period: "September 22, 2026",
        detail:
          "Invited as resource person for a live segment on super intelligent AI, about twenty minutes with the three hosts. I explained narrow AI, AGI, and superintelligence for a general audience, ran two live generative-AI demonstrations, and discussed which jobs are most and least exposed to automation. The hosts invited me back for future segments.",
      },
      {
        title: "Sir Vantes, Tagalog-language IT education channel",
        org: "YouTube and TikTok",
        period: "2026 to present",
        detail:
          "Free instructional content in Tagalog on IT certification and careers, reaching roughly 900,000 views and over 8,000 followers. I also maintain this site, which hosts a free CompTIA Network+ practice trainer for self-study learners.",
      },
    ],
    publications: [
      {
        title:
          "Keeping the Class Online: A Thematic Review of Network Performance Optimization Trends for Reliable E-Learning, 2022 to 2026",
        venue:
          "MSIT 643, Advanced Operating Systems and Networking. Adviser: Assoc. Prof. Carlo Inovero.",
        type: "Review paper, IMRaD format",
        year: "2026",
        abstract:
          "Synchronous online learning has become a permanent fixture of higher education, yet its delivery depends on residential and campus networks that were never engineered for sustained real-time media. This paper reviews fifteen peer-reviewed studies published between 2022 and 2026 to establish how contemporary operating system and network technologies address the reliability gap in e-learning. The review is organized thematically across six themes, from quality-of-service measurement and software-defined networking to edge computing, adaptive video delivery, security as a performance determinant, and the digital divide. Three findings emerge: the literature has shifted decisively from static provisioning toward learned, predictive control; prioritization consistently outperforms capacity expansion, because the flow that fails in an online class is low-bandwidth and latency-sensitive rather than bandwidth-hungry; and a measurement gap persists between the optimization literature, validated in simulation, and the education literature, which measures learner outcomes. The paper closes by mapping these trends onto a diagnosed Philippine household failure case and recommending an intervention order for school network administrators.",
        pdf: "/research/Keeping-the-Class-Online.pdf",
      },
      {
        title:
          "Early Identification of At-Risk Students Using Attendance and Quiz Data: An Explainable Learning Analytics Model for Low-Infrastructure Philippine Higher Education Institutions",
        venue:
          "MSIT 632, Technology and Project Management. Individual research proposal, ACM format.",
        type: "Research proposal",
        year: "2026",
        abstract:
          "Students who fail a course usually show warning signs weeks before the final grade: missed classes, skipped quizzes and falling scores. Instructors in many Philippine higher education institutions see these signs too late because the records sit in separate attendance sheets, gradebooks and learning management systems. Most learning analytics research predicts at-risk students from rich LMS clickstream data collected in online or well-resourced settings, which does not match blended, low-infrastructure classrooms where LMS use is uneven. This proposal describes a quantitative, predictive study that will build and evaluate an explainable early warning model using only the two data sources such classrooms reliably have: attendance check-ins and quiz records. Logistic regression, decision tree, Random Forest and gradient boosting classifiers are compared at three checkpoints in the term, with recall as the primary metric and SHAP values used to explain each prediction. The expected output is a validated model and a weekly, printable risk list that tells the instructor which students to contact and why.",
        pdf: "/research/MSIT632-Research-Proposal-Cervantes.pdf",
      },
    ],
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
