## API Report File for "api-extractor-scenarios"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export class Item {
    // @internal (undocumented)
    options: Options;
}

// @public (undocumented)
interface Options {
    // @internal (undocumented)
    color: 'red' | 'blue';
    // @internal (undocumented)
    name: string;
    // @internal (undocumented)
    subOptions: SubOptions;
}

declare namespace renamed {
    export {
        sub,
        Options
    }
}
export { renamed }

declare namespace sub {
    export {
        SubOptions
    }
}

// @public (undocumented)
interface SubOptions {
    // @internal (undocumented)
    count: number;
}

// (No @packageDocumentation comment for this package)

```
