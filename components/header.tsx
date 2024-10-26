import Image from "next/image";
import logo from "@/assets/logo.png";
import user from "@/assets/user.png";

export default function Header() {
  return (
    <>
      <header className="px-4 lg:px-12 py-8 border-b">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="..." width={100} height={100} className="size-6 lg:size-12" />
            <h1 className="text-xl lg:text-4xl font-bold">WhatBytes</h1>
          </div>
          <div>
            <div className="p-2 flex items-center border-2 rounded-xl gap-4">
              <Image src={user} alt="..." width={30} height={30} className="rounded-full object-cover object-center aspect-square" />
              <p className="text-sm lg:text-base font-semibold">Rahil Siddique</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
