## API Report File for "api-extractor-scenarios"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Lib2Class } from 'api-extractor-lib2-test/lib/index';

// @public (undocumented)
export function f(arg1: Lib1Class, arg2: Lib2Class): void;

// Warning: (ae-forgotten-export) The symbol "Lib1ForgottenExport" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export class Lib1Class extends Lib1ForgottenExport {
    // @internal (undocumented)
    readonly readonlyProperty: string;
    // @internal (undocumented)
    writeableProperty: string;
}

export { Lib2Class }

// (No @packageDocumentation comment for this package)

```
