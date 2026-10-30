import { describe, it } from 'vitest';
import { RuleTester } from 'eslint';
// @ts-expect-error scripts folder is not included in the tsconfig
import { noCloneElement } from '../../scripts/eslint-rules/no-clone-element.mjs';

RuleTester.describe = describe;
RuleTester.it = it;

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2022, sourceType: 'module' },
});

const error = { messageId: 'noCloneElement' };

ruleTester.run('no-clone-element', noCloneElement, {
  valid: [
    "import React from 'react'; React.createElement('div');",
    "import { createElement } from 'react'; createElement('div');",
    "import { cloneElement } from 'some-other-lib'; cloneElement(x);",
    'function cloneElement() {} cloneElement();',
  ],
  invalid: [
    { code: "import React from 'react'; React.cloneElement(el, {});", errors: [error] },
    { code: "import * as React from 'react'; React['cloneElement'](el);", errors: [error] },
    { code: "import { cloneElement } from 'react'; cloneElement(a); cloneElement(b);", errors: [error, error] },
    { code: "import { cloneElement as clone } from 'react'; clone(a);", errors: [error] },
    { code: "import { cloneElement } from 'react';", errors: [error] },
  ],
});
