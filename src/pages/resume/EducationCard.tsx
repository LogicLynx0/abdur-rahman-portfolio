import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import React from "react";

const EducationCard = () => {
  return (
    <div>
      <Card className="bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-all duration-300 hover:scale-[1.02] animate-fade-in">
        <CardHeader>
          <CardTitle className="text-blue-400">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-white">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-blue-400 font-medium">
                  University of Technology
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Relevant Coursework: Web Development, Data Structures,
                  Software Engineering
                </p>
              </div>
              <span className="text-gray-400 text-sm bg-slate-700 px-3 py-1 rounded-full">
                2017 - 2021
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationCard;
