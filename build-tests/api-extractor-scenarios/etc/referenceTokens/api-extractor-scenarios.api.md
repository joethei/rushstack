## API Report File for "api-extractor-scenarios"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Lib2Class } from 'api-extractor-lib2-test';

// @public
export namespace n1 {
    // @internal (undocumented)
    export namespace n2 {
        // (undocumented)
        export namespace n3 {
            // (undocumented)
            export function someFunction3(): n2.n3.SomeType3;
            // (undocumented)
            export type SomeType3 = number;
        }
        // (undocumented)
        export function someFunction2(): SomeType2;
        // (undocumented)
        export type SomeType2 = number;
            {};
    }
    // @internal (undocumented)
    export function someFunction1(): SomeType1;
    // @internal (undocumented)
    export type SomeType1 = number;
        {};
}

// @public (undocumented)
export class SomeClass1 {
    // @internal (undocumented)
    static staticProp: number;
}

// Warning: (ae-forgotten-export) The symbol "SomeClass2" needs to be exported by the entry point index.d.ts
//
// @public
export class SomeClass3 extends SomeClass2 {
}

// Warning: (ae-forgotten-export) The symbol "SomeClass5" needs to be exported by the entry point index.d.ts
//
// @public
export class SomeClass4 extends SomeClass5 {
}

// @public (undocumented)
export enum SomeEnum {
    // @internal (undocumented)
    A = "A",
    // @internal (undocumented)
    B = "B",
    // @internal (undocumented)
    C = "C"
}

// @public
export function someFunction5(): SomeEnum.A;

// @public
export function someFunction6(): typeof SomeClass1.staticProp;

// @public
export function someFunction7({ then }: Promise<void>): typeof Date.prototype.getDate;

// @public
export function someFunction8({ prop }: Lib2Class): void;

// @public
export function someFunction9({ prop }: SomeInterface1): void;

// @public (undocumented)
export interface SomeInterface1 {
    // @internal (undocumented)
    prop: number;
}

// @public
export interface SomeInterface1 {
    // @internal (undocumented)
    [SomeSymbol1]: () => string;
    // @internal (undocumented)
    [SomeVar1]: () => string;
}

// @public (undocumented)
export const SomeSymbol1: unique symbol;

// @public (undocumented)
export const SomeVar1 = "ThisIsSomeVar1";

// (No @packageDocumentation comment for this package)

```
