import React from "react";

interface ComparisonProps {
  title: string;
  typeA: string;
  typeB: string;
  rows: { feature: string; valA: string; valB: string }[];
}

export function ComparisonTable({ title, typeA, typeB, rows }: ComparisonProps) {
  return (
    <div className="card-brand p-6 space-y-4 my-8 overflow-hidden">
      <h3 className="font-heading font-bold text-xl text-[#0F3D5E] mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-[#DCE8F2] bg-[#F5F8FB]">
              <th className="p-3 text-[#0F3D5E] font-bold">Característica</th>
              <th className="p-3 text-[#2A7DB8] font-bold">{typeA}</th>
              <th className="p-3 text-[#0F3D5E] font-bold">{typeB}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DCE8F2]">
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F5F8FB]"}>
                <td className="p-3 font-semibold text-[#0F3D5E]">{row.feature}</td>
                <td className="p-3 text-[#4A6378]">{row.valA}</td>
                <td className="p-3 text-[#4A6378]">{row.valB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
