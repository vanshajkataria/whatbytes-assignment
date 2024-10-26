import { Progress } from "antd";
import React from "react";
import { useDataContext } from '@/context/DataContext';

export default function QuestionAnalysis() {
  const { data } = useDataContext();
  return (
    <>
      <div className="flex flex-col gap-12 border w-full p-6 rounded-lg">
        <div className="flex justify-between w-full">
          <h3 className="font-bold">Question Analysis</h3>
          <p className="font-bold text-blue-600">{data.score}/15</p>
        </div>
        <div>
          <p>
            <span className="font-bold text-gray-600">
              You scored {data.score} question correct out of 15.
            </span>{" "}
            However it still needs some improvements.
          </p>
        </div>
        <div className="flex justify-center items-center w-full relative">
          <Progress type="circle" percent={data.score/15*100} strokeWidth={15} size={175} strokeLinecap={"square"} showInfo={false} />
          <span className="absolute text-4xl">🎯</span>
        </div>
      </div>
    </>
  );
}
