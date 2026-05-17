"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const categories = ["交通建模", "机器人视觉", "工程工具"] as const;

export function Skills() {
  return (
    <SectionReveal id="skills">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="outline" className="mb-4 font-mono text-accent">
            能力
          </Badge>
          <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            从数据建模到机器人现场调试的能力栈。
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          这些能力来自交通态势感知科研项目和 Robocon 机器人竞赛，覆盖数据处理、
          路网建模、激光雷达定位、点云识别和协同通信。
        </p>
      </div>

      <TooltipProvider delayDuration={120}>
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-4 font-mono text-sm text-muted-foreground">{category}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className="group flex min-h-24 flex-col items-center justify-center gap-3 rounded-md border border-border/80 bg-background/55 p-3 text-center transition-colors hover:border-accent hover:bg-accent/10"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.04, duration: 0.4 }}
                            whileHover={{ y: -3 }}
                          >
                            <Icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-60">
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </SectionReveal>
  );
}
