## API Report File for "@rushstack/debug-certificate-manager"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ITerminal } from '@rushstack/terminal';

// @public
export class CertificateManager {
    // @internal
    constructor();
    ensureCertificateAsync(canGenerateNewCertificate: boolean, terminal: ITerminal, generationOptions?: ICertificateGenerationOptions): Promise<ICertificate>;
    untrustCertificateAsync(terminal: ITerminal): Promise<boolean>;
}

// @public
export class CertificateStore {
    // @internal
    constructor();
    // @internal
    get caCertificateData(): string | undefined;
    set caCertificateData(certificate: string | undefined);
    // @internal
    get caCertificatePath(): string;
    // @internal
    get certificateData(): string | undefined;
    set certificateData(certificate: string | undefined);
    // @internal
    get certificatePath(): string;
    // @internal
    get keyData(): string | undefined;
    set keyData(key: string | undefined);
}

// @public
export const DEFAULT_CERTIFICATE_SUBJECT_NAMES: ReadonlyArray<string>;

// @public
export interface ICertificate {
    // @internal
    pemCaCertificate: string | undefined;
    // @internal
    pemCertificate: string | undefined;
    // @internal
    pemKey: string | undefined;
    // @internal
    subjectAltNames: readonly string[] | undefined;
}

// @public
export interface ICertificateGenerationOptions {
    // @internal
    subjectAltNames?: ReadonlyArray<string>;
    // @internal
    subjectIPAddresses?: ReadonlyArray<string>;
    // @internal
    validityInDays?: number;
}

```
