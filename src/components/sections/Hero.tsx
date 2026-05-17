"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const words = ["交通态势感知", "与", "机器人视觉定位"];

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-24 flex-col justify-center py-20"
    >
      <div className="max-w-4xl">
        <motion.p
          className="mb-5 font-mono text-sm uppercase tracking-normal text-accent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          陈磊 / 西南交通大学 / 智能制造工程
        </motion.p>

        <h1 className="text-balance text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
          {words.map((word, index) => (
            <motion.span
              key={word}
              className="mr-3 inline-block"
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.12 + index * 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.55 }}
        >
          聚焦城市路网多尺度感知、交通流量建模、机器人激光雷达定位与点云目标识别，
          在科研项目和 Robocon 竞赛中把算法方案落到可验证的工程系统里。
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.76, duration: 0.55 }}
        >
          <Button asChild size="default">
            <a href="#projects">
              查看项目
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="default">
            <a href="#contact">联系我</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center gap-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {[
            { label: "GitHub", href: "https://github.com/username", icon: Github },
            { label: "LinkedIn", href: "https://linkedin.com/in/username", icon: Linkedin },
            { label: "邮箱", href: "mailto:hello@example.com", icon: Mail },
          ].map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-md border border-border/80 p-2 transition-colors hover:border-accent hover:text-accent"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
