## API Report File for "@rushstack/heft-webpack4-plugin"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { AsyncParallelHook } from 'tapable';
import type { AsyncSeriesBailHook } from 'tapable';
import type { AsyncSeriesHook } from 'tapable';
import type { Configuration } from 'webpack-dev-server';
import type { HeftConfiguration } from '@rushstack/heft';
import type { IHeftTaskSession } from '@rushstack/heft';
import type * as TWebpack from 'webpack';

// @public (undocumented)
export type IWebpackConfiguration = IWebpackConfigurationWithDevServer | IWebpackConfigurationWithDevServer[];

// @public
export interface IWebpackConfigurationFnEnvironment {
    // @internal
    heftConfiguration: HeftConfiguration;
    // @internal
    prod: boolean;
    // @internal
    production: boolean;
    // @internal
    taskSession: IHeftTaskSession;
    // @internal
    webpack: typeof TWebpack;
}

// @public (undocumented)
export interface IWebpackConfigurationWithDevServer extends TWebpack.Configuration {
    // @internal (undocumented)
    devServer?: Configuration;
}

// @public (undocumented)
export interface IWebpackPluginAccessor {
    // @internal
    readonly hooks: IWebpackPluginAccessorHooks;
    // @internal
    readonly parameters: IWebpackPluginAccessorParameters;
}

// @public (undocumented)
export interface IWebpackPluginAccessorHooks {
    // @internal
    readonly onAfterConfigure: AsyncParallelHook<IWebpackConfiguration, never, never>;
    // @internal
    readonly onConfigure: AsyncSeriesHook<IWebpackConfiguration, never, never>;
    // @internal
    readonly onEmitStats: AsyncParallelHook<TWebpack.Stats | TWebpack.compilation.MultiStats, never, never>;
    // @internal
    readonly onLoadConfiguration: AsyncSeriesBailHook<never, never, never, IWebpackConfiguration | false>;
}

// @public (undocumented)
export interface IWebpackPluginAccessorParameters {
    // @internal
    readonly isServeMode: boolean;
}

// @public (undocumented)
export const PluginName: 'webpack4-plugin';

// @public
export const STAGE_LOAD_LOCAL_CONFIG: 1000;

// (No @packageDocumentation comment for this package)

```
