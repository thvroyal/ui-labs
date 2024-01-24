"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type NavigationLink = {
  key: string;
  href: string;
  label: string;
  children?: NavigationLink[];
};

const navigationLink: NavigationLink[] = [
  {
    key: "documentation",
    href: "#",
    label: "Documentation",
  },
];

export function Header() {
  return (
    <header className="relative bg-[var(--light,theme(colors.gray.50/0.8))_var(--dark,theme(colors.gray.950/0.01))] backdrop-blur-md">
      <div className="container relative flex h-16 items-center px-6 lg:px-0">
        <div className="absolute inset-x-0 top-full mt-px h-px bg-[var(--light,theme(colors.white/0.3))_var(--dark,transparent)]" />
        <div className="absolute inset-x-0 top-full h-px bg-[var(--light,theme(colors.gray.500/0.125))_var(--dark,theme(colors.white/0.075))]" />
        <Link href="/">
          <div className="mr-4 text-lg font-semibold">UI Labs</div>
        </Link>
        <NavigationMenu className="max-w-none flex-1 justify-start">
          <NavigationMenuList>
            {navigationLink.length > 0 &&
              navigationLink.map((navLink) => (
                <NavigationMenuItem key={navLink.href}>
                  <Link href={navLink.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {navLink.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Button here */}
        <Button size="sm">Star on Github</Button>
      </div>
    </header>
  );
}
