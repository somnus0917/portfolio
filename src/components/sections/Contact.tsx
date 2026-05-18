"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "请输入至少 2 个字符。"),
  email: z.string().email("请输入有效的邮箱地址。"),
  message: z.string().min(12, "请填写至少 12 个字符的留言。"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: 后续替换为真实邮件或 API 集成。
    console.log("联系表单提交", values);
    reset();
  };

  return (
    <SectionReveal id="contact" className="pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <Badge variant="outline" className="mb-4 font-mono text-accent">
            联系
          </Badge>
          <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            如果你想了解项目细节，欢迎联系。
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            可以交流交通态势感知、机器人视觉定位、科研合作或竞赛经历。当前表单为本地占位提交，
            后续可接入真实邮件服务。
          </p>
          <a
            href="mailto:somnus0917chen@hotmail.com"
            className="mt-6 inline-flex font-mono text-sm text-accent underline-offset-4 hover:underline"
          >
            somnus0917chen@hotmail.com
          </a>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-border bg-card p-5 sm:p-6"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                姓名
              </label>
              <Input id="name" placeholder="请输入姓名" {...register("name")} />
              {errors.name ? (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                邮箱
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              留言
            </label>
            <Textarea
              id="message"
              placeholder="请简单介绍你想交流的内容..."
              {...register("message")}
            />
            {errors.message ? (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {isSubmitSuccessful
                ? "留言已在本地记录，后续可接入邮件服务。"
                : ""}
            </p>
            <Button type="submit" disabled={isSubmitting}>
              <Send className="h-4 w-4" />
              {isSubmitting ? "发送中..." : "发送留言"}
            </Button>
          </div>
        </form>
      </div>
    </SectionReveal>
  );
}
