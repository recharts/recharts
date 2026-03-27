---
name: guide
description: Create new article guides for Recharts users
---

# What is a guide?

Guide is an article explaining a certain topic related to Recharts. It can be a tutorial, a best practices article, or an in-depth explanation of a specific feature.
Guides are JSX components defined in `www/src/components/GuideView` folder.

# Guide structure

Each guide is a folder. Inside the folder there is `index.tsx` file which is the main component of the guide.
A guide will usually contain one or more example charts which will be in their own files in the same folder. These charts are imported and used in the main `index.tsx` file.

Look at the `website-example` skill for instructions on how to create example charts.

# Creating a new guide

When creating a new guide, the exported component must be registered in few places for it to be visible in the UI:

- `www/src/components/GuideView/<guideName>/index.tsx` - the guide component itself
- `www/src/views/GuideView.tsx` - import and add the guide to the list of guides
- `www/src/navigation.data.ts` - add the guide to the navigation data for it to be visible in the sidebar
- `www/src/locale/en-US.ts` - add the guide title in english
- `www/src/locale/zh-CN.ts` - add the guide title in chinese

All of these must be defined, otherwise the guide will not show up in the navigation.
