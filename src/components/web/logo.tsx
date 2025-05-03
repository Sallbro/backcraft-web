"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Logo({
  className,
  imgClassName,
  defaultTheme,
}: {
  className?: string;
  imgClassName?: string;
  defaultTheme?: "dark" | "light";
}) {
  const { theme } = useTheme();
  const val = defaultTheme ?? theme;
  // const logo =
  //   val === "light"
  //     ? "https://res.cloudinary.com/di0av3xly/image/upload/v1744924578/Aether-ui/au-logo-black.png"
  //     : "https://res.cloudinary.com/di0av3xly/image/upload/v1744924537/Aether-ui/au-logo-light.png";
  const logo =
    val === "light"
      ? "https://res.cloudinary.com/dtdytcudg/image/upload/v1746208983/LogoWiz_01052025_231841_final_bd6qon.png"
      : "https://res.cloudinary.com/dtdytcudg/image/upload/v1746209188/Logo_white_md8q7q.png";
  return (
    <div className="flex cursor-pointer items-center gap-1.5">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={100}
        className={cn("aspect-square size-12 object-cover", imgClassName)}
      />

      <p
        className={cn(
          "font-bricolage-grotesque text-shadow-glow text-2xl font-medium tracking-tight text-white",
          className
        )}
      >
        Back<span className="text-gradient font-bold">Craft</span>
      </p>
    </div>
  );
}

export default Logo;
