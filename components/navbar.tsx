"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, site } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <img
            className="brand-logo"
            src="/media/logo-adam-carter.png"
            alt="Adam Carter logo"
            width={48}
            height={48}
          />
          <span>
            <strong>{site.name}</strong>
            <small>{site.title}</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
