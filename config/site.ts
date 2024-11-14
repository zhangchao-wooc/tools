export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tools",
      href: "/tools",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tools",
      href: "/tools",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/zhangchao-wooc",
    twitter: "https://x.com/wooc_chao",
    docs: "https://wooc.top",
    // discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "/sponsor",
  },
};
