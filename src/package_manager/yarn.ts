import PackageManager, { PackageInitOptions } from '.';
import Package, { DependencyType } from '../package';

/**
 * Manage and keep package information for yarn projects.
 * Yarn package manager.In essence a direvative of npm. Works with package.json like npm.
 * 
 * @class
 */
class YarnManager extends PackageManager {


    /**
     * 
     * @param packages 
     * @constructor
     */
    constructor() {
        super("yarn");
    }

    
    update(yarnPackage: Package) {

    }

    /**
     * Execute 
     */
    install() {

    }


    /**
     * Get the object key for a specific dependency type.
     * 
     * @param type The type for which to get depency section key
     * @returns {string} The key to be used for the specific dependency type.
     */
    getDependencyKey(type: DependencyType | null): string {
        
        let dependencyKey = "dependencies";
        switch (type) {
            case DependencyType.REG: {
                dependencyKey = "dependencies";
                break;
            }
            case DependencyType.DEV: {
                dependencyKey = "devDependencies";
                break;
            }
            case DependencyType.PEER: {
                dependencyKey = "peerDependencies";
                break;
            }
            case DependencyType.OPT: {
                dependencyKey = "optionalDependencies";
                break;
            }
            default: {
                // Throw an exception
                throw "Can't get a key for dependency of type: " + type;
            }
        }

        return dependencyKey;
    }

    

    private getBaseDefinition(name: string, author: string) {
        return {
            "name": "",
            "author": "",
            "licence": ""

        };
    }
}


interface YarnPackageOptions extends PackageInitOptions {
    name: string;
    author: string;
    keywords: string;
    licence: string;
    repository: string;
    main: string;
}



export default YarnManager;
export {
    YarnPackageOptions
}