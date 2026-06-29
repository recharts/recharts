import { startVitest } from 'vitest/node';
import type { TestResult } from 'vitest/node';
import { readFile, writeFile } from 'node:fs/promises';
import * as prettier from 'prettier';

const model = 'gemma4:12b-mlx';

const vitest = await startVitest('test', [], {
  project: ['unit:lib'],
  run: true,
  // bail: 2,
  // reporters: ['minimal'],
  watch: false,
});

console.log('vitest finishes');

const testModules = vitest.state.getTestModules();

const failures = testModules.filter(testModule => !testModule.ok()).map(f => f.children.allTests('failed'));

async function readFileLine(fileName: string, lineNumber: number) {
  return (await readFile(fileName, 'utf-8')).split('\n')[lineNumber - 1];
}

function assertNotNull<T>(item: T): asserts item is NonNullable<T> {
  if (item == null) {
    throw new Error('Unexpected null');
  }
}

async function replaceLineInFile(filePath: string, lineNumber: number, newContent: string) {
  console.log(`New content: ${filePath}:${lineNumber} -> ${newContent}`);
  // 1. Read the file and split it into an array of lines
  const data = await readFile(filePath, 'utf-8');
  const lines = data.split('\n');

  // 2. Ensure the line number exists in the file (1-indexed check)
  if (lineNumber < 1 || lineNumber > lines.length) {
    throw new Error(`Line number ${lineNumber} is out of bounds.`);
  }

  // 3. Replace the specific line (adjusting for 0-indexed array)
  lines[lineNumber - 1] = newContent;

  // 4. Join the lines back together and write to the file
  const newFileContent = lines.join('\n');

  let prettyFileContent: string;
  try {
    const prettierConfig = await prettier.resolveConfig(filePath);
    prettyFileContent = await prettier.format(newFileContent, { parser: 'typescript', ...prettierConfig });
  } catch (err) {
    console.error('Could not prettier the result', err);
  }
  assertNotNull(prettyFileContent);

  return writeFile(filePath, prettyFileContent, 'utf-8');
}

function createPrompt(errorMessage: string, sourceLine: string, fileName: string, lineNumber: number) {
  return `After a library update, a test started failing. Please output a new line with updated assertion so that the test passes.
Only output the line of code. No further instructions, no explanations or details - only one line of code.

Example output:
expect(spy).not.toHaveBeenCalled();
End of example

Another example:
expect(spy).toHaveBeenCalledTimes(7);
End of example

Here is the test failure message:
${errorMessage}

The message originated in file ${fileName} on line ${lineNumber}:
${sourceLine}`;
}

function perSecond(count: number, nanos: number) {
  const seconds = nanos / (10 ^ 9);
  return Math.floor(count / seconds);
}

async function callOllama(prompt: string): Promise<string> {
  console.log('Sending prompt to LLM:\n', prompt);
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    body: JSON.stringify({ model, stream: false, prompt }),
  });
  const body = await res.json();
  console.log('Model replied:', body);
  console.log('prompt eval: ', perSecond(body.prompt_eval_count, body.prompt_eval_duration));
  console.log('tokens p/s : ', perSecond(body.eval_count, body.eval_duration));
  return body.response;
}

console.log(`Detected ${failures.length} test failures, attempting to fix now`);
for (const failureGenerator of failures) {
  for (const testCase of failureGenerator) {
    const testResult: TestResult = testCase.result();
    const { errors } = testResult;
    assertNotNull(errors);
    for (const error of errors) {
      const { message } = error;
      const stack = error.stacks?.[0];
      assertNotNull(stack);
      if (stack == null) {
        throw new Error('No stack found');
      }
      const { file, line } = stack;
      const sourceLine: string | undefined = await readFileLine(file, line);
      assertNotNull(sourceLine);
      const prompt = createPrompt(message, sourceLine, file, line);
      const newLine = await callOllama(prompt);
      await replaceLineInFile(file, line, newLine);
    }
  }
}

await vitest.close();
