import { Progress } from "antd";
import React from "react";

export default function QuestionAnalysis() {
  return (
    <>
      <div className="flex flex-col gap-12 border w-full p-6 rounded-lg">
        <div className="flex justify-between w-full">
          <h3 className="font-bold">Question Analysis</h3>
          <p className="font-bold text-blue-600">10/15</p>
        </div>
        <div>
          <p>
            <span className="font-bold text-gray-600">
              You scored 12 question correct out of 15.
            </span>{" "}
            However it still needs some improvements.
          </p>
        </div>
        <div className="flex justify-center items-center w-full relative">
          <Progress type="circle" percent={12/15*100} strokeWidth={15} size={175} strokeLinecap={"square"} showInfo={false} />
          <span className="absolute text-4xl">🎯</span>
        </div>
      </div>
    </>
  );
}
