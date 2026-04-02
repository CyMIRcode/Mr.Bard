const site = {
  // --- Site Metadata ---
  meta: {
    title: "Mr.Bard",
    description: "Mr. Bard's collection of short stories",
    author: "Mr.Bard",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "zh-CN",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/your-username", icon: "mdi:github" },
    { name: "Email", href: "mailto:hello@example.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "🧸 Hello, I'm Mr.Bard",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      '欢迎来到 《Mr.Bard 巴德先生的短篇故事集》Mr.Bard不是英雄，也不是天才，他只是一个试图用一本正经的逻辑去理解一个毫无逻辑的世界的人。如果你也曾有过类似的瞬间，那么，欢迎你加入我们，一同探索这个充满笨拙智慧的幽默世界。',
    cards: [
      { icon: "mdi:explore", label: "Status", value: "Building something cool" },
      { icon: "mdi:location", label: "Location", value: "Earth" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  tools: [
    {
      name: "development",
      items: [
        { name: "VS Code", link: "https://code.visualstudio.com", icon: "mdi:microsoft-visual-studio-code" },
        { name: "WebStorm", link: "https://www.jetbrains.com/webstorm", icon: "mdi:code-braces" },
        { name: "Terminal", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ]
    },
    {
      name: "design",
      items: [
        { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
        { name: "Sketch", link: "https://www.sketch.com", icon: "mdi:vector-square" },
        { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html", icon: "mdi:pencil-ruler" },
        { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", icon: "mdi:image-edit" },
      ]
    },
    {
      name: "productivity",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        { name: "Obsidian", link: "https://obsidian.md", icon: "mdi:diamond-stone" },
        { name: "Raycast", link: "https://www.raycast.com", icon: "mdi:lightning-bolt" },
        { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
      ]
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
