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
    url: "https://joshuacruzcervantes.github.io", // the live GitHub Pages address
  },

  /* ------------------------------------------------------------------ */
  /*  NAVIGATION  —  the links in the top bar (anchor to section ids)    */
  /* ------------------------------------------------------------------ */
  nav: [
    { label: "About", href: "#about" },
    { label: "Teaching", href: "#teaching" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],

  /* ------------------------------------------------------------------ */
  /*  LABS  —  interactive trainers / study tools surfaced in the navbar */
  /*  Add a new entry here and it appears in the "Labs" dropdown.        */
  /* ------------------------------------------------------------------ */
  labs: [
    { label: "Net+ Trainer (N10-009)", href: "/netplus-trainer.html" },
  ],

  /* ------------------------------------------------------------------ */
  /*  1. HERO                                                            */
  /* ------------------------------------------------------------------ */
  hero: {
    // Small label above the name.
    eyebrow: "IT Instructor • 6 Years in the Field",
    name: "Joshua Cervantes",
    // The one-line positioning statement that speaks to BOTH audiences.
    tagline:
      "IT Instructor & Industry Practitioner — I teach networking, security, and systems from 6 years in the field, not from a textbook.",
    // A short supporting sentence under the tagline.
    subtext:
      "Enterprise IT Support & Operations turned educator. I translate real-world systems into lessons students can actually use.",
    // Call-to-action buttons.
    ctaPrimary: { label: "View CV", href: "/cv.pdf" }, // downloads the PDF in /public
    ctaSecondary: { label: "Watch me teach", href: "https://www.youtube.com/channel/UCVltEiWbsqnMqarwjEK7iAw" },
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
          "email:    joshuacruzcervantes@gmail.com\nlinkedin: linkedin.com/in/joshuacruzcervantes\nyoutube:  youtube.com/channel/UCVltEiWbsqnMqarwjEK7iAw",
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
    // Your photo lives at /public/profile.png.
    photo: "/profile.png",
    photoAlt: "Portrait of Joshua Cervantes",
    // Each string is a paragraph.
    paragraphs: [
      "I spent six years on the front lines of enterprise IT — Support and Operations — keeping systems, networks, and end users running. I've deployed and managed fleets of workstations, defended uptime, and resolved the kind of messy, real-world problems that never appear in a textbook.",
      "Now I'm channeling that experience into teaching. What makes me a strong instructor isn't theory — it's that I've actually done the work. I can show students how a concept plays out in a live environment, why it matters, and where it breaks.",
      "I teach bilingually in English and Tagalog, and I've worked with learners at every level — from absolute beginners touching a command line for the first time to students preparing for industry certifications.",
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
      channelUrl: "https://www.youtube.com/channel/UCVltEiWbsqnMqarwjEK7iAw",
      // Optional: paste a YouTube video ID to embed a live teaching demo.
      // Find it in the video URL after "v=" (e.g. dQw4w9WgXcQ). Leave "" to
      // hide the embed and just show a link to the channel.
      demoVideoId: "",
      blurb:
        "Watch a live teaching demo and see how I break down complex IT topics into clear, practical lessons.",
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
        title: "Network+ N10-009 Diagnostic Trainer",
        description:
          "A single-page CompTIA Network+ (N10-009) diagnostic trainer with 45 curated high-miss items, eight scaffolded modules, and adaptive drills with a two-correct-in-a-row mastery rule. Built as a classroom-ready review tool.",
        tags: ["CompTIA", "Network+", "Diagnostic", "Single-page App"],
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
    email: "joshuacruzcervantes@gmail.com",
    // Pre-fills the email subject line when someone clicks your address.
    emailSubject: "Hello Joshua — Teaching / IT Opportunity",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/joshuacruzcervantes" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UCVltEiWbsqnMqarwjEK7iAw" },
      { label: "Email", href: "mailto:joshuacruzcervantes@gmail.com" },
    ],
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
