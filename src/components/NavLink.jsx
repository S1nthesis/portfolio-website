"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLink = ({link}) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.url ? "text-blue-500 md:bg-black md:text-white" : "md:bg-white md:text-black"} transition-colors duration-300 md:hover:bg-gray-200 md:hover:text-gray-800`} href={link.url}>{link.title}</Link>
  );
}

export default NavLink;
