import Package from "../package";
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
    private packages: {[k: string]: Package};


    /**
     * @param command {string} Base command name for this package manager.
     * @constructor
     */
    constructor(command: string) {
        this.command = command;
        this.version = "";
        this.packages = {};
    }

    abstract createPackageDefinition(): object; // Create project definition
    abstract installDependencies(path: string): void;

    /**
     * Add a new package to the package manager dependencies.
     * 
     * @param pack Package to be added to the dependencies.
     */
    addPackage(pack: Package): void {

        let packageName: string = pack.getName();
        let packages = Object.keys(this.packages);
        if (!packages.includes(packageName)) {
            this.packages[packageName] = pack;
        }
    }


    /**
     * Check wether the package manager is available/installed
     * and in path of the current system.
     *
     * @returns true if in system else false
     */
    isAvailable(): boolean {

        return false;
    }


    createBaseDefinition(name: string, author: string) {

    }
}


export default PackageManager;
export {
    YarnManager,
    NpmManager
}