import React from "react";
import TestCard from "@/components/testCard";
import QuickStats from "@/components/quickStats";
import ComparisonGraph from "@/components/comparisonGraph"
import SyllabusWiseAnalysis from "@/components/syllabusWiseAnalysis"
import QuestionAnalysis from "@/components/questionAnalysis"

export default function SkillsPage() {
  return (
    <>
      <div className="px-12 py-8">
        <div>
          <h2 className="font-medium pb-8">Skill Test</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="flex flex-col gap-6 col-span-12 lg:col-span-7">
            <div>
              <TestCard />
            </div>
            <div>
              <QuickStats />
            </div>
            <div>
              <ComparisonGraph />
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-12 lg:col-span-5">
            <div>
              <SyllabusWiseAnalysis />
            </div>
            <div>
              <QuestionAnalysis />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
