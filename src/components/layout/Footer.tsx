// Server Component
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/username", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/username", icon: Linkedin },
  { label: "邮箱", href: "mailto:hello@example.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} 陈磊。使用 Next.js 构建。</p>
        <div className="flex items-center gap-2">
          {socials.map((social) => {
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
        </div>
      </div>
    </footer>
  );
}
