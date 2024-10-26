import { Progress } from "antd";
import data from "@/data/data.json";

export default function SyllabusWiseAnalysis() {
  return (
    <>
      <div className="flex flex-col gap-6 border w-full p-6 rounded-lg">
        <div>
          <h3 className="font-bold">Syllabus Wise Analysis</h3>
        </div>
        {data.syllabusWiseAnalysis.map((item) => {
            let color;
            if (item.percentage <= 30) {
                color = 'red';
            } else if (item.percentage <= 60) {
                color = 'orange';
            } else if (item.percentage <= 90) {
                color = 'blue';
            } else {
                color = 'green';
            }
            return(
          <div key={item.id} className="pb-6">
            <p className="font-medium">{item.title}</p>
            <div className="flex justify-between items-center gap-6">
              <Progress percent={item.percentage} showInfo={false} strokeColor={color} />
              <span style={{ color: color }} className={`font-bold`}>{item.percentage}%</span>
            </div>
          </div>
        );})}
      </div>
    </>
  );
}
