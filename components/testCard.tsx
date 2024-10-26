import React, { useState } from "react";
import Image from "next/image";
import html from "@/assets/html.svg"
import UpdateForm from "@/components/updateForm"

export default function TestCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <div className="flex max-sm:flex-col justify-between items-center gap-8 border w-full p-6 rounded-lg">
        <div>
            <Image src={html} alt="..." width={40} />
        </div>
        <div>
            <h3 className="text-sm lg:text-base font-bold">Hyper Text Markup Language</h3>
            <p className="text-sm lg:text-base">Questions: 08 | Duration: 15 mins I Submitted on 5 June 2021</p>
        </div>
        <div>
            <button onClick={toggle} className="text-white font-bold bg-blue-900 px-5 py-3 rounded-lg">Update</button>
        </div>
      </div>
      {isOpen && <UpdateForm close={toggle}/>}
    </>
  );
}
