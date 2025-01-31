## API Report File for "@rushstack/rush-azure-storage-build-cache-plugin"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureAuthorityHosts } from '@azure/identity';
import { DeviceCodeCredential } from '@azure/identity';
import { DeviceCodeCredentialOptions } from '@azure/identity';
import type { ICredentialCacheEntry } from '@rushstack/rush-sdk';
import type { IRushPlugin } from '@rushstack/rush-sdk';
import type { ITerminal } from '@rushstack/terminal';
import type { RushConfiguration } from '@rushstack/rush-sdk';
import type { RushSession } from '@rushstack/rush-sdk';

// @public (undocumented)
export abstract class AzureAuthenticationBase {
    // @internal
    constructor(options: IAzureAuthenticationBaseOptions);
    // @internal (undocumented)
    protected readonly _additionalDeviceCodeCredentialOptions: DeviceCodeCredentialOptions | undefined;
    // @internal (undocumented)
    protected readonly _azureEnvironment: AzureEnvironmentName;
    // @internal (undocumented)
    protected abstract readonly _credentialKindForLogging: string;
    // @internal (undocumented)
    protected abstract readonly _credentialNameForCache: string;
    // @internal (undocumented)
    protected readonly _credentialUpdateCommandForLogging: string | undefined;
    // @internal (undocumented)
    deleteCachedCredentialsAsync(terminal: ITerminal): Promise<void>;
    // @internal
    protected abstract _getCacheIdParts(): string[];
    // @internal (undocumented)
    protected abstract _getCredentialFromDeviceCodeAsync(terminal: ITerminal, deviceCodeCredential: DeviceCodeCredential): Promise<ICredentialResult>;
    // @internal (undocumented)
    tryGetCachedCredentialAsync(options?: ITryGetCachedCredentialOptionsThrow | ITryGetCachedCredentialOptionsIgnore): Promise<ICredentialCacheEntry | undefined>;
    // @internal (undocumented)
    tryGetCachedCredentialAsync(options: ITryGetCachedCredentialOptionsLogWarning): Promise<ICredentialCacheEntry | undefined>;
    // @internal (undocumented)
    updateCachedCredentialAsync(terminal: ITerminal, credential: string): Promise<void>;
    // @internal
    updateCachedCredentialInteractiveAsync(terminal: ITerminal, onlyIfExistingCredentialExpiresAfter?: Date): Promise<void>;
}

// @public (undocumented)
export type AzureEnvironmentName = keyof typeof AzureAuthorityHosts;

// @public (undocumented)
export class AzureStorageAuthentication extends AzureAuthenticationBase {
    // @internal
    constructor(options: IAzureStorageAuthenticationOptions);
    // @internal (undocumented)
    protected readonly _credentialKindForLogging: string;
    // @internal (undocumented)
    protected readonly _credentialNameForCache: string;
    // @internal (undocumented)
    protected _getCacheIdParts(): string[];
    // @internal (undocumented)
    protected _getCredentialFromDeviceCodeAsync(terminal: ITerminal, deviceCodeCredential: DeviceCodeCredential): Promise<ICredentialResult>;
    // @internal (undocumented)
    protected readonly _isCacheWriteAllowedByConfiguration: boolean;
    // @internal (undocumented)
    protected readonly _storageAccountName: string;
    // @internal (undocumented)
    protected readonly _storageAccountUrl: string;
    // @internal (undocumented)
    protected readonly _storageContainerName: string;
}

// @public (undocumented)
export type ExpiredCredentialBehavior = 'logWarning' | 'throwError' | 'ignore';

// @public (undocumented)
export interface IAzureAuthenticationBaseOptions {
    // @internal (undocumented)
    azureEnvironment?: AzureEnvironmentName;
    // @internal (undocumented)
    credentialUpdateCommandForLogging?: string | undefined;
}

// @public (undocumented)
export interface IAzureStorageAuthenticationOptions extends IAzureAuthenticationBaseOptions {
    // @internal (undocumented)
    isCacheWriteAllowed: boolean;
    // @internal (undocumented)
    storageAccountName: string;
    // @internal (undocumented)
    storageContainerName: string;
}

// @public (undocumented)
export interface ICredentialResult {
    // @internal (undocumented)
    credentialMetadata?: object;
    // @internal (undocumented)
    credentialString: string;
    // @internal (undocumented)
    expiresOn?: Date;
}

// @public (undocumented)
export interface ITryGetCachedCredentialOptionsBase {
    // @internal
    expiredCredentialBehavior?: ExpiredCredentialBehavior;
    // @internal (undocumented)
    terminal?: ITerminal;
}

// @public (undocumented)
export interface ITryGetCachedCredentialOptionsIgnore extends ITryGetCachedCredentialOptionsBase {
    // @internal
    expiredCredentialBehavior: 'ignore';
}

// @public (undocumented)
export interface ITryGetCachedCredentialOptionsLogWarning extends ITryGetCachedCredentialOptionsBase {
    // @internal
    expiredCredentialBehavior: 'logWarning';
    // @internal (undocumented)
    terminal: ITerminal;
}

// @public (undocumented)
export interface ITryGetCachedCredentialOptionsThrow extends ITryGetCachedCredentialOptionsBase {
    // @internal
    expiredCredentialBehavior: 'throwError';
}

// @public (undocumented)
class RushAzureStorageBuildCachePlugin implements IRushPlugin {
    // @internal (undocumented)
    apply(rushSession: RushSession, rushConfig: RushConfiguration): void;
    // @internal (undocumented)
    pluginName: string;
}
export default RushAzureStorageBuildCachePlugin;

// (No @packageDocumentation comment for this package)

```
