import Package, { DependencyType } from "../package";
import NpmManager from '.';
import YarnManager from '.';


/**
 * Defines base package manager functionality.
 * 
 * 
 * @class
 */
abstract class PackageManager {
    private command: string;
    private version: string;

    /**
     * @param command {string} Base command name for this package manager.
     * @constructor
     */
    constructor(command: string) {
        this.command = command;
        this.version = "";
    }

    /**
     * Update the package defintions with locale definitions of package.
     * 
     * @param singlePackage The package to use to update the package definition.
     */
    abstract update(singlePackage: Package): void;

    /**
     * Install dependencies with a specific package manager.
     * @param path The path to the package defintion file
     */
    abstract install(path: string): void;


    /**
     * Map the different dependency types to an object key.
     * @param type The depency typ
     * @returns {string} The key for the dependency section
     */
    abstract getDependencyKey(type: DependencyType | null): string;


    /**
     * Check wether the package manager is available/installed
     * and in path of the current system.
     *
     * @returns {boolean} true if in system else false
     */
    isAvailable(): boolean {

        return false;
    }


    /**
     * Execute the installation command of the package manager.
     */
    private executeInstall(): void {

    }
}

/**
 * @property NPM 
 * @property YARN
 * @enum
 */
enum PackageManagerType {
    NPM,
    YARN
}


/**
 * Base package initialization options
 */
interface PackageInitOptions {
    /**
     * Return the package options.
     * 
     * @returns {object} The package definition.
     * @function
     */
    getOptions(): object

    /**
     * 
     * @param options {object} A number of initial options to be merged into the base package definition
     * @function
     */
    setOptions(options: object): void;
}




export default PackageManager;
export {
    YarnManager,
    NpmManager,
    PackageManagerType,
    PackageInitOptions
}