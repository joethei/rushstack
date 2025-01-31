## API Report File for "api-documenter-test"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export abstract class AbstractClass {
    // @internal
    abstract method(): void;
    // @internal
    protected abstract property: number;
}

// @public
export interface Constraint {
}

// @public
export const constVariable: number;

// @public (undocumented)
export class DecoratorExample {
    // @internal
    creationDate: Date;
}

// @public
export interface DefaultType {
}

// @public
export class DocBaseClass {
    // @internal
    constructor();
    // @internal
    constructor(x: number);
}

// @public
export class DocClass1 extends DocBaseClass implements IDocInterface1, IDocInterface2 {
    // @internal
    constructor(name: string);
    // @internal @deprecated (undocumented)
    deprecatedExample(): void;
    // @internal
    exampleFunction(a: string, b: string): string;
    // @internal
    exampleFunction(x: number): number;
    // @internal
    genericWithConstraintAndDefault<T extends Constraint = DefaultType>(x: T): void;
    // @internal
    interestingEdgeCases(): void;
    // @internal @eventProperty
    malformedEvent: SystemEvent;
    // @internal @eventProperty
    readonly modifiedEvent: SystemEvent;
    // @internal
    protected static readonly multipleModifiersProperty: boolean;
    // @internal
    optionalParamFunction(x?: number): void;
    // @internal
    protected protectedProperty: string;
    // @internal (undocumented)
    get readonlyProperty(): string;
    // @internal
    regularProperty: SystemEvent;
    // @internal
    static sumWithExample(x: number, y: number): number;
    // @internal
    tableExample(): void;
    // @internal (undocumented)
    get writeableProperty(): string;
    set writeableProperty(value: string);
    // @internal
    set writeonlyProperty(value: string);
}

// @public
export class DocClassInterfaceMerge {
}

// @public
export interface DocClassInterfaceMerge {
}

// @public
export enum DocEnum {
    // @internal
    One = 1,
    // @internal
    Two = 2,
    // @internal
    Zero = 0
}

// @public
export enum DocEnumNamespaceMerge {
    // @internal
    Left = 0,
    // @internal
    Right = 1
}

// @public
export namespace DocEnumNamespaceMerge {
    // @internal
    export function exampleFunction(): void;
}

// @public
export namespace EcmaSmbols {
    const // @internal
    example: unique symbol;
}

// @public
export type ExampleDuplicateTypeAlias = SystemEvent | typeof SystemEvent;

// @public
export function exampleFunction(x: ExampleTypeAlias, y: number): IDocInterface1;

// @public
export type ExampleTypeAlias = Promise<boolean>;

// @public
export type ExampleUnionTypeAlias = IDocInterface1 | IDocInterface3;

// @public
export class Generic<T> {
}

// @public (undocumented)
export type GenericTypeAlias<T> = T[];

// @public (undocumented)
export interface IDocInterface1 {
    // @internal
    regularProperty: SystemEvent;
}

// @public (undocumented)
export interface IDocInterface2 extends IDocInterface1 {
    // @internal @deprecated (undocumented)
    deprecatedExample(): void;
}

// @public
export interface IDocInterface3 {
    // @internal
    "[not.a.symbol]": string;
    // @internal
    [EcmaSmbols.example]: string;
    // @internal
    (x: number): number;
    // @internal
    [x: string]: string;
    // @internal
    new (): IDocInterface1;
    // @internal
    "redundantQuotes": string;
}

// @public
export interface IDocInterface4 {
    // @internal
    Context: ({ children }: {
        children: string;
    }) => boolean;
    // @internal
    generic: Generic<number>;
    // @internal
    numberOrFunction: number | (() => number);
    // @internal
    stringOrNumber: string | number;
}

// @public
export interface IDocInterface5 {
    // @internal
    regularProperty: string;
}

// @public
export interface IDocInterface6 {
    // @internal
    regularProperty: number;
}

// @public
export interface IDocInterface6 {
    // @internal (undocumented)
    arrayProperty: IDocInterface1[];
    // @internal (undocumented)
    genericReferenceMethod<T>(x: T): T;
    // @internal (undocumented)
    intersectionProperty: IDocInterface1 & IDocInterface2;
    // @internal (undocumented)
    tupleProperty: [IDocInterface1, IDocInterface2];
    // @internal (undocumented)
    typeReferenceProperty: Generic<IDocInterface1>;
    // @internal (undocumented)
    unionProperty: IDocInterface1 | IDocInterface2;
}

// @public
export interface IDocInterface7 {
    // @internal
    optionalField?: boolean;
    // @internal
    optionalMember?(): any;
    // @internal
    readonly optionalReadonlyField?: boolean;
    // @internal (undocumented)
    optionalUndocumentedField?: boolean;
}

// @public
export namespace OuterNamespace {
    // @internal
    export namespace InnerNamespace {
        export function nestedFunction(x: number): number;
    }
    let // @internal
    nestedVariable: boolean;
}

// @public
export class SystemEvent {
    // @internal
    addHandler(handler: () => void): void;
}

// @public (undocumented)
export type TypeAlias = number;

// @public (undocumented)
export function yamlReferenceUniquenessTest(): IDocInterface1;

```
