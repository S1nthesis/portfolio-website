"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLink = ({link}) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800`} href={link.url}>{link.title}</Link>
  );
}

export default NavLink;