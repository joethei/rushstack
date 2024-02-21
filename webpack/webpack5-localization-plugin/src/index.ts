// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

export { LocalizationPlugin, type IStringPlaceholder as _IStringPlaceholder } from './LocalizationPlugin';
export { TrueHashPlugin, type ITrueHashPluginOptions } from './TrueHashPlugin';

export {
  IDefaultLocaleOptions,
  ILocaleData,
  ILocaleElementMap,
  ILocaleFileData,
  ILocaleFileObject,
  ILocalizationPluginOptions,
  ILocalizationStats,
  ILocalizationStatsChunkGroup,
  ILocalizationStatsEntrypoint,
  ILocalizationStatsOptions,
  ILocalizedData,
  ILocalizedStrings,
  IPassthroughLocaleOptions,
  IPseudolocalesOptions,
  IResolvedMissingTranslations
} from './interfaces';
export { ILocalizedWebpackChunk } from './webpackInterfaces';
