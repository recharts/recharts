# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/ScatterChartApiExamples.spec-vr.tsx >> MultipleYAxesScatterChart
- Location: test-vr/tests/www/ScatterChartApiExamples.spec-vr.tsx:24:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/webkit-2272/pw_run.sh
╔════════════════════════════════════════════════════════╗
║ Looks like Playwright was just updated to 1.59.0.      ║
║ Please update docker image as well.                    ║
║ -  current: mcr.microsoft.com/playwright:v1.58.2-jammy ║
║ - required: mcr.microsoft.com/playwright:v1.59.0-jammy ║
║                                                        ║
║ <3 Playwright Team                                     ║
╚════════════════════════════════════════════════════════╝
```