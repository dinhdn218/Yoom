"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <section className="sticky left-0 top-0 hidden sm:flex h-screen flex-col justify-between bg-dark-1 p-6 pt-28 text-white w-fit lg:w-[264px] flex-shrink-0">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link, index) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              key={index}
              href={link.route}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start w-fit lg:min-w-[220px]",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
                className="w-[24px] h-auto"
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
