"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    revenue: 12000,
  },
  {
    month: "Feb",
    revenue: 19000,
  },
  {
    month: "Mar",
    revenue: 24000,
  },
  {
    month: "Apr",
    revenue: 32000,
  },
  {
    month: "May",
    revenue: 41000,
  },
  {
    month: "Jun",
    revenue: 52000,
  },
];

export default function RevenueChart() {
  return (
    <div className="h-[320px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <CartesianGrid
            stroke="#27272a"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#71717a" }}
          />

          <Tooltip
            contentStyle={{
              background: "#0A0E1D",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#facc15"
            strokeWidth={4}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}