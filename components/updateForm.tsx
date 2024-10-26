import React from "react";
import Image from "next/image";
import html from "@/assets/html.svg";

export default function updateForm({ close }: any) {
  return (
    <>
      <div className="absolute inset-0 m-auto bg-black/25 z-10 w-screen h-screen">
        <div className="relative w-full h-full">
          <div className="bg-white p-6 border rounded-xl w-fit h-fit inset-0 m-auto absolute">
            <div className="flex justify-between items-center pb-6">
              <h1 className="text-2xl font-bold text-center">Update Scores</h1>
              <Image src={html} alt="..." width={40} />
            </div>
            <div className="pb-6 flex flex-col gap-6">
              <div className="max-sm:flex-col flex justify-between items-start sm:items-center gap-4 sm:gap-12">
                <div className="flex justify-between items-center gap-3">
                  <div className="relative">
                    <span className="bg-blue-800 px-2 py-0.5 rounded-full text-white">
                      1
                    </span>
                  </div>
                  <p>
                    Update Your <span className="font-bold">Rank</span>
                  </p>
                </div>
                <input type="text" name="rank" id="rank" className="outline-none outline-blue-800 rounded px-1 max-sm:w-full" />
              </div>
              <div className="max-sm:flex-col flex justify-between items-start sm:items-center gap-4 sm:gap-12">
                <div className="flex justify-between items-center gap-3">
                  <div className="relative">
                    <span className="bg-blue-800 px-2 py-0.5 rounded-full text-white">
                      2
                    </span>
                  </div>
                  <p>
                    Update Your <span className="font-bold">Percentile</span>
                  </p>
                </div>
                <input type="text" name="rank" id="rank" className="outline-none outline-blue-800 rounded px-1 max-sm:w-full" />
              </div>
              <div className="max-sm:flex-col flex justify-between items-start sm:items-center gap-4 sm:gap-12">
                <div className="flex justify-between items-center gap-3">
                  <div className="relative">
                    <span className="bg-blue-800 px-2 py-0.5 rounded-full text-white">
                      3
                    </span>
                  </div>
                  <p>
                    Update Your <span className="font-bold">Current Score (out of 15)</span>
                  </p>
                </div>
                <input type="text" name="rank" id="rank" className="outline-none outline-blue-800 rounded px-1 max-sm:w-full" />
              </div>
            </div>
            <div className="flex gap-4 justify-end w-full">
              <button onClick={close} className="border-2 border-blue-800 rounded px-2 py-1 font-semibold">Cancel</button>
              <button type="submit" className="border-2 border-blue-800 rounded px-2 py-1 bg-blue-800 text-white font-semibold">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
