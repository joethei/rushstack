/**
 * api-extractor-test-04
 *
 * Test scenarios for trimming alpha/beta/internal definitions from the generated *.d.ts files.
 *
 * @packageDocumentation
 */

import { Lib1Interface } from 'api-extractor-lib1-test';

/* Excluded from this release type: AlphaClass */

/**
 * This is a beta class
 * @beta
 */
export declare class BetaClass implements BetaInterface {
    /* Excluded from this release type: undecoratedMember */
    /* Excluded from this release type: alphaMember */
    /* Excluded from this release type: _internalMember */
}

/**
 * This is a beta interface
 * @beta
 */
export declare interface BetaInterface {
    /* Excluded from this release type: undecoratedMember */
    /* Excluded from this release type: alphaMember */
    /* Excluded from this release type: _internalMember */
}

/**
 * This is a const enum marked as \@beta
 * @beta
 */
export declare const enum ConstEnum {
    /* Excluded from this release type: BetaMember2 */
    /* Excluded from this release type: AlphaMember */
    /* Excluded from this release type: _InternalMember */
}

/**
 * This is a "beta" namespace.
 * @beta
 */
export declare namespace EntangledNamespace {
    /* Excluded from this release type: N2 *//* Excluded from this release type: N3 */}

/* Excluded from this release type: ExportedAlias */

/* Excluded from this release type: InternalClass */

/* Excluded from this release type: IPublicClassInternalParameters */

/**
 * This is a public class
 * @public
 */
export declare interface IPublicComplexInterface {
    /* Excluded from this release type: __index */
    /* Excluded from this release type: __new */
}

/* Excluded from this release type: Lib1Interface */

/**
 * This is a public class
 * @public
 */
export declare class PublicClass {
    /* Excluded from this release type: __constructor */
    /**
     * This is a beta field
     * @beta
     */
    betaField: string;
    /* Excluded from this release type: undecoratedMember */
    /**
     * This is a beta comment
     * @beta
     */
    betaMember(): void;
    /* Excluded from this release type: alphaMember */
    /* Excluded from this release type: _internalMember */
}

/**
 * This is a regular enum marked as \@beta
 * @beta
 */
export declare enum RegularEnum {
    /* Excluded from this release type: BetaMember */
    /* Excluded from this release type: AlphaMember */
    /* Excluded from this release type: _InternalMember */
}

/**
 * This is a module-scoped variable.
 * @beta
 */
export declare const variableDeclaration: string;

export { }
