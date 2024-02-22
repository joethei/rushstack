/**
 * api-extractor-test-01
 *
 * @remarks
 * This library is consumed by api-extractor-test-02 and api-extractor-test-03.
 * It tests the basic types of definitions, and all the weird cases for following
 * chains of type aliases.
 *
 * @packageDocumentation
 */

/// <reference types="jest" />
/// <reference lib="es2015.symbol.wellknown" />
/// <reference lib="es2018.intl" />

import { default as Long_2 } from 'long';
import { MAX_UNSIGNED_VALUE } from 'long';

/**
 * Example of an abstract class that is directly exported.
 * @public
 */
export declare abstract class AbstractClass {
    /* Excluded from this release type: test */
}

/**
 * Example of an abstract class that is exported separately from its
 * definition.
 *
 * @public
 */
export declare abstract class AbstractClass2 {
    /* Excluded from this release type: test2 */
}

/**
 * Example of an abstract class that is not the default export
 *
 * @public
 */
export declare abstract class AbstractClass3 {
    /* Excluded from this release type: test3 */
}

/**
 * Test different kinds of ambient definitions
 * @public
 */
export declare class AmbientConsumer {
    /* Excluded from this release type: builtinDefinition1 */
    /* Excluded from this release type: builtinDefinition2 */
    /* Excluded from this release type: definitelyTyped */
    /* Excluded from this release type: localTypings */
}

/** @public */
declare namespace ANamespace {
    /* Excluded from this release type: locallyExportedCustomSymbol */
    /** @public */
    const fullyExportedCustomSymbol: unique symbol;
}

/**
 * Referenced by DefaultExportEdgeCaseReferencer.
 * @public
 */
export declare class ClassExportedAsDefault {
}

/**
 * This class gets aliased twice before being exported from the package.
 * @public
 */
export declare class ClassWithAccessModifiers {
    /* Excluded from this release type: _privateField */
    /* Excluded from this release type: privateMethod */
    /* Excluded from this release type: privateGetter */
    /* Excluded from this release type: privateSetter */
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: privateStaticMethod */
    /* Excluded from this release type: protectedField */
    /* Excluded from this release type: protectedGetter */
    /* Excluded from this release type: protectedSetter */
    /* Excluded from this release type: publicStaticField */
    /* Excluded from this release type: defaultPublicMethod */
}

/**
 * @public
 */
export declare class ClassWithSymbols {
    /* Excluded from this release type: [unexportedCustomSymbol] */
    /* Excluded from this release type: [locallyExportedCustomSymbol] */
    /* Excluded from this release type: [fullyExportedCustomSymbol] */
    /* Excluded from this release type: [ANamespace.locallyExportedCustomSymbol] */
    /* Excluded from this release type: [ANamespace.fullyExportedCustomSymbol] */
    /* Excluded from this release type: [Symbol.toStringTag] */
}

/**
 * This class illustrates some cases involving type literals.
 * @public
 */
export declare class ClassWithTypeLiterals {
    /* Excluded from this release type: method1 */
    /* Excluded from this release type: method2 */
}

/**
 * @public
 */
export declare const enum ConstEnum {
    /* Excluded from this release type: Zero */
    /* Excluded from this release type: One */
    /* Excluded from this release type: Two */
}

/**
 * Tests a decorator
 * @public
 */
export declare class DecoratorTest {
    /* Excluded from this release type: test */
}

/**
 * @public
 */
export declare class DefaultExportEdgeCase {
    /* Excluded from this release type: reference */
}

/** @public */
export declare class ForgottenExportConsumer1 {
    /* Excluded from this release type: test1 */
}

/** @public */
export declare class ForgottenExportConsumer2 {
    /* Excluded from this release type: test2 */
}

/* Excluded from this release type: ForgottenExportConsumer3 */

/** @public */
export declare const fullyExportedCustomSymbol: unique symbol;

/* Excluded from this release type: IForgottenDirectDependency */

/* Excluded from this release type: IForgottenExport */

/* Excluded from this release type: IForgottenExport_2 */

/* Excluded from this release type: IForgottenIndirectDependency */

/**
 * This interface is exported as the default export for its source file.
 * @public
 */
export declare interface IInterfaceAsDefaultExport {
    /* Excluded from this release type: member */
}

/* Excluded from this release type: IMergedInterface */

/* Excluded from this release type: IMergedInterfaceReferencee */

/**
 * A simple, normal definition
 * @public
 */
export declare interface ISimpleInterface {
}

/* Excluded from this release type: locallyExportedCustomSymbol */

/* Excluded from this release type: Long_2 */

/* Excluded from this release type: MAX_UNSIGNED_VALUE */

/** @public */
export declare namespace NamespaceContainingVariable {
    /* Excluded from this release type: variable */
}

/**
 * This class gets aliased twice before being exported from the package.
 * @public
 */
export declare class ReexportedClass {
    /* Excluded from this release type: getSelfReference */
    /* Excluded from this release type: getValue */
}

/** @public */
export declare class ReferenceLibDirective extends Intl.PluralRules {
}

/**
 * @public
 */
export declare enum RegularEnum {
    /* Excluded from this release type: Zero */
    /* Excluded from this release type: One */
    /* Excluded from this release type: Two */
}

/**
 * This class has links such as {@link TypeReferencesInAedoc}.
 * @public
 */
export declare class TypeReferencesInAedoc {
    /* Excluded from this release type: getValue */
    /* Excluded from this release type: getValue2 */
    /* Excluded from this release type: getValue3 */
}

/* Excluded from this release type: unexportedCustomSymbol */

/** @public */
export declare class UseLong {
    /* Excluded from this release type: use_long */
}

/* Excluded from this release type: VARIABLE */

/**
 * Example decorator
 * @public
 */
export declare function virtual(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): void;

export { }
