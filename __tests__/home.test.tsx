import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { createElement } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import HomePage from "@/app/page";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...rest }: { children: ReactNode; href: string }) => (
    createElement("a", { href, ...rest }, children)
  ),
}));

describe("Home page", () => {
  beforeEach(() => {
    render(createElement(HomePage));
  });

  it("introduces the site", () => {
    expect(
      screen.getByRole("heading", {
        name: /building modern systems with a calm, practical mindset/i,
      }),
    ).toBeInTheDocument();
  });

  it("shows the primary actions", () => {
    expect(screen.getByRole("link", { name: /learn more about me/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
      "href",
      "mailto:Adam@ctrlaltcarter.com",
    );
  });
});
