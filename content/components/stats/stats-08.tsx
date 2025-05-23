"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

const data = [
  {
    name: "HR",
    progress: 25,
    budget: "$1,000",
    current: "$250",
    href: "#",
    fill: "var(--chart-1)",
  },
  {
    name: "Marketing",
    progress: 55,
    budget: "$1,000",
    current: "$550",
    href: "#",
    fill: "var(--chart-2)",
  },
  {
    name: "Finance",
    progress: 85,
    budget: "$1,000",
    current: "$850",
    href: "#",
    fill: "var(--chart-3)",
  },
  {
    name: "Engineering",
    progress: 70,
    budget: "$2,000",
    current: "$1,400",
    href: "#",
    fill: "var(--chart-4)",
  },
];

const chartConfig = {
  progress: {
    label: "Progress",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export default function Stats08() {
  return (
    <div className="flex items-center justify-center p-10 w-full">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {data.map((item) => (
          <Card key={item.name} className="p-0 gap-0">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center justify-center">
                  <ChartContainer
                    config={chartConfig}
                    className="h-[80px] w-[80px]"
                  >
                    <RadialBarChart
                      data={[item]}
                      innerRadius={30}
                      outerRadius={60}
                      barSize={6}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                        axisLine={false}
                      />
                      <RadialBar
                        dataKey="progress"
                        background
                        cornerRadius={10}
                        fill={item.fill}
                        angleAxisId={0}
                      />
                    </RadialBarChart>
                  </ChartContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base font-medium text-foreground">
                      {item.progress}%
                    </span>
                  </div>
                </div>
                <div>
                  <dd className="text-base font-medium text-foreground">
                    {item.current} / {item.budget}
                  </dd>
                  <dt className="text-sm text-muted-foreground">
                    Budget {item.name}
                  </dt>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-end border-t border-border !p-0">
              <a
                href={item.href}
                className="text-sm font-medium text-primary px-6 py-3 hover:text-primary/90"
              >
                View more &#8594;
              </a>
            </CardFooter>
          </Card>
        ))}
      </dl>
    </div>
  );
}
