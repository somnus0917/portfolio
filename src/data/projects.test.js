import { describe, expect, test } from "bun:test";

import { getProjectBySlug, projects } from "./projects";

describe("projects detail data", () => {
  test("each project can be resolved by slug and has detail content", () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.detail).toBeTruthy();
      expect(project.detail.sections.length).toBeGreaterThan(0);
      expect(project.detail.highlights.length).toBeGreaterThan(0);
      expect(getProjectBySlug(project.slug)?.title).toBe(project.title);
    }
  });
});
