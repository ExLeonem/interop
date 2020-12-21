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
 * @class
 */
abstract class Package {

    private _name: string;
    private _version: string;
    private _depType: DependencyType | null;
    private _dependencies: {[k: string]: string};

    constructor(name: string, version: string, depType: DependencyType | null) {
        this._name = name;
        this._version = version;
        this._depType = depType;
        this._dependencies = {};
    }

    /**
     * Create the dependencies
     */
    abstract create(): void;


    /**
     * Init the dependency sections the package.
     * 
     * @param packageManager The dependency manager to be used.
     */
    initDependencies(packageManager: PackageManager): void {

        if (packageManager instanceof NpmManager) {

        } else if (packageManager instanceof YarnManager) {

        }
    }


    /**
     * 
     * 
     * @param otherPackage Another Package to check
     */
    isCompatible(otherPackage: object): otherPackage is Compatible {
        return "check" in otherPackage;
    }


    /**
     * Add a local dependency defintion to this package.
     * 
     * @param name The name of the dependency
     * @param version 
     */
    addDependency(name: string, version: string, type: DependencyType | null) {
        this._dependencies[name] = version;
    }


    /**
     * -----
     * Getter/Setter
     * ----------------
     */

     getName(): string {
         return this._name;
     }

     setName(name: string): void {
         this._name = name;
     }

     getVersion(): string {
         return this._version;
     }

     setVersion(version: string): void {
         this._version = version;
     }

     getDepType(): DependencyType | null {
         return this._depType;
     }

     setDepType(depType: DependencyType | null): void {
        this._depType = depType;
     }
}


/**
 * Mark packages that are configureable.
 * Adds possibiltity to add configuration to an package.
 * 
 * @interface
 */
interface Configurable {
    getConfig(): object;
    setConfig(config: object): void;
}

/**
 * Package needs to modify internals to work with other packages.
 * 
 * @interface
 */
interface Compatible {
    check(otherPackage: Package, currentConfiguration: object): object;
}


export default Package;
export {
    Pipeline,
    Package,
    DependencyType,
    Configurable,
    Compatible,

    // Packages
    Jest,
    TypeScript
}