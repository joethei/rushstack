## API Report File for "api-extractor-scenarios"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @alpha
export function alphaFunctionReturnsBeta(): IBeta;

// @beta (undocumented)
export interface IBeta {
    // @internal (undocumented)
    x: number;
}

// Warning: (ae-incompatible-release-tags) The symbol "publicFunctionReturnsBeta" is marked as @public, but its signature references "IBeta" which is marked as @beta
//
// @public
export function publicFunctionReturnsBeta(): IBeta;

// (No @packageDocumentation comment for this package)

```
