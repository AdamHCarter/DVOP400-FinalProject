import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { createElement } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Navbar } from "@/components/navbar";

const pathname = vi.hoisted(() => ({ value: "/" }));

vi.mock("next/navigation", () => ({
  usePathname: () => pathname.value,
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...rest }: { children: ReactNode; href: string }) => (
    createElement("a", { href, ...rest }, children)
  ),
}));

describe("Navbar", () => {
  beforeEach(() => {
    pathname.value = "/";
    cleanup();
  });

  it("renders the site brand and logo", () => {
    render(createElement(Navbar));

    expect(screen.getByRole("link", { name: /adam carter home/i })).toBeInTheDocument();
    expect(screen.getByAltText("Adam Carter logo")).toBeInTheDocument();
    expect(screen.getByText("Adam Carter")).toBeInTheDocument();
  });

  it("highlights the active home link on the home route", () => {
    render(createElement(Navbar));

    expect(screen.getByRole("link", { name: "Home" })).toHaveClass("nav-link-active");
    expect(screen.getByRole("link", { name: "About Me" })).not.toHaveClass("nav-link-active");
  });

  it("highlights the about link on the about route", () => {
    pathname.value = "/about";

    render(createElement(Navbar));

    expect(screen.getByRole("link", { name: "About Me" })).toHaveClass("nav-link-active");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveClass("nav-link-active");
  });
});
