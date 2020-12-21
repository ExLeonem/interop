import PackageManager from './';
import Package from '../package';

/**
 * NPM Package Manager.
 * 
 * @class 
 */
class NpmManager extends PackageManager {

    private _packageDefinition: object;
    

    /**
     * 
     * @param name {string} 
     * @param author {string}
     */
    constructor(name: string, author: string) {
        super("npm");
        this._packageDefinition = this.getBaseDefinition(name, author);
        //this.createProjectDefinition(packages);
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
     * Install all dependencies for project at given path.
     * 
     * @param path 
     */
    installDependencies(path: string): void {

    }

    

    /**
     * Create a base package definition file.
     * 
     * @param name {string} 
     * @param author {string}
     * @return {object} The base configuration of the package
     */
    private getBaseDefinition(name: string, author: string): object {
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
}
