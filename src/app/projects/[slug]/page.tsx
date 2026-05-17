// Server Component
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "项目不存在 | 陈磊",
    };
  }

  return {
    title: `${project.title} | 陈磊`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="h-4 w-4" />
          返回项目列表
        </Link>
      </Button>

      <article>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="font-mono text-sm text-accent">{project.subtitle}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.detail.overview}</p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src={project.image}
              alt={`${project.title} 项目封面`}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.62fr]">
          <section className="space-y-5">
            {project.detail.sections.map((section) => (
              <div key={section.title} className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-semibold tracking-normal text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 leading-8 text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </section>

          <aside className="rounded-lg border border-border bg-card p-6 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xl font-semibold tracking-normal text-foreground">关键成果</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.outcomes.map((outcome) => (
                <Badge key={outcome} variant="outline">
                  {outcome}
                </Badge>
              ))}
            </div>

            <h3 className="mt-8 font-mono text-sm text-muted-foreground">项目要点</h3>
            <ul className="mt-4 space-y-4">
              {project.detail.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
    </main>
  );
}
