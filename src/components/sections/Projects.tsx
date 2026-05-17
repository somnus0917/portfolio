"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projectTags, projects, type ProjectTag } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionReveal } from "@/components/ui/section-reveal";
import { cn } from "@/lib/utils";

type ActiveTag = ProjectTag | "全部";

export function Projects() {
  const [activeTag, setActiveTag] = useState<ActiveTag>("全部");

  const filteredProjects = useMemo(() => {
    if (activeTag === "全部") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <SectionReveal id="projects">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Badge variant="outline" className="mb-4 font-mono text-accent">
            项目
          </Badge>
          <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            代表性科研与竞赛经历。
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {projectTags.map((tag) => (
            <Button
              key={tag}
              type="button"
              variant={activeTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTag(tag)}
              className="font-mono"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              <Card className="h-full overflow-hidden transition-colors hover:border-accent/80">
                <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-none">
                  <div
                    className={cn(
                      "aspect-[16/10] border-b border-border bg-gradient-to-br",
                      project.imageTone,
                    )}
                  >
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} 项目封面`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                        <span className="rounded-md border border-white/15 bg-black/25 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 hover:text-accent"
                    >
                      {project.title}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                  <p className="font-mono text-xs text-accent">{project.subtitle}</p>
                  <CardDescription className="leading-6">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm leading-6 text-muted-foreground">
                    <span className="font-medium text-foreground">负责内容：</span>
                    {project.role}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.outcomes.map((outcome) => (
                      <Badge key={outcome} variant="outline">
                        {outcome}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/projects/${project.slug}`}>
                      查看详细介绍
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionReveal>
  );
}
