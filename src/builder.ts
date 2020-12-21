import PackageManager from "./package_manager";
import Package, { Pipeline } from "./package";


class Configuration {

    private directories: string[];
    private files: object[];

    constructor(directories: string[]) {
        this.directories = directories;
        this.files = [];
    }

}


/**
 * Handle template project creation.
 * Top-level class.
 * 
 * @class
 */
class ProjectTemplate {

    private _packageManager: PackageManager;
    private _packages: Package[];
    private _directoryStructure: object;

    /**
     * @param packageManager The package manager to be used for the project configuration 
     * @param packages The packages to be used for the project template
     * @constructor
     */
    constructor(packageManager: PackageManager, packages: Package[]) {
        this._packageManager = packageManager;
        this._packages = packages;
        this._directoryStructure = {};
    }


    /**
     * Create the project template.
     */
    create(): void {

        let iterated: Package[] = [];
        let iteration: Pipeline = new Pipeline([]);
        let baseConfig: object = this._packageManager
        this._packages.forEach(singlePackage => {

            
        });
    }


    static build(packageManager: PackageManager, packages: Package[]) {

        let iterated: Package[] = [];
        
        packages.forEach(singlePackage => {
            packageManager.addPackage(singlePackage);
        });
    }
}



export default ProjectTemplate;
export {
    ProjectTemplate,
    // Project
}

