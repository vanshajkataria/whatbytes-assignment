import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function comparisonGraph() {
  return (
    <>
      <div className="flex flex-col gap-12 border w-full p-6 rounded-lg">
        <div className="flex justify-between w-full">
          <h3 className="font-bold">Question Analysis</h3>
        </div>
        <div>
          <p>
            <span className="font-bold text-gray-600">
              You scored 90% percentile
            </span>{" "}
            which is lower than the average percentile 72% of all the engineers
            who took this assessment
          </p>
        </div>
        <div className="overflow-scroll">
          <LineChart
            xAxis={[{ data: [0, 10, 20, 30, 30, 30, 35, 40, 55, 60, 90, 100] }]}
            series={[
              {
                data: [1, 2, 2, 4, 3, 5, 6, 10, 9, 10, 3, 2],
                color: "#bfdbfe",
              },
            ]}
            width={600}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
