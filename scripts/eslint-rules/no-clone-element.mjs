/**
 * Bans `cloneElement` from React.
 *
 * Cloning an element that the user passed in silently overrides its props, hides the data flow,
 * and React itself lists `cloneElement` as a legacy API: https://react.dev/reference/react/cloneElement
 *
 * Reports every call site, so that the suppressions ratchet counts each usage:
 * - `React.cloneElement(...)` (any `.cloneElement` member access)
 * - `cloneElement(...)` and `alias(...)` when imported from `react`
 */

const message =
  'Do not use `cloneElement`. Accept a Component instead. See https://react.dev/reference/react/cloneElement#alternatives';

/** @type {import('eslint').Rule.RuleModule} */
export const noCloneElement = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow `cloneElement` from React',
      url: 'https://react.dev/reference/react/cloneElement#alternatives',
    },
    schema: [],
    messages: { noCloneElement: message },
  },
  create(context) {
    return {
      MemberExpression(node) {
        const { property } = node;
        const name = node.computed
          ? property.type === 'Literal' && property.value
          : property.type === 'Identifier' && property.name;
        if (name === 'cloneElement') {
          context.report({ node, messageId: 'noCloneElement' });
        }
      },
      ImportSpecifier(node) {
        if (node.parent.source.value !== 'react') {
          return;
        }
        const importedName = node.imported.type === 'Identifier' ? node.imported.name : node.imported.value;
        if (importedName !== 'cloneElement') {
          return;
        }
        const references = context.sourceCode.getDeclaredVariables(node).flatMap(variable => variable.references);
        if (references.length === 0) {
          // Unused import: still report it so that nobody can sneak it in.
          context.report({ node, messageId: 'noCloneElement' });
          return;
        }
        references.forEach(reference => {
          context.report({ node: reference.identifier, messageId: 'noCloneElement' });
        });
      },
    };
  },
};

export const rechartsPlugin = {
  meta: { name: 'eslint-plugin-recharts-local' },
  rules: {
    'no-clone-element': noCloneElement,
  },
};
