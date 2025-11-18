/**
 * This helper allows us to incrementally turn console warnings into test errors.
 *
 * Instead of having hundreds of warnings scroll by unnoticed, you can turn specific
 * warning types into test failures, fix them incrementally, and prevent regressions.
 *
 * Quick Start:
 * 1. Remove the exception pattern from IGNORE_WARNINGS
 * 2. Run tests - they will fail when those warnings occur
 * 3. Fix the issues in source code
 * 4. Tests pass
 */

/**
 * Warning patterns to ignore completely.
 * Use this for warnings you want to suppress while working on other issues.
 * Try to keep this list small and temporary.
 */
export const IGNORE_WARNINGS: Array<string | RegExp> = [
  /*
   * There are unfortunately many cases where we put arbitrary props on DOM elements
   * because of the element cloning - we can't tell what we have cloned.
   * This warning will stay with us as long as we support cloning.
   */
  /React does not recognize the (.+) prop on a DOM element/,
  'verticalCoordinatesGenerator should return Array but instead it returned',
  'horizontalCoordinatesGenerator should return Array but instead it returned',
];

let originalConsoleWarn: typeof console.warn, originalConsoleError: typeof console.error;

function matchesPattern(message: string, patterns: Array<string | RegExp>): boolean {
  return patterns.some(pattern => {
    if (typeof pattern === 'string') {
      return message.includes(pattern);
    }
    return pattern.test(message);
  });
}

function formatMessage(args: unknown[]): string {
  if (args.length === 0) return '';

  const first = args[0];

  // Handle React's format string style (e.g., "Warning: Something %s happened", componentName)
  if (typeof first === 'string' && first.includes('%s')) {
    let formatted = first;
    let argIndex = 1;
    formatted = formatted.replace(/%s/g, () => {
      if (argIndex < args.length) {
        const arg = args[argIndex++];
        return String(arg);
      }
      return '%s';
    });
    // Append any remaining args
    while (argIndex < args.length) {
      formatted += ` ${String(args[argIndex++])}`;
    }
    return formatted;
  }

  // Default: just join all args
  return args
    .map(arg => {
      if (typeof arg === 'string') return arg;
      if (arg instanceof Error) return arg.stack || arg.message;
      try {
        return JSON.stringify(arg);
      } catch {
        return String(arg);
      }
    })
    .join(' ');
}

export function setupConsoleWarningToError(): void {
  // Store originals on first setup
  if (!originalConsoleWarn) {
    originalConsoleWarn = console.warn;
  }
  if (!originalConsoleError) {
    originalConsoleError = console.error;
  }

  console.warn = function throwingWarn(...args: any[]) {
    const message = formatMessage(args);

    // Check if this warning should be ignored
    if (matchesPattern(message, IGNORE_WARNINGS)) {
      return;
    }

    originalConsoleWarn.apply(console, args);

    throw new Error(`Console warning treated as test failure: ${message}`);
  };

  console.error = function throwingError(...args: any[]) {
    const message = formatMessage(args);

    // Check if this error should be ignored
    if (matchesPattern(message, IGNORE_WARNINGS)) {
      return;
    }

    originalConsoleError.apply(console, args);

    throw new Error(`Console error treated as test failure: ${message}`);
  };
}

export function restoreConsole(): void {
  if (originalConsoleWarn) {
    console.warn = originalConsoleWarn;
  }
  if (originalConsoleError) {
    console.error = originalConsoleError;
  }
}
