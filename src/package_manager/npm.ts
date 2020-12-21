import PackageManager, { PackageInitOptions } from './';
import Package, { DependencyType } from '../package';

/**
 * Common functions to build a project template
 * using npm as a package manager.
 * 
 * @class 
 */
class NpmManager extends PackageManager {

    private _packageDefinition: object;
    

    /**
     * @param name {string} The name of the new project
     * @param author {string} The author of the new project
     */
    constructor(name: string, author: string) {
        super("npm");
        this._packageDefinition = this.createBaseDefinition(name, author);
    }

    /**
     * Update the npm package definitions.
     * 
     * @param singlePackage The package to be added to the project template
     */
    update(singlePackage: Package): void {

        if (Package.isCompatible(singlePackage)) {
            // Check/update compatible issues
        }

        if (Package.isConfigurable(singlePackage)) {
            // Get configuration for this specific package
        }

        if (Package.isExecuteable(singlePackage)) {
            // Update executeable scripts
        }

    }

    createProjectDefinition(packages: Package[]) {

        let initialPackageDefinition = {}
        packages.forEach(singlePackage => {

        });
    }

    createPackageDefinition(): object {
        
        return {};
    }


    /**
     * Install NPM dependencies using npm package manager.
     * 
     * @param path to the package.json
     */
    install(path: string): void {

    }


    getDependencyKey(type: DependencyType | null): string {

        let dependencyKey = "dependencies";
        switch(type) {

        }

        return dependencyKey;
    }


    /**
     * Create a base package definition file.
     * 
     * @param name {string} 
     * @param author {string}
     * @return {object} The base configuration of the package
     */
    private createBaseDefinition(name: string, author: string): object {
        return {
            "name": name,
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "start": "npm run",
                "test": ""
            },
            "keywords": [],
            "author": author,
            "licence": "MIT"
        }
    }


    // ---------------
    // Getter/Setter
    // --------------------
}


interface NpmPackageOptions extends PackageInitOptions {
    name: string;
    author: string;
    keywords: string;
    licence: string;
    repository: string;
    main: string;
}



export default NpmManager;
export {
    NpmPackageOptions
}