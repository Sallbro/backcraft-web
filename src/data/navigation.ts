export type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NavigationLinks: NavigationGroup[] = [
  {
    name: "Getting Started",
    children: [
      {
        name: "Introduction",
        href: "/docs",
      },
      {
        name: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    name: "Commands",
    children: [
      {
        name: "List",
        href: "/docs/list",
      },
      {
        name: "Init",
        href: "/docs/init",
      },
      {
        name: "Add",
        href: "/docs/add",
      },
      {
        name: "Custom",
        href: "/docs/custom",
      },
      {
        name: "Generate",
        href: "/docs/generate",
      },
    ],
  },
  {
    name: "App",
    children: [
      {
        name: "Blog",
        href: "/docs/blog",
      },
      {
        name: "User Management",
        href: "/docs/user-management",
      },
      {
        name: "Book Management",
        href: "/docs/book-management",
        isNew: true,
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "payment gateway",
        href: "/docs/payment-gateway",
      },
      {
        name: "Auth",
        href: "/docs/auth",
      },
      {
        name: "DB Setup",
        href: "/docs/db-setup",
      },
    ],
  },
] as const;

export const useNavigationLinks = () =>
  NavigationLinks.flatMap((group) =>
    group.children.map((item) => ({
      ...item,
      name: item.name.toLowerCase().replaceAll(" ", "-"),
    }))
  );

// TODO: find a way to enforce string literal type in registery-examples
// const NavItems = NavigationLinks.flatMap((group) => group.children.map((item) => item.name));
// export type NavItemNames = (typeof NavItems)[number];
