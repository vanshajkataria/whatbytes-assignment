import React from "react";

export default function QuickStats() {
  return (
    <>
      <div className="border w-full p-6 rounded-lg">
        <div className="pb-6">
          <h3 className="font-bold">Quick Statistics</h3>
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start justify-evenly items-center max-sm:divide-y sm:divide-x">
          <div className="flex items-center gap-4 max-sm:pb-4 sm:pr-4 max-sm:w-full">
            <div>
              <span className="bg-slate-100 p-3 rounded-full text-sm lg:text-lg">🏆</span>
            </div>
            <div>
              <h2 className="font-bold">1</h2>
              <p className="text-sm lg:text-base">YOUR RANK</p>
            </div>
          </div>
          <div className="flex items-center gap-4 max-sm:py-4 sm:px-4 max-sm:w-full">
            <div>
              <span className="bg-slate-100 p-3 rounded-full text-sm lg:text-lg">🗓️</span>
            </div>
            <div>
              <h2 className="font-bold">30%</h2>
              <p className="text-sm lg:text-base">PERCENTILE</p>
            </div>
          </div>
          <div className="flex items-center gap-4 max-sm:pt-4 sm:pl-4 max-sm:w-full">
            <div>
              <span className="bg-slate-100 p-3 rounded-full text-sm lg:text-lg">✅</span>
            </div>
            <div>
              <h2 className="font-bold">10/15</h2>
              <p className="text-sm lg:text-base">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
