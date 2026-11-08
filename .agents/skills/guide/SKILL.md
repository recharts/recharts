---
name: guide
description: Create new article guides for Recharts users, and organize guides into navigation sections
---

# What is a guide?

Guide is an article explaining a certain topic related to Recharts. It can be a tutorial, a best practices article, or an in-depth explanation of a specific feature.
Guides are JSX components defined in `www/src/components/GuideView` folder.

# Guide structure

Each guide is a folder. Inside the folder there is `index.tsx` file which is the main component of the guide.
A guide will usually contain one or more example charts which will be in their own files in the same folder. These charts are imported and used in the main `index.tsx` file.

Look at the `example` skill (`.agents/skills/example/SKILL.md`) for instructions on how to create example charts.

# Creating a new guide

When creating a new guide, the exported component must be registered in few places for it to be visible in the UI:

- `www/src/components/GuideView/<guideName>/index.tsx` - the guide component itself
- `www/src/views/GuideView.tsx` - import the guide and add it to `guideMap` with its `section` (see below)
- `www/src/navigation.data.ts` - add the guide to `guidePages` so that it is included in the sitemap
- `www/src/locale/en-US.ts` - add the guide title in english, under `guide`
- `www/src/locale/zh-CN.ts` - add the guide title in chinese, under `guide`

All of these must be defined, otherwise the guide will not show up in the navigation.

# Sections

Guides are grouped into sections in the navigation sidebar (desktop) and in the menu (mobile).
Every guide must belong to exactly one section. The `section` property in `guideMap` is required,
so TypeScript (and CI) fails when a guide is missing one.

## Adding a guide to a section

Pick the existing section from `guideSections` in `www/src/views/GuideView.tsx` that fits the guide best:

```tsx
const guideMap: Record<string, GuideDefinition> = {
  // ...
  myNewGuide: { Component: MyNewGuide, section: 'styling' },
};
```

Guides are listed in the order in which they appear in `guideMap`, so place the new entry
next to the other guides of the same section, at the position where it should show up.
Keep `installation` as the first guide: it is the default page of `/guide/`.

## Adding a new section

Only add a section when the guide does not fit any existing one. Avoid sections with a single guide.

1. Add the section key to `guideSections` in `www/src/views/GuideView.tsx`. The order of this array is the order of sections in the navigation.
2. Add the section name under `guideSections` in `www/src/locale/en-US.ts` and `www/src/locale/zh-CN.ts`.
3. Move or add guides to the new section in `guideMap`.
4. Update the expected list of section names in `www/test/views/GuideView.spec.ts`.

Run `npm run test-website -- www/test/views/GuideView.spec.ts` to verify that every section has a name in every locale and that no section is empty.
