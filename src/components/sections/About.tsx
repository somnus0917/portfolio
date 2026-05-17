"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";

export function About() {
  return (
    <SectionReveal id="about">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.76fr]">
        <div>
          <Badge variant="outline" className="mb-4 font-mono text-accent">
            关于
          </Badge>
          <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            用智能制造背景连接交通数据、机器人感知与工程实现。
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
            <p>
              我是西南交通大学智能制造工程专业本科生，关注复杂系统中的感知、建模与验证。
              在国家级大学生创新创业项目中，我负责卡口摄像头数据处理与交通流量模型构建；
              在 Robocon 机器人篮球竞技赛中，我参与视觉定位方案设计和机器人联合调试。
            </p>
            <p>
              我希望把算法问题拆成清晰的工程链路：从数据采集、模型构建、实验验证，
              到现场调试和成果沉淀。这个作品集记录了我在交通感知和机器人视觉方向的代表经历。
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["GPA", "3.72/4.0"],
              ["专业排名", "23/121"],
              ["CET-4", "519"],
              ["CET-6", "536"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-border bg-card p-4">
                <p className="font-mono text-xs text-muted-foreground">{label}</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklch,var(--accent)_22%,transparent),transparent_48%),radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.16),transparent_18rem)]" />
          <div className="absolute inset-x-8 bottom-8 rounded-lg border border-border/80 bg-background/72 p-5 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-normal text-accent">
              西南交通大学 / 智能制造工程
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              科研项目负责人、机器人队视觉组成员、暑期短期支教领队、跑步协会长跑队副队长。
            </p>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
