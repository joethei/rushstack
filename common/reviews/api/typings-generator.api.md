## API Report File for "@rushstack/typings-generator"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ITerminal } from '@rushstack/terminal';

// @public (undocumented)
export interface IStringValuesTypingsGeneratorBaseOptions {
    // @internal
    exportAsDefault?: boolean;
    // @internal
    exportAsDefaultInterfaceName?: string;
}

// @public (undocumented)
export interface IStringValuesTypingsGeneratorOptions<TFileContents extends string = string> extends ITypingsGeneratorOptions<IStringValueTypings | undefined, TFileContents>, IStringValuesTypingsGeneratorBaseOptions {
}

// @public (undocumented)
export interface IStringValuesTypingsGeneratorOptionsWithCustomReadFile<TFileContents = string> extends ITypingsGeneratorOptionsWithCustomReadFile<IStringValueTypings | undefined, TFileContents>, IStringValuesTypingsGeneratorBaseOptions {
}

// @public (undocumented)
export interface IStringValueTyping {
    // @internal (undocumented)
    comment?: string;
    // @internal (undocumented)
    exportName: string;
}

// @public (undocumented)
export interface IStringValueTypings {
    // @internal (undocumented)
    typings: IStringValueTyping[];
}

// @public (undocumented)
export interface ITypingsGeneratorBaseOptions {
    // @internal (undocumented)
    generatedTsFolder: string;
    // @internal (undocumented)
    globsToIgnore?: string[];
    // @internal (undocumented)
    secondaryGeneratedTsFolders?: string[];
    // @internal (undocumented)
    srcFolder: string;
    // @internal (undocumented)
    terminal?: ITerminal;
}

// @public (undocumented)
export interface ITypingsGeneratorOptions<TTypingsResult = string | undefined, TFileContents extends string = string> extends ITypingsGeneratorOptionsWithoutReadFile<TTypingsResult, TFileContents> {
    // @internal (undocumented)
    readFile?: ReadFile<TFileContents>;
}

// @public
export interface ITypingsGeneratorOptionsWithCustomReadFile<TTypingsResult = string | undefined, TFileContents = string> extends ITypingsGeneratorOptionsWithoutReadFile<TTypingsResult, TFileContents> {
    // @internal (undocumented)
    readFile: ReadFile<TFileContents>;
}

// @public (undocumented)
export interface ITypingsGeneratorOptionsWithoutReadFile<TTypingsResult = string | undefined, TFileContents = string> extends ITypingsGeneratorBaseOptions {
    // @internal (undocumented)
    fileExtensions: string[];
    // @internal @deprecated (undocumented)
    filesToIgnore?: string[];
    // @internal (undocumented)
    getAdditionalOutputFiles?: (relativePath: string) => string[];
    // @internal (undocumented)
    parseAndGenerateTypings: (fileContents: TFileContents, filePath: string, relativePath: string) => TTypingsResult | Promise<TTypingsResult>;
}

// @public (undocumented)
export type ReadFile<TFileContents = string> = (filePath: string, relativePath: string) => Promise<TFileContents> | TFileContents;

// @public
export class StringValuesTypingsGenerator<TFileContents = string> extends TypingsGenerator<TFileContents> {
    // @internal
    constructor(options: TFileContents extends string ? IStringValuesTypingsGeneratorOptions<TFileContents> : never);
    // @internal
    constructor(options: IStringValuesTypingsGeneratorOptionsWithCustomReadFile<TFileContents>);
}

// @public
export class TypingsGenerator<TFileContents = string> {
    // @internal
    constructor(options: TFileContents extends string ? ITypingsGeneratorOptions<string | undefined, TFileContents> : never);
    // @internal
    constructor(options: ITypingsGeneratorOptionsWithCustomReadFile<string | undefined, TFileContents>);
    // @internal
    generateTypingsAsync(relativeFilePaths?: string[]): Promise<void>;
    // @internal (undocumented)
    getOutputFilePaths(relativePath: string): string[];
    // @internal
    readonly ignoredFileGlobs: readonly string[];
    // @internal
    readonly inputFileGlob: string;
    // @internal (undocumented)
    protected _options: ITypingsGeneratorOptionsWithCustomReadFile<string | undefined, TFileContents>;
    // @internal
    registerDependency(consumer: string, rawDependency: string): void;
    // @internal (undocumented)
    runWatcherAsync(): Promise<void>;
    // @internal
    readonly sourceFolderPath: string;
}

```
