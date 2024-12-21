
"use client"
import { count } from "console";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Boys",
    count: 56,
    fill: "#FAE27C",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#add8e6",
  },
  
  
];



const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/*TITLE */}
       <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Students</h1>
          <Image src="/moreDark.png" alt="image" width={20} height={20} />
       </div>
       {/*CHART */}
       <div className="relative w-full h-[75%]">
        <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
         

          <RadialBar
            
            
            background
            
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="Image" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/> 
       </div>
       {/* BOTTOM */}
       <div className="flex justify-center gap-16">
  <div className="flex flex-col gap-1 items-center">
    {/* Dot */}
    <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
    {/* Text */}
    <h1 className="font-bold">1,234</h1>
    <h2 className="text-xs text-gray-300">Boys (55%)</h2>
  </div>
  <div className="flex justify-center gap-16">
  <div className="flex flex-col gap-1 items-center">
    {/* Dot */}
    <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
    {/* Text */}
    <h1 className="font-bold">1,234</h1>
    <h2 className="text-xs text-gray-300">Girls (45%)</h2>
  </div>
</div>

</div>

    </div>
  )
}

export default CountChart