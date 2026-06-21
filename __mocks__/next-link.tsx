import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export default function Link({ children, href = "", ...rest }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }>) {
  return (
    <a href={typeof href === "string" ? href : String(href)} {...rest}>
      {children}
    </a>
  );
}
