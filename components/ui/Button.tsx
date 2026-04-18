"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonProps = AsAnchor | AsButton;

const variantClass: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  white: "btn-white",
};

const sizeClass: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "!text-xs !px-4 !py-2",
  md: "",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const cls = cn(variantClass[variant], sizeClass[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");
    if (isExternal) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
