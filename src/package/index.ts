import PackageManager, { NpmManager, YarnManager } from "../package_manager";

import Jest from '.';
import TypeScript from '.';

/**
 * 
 * 
 * @class 
 */
class Pipeline {

    packages: Package[];
    

    constructor(packages: Package[]) {
        this.packages = packages;
    }

    /**
     * @param newPackage {Package} A package to be added to the dependencies 
     */
    addPackage(newPackage: Package): void {
        
        // Set interoperabilities
        for (let i = 0; i < this.packages.length; i++) {
            let currentPackage: Package = this.packages[i];
            // currentPackage.interopt(newPackage);
        }

        // Add package to pipeline
        this.packages.push(newPackage);
    }
}


/**
 * Marks a package as a specific type of dependency.
 * 
 * NPM (regular, development)
 * YARN (regular, development, peer, optional)
 * @property {} REG Regular dependency
 * @property {} DEV Development dependency
 * @property {} PEER Peer dependency 
 * @property {} OPT Optional dependency
 * @enum {DependencyType}
 */
enum DependencyType {
    REG, 
    DEV,
    PEER,
    OPT
}


/**
 * Parent package class.
 * Defines Base functionality all packages need to implement.
 * 
 * 
 * @class
 */
abstract class Package {

    private _name: string;
    private _version: string;
    private _depType: DependencyType | null;

    private _definitionPart: {[k: string]: {[k: string]: string}} | {[k: string]: string} | {[k: string]: string[]};

    /**
     * @param name {string} The name of the package 
     * @param version {string} The version of the package
     * @param depType {DependencyType | null} The dependency type
     * @constructor
     */
    constructor(name: string, version: string, depType: DependencyType | null) {
        this._name = name;
        this._version = version;
        this._depType = depType;
        this._definitionPart = {};
    }

    /**
     * Create
     *
     * @returns {object} 
     */
    abstract create(): void;


    /**
     * Add a local dependency defintion to this package.
     * 
     * @param name The name of the dependency
     * @param version 
     */
    addDependency(name: string, version: string, type: DependencyType | null, packageManager: PackageManager) {
        // this._dependencies[name] = version;

        let dependencyTypeKey = packageManager.getDependencyKey(type);

    }



    /**
     * Check Wether the given package implements the compatible interface.
     * @param packageToCheck The package to be checked.
     */
    static isCompatible(packageToCheck: object): packageToCheck is Compatible {
        return "check" in packageToCheck;
    }


    /**
     * Check wether given object implements the configurabel interface.
     * @param packageToCheck The package to be checked.
     */
    static isConfigurable(packageToCheck: object): packageToCheck is Configurable {
        return "getConfig" in packageToCheck;
    }


    /**
     * Check wether given object implements the executeable interface.
     * @param packageToCheck 
     */
    static isExecuteable(packageToCheck: object): packageToCheck is Executeable {
        return "getScripts" in packageToCheck;
    }


    // --------------------
    // Getter/Setter
    // -----------------------

    /**
     * @member {string}
     */
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    /**
     * @member {string}
     */
    get version(): string {
        return this._version;
    }

    set version(version: string) {
        this._version = version;
    }

    /**
     * @member {DependencyType | null}
     */
    get depType(): DependencyType | null {
        return this._depType;
    }

    set depType(depType: DependencyType | null) {
    this._depType = depType;
    }

    /**
     * @member {object}
     */
    get definitionPart(): {[k: string]: {[k: string]: string}} | {[k: string]: string} | {[k: string]: string[]} {
        return this._definitionPart;
    }

    set definitionPart(definitionPart: {[k: string]: {[k: string]: string}} | {[k: string]: string} | {[k: string]: string[]}) {
    this._definitionPart= definitionPart;
    }
}


/**
 * Mark packages that are configureable.
 * Adds possibiltity to add configuration to an package.
 * 
 * @interface
 */
interface Configurable {

    /**
     * @returns The configuration
     * @function
     */
    getConfig(): object;

    /**
     * @param config {object} A package configuration
     * @function
     */
    setConfig(config: object): void;
}

/**
 * Package needs to modify internals to work with other packages.
 * @interface
 */
interface Compatible {
    /** 
     * @param otherPackage {Package} The other package to update configurations to be compatible 
     * @function
     */
    update(otherPackage: Package): void;
}


/**
 * For packages that provide some sort of script definition.
 * To be executed by the package manager.
 * 
 * @interface
 */
interface Executable {
    getScripts(): object;
} 





export default Package;
export {
    Pipeline,
    Package,
    DependencyType,
    Configurable,
    Compatible,
    Executable,

    // Packages
    Jest,
    TypeScript
}