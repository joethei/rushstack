## API Report File for "api-extractor-scenarios"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export abstract class AbstractClass {
    // @internal (undocumented)
    abstract member(): void;
}

// @public (undocumented)
export class ClassWithTypeParameter<T> {
}

// @public (undocumented)
export const CONST_VARIABLE: string;

// @public (undocumented)
export const enum ConstEnum {
    // @internal (undocumented)
    One = 1,
    // @internal (undocumented)
    Two = 2,
    // @internal (undocumented)
    Zero = 0
}

// @public (undocumented)
export class ExtendsClassWithTypeParameter extends ClassWithTypeParameter<SimpleClass> {
}

// @public (undocumented)
export interface IInterface {
    // @internal (undocumented)
    member: string;
}

// @public (undocumented)
export namespace n1 {
    // @internal (undocumented)
    export namespace n2 {
        // (undocumented)
        export class SomeClass3 {
        }
    }
    // @internal (undocumented)
    export class SomeClass1 {
    }
    // @internal (undocumented)
    export class SomeClass2 extends SomeClass1 {
    }
        {};
}

// @public (undocumented)
export namespace n1 {
    // @internal (undocumented)
    export class SomeClass4 {
    }
}

// @public (undocumented)
export let nonConstVariable: string;

// @public (undocumented)
export enum RegularEnum {
    // @internal
    One = 1,
    // @internal
    Two = 2,
    // @internal
    Zero = 0
}

// @public (undocumented)
export class SimpleClass {
    // @internal (undocumented)
    member(): void;
    // @internal (undocumented)
    optionalParamMethod(x?: number): void;
    // @internal (undocumented)
    get readonlyProperty(): string;
    // @internal (undocumented)
    readonly someReadonlyProp = 5;
    // @internal (undocumented)
    readonly someReadonlyPropWithType: number;
    // @internal (undocumented)
    get writeableProperty(): string;
    set writeableProperty(value: string);
}

// @public (undocumented)
export function someFunction(): void;

// @public (undocumented)
export type SomeType = number;

// @public (undocumented)
export const VARIABLE_WITHOUT_EXPLICIT_TYPE = "hello";

// (No @packageDocumentation comment for this package)

```
